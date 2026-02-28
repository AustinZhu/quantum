package service

import (
	"context"
	"errors"
	"math"
	"sort"
	"strings"
	"time"

	connectrpc "connectrpc.com/connect"
	datafeedv1 "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1"
	datafeedv1connect "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1/datafeedv1connect"
	contentbiz "github.com/AustinZhu/quantum/datafeed/internal/modules/content/biz"
	ingestionbiz "github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/biz"
	ingestionsvc "github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/service"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/biz"
	"github.com/samber/lo"
	"github.com/samber/oops"
	"google.golang.org/protobuf/types/known/structpb"
)

type DatafeedHandler struct {
	datafeedv1connect.UnimplementedDatafeedServiceHandler
	ingestion *ingestionbiz.Service
	market    *biz.Service
	content   *contentbiz.Service
}

func NewDatafeedHandler(ingestion *ingestionbiz.Service, market *biz.Service, content *contentbiz.Service) *DatafeedHandler {
	return &DatafeedHandler{ingestion: ingestion, market: market, content: content}
}

func (h *DatafeedHandler) IngestTicks(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.IngestTicksRequest],
) (*connectrpc.Response[datafeedv1.IngestTicksResponse], error) {
	inserted, err := h.ingestion.IngestTicks(ctx, ingestionsvc.TicksFromProto(req.Msg.GetTicks()))
	if err != nil {
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "ingest ticks"))
	}
	return connectrpc.NewResponse(&datafeedv1.IngestTicksResponse{Inserted: uint32(inserted)}), nil
}

func (h *DatafeedHandler) ReplayTicks(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.ReplayTicksRequest],
) (*connectrpc.Response[datafeedv1.ReplayTicksResponse], error) {
	limit := int32(req.Msg.GetLimit())
	if limit <= 0 {
		limit = 500
	}
	items, err := h.market.ReplayTicks(ctx, req.Msg.GetSymbol(), req.Msg.GetStartTsMs(), req.Msg.GetEndTsMs(), limit)
	if err != nil {
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "replay ticks"))
	}
	out := lo.Map(items, func(item biz.Tick, _ int) *datafeedv1.Tick {
		return &datafeedv1.Tick{
			Symbol: item.Symbol,
			TsMs:   item.TsMS,
			Price:  item.Price,
			Size:   item.Size,
			Source: item.Source,
		}
	})
	return connectrpc.NewResponse(&datafeedv1.ReplayTicksResponse{Ticks: out}), nil
}

func (h *DatafeedHandler) QueryBars(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.QueryBarsRequest],
) (*connectrpc.Response[datafeedv1.QueryBarsResponse], error) {
	limit := int32(req.Msg.GetLimit())
	if limit <= 0 {
		limit = 500
	}
	items, err := h.market.QueryBars(ctx, req.Msg.GetSymbol(), req.Msg.GetInterval(), req.Msg.GetStartTsMs(), req.Msg.GetEndTsMs(), limit)
	if err != nil {
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "query bars"))
	}
	out := lo.Map(items, func(item biz.Bar, _ int) *datafeedv1.Bar {
		return &datafeedv1.Bar{
			Symbol:   item.Symbol,
			Interval: item.Interval,
			TsMs:     item.TsMS,
			Open:     item.Open,
			High:     item.High,
			Low:      item.Low,
			Close:    item.Close,
			Volume:   item.Volume,
		}
	})
	return connectrpc.NewResponse(&datafeedv1.QueryBarsResponse{Bars: out}), nil
}

func (h *DatafeedHandler) ListNews(
	context.Context,
	*connectrpc.Request[datafeedv1.ListNewsRequest],
) (*connectrpc.Response[datafeedv1.ListNewsResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.ListNewsResponse{Items: nil}), nil
}

func (h *DatafeedHandler) ListSocial(
	context.Context,
	*connectrpc.Request[datafeedv1.ListSocialRequest],
) (*connectrpc.Response[datafeedv1.ListSocialResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.ListSocialResponse{Items: nil}), nil
}

func (h *DatafeedHandler) GetConfig(
	context.Context,
	*connectrpc.Request[datafeedv1.GetConfigRequest],
) (*connectrpc.Response[datafeedv1.GetConfigResponse], error) {
	return connectrpc.NewResponse(buildConfigResponse()), nil
}

