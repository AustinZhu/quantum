package api

import (
	"context"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/postgres"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/server"
)

type App struct {
	server   *server.HTTPServer
	postgres *postgres.Client
}

func New(server *server.HTTPServer, pg *postgres.Client) *App {
	return &App{server: server, postgres: pg}
}

func (a *App) Run(ctx context.Context) error {
	if err := a.postgres.RunMigrations(); err != nil {
		return err
	}
	return a.server.Run(ctx)
}
