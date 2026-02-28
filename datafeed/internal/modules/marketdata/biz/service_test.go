package biz

import (
	"context"
	"testing"
	"time"
)

func TestNormalizeBarsMergesSameTimestamp(t *testing.T) {
	t.Parallel()

	in := make(chan Candle, 2)
	in <- Candle{TsMS: 1000, Open: 1, High: 2, Low: 1, Close: 2, Volume: 10, Confirmed: false}
	in <- Candle{TsMS: 1000, Close: 3, Volume: 12, Confirmed: true}
	close(in)

	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()

	out := normalizeBars(ctx, in)
	var last Candle
	for item := range out {
		last = item
	}

	if last.TsMS != 1000 || last.Close != 3 || last.Volume != 12 || !last.Confirmed {
		t.Fatalf("unexpected merged bar: %+v", last)
	}
}
