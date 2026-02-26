package events

import (
	"context"
	"fmt"
	"strconv"

	"github.com/redis/rueidis"
)

type Publisher struct {
	redis rueidis.Client
}

func NewPublisher(redisURL string) (*Publisher, error) {
	opts, err := rueidis.ParseURL(redisURL)
	if err != nil {
		return nil, fmt.Errorf("parse redis url: %w", err)
	}
	client, err := rueidis.NewClient(opts)
	if err != nil {
		return nil, fmt.Errorf("create redis client: %w", err)
	}
	return &Publisher{redis: client}, nil
}

func (p *Publisher) PublishTick(ctx context.Context, symbol string, tsMS int64) error {
	if err := p.redis.Do(
		ctx,
		p.redis.B().Publish().Channel("datafeed.ticks").Message(fmt.Sprintf("%s:%d", symbol, tsMS)).Build(),
	).Error(); err != nil {
		return err
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
	return nil
}
