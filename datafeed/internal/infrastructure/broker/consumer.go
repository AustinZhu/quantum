package broker

import (
	"context"
	"fmt"

	datafeedv1 "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/twmb/franz-go/pkg/kgo"
	"google.golang.org/protobuf/proto"
)

type CommandConsumer struct {
	client *kgo.Client
}

func NewCommandConsumer(cfg conf.Config) (*CommandConsumer, func(), error) {
	parts := splitAndTrim(cfg.Infra.Broker.Brokers)
	if len(parts) == 0 || cfg.Worker.BrokerCommandTopic == "" {
		consumer := &CommandConsumer{}
		return consumer, func() {}, nil
	}
	groupID := cfg.Worker.BrokerGroupID
	if groupID == "" {
		groupID = "datafeed-events"
	}

	client, err := kgo.NewClient(
		kgo.SeedBrokers(parts...),
		kgo.ConsumerGroup(groupID),
		kgo.ConsumeTopics(cfg.Worker.BrokerCommandTopic),
		kgo.DisableAutoCommit(),
	)
	if err != nil {
		return nil, nil, fmt.Errorf("create broker consumer: %w", err)
	}
	cleanup := func() {
		client.Close()
	}
	return &CommandConsumer{client: client}, cleanup, nil
}

func (c *CommandConsumer) RunIngestTicks(ctx context.Context, handler func(context.Context, *datafeedv1.IngestTicksRequest) error) error {
	if c == nil || c.client == nil {
		<-ctx.Done()
		return ctx.Err()
	}

	for {
		if ctx.Err() != nil {
			return ctx.Err()
		}
		fetches := c.client.PollFetches(ctx)
		if errs := fetches.Errors(); len(errs) > 0 {
			return errs[0].Err
		}
		var commitRecords []*kgo.Record
		fetches.EachRecord(func(record *kgo.Record) {
			req := &datafeedv1.IngestTicksRequest{}
			if err := proto.Unmarshal(record.Value, req); err != nil {
				return
			}
			if err := handler(ctx, req); err == nil {
				commitRecords = append(commitRecords, record)
			}
		})

		if len(commitRecords) > 0 {
			if err := c.client.CommitRecords(ctx, commitRecords...); err != nil {
				return err
			}
		}
	}
}
