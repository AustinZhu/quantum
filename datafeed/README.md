# Datafeed Service

Go service for market data ingestion, chart/scanner Connect APIs, event-driven processing, and jobs orchestration.

## Runtime Architecture

- Feature-first modules with layer-inside layout:
  - `internal/modules/<feature>/biz`
  - `internal/modules/<feature>/data`
  - `internal/modules/<feature>/service`
- Shared cross-cutting infrastructure in `internal/infrastructure/*`
- Runtime apps in `internal/app/{api,events,jobs}` with Wire injectors per app package
- Connect over HTTP (no gRPC runtime server)

## Layout

```text
datafeed/
├── proto/
│   └── datafeed/
│       └── v1/                  # datafeed-owned protobuf source
├── api/
│   └── datafeed/
│       └── v1/                  # buf-generated Go protobuf/connect stubs
├── buf.yaml
├── buf.gen.yaml
├── gen/
│   └── openapi/                 # buf-generated OpenAPI for scalar/docs
├── db/
│   ├── migrations/
│   ├── queries/
│   └── sqlc/                    # sqlc-generated output
├── cmd/
│   ├── datafeed-api/
│   ├── datafeed-events/
│   └── datafeed-jobs/
├── internal/
│   ├── app/
│   │   ├── api/
│   │   ├── events/
│   │   └── jobs/
│   ├── infrastructure/
│   │   ├── auth/
│   │   ├── broker/
│   │   ├── clock/
│   │   ├── conf/
│   │   ├── outbox/
│   │   ├── postgres/
│   │   ├── providers/
│   │   ├── redis/
│   │   ├── server/
│   │   └── temporal/
│   ├── modules/
│   │   ├── content/
│   │   ├── ingestion/
│   │   ├── jobs/
│   │   ├── marketdata/
│   │   └── scanner/
│   └── gen/
└── sqlc.yaml
```

## Commands

```bash
cd datafeed

go run ./cmd/datafeed-api --config ./config.yaml
go run ./cmd/datafeed-events --config ./config.yaml
go run ./cmd/datafeed-jobs --config ./config.yaml
```

## Go Tooling

Datafeed uses the Go tool dependency model with a separate module:

- tool module file: `tools/go.mod`
- tool checksum file: `tools/go.sum`

Sync pinned tool versions:

```bash
cd datafeed
make tools
```

All tooling commands in `Makefile` execute via `go tool -modfile=tools/go.mod`.

## Protobuf and OpenAPI Codegen

```bash
cd datafeed
buf dep update
buf lint
buf generate --path proto/datafeed/v1
```

Or use:

```bash
make buf
```

Generated outputs from this module include:

- Go/connect stubs in `api/datafeed/v1`
- Python protobuf/typing files in `../algorand/src/algorand/interfaces/connectrpc/generated`
- Kotlin protobuf stubs in `../doordash/build/generated/source/proto/main/kotlin`
- TypeScript protobuf/connect stubs in `../terminal/src/lib/gen`
- OpenAPI docs in `gen/openapi`

## SQL Codegen

```bash
cd datafeed
make sqlc
```

This generates query bindings into `db/sqlc` from `db/migrations` and `db/queries`.

## API Routes

- Connect handlers:
  - `/quant.datafeed.v1.DatafeedService/*`
  - `/quant.datafeed.v1.ScannerService/*`
  - `/grpc.health.v1.Health/*`
  - `/grpc.reflection.v1.ServerReflection/*`
  - `/grpc.reflection.v1alpha.ServerReflection/*`
- Ops:
  - `GET /healthz`
  - `GET /readyz`
  - `GET /metrics`
  - `GET /openapi/connect.json`
  - `GET /scalar`
  - `GET /debug/pprof/` (when pprof is enabled)
  - `GET /debug/pprof/allocs` (when pprof is enabled)
  - `GET /debug/pprof/block` (when pprof is enabled)
  - `GET /debug/pprof/cmdline` (when pprof is enabled)
  - `GET /debug/pprof/goroutine` (when pprof is enabled)
  - `GET /debug/pprof/heap` (when pprof is enabled)
  - `GET /debug/pprof/mutex` (when pprof is enabled)
  - `GET /debug/pprof/profile` (when pprof is enabled)
  - `GET /debug/pprof/symbol` (when pprof is enabled)
  - `GET /debug/pprof/threadcreate` (when pprof is enabled)
  - `GET /debug/pprof/trace` (when pprof is enabled)

