# Infra Guide

Operational reference for infrastructure assets in the Quantum monorepo.

## Scope

`infra/` contains local/dev platform configuration and bootstrap assets:

- `terraform/` for infra and bootstrap orchestration
- `consul/` service registrations
- `bootstrap/` Consul/Vault seeding scripts
- `postgres/`, `airflow/`, `casdoor/`, `mlflow/`, `prometheus/`, `grafana/`, `loki/`, `tempo/`, `otel/`

Compose service wiring is defined in [`docker-compose.yml`](../docker-compose.yml).

## Day-1 Setup

From repo root:

```bash
cp .env.example .env
make tf-init
make tf-apply
```

## Common Operations

From repo root:

```bash
make up
make down
make down-v
make logs
make logs svc=datafeed-api
```

## Troubleshooting

- If platform bootstrap fails, inspect Terraform output in [`terraform/`](./terraform).
- If services fail readiness, check `docker compose logs <service>`.
- If Temporal startup fails, inspect `temporal-admin-tools` logs first.
- If Airflow fails metadata DB auth, verify `timescaledb` has role/database `airflow`.
