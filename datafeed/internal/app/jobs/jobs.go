package jobs

import (
	"context"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/temporal"
)

type App struct {
	runner *temporal.Runner
}

func New(runner *temporal.Runner) *App {
	return &App{runner: runner}
}

func (a *App) Run(ctx context.Context) error {
	return a.runner.Run(ctx)
}
