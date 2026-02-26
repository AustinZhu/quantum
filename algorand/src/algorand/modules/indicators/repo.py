"""Indicator repositories."""

from __future__ import annotations

from algorand.modules.indicators.domain import IndicatorSeries


class InMemoryIndicatorRepository:
    def __init__(self) -> None:
        self._store: dict[str, IndicatorSeries] = {}

    def put(self, key: str, series: IndicatorSeries) -> None:
        self._store[key] = series

    def get(self, key: str) -> IndicatorSeries | None:
        return self._store.get(key)
