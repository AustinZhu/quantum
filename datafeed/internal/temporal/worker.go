package temporal

import (
	"context"
	"log"
	"time"

	"github.com/austin/quantum/datafeed/internal/adapters/simulator"
	"github.com/austin/quantum/datafeed/internal/app"
)

type Worker struct {
	service *app.Service
	source  simulator.TickSource
}

func NewWorker(service *app.Service) *Worker {
	return &Worker{service: service, source: simulator.DeterministicSource{}}
}

func (w *Worker) Run(ctx context.Context) error {
	ticker := time.NewTicker(3 * time.Second)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return ctx.Err()
		case <-ticker.C:
			ticks := w.source.Generate("AAPL", 16)
			if _, err := w.service.IngestTicks(ctx, ticks); err != nil {
				log.Printf("worker ingest error: %v", err)
			}
		}
	}
}
