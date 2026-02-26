"""Mapping helpers for ML API payloads."""

from __future__ import annotations

from algorand.modules.ml.domain import ModelVersion


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
