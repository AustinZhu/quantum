package biz

import (
	"context"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	scannerbiz "github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/biz"
)

type Service struct {
	scanner    *scannerbiz.Service
	dispatcher *outbox.Dispatcher
}

func NewService(scanner *scannerbiz.Service, dispatcher *outbox.Dispatcher) *Service {
	return &Service{scanner: scanner, dispatcher: dispatcher}
}

func (s *Service) SyncMarketSymbols(ctx context.Context) error {
	return s.scanner.SyncFromMarket(ctx)
}

func (s *Service) OutboxRecovery(ctx context.Context) error {
	return s.dispatcher.DispatchOnce(ctx)
}

func (s *Service) RebuildScannerProjection(ctx context.Context) error {
	return s.scanner.SyncFromMarket(ctx)
}

func (s *Service) MarketBackfill(context.Context) error {
	// Placeholder: backfill workflow hooks market history ingestion in subsequent iterations.
	return nil
}
