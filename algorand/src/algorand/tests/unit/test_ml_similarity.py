from __future__ import annotations

from dataclasses import dataclass

import numpy as np
import pandas as pd
import pytest

from algorand.modules.ml.repo import InMemoryModelRepository
from algorand.modules.ml.schemas import (
    ClusterStocksRequest,
    FindSimilarStocksRequest,
    SimilarityWeights,
    TimeWindowRequest,
)
from algorand.modules.ml.service import MLService


@dataclass
class _ArtifactStore:
    payloads: dict[str, dict]

    def save_json(self, artifact_id: str, payload: dict) -> str:
        self.payloads[artifact_id] = payload
        return artifact_id


class _Provider:
    def __init__(self) -> None:
        self._df = self._build_data()
        self._sectors = {
            "AAPL": "Technology",
            "MSFT": "Technology",
            "NVDA": "Technology",
            "XOM": "Energy",
            "JPM": "Financial Services",
        }

    def fetch_close_prices(
        self,
        symbols: list[str],
        interval: str,
        window_bars: int | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
    ) -> pd.DataFrame:
        _ = interval
        subset = self._df[symbols].copy()
        if start_date and end_date:
            subset = subset.loc[start_date:end_date]
        if window_bars is not None:
            subset = subset.tail(window_bars)
        return subset

    def fetch_sectors(self, symbols: list[str]) -> dict[str, str]:
        return {symbol: self._sectors.get(symbol, "UNKNOWN") for symbol in symbols}

    @staticmethod
    def _build_data() -> pd.DataFrame:
        idx = pd.date_range("2024-01-01", periods=240, freq="D")
        steps = np.arange(len(idx))
        aapl = 100 + 0.3 * steps + np.sin(steps / 10)
        msft = 102 + 0.32 * steps + np.sin((steps + 2) / 10)
        nvda = 80 + 0.5 * steps + 3 * np.sin(steps / 7)
        xom = 140 - 0.12 * steps + 2 * np.cos(steps / 8)
        jpm = 90 + 0.08 * steps + np.sin(steps / 9)
        return pd.DataFrame(
            {
                "AAPL": aapl,
                "MSFT": msft,
                "NVDA": nvda,
                "XOM": xom,
                "JPM": jpm,
            },
            index=idx,
        )


def _service() -> tuple[MLService, _ArtifactStore]:
    artifact_store = _ArtifactStore(payloads={})
    service = MLService(
        repository=InMemoryModelRepository(),
        market_data_provider=_Provider(),
        artifact_store=artifact_store,
    )
    return service, artifact_store


def test_cluster_stocks_builds_clusters_and_figure() -> None:
    service, artifacts = _service()
    result = service.cluster_stocks(
        ClusterStocksRequest(
            symbols=["AAPL", "MSFT", "NVDA", "XOM", "JPM"],
            interval="1D",
            time_window=TimeWindowRequest(window_bars=120),
        )
    )

    assert result.cluster_count >= 2
    assert len(result.members) == 5
    assert result.figures[0].kind == "cluster_scatter"
    assert result.figures[0].artifact_id in artifacts.payloads


def test_find_similar_stocks_returns_ranked_results() -> None:
    service, artifacts = _service()
    result = service.find_similar_stocks(
        FindSimilarStocksRequest(
            target_symbol="AAPL",
            symbols=["AAPL", "MSFT", "NVDA", "XOM", "JPM"],
            interval="1D",
            time_window=TimeWindowRequest(window_bars=120),
            top_k=3,
            weights=SimilarityWeights(),
        )
    )

    assert result.target_symbol == "AAPL"
    assert result.similar[0].symbol == "MSFT"
    assert len(result.figures) == 2
    assert any(payload["kind"] == "similarity_bar" for payload in artifacts.payloads.values())


def test_window_validation_rejects_short_window() -> None:
    service, _ = _service()
    with pytest.raises(ValueError, match="window_bars must be >= 20"):
        service.cluster_stocks(
            ClusterStocksRequest(
                symbols=["AAPL", "MSFT", "NVDA"],
                interval="1D",
                time_window=TimeWindowRequest(window_bars=10),
            )
        )
