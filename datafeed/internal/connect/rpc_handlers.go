package connect

import (
	"context"
	"errors"
	"math"
	"slices"
	"sort"
	"strconv"
	"strings"
	"time"

	connectrpc "connectrpc.com/connect"
	"github.com/austin/quantum/datafeed/internal/adapters/okx"
	"github.com/austin/quantum/datafeed/internal/app"
	datafeedv1 "github.com/austin/quantum/datafeed/internal/gen/datafeed/v1"
	datafeedv1connect "github.com/austin/quantum/datafeed/internal/gen/datafeed/v1/datafeedv1connect"
	"github.com/austin/quantum/datafeed/internal/storage"
	"github.com/samber/lo"
	"github.com/samber/oops"
	"google.golang.org/protobuf/types/known/structpb"
)

var supportedResolutions = []string{
	"1", "3", "5", "15", "30", "60", "120", "240", "360", "720", "1D", "1W", "1M",
}

type DatafeedRPCHandler struct {
	datafeedv1connect.UnimplementedDatafeedServiceHandler
	service *app.Service
}

func NewDatafeedRPCHandler(service *app.Service) *DatafeedRPCHandler {
	return &DatafeedRPCHandler{service: service}
}

func (h *DatafeedRPCHandler) IngestTicks(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.IngestTicksRequest],
) (*connectrpc.Response[datafeedv1.IngestTicksResponse], error) {
	items := lo.Map(req.Msg.GetTicks(), func(item *datafeedv1.Tick, _ int) storage.Tick {
		return storage.Tick{
			Symbol: item.GetSymbol(),
			TsMS:   item.GetTsMs(),
			Price:  item.GetPrice(),
			Size:   item.GetSize(),
			Source: item.GetSource(),
		}
	})
	inserted, err := h.service.IngestTicks(ctx, items)
	if err != nil {
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "ingest ticks"))
	}
	return connectrpc.NewResponse(&datafeedv1.IngestTicksResponse{Inserted: uint32(inserted)}), nil
}

