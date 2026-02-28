CREATE TABLE IF NOT EXISTS datafeed.outbox_events (
  id TEXT PRIMARY KEY,
  aggregate_type TEXT NOT NULL,
  aggregate_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_version INTEGER NOT NULL,
  payload BYTEA NOT NULL,
  status TEXT NOT NULL,
  retry_count INTEGER NOT NULL DEFAULT 0,
  next_retry_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  published_at TIMESTAMPTZ,
  last_error TEXT NOT NULL DEFAULT ''
);

CREATE INDEX IF NOT EXISTS idx_outbox_events_dispatch
  ON datafeed.outbox_events (status, next_retry_at, created_at);

CREATE TABLE IF NOT EXISTS datafeed.processed_events (
  event_id TEXT NOT NULL,
  consumer_name TEXT NOT NULL,
  processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (event_id, consumer_name)
);

CREATE TABLE IF NOT EXISTS datafeed.scanner_symbols (
  symbol TEXT PRIMARY KEY,
  ticker TEXT NOT NULL,
  description TEXT NOT NULL,
  exchange TEXT NOT NULL,
  type TEXT NOT NULL,
  state TEXT NOT NULL,
  inst_type TEXT NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_scanner_symbols_exchange_type
  ON datafeed.scanner_symbols (exchange, type);

CREATE INDEX IF NOT EXISTS idx_scanner_symbols_state
  ON datafeed.scanner_symbols (state);
