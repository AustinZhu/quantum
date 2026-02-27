package okx

import (
	"context"
	"encoding/json"
	"log/slog"
	"net/http"
	"net/url"
	"slices"
	"sort"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/gorilla/websocket"
	"github.com/samber/lo"
	"github.com/samber/oops"
)

const (
	defaultRESTBaseURL    = "https://www.okx.com"
	defaultWSPublicURL    = "wss://ws.okx.com:8443/ws/v5/public"
	defaultWSBusinessURL  = "wss://ws.okx.com:8443/ws/v5/business"
	defaultHTTPTimeout    = 10 * time.Second
	defaultSymbolCacheTTL = 30 * time.Second
	okxSuccessCode        = "0"
	maxHistoryPageSize    = 100
)

type Config struct {
	RESTBaseURL     string
	WSPublicURL     string
	WSBusinessURL   string
	InstrumentTypes []string
	HTTPTimeout     time.Duration
	SymbolCacheTTL  time.Duration
	Logger          *slog.Logger
}

type Symbol struct {
	InstrumentType   string
	ID               string
	BaseCurrency     string
	QuoteCurrency    string
	SettleCurrency   string
	State            string
	TickSize         string
	LotSize          string
	MinSize          string
	ContractValue    string
	ContractMult     string
	Underlying       string
	InstrumentFamily string
}

type Candle struct {
	TsMS      int64
	Open      float64
	High      float64
	Low       float64
	Close     float64
	Volume    float64
	Confirmed bool
}

type Ticker struct {
	Symbol      string
	TsMS        int64
	LastPrice   float64
	LastSize    float64
	BidPrice    float64
	AskPrice    float64
	Open24h     float64
	High24h     float64
	Low24h      float64
	Volume24h   float64
	VolumeCcy24 float64
}

type Client struct {
	cfg        Config
	httpClient *http.Client
	dialer     websocket.Dialer
	logger     *slog.Logger

	mu              sync.RWMutex
	cachedSymbols   []Symbol
	cachedSymbolsAt time.Time
}

func NewClient(cfg Config) *Client {
	normalized := normalizeConfig(cfg)
	return &Client{
		cfg: normalized,
		httpClient: &http.Client{
			Timeout: normalized.HTTPTimeout,
		},
		dialer: websocket.Dialer{
			HandshakeTimeout: normalized.HTTPTimeout,
		},
		logger: normalized.Logger.With("component", "okx-adapter"),
	}
}

func (c *Client) ListSymbols(ctx context.Context) ([]Symbol, error) {
	c.mu.RLock()
	if time.Since(c.cachedSymbolsAt) < c.cfg.SymbolCacheTTL && len(c.cachedSymbols) > 0 {
		cached := slices.Clone(c.cachedSymbols)
		c.mu.RUnlock()
		return cached, nil
	}
	c.mu.RUnlock()

	all := make([]Symbol, 0, 256)
	for _, instType := range c.cfg.InstrumentTypes {
		items, err := c.fetchInstruments(ctx, instType)
		if err != nil {
			return nil, oops.Wrapf(err, "list symbols for instType=%s", instType)
		}
		all = append(all, items...)
	}
	all = lo.UniqBy(all, func(item Symbol) string { return strings.ToUpper(item.ID) })

	sort.Slice(all, func(i, j int) bool {
		return strings.ToUpper(all[i].ID) < strings.ToUpper(all[j].ID)
	})

	c.mu.Lock()
	c.cachedSymbols = slices.Clone(all)
	c.cachedSymbolsAt = time.Now()
	c.mu.Unlock()

	return all, nil
}

