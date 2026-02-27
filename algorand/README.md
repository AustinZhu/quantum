# Algorand Service

Python 3.14 backend for quant research and trading workflows:

- feature engineering and technical indicators
- backtesting and analytics
- ML model orchestration and similarity workflows
- signal/alert and strategy catalog endpoints

## Runtime Model

- API process: `algorand serve-api`
- Worker process: `algorand run-worker`
- Storage:
  - Postgres schema `algorand` via Tortoise ORM
  - DuckDB/parquet artifacts owned by this service
- Integrations:
  - Redis (cache + streams)
  - Redpanda (event publish)
  - Temporal worker queues
  - optional Consul (config) and Vault (secret/API key)

## Project Layout

```text
algorand/
├── src/algorand/app/                # app bootstrap, server, worker
├── src/algorand/core/               # config, logging, shared primitives
├── src/algorand/modules/            # domain modules
├── src/algorand/interfaces/connectrpc/
├── src/algorand/interfaces/temporal/
├── src/algorand/infra/              # db/cache/events/integrations
├── migrations/
├── scripts/
└── pyproject.toml
```

## Local Development

```bash
cd algorand
uv sync --all-extras
uv run algorand serve-api
```

Run worker:

```bash
uv run algorand run-worker
```

Seed sample bars:

```bash
uv run algorand seed-data --symbol AAPL --interval 1D
```

## API Endpoints (Current)

- health:
  - `GET /healthz`
  - `GET /readyz`
  - `GET /metrics`
- docs:
  - `GET /openapi/connect.json`
  - `GET /scalar`
- rpc routes:
  - `POST /rpc/quant.algorand.v1.*`
  - `GET /rpc/quant.system.v1.SystemService/*`

## Key Environment Variables

- `ALG_SERVER_HOST`, `ALG_SERVER_PORT`
- `ALG_API_KEY`
- `ALG_DB_URL`, `ALG_DB_SCHEMA`
- `ALG_REDIS_URL`
- `ALG_REDPANDA_BROKERS`, `ALG_REDPANDA_TOPIC_PREFIX`
- `ALG_TEMPORAL_TARGET`, `ALG_TEMPORAL_NAMESPACE`
- `ALG_DUCKDB_PATH`, `ALG_ARTIFACT_ROOT`
- `ALG_OPENAPI_SPEC_PATH` (default `/app/openapi/quantum.openapi.json`)
- `ALG_CONFIG_FROM_CONSUL`, `ALG_CONSUL_*`
- `ALG_SECRETS_FROM_VAULT`, `ALG_VAULT_*`

## Testing and Linting

```bash
cd algorand
uv run ruff check .
uv run ruff format .
uv run pytest
```

## Protobuf and Connect Codegen

```bash
cd algorand
./scripts/generate_proto.sh
```

This delegates to `../api/scripts/generate.sh`.
