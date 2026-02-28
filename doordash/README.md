# Doordash Service

Kotlin order execution and risk-gating service.

## Responsibilities

- place and track orders through provider adapters
- run rule-based pre-trade risk decisions with Drools
- persist orders, risk decisions, and versioned rule definitions
- publish order/risk events to Redis and Redpanda
- run Temporal workers for async lifecycle processing

## Stack

- Kotlin/JVM 25
- Ktor server
- ConnectRPC integration via `io.github.ichizero:connect-ktor`
- Drools rule engine (`src/main/resources/rules`)
- jOOQ + Flyway with Postgres
- Redis (Lettuce) + Redpanda (Kafka client)
- Temporal SDK
- Scalar UI (`com.scalar.maven:scalar-core`)

## Layout

```text
doordash/
├── proto/                             # doordash-owned protobuf source
├── buf.yaml
├── buf.gen.yaml
├── gen/openapi/                       # generated OpenAPI artifacts
├── src/main/kotlin/com/quantum/doordash/
│   ├── app/                         # runtime assembly
│   ├── connect/                     # HTTP/RPC routes
│   ├── risk/                        # Drools engine
│   ├── storage/                     # repository + jOOQ
│   ├── events/                      # Redis/Redpanda publishers
│   └── temporal/                    # worker bootstrap
├── src/main/resources/rules/        # .drl rules
├── src/main/resources/db/migration/ # Flyway migrations
└── build.gradle.kts
```

## Local Development

Run API:

```bash
cd doordash
gradle run
```

Run worker:

```bash
cd doordash
gradle run --args="worker"
```

Build fat jar:

```bash
cd doordash
gradle clean shadowJar
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
  - `POST /rpc/quant.doordash.v1.OrderService/PlaceOrder`
  - `GET /rpc/quant.doordash.v1.OrderService/GetOrder`
  - `POST /rpc/quant.doordash.v1.RiskService/UpsertRule`
  - `GET /rpc/quant.doordash.v1.RiskService/ListRules`

Auth:

- when `DOORDASH_API_KEY` is set, RPC routes require `x-api-key` or `x-service-key`.

## Key Environment Variables

- `DOORDASH_HTTP_PORT`
- `DOORDASH_DB_URL`, `DOORDASH_DB_USER`, `DOORDASH_DB_PASSWORD`, `DOORDASH_DB_SCHEMA`
- `DOORDASH_REDIS_URL`
- `DOORDASH_REDPANDA_BROKERS`, `DOORDASH_REDPANDA_ORDER_TOPIC`, `DOORDASH_REDPANDA_RISK_TOPIC`
- `DOORDASH_TEMPORAL_ADDRESS`, `DOORDASH_TEMPORAL_NAMESPACE`, `DOORDASH_TASK_QUEUE`
- `DOORDASH_API_KEY`
- `DOORDASH_OPENAPI_SPEC_PATH` (default `/app/openapi/quantum.openapi.json`)
- `DOORDASH_CONFIG_FROM_CONSUL`, `DOORDASH_CONSUL_*`
- `DOORDASH_SECRETS_FROM_VAULT`, `DOORDASH_VAULT_*`

## Rules and Risk Engine

- place `.drl` files under `src/main/resources/rules`
- keep rule IDs/versioning aligned with persisted entries in `doordash.rule_versions`
- validate rule behavior with `gradle test` before deployment

## Testing

```bash
cd doordash
gradle test
```

## Protobuf and OpenAPI Codegen

```bash
cd doordash
buf dep update
buf lint
buf generate
```

Generated outputs from this module include:

- Kotlin protobuf stubs in `build/generated/source/proto/main/kotlin`
- Go/connect stubs for shared consumers in `../datafeed/internal/gen/doordash/v1` and `../datafeed/internal/gen/system/v1`
- Python protobuf/typing files in `../algorand/src/algorand/interfaces/connectrpc/generated`
- TypeScript protobuf/connect stubs in `../terminal/src/lib/gen`
- OpenAPI docs in `gen/openapi`
