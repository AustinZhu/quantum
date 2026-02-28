package service

import (
	datafeedv1 "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/biz"
)

func TicksFromProto(items []*datafeedv1.Tick) []biz.Tick {
	out := make([]biz.Tick, 0, len(items))
	for _, item := range items {
		out = append(out, biz.Tick{
			Symbol: item.GetSymbol(),
			TsMS:   item.GetTsMs(),
			Price:  item.GetPrice(),
			Size:   item.GetSize(),
			Source: item.GetSource(),
		})
	}
	return out
}
