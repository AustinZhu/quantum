# Algorand Quant Backend

Modular monolith Python backend scaffold for quant research and production-facing backtesting APIs.

## What this scaffold includes

- Modular monolith package layout under `src/algorand/modules`
- ConnectRPC service scaffolding generated from monorepo `api/proto`
- Temporal workflow/activity scaffolding for backtests, analytics, alerts, and ML jobs
- Market data, features, indicators, signals, strategies, backtests, analytics, ML, alerts, and catalog modules
- Optional config fetch from Consul and API key secret fetch from Vault
- Plotly JSON artifact generation and TradingView Lightweight Charts series payloads
- CLI entrypoints: `serve-api`, `run-worker`, `seed-data`
- Unit/contract/integration/e2e test structure

## Architecture

- **Deployment**: one API process + Temporal worker process from same codebase
- **Storage targets**: DuckDB + Parquet (interfaces scaffolded, in-memory repos default for local testability)
- **Transport**: ConnectRPC (protobuf-first contracts)
- **Orchestration**: Temporal workflows (`BacktestRunWorkflow`, `ModelTrainingWorkflow`, `AlertDispatchWorkflow`, `ArtifactRefreshWorkflow`)

## Project layout

- `src/algorand/app`: bootstrap container/server/worker
- `src/algorand/core`: settings, logging, errors, clock, event bus
- `src/algorand/modules`: domain modules
- `src/algorand/interfaces/connectrpc`: service handlers and mappers
- `src/algorand/interfaces/temporal`: workflows and activities
- `src/algorand/tests`: unit/integration/contract/e2e tests
- `../api/proto/algorand/v1` + `../api/proto/common/v1`: public RPC contracts and shared types for algorand service APIs

## Quickstart

```bash
cp .env.example .env
uv sync --all-extras
uv run algorand seed-data
```

Start API server:

```bash
uv run algorand serve-api
```

Start Temporal worker:

```bash
uv run algorand run-worker
```

## Protobuf / ConnectRPC codegen

```bash
./scripts/generate_proto.sh
```

Runs monorepo generation via `../api/scripts/generate.sh` and requires `buf` in PATH.

## Example service usage (scaffold layer)

```python
from algorand.app.container import AppContainer
from algorand.interfaces.connectrpc.services.backtests import BacktestRpcService

container = AppContainer.build()
svc = BacktestRpcService(container)
result = svc.run_backtest({"symbol": "AAPL", "interval": "1D"})
print(result["run_id"], result["status"])
```

## Notes

- Runtime transport wiring to generated ConnectRPC Python handlers is scaffolded for your next implementation pass.
- Temporal workflows are fully shaped with task queues and activity sequence, and can be attached to live infrastructure when Temporal is running.
