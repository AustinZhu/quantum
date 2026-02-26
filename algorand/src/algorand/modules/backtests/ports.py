"""Backtest ports."""

from __future__ import annotations

from typing import Protocol

from algorand.modules.backtests.domain import BacktestRun


class BacktestRunRepository(Protocol):
    def put(self, run: BacktestRun) -> None:
        """Persist a run."""

    def get(self, run_id: str) -> BacktestRun | None:
        """Load run by id."""

    def list_runs(self) -> list[BacktestRun]:
        """List runs."""
