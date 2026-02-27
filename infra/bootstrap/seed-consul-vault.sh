#!/usr/bin/env bash
set -euo pipefail

CONSUL_ADDR="${CONSUL_ADDR:-http://localhost:8500}"
VAULT_ADDR="${VAULT_ADDR:-http://localhost:8200}"
VAULT_TOKEN="${VAULT_TOKEN:-root}"

curl -fsS -X PUT "$CONSUL_ADDR/v1/kv/quantum/algorand/config" \
  --data '{"server_port":8080,"log_level":"INFO","temporal_target":"temporal:7233","redpanda_brokers":"redpanda:9092","airflow_api_base_url":"http://airflow:8080/api/v1"}'

curl -fsS -X PUT "$CONSUL_ADDR/v1/kv/quantum/datafeed/config" \
  --data '{"http_addr":":8081","task_queue":"datafeed-ingest","temporal_address":"temporal:7233","redpanda_brokers":"redpanda:9092","redpanda_tick_topic":"datafeed.ticks"}'

curl -fsS -X PUT "$CONSUL_ADDR/v1/kv/quantum/doordash/config" \
  --data '{"http_port":8082,"task_queue":"doordash-orders","temporal_address":"temporal:7233","redpanda_brokers":"redpanda:9092","redpanda_order_topic":"doordash.orders","redpanda_risk_topic":"doordash.risk"}'

curl -fsS -X PUT "$CONSUL_ADDR/v1/kv/quantum/casdoor/config" \
  --data '{"endpoint":"http://casdoor:8000","db_name":"casdoor","driver":"postgres","rbac_engine":"casbin"}'

curl -fsS -X POST "$VAULT_ADDR/v1/secret/data/quantum/algorand" \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"data":{"api_key":"terminal-dev-key"}}'

curl -fsS -X POST "$VAULT_ADDR/v1/secret/data/quantum/datafeed" \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"data":{"api_key":"terminal-dev-key"}}'

curl -fsS -X POST "$VAULT_ADDR/v1/secret/data/quantum/doordash" \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"data":{"api_key":"terminal-dev-key"}}'

curl -fsS -X POST "$VAULT_ADDR/v1/secret/data/quantum/casdoor" \
  -H "X-Vault-Token: $VAULT_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"data":{"client_secret":"change-me","certificate":""}}'

echo "Seeded Consul config and Vault API keys"
