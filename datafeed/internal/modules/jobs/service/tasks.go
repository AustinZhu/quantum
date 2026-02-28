package service

import (
	"context"
	"time"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/temporal"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/jobs/biz"
)

type SyncMarketSymbolsTask struct {
	svc      *biz.Service
	interval time.Duration
}

type OutboxRecoveryTask struct {
	svc      *biz.Service
	interval time.Duration
}

type RebuildScannerProjectionTask struct {
	svc      *biz.Service
	interval time.Duration
}

type MarketBackfillTask struct {
	svc      *biz.Service
	interval time.Duration
}

func NewSyncMarketSymbolsTask(cfg conf.Config, svc *biz.Service) *SyncMarketSymbolsTask {
	return &SyncMarketSymbolsTask{svc: svc, interval: time.Duration(cfg.Jobs.SyncSymbolsIntervalSec) * time.Second}
}

func NewOutboxRecoveryTask(cfg conf.Config, svc *biz.Service) *OutboxRecoveryTask {
	return &OutboxRecoveryTask{svc: svc, interval: time.Duration(cfg.Jobs.OutboxRecoveryIntervalSec) * time.Second}
}

func NewRebuildScannerProjectionTask(cfg conf.Config, svc *biz.Service) *RebuildScannerProjectionTask {
	return &RebuildScannerProjectionTask{svc: svc, interval: time.Duration(cfg.Jobs.ProjectionRebuildIntervalSec) * time.Second}
}

func NewMarketBackfillTask(cfg conf.Config, svc *biz.Service) *MarketBackfillTask {
	return &MarketBackfillTask{svc: svc, interval: time.Duration(cfg.Jobs.MarketBackfillIntervalSec) * time.Second}
}

func (t *SyncMarketSymbolsTask) Name() string                  { return "SyncMarketSymbolsWorkflow" }
func (t *SyncMarketSymbolsTask) Interval() time.Duration       { return t.interval }
func (t *SyncMarketSymbolsTask) Run(ctx context.Context) error { return t.svc.SyncMarketSymbols(ctx) }

func (t *OutboxRecoveryTask) Name() string                  { return "OutboxRecoveryWorkflow" }
func (t *OutboxRecoveryTask) Interval() time.Duration       { return t.interval }
func (t *OutboxRecoveryTask) Run(ctx context.Context) error { return t.svc.OutboxRecovery(ctx) }

func (t *RebuildScannerProjectionTask) Name() string            { return "RebuildScannerProjectionWorkflow" }
func (t *RebuildScannerProjectionTask) Interval() time.Duration { return t.interval }
func (t *RebuildScannerProjectionTask) Run(ctx context.Context) error {
	return t.svc.RebuildScannerProjection(ctx)
}

func (t *MarketBackfillTask) Name() string                  { return "MarketBackfillWorkflow" }
func (t *MarketBackfillTask) Interval() time.Duration       { return t.interval }
func (t *MarketBackfillTask) Run(ctx context.Context) error { return t.svc.MarketBackfill(ctx) }

func ProvideTasks(
	a *SyncMarketSymbolsTask,
	b *OutboxRecoveryTask,
	c *RebuildScannerProjectionTask,
	d *MarketBackfillTask,
) []temporal.Task {
	return []temporal.Task{a, b, c, d}
}
