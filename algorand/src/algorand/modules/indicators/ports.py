"""Indicator ports."""

from __future__ import annotations

from typing import Protocol

from algorand.modules.indicators.domain import IndicatorSeries


class IndicatorRepository(Protocol):
    def put(self, key: str, series: IndicatorSeries) -> None:
        """Save indicator series."""

    def get(self, key: str) -> IndicatorSeries | None:
        """Get indicator series by key."""
