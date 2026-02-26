# Quantum Monorepo

Industrial scaffold for quant research/trading infrastructure built as a multi-service monorepo.

## Projects

- `api`: canonical protobuf and Buf code generation workspace.
- `algorand`: Python 3.14 quant service (ML/features/backtests/technical analysis/signals/alerts) with Tortoise ORM.
- `datafeed`: Go 1.26 market/news/social feed ingestion and replay service (sqlc + pgx + rueidis).
- `doordash`: Kotlin order/risk management service (Ktor + Drools + jOOQ/Flyway).
- `terminal`: Next.js admin dashboard and BFF proxy.

## Platform Components

- Postgres + TimescaleDB (single cluster, per-service schemas)
- Redis (cache + PubSub + Streams)
- MinIO (on-prem object storage/S3-compatible)
- Consul (centralized configuration)
- Vault (API keys and secret management)
- Temporal + Temporal UI
- OpenTelemetry Collector
- Prometheus + Loki + Tempo + Grafana

## Local Ports

- `terminal`: 3000
- `algorand`: 8080
- `datafeed`: 8081
- `doordash`: 8082
- `timescaledb`: 5432
- `redis`: 6379
- `minio`: 9000 (API), 9001 (console)
- `consul`: 8500
- `vault`: 8200
- `pgadmin`: 5050
- `redisinsight`: 5540
- `temporal`: 7233
- `temporal-ui`: 8088
- `otel-collector`: 4317/4318
- `prometheus`: 9090
- `loki`: 3100
- `tempo`: 3200
- `grafana`: 3001

## One-command Startup

```bash
cp .env.example .env
docker compose up --build --wait
```

Seed initial Consul and Vault values:

```bash
./ops/bootstrap/seed-consul-vault.sh
```

PgAdmin login defaults are controlled by `PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` in `.env`.

## Common Tasks

```bash
make bootstrap
make generate
make up
make test
make down
```

## Image Tag Policy

- Monitoring and OTEL stack use `latest` tags:
  `minio`, `otel-collector`, `prometheus`, `loki`, `tempo`, `grafana`, `temporal-ui`.
- Other infrastructure is pinned to explicit current tags.
- When an image publishes stable major tags, compose uses major-only tags (example: `redis:8`).

## Architecture Notes

- `api/proto` is the single source of truth for service contracts.
- Terminal uses server-side BFF route handlers to call backend ConnectRPC services.
- Temporal workers are deployed alongside each backend service.
- DuckDB is owned by `algorand` for ML/feature engineering.
- Python client versions include `redis>=7.2.1` and `tortoise-orm>=1.1.5`.
- Service runtime config is fetched from Consul (when enabled via env flags).
- API keys/secrets are fetched from Vault (when enabled via env flags).
