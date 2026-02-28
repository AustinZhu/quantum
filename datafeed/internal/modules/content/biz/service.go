package biz

import (
	"context"
	"time"
)

type Repository interface {
	InsertNews(ctx context.Context, item NewsEvent) error
	InsertSocial(ctx context.Context, item SocialEvent) error
	ListNews(ctx context.Context, symbol string, limit int32) ([]NewsEvent, error)
	ListSocial(ctx context.Context, symbol string, limit int32) ([]SocialEvent, error)
}

type Service struct {
	repo Repository
}

func NewService(repo Repository) *Service {
	return &Service{repo: repo}
}

func (s *Service) RecordNews(ctx context.Context, item NewsEvent) error {
	if item.TsMS == 0 {
		item.TsMS = time.Now().UnixMilli()
	}
	return s.repo.InsertNews(ctx, item)
}

func (s *Service) RecordSocial(ctx context.Context, item SocialEvent) error {
	if item.TsMS == 0 {
		item.TsMS = time.Now().UnixMilli()
	}
	return s.repo.InsertSocial(ctx, item)
}

func (s *Service) ListNews(ctx context.Context, symbol string, limit int32) ([]NewsEvent, error) {
	return s.repo.ListNews(ctx, symbol, limit)
}

func (s *Service) ListSocial(ctx context.Context, symbol string, limit int32) ([]SocialEvent, error) {
	return s.repo.ListSocial(ctx, symbol, limit)
}
