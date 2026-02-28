package jobs

import (
	"context"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/temporal"
	"github.com/google/wire"
)

type App struct {
	runner *temporal.Runner
}

var ProviderSet = wire.NewSet(New)

func New(runner *temporal.Runner) *App {
	return &App{runner: runner}
}

func (a *App) Run(ctx context.Context) error {
	return a.runner.Run(ctx)
}
