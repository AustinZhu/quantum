-- name: InsertTick :exec
INSERT INTO datafeed.ticks (symbol, ts_ms, price, size, source)
VALUES ($1, $2, $3, $4, $5)
ON CONFLICT (symbol, ts_ms, source) DO UPDATE
SET price = EXCLUDED.price,
    size = EXCLUDED.size;

-- name: ListTicksByRange :many
SELECT symbol, ts_ms, price, size, source
FROM datafeed.ticks
WHERE symbol = $1
  AND ts_ms >= $2
  AND ts_ms <= $3
ORDER BY ts_ms ASC
LIMIT $4;

-- name: ListBarsByRange :many
SELECT symbol, interval, ts_ms, open, high, low, close, volume
FROM datafeed.bars_1m
WHERE symbol = $1
  AND ts_ms >= $2
  AND ts_ms <= $3
ORDER BY ts_ms ASC
LIMIT $4;

-- name: InsertNewsEvent :exec
INSERT INTO datafeed.news_events (id, symbol, title, url, ts_ms, source)
VALUES ($1, $2, $3, $4, $5, $6)
ON CONFLICT (id) DO NOTHING;

-- name: InsertSocialEvent :exec
INSERT INTO datafeed.social_events (id, symbol, platform, author, text, ts_ms, sentiment)
VALUES ($1, $2, $3, $4, $5, $6, $7)
ON CONFLICT (id) DO NOTHING;