func (c *Client) GetHistoryCandles(
	ctx context.Context,
	symbol string,
	resolution string,
	fromSec int64,
	toSec int64,
	countback uint32,
) ([]Candle, error) {
	bar, err := resolutionToOKXBar(resolution)
	if err != nil {
		return nil, oops.Wrapf(err, "resolve bar interval")
	}
	if strings.TrimSpace(symbol) == "" {
		return nil, oops.Errorf("symbol is required")
	}

	toMS := toSec * 1000
	if toMS == 0 {
		toMS = time.Now().UnixMilli()
	}
	fromMS := fromSec * 1000

	remaining := int(countback)
	if remaining <= 0 {
		remaining = 500
	}
	if remaining > 5000 {
		remaining = 5000
	}

	afterCursor := int64(0)
	beforeCursor := toMS
	collected := make([]Candle, 0, remaining)
	seen := make(map[int64]struct{})

	for len(collected) < remaining {
		limit := min(maxHistoryPageSize, remaining-len(collected))
		page, err := c.fetchHistoryCandlesPage(ctx, symbol, bar, afterCursor, beforeCursor, limit)
		if err != nil {
			return nil, oops.Wrapf(err, "fetch history page symbol=%s bar=%s", symbol, bar)
		}
		if len(page) == 0 {
			break
		}

		minTS := page[0].TsMS
		for _, item := range page {
			if item.TsMS < minTS {
				minTS = item.TsMS
			}
			if item.TsMS > toMS {
				continue
			}
			if fromMS > 0 && item.TsMS < fromMS {
				continue
			}
			if _, exists := seen[item.TsMS]; exists {
				continue
			}
			seen[item.TsMS] = struct{}{}
			collected = append(collected, item)
		}

		if len(page) < limit {
			break
		}
		if fromMS > 0 && minTS <= fromMS {
			break
		}
		afterCursor = minTS
		beforeCursor = 0
	}

	sort.Slice(collected, func(i, j int) bool {
		return collected[i].TsMS < collected[j].TsMS
	})
	if len(collected) > remaining {
		collected = collected[len(collected)-remaining:]
	}
	return collected, nil
}

func (c *Client) GetTickers(ctx context.Context, symbols []string) ([]Ticker, error) {
	trimmed := lo.FilterMap(symbols, func(symbol string, _ int) (string, bool) {
		value := strings.TrimSpace(symbol)
		return value, value != ""
	})
	if len(trimmed) == 0 {
		return nil, nil
	}

	out := make([]Ticker, 0, len(trimmed))
	for _, symbol := range trimmed {
		item, err := c.fetchTicker(ctx, symbol)
		if err != nil {
			return nil, oops.Wrapf(err, "get ticker %s", symbol)
		}
		out = append(out, item)
	}
	return out, nil
}

func (c *Client) SubscribeBars(
	ctx context.Context,
	symbol string,
	resolution string,
) (<-chan Candle, <-chan error, error) {
	bar, err := resolutionToOKXBar(resolution)
	if err != nil {
		return nil, nil, oops.Wrapf(err, "resolve bar interval")
	}
	channel := "candle" + bar
	out := make(chan Candle, 64)
	errs := make(chan error, 1)

	conn, err := c.openWS(ctx, c.cfg.WSBusinessURL)
	if err != nil {
		return nil, nil, oops.Wrapf(err, "open OKX business websocket")
	}
	if err := c.writeSubscribe(conn, channel, symbol); err != nil {
		_ = conn.Close()
		return nil, nil, oops.Wrapf(err, "subscribe bars channel")
	}

	go c.readBars(ctx, conn, symbol, out, errs)
	return out, errs, nil
}

func (c *Client) SubscribeTicks(ctx context.Context, symbol string) (<-chan Ticker, <-chan error, error) {
	out := make(chan Ticker, 64)
	errs := make(chan error, 1)

	conn, err := c.openWS(ctx, c.cfg.WSPublicURL)
	if err != nil {
		return nil, nil, oops.Wrapf(err, "open OKX public websocket")
	}
	if err := c.writeSubscribe(conn, "tickers", symbol); err != nil {
		_ = conn.Close()
		return nil, nil, oops.Wrapf(err, "subscribe tickers channel")
	}

	go c.readTickers(ctx, conn, symbol, out, errs)
	return out, errs, nil
}

type okxEnvelope[T any] struct {
	Code string `json:"code"`
	Msg  string `json:"msg"`
	Data []T    `json:"data"`
}

type okxInstrument struct {
	InstType   string `json:"instType"`
	InstID     string `json:"instId"`
	BaseCcy    string `json:"baseCcy"`
	QuoteCcy   string `json:"quoteCcy"`
	SettleCcy  string `json:"settleCcy"`
	State      string `json:"state"`
	TickSz     string `json:"tickSz"`
	LotSz      string `json:"lotSz"`
	MinSz      string `json:"minSz"`
	CtVal      string `json:"ctVal"`
	CtMult     string `json:"ctMult"`
	Uly        string `json:"uly"`
	InstFamily string `json:"instFamily"`
}

