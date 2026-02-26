#!/usr/bin/env bash
set -euo pipefail

MONOREPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$MONOREPO_ROOT"

docker compose up --build
