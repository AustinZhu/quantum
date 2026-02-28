package data

import (
	"context"
	"fmt"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/postgres"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/biz"
	"github.com/lib/pq"
)

type Repository struct {
	db *postgres.Client
}

func NewRepository(db *postgres.Client) *Repository {
	return &Repository{db: db}
}

func (r *Repository) ListSymbols(ctx context.Context) ([]biz.Symbol, error) {
	schema := r.db.Schema()
	rows, err := r.db.Pool().Query(ctx,
		fmt.Sprintf(`SELECT symbol, ticker, description, exchange, type, state, inst_type
		FROM %s.scanner_symbols
		ORDER BY symbol ASC`, pq.QuoteIdentifier(schema)),
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	out := make([]biz.Symbol, 0)
	for rows.Next() {
		var item biz.Symbol
		if err := rows.Scan(&item.Symbol, &item.Ticker, &item.Description, &item.Exchange, &item.Type, &item.State, &item.InstType); err != nil {
			return nil, err
		}
		out = append(out, item)
	}
	return out, rows.Err()
}

func (r *Repository) UpsertSymbols(ctx context.Context, items []biz.Symbol) error {
	if len(items) == 0 {
		return nil
	}
	schema := r.db.Schema()
	for _, item := range items {
		_, err := r.db.Pool().Exec(ctx,
			fmt.Sprintf(`INSERT INTO %s.scanner_symbols (symbol, ticker, description, exchange, type, state, inst_type, updated_at)
			VALUES ($1,$2,$3,$4,$5,$6,$7,NOW())
			ON CONFLICT (symbol)
			DO UPDATE SET ticker=EXCLUDED.ticker, description=EXCLUDED.description, exchange=EXCLUDED.exchange, type=EXCLUDED.type, state=EXCLUDED.state, inst_type=EXCLUDED.inst_type, updated_at=NOW()`, pq.QuoteIdentifier(schema)),
			item.Symbol,
			item.Ticker,
			item.Description,
			item.Exchange,
			item.Type,
			item.State,
			item.InstType,
		)
		if err != nil {
			return err
		}
	}
	return nil
}

func (r *Repository) HasProcessedEvent(ctx context.Context, eventID string, consumer string) (bool, error) {
	schema := r.db.Schema()
	row := r.db.Pool().QueryRow(ctx,
		fmt.Sprintf(`SELECT EXISTS(SELECT 1 FROM %s.processed_events WHERE event_id=$1 AND consumer_name=$2)`, pq.QuoteIdentifier(schema)),
		eventID,
		consumer,
	)
	var exists bool
	if err := row.Scan(&exists); err != nil {
		return false, err
	}
	return exists, nil
}

func (r *Repository) MarkProcessedEvent(ctx context.Context, eventID string, consumer string) error {
	schema := r.db.Schema()
	_, err := r.db.Pool().Exec(ctx,
		fmt.Sprintf(`INSERT INTO %s.processed_events (event_id, consumer_name, processed_at)
		VALUES ($1,$2,NOW())
		ON CONFLICT (event_id, consumer_name) DO NOTHING`, pq.QuoteIdentifier(schema)),
		eventID,
		consumer,
	)
	return err
}
