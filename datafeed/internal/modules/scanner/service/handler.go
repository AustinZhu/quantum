package service

import (
	"context"
	"sort"
	"strings"

	connectrpc "connectrpc.com/connect"
	datafeedv1 "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1"
	datafeedv1connect "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1/datafeedv1connect"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/biz"
	"github.com/samber/lo"
	"google.golang.org/protobuf/types/known/structpb"
)

type Handler struct {
	datafeedv1connect.UnimplementedScannerServiceHandler
	svc *biz.Service
}

func NewHandler(svc *biz.Service) *Handler {
	return &Handler{svc: svc}
}

func (h *Handler) ScanSymbols(
	ctx context.Context,
	req *connectrpc.Request[datafeedv1.ScanSymbolsRequest],
) (*connectrpc.Response[datafeedv1.ScanSymbolsResponse], error) {
	symbols, err := h.svc.ListSymbols(ctx)
	if err != nil {
		return nil, connectrpc.NewError(connectrpc.CodeInternal, err)
	}
	library := lo.Map(symbols, func(item biz.Symbol, _ int) *datafeedv1.LibrarySymbolInfo {
		return &datafeedv1.LibrarySymbolInfo{
			Name:           item.Symbol,
			Ticker:         lo.ToPtr(item.Ticker),
			Description:    item.Description,
			Exchange:       item.Exchange,
			ListedExchange: item.Exchange,
			Type:           item.Type,
			LibraryCustomFields: map[string]*structpb.Value{
				"inst_type": structpb.NewStringValue(item.InstType),
				"state":     structpb.NewStringValue(item.State),
			},
		}
	})

	filtered := filterByScannerMap(library, req.Msg.GetSymbols())
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
		return &datafeedv1.ScanSymbolRow{S: item.GetName(), D: values}
	})
	return connectrpc.NewResponse(&datafeedv1.ScanSymbolsResponse{TotalCount: uint32(total), Data: rows}), nil
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

func scannerNodeGroupMatches(item *datafeedv1.LibrarySymbolInfo, op datafeedv1.ScannerLogicalOperator, nodes []*datafeedv1.ScannerFilterNode) bool {
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
