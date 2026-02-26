"""Catalog service."""

from __future__ import annotations

from algorand.modules.indicators.service import IndicatorService
from algorand.modules.signals.service import SignalService
from algorand.modules.strategies.service import StrategyService


class CatalogService:
    """Aggregates strategy/indicator/signal metadata for frontend discovery."""

    def __init__(
        self,
        strategy_service: StrategyService,
        indicator_service: IndicatorService,
        signal_service: SignalService,
    ) -> None:
        self._strategy_service = strategy_service
        self._indicator_service = indicator_service
        self._signal_service = signal_service

    def list_strategies(self) -> list[dict[str, str]]:
        return self._strategy_service.list_strategies()

    def list_indicators(self) -> list[dict[str, str]]:
        return self._indicator_service.list_indicators()

    def list_signals(self) -> list[dict[str, str]]:
        return self._signal_service.list_signals()
