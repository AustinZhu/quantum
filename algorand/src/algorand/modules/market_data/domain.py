"""Market data domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class MarketBar:
    ts_ms: int
    open: float
    high: float
    low: float
    close: float
    volume: float