type okxTicker struct {
	InstID    string `json:"instId"`
	Last      string `json:"last"`
	LastSz    string `json:"lastSz"`
	AskPx     string `json:"askPx"`
	BidPx     string `json:"bidPx"`
	Open24h   string `json:"open24h"`
	High24h   string `json:"high24h"`
	Low24h    string `json:"low24h"`
	Vol24h    string `json:"vol24h"`
	VolCcy24h string `json:"volCcy24h"`
	Ts        string `json:"ts"`
}

func (c *Client) fetchInstruments(ctx context.Context, instType string) ([]Symbol, error) {
	params := url.Values{}
	params.Set("instType", strings.ToUpper(strings.TrimSpace(instType)))

	var envelope okxEnvelope[okxInstrument]
	if err := c.getJSON(ctx, "/api/v5/public/instruments", params, &envelope); err != nil {
		return nil, oops.Wrapf(err, "request OKX instruments")
	}
	if envelope.Code != okxSuccessCode {
		return nil, oops.Errorf("okx public instruments failed: code=%s msg=%s", envelope.Code, envelope.Msg)
	}

	return lo.Map(envelope.Data, func(item okxInstrument, _ int) Symbol {
		return Symbol{
			InstrumentType:   item.InstType,
			ID:               item.InstID,
			BaseCurrency:     item.BaseCcy,
			QuoteCurrency:    item.QuoteCcy,
			SettleCurrency:   item.SettleCcy,
			State:            item.State,
			TickSize:         item.TickSz,
			LotSize:          item.LotSz,
			MinSize:          item.MinSz,
			ContractValue:    item.CtVal,
			ContractMult:     item.CtMult,
			Underlying:       item.Uly,
			InstrumentFamily: item.InstFamily,
		}
	}), nil
}

func (c *Client) fetchTicker(ctx context.Context, symbol string) (Ticker, error) {
	if symbol == "" {
		return Ticker{}, oops.Errorf("symbol is required")
	}
	params := url.Values{}
	params.Set("instId", symbol)

	var envelope okxEnvelope[okxTicker]
	if err := c.getJSON(ctx, "/api/v5/market/ticker", params, &envelope); err != nil {
		return Ticker{}, oops.Wrapf(err, "request OKX ticker")
	}
	if envelope.Code != okxSuccessCode {
		return Ticker{}, oops.Errorf("okx ticker failed: code=%s msg=%s", envelope.Code, envelope.Msg)
	}
	if len(envelope.Data) == 0 {
		return Ticker{}, oops.Errorf("okx ticker returned no data for %s", symbol)
	}
	return mapTicker(envelope.Data[0]), nil
}

func (c *Client) fetchHistoryCandlesPage(
	ctx context.Context,
	symbol string,
	bar string,
	after int64,
	before int64,
	limit int,
) ([]Candle, error) {
	params := url.Values{}
	params.Set("instId", symbol)
	params.Set("bar", bar)
	params.Set("limit", strconv.Itoa(limit))
	if after > 0 {
		params.Set("after", strconv.FormatInt(after, 10))
	}
	if before > 0 {
		params.Set("before", strconv.FormatInt(before, 10))
	}

	var envelope okxEnvelope[[]string]
	if err := c.getJSON(ctx, "/api/v5/market/history-candles", params, &envelope); err != nil {
		return nil, oops.Wrapf(err, "request OKX history candles")
	}
	if envelope.Code != okxSuccessCode {
		return nil, oops.Errorf("okx history candles failed: code=%s msg=%s", envelope.Code, envelope.Msg)
	}

	out := make([]Candle, 0, len(envelope.Data))
	for _, row := range envelope.Data {
		candle, err := parseCandleRow(row)
		if err != nil {
			return nil, oops.Wrapf(err, "parse OKX history candle")
		}
		out = append(out, candle)
	}
	return out, nil
}

