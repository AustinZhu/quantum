"""Analytics ports."""

from __future__ import annotations

from typing import Protocol


class ArtifactStore(Protocol):
    def save_json(self, artifact_id: str, payload: dict) -> str:
        """Persist a json artifact."""

    def load_json(self, artifact_id: str) -> dict:
        """Load a json artifact."""
