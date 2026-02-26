# Doordash Service

Kotlin service for order placement/management and risk gating.

## Stack

- Ktor + ConnectRPC-friendly route layout
- Drools rule engine (`src/main/resources/rules`)
- jOOQ + Flyway for Postgres schema access/migrations
- Redis Streams + PubSub events
- Temporal worker entrypoint for async order workflows
- Optional config fetch from Consul and API key secret fetch from Vault
