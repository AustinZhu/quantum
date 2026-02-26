"""Ports for market data providers and repositories."""

from __future__ import annotations

from typing import Protocol

from algorand.modules.market_data.domain import MarketBar


class MarketDataProvider(Protocol):
    def fetch_bars(self, symbol: str, interval: str, start_ts_ms: int, end_ts_ms: int) -> list[MarketBar]:
        """Fetch bars from an external source."""


class MarketDataRepository(Protocol):
    def upsert_bars(self, symbol: str, interval: str, bars: list[MarketBar]) -> None:
        """Persist market bars."""

    def get_bars(
        self,
        symbol: str,
        interval: str,
        start_ts_ms: int | None = None,
        end_ts_ms: int | None = None,
    ) -> list[MarketBar]:
        """Query market bars by key."""
