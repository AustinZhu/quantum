"""Machine learning ports."""

from __future__ import annotations

from typing import Protocol

import pandas as pd

from algorand.modules.ml.domain import ModelVersion


class ModelRepository(Protocol):
    def put(self, model_version: ModelVersion) -> None:
        """Save model metadata."""

    def list_versions(self, model_name: str) -> list[ModelVersion]:
        """List model versions by model name."""


class SimilarityMarketDataProvider(Protocol):
    def fetch_close_prices(
        self,
        symbols: list[str],
        interval: str,
        window_bars: int | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
    ) -> pd.DataFrame:
        """Fetch close prices for a symbol universe."""

    def fetch_sectors(self, symbols: list[str]) -> dict[str, str]:
        """Fetch sector metadata for symbols."""


class ArtifactStore(Protocol):
    def save_json(self, artifact_id: str, payload: dict) -> str:
        """Persist a json artifact."""
