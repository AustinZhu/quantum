# Quickstart

## Prerequisites

- Docker + Docker Compose
- `buf` CLI
- Optional for local non-container workflows: `uv`, Go 1.26.0+, Node 22+, Java 25+

## 1) Configure environment

```bash
cd /Users/austin/GitHub/quantum
cp .env.example .env
```

## 2) Generate protobuf/connect clients

```bash
./api/scripts/generate.sh
```

## 3) Start the full platform

```bash
docker compose up --build --wait
```

## 3.1) Seed Consul and Vault (required for config/secret fetch mode)

```bash
./infra/bootstrap/seed-consul-vault.sh
```

## 4) Open key endpoints

- Terminal: http://localhost:3000
- Algorand: http://localhost:8080/healthz
- Datafeed: http://localhost:8081/healthz
- Doordash: http://localhost:8082/healthz
- Temporal UI: http://localhost:8088
- Grafana: http://localhost:3001 (admin/admin)
- Prometheus: http://localhost:9090
- MinIO: http://localhost:9001
- Redpanda Console: http://localhost:8089
- Redpanda Connect: http://localhost:4195
- Algorand Scalar: http://localhost:8080/scalar
- Datafeed Scalar: http://localhost:8081/scalar
- Doordash Scalar: http://localhost:8082/scalar
- Feast UI: http://localhost:6567
- Airflow: http://localhost:8087
- MLflow UI: http://localhost:5001
- DuckDB UI: http://localhost:4213
- Consul UI: http://localhost:8500
- Vault: http://localhost:8200
- Casdoor: http://localhost:8000
- PgAdmin: http://localhost:5050
- RedisInsight: http://localhost:5540
- Generated OpenAPI: `api/gen/openapi/quantum.openapi.yml` and `api/gen/openapi/quantum.openapi.json`

## Common commands

```bash
make help
make bootstrap
make generate
make up
make logs
make down
```

## Notes

- Compose image policy:
  monitoring/OTEL (Grafana Alloy, Prometheus, Loki, Tempo, Grafana) and MinIO use `latest`; other infra uses explicit tags; Redis uses major-only tag (`redis:8`).
- Temporal bootstraps DB/schema via `temporal-admin-tools`; there is no separate `temporal-schema` job container.
- Casdoor uses the TimescaleDB/PostgreSQL cluster for persistence and Casbin for RBAC policy enforcement.
- Datafeed uses `rueidis` as the Redis client.
- First startup may take longer because `feast` and `mlflow` install pinned Python packages in their containers.
