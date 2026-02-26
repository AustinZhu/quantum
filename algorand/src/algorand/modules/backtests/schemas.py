"""Backtest request schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class RunBacktestRequest:
    run_id: str
    symbol: str
    interval: str
    strategy_id: str
    strategy_params: dict[str, float]
