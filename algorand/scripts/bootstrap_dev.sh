#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

uv sync --all-extras

if command -v buf >/dev/null 2>&1; then
  ./scripts/generate_proto.sh
else
  echo "buf is not installed; skipping proto generation"
fi

echo "Bootstrap complete"
