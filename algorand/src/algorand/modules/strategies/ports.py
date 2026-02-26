"""Strategy ports."""

from __future__ import annotations

from typing import Protocol

from algorand.modules.signals.domain import SignalPoint
from algorand.modules.strategies.domain import PositionIntent


class StrategyAlgorithm(Protocol):
    def __call__(self, signals: list[SignalPoint], params: dict[str, float]) -> list[PositionIntent]:
        """Strategy callable interface."""
