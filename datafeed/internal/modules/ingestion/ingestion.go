package ingestion

import (
	"github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/biz"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/data"
	"github.com/google/wire"
)

var ProviderSet = wire.NewSet(
	biz.NewService,
	data.NewRepository,
	wire.Bind(new(biz.Repository), new(*data.Repository)),
)
