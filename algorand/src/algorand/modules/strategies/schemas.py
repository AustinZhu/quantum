"""Strategy schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class StrategyConfig:
    strategy_id: str
    params: dict[str, float]
