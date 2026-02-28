package outbox

import (
	"context"
	"errors"
	"log"
	"time"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/clock"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/google/wire"
	"github.com/jackc/pgx/v5"
)

type Event struct {
	ID            string
	AggregateType string
	AggregateID   string
	EventType     string
	EventVersion  int32
	Payload       []byte
	RetryCount    int32
	NextRetryAt   time.Time
	CreatedAt     time.Time
}

type Store interface {
	Lease(ctx context.Context, limit int, leaseFor time.Duration) ([]Event, error)
	MarkPublished(ctx context.Context, id string, publishedAt time.Time) error
	MarkFailed(ctx context.Context, id string, nextRetryAt time.Time, lastErr string) error
}

type TxWriter interface {
	InsertTx(ctx context.Context, tx pgx.Tx, events []Event) error
}

type Publisher interface {
	Publish(ctx context.Context, event Event) error
}

type ProjectionUpdater interface {
	Apply(ctx context.Context, event Event) error
}

type Dispatcher struct {
	store      Store
	publisher  Publisher
	projection ProjectionUpdater
	clock      clock.Clock
	interval   time.Duration
	batchSize  int
	leaseFor   time.Duration
}

var ProviderSet = wire.NewSet(NewDispatcher)

func NewDispatcher(
	cfg conf.Config,
	store Store,
	publisher Publisher,
	projection ProjectionUpdater,
	clk clock.Clock,
) *Dispatcher {
	interval := time.Duration(cfg.Jobs.OutboxRecoveryIntervalSec) * time.Second
	if interval <= 0 {
		interval = 2 * time.Second
	}
	return &Dispatcher{
		store:      store,
		publisher:  publisher,
		projection: projection,
		clock:      clk,
		interval:   interval,
		batchSize:  100,
		leaseFor:   30 * time.Second,
	}
}

func (d *Dispatcher) Run(ctx context.Context) error {
	ticker := time.NewTicker(d.interval)
	defer ticker.Stop()

	for {
		if err := d.DispatchOnce(ctx); err != nil && !errors.Is(err, context.Canceled) {
			log.Printf("outbox dispatch error: %v", err)
		}
		select {
		case <-ctx.Done():
			return ctx.Err()
		case <-ticker.C:
		}
	}
}

func (d *Dispatcher) DispatchOnce(ctx context.Context) error {
	events, err := d.store.Lease(ctx, d.batchSize, d.leaseFor)
	if err != nil {
		return err
	}
	for _, event := range events {
		if err := d.publisher.Publish(ctx, event); err != nil {
			next := NextRetry(d.clock.Now(), event.RetryCount)
			if markErr := d.store.MarkFailed(ctx, event.ID, next, err.Error()); markErr != nil {
				log.Printf("outbox mark failed error: %v", markErr)
			}
			continue
		}
		if d.projection != nil {
			if err := d.projection.Apply(ctx, event); err != nil {
				log.Printf("projection update error: %v", err)
			}
		}
		if err := d.store.MarkPublished(ctx, event.ID, d.clock.Now()); err != nil {
			log.Printf("outbox mark published error: %v", err)
		}
	}
	return nil
}

type noopProjectionUpdater struct{}

func NewNoopProjectionUpdater() ProjectionUpdater {
	return noopProjectionUpdater{}
}

func (noopProjectionUpdater) Apply(context.Context, Event) error {
	return nil
}
