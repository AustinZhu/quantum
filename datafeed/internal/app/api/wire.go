//go:build wireinject
// +build wireinject

package api

import (
	"context"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/auth"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/clock"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/observability"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/postgres"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/server"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/validation"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/content"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner"
	"github.com/google/wire"
)

func InitializeAPIApp(ctx context.Context, configPath string) (*App, func(), error) {
	wire.Build(
		conf.New,
		clock.New,
		auth.New,
		observability.New,
		validation.New,
		postgres.ProviderSet,
		ingestion.ProviderSet,
		content.ProviderSet,
		marketdata.ProviderSet,
		scanner.ProviderSet,
		server.ProviderSet,
		New,
	)
	return nil, nil, nil
}
