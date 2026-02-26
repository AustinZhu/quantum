"""Market data request/response schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class IngestMarketDataRequest:
    symbol: str
    interval: str


@dataclass(frozen=True)
class FetchMarketDataRequest:
    symbol: str
    interval: str
    start_ts_ms: int | None = None
    end_ts_ms: int | None = None
