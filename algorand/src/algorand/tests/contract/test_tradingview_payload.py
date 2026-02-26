from __future__ import annotations

from algorand.interfaces.connectrpc.services.backtests import BacktestRpcService


def test_tradingview_payload_shape(container) -> None:
    svc = BacktestRpcService(container)
    run = svc.run_backtest({"symbol": "AAPL", "interval": "1D"})

    artifact = container.analytics_service._repository.load_json(f"{run['run_id']}_tv_series")

    assert "series" in artifact
    assert "meta" in artifact
    assert artifact["meta"]["symbol"] == "AAPL"
    assert isinstance(artifact["series"][0]["points"], list)
