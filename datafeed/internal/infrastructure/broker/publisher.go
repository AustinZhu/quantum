package broker

import (
	"context"
	"encoding/json"
	"fmt"
	"strconv"
	"strings"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	redisc "github.com/AustinZhu/quantum/datafeed/internal/infrastructure/redis"
	"github.com/twmb/franz-go/pkg/kgo"
)

type Publisher struct {
	redis      *redisc.Client
	tickKafka  *kgo.Client
	eventKafka *kgo.Client
	tickTopic  string
	eventTopic string
}

func NewPublisher(cfg conf.Config, redisClient *redisc.Client) (*Publisher, func(), error) {
	parts := splitAndTrim(cfg.Infra.Broker.Brokers)

	var tickKafka *kgo.Client
	var eventKafka *kgo.Client
	if len(parts) > 0 {
		var err error
		tickKafka, err = kgo.NewClient(kgo.SeedBrokers(parts...))
		if err != nil {
			return nil, nil, fmt.Errorf("create tick broker client: %w", err)
		}
		eventKafka, err = kgo.NewClient(kgo.SeedBrokers(parts...))
		if err != nil {
			tickKafka.Close()
			return nil, nil, fmt.Errorf("create event broker client: %w", err)
		}
	}

	publisher := &Publisher{
		redis:      redisClient,
		tickKafka:  tickKafka,
		eventKafka: eventKafka,
		tickTopic:  cfg.Infra.Broker.TickTopic,
		eventTopic: cfg.Worker.BrokerEventTopic,
	}
	cleanup := func() {
		if tickKafka != nil {
			tickKafka.Close()
		}
		if eventKafka != nil {
			eventKafka.Close()
		}
	}
	return publisher, cleanup, nil
}

func (p *Publisher) Publish(ctx context.Context, event outbox.Event) error {
	if p.eventKafka != nil && p.eventTopic != "" {
		if err := p.eventKafka.ProduceSync(ctx, &kgo.Record{
			Topic: p.eventTopic,
			Key:   []byte(event.AggregateID),
			Value: event.Payload,
		}).FirstErr(); err != nil {
			return err
		}
	}

	if p.redis != nil && p.redis.Raw() != nil {
		client := p.redis.Raw()
		_ = client.Do(ctx,
			client.B().Publish().Channel("datafeed.events").Message(event.ID).Build(),
		).Error()
	}

	tick := decodeTickFromEnvelope(event.Payload)
	if tick.Symbol == "" {
		return nil
	}

	payload := fmt.Sprintf("{\"symbol\":\"%s\",\"ts_ms\":%d}", tick.Symbol, tick.TsMS)
	if p.tickKafka != nil && p.tickTopic != "" {
		if err := p.tickKafka.ProduceSync(ctx, &kgo.Record{
			Topic: p.tickTopic,
			Key:   []byte(tick.Symbol),
			Value: []byte(payload),
		}).FirstErr(); err != nil {
			return err
		}
	}
	if p.redis != nil && p.redis.Raw() != nil {
		client := p.redis.Raw()
		if err := client.Do(ctx,
			client.B().Publish().Channel("datafeed.ticks").Message(fmt.Sprintf("%s:%d", tick.Symbol, tick.TsMS)).Build(),
		).Error(); err != nil {
			return err
		}
		if err := client.Do(ctx,
			client.B().Xadd().Key("datafeed:tick_stream").Id("*").FieldValue().
				FieldValue("symbol", tick.Symbol).
				FieldValue("ts_ms", strconv.FormatInt(tick.TsMS, 10)).
				Build(),
		).Error(); err != nil {
			return err
		}
	}
	return nil
}

type decodedTick struct {
	Symbol string
	TsMS   int64
}

func decodeTickFromEnvelope(payload []byte) decodedTick {
	var env struct {
		Payload struct {
			Symbol string `json:"symbol"`
			TsMS   int64  `json:"ts_ms"`
		} `json:"payload"`
	}
	if err := json.Unmarshal(payload, &env); err != nil {
		return decodedTick{}
	}
	return decodedTick{Symbol: env.Payload.Symbol, TsMS: env.Payload.TsMS}
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