func (h *DatafeedHandler) GetTime(
	context.Context,
	*connectrpc.Request[datafeedv1.GetTimeRequest],
) (*connectrpc.Response[datafeedv1.GetTimeResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.GetTimeResponse{UnixTime: time.Now().Unix()}), nil
}

func (h *DatafeedHandler) GetBars(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.GetBarsRequest],
) (*connectrpc.Response[datafeedv1.GetBarsResponse], error) {
	countBack := req.Msg.GetCountBack()
	if countBack < 2 {
		countBack = 2
	}
	candles, err := h.market.GetMarketHistory(ctx, req.Msg.GetSymbol(), req.Msg.GetResolution(), req.Msg.GetFrom(), req.Msg.GetTo(), countBack)
	if err != nil {
		if errors.Is(err, biz.ErrMarketProviderUnavailable) {
			return nil, connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "get bars"))
	}
	if len(candles) == 0 {
		return connectrpc.NewResponse(&datafeedv1.GetBarsResponse{NoData: true, NextTime: lo.ToPtr(req.Msg.GetFrom() * 1000)}), nil
	}
	bars := lo.Map(candles, func(item biz.Candle, _ int) *datafeedv1.ChartBar {
		return &datafeedv1.ChartBar{
			Time:   item.TsMS,
			Open:   item.Open,
			High:   item.High,
			Low:    item.Low,
			Close:  item.Close,
			Volume: lo.ToPtr(item.Volume),
		}
	})
	return connectrpc.NewResponse(&datafeedv1.GetBarsResponse{Bars: bars, NoData: false}), nil
}

