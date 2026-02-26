"""Machine learning ports."""

from __future__ import annotations

from typing import Protocol

from algorand.modules.ml.domain import ModelVersion


class ModelRepository(Protocol):
    def put(self, model_version: ModelVersion) -> None:
        """Save model metadata."""

    def list_versions(self, model_name: str) -> list[ModelVersion]:
        """List model versions by model name."""
