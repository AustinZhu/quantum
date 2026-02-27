"""Backtest orchestration workflow."""

from __future__ import annotations

from datetime import timedelta

from algorand.interfaces.temporal.runtime import workflow


@workflow.defn
class BacktestRunWorkflow:
    @workflow.run
    async def run(self, payload: dict) -> dict:
        bars = await workflow.execute_activity(
            "fetch_data",
            args=[{"request": payload["market_data_request"]}],
            start_to_close_timeout=timedelta(minutes=2),
        )
        _features = await workflow.execute_activity(
            "build_features",
            args=[bars],
            start_to_close_timeout=timedelta(minutes=2),
        )
        _signals = await workflow.execute_activity(
            "compute_indicators_signals",
            args=[bars],
            start_to_close_timeout=timedelta(minutes=2),
        )
        run = await workflow.execute_activity(
            "execute_backtest",
            args=[payload],
            start_to_close_timeout=timedelta(minutes=5),
        )
        await workflow.execute_activity(
            "compute_analytics",
            args=[run],
            start_to_close_timeout=timedelta(minutes=2),
        )
        await workflow.execute_activity(
            "persist_artifacts",
            args=[run],
            start_to_close_timeout=timedelta(minutes=2),
        )
        await workflow.execute_activity(
            "emit_alerts",
            args=[run],
            start_to_close_timeout=timedelta(minutes=1),
        )
        return {"run_id": run["run_id"], "status": "COMPLETED"}
