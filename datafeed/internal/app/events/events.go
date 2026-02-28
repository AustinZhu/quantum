package events

import (
	"context"

	datafeedv1 "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/broker"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	ingestionbiz "github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/biz"
	ingestionsvc "github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/service"
	"github.com/google/wire"
	"golang.org/x/sync/errgroup"
)

type App struct {
	consumer   *broker.CommandConsumer
	ingestion  *ingestionbiz.Service
	dispatcher *outbox.Dispatcher
}

var ProviderSet = wire.NewSet(New)

func New(consumer *broker.CommandConsumer, ingestion *ingestionbiz.Service, dispatcher *outbox.Dispatcher) *App {
	return &App{consumer: consumer, ingestion: ingestion, dispatcher: dispatcher}
}

func (a *App) Run(ctx context.Context) error {
	group, ctx := errgroup.WithContext(ctx)
	group.Go(func() error {
		return a.consumer.RunIngestTicks(ctx, func(ctx context.Context, req *datafeedv1.IngestTicksRequest) error {
			_, err := a.ingestion.IngestTicks(ctx, ingestionsvc.TicksFromProto(req.GetTicks()))
			return err
		})
	})
	group.Go(func() error {
		return a.dispatcher.Run(ctx)
	})
	return group.Wait()
}
