"""Machine learning schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class TrainingRequest:
    model_name: str
    hyperparameters: dict[str, str]


@dataclass(frozen=True)
class TimeWindowRequest:
    window_bars: int | None = None
    start_date: str | None = None
    end_date: str | None = None


@dataclass(frozen=True)
class SimilarityWeights:
    price_action_weight: float = 0.50
    volatility_weight: float = 0.20
    performance_weight: float = 0.20
    sector_weight: float = 0.10


@dataclass(frozen=True)
class ClusterStocksRequest:
    symbols: list[str]
    interval: str
    time_window: TimeWindowRequest
    min_clusters: int = 2
    max_clusters: int = 0
    weights: SimilarityWeights = SimilarityWeights()


@dataclass(frozen=True)
class FindSimilarStocksRequest:
    target_symbol: str
    symbols: list[str]
    interval: str
    time_window: TimeWindowRequest
    top_k: int = 10
    min_clusters: int = 2
    max_clusters: int = 0
    weights: SimilarityWeights = SimilarityWeights()
