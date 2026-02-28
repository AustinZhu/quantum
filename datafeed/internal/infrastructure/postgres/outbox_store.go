package postgres

import (
	"context"
	"fmt"
	"time"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	"github.com/jackc/pgx/v5"
	"github.com/lib/pq"
)

type OutboxStore struct {
	db *Client
}

func NewOutboxStore(db *Client) *OutboxStore {
	return &OutboxStore{db: db}
}

func (s *OutboxStore) InsertTx(ctx context.Context, tx pgx.Tx, events []outbox.Event) error {
	if len(events) == 0 {
		return nil
	}
	schema := s.db.Schema()
	for _, event := range events {
		_, err := tx.Exec(ctx,
			fmt.Sprintf(`INSERT INTO %s.outbox_events
			(id, aggregate_type, aggregate_id, event_type, event_version, payload, status, retry_count, next_retry_at, created_at)
			VALUES ($1,$2,$3,$4,$5,$6,'pending',0,NOW(),NOW())
			ON CONFLICT (id) DO NOTHING`, pq.QuoteIdentifier(schema)),
			event.ID,
			event.AggregateType,
			event.AggregateID,
			event.EventType,
			event.EventVersion,
			event.Payload,
		)
		if err != nil {
			return err
		}
	}
	return nil
}

func (s *OutboxStore) Lease(ctx context.Context, limit int, leaseFor time.Duration) ([]outbox.Event, error) {
	tx, err := s.db.pool.BeginTx(ctx, pgx.TxOptions{})
	if err != nil {
		return nil, err
	}
	defer func() {
		_ = tx.Rollback(ctx)
	}()

	schema := s.db.Schema()
	rows, err := tx.Query(ctx, fmt.Sprintf(`WITH candidate AS (
		SELECT id
		FROM %s.outbox_events
		WHERE status = 'pending'
		   OR (status = 'failed' AND next_retry_at <= NOW())
		   OR (status = 'processing' AND next_retry_at <= NOW())
		ORDER BY created_at ASC
		LIMIT $1
		FOR UPDATE SKIP LOCKED
	)
	UPDATE %s.outbox_events o
	SET status='processing', next_retry_at = NOW() + ($2::bigint * interval '1 millisecond')
	FROM candidate
	WHERE o.id = candidate.id
	RETURNING o.id, o.aggregate_type, o.aggregate_id, o.event_type, o.event_version, o.payload, o.retry_count, o.next_retry_at, o.created_at`, pq.QuoteIdentifier(schema), pq.QuoteIdentifier(schema)), limit, leaseFor.Milliseconds())
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	result := make([]outbox.Event, 0, limit)
	for rows.Next() {
		var item outbox.Event
		if err := rows.Scan(
			&item.ID,
			&item.AggregateType,
			&item.AggregateID,
			&item.EventType,
			&item.EventVersion,
			&item.Payload,
			&item.RetryCount,
			&item.NextRetryAt,
			&item.CreatedAt,
		); err != nil {
			return nil, err
		}
		result = append(result, item)
	}
	if rows.Err() != nil {
		return nil, rows.Err()
	}
	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}
	return result, nil
}

func (s *OutboxStore) MarkPublished(ctx context.Context, id string, publishedAt time.Time) error {
	schema := s.db.Schema()
	_, err := s.db.pool.Exec(ctx,
		fmt.Sprintf(`UPDATE %s.outbox_events SET status='published', published_at=$2, last_error='' WHERE id=$1`, pq.QuoteIdentifier(schema)),
		id,
		publishedAt,
	)
	return err
}

func (s *OutboxStore) MarkFailed(ctx context.Context, id string, nextRetryAt time.Time, lastErr string) error {
	schema := s.db.Schema()
	_, err := s.db.pool.Exec(ctx,
		fmt.Sprintf(`UPDATE %s.outbox_events
		SET status='failed', retry_count=retry_count+1, next_retry_at=$2, last_error=$3
		WHERE id=$1`, pq.QuoteIdentifier(schema)),
		id,
		nextRetryAt,
		lastErr,
	)
	return err
}
