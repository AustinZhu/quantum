package postgres

import (
	"context"
	"fmt"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	"github.com/google/wire"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Client struct {
	pool           *pgxpool.Pool
	schema         string
	migrationsPath string
}

var ProviderSet = wire.NewSet(
	New,
	NewOutboxStore,
	wire.Bind(new(outbox.Store), new(*OutboxStore)),
	wire.Bind(new(outbox.TxWriter), new(*OutboxStore)),
)

func New(ctx context.Context, cfg conf.Config) (*Client, func(), error) {
	pool, err := pgxpool.New(ctx, cfg.Storage.PostgresURL)
	if err != nil {
		return nil, nil, fmt.Errorf("new pgx pool: %w", err)
	}
	client := &Client{
		pool:           pool,
		schema:         cfg.Storage.PostgresSchema,
		migrationsPath: cfg.Storage.MigrationsPath,
	}
	cleanup := func() {
		pool.Close()
	}
	return client, cleanup, nil
}

func (c *Client) Schema() string {
	if c == nil || c.schema == "" {
		return "datafeed"
	}
	return c.schema
}

func (c *Client) Pool() *pgxpool.Pool {
	if c == nil {
		return nil
	}
	return c.pool
}

func (c *Client) WithTx(ctx context.Context, fn func(tx pgx.Tx) error) error {
	tx, err := c.pool.BeginTx(ctx, pgx.TxOptions{})
	if err != nil {
		return err
	}
	defer func() {
		_ = tx.Rollback(ctx)
	}()
	if err := fn(tx); err != nil {
		return err
	}
	return tx.Commit(ctx)
}

func (c *Client) RunMigrations() error {
	return runMigrations(c.pool.Config().ConnString(), c.migrationsPath)
}
