"""Strategy registry repository."""

from __future__ import annotations

from collections.abc import Callable

from algorand.modules.signals.domain import SignalPoint
from algorand.modules.strategies.domain import PositionIntent


class StrategyRegistry:
    def __init__(self) -> None:
        self._strategies: dict[str, Callable[[list[SignalPoint], dict[str, float]], list[PositionIntent]]] = {}

    def register(
        self,
        strategy_id: str,
        algo: Callable[[list[SignalPoint], dict[str, float]], list[PositionIntent]],
    ) -> None:
        self._strategies[strategy_id] = algo

    def get(self, strategy_id: str) -> Callable[[list[SignalPoint], dict[str, float]], list[PositionIntent]]:
        return self._strategies[strategy_id]

    def list_ids(self) -> list[str]:
        return sorted(self._strategies)
