package broker

import (
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	"github.com/google/wire"
)

var ProviderSet = wire.NewSet(
	NewPublisher,
	NewCommandConsumer,
	wire.Bind(new(outbox.Publisher), new(*Publisher)),
)
