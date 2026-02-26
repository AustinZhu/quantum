"""Backtest domain models."""

from __future__ import annotations

from dataclasses import dataclass, field


@dataclass(frozen=True)
class Trade:
    ts_ms: int
    side: int
    qty: float
    price: float


@dataclass
class BacktestRun:
    run_id: str
    symbol: str
    interval: str
    strategy_id: str
    status: str
    equity_curve: list[tuple[int, float]] = field(default_factory=list)
    trades: list[Trade] = field(default_factory=list)
    metadata: dict[str, str] = field(default_factory=dict)
