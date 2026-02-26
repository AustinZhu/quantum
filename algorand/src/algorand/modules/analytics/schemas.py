"""Analytics schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class TradingViewPoint:
    ts_ms: int
    value: float


@dataclass(frozen=True)
class TradingViewSeries:
    series_id: str
    name: str
    pane: str
    color: str
    points: list[TradingViewPoint]
