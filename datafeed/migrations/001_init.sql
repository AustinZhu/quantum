CREATE SCHEMA IF NOT EXISTS datafeed;

CREATE TABLE IF NOT EXISTS datafeed.ticks (
  symbol TEXT NOT NULL,
  ts_ms BIGINT NOT NULL,
  price DOUBLE PRECISION NOT NULL,
  size DOUBLE PRECISION NOT NULL,
  source TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (symbol, ts_ms, source)
);

SELECT create_hypertable('datafeed.ticks', by_range('ts_ms'), if_not_exists => TRUE);

CREATE TABLE IF NOT EXISTS datafeed.bars_1m (
  symbol TEXT NOT NULL,
  interval TEXT NOT NULL DEFAULT '1m',
  ts_ms BIGINT NOT NULL,
  open DOUBLE PRECISION NOT NULL,
  high DOUBLE PRECISION NOT NULL,
  low DOUBLE PRECISION NOT NULL,
  close DOUBLE PRECISION NOT NULL,
  volume DOUBLE PRECISION NOT NULL,
  PRIMARY KEY (symbol, ts_ms)
);

SELECT create_hypertable('datafeed.bars_1m', by_range('ts_ms'), if_not_exists => TRUE);

CREATE TABLE IF NOT EXISTS datafeed.bars_5m (
  symbol TEXT NOT NULL,
  interval TEXT NOT NULL DEFAULT '5m',
  ts_ms BIGINT NOT NULL,
  open DOUBLE PRECISION NOT NULL,
  high DOUBLE PRECISION NOT NULL,
  low DOUBLE PRECISION NOT NULL,
  close DOUBLE PRECISION NOT NULL,
  volume DOUBLE PRECISION NOT NULL,
  PRIMARY KEY (symbol, ts_ms)
);

SELECT create_hypertable('datafeed.bars_5m', by_range('ts_ms'), if_not_exists => TRUE);

CREATE TABLE IF NOT EXISTS datafeed.news_events (
  id TEXT PRIMARY KEY,
  symbol TEXT NOT NULL,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  ts_ms BIGINT NOT NULL,
  source TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS datafeed.social_events (
  id TEXT PRIMARY KEY,
  symbol TEXT NOT NULL,
  platform TEXT NOT NULL,
  author TEXT NOT NULL,
  text TEXT NOT NULL,
  ts_ms BIGINT NOT NULL,
  sentiment DOUBLE PRECISION NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS datafeed.ingest_offsets (
  source TEXT NOT NULL,
  partition_key TEXT NOT NULL,
  offset_value TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (source, partition_key)
);
