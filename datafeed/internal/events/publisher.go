package events

import (
	"context"
	"fmt"
	"strconv"
	"strings"

	"github.com/redis/rueidis"
	"github.com/twmb/franz-go/pkg/kgo"
)

type Publisher struct {
	redis rueidis.Client
	kafka *kgo.Client
	topic string
}

func NewPublisher(redisURL, redpandaBrokers, redpandaTopic string) (*Publisher, error) {
	opts, err := rueidis.ParseURL(redisURL)
	if err != nil {
		return nil, fmt.Errorf("parse redis url: %w", err)
	}
	client, err := rueidis.NewClient(opts)
	if err != nil {
		return nil, fmt.Errorf("create redis client: %w", err)
	}

	var kafkaClient *kgo.Client
	if redpandaBrokers != "" {
		brokers := splitAndTrim(redpandaBrokers)
		if len(brokers) > 0 {
			kafkaClient, err = kgo.NewClient(kgo.SeedBrokers(brokers...))
			if err != nil {
				return nil, fmt.Errorf("create redpanda client: %w", err)
			}
		}
	}

	if redpandaTopic == "" {
		redpandaTopic = "datafeed.ticks"
	}

	return &Publisher{redis: client, kafka: kafkaClient, topic: redpandaTopic}, nil
}

func (p *Publisher) PublishTick(ctx context.Context, symbol string, tsMS int64) error {
	if err := p.redis.Do(
		ctx,
		p.redis.B().Publish().Channel("datafeed.ticks").Message(fmt.Sprintf("%s:%d", symbol, tsMS)).Build(),
	).Error(); err != nil {
		return err
	}

	if p.kafka != nil {
		payload := fmt.Sprintf("{\"symbol\":\"%s\",\"ts_ms\":%d}", symbol, tsMS)
		if err := p.kafka.ProduceSync(ctx, &kgo.Record{
			Topic: p.topic,
			Key:   []byte(symbol),
			Value: []byte(payload),
		}).FirstErr(); err != nil {
			// Keep pub/sub fanout non-fatal in local dev if Redpanda is transiently unavailable.
			_ = err
		}
	}

	return p.redis.Do(
		ctx,
		p.redis.B().Xadd().Key("datafeed:tick_stream").Id("*").FieldValue().
			FieldValue("symbol", symbol).
			FieldValue("ts_ms", strconv.FormatInt(tsMS, 10)).
			Build(),
	).Error()
}

func (p *Publisher) Close() error {
	p.redis.Close()
	if p.kafka != nil {
		p.kafka.Close()
	}
	return nil
}

func splitAndTrim(raw string) []string {
	parts := strings.Split(raw, ",")
	out := make([]string, 0, len(parts))
	for _, part := range parts {
		value := strings.TrimSpace(part)
		if value != "" {
			out = append(out, value)
		}
	}
	return out
}
