from __future__ import annotations

from algorand.interfaces.connectrpc.services.analytics import AnalyticsRpcService
from algorand.interfaces.connectrpc.services.backtests import BacktestRpcService


def test_run_backtest_and_fetch_metrics(container) -> None:
    backtests = BacktestRpcService(container)
    analytics = AnalyticsRpcService(container)

    run = backtests.run_backtest({"symbol": "AAPL", "interval": "1D"})
    summary = analytics.get_performance_summary({"run_id": run["run_id"]})

    assert run["status"] == "COMPLETED"
    assert summary["run_id"] == run["run_id"]
    assert len(summary["metrics"]) >= 3
