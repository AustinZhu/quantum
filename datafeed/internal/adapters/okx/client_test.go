package okx

import "testing"

func TestResolutionToOKXBar(t *testing.T) {
	t.Parallel()

	cases := map[string]string{
		"1":   "1m",
		"5":   "5m",
		"60":  "1H",
		"1D":  "1D",
		"1W":  "1W",
		"1M":  "1M",
		" M ": "1M",
	}
	for input, expected := range cases {
		got, err := resolutionToOKXBar(input)
		if err != nil {
			t.Fatalf("resolutionToOKXBar(%q) returned unexpected error: %v", input, err)
		}
		if got != expected {
			t.Fatalf("resolutionToOKXBar(%q) = %q, want %q", input, got, expected)
		}
	}

	if _, err := resolutionToOKXBar("2"); err == nil {
		t.Fatal("expected unsupported resolution error for 2")
	}
}

func TestParseCandleRow(t *testing.T) {
	t.Parallel()

	row := []string{"1710000000000", "10.1", "11.2", "9.8", "10.7", "124.5", "0", "0", "1"}
	candle, err := parseCandleRow(row)
	if err != nil {
		t.Fatalf("parseCandleRow() returned unexpected error: %v", err)
	}
	if candle.TsMS != 1710000000000 {
		t.Fatalf("unexpected ts: %d", candle.TsMS)
	}
	if candle.Open != 10.1 || candle.High != 11.2 || candle.Low != 9.8 || candle.Close != 10.7 {
		t.Fatalf("unexpected candle OHLC: %+v", candle)
	}
	if candle.Volume != 124.5 {
		t.Fatalf("unexpected volume: %f", candle.Volume)
	}
	if !candle.Confirmed {
		t.Fatal("expected confirmed candle")
	}
}

func TestNormalizeConfigDefaultInstType(t *testing.T) {
	t.Parallel()

	cfg := normalizeConfig(Config{})
	if len(cfg.InstrumentTypes) != 1 || cfg.InstrumentTypes[0] != "SPOT" {
		t.Fatalf("unexpected default instrument types: %#v", cfg.InstrumentTypes)
	}
}
