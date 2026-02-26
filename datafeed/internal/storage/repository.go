package storage

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository interface {
	InsertTicks(ctx context.Context, ticks []Tick) error
	ReplayTicks(ctx context.Context, symbol string, startMS, endMS int64, limit int32) ([]Tick, error)
	QueryBars(ctx context.Context, symbol string, interval string, startMS, endMS int64, limit int32) ([]Bar, error)
	InsertNews(ctx context.Context, event NewsEvent) error
	InsertSocial(ctx context.Context, event SocialEvent) error
}

type PostgresRepository struct {
	pool *pgxpool.Pool
}

func NewPostgresRepository(ctx context.Context, dbURL string) (*PostgresRepository, error) {
	pool, err := pgxpool.New(ctx, dbURL)
	if err != nil {
		return nil, fmt.Errorf("new pgx pool: %w", err)
	}
	return &PostgresRepository{pool: pool}, nil
}

func (r *PostgresRepository) Close() {
	r.pool.Close()
}

func (r *PostgresRepository) InsertTicks(ctx context.Context, ticks []Tick) error {
	for _, tick := range ticks {
		if _, err := r.pool.Exec(
			ctx,
			`INSERT INTO datafeed.ticks (symbol, ts_ms, price, size, source)
			 VALUES ($1, $2, $3, $4, $5)
			 ON CONFLICT (symbol, ts_ms, source) DO UPDATE SET price = EXCLUDED.price, size = EXCLUDED.size`,
			tick.Symbol, tick.TsMS, tick.Price, tick.Size, tick.Source,
		); err != nil {
			return err
		}
	}
	return nil
}

func (r *PostgresRepository) ReplayTicks(ctx context.Context, symbol string, startMS, endMS int64, limit int32) ([]Tick, error) {
	rows, err := r.pool.Query(ctx,
		`SELECT symbol, ts_ms, price, size, source
		 FROM datafeed.ticks
		 WHERE symbol = $1 AND ts_ms >= $2 AND ts_ms <= $3
		 ORDER BY ts_ms ASC LIMIT $4`,
		symbol, startMS, endMS, limit,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	result := make([]Tick, 0)
	for rows.Next() {
		var tick Tick
		if err := rows.Scan(&tick.Symbol, &tick.TsMS, &tick.Price, &tick.Size, &tick.Source); err != nil {
			return nil, err
		}
		result = append(result, tick)
	}
	return result, rows.Err()
}

func (r *PostgresRepository) QueryBars(ctx context.Context, symbol string, interval string, startMS, endMS int64, limit int32) ([]Bar, error) {
	table := "datafeed.bars_1m"
	if interval == "5m" {
		table = "datafeed.bars_5m"
	}
	query := fmt.Sprintf(`SELECT symbol, interval, ts_ms, open, high, low, close, volume
		FROM %s
		WHERE symbol=$1 AND ts_ms >= $2 AND ts_ms <= $3
		ORDER BY ts_ms ASC LIMIT $4`, table)
	rows, err := r.pool.Query(ctx, query, symbol, startMS, endMS, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	result := make([]Bar, 0)
	for rows.Next() {
		var bar Bar
		if err := rows.Scan(&bar.Symbol, &bar.Interval, &bar.TsMS, &bar.Open, &bar.High, &bar.Low, &bar.Close, &bar.Volume); err != nil {
			return nil, err
		}
		result = append(result, bar)
	}
	return result, rows.Err()
}

func (r *PostgresRepository) InsertNews(ctx context.Context, event NewsEvent) error {
	_, err := r.pool.Exec(ctx,
		`INSERT INTO datafeed.news_events (id, symbol, title, url, ts_ms, source)
		 VALUES ($1, $2, $3, $4, $5, $6)
		 ON CONFLICT (id) DO NOTHING`,
		event.ID, event.Symbol, event.Title, event.URL, event.TsMS, event.Source,
	)
	return err
}

func (r *PostgresRepository) InsertSocial(ctx context.Context, event SocialEvent) error {
	_, err := r.pool.Exec(ctx,
		`INSERT INTO datafeed.social_events (id, symbol, platform, author, text, ts_ms, sentiment)
		 VALUES ($1, $2, $3, $4, $5, $6, $7)
		 ON CONFLICT (id) DO NOTHING`,
		event.ID, event.Symbol, event.Platform, event.Author, event.Text, event.TsMS, event.Sentiment,
	)
	return err
}
