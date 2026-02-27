"""Mapping helpers for ML API payloads."""

from __future__ import annotations

from algorand.modules.ml.domain import (
    ClusterMember,
    ClusterStocksResult,
    FindSimilarStocksResult,
    ModelVersion,
    SimilarStock,
)


def model_versions_to_payload(items: list[ModelVersion]) -> list[dict]:
    return [
        {
            "model_version_id": item.model_version_id,
            "model_name": item.model_name,
            "status": item.status,
            "trained_ts_ms": item.trained_ts_ms,
            "metrics": item.metrics,
        }
        for item in items
    ]


def cluster_members_to_payload(items: list[ClusterMember]) -> list[dict]:
    return [
        {
            "symbol": item.symbol,
            "sector": item.sector,
            "cluster_id": item.cluster_id,
            "period_return": item.period_return,
            "volatility": item.volatility,
        }
        for item in items
    ]


def similar_stocks_to_payload(items: list[SimilarStock]) -> list[dict]:
    return [
        {
            "symbol": item.symbol,
            "sector": item.sector,
            "cluster_id": item.cluster_id,
            "score": item.score,
            "price_action_similarity": item.price_action_similarity,
            "volatility_similarity": item.volatility_similarity,
            "performance_similarity": item.performance_similarity,
            "sector_similarity": item.sector_similarity,
            "period_return": item.period_return,
            "volatility": item.volatility,
        }
        for item in items
    ]


def cluster_result_to_payload(result: ClusterStocksResult) -> dict:
    return {
        "members": cluster_members_to_payload(result.members),
        "cluster_count": result.cluster_count,
        "figures": [
            {"artifact_id": figure.artifact_id, "figure_json": figure.figure_json, "kind": figure.kind}
            for figure in result.figures
        ],
        "dropped_symbols": result.dropped_symbols,
    }


def similar_result_to_payload(result: FindSimilarStocksResult) -> dict:
    return {
        "target_symbol": result.target_symbol,
        "target_cluster_id": result.target_cluster_id,
        "members": cluster_members_to_payload(result.members),
        "similar": similar_stocks_to_payload(result.similar),
        "cluster_count": result.cluster_count,
        "figures": [
            {"artifact_id": figure.artifact_id, "figure_json": figure.figure_json, "kind": figure.kind}
            for figure in result.figures
        ],
        "dropped_symbols": result.dropped_symbols,
    }
