package app

import (
	"context"
	"errors"
	"time"

	"github.com/austin/quantum/datafeed/internal/adapters/okx"
	"github.com/austin/quantum/datafeed/internal/events"
	"github.com/austin/quantum/datafeed/internal/storage"
)

var ErrMarketProviderUnavailable = errors.New("market provider unavailable")

type Service struct {
	repo      storage.Repository
	publisher *events.Publisher
	okxClient *okx.Client
}

func NewService(repo storage.Repository, publisher *events.Publisher, okxClient *okx.Client) *Service {
	return &Service{repo: repo, publisher: publisher, okxClient: okxClient}
}

func (s *Service) IngestTicks(ctx context.Context, ticks []storage.Tick) (int, error) {
	if len(ticks) == 0 {
		return 0, nil
	}
	if err := s.repo.InsertTicks(ctx, ticks); err != nil {
		return 0, err
	}
	for _, tick := range ticks {
		_ = s.publisher.PublishTick(ctx, tick.Symbol, tick.TsMS)
	}
	return len(ticks), nil
}

func (s *Service) ReplayTicks(ctx context.Context, symbol string, startMS, endMS int64, limit int32) ([]storage.Tick, error) {
	return s.repo.ReplayTicks(ctx, symbol, startMS, endMS, limit)
}

func (s *Service) QueryBars(ctx context.Context, symbol string, interval string, startMS, endMS int64, limit int32) ([]storage.Bar, error) {
	return s.repo.QueryBars(ctx, symbol, interval, startMS, endMS, limit)
}

func (s *Service) RecordNews(ctx context.Context, item storage.NewsEvent) error {
	if item.TsMS == 0 {
		item.TsMS = time.Now().UnixMilli()
	}
	return s.repo.InsertNews(ctx, item)
}

func (s *Service) RecordSocial(ctx context.Context, item storage.SocialEvent) error {
	if item.TsMS == 0 {
		item.TsMS = time.Now().UnixMilli()
	}
	return s.repo.InsertSocial(ctx, item)
}

func (s *Service) HasMarketProvider() bool {
	return s.okxClient != nil
}

func (s *Service) ListMarketSymbols(ctx context.Context) ([]okx.Symbol, error) {
	if s.okxClient == nil {
		return nil, ErrMarketProviderUnavailable
	}
	return s.okxClient.ListSymbols(ctx)
}

func (s *Service) GetMarketHistory(
	ctx context.Context,
	symbol string,
	resolution string,
	fromSec int64,
	toSec int64,
	countback uint32,
) ([]okx.Candle, error) {
	if s.okxClient == nil {
		return nil, ErrMarketProviderUnavailable
	}
	return s.okxClient.GetHistoryCandles(ctx, symbol, resolution, fromSec, toSec, countback)
}

func (s *Service) GetMarketTickers(ctx context.Context, symbols []string) ([]okx.Ticker, error) {
	if s.okxClient == nil {
		return nil, ErrMarketProviderUnavailable
	}
	return s.okxClient.GetTickers(ctx, symbols)
}

func (s *Service) SubscribeMarketBars(ctx context.Context, symbol string, resolution string) (<-chan okx.Candle, <-chan error, error) {
	if s.okxClient == nil {
		return nil, nil, ErrMarketProviderUnavailable
	}
	return s.okxClient.SubscribeBars(ctx, symbol, resolution)
}

func (s *Service) SubscribeMarketTicks(ctx context.Context, symbol string) (<-chan okx.Ticker, <-chan error, error) {
	if s.okxClient == nil {
		return nil, nil, ErrMarketProviderUnavailable
	}
	return s.okxClient.SubscribeTicks(ctx, symbol)
}
