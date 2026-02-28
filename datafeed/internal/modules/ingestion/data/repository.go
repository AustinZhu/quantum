package data

import (
	"context"
	"fmt"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/postgres"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/biz"
	"github.com/jackc/pgx/v5"
	"github.com/lib/pq"
)

type Repository struct {
	db       *postgres.Client
	outboxTx outbox.TxWriter
}

func NewRepository(db *postgres.Client, outboxTx outbox.TxWriter) *Repository {
	return &Repository{db: db, outboxTx: outboxTx}
}

func (r *Repository) InsertTicksAndEvents(ctx context.Context, ticks []biz.Tick, events []biz.EventRecord) error {
	schema := r.db.Schema()
	return r.db.WithTx(ctx, func(tx pgx.Tx) error {
		for _, tick := range ticks {
			if _, err := tx.Exec(
				ctx,
				fmt.Sprintf(`INSERT INTO %s.ticks (symbol, ts_ms, price, size, source)
				 VALUES ($1, $2, $3, $4, $5)
				 ON CONFLICT (symbol, ts_ms, source) DO UPDATE SET price = EXCLUDED.price, size = EXCLUDED.size`, pq.QuoteIdentifier(schema)),
				tick.Symbol,
				tick.TsMS,
				tick.Price,
				tick.Size,
				tick.Source,
			); err != nil {
				return err
			}
		}
		outboxEvents := make([]outbox.Event, 0, len(events))
		for _, event := range events {
			outboxEvents = append(outboxEvents, outbox.Event{
				ID:            event.ID,
				AggregateType: event.AggregateType,
				AggregateID:   event.AggregateID,
				EventType:     event.EventType,
				EventVersion:  event.EventVersion,
				Payload:       event.Payload,
			})
		}
		return r.outboxTx.InsertTx(ctx, tx, outboxEvents)
	})
}
