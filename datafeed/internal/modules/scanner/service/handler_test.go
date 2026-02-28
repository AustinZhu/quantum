package service

import (
	"testing"

	datafeedv1 "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1"
	"github.com/samber/lo"
	"google.golang.org/protobuf/types/known/structpb"
)

func TestScannerRange(t *testing.T) {
	t.Parallel()

	start, end := scannerRange(&datafeedv1.ScannerRange{Start: 2, End: 4}, 10)
	if start != 2 || end != 5 {
		t.Fatalf("unexpected range: start=%d end=%d", start, end)
	}

	start, end = scannerRange(&datafeedv1.ScannerRange{Start: 20, End: 25}, 10)
	if start != 10 || end != 10 {
		t.Fatalf("unexpected out-of-bounds range: start=%d end=%d", start, end)
	}
}

func TestFilterByScannerMap(t *testing.T) {
	t.Parallel()

	items := []*datafeedv1.LibrarySymbolInfo{
		{Name: "BTC-USDT", Ticker: lo.ToPtr("BTC-USDT")},
		{Name: "ETH-USDT", Ticker: lo.ToPtr("ETH-USDT")},
	}
	filtered := filterByScannerMap(items, map[string]*structpb.Value{
		"ETH-USDT": structpb.NewStringValue("ETH-USDT"),
	})
	if len(filtered) != 1 || filtered[0].GetName() != "ETH-USDT" {
		t.Fatalf("unexpected scanner symbol filter result: %#v", filtered)
	}
}
