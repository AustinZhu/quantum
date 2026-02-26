from __future__ import annotations

from algorand.interfaces.connectrpc.services.backtests import BacktestRpcService


def test_smoke_create_and_list_runs(container) -> None:
    svc = BacktestRpcService(container)
    created = svc.run_backtest({"symbol": "AAPL", "interval": "1D"})
    runs = svc.list_runs({})

    run_ids = {row["run_id"] for row in runs["runs"]}
    assert created["run_id"] in run_ids