func (c *Client) getJSON(ctx context.Context, path string, query url.Values, out any) error {
	base := strings.TrimRight(c.cfg.RESTBaseURL, "/")
	u, err := url.Parse(base + path)
	if err != nil {
		return oops.Wrapf(err, "parse request URL")
	}
	if query != nil {
		u.RawQuery = query.Encode()
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, u.String(), nil)
	if err != nil {
		return oops.Wrapf(err, "create request")
	}
	req.Header.Set("Accept", "application/json")

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return oops.Wrapf(err, "perform request")
	}
	defer resp.Body.Close()

	if resp.StatusCode >= http.StatusBadRequest {
		return oops.Errorf("okx request failed: status=%d path=%s", resp.StatusCode, path)
	}
	if err := json.NewDecoder(resp.Body).Decode(out); err != nil {
		return oops.Wrapf(err, "decode response")
	}
	return nil
}

func (c *Client) openWS(ctx context.Context, endpoint string) (*websocket.Conn, error) {
	conn, _, err := c.dialer.DialContext(ctx, endpoint, nil)
	if err != nil {
		return nil, oops.Wrapf(err, "dial websocket endpoint=%s", endpoint)
	}
	go func() {
		<-ctx.Done()
		_ = conn.Close()
	}()
	return conn, nil
}

func (c *Client) writeSubscribe(conn *websocket.Conn, channel string, symbol string) error {
	payload := map[string]any{
		"op": "subscribe",
		"args": []map[string]string{
			{
				"channel": channel,
				"instId":  symbol,
			},
		},
	}
	if err := conn.WriteJSON(payload); err != nil {
		return oops.Wrapf(err, "write subscribe message channel=%s symbol=%s", channel, symbol)
	}
	return nil
}

type okxWSEnvelope struct {
	Event string            `json:"event"`
	Code  string            `json:"code"`
	Msg   string            `json:"msg"`
	Arg   map[string]string `json:"arg"`
	Data  []json.RawMessage `json:"data"`
}

func (c *Client) readBars(
	ctx context.Context,
	conn *websocket.Conn,
	symbol string,
	out chan<- Candle,
	errs chan<- error,
) {
	defer close(out)
	defer close(errs)
	defer conn.Close()

	for {
		if ctx.Err() != nil {
			return
		}
		_, payload, err := conn.ReadMessage()
		if err != nil {
			if ctx.Err() == nil {
				errs <- oops.Wrapf(err, "read bars websocket message")
			}
			return
		}

		var envelope okxWSEnvelope
		if err := json.Unmarshal(payload, &envelope); err != nil {
			c.logger.Debug("drop websocket bar message: decode envelope failed", "error", err)
			continue
		}
		if envelope.Event != "" {
			if envelope.Event == "error" {
				errs <- oops.Errorf("okx ws error: code=%s msg=%s", envelope.Code, envelope.Msg)
				return
			}
			continue
		}
		if envelope.Arg["instId"] != symbol {
			continue
		}

		for _, raw := range envelope.Data {
			var row []string
			if err := json.Unmarshal(raw, &row); err != nil {
				c.logger.Debug("drop websocket bar message: decode row failed", "error", err)
				continue
			}
			candle, err := parseCandleRow(row)
			if err != nil {
				c.logger.Debug("drop websocket bar message: parse candle failed", "error", err)
				continue
			}
			select {
			case out <- candle:
			case <-ctx.Done():
				return
			}
		}
	}
}

func (c *Client) readTickers(
	ctx context.Context,
	conn *websocket.Conn,
	symbol string,
	out chan<- Ticker,
	errs chan<- error,
) {
	defer close(out)
	defer close(errs)
	defer conn.Close()

	for {
		if ctx.Err() != nil {
			return
		}
		_, payload, err := conn.ReadMessage()
		if err != nil {
			if ctx.Err() == nil {
				errs <- oops.Wrapf(err, "read tickers websocket message")
			}
			return
		}

		var envelope okxWSEnvelope
		if err := json.Unmarshal(payload, &envelope); err != nil {
			c.logger.Debug("drop websocket ticker message: decode envelope failed", "error", err)
			continue
		}
		if envelope.Event != "" {
			if envelope.Event == "error" {
				errs <- oops.Errorf("okx ws error: code=%s msg=%s", envelope.Code, envelope.Msg)
				return
			}
			continue
		}
		if envelope.Arg["instId"] != symbol {
			continue
		}

		for _, raw := range envelope.Data {
			var item okxTicker
			if err := json.Unmarshal(raw, &item); err != nil {
				c.logger.Debug("drop websocket ticker message: decode ticker failed", "error", err)
				continue
			}
			ticker := mapTicker(item)
			select {
			case out <- ticker:
			case <-ctx.Done():
				return
			}
		}
	}
}

