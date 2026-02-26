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
