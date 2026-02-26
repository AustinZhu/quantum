package app

import (
	"context"
	"time"

	"github.com/austin/quantum/datafeed/internal/events"
	"github.com/austin/quantum/datafeed/internal/storage"
)

type Service struct {
	repo      storage.Repository
	publisher *events.Publisher
}

func NewService(repo storage.Repository, publisher *events.Publisher) *Service {
	return &Service{repo: repo, publisher: publisher}
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
