# Quickstart

## Prerequisites

- Docker + Docker Compose
- `buf` CLI
- Optional for local non-container workflows: `uv`, Go 1.26.0+, Node 22+, Java 21+

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
./ops/bootstrap/seed-consul-vault.sh
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
- Consul UI: http://localhost:8500
- Vault: http://localhost:8200
- PgAdmin: http://localhost:5050
- RedisInsight: http://localhost:5540

## Common commands

```bash
make bootstrap
make generate
make up
make logs
make down
```

## Notes

- Compose image policy:
  monitoring/OTEL and MinIO use `latest`; other infra uses explicit tags; Redis uses major-only tag (`redis:8`).
- Datafeed uses `rueidis` as the Redis client.