func (h *DatafeedRPCHandler) ReplayTicks(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.ReplayTicksRequest],
) (*connectrpc.Response[datafeedv1.ReplayTicksResponse], error) {
	limit := int32(req.Msg.GetLimit())
	if limit <= 0 {
		limit = 500
	}
	items, err := h.service.ReplayTicks(ctx, req.Msg.GetSymbol(), req.Msg.GetStartTsMs(), req.Msg.GetEndTsMs(), limit)
	if err != nil {
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "replay ticks"))
	}
	out := lo.Map(items, func(item storage.Tick, _ int) *datafeedv1.Tick {
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

func (h *DatafeedRPCHandler) QueryBars(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.QueryBarsRequest],
) (*connectrpc.Response[datafeedv1.QueryBarsResponse], error) {
	limit := int32(req.Msg.GetLimit())
	if limit <= 0 {
		limit = 500
	}
	items, err := h.service.QueryBars(ctx, req.Msg.GetSymbol(), req.Msg.GetInterval(), req.Msg.GetStartTsMs(), req.Msg.GetEndTsMs(), limit)
	if err != nil {
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "query bars"))
	}
	out := lo.Map(items, func(item storage.Bar, _ int) *datafeedv1.Bar {
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

func (h *DatafeedRPCHandler) ListNews(
	context.Context,
	*connectrpc.Request[datafeedv1.ListNewsRequest],
) (*connectrpc.Response[datafeedv1.ListNewsResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.ListNewsResponse{Items: nil}), nil
}

func (h *DatafeedRPCHandler) ListSocial(
	context.Context,
	*connectrpc.Request[datafeedv1.ListSocialRequest],
) (*connectrpc.Response[datafeedv1.ListSocialResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.ListSocialResponse{Items: nil}), nil
}

func (h *DatafeedRPCHandler) GetConfig(
	context.Context,
	*connectrpc.Request[datafeedv1.GetConfigRequest],
) (*connectrpc.Response[datafeedv1.GetConfigResponse], error) {
	response := &datafeedv1.GetConfigResponse{
		SupportedResolutions:   slices.Clone(supportedResolutions),
		SupportsMarks:          lo.ToPtr(false),
		SupportsTimescaleMarks: lo.ToPtr(false),
		SupportsTime:           lo.ToPtr(true),
		Exchanges: []*datafeedv1.ExchangeDescriptor{
			{
				Value: "OKX",
				Name:  "OKX",
				Desc:  "OKX",
			},
		},
		SymbolsTypes: []*datafeedv1.SymbolTypeDescriptor{
			{Name: "Spot", Value: "spot"},
			{Name: "Swap", Value: "swap"},
			{Name: "Futures", Value: "futures"},
			{Name: "Option", Value: "option"},
		},
	}
	return connectrpc.NewResponse(response), nil
}

func (h *DatafeedRPCHandler) GetTime(
	context.Context,
	*connectrpc.Request[datafeedv1.GetTimeRequest],
) (*connectrpc.Response[datafeedv1.GetTimeResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.GetTimeResponse{UnixTime: time.Now().Unix()}), nil
}

func (h *DatafeedRPCHandler) GetBars(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.GetBarsRequest],
) (*connectrpc.Response[datafeedv1.GetBarsResponse], error) {
	countBack := req.Msg.GetCountBack()
	// TradingView recommends returning at least two bars whenever available.
	if countBack < 2 {
		countBack = 2
	}

	candles, err := h.service.GetMarketHistory(
		ctx,
		req.Msg.GetSymbol(),
		req.Msg.GetResolution(),
		req.Msg.GetFrom(),
		req.Msg.GetTo(),
		countBack,
	)
	if err != nil {
		if errors.Is(err, app.ErrMarketProviderUnavailable) {
			return nil, connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "get bars"))
	}

	if len(candles) == 0 {
		return connectrpc.NewResponse(&datafeedv1.GetBarsResponse{
			NoData:   true,
			NextTime: lo.ToPtr(req.Msg.GetFrom() * 1000),
		}), nil
	}

	bars := lo.Map(candles, func(item okx.Candle, _ int) *datafeedv1.ChartBar {
		return &datafeedv1.ChartBar{
			Time:   item.TsMS,
			Open:   item.Open,
			High:   item.High,
			Low:    item.Low,
			Close:  item.Close,
			Volume: lo.ToPtr(item.Volume),
		}
	})

	return connectrpc.NewResponse(&datafeedv1.GetBarsResponse{
		Bars:   bars,
		NoData: false,
	}), nil
}

