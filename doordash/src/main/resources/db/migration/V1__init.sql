CREATE SCHEMA IF NOT EXISTS doordash;

CREATE TABLE IF NOT EXISTS doordash.orders (
  order_id TEXT PRIMARY KEY,
  account_id TEXT NOT NULL,
  symbol TEXT NOT NULL,
  side TEXT NOT NULL,
  quantity DOUBLE PRECISION NOT NULL,
  order_type TEXT NOT NULL,
  limit_price DOUBLE PRECISION,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS doordash.risk_decisions (
  decision_id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL,
  verdict TEXT NOT NULL,
  reasons JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS doordash.rule_versions (
  rule_id TEXT NOT NULL,
  version TEXT NOT NULL,
  drl TEXT NOT NULL,
  enabled BOOLEAN NOT NULL DEFAULT TRUE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (rule_id, version)
);
