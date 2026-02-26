# Datafeed Service

Go service for market feed adapters, real-time tick recording, replay, and news/social ingest.

## Stack

- Go 1.26
- ConnectRPC-compatible HTTP handlers
- `sqlc + pgx` for storage access
- `golang-migrate/migrate` for schema migrations on API startup
- `golangci-lint` (pinned via Makefile) for CI/static checks
- TimescaleDB hypertables for tick/bar data
- Redis Streams + PubSub for event fanout
- Temporal worker entrypoint for ingest orchestration
- Optional config fetch from Consul and API key secret fetch from Vault

## Run

```bash
go run ./cmd/api
go run ./cmd/worker
```

`cmd/api` applies SQL migrations from `migrations/` before starting the HTTP server.
RPC endpoints enforce `x-api-key` (or `x-service-key`) when `DATAFEED_API_KEY` is set.

## Lint

```bash
make lint
```

This runs `golangci-lint` with version pin `v1.64.8` using `.golangci.yml`.
