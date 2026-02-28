package data

import (
	"context"
	"fmt"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/postgres"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/content/biz"
	"github.com/lib/pq"
)

type Repository struct {
	db *postgres.Client
}

func NewRepository(db *postgres.Client) *Repository {
	return &Repository{db: db}
}

func (r *Repository) InsertNews(ctx context.Context, item biz.NewsEvent) error {
	schema := r.db.Schema()
	_, err := r.db.Pool().Exec(ctx,
		fmt.Sprintf(`INSERT INTO %s.news_events (id, symbol, title, url, ts_ms, source)
		 VALUES ($1, $2, $3, $4, $5, $6)
		 ON CONFLICT (id) DO NOTHING`, pq.QuoteIdentifier(schema)),
		item.ID,
		item.Symbol,
		item.Title,
		item.URL,
		item.TsMS,
		item.Source,
	)
	return err
}

func (r *Repository) InsertSocial(ctx context.Context, item biz.SocialEvent) error {
	schema := r.db.Schema()
	_, err := r.db.Pool().Exec(ctx,
		fmt.Sprintf(`INSERT INTO %s.social_events (id, symbol, platform, author, text, ts_ms, sentiment)
		 VALUES ($1, $2, $3, $4, $5, $6, $7)
		 ON CONFLICT (id) DO NOTHING`, pq.QuoteIdentifier(schema)),
		item.ID,
		item.Symbol,
		item.Platform,
		item.Author,
		item.Text,
		item.TsMS,
		item.Sentiment,
	)
	return err
}

func (r *Repository) ListNews(context.Context, string, int32) ([]biz.NewsEvent, error) {
	return nil, nil
}

func (r *Repository) ListSocial(context.Context, string, int32) ([]biz.SocialEvent, error) {
	return nil, nil
}
