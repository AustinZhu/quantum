"""Strategy service with momentum exemplar implementation."""

from __future__ import annotations

from algorand.modules.signals.domain import SignalPoint
from algorand.modules.strategies.domain import PositionIntent
from algorand.modules.strategies.repo import StrategyRegistry

STRATEGY_MOMENTUM_V1 = "strategy_momentum_v1"


def strategy_momentum_v1(signals: list[SignalPoint], params: dict[str, float]) -> list[PositionIntent]:
    hold_bars = int(params.get("hold_bars", 3))
    intents: list[PositionIntent] = []
    hold_left = 0
    current_position = 0
    for signal in signals:
        if signal.side != 0:
            current_position = signal.side
            hold_left = hold_bars
        elif hold_left > 0:
            hold_left -= 1
        else:
            current_position = 0
        intents.append(PositionIntent(ts_ms=signal.ts_ms, target_position=current_position))
    return intents


class StrategyService:
    """Strategy registry and execution facade."""

    def __init__(self) -> None:
        self._registry = StrategyRegistry()
        self._registry.register(STRATEGY_MOMENTUM_V1, strategy_momentum_v1)

    def list_strategies(self) -> list[dict[str, str]]:
        return [
            {
                "strategy_id": STRATEGY_MOMENTUM_V1,
                "version": "v1",
                "display_name": "Momentum (RSI-driven)",
                "description": "Holds long/short intent for a configurable number of bars",
            }
        ]

    def execute(self, strategy_id: str, signals: list[SignalPoint], params: dict[str, float]) -> list[PositionIntent]:
        return self._registry.get(strategy_id)(signals, params)
