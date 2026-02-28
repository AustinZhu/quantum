package marketdata

import (
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/biz"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/data"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/service"
	"github.com/google/wire"
)

var ProviderSet = wire.NewSet(
	biz.NewService,
	data.NewQueryRepository,
	data.NewMarketProvider,
	service.NewDatafeedHandler,
	wire.Bind(new(biz.QueryRepository), new(*data.QueryRepository)),
	wire.Bind(new(biz.MarketProvider), new(*data.MarketProvider)),
)
