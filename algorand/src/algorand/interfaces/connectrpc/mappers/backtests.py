"""Mapping helpers for backtest API payloads."""

from __future__ import annotations

from algorand.modules.backtests.domain import BacktestRun


def run_to_payload(run: BacktestRun) -> dict:
    return {
        "run_id": run.run_id,
        "status": run.status,
        "symbol": run.symbol,
        "interval": run.interval,
        "strategy_id": run.strategy_id,
        "metadata": run.metadata,
    }
