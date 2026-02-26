# API Contracts (Buf Workspace)

This project is the canonical source for protobuf contracts and code generation.

## Layout

- `proto/algorand/v1`: algorand service contracts (`backtest`, `analytics`, `ml`, `alerts`, `catalog`)
- `proto/datafeed/v1`: datafeed contracts
- `proto/doordash/v1`: order/risk contracts
- `proto/common/v1`: shared/common contracts (`common`, `system`)

## Code Generation

```bash
./scripts/generate.sh
```

This script generates language bindings for Python, Go, Kotlin, and TypeScript.
