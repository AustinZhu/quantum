package redis

import (
	"fmt"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/redis/rueidis"
)

type Client struct {
	inner rueidis.Client
}

func New(cfg conf.Config) (*Client, func(), error) {
	opts, err := rueidis.ParseURL(cfg.Infra.RedisURL)
	if err != nil {
		return nil, nil, fmt.Errorf("parse redis url: %w", err)
	}
	inner, err := rueidis.NewClient(opts)
	if err != nil {
		return nil, nil, fmt.Errorf("new redis client: %w", err)
	}
	client := &Client{inner: inner}
	cleanup := func() {
		if client.inner != nil {
			client.inner.Close()
		}
	}
	return client, cleanup, nil
}

func (c *Client) Raw() rueidis.Client {
	if c == nil {
		return nil
	}
	return c.inner
}
