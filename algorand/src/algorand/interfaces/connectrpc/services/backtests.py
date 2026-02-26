"""Backtest ConnectRPC service scaffold."""

from __future__ import annotations

from algorand.interfaces.connectrpc.mappers.backtests import run_to_payload
from algorand.modules.backtests.schemas import RunBacktestRequest
from algorand.modules.features.schemas import BuildFeatureRequest
from algorand.modules.indicators.service import INDICATOR_RSI_V1
from algorand.modules.market_data.schemas import FetchMarketDataRequest
from algorand.modules.signals.service import SIGNAL_RSI_CROSS_V1
from algorand.modules.strategies.service import STRATEGY_MOMENTUM_V1


class BacktestRpcService:
    """Service-level facade to support generated ConnectRPC handlers."""

    def __init__(self, container) -> None:
        self._container = container

    def run_backtest(self, payload: dict) -> dict:
        strategy_id = payload.get("strategy_id", STRATEGY_MOMENTUM_V1)
        request = RunBacktestRequest(
            run_id=payload.get("run_id", ""),
            symbol=payload["symbol"],
            interval=payload.get("interval", "1D"),
            strategy_id=strategy_id,
            strategy_params=payload.get("strategy_params", {}),
        )
        bars = self._container.market_data_service.fetch(
            FetchMarketDataRequest(symbol=request.symbol, interval=request.interval)
        )
        features = self._container.feature_service.build(bars)
        _ = BuildFeatureRequest(symbol=request.symbol, interval=request.interval)
        rsi_series = self._container.indicator_service.compute_rsi_v1(bars=bars)
        _ = INDICATOR_RSI_V1
        signals = self._container.signal_service.generate_rsi_cross_v1(rsi_series)
        _ = SIGNAL_RSI_CROSS_V1
        intents = self._container.strategy_service.execute(
            strategy_id=request.strategy_id,
            signals=signals,
            params=request.strategy_params,
        )

        run = self._container.backtest_service.create_run(
            symbol=request.symbol,
            interval=request.interval,
            strategy_id=request.strategy_id,
            run_id=request.run_id or None,
        )
        run.metadata["feature_rows"] = str(len(features))
        run = self._container.backtest_service.execute(run=run, bars=bars, intents=intents)
        artifacts = self._container.analytics_service.build_plotly_artifacts(run)
        run.metadata.update({f"artifact_{k}": v for k, v in artifacts.items()})
        tv_payload = self._container.analytics_service.build_tradingview_series(
            indicator_series=rsi_series,
            symbol=request.symbol,
            interval=request.interval,
        )
        self._container.analytics_service._repository.save_json(f"{run.run_id}_tv_series", tv_payload)
        self._container.event_publisher.publish("algorand.backtests", f"{run.run_id}:{run.status}")
        self._container.event_publisher.add_stream_event(
            "algorand:backtest_stream", {"run_id": run.run_id, "status": run.status}
        )

        return {"run_id": run.run_id, "status": run.status}

    def get_run(self, payload: dict) -> dict:
        run = self._container.backtest_service.get_run(payload["run_id"])
        if run is None:
            return {"error": "not_found"}
        return run_to_payload(run)

    def list_runs(self, _: dict) -> dict:
        runs = self._container.backtest_service.list_runs()
        return {"runs": [run_to_payload(run) for run in runs]}