Connect handlers are instrumented with `otelconnect` interceptors.

Auth:

- when `DATAFEED_SERVER_AUTH_ENABLED=true`, requests must include `Authorization: Bearer <access-token>`.
- bearer tokens are verified against Casdoor issuer metadata and authorized via Casbin policy.

## Environment Variables

- `DATAFEED_SERVER_HTTP_ADDR`
- `DATAFEED_SERVER_MODE`
- `DATAFEED_SERVER_PPROF_ENABLED`
- `DATAFEED_SERVER_OPENAPI_SPEC_PATH`
- `DATAFEED_SERVER_AUTH_ENABLED`
- `DATAFEED_SERVER_AUTH_CASDOOR_ISSUER_URL`
- `DATAFEED_SERVER_AUTH_CASDOOR_AUDIENCE`
- `DATAFEED_SERVER_AUTH_CASBIN_MODEL_PATH`
- `DATAFEED_SERVER_AUTH_CASBIN_POLICY_PATH`
- `DATAFEED_STORAGE_POSTGRES_URL`
- `DATAFEED_STORAGE_POSTGRES_SCHEMA`
- `DATAFEED_STORAGE_MIGRATIONS_PATH`
- `DATAFEED_INFRA_REDIS_URL`
- `DATAFEED_INFRA_BROKER_BROKERS`
- `DATAFEED_INFRA_BROKER_TICK_TOPIC`
- `DATAFEED_INFRA_TEMPORAL_ADDRESS`
- `DATAFEED_INFRA_TEMPORAL_NAMESPACE`
- `DATAFEED_INFRA_TEMPORAL_TASK_QUEUE`
- `DATAFEED_WORKER_BROKER_GROUP_ID`
- `DATAFEED_WORKER_BROKER_COMMAND_TOPIC`
- `DATAFEED_WORKER_BROKER_EVENT_TOPIC`
- `DATAFEED_JOBS_SYNC_SYMBOLS_INTERVAL_SEC`
- `DATAFEED_JOBS_OUTBOX_RECOVERY_INTERVAL_SEC`
- `DATAFEED_JOBS_PROJECTION_REBUILD_INTERVAL_SEC`
- `DATAFEED_JOBS_MARKET_BACKFILL_INTERVAL_SEC`
- `DATAFEED_INTEGRATION_OKX_REST_BASE_URL`
- `DATAFEED_INTEGRATION_OKX_WS_PUBLIC_URL`
- `DATAFEED_INTEGRATION_OKX_WS_BUSINESS_URL`
- `DATAFEED_INTEGRATION_OKX_INST_TYPES`
- `DATAFEED_INTEGRATION_OKX_HTTP_TIMEOUT_SEC`
- `DATAFEED_INTEGRATION_OKX_SYMBOL_CACHE_SEC`
- `DATAFEED_CONFIG_CONSUL_ENABLED`
- `DATAFEED_CONFIG_CONSUL_HTTP_ADDR`
- `DATAFEED_CONFIG_CONSUL_KV_PATH`
- `DATAFEED_CONFIG_VAULT_ENABLED`
- `DATAFEED_CONFIG_VAULT_ADDR`
- `DATAFEED_CONFIG_VAULT_TOKEN`
- `DATAFEED_CONFIG_VAULT_KV_MOUNT`
- `DATAFEED_CONFIG_VAULT_SECRET_PATH`
- `DATAFEED_CONFIG_VAULT_API_KEY_FIELD`

`DATAFEED_SERVER_PPROF_ENABLED` behavior:

- if explicitly set (`true`/`false`), that value is used.
- if not set, pprof is enabled only when `DATAFEED_SERVER_MODE` is development-like (`development`, `dev`, or `local`), and disabled otherwise.

## Dev Gates

```bash
cd datafeed
make tools
make wire
make lint
go test ./...
```
