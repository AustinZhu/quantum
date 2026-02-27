"""Machine learning domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class ModelVersion:
    model_version_id: str
    model_name: str
    status: str
    trained_ts_ms: int
    metrics: dict[str, str]


@dataclass(frozen=True)
class PlotlyArtifact:
    artifact_id: str
    figure_json: str
    kind: str


@dataclass(frozen=True)
class ClusterMember:
    symbol: str
    sector: str
    cluster_id: int
    period_return: float
    volatility: float


@dataclass(frozen=True)
class SimilarStock:
    symbol: str
    sector: str
    cluster_id: int
    score: float
    price_action_similarity: float
    volatility_similarity: float
    performance_similarity: float
    sector_similarity: float
    period_return: float
    volatility: float


@dataclass(frozen=True)
class ClusterStocksResult:
    members: list[ClusterMember]
    cluster_count: int
    figures: list[PlotlyArtifact]
    dropped_symbols: list[str]


@dataclass(frozen=True)
class FindSimilarStocksResult:
    target_symbol: str
    target_cluster_id: int
    members: list[ClusterMember]
    similar: list[SimilarStock]
    cluster_count: int
    figures: list[PlotlyArtifact]
    dropped_symbols: list[str]
