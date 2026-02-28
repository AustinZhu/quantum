//go:build wireinject
// +build wireinject

package jobs

import (
	"context"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/broker"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/clock"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/postgres"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/redis"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/temporal"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/jobs"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner"
	"github.com/google/wire"
)

func InitializeJobsApp(ctx context.Context, configPath string) (*App, func(), error) {
	wire.Build(
		conf.ProviderSet,
		clock.ProviderSet,
		postgres.ProviderSet,
		redis.ProviderSet,
		broker.ProviderSet,
		outbox.ProviderSet,
		marketdata.ProviderSet,
		scanner.ProviderSet,
		jobs.ProviderSet,
		temporal.ProviderSet,
		ProviderSet,
	)
	return nil, nil, nil
}