func (h *DatafeedHandler) GetHistory(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.GetHistoryRequest],
) (*connectrpc.Response[datafeedv1.GetHistoryResponse], error) {
	candles, err := h.market.GetMarketHistory(ctx, req.Msg.GetSymbol(), req.Msg.GetResolution(), req.Msg.GetFrom(), req.Msg.GetTo(), req.Msg.GetCountback())
	if err != nil {
		if errors.Is(err, biz.ErrMarketProviderUnavailable) {
			return nil, connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return connectrpc.NewResponse(&datafeedv1.GetHistoryResponse{
			Result: &datafeedv1.GetHistoryResponse_Error{Error: &datafeedv1.GetHistoryError{Errmsg: oops.Wrapf(err, "get history").Error()}},
		}), nil
	}
	if len(candles) == 0 {
		return connectrpc.NewResponse(&datafeedv1.GetHistoryResponse{
			Result: &datafeedv1.GetHistoryResponse_NoData{NoData: &datafeedv1.GetHistoryNoData{NextTime: lo.ToPtr(req.Msg.GetFrom())}},
		}), nil
	}
	t := make([]int64, 0, len(candles))
	o := make([]float64, 0, len(candles))
	hh := make([]float64, 0, len(candles))
	l := make([]float64, 0, len(candles))
	c := make([]float64, 0, len(candles))
	v := make([]float64, 0, len(candles))
	for _, item := range candles {
		t = append(t, item.TsMS/1000)
		o = append(o, item.Open)
		hh = append(hh, item.High)
		l = append(l, item.Low)
		c = append(c, item.Close)
		v = append(v, item.Volume)
	}
	return connectrpc.NewResponse(&datafeedv1.GetHistoryResponse{
		Result: &datafeedv1.GetHistoryResponse_Ok{Ok: &datafeedv1.GetHistoryOk{T: t, O: o, H: hh, L: l, C: c, V: v}},
	}), nil
}

func (h *DatafeedHandler) GetQuotes(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.GetQuotesRequest],
) (*connectrpc.Response[datafeedv1.GetQuotesResponse], error) {
	symbols := splitCommaDelimited(req.Msg.GetSymbols())
	if len(symbols) == 0 {
		return connectrpc.NewResponse(&datafeedv1.GetQuotesResponse{Result: &datafeedv1.GetQuotesResponse_Error{Error: &datafeedv1.GetQuotesError{Errmsg: "symbols is required"}}}), nil
	}
	tickers, err := h.market.GetMarketTickers(ctx, symbols)
	if err != nil {
		if errors.Is(err, biz.ErrMarketProviderUnavailable) {
			return nil, connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return connectrpc.NewResponse(&datafeedv1.GetQuotesResponse{Result: &datafeedv1.GetQuotesResponse_Error{Error: &datafeedv1.GetQuotesError{Errmsg: oops.Wrapf(err, "get quotes").Error()}}}), nil
	}
	data := make([]*datafeedv1.QuoteData, 0, len(tickers))
	for _, ticker := range tickers {
		change := ticker.LastPrice - ticker.Open24h
		changePct := 0.0
		if ticker.Open24h != 0 {
			changePct = (change / ticker.Open24h) * 100
		}
		data = append(data, &datafeedv1.QuoteData{
			S: "ok",
			N: ticker.Symbol,
			V: &datafeedv1.QuoteValues{
				ShortName:      lo.ToPtr(ticker.Symbol),
				Exchange:       lo.ToPtr("OKX"),
				Description:    lo.ToPtr(ticker.Symbol),
				Lp:             lo.ToPtr(ticker.LastPrice),
				Ask:            lo.ToPtr(ticker.AskPrice),
				Bid:            lo.ToPtr(ticker.BidPrice),
				OpenPrice:      lo.ToPtr(ticker.Open24h),
				HighPrice:      lo.ToPtr(ticker.High24h),
				LowPrice:       lo.ToPtr(ticker.Low24h),
				Volume:         lo.ToPtr(ticker.Volume24h),
				Ch:             lo.ToPtr(change),
				Chp:            lo.ToPtr(changePct),
				Rtc:            lo.ToPtr(ticker.LastPrice),
				RtcTime:        lo.ToPtr(ticker.TsMS / 1000),
				OriginalName:   lo.ToPtr(ticker.Symbol),
				PrevClosePrice: lo.ToPtr(ticker.Open24h),
			},
		})
	}
	return connectrpc.NewResponse(&datafeedv1.GetQuotesResponse{Result: &datafeedv1.GetQuotesResponse_Ok{Ok: &datafeedv1.GetQuotesOk{D: data}}}), nil
}

func (h *DatafeedHandler) GetMarks(
	context.Context,
	*connectrpc.Request[datafeedv1.GetMarksRequest],
) (*connectrpc.Response[datafeedv1.GetMarksResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.GetMarksResponse{}), nil
}

func (h *DatafeedHandler) GetTimescaleMarks(
	context.Context,
	*connectrpc.Request[datafeedv1.GetTimescaleMarksRequest],
) (*connectrpc.Response[datafeedv1.GetTimescaleMarksResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.GetTimescaleMarksResponse{Marks: nil}), nil
}

func (h *DatafeedHandler) ResolveSymbol(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.ResolveSymbolRequest],
) (*connectrpc.Response[datafeedv1.ResolveSymbolResponse], error) {
	symbols, err := h.librarySymbols(ctx)
	if err != nil {
		return nil, err
	}
	requested := strings.ToUpper(strings.TrimSpace(req.Msg.GetSymbol()))
	for _, item := range symbols {
		if strings.ToUpper(item.GetName()) == requested || strings.ToUpper(item.GetTicker()) == requested {
			return connectrpc.NewResponse(&datafeedv1.ResolveSymbolResponse{Symbol: item}), nil
		}
	}
	return nil, connectrpc.NewError(connectrpc.CodeNotFound, oops.Errorf("symbol %s not found", req.Msg.GetSymbol()))
}

func (h *DatafeedHandler) GetSymbolGroupInfo(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.GetSymbolGroupInfoRequest],
) (*connectrpc.Response[datafeedv1.GetSymbolGroupInfoResponse], error) {
	symbols, err := h.librarySymbols(ctx)
	if err != nil {
		return nil, err
	}
	grouped := filterBySymbolGroup(symbols, req.Msg.GetGroup())
	return connectrpc.NewResponse(buildSymbolGroupInfoResponse(grouped)), nil
}

