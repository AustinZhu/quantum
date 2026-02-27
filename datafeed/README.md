# Datafeed Service

Go service for market feed ingestion, tick replay, and aggregated market data access.

## Responsibilities

- ingest high-frequency market ticks
- persist/replay market history from TimescaleDB
- store news/social events
- emit events to Redis and Redpanda
- run Temporal worker processes for asynchronous feed workflows

## Stack

- Go 1.26
- HTTP ConnectRPC-style routing
- `sqlc + pgx` for typed SQL access
- `golang-migrate/migrate` for migrations
- `rueidis` (Redis client)
- Redpanda client integration
- `golangci-lint` for static analysis

## Layout

```text
datafeed/
├── cmd/api/                         # API entrypoint
├── cmd/worker/                      # worker entrypoint
├── internal/app/                    # service orchestration
├── internal/connect/                # HTTP/RPC handlers
├── internal/storage/                # repository + migrations runner
├── internal/events/                 # Redis/Redpanda publishers
├── internal/adapters/               # provider adapters
├── migrations/
├── queries/
└── sqlc.yaml
```

## Local Development

Run API:

```bash
cd datafeed
go run ./cmd/api
```

Run worker:

```bash
cd datafeed
go run ./cmd/worker
```

`cmd/api` applies SQL migrations from `migrations/` before server startup.

## API Endpoints (Current)

- health:
  - `GET /healthz`
  - `GET /readyz`
  - `GET /metrics`
- docs:
  - `GET /openapi/connect.json`
  - `GET /scalar`
- rpc routes:
  - `GET /rpc/quant.datafeed.v1.DatafeedService/ReplayTicks`
  - `GET /rpc/quant.datafeed.v1.DatafeedService/QueryBars`

Auth:

- when `DATAFEED_API_KEY` is set, RPC routes require `x-api-key` or `x-service-key`.

## Key Environment Variables

- `DATAFEED_HTTP_ADDR`
- `DATAFEED_DATABASE_URL`
- `DATAFEED_DB_SCHEMA`
- `DATAFEED_MIGRATIONS_PATH`
- `DATAFEED_REDIS_URL`
- `DATAFEED_REDPANDA_BROKERS`, `DATAFEED_REDPANDA_TICKS_TOPIC`
- `DATAFEED_TEMPORAL_ADDRESS`, `DATAFEED_TEMPORAL_NAMESPACE`, `DATAFEED_TASK_QUEUE`
- `DATAFEED_API_KEY`
- `DATAFEED_OPENAPI_SPEC_PATH` (default `/app/openapi/quantum.openapi.json`)
- `DATAFEED_CONFIG_FROM_CONSUL`, `DATAFEED_CONSUL_*`
- `DATAFEED_SECRETS_FROM_VAULT`, `DATAFEED_VAULT_*`

## Migrations and Storage

- migration files: `migrations/*.up.sql`
- managed by `internal/storage/migrate.go`
- includes Timescale hypertables, retention, and compression policies

## Linting and Tests

```bash
cd datafeed
make lint
make test
```

Or:

```bash
go test ./...
```
