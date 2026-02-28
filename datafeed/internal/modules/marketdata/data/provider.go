package data

import (
	"context"
	"strings"
	"time"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/providers"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/biz"
)

type MarketProvider struct {
	inner *providers.Client
}

func NewMarketProvider(cfg conf.Config) *MarketProvider {
	client := providers.NewClient(providers.Config{
		RESTBaseURL:     cfg.Integration.OKX.RESTBaseURL,
		WSPublicURL:     cfg.Integration.OKX.WSPublicURL,
		WSBusinessURL:   cfg.Integration.OKX.WSBusinessURL,
		InstrumentTypes: splitAndTrim(cfg.Integration.OKX.InstTypes),
		HTTPTimeout:     time.Duration(cfg.Integration.OKX.HTTPTimeoutSec) * time.Second,
		SymbolCacheTTL:  time.Duration(cfg.Integration.OKX.SymbolCacheSec) * time.Second,
	})
	return &MarketProvider{inner: client}
}

func (p *MarketProvider) ListSymbols(ctx context.Context) ([]biz.Symbol, error) {
	items, err := p.inner.ListSymbols(ctx)
	if err != nil {
		return nil, err
	}
	result := make([]biz.Symbol, 0, len(items))
	for _, item := range items {
		result = append(result, biz.Symbol{
			InstrumentType:   item.InstrumentType,
			ID:               item.ID,
			BaseCurrency:     item.BaseCurrency,
			QuoteCurrency:    item.QuoteCurrency,
			SettleCurrency:   item.SettleCurrency,
			State:            item.State,
			TickSize:         item.TickSize,
			LotSize:          item.LotSize,
			MinSize:          item.MinSize,
			ContractValue:    item.ContractValue,
			ContractMult:     item.ContractMult,
			Underlying:       item.Underlying,
			InstrumentFamily: item.InstrumentFamily,
		})
	}
	return result, nil
}

func (p *MarketProvider) GetHistoryCandles(ctx context.Context, symbol string, resolution string, fromSec int64, toSec int64, countback uint32) ([]biz.Candle, error) {
	items, err := p.inner.GetHistoryCandles(ctx, symbol, resolution, fromSec, toSec, countback)
	if err != nil {
		return nil, err
	}
	result := make([]biz.Candle, 0, len(items))
	for _, item := range items {
		result = append(result, biz.Candle{
			TsMS:      item.TsMS,
			Open:      item.Open,
			High:      item.High,
			Low:       item.Low,
			Close:     item.Close,
			Volume:    item.Volume,
			Confirmed: item.Confirmed,
		})
	}
	return result, nil
}

func (p *MarketProvider) GetTickers(ctx context.Context, symbols []string) ([]biz.Ticker, error) {
	items, err := p.inner.GetTickers(ctx, symbols)
	if err != nil {
		return nil, err
	}
	result := make([]biz.Ticker, 0, len(items))
	for _, item := range items {
		result = append(result, biz.Ticker{
			Symbol:      item.Symbol,
			TsMS:        item.TsMS,
			LastPrice:   item.LastPrice,
			LastSize:    item.LastSize,
			BidPrice:    item.BidPrice,
			AskPrice:    item.AskPrice,
			Open24h:     item.Open24h,
			High24h:     item.High24h,
			Low24h:      item.Low24h,
			Volume24h:   item.Volume24h,
			VolumeCcy24: item.VolumeCcy24,
		})
	}
	return result, nil
}

func (p *MarketProvider) SubscribeBars(ctx context.Context, symbol string, resolution string) (<-chan biz.Candle, <-chan error, error) {
	updates, errs, err := p.inner.SubscribeBars(ctx, symbol, resolution)
	if err != nil {
		return nil, nil, err
	}
	out := make(chan biz.Candle, cap(updates))
	go func() {
		defer close(out)
		for item := range updates {
			out <- biz.Candle{
				TsMS:      item.TsMS,
				Open:      item.Open,
				High:      item.High,
				Low:       item.Low,
				Close:     item.Close,
				Volume:    item.Volume,
				Confirmed: item.Confirmed,
			}
		}
	}()
	return out, errs, nil
}

func (p *MarketProvider) SubscribeTicks(ctx context.Context, symbol string) (<-chan biz.Ticker, <-chan error, error) {
	updates, errs, err := p.inner.SubscribeTicks(ctx, symbol)
	if err != nil {
		return nil, nil, err
	}
	out := make(chan biz.Ticker, cap(updates))
	go func() {
		defer close(out)
		for item := range updates {
			out <- biz.Ticker{
				Symbol:      item.Symbol,
				TsMS:        item.TsMS,
				LastPrice:   item.LastPrice,
				LastSize:    item.LastSize,
				BidPrice:    item.BidPrice,
				AskPrice:    item.AskPrice,
				Open24h:     item.Open24h,
				High24h:     item.High24h,
				Low24h:      item.Low24h,
				Volume24h:   item.Volume24h,
				VolumeCcy24: item.VolumeCcy24,
			}
		}
	}()
	return out, errs, nil
}

func splitAndTrim(raw string) []string {
	parts := strings.Split(raw, ",")
	out := make([]string, 0, len(parts))
	for _, part := range parts {
		value := strings.TrimSpace(part)
		if value != "" {
			out = append(out, value)
		}
	}
	return out
}
