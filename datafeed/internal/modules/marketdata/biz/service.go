package biz

import "context"

type QueryRepository interface {
	ReplayTicks(ctx context.Context, symbol string, startMS, endMS int64, limit int32) ([]Tick, error)
	QueryBars(ctx context.Context, symbol string, interval string, startMS, endMS int64, limit int32) ([]Bar, error)
}

type MarketProvider interface {
	ListSymbols(ctx context.Context) ([]Symbol, error)
	GetHistoryCandles(ctx context.Context, symbol string, resolution string, fromSec int64, toSec int64, countback uint32) ([]Candle, error)
	GetTickers(ctx context.Context, symbols []string) ([]Ticker, error)
	SubscribeBars(ctx context.Context, symbol string, resolution string) (<-chan Candle, <-chan error, error)
	SubscribeTicks(ctx context.Context, symbol string) (<-chan Ticker, <-chan error, error)
}

type Service struct {
	repo   QueryRepository
	market MarketProvider
}

func NewService(repo QueryRepository, market MarketProvider) *Service {
	return &Service{repo: repo, market: market}
}

func (s *Service) ReplayTicks(ctx context.Context, symbol string, startMS, endMS int64, limit int32) ([]Tick, error) {
	return s.repo.ReplayTicks(ctx, symbol, startMS, endMS, limit)
}

func (s *Service) QueryBars(ctx context.Context, symbol string, interval string, startMS, endMS int64, limit int32) ([]Bar, error) {
	return s.repo.QueryBars(ctx, symbol, interval, startMS, endMS, limit)
}

func (s *Service) HasMarketProvider() bool {
	return s.market != nil
}

func (s *Service) ListMarketSymbols(ctx context.Context) ([]Symbol, error) {
	if s.market == nil {
		return nil, ErrMarketProviderUnavailable
	}
	return s.market.ListSymbols(ctx)
}

func (s *Service) GetMarketHistory(ctx context.Context, symbol string, resolution string, fromSec int64, toSec int64, countback uint32) ([]Candle, error) {
	if s.market == nil {
		return nil, ErrMarketProviderUnavailable
	}
	return s.market.GetHistoryCandles(ctx, symbol, resolution, fromSec, toSec, countback)
}

func (s *Service) GetMarketTickers(ctx context.Context, symbols []string) ([]Ticker, error) {
	if s.market == nil {
		return nil, ErrMarketProviderUnavailable
	}
	return s.market.GetTickers(ctx, symbols)
}

func (s *Service) SubscribeMarketBars(ctx context.Context, symbol string, resolution string) (<-chan Candle, <-chan error, error) {
	if s.market == nil {
		return nil, nil, ErrMarketProviderUnavailable
	}
	updates, errs, err := s.market.SubscribeBars(ctx, symbol, resolution)
	if err != nil {
		return nil, nil, err
	}
	return normalizeBars(ctx, updates), errs, nil
}

func (s *Service) SubscribeMarketTicks(ctx context.Context, symbol string) (<-chan Ticker, <-chan error, error) {
	if s.market == nil {
		return nil, nil, ErrMarketProviderUnavailable
	}
	return s.market.SubscribeTicks(ctx, symbol)
}

func normalizeBars(ctx context.Context, updates <-chan Candle) <-chan Candle {
	out := make(chan Candle)
	go func() {
		defer close(out)
		latest := map[int64]Candle{}
		for {
			select {
			case <-ctx.Done():
				return
			case candle, ok := <-updates:
				if !ok {
					return
				}
				if existing, ok := latest[candle.TsMS]; ok {
					merged := existing
					if candle.Open != 0 {
						merged.Open = candle.Open
					}
					if candle.High != 0 {
						merged.High = candle.High
					}
					if candle.Low != 0 {
						merged.Low = candle.Low
					}
					if candle.Close != 0 {
						merged.Close = candle.Close
					}
					if candle.Volume != 0 {
						merged.Volume = candle.Volume
					}
					merged.Confirmed = merged.Confirmed || candle.Confirmed
					latest[candle.TsMS] = merged
					out <- merged
					continue
				}
				latest[candle.TsMS] = candle
				out <- candle
			}
		}
	}()
	return out
}
