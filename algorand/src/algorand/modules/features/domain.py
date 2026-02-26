"""Feature engineering domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class FeatureRow:
    ts_ms: int
    values: dict[str, float]
