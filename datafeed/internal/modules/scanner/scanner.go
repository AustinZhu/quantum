package scanner

import (
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/biz"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/data"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/service"
	"github.com/google/wire"
)

var ProviderSet = wire.NewSet(
	biz.NewService,
	data.NewRepository,
	service.NewHandler,
	service.NewProjectionUpdater,
	wire.Bind(new(biz.Repository), new(*data.Repository)),
	wire.Bind(new(outbox.ProjectionUpdater), new(*service.ProjectionUpdater)),
)