func mapTicker(item okxTicker) Ticker {
	return Ticker{
		Symbol:      item.InstID,
		TsMS:        parseInt64(item.Ts),
		LastPrice:   parseFloat64(item.Last),
		LastSize:    parseFloat64(item.LastSz),
		BidPrice:    parseFloat64(item.BidPx),
		AskPrice:    parseFloat64(item.AskPx),
		Open24h:     parseFloat64(item.Open24h),
		High24h:     parseFloat64(item.High24h),
		Low24h:      parseFloat64(item.Low24h),
		Volume24h:   parseFloat64(item.Vol24h),
		VolumeCcy24: parseFloat64(item.VolCcy24h),
	}
}

func parseCandleRow(row []string) (Candle, error) {
	if len(row) < 6 {
		return Candle{}, oops.Errorf("invalid okx candle row size: %d", len(row))
	}
	confirmed := false
	if len(row) >= 9 {
		confirmed = row[8] == "1"
	}
	return Candle{
		TsMS:      parseInt64(row[0]),
		Open:      parseFloat64(row[1]),
		High:      parseFloat64(row[2]),
		Low:       parseFloat64(row[3]),
		Close:     parseFloat64(row[4]),
		Volume:    parseFloat64(row[5]),
		Confirmed: confirmed,
	}, nil
}

func normalizeConfig(cfg Config) Config {
	if strings.TrimSpace(cfg.RESTBaseURL) == "" {
		cfg.RESTBaseURL = defaultRESTBaseURL
	}
	if strings.TrimSpace(cfg.WSPublicURL) == "" {
		cfg.WSPublicURL = defaultWSPublicURL
	}
	if strings.TrimSpace(cfg.WSBusinessURL) == "" {
		cfg.WSBusinessURL = defaultWSBusinessURL
	}
	if cfg.HTTPTimeout <= 0 {
		cfg.HTTPTimeout = defaultHTTPTimeout
	}
	if cfg.SymbolCacheTTL <= 0 {
		cfg.SymbolCacheTTL = defaultSymbolCacheTTL
	}
	if cfg.Logger == nil {
		cfg.Logger = slog.Default()
	}
	if len(cfg.InstrumentTypes) == 0 {
		cfg.InstrumentTypes = []string{"SPOT"}
	}
	normalized := lo.FilterMap(cfg.InstrumentTypes, func(item string, _ int) (string, bool) {
		value := strings.ToUpper(strings.TrimSpace(item))
		return value, value != ""
	})
	if len(normalized) == 0 {
		normalized = []string{"SPOT"}
	}
	cfg.InstrumentTypes = normalized
	return cfg
}

func resolutionToOKXBar(resolution string) (string, error) {
	value := strings.TrimSpace(strings.ToUpper(resolution))
	if value == "" {
		return "", oops.Errorf("resolution is required")
	}

	switch value {
	case "1":
		return "1m", nil
	case "3":
		return "3m", nil
	case "5":
		return "5m", nil
	case "15":
		return "15m", nil
	case "30":
		return "30m", nil
	case "60":
		return "1H", nil
	case "120":
		return "2H", nil
	case "240":
		return "4H", nil
	case "360":
		return "6H", nil
	case "720":
		return "12H", nil
	case "D", "1D":
		return "1D", nil
	case "W", "1W":
		return "1W", nil
	case "M", "1M", "MO", "MON", "MONTH", "MTH", "1MO", "1MON", "1MONTH", "1MTH":
		return "1M", nil
	default:
		return "", oops.Errorf("unsupported resolution: %s", resolution)
	}
}

func parseFloat64(raw string) float64 {
	value, err := strconv.ParseFloat(raw, 64)
	if err != nil {
		return 0
	}
	return value
}

func parseInt64(raw string) int64 {
	value, err := strconv.ParseInt(raw, 10, 64)
	if err != nil {
		return 0
	}
	return value
}
