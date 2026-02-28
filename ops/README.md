# Ops Guide

Operational entry point for the Quantum monorepo.

## Scope

`ops/` documents how to operate the local and dev platform.
Infrastructure manifests and runtime assets live in [`infra/`](../infra).

## Primary Paths

- Terraform bootstrap: [`infra/terraform`](../infra/terraform)
- Consul registrations: [`infra/consul`](../infra/consul)
- Vault/Consul bootstrap scripts: [`infra/bootstrap`](../infra/bootstrap)
- Compose stack: [`docker-compose.yml`](../docker-compose.yml)

## Day-1 Setup

From repo root:

```bash
cp .env.example .env
make tf-init
make tf-apply
```

## Common Operations

```bash
make up        # compose up --build --wait
make down      # compose down
make down-v    # compose down -v
make logs      # all service logs
make logs svc=datafeed-api
```

## Contract and Client Codegen

Proto ownership is per service module:

- `algorand/proto`
- `datafeed/proto`
- `doordash/proto`

Generate all service contracts and clients:

```bash
make generate
```

## Troubleshooting

- If OpenAPI endpoints return missing file errors, run `make generate`.
- If stack bootstrap fails, inspect `infra/terraform` outputs and `docker compose logs`.
- If Temporal services fail readiness, inspect `temporal-admin-tools` logs first.

## Notes

`ops/` is documentation-focused. Keep executable infrastructure assets under `infra/`.
