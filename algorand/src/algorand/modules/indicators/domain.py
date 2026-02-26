"""Indicator domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class IndicatorPoint:
    ts_ms: int
    value: float


@dataclass(frozen=True)
class IndicatorSeries:
    indicator_id: str
    version: str
    points: list[IndicatorPoint]
