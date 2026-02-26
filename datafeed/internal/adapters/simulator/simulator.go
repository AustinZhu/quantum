package simulator

import (
	"math"
	"time"

	"github.com/austin/quantum/datafeed/internal/storage"
)

type TickSource interface {
	Generate(symbol string, count int) []storage.Tick
}

type DeterministicSource struct{}

func (s DeterministicSource) Generate(symbol string, count int) []storage.Tick {
	start := time.Now().Add(-time.Duration(count) * time.Second).UnixMilli()
	items := make([]storage.Tick, 0, count)
	price := 100.0
	for i := 0; i < count; i++ {
		price = price + math.Sin(float64(i)/8.0)*0.15
		items = append(items, storage.Tick{
			Symbol: symbol,
			TsMS:   start + int64(i*1000),
			Price:  price,
			Size:   1 + math.Mod(float64(i), 4),
			Source: "simulator",
		})
	}
	return items
}