func (h *DatafeedRPCHandler) GetHistory(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.GetHistoryRequest],
) (*connectrpc.Response[datafeedv1.GetHistoryResponse], error) {
	candles, err := h.service.GetMarketHistory(
		ctx,
		req.Msg.GetSymbol(),
		req.Msg.GetResolution(),
		req.Msg.GetFrom(),
		req.Msg.GetTo(),
		req.Msg.GetCountback(),
	)
	if err != nil {
		if errors.Is(err, app.ErrMarketProviderUnavailable) {
			return nil, connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return connectrpc.NewResponse(&datafeedv1.GetHistoryResponse{
			Result: &datafeedv1.GetHistoryResponse_Error{
				Error: &datafeedv1.GetHistoryError{Errmsg: oops.Wrapf(err, "get history").Error()},
			},
		}), nil
	}
	if len(candles) == 0 {
		return connectrpc.NewResponse(&datafeedv1.GetHistoryResponse{
			Result: &datafeedv1.GetHistoryResponse_NoData{
				NoData: &datafeedv1.GetHistoryNoData{
					NextTime: lo.ToPtr(req.Msg.GetFrom()),
				},
			},
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
		Result: &datafeedv1.GetHistoryResponse_Ok{
			Ok: &datafeedv1.GetHistoryOk{
				T: t,
				O: o,
				H: hh,
				L: l,
				C: c,
				V: v,
			},
		},
	}), nil
}

func (h *DatafeedRPCHandler) GetQuotes(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.GetQuotesRequest],
) (*connectrpc.Response[datafeedv1.GetQuotesResponse], error) {
	symbols := splitCommaDelimited(req.Msg.GetSymbols())
	if len(symbols) == 0 {
		return connectrpc.NewResponse(&datafeedv1.GetQuotesResponse{
			Result: &datafeedv1.GetQuotesResponse_Error{
				Error: &datafeedv1.GetQuotesError{Errmsg: "symbols is required"},
			},
		}), nil
	}

	tickers, err := h.service.GetMarketTickers(ctx, symbols)
	if err != nil {
		if errors.Is(err, app.ErrMarketProviderUnavailable) {
			return nil, connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return connectrpc.NewResponse(&datafeedv1.GetQuotesResponse{
			Result: &datafeedv1.GetQuotesResponse_Error{
				Error: &datafeedv1.GetQuotesError{Errmsg: oops.Wrapf(err, "get quotes").Error()},
			},
		}), nil
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

	return connectrpc.NewResponse(&datafeedv1.GetQuotesResponse{
		Result: &datafeedv1.GetQuotesResponse_Ok{
			Ok: &datafeedv1.GetQuotesOk{D: data},
		},
	}), nil
}

func (h *DatafeedRPCHandler) GetMarks(
	context.Context,
	*connectrpc.Request[datafeedv1.GetMarksRequest],
) (*connectrpc.Response[datafeedv1.GetMarksResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.GetMarksResponse{}), nil
}

func (h *DatafeedRPCHandler) GetTimescaleMarks(
	context.Context,
	*connectrpc.Request[datafeedv1.GetTimescaleMarksRequest],
) (*connectrpc.Response[datafeedv1.GetTimescaleMarksResponse], error) {
	return connectrpc.NewResponse(&datafeedv1.GetTimescaleMarksResponse{Marks: nil}), nil
}

func (h *DatafeedRPCHandler) ResolveSymbol(
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

func (h *DatafeedRPCHandler) SearchSymbols(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.SearchSymbolsRequest],
) (*connectrpc.Response[datafeedv1.SearchSymbolsResponse], error) {
	symbols, err := h.librarySymbols(ctx)
	if err != nil {
		return nil, err
	}

	filtered := filterLibrarySymbols(symbols, filterOptions{
		Query:    req.Msg.GetQuery(),
		Type:     req.Msg.GetType(),
		Exchange: req.Msg.GetExchange(),
	})
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

func (h *DatafeedRPCHandler) StreamBars(
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

	updates, errs, err := h.service.SubscribeMarketBars(ctx, symbol, req.Msg.GetResolution())
	if err != nil {
		if errors.Is(err, app.ErrMarketProviderUnavailable) {
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

func (h *DatafeedRPCHandler) SubscribeBars(
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

	updates, errs, err := h.service.SubscribeMarketBars(ctx, symbol, req.Msg.GetResolution())
	if err != nil {
		if errors.Is(err, app.ErrMarketProviderUnavailable) {
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
			if err := stream.Send(&datafeedv1.SubscribeBarsResponse{
				Bar: &datafeedv1.ChartBar{
					Time:   candle.TsMS,
					Open:   candle.Open,
					High:   candle.High,
					Low:    candle.Low,
					Close:  candle.Close,
					Volume: lo.ToPtr(candle.Volume),
				},
			}); err != nil {
				return err
			}
		}
	}
}

func (h *DatafeedRPCHandler) ListSymbols(
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

	return connectrpc.NewResponse(&datafeedv1.ListSymbolsResponse{
		TotalCount: uint32(total),
		Symbols:    paged,
	}), nil
}

func (h *DatafeedRPCHandler) librarySymbols(ctx context.Context) ([]*datafeedv1.LibrarySymbolInfo, error) {
	items, err := h.service.ListMarketSymbols(ctx)
	if err != nil {
		if errors.Is(err, app.ErrMarketProviderUnavailable) {
			return nil, connectrpc.NewError(connectrpc.CodeUnavailable, oops.Wrapf(err, "market provider unavailable"))
		}
		return nil, connectrpc.NewError(connectrpc.CodeInternal, oops.Wrapf(err, "list market symbols"))
	}

	return lo.Map(items, func(item okx.Symbol, _ int) *datafeedv1.LibrarySymbolInfo {
		return mapOKXSymbol(item)
	}), nil
}

type ScannerRPCHandler struct {
	datafeedv1connect.UnimplementedScannerServiceHandler
	service *app.Service
}

func NewScannerRPCHandler(service *app.Service) *ScannerRPCHandler {
	return &ScannerRPCHandler{service: service}
}

func (h *ScannerRPCHandler) ScanSymbols(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.ScanSymbolsRequest],
) (*connectrpc.Response[datafeedv1.ScanSymbolsResponse], error) {
	datafeedHandler := NewDatafeedRPCHandler(h.service)
	symbols, err := datafeedHandler.librarySymbols(ctx)
	if err != nil {
		return nil, err
	}

	filtered := filterLibrarySymbols(symbols, filterOptions{
		Markets: req.Msg.GetMarkets(),
	})
	filtered = filterByScannerMap(filtered, req.Msg.GetSymbols())
	if req.Msg.GetFilter() != nil {
		filtered = filterByScannerExpression(filtered, req.Msg.GetFilter())
	}

	sortBy := ""
	sortOrder := datafeedv1.SortOrder_SORT_ORDER_UNSPECIFIED
	if req.Msg.GetSort() != nil {
		sortBy = req.Msg.GetSort().GetSortBy()
		sortOrder = mapScannerSortOrder(req.Msg.GetSort().GetSortOrder())
	}
	sortLibrarySymbols(filtered, sortBy, sortOrder)

	total := len(filtered)
	start, end := scannerRange(req.Msg.GetRange(), total)
	columns := req.Msg.GetColumns()
	if len(columns) == 0 {
		columns = []string{"description", "exchange", "type"}
	}

	rows := lo.Map(filtered[start:end], func(item *datafeedv1.LibrarySymbolInfo, _ int) *datafeedv1.ScanSymbolRow {
		values := lo.Map(columns, func(column string, _ int) *structpb.Value {
			return scannerColumnValue(item, column)
		})
		return &datafeedv1.ScanSymbolRow{
			S: item.GetName(),
			D: values,
		}
	})

	return connectrpc.NewResponse(&datafeedv1.ScanSymbolsResponse{
		TotalCount: uint32(total),
		Data:       rows,
	}), nil
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

func mapScannerSortOrder(order datafeedv1.ScannerSortOrder) datafeedv1.SortOrder {
	switch order {
	case datafeedv1.ScannerSortOrder_SCANNER_SORT_ORDER_ASC:
		return datafeedv1.SortOrder_SORT_ORDER_ASC
	case datafeedv1.ScannerSortOrder_SCANNER_SORT_ORDER_DESC:
		return datafeedv1.SortOrder_SORT_ORDER_DESC
	default:
		return datafeedv1.SortOrder_SORT_ORDER_UNSPECIFIED
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

func mapOKXSymbol(item okx.Symbol) *datafeedv1.LibrarySymbolInfo {
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
		SupportedResolutions: slices.Clone(supportedResolutions),
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

func decimalsToScale(step string) int {
	clean := strings.TrimSpace(step)
	if clean == "" {
		return 1
	}
	if strings.ContainsAny(clean, "eE") {
		parsed, err := strconv.ParseFloat(clean, 64)
		if err != nil || parsed <= 0 {
			return 1
		}
		for i := 0; i <= 12; i++ {
			scale := math.Pow10(i)
			value := parsed * scale
			if value == float64(int64(value)) {
				return int(scale)
			}
		}
		return 1
	}
	parts := strings.SplitN(clean, ".", 2)
	if len(parts) != 2 {
		return 1
	}
	decimals := strings.TrimRight(parts[1], "0")
	if decimals == "" {
		return 1
	}
	return int(math.Pow10(len(decimals)))
}

func stepPrecision(step string) int {
	scale := decimalsToScale(step)
	if scale <= 1 {
		return 0
	}
	return len(strconv.Itoa(scale)) - 1
}

func splitCommaDelimited(raw string) []string {
	return lo.FilterMap(strings.Split(raw, ","), func(part string, _ int) (string, bool) {
		value := strings.TrimSpace(part)
		return value, value != ""
	})
}

func normalizeSet(items []string) map[string]struct{} {
	cleaned := lo.FilterMap(items, func(item string, _ int) (string, bool) {
		value := strings.ToLower(strings.TrimSpace(item))
		return value, value != ""
	})
	if len(cleaned) == 0 {
		return nil
	}
	return lo.SliceToMap(cleaned, func(item string) (string, struct{}) {
		return item, struct{}{}
	})
}

func scannerRange(r *datafeedv1.ScannerRange, total int) (int, int) {
	if total == 0 {
		return 0, 0
	}
	if r == nil {
		return 0, total
	}
	start := int(r.GetStart())
	if start < 0 {
		start = 0
	}
	if start >= total {
		return total, total
	}

	end := int(r.GetEnd()) + 1
	if end <= start {
		end = start + 1
	}
	if end > total {
		end = total
	}
	return start, end
}

func scannerColumnValue(item *datafeedv1.LibrarySymbolInfo, column string) *structpb.Value {
	key := strings.ToLower(strings.TrimSpace(column))
	switch key {
	case "name", "symbol", "s":
		return structpb.NewStringValue(item.GetName())
	case "ticker":
		return structpb.NewStringValue(item.GetTicker())
	case "description", "desc":
		return structpb.NewStringValue(item.GetDescription())
	case "exchange":
		return structpb.NewStringValue(item.GetExchange())
	case "type":
		return structpb.NewStringValue(item.GetType())
	case "pricescale":
		return structpb.NewNumberValue(float64(item.GetPricescale()))
	case "active":
		return structpb.NewBoolValue(!item.GetExpired())
	case "state":
		return structpb.NewStringValue(customFieldString(item, "state"))
	case "inst_type":
		return structpb.NewStringValue(customFieldString(item, "inst_type"))
	case "base_currency":
		return structpb.NewStringValue(customFieldString(item, "base_currency"))
	case "quote_currency":
		return structpb.NewStringValue(customFieldString(item, "quote_currency"))
	default:
		return structpb.NewNullValue()
	}
}

func filterByScannerMap(items []*datafeedv1.LibrarySymbolInfo, symbols map[string]*structpb.Value) []*datafeedv1.LibrarySymbolInfo {
	if len(symbols) == 0 {
		return items
	}
	keys := make(map[string]struct{}, len(symbols))
	for key := range symbols {
		keys[strings.ToLower(strings.TrimSpace(key))] = struct{}{}
	}
	return lo.Filter(items, func(item *datafeedv1.LibrarySymbolInfo, _ int) bool {
		name := strings.ToLower(item.GetName())
		ticker := strings.ToLower(item.GetTicker())
		if _, ok := keys[name]; ok {
			return true
		}
		if _, ok := keys[ticker]; ok {
			return true
		}
		return false
	})
}

func filterByScannerExpression(items []*datafeedv1.LibrarySymbolInfo, filter *datafeedv1.ScannerFilter) []*datafeedv1.LibrarySymbolInfo {
	out := make([]*datafeedv1.LibrarySymbolInfo, 0, len(items))
	for _, item := range items {
		if scannerNodeGroupMatches(item, filter.GetOperator(), filter.GetOperands()) {
			out = append(out, item)
		}
	}
	return out
}

func scannerNodeGroupMatches(
	item *datafeedv1.LibrarySymbolInfo,
	op datafeedv1.ScannerLogicalOperator,
	nodes []*datafeedv1.ScannerFilterNode,
) bool {
	if len(nodes) == 0 {
		return true
	}
	if op == datafeedv1.ScannerLogicalOperator_SCANNER_LOGICAL_OPERATOR_OR {
		for _, node := range nodes {
			if scannerNodeMatches(item, node) {
				return true
			}
		}
		return false
	}
	for _, node := range nodes {
		if !scannerNodeMatches(item, node) {
			return false
		}
	}
	return true
}

func scannerNodeMatches(item *datafeedv1.LibrarySymbolInfo, node *datafeedv1.ScannerFilterNode) bool {
	if node == nil {
		return true
	}
	if expr := node.GetExpression(); expr != nil {
		return scannerExpressionMatches(item, expr)
	}
	if group := node.GetOperation(); group != nil {
		return scannerNodeGroupMatches(item, group.GetOperator(), group.GetOperands())
	}
	return true
}

func scannerExpressionMatches(item *datafeedv1.LibrarySymbolInfo, expr *datafeedv1.ScannerFilterExpression) bool {
	if expr == nil {
		return true
	}

	columnValue := scannerColumnValue(item, expr.GetLeft())
	right := expr.GetRight()
	if right == nil {
		return false
	}

	switch expr.GetOperation() {
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_EQUAL:
		return scannerCompare(columnValue, right) == 0
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_NOT_EQUAL:
		return scannerCompare(columnValue, right) != 0
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_GREATER:
		return scannerCompare(columnValue, right) > 0
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_GREATER_OR_EQUAL:
		return scannerCompare(columnValue, right) >= 0
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_LESS:
		return scannerCompare(columnValue, right) < 0
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_LESS_OR_EQUAL:
		return scannerCompare(columnValue, right) <= 0
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_HAS:
		values := right.GetStringList()
		if values == nil {
			return false
		}
		for _, value := range values.GetValues() {
			if strings.EqualFold(columnValue.GetStringValue(), value) {
				return true
			}
		}
		return false
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_HAS_NONE_OF:
		values := right.GetStringList()
		if values == nil {
			return false
		}
		for _, value := range values.GetValues() {
			if strings.EqualFold(columnValue.GetStringValue(), value) {
				return false
			}
		}
		return true
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_MATCH:
		return strings.Contains(strings.ToLower(columnValue.GetStringValue()), strings.ToLower(right.GetStringValue()))
	case datafeedv1.ScannerFilterOperation_SCANNER_FILTER_OPERATION_NOT_MATCH:
		return !strings.Contains(strings.ToLower(columnValue.GetStringValue()), strings.ToLower(right.GetStringValue()))
	default:
		return true
	}
}

func scannerCompare(left *structpb.Value, right *datafeedv1.ScannerFilterValue) int {
	switch value := right.GetValue().(type) {
	case *datafeedv1.ScannerFilterValue_NumberValue:
		lv := left.GetNumberValue()
		rv := value.NumberValue
		if lv < rv {
			return -1
		}
		if lv > rv {
			return 1
		}
		return 0
	case *datafeedv1.ScannerFilterValue_BoolValue:
		lv := left.GetBoolValue()
		rv := value.BoolValue
		if lv == rv {
			return 0
		}
		if !lv && rv {
			return -1
		}
		return 1
	default:
		lv := strings.ToLower(left.GetStringValue())
		rv := strings.ToLower(right.GetStringValue())
		if lv < rv {
			return -1
		}
		if lv > rv {
			return 1
		}
		return 0
	}
}

func customFieldString(item *datafeedv1.LibrarySymbolInfo, key string) string {
	fields := item.GetLibraryCustomFields()
	if len(fields) == 0 {
		return ""
	}
	value, ok := fields[key]
	if !ok || value == nil {
		return ""
	}
	return value.GetStringValue()
}
