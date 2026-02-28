package postgres

import (
	"fmt"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/storage"
)

func RunMigrations(cfg conf.Config) error {
	if err := storage.RunMigrations(cfg.Storage.PostgresURL, cfg.Storage.MigrationsPath); err != nil {
		return fmt.Errorf("run migrations: %w", err)
	}
	return nil
}
