package biz

import "errors"

var ErrMarketProviderUnavailable = errors.New("market provider unavailable")

type Tick struct {
	Symbol string
	TsMS   int64
	Price  float64
	Size   float64
	Source string
}

type Bar struct {
	Symbol   string
	Interval string
	TsMS     int64
	Open     float64
	High     float64
	Low      float64
	Close    float64
	Volume   float64
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
