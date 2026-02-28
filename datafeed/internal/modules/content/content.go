package content

import (
	"github.com/AustinZhu/quantum/datafeed/internal/modules/content/biz"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/content/data"
	"github.com/google/wire"
)

var ProviderSet = wire.NewSet(
	biz.NewService,
	data.NewRepository,
	wire.Bind(new(biz.Repository), new(*data.Repository)),
)