func (h *DatafeedHandler) SearchSymbols(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.SearchSymbolsRequest],
) (*connectrpc.Response[datafeedv1.SearchSymbolsResponse], error) {
	symbols, err := h.librarySymbols(ctx)
	if err != nil {
		return nil, err
	}
	filtered := filterLibrarySymbols(symbols, filterOptions{Query: req.Msg.GetQuery(), Type: req.Msg.GetType(), Exchange: req.Msg.GetExchange()})
	limit := int(req.Msg.GetLimit())
	if limit <= 0 {
		limit = 30
	}
	if len(filtered) > limit {
		filtered = filtered[:limit]
	}
	items := lo.Map(filtered, func(item *datafeedv1.LibrarySymbolInfo, _ int) *datafeedv1.SearchResultItem {
		return &datafeedv1.SearchResultItem{
			Symbol:      item.GetName(),
			Description: item.GetDescription(),
			Exchange:    item.GetExchange(),
			Type:        item.GetType(),
			Ticker:      lo.ToPtr(item.GetTicker()),
		}
	})
	return connectrpc.NewResponse(&datafeedv1.SearchSymbolsResponse{Items: items}), nil
}

func (h *DatafeedHandler) StreamBars(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.StreamBarsRequest],
	stream *connectrpc.ServerStream[datafeedv1.StreamBarsResponse],
) error {
	symbol := req.Msg.GetSymbolInfo().GetTicker()
	if symbol == "" {
		symbol = req.Msg.GetSymbolInfo().GetName()
	}
	if symbol == "" {
		return connectrpc.NewError(connectrpc.CodeInvalidArgument, oops.Errorf("symbol_info.name or symbol_info.ticker is required"))
	}
	updates, errs, err := h.market.SubscribeMarketBars(ctx, symbol, req.Msg.GetResolution())
	if err != nil {
		if errors.Is(err, biz.ErrMarketProviderUnavailable) {
			return connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return connectrpc.NewError(connectrpc.CodeInvalidArgument, oops.Wrapf(err, "subscribe market bars"))
	}
	for {
		select {
		case <-ctx.Done():
			return nil
		case err, ok := <-errs:
			if !ok {
				return nil
			}
			return connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "stream bars"))
		case candle, ok := <-updates:
			if !ok {
				return nil
			}
			if err := stream.Send(&datafeedv1.StreamBarsResponse{
				T: []int64{candle.TsMS / 1000},
				O: []float64{candle.Open},
				H: []float64{candle.High},
				L: []float64{candle.Low},
				C: []float64{candle.Close},
				V: []float64{candle.Volume},
			}); err != nil {
				return err
			}
		}
	}
}

func (h *DatafeedHandler) SubscribeBars(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.SubscribeBarsRequest],
	stream *connectrpc.ServerStream[datafeedv1.SubscribeBarsResponse],
) error {
	info := req.Msg.GetSymbolInfo()
	symbol := ""
	if info != nil {
		symbol = info.GetTicker()
		if symbol == "" {
			symbol = info.GetName()
		}
	}
	if symbol == "" {
		return connectrpc.NewError(connectrpc.CodeInvalidArgument, oops.Errorf("symbol_info.name or symbol_info.ticker is required"))
	}
	updates, errs, err := h.market.SubscribeMarketBars(ctx, symbol, req.Msg.GetResolution())
	if err != nil {
		if errors.Is(err, biz.ErrMarketProviderUnavailable) {
			return connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return connectrpc.NewError(connectrpc.CodeInvalidArgument, oops.Wrapf(err, "subscribe market bars"))
	}
	for {
		select {
		case <-ctx.Done():
			return nil
		case err, ok := <-errs:
			if !ok {
				return nil
			}
			return connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "subscribe bars"))
		case candle, ok := <-updates:
			if !ok {
				return nil
			}
			if err := stream.Send(&datafeedv1.SubscribeBarsResponse{Bar: &datafeedv1.ChartBar{
				Time:   candle.TsMS,
				Open:   candle.Open,
				High:   candle.High,
				Low:    candle.Low,
				Close:  candle.Close,
				Volume: lo.ToPtr(candle.Volume),
			}}); err != nil {
				return err
			}
		}
	}
}

