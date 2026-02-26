"""Analytics ConnectRPC service scaffold."""

from __future__ import annotations

from algorand.interfaces.connectrpc.mappers.analytics import metrics_to_payload


class AnalyticsRpcService:
    def __init__(self, container) -> None:
        self._container = container

    def get_performance_summary(self, payload: dict) -> dict:
        run = self._container.backtest_service.get_run(payload["run_id"])
        if run is None:
            return {"metrics": []}
        metrics = self._container.analytics_service.performance_summary(run)
        return {"run_id": run.run_id, "metrics": metrics_to_payload(metrics)}

    def get_plotly_artifact(self, payload: dict) -> dict:
        artifact_id = payload["artifact_id"]
        artifact = self._container.analytics_service._repository.load_json(artifact_id)
        return {"spec": artifact}

    def get_tradingview_series(self, payload: dict) -> dict:
        run_id = payload["run_id"]
        artifact = self._container.analytics_service._repository.load_json(f"{run_id}_tv_series")
        return artifact
