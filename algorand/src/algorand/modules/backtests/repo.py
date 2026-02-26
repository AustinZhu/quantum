"""Backtest repositories."""

from __future__ import annotations

from algorand.infra.db.models import BacktestRunRecord
from algorand.infra.db.runtime import run_sync
from algorand.modules.backtests.domain import BacktestRun, Trade


class InMemoryBacktestRunRepository:
    def __init__(self) -> None:
        self._runs: dict[str, BacktestRun] = {}

    def put(self, run: BacktestRun) -> None:
        self._runs[run.run_id] = run

    def get(self, run_id: str) -> BacktestRun | None:
        return self._runs.get(run_id)

    def list_runs(self) -> list[BacktestRun]:
        return sorted(self._runs.values(), key=lambda run: run.run_id)


class TortoiseBacktestRunRepository:
    """Tortoise-backed backtest run repository."""

    def put(self, run: BacktestRun) -> None:
        async def _put() -> None:
            await BacktestRunRecord.update_or_create(
                defaults={
                    "symbol": run.symbol,
                    "interval": run.interval,
                    "strategy_id": run.strategy_id,
                    "status": run.status,
                    "equity_curve": run.equity_curve,
                    "trades": [trade.__dict__ for trade in run.trades],
                    "metadata": run.metadata,
                },
                run_id=run.run_id,
            )

        run_sync(_put())

    def get(self, run_id: str) -> BacktestRun | None:
        async def _get() -> BacktestRun | None:
            row = await BacktestRunRecord.get_or_none(run_id=run_id)
            if row is None:
                return None
            trades = [Trade(**item) for item in (row.trades or [])]
            return BacktestRun(
                run_id=row.run_id,
                symbol=row.symbol,
                interval=row.interval,
                strategy_id=row.strategy_id,
                status=row.status,
                equity_curve=[tuple(item) for item in (row.equity_curve or [])],
                trades=trades,
                metadata=dict(row.metadata or {}),
            )

        return run_sync(_get())

    def list_runs(self) -> list[BacktestRun]:
        async def _list() -> list[BacktestRun]:
            rows = await BacktestRunRecord.all().order_by("run_id")
            result: list[BacktestRun] = []
            for row in rows:
                trades = [Trade(**item) for item in (row.trades or [])]
                result.append(
                    BacktestRun(
                        run_id=row.run_id,
                        symbol=row.symbol,
                        interval=row.interval,
                        strategy_id=row.strategy_id,
                        status=row.status,
                        equity_curve=[tuple(item) for item in (row.equity_curve or [])],
                        trades=trades,
                        metadata=dict(row.metadata or {}),
                    )
                )
            return result

        return run_sync(_list())
