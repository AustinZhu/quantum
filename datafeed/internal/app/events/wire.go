//go:build wireinject
// +build wireinject

package events

import (
	"context"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/broker"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/clock"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/postgres"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/redis"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner"
	"github.com/google/wire"
)

func InitializeEventsApp(ctx context.Context, configPath string) (*App, func(), error) {
	wire.Build(
		conf.New,
		clock.New,
		postgres.ProviderSet,
		redis.New,
		broker.ProviderSet,
		outbox.ProviderSet,
		ingestion.ProviderSet,
		marketdata.ProviderSet,
		scanner.ProviderSet,
		New,
	)
	return nil, nil, nil
}