func (h *DatafeedHandler) ListSymbols(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.ListSymbolsRequest],
) (*connectrpc.Response[datafeedv1.ListSymbolsResponse], error) {
	symbols, err := h.librarySymbols(ctx)
	if err != nil {
		return nil, err
	}
	filtered := filterLibrarySymbols(symbols, filterOptions{
		Query:          req.Msg.GetQuery(),
		Type:           req.Msg.GetType(),
		Exchange:       req.Msg.GetExchange(),
		Markets:        req.Msg.GetMarkets(),
		Symbols:        req.Msg.GetSymbols(),
		IncludeExpired: req.Msg.GetIncludeExpired(),
	})
	sortLibrarySymbols(filtered, req.Msg.GetSortBy(), req.Msg.GetSortOrder())
	total := len(filtered)
	offset := int(req.Msg.GetOffset())
	if offset < 0 {
		offset = 0
	}
	limit := int(req.Msg.GetLimit())
	if limit <= 0 {
		limit = 100
	}
	paged := paginateSymbols(filtered, offset, limit)
	return connectrpc.NewResponse(&datafeedv1.ListSymbolsResponse{TotalCount: uint32(total), Symbols: paged}), nil
}

func (h *DatafeedHandler) librarySymbols(ctx context.Context) ([]*datafeedv1.LibrarySymbolInfo, error) {
	items, err := h.market.ListMarketSymbols(ctx)
	if err != nil {
		if errors.Is(err, biz.ErrMarketProviderUnavailable) {
			return nil, connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "list market symbols"))
	}
	out := make([]*datafeedv1.LibrarySymbolInfo, 0, len(items))
	for _, item := range items {
		out = append(out, mapMarketSymbol(item))
	}
	return out, nil
}

