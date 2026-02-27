#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR/api"

mkdir -p gen/openapi

if ! command -v buf >/dev/null 2>&1; then
  echo "buf CLI not found. Install from https://buf.build/docs/installation"
  exit 1
fi

buf dep update
buf lint

baseline="${BUF_BREAKING_AGAINST:-}"

if [[ -n "${baseline}" ]]; then
  buf breaking --against "${baseline}"
else
  echo "Skipping buf breaking check (set BUF_BREAKING_AGAINST to enable)"
fi

buf generate

echo "Generated protobuf/connect code for algorand, datafeed, doordash, terminal, and OpenAPI"
