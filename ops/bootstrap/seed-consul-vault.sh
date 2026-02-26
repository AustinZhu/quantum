#!/usr/bin/env bash
set -euo pipefail

CONSUL_ADDR="${CONSUL_ADDR:-http://localhost:8500}"
VAULT_ADDR="${VAULT_ADDR:-http://localhost:8200}"
VAULT_TOKEN="${VAULT_TOKEN:-root}"

curl -fsS -X PUT "$CONSUL_ADDR/v1/kv/quantum/algorand/config" \
  --data '{"server_port":8080,"log_level":"INFO","temporal_target":"temporal:7233"}'

curl -fsS -X PUT "$CONSUL_ADDR/v1/kv/quantum/datafeed/config" \
  --data '{"http_addr":":8081","task_queue":"datafeed-ingest","temporal_address":"temporal:7233"}'

curl -fsS -X PUT "$CONSUL_ADDR/v1/kv/quantum/doordash/config" \
  --data '{"http_port":8082,"task_queue":"doordash-orders","temporal_address":"temporal:7233"}'

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

echo "Seeded Consul config and Vault API keys"
