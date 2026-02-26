"""Analytics artifact persistence."""

from __future__ import annotations

import json
from pathlib import Path


class ArtifactRepository:
    """File-based artifact store for Plotly and TradingView payloads."""

    def __init__(self, root: Path) -> None:
        self._root = root
        self._root.mkdir(parents=True, exist_ok=True)

    def save_json(self, artifact_id: str, payload: dict) -> str:
        path = self._root / f"{artifact_id}.json"
        path.write_text(json.dumps(payload), encoding="utf-8")
        return artifact_id

    def load_json(self, artifact_id: str) -> dict:
        path = self._root / f"{artifact_id}.json"
        return json.loads(path.read_text(encoding="utf-8"))
