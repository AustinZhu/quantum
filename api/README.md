# API Contracts (Buf Workspace)

Canonical protobuf contract source for the monorepo.

## Scope

- Owns all `.proto` definitions.
- Owns cross-language generation for backend/frontend clients.
- Owns OpenAPI generation used by Scalar UI in backend services.

## Directory Layout

```text
api/
├── proto/
│   ├── algorand/v1/
│   ├── datafeed/v1/
│   ├── doordash/v1/
│   └── common/v1/
├── gen/
│   └── openapi/
├── buf.yaml
├── buf.gen.yaml
└── scripts/generate.sh
```

## Service Namespaces

- `quant.algorand.v1`
- `quant.datafeed.v1`
- `quant.doordash.v1`
- `quant.system.v1` (defined in `proto/common/v1/system.proto`)

## Code Generation

Run from repo root:

```bash
./api/scripts/generate.sh
```

What it does:

- `buf dep update`
- `buf lint`
- optional `buf breaking` when `BUF_BREAKING_AGAINST` is set
- `buf generate`

OpenAPI artifacts:

- `gen/openapi/quantum.openapi.yml`
- `gen/openapi/quantum.openapi.json`

## OpenAPI Plugin

- Plugin: `buf.build/community/sudorandom-connect-openapi:v0.25.4`
- Configured in `buf.gen.yaml`

Note: generation requires network access to `buf.build` because this plugin is fetched remotely.

## Generated Targets

Configured to generate into project-owned locations:

- Python: `algorand/src/algorand/interfaces/connectrpc/generated`
- Go: `datafeed/internal/gen/...` (via module-aware `out: ../datafeed`)
- Kotlin: `doordash/build/generated/source/proto/main/kotlin`
- TypeScript/Web: `terminal/src/lib/gen`

## Useful Commands

```bash
cd api
buf lint
buf breaking --against ".git#branch=main"   # optional baseline
buf generate
```
