package jobs

import (
	"github.com/AustinZhu/quantum/datafeed/internal/modules/jobs/biz"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/jobs/service"
	"github.com/google/wire"
)

var ProviderSet = wire.NewSet(
	biz.NewService,
	service.NewSyncMarketSymbolsTask,
	service.NewOutboxRecoveryTask,
	service.NewRebuildScannerProjectionTask,
	service.NewMarketBackfillTask,
	service.ProvideTasks,
)