var supportedResolutions = []string{"1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "1D", "1W", "1M"}

func buildConfigResponse() *datafeedv1.GetConfigResponse {
	return &datafeedv1.GetConfigResponse{
		SupportedResolutions:   append([]string{}, supportedResolutions...),
		SupportsMarks:          lo.ToPtr(false),
		SupportsTimescaleMarks: lo.ToPtr(false),
		SupportsTime:           lo.ToPtr(true),
		Exchanges:              []*datafeedv1.ExchangeDescriptor{{Value: "OKX", Name: "OKX", Desc: "OKX"}},
		SymbolsTypes:           []*datafeedv1.SymbolTypeDescriptor{{Name: "Spot", Value: "spot"}, {Name: "Swap", Value: "swap"}, {Name: "Futures", Value: "futures"}, {Name: "Option", Value: "option"}},
	}
}

func mapMarketSymbol(item biz.Symbol) *datafeedv1.LibrarySymbolInfo {
	description := item.ID
	if item.BaseCurrency != "" && item.QuoteCurrency != "" {
		description = item.BaseCurrency + "/" + item.QuoteCurrency + " " + item.InstrumentType
	}
	priceScale := int32(decimalsToScale(item.TickSize))
	volumePrecision := int32(stepPrecision(item.LotSize))
	expired := strings.EqualFold(item.State, "suspend") || strings.EqualFold(item.State, "expired")
	custom := map[string]*structpb.Value{
		"inst_type":       structpb.NewStringValue(item.InstrumentType),
		"base_currency":   structpb.NewStringValue(item.BaseCurrency),
		"quote_currency":  structpb.NewStringValue(item.QuoteCurrency),
		"settle_currency": structpb.NewStringValue(item.SettleCurrency),
		"state":           structpb.NewStringValue(item.State),
	}
	return &datafeedv1.LibrarySymbolInfo{
		Name:                 item.ID,
		Ticker:               lo.ToPtr(item.ID),
		Description:          description,
		Type:                 normalizeSymbolType(item.InstrumentType),
		Session:              "24x7",
		Timezone:             "Etc/UTC",
		Exchange:             "OKX",
		ListedExchange:       "OKX",
		Format:               datafeedv1.SeriesFormat_SERIES_FORMAT_PRICE,
		Minmov:               1,
		Pricescale:           priceScale,
		HasIntraday:          lo.ToPtr(true),
		HasDaily:             lo.ToPtr(true),
		HasWeeklyAndMonthly:  lo.ToPtr(true),
		HasTicks:             lo.ToPtr(true),
		HasEmptyBars:         lo.ToPtr(false),
		SupportedResolutions: append([]string{}, supportedResolutions...),
		IntradayMultipliers:  []string{"1", "3", "5", "15", "30", "60", "120", "240", "360", "720"},
		DailyMultipliers:     []string{"1"},
		WeeklyMultipliers:    []string{"1"},
		MonthlyMultipliers:   []string{"1"},
		VolumePrecision:      lo.ToPtr(volumePrecision),
		DataStatus:           datafeedv1.DataStatus_DATA_STATUS_STREAMING,
		Expired:              lo.ToPtr(expired),
		LibraryCustomFields:  custom,
	}
}

func splitCommaDelimited(raw string) []string {
	parts := strings.Split(raw, ",")
	out := make([]string, 0, len(parts))
	for _, part := range parts {
		trimmed := strings.TrimSpace(part)
		if trimmed != "" {
			out = append(out, trimmed)
		}
	}
	return out
}

type filterOptions struct {
	Query          string
	Type           string
	Exchange       string
	Markets        []string
	Symbols        []string
	IncludeExpired bool
}

func filterLibrarySymbols(items []*datafeedv1.LibrarySymbolInfo, opts filterOptions) []*datafeedv1.LibrarySymbolInfo {
	query := strings.ToLower(strings.TrimSpace(opts.Query))
	typeFilter := strings.ToLower(strings.TrimSpace(opts.Type))
	exchangeFilter := strings.ToLower(strings.TrimSpace(opts.Exchange))
	marketSet := normalizeSet(opts.Markets)
	symbolSet := normalizeSet(opts.Symbols)

	return lo.Filter(items, func(item *datafeedv1.LibrarySymbolInfo, _ int) bool {
		if query != "" {
			text := strings.ToLower(item.GetName() + " " + item.GetTicker() + " " + item.GetDescription())
			if !strings.Contains(text, query) {
				return false
			}
		}
		if typeFilter != "" && strings.ToLower(item.GetType()) != typeFilter {
			return false
		}
		if exchangeFilter != "" && strings.ToLower(item.GetExchange()) != exchangeFilter {
			return false
		}
		if len(marketSet) > 0 {
			instType := strings.ToLower(customFieldString(item, "inst_type"))
			if _, ok := marketSet[instType]; !ok {
				return false
			}
		}
		if len(symbolSet) > 0 {
			if _, ok := symbolSet[strings.ToLower(item.GetName())]; !ok {
				if _, ok := symbolSet[strings.ToLower(item.GetTicker())]; !ok {
					return false
				}
			}
		}
		if !opts.IncludeExpired && item.GetExpired() {
			return false
		}
		return true
	})
}

func sortLibrarySymbols(items []*datafeedv1.LibrarySymbolInfo, sortBy string, order datafeedv1.SortOrder) {
	field := strings.ToLower(strings.TrimSpace(sortBy))
	if field == "" {
		field = "name"
	}
	desc := order == datafeedv1.SortOrder_SORT_ORDER_DESC
	sort.SliceStable(items, func(i, j int) bool {
		left := symbolComparable(items[i], field)
		right := symbolComparable(items[j], field)
		if desc {
			return left > right
		}
		return left < right
	})
}

func symbolComparable(item *datafeedv1.LibrarySymbolInfo, field string) string {
	switch field {
	case "symbol", "name":
		return strings.ToLower(item.GetName())
	case "ticker":
		return strings.ToLower(item.GetTicker())
	case "description", "desc":
		return strings.ToLower(item.GetDescription())
	case "exchange":
		return strings.ToLower(item.GetExchange())
	case "type":
		return strings.ToLower(item.GetType())
	case "state":
		return strings.ToLower(customFieldString(item, "state"))
	default:
		return strings.ToLower(item.GetName())
	}
}

func paginateSymbols(items []*datafeedv1.LibrarySymbolInfo, offset int, limit int) []*datafeedv1.LibrarySymbolInfo {
	if offset >= len(items) {
		return nil
	}
	end := offset + limit
	if end > len(items) {
		end = len(items)
	}
	return items[offset:end]
}

func normalizeSet(values []string) map[string]struct{} {
	if len(values) == 0 {
		return nil
	}
	result := make(map[string]struct{}, len(values))
	for _, item := range values {
		value := strings.ToLower(strings.TrimSpace(item))
		if value != "" {
			result[value] = struct{}{}
		}
	}
	return result
}

func customFieldString(item *datafeedv1.LibrarySymbolInfo, key string) string {
	if item.GetLibraryCustomFields() == nil {
		return ""
	}
	value, ok := item.GetLibraryCustomFields()[key]
	if !ok || value == nil {
		return ""
	}
	return value.GetStringValue()
}

func normalizeSymbolType(instType string) string {
	switch strings.ToUpper(strings.TrimSpace(instType)) {
	case "SPOT":
		return "spot"
	case "SWAP":
		return "swap"
	case "FUTURES":
		return "futures"
	case "OPTION":
		return "option"
	default:
		return strings.ToLower(strings.TrimSpace(instType))
	}
}

func decimalsToScale(tickSize string) int {
	value := strings.TrimSpace(tickSize)
	if value == "" {
		return 100
	}
	parts := strings.Split(value, ".")
	if len(parts) != 2 {
		return 1
	}
	return int(math.Pow10(len(parts[1])))
}

func stepPrecision(lotSize string) int {
	value := strings.TrimSpace(lotSize)
	if value == "" {
		return 0
	}
	parts := strings.Split(value, ".")
	if len(parts) != 2 {
		return 0
	}
	fraction := strings.TrimRight(parts[1], "0")
	return len(fraction)
}

func filterBySymbolGroup(items []*datafeedv1.LibrarySymbolInfo, group string) []*datafeedv1.LibrarySymbolInfo {
	group = strings.ToLower(strings.TrimSpace(group))
	if group == "" {
		return items
	}
	return lo.Filter(items, func(item *datafeedv1.LibrarySymbolInfo, _ int) bool {
		custom := strings.ToLower(customFieldString(item, "inst_type"))
		if custom == group {
			return true
		}
		return strings.ToLower(item.GetType()) == group
	})
}

func buildSymbolGroupInfoResponse(grouped []*datafeedv1.LibrarySymbolInfo) *datafeedv1.GetSymbolGroupInfoResponse {
	if len(grouped) == 0 {
		return &datafeedv1.GetSymbolGroupInfoResponse{Symbol: nil}
	}

	names := make([]string, 0, len(grouped))
	descriptions := make([]string, 0, len(grouped))
	minmov := make([]float64, 0, len(grouped))
	pricescale := make([]float64, 0, len(grouped))
	types := make([]string, 0, len(grouped))
	timezones := make([]string, 0, len(grouped))
	exchangeListed := make([]string, 0, len(grouped))
	exchangeTraded := make([]string, 0, len(grouped))
	minmov2 := make([]float64, 0, len(grouped))
	fractional := make([]bool, 0, len(grouped))
	hasIntraday := make([]bool, 0, len(grouped))
	hasDaily := make([]bool, 0, len(grouped))
	hasWeeklyAndMonthly := make([]bool, 0, len(grouped))
	hasEmptyBars := make([]bool, 0, len(grouped))
	tickers := make([]string, 0, len(grouped))
	sessionRegular := make([]string, 0, len(grouped))
	sessionHolidays := make([]string, 0, len(grouped))
	corrections := make([]string, 0, len(grouped))
	supported := make([][]string, 0, len(grouped))
	intradayMultipliers := make([][]string, 0, len(grouped))
	volumePrecision := make([]float64, 0, len(grouped))
	visiblePlots := make([]datafeedv1.VisiblePlotsSet, 0, len(grouped))
	forceSessionRebuild := make([]bool, 0, len(grouped))

	for _, item := range grouped {
		names = append(names, item.GetName())
		descriptions = append(descriptions, item.GetDescription())
		minmov = append(minmov, float64(item.GetMinmov()))
		pricescale = append(pricescale, float64(item.GetPricescale()))
		types = append(types, item.GetType())
		timezones = append(timezones, item.GetTimezone())
		exchangeListed = append(exchangeListed, item.GetListedExchange())
		exchangeTraded = append(exchangeTraded, item.GetExchange())
		minmov2 = append(minmov2, float64(item.GetMinmove2()))
		fractional = append(fractional, item.GetFractional())
		hasIntraday = append(hasIntraday, item.GetHasIntraday())
		hasDaily = append(hasDaily, item.GetHasDaily())
		hasWeeklyAndMonthly = append(hasWeeklyAndMonthly, item.GetHasWeeklyAndMonthly())
		hasEmptyBars = append(hasEmptyBars, item.GetHasEmptyBars())
		tickers = append(tickers, item.GetTicker())
		sessionRegular = append(sessionRegular, item.GetSession())
		sessionHolidays = append(sessionHolidays, item.GetSessionHolidays())
		corrections = append(corrections, item.GetCorrections())
		supported = append(supported, item.GetSupportedResolutions())
		intradayMultipliers = append(intradayMultipliers, item.GetIntradayMultipliers())
		volumePrecision = append(volumePrecision, float64(item.GetVolumePrecision()))
		visiblePlots = append(visiblePlots, item.GetVisiblePlotsSet())
		forceSessionRebuild = append(forceSessionRebuild, false)
	}

	return &datafeedv1.GetSymbolGroupInfoResponse{
		Symbol:              names,
		Description:         &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: descriptions}}},
		Minmov:              &datafeedv1.DoubleOrDoubleList{Value: &datafeedv1.DoubleOrDoubleList_Many{Many: &datafeedv1.DoubleList{Values: minmov}}},
		Pricescale:          &datafeedv1.DoubleOrDoubleList{Value: &datafeedv1.DoubleOrDoubleList_Many{Many: &datafeedv1.DoubleList{Values: pricescale}}},
		Type:                &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: types}}},
		Timezone:            &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: timezones}}},
		ExchangeListed:      &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: exchangeListed}}},
		ExchangeTraded:      &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: exchangeTraded}}},
		Minmov2:             &datafeedv1.DoubleOrDoubleList{Value: &datafeedv1.DoubleOrDoubleList_Many{Many: &datafeedv1.DoubleList{Values: minmov2}}},
		Fractional:          &datafeedv1.BoolOrBoolList{Value: &datafeedv1.BoolOrBoolList_Many{Many: &datafeedv1.BoolList{Values: fractional}}},
		HasIntraday:         &datafeedv1.BoolOrBoolList{Value: &datafeedv1.BoolOrBoolList_Many{Many: &datafeedv1.BoolList{Values: hasIntraday}}},
		HasDaily:            &datafeedv1.BoolOrBoolList{Value: &datafeedv1.BoolOrBoolList_Many{Many: &datafeedv1.BoolList{Values: hasDaily}}},
		HasWeeklyAndMonthly: &datafeedv1.BoolOrBoolList{Value: &datafeedv1.BoolOrBoolList_Many{Many: &datafeedv1.BoolList{Values: hasWeeklyAndMonthly}}},
		HasEmptyBars:        &datafeedv1.BoolOrBoolList{Value: &datafeedv1.BoolOrBoolList_Many{Many: &datafeedv1.BoolList{Values: hasEmptyBars}}},
		Ticker:              &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: tickers}}},
		SessionRegular:      &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: sessionRegular}}},
		SessionHolidays:     &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: sessionHolidays}}},
		Corrections:         &datafeedv1.StringOrStringList{Value: &datafeedv1.StringOrStringList_Many{Many: &datafeedv1.StringList{Values: corrections}}},
		SupportedResolutions: &datafeedv1.StringListOrStringListList{Value: &datafeedv1.StringListOrStringListList_Many{Many: &datafeedv1.StringListList{Values: lo.Map(supported, func(item []string, _ int) *datafeedv1.StringList {
			return &datafeedv1.StringList{Values: item}
		})}}},
		ForceSessionRebuild: &datafeedv1.BoolOrBoolList{Value: &datafeedv1.BoolOrBoolList_Many{Many: &datafeedv1.BoolList{Values: forceSessionRebuild}}},
		IntradayMultipliers: &datafeedv1.StringListOrStringListList{Value: &datafeedv1.StringListOrStringListList_Many{Many: &datafeedv1.StringListList{Values: lo.Map(intradayMultipliers, func(item []string, _ int) *datafeedv1.StringList {
			return &datafeedv1.StringList{Values: item}
		})}}},
		VolumePrecision: &datafeedv1.DoubleOrDoubleList{Value: &datafeedv1.DoubleOrDoubleList_Many{Many: &datafeedv1.DoubleList{Values: volumePrecision}}},
		VisiblePlotsSet: &datafeedv1.VisiblePlotsSetOrList{Value: &datafeedv1.VisiblePlotsSetOrList_Many{Many: &datafeedv1.VisiblePlotsSetList{Values: visiblePlots}}},
	}
}
