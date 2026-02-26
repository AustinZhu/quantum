#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR/api"

if ! command -v buf >/dev/null 2>&1; then
  echo "buf CLI not found. Install from https://buf.build/docs/installation"
  exit 1
fi

buf dep update
buf lint
buf generate

echo "Generated protobuf/connect code for algorand, datafeed, doordash, terminal"
