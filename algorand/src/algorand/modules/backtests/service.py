"""Backtest execution service."""

from __future__ import annotations

from uuid import uuid4

from algorand.modules.backtests.domain import BacktestRun, Trade
from algorand.modules.backtests.ports import BacktestRunRepository
from algorand.modules.market_data.domain import MarketBar
from algorand.modules.strategies.domain import PositionIntent


class BacktestService:
    """Runs simplified deterministic backtests and stores run artifacts."""

    def __init__(self, repository: BacktestRunRepository) -> None:
        self._repository = repository

    def create_run(
        self,
        symbol: str,
        interval: str,
        strategy_id: str,
        run_id: str | None = None,
    ) -> BacktestRun:
        run = BacktestRun(
            run_id=run_id or uuid4().hex,
            symbol=symbol,
            interval=interval,
            strategy_id=strategy_id,
            status="PENDING",
        )
        self._repository.put(run)
        return run

    def execute(self, run: BacktestRun, bars: list[MarketBar], intents: list[PositionIntent]) -> BacktestRun:
        cash = 100_000.0
        position = 0
        qty = 10.0
        equity_curve: list[tuple[int, float]] = []
        trades: list[Trade] = []

        for bar, intent in zip(bars, intents, strict=True):
            if intent.target_position != position:
                if position != 0:
                    cash += position * qty * bar.close
                if intent.target_position != 0:
                    cash -= intent.target_position * qty * bar.close
                position = intent.target_position
                trades.append(Trade(ts_ms=bar.ts_ms, side=position, qty=qty, price=bar.close))

            equity = cash + (position * qty * bar.close)
            equity_curve.append((bar.ts_ms, equity))

        run.status = "COMPLETED"
        run.equity_curve = equity_curve
        run.trades = trades
        self._repository.put(run)
        return run

    def get_run(self, run_id: str) -> BacktestRun | None:
        return self._repository.get(run_id)

    def list_runs(self) -> list[BacktestRun]:
        return self._repository.list_runs()
