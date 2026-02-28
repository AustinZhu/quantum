package data

import (
	"context"
	"fmt"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/postgres"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/biz"
	"github.com/lib/pq"
)

type QueryRepository struct {
	db *postgres.Client
}

func NewQueryRepository(db *postgres.Client) *QueryRepository {
	return &QueryRepository{db: db}
}

func (r *QueryRepository) ReplayTicks(ctx context.Context, symbol string, startMS, endMS int64, limit int32) ([]biz.Tick, error) {
	schema := r.db.Schema()
	rows, err := r.db.Pool().Query(ctx,
		fmt.Sprintf(`SELECT symbol, ts_ms, price, size, source
		 FROM %s.ticks
		 WHERE symbol = $1 AND ts_ms >= $2 AND ts_ms <= $3
		 ORDER BY ts_ms ASC LIMIT $4`, pq.QuoteIdentifier(schema)),
		symbol,
		startMS,
		endMS,
		limit,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	result := make([]biz.Tick, 0)
	for rows.Next() {
		var item biz.Tick
		if err := rows.Scan(&item.Symbol, &item.TsMS, &item.Price, &item.Size, &item.Source); err != nil {
			return nil, err
		}
		result = append(result, item)
	}
	return result, rows.Err()
}

func (r *QueryRepository) QueryBars(ctx context.Context, symbol string, interval string, startMS, endMS int64, limit int32) ([]biz.Bar, error) {
	schema := r.db.Schema()
	table := fmt.Sprintf("%s.bars_1m", pq.QuoteIdentifier(schema))
	if interval == "5m" {
		table = fmt.Sprintf("%s.bars_5m", pq.QuoteIdentifier(schema))
	}
	query := fmt.Sprintf(`SELECT symbol, interval, ts_ms, open, high, low, close, volume
		FROM %s
		WHERE symbol=$1 AND ts_ms >= $2 AND ts_ms <= $3
		ORDER BY ts_ms ASC LIMIT $4`, table)
	rows, err := r.db.Pool().Query(ctx, query, symbol, startMS, endMS, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	result := make([]biz.Bar, 0)
	for rows.Next() {
		var item biz.Bar
		if err := rows.Scan(&item.Symbol, &item.Interval, &item.TsMS, &item.Open, &item.High, &item.Low, &item.Close, &item.Volume); err != nil {
			return nil, err
		}
		result = append(result, item)
	}
	return result, rows.Err()
}
