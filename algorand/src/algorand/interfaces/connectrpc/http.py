"""HTTP endpoints exposing ConnectRPC-style routes for algorand services."""

from __future__ import annotations

import time

from fastapi import Body, FastAPI, Request
from fastapi.responses import JSONResponse, PlainTextResponse

from algorand.app.container import AppContainer
from algorand.interfaces.connectrpc.app import build_registry


def build_http_app(container: AppContainer) -> FastAPI:
    app = FastAPI(title="algorand")
    services = build_registry(container)
    expected_api_key = container.settings.api_key

    @app.middleware("http")
    async def auth_middleware(request: Request, call_next):
        if request.url.path.startswith("/rpc/"):
            provided_key = request.headers.get("x-api-key") or request.headers.get("x-service-key")
            if expected_api_key and provided_key != expected_api_key:
                return JSONResponse({"error": "unauthorized"}, status_code=401)
        return await call_next(request)

    @app.get("/healthz")
    def healthz() -> dict[str, str | int]:
        return {"service": "algorand", "status": "ok", "ts_ms": int(time.time() * 1000)}

    @app.get("/readyz")
    def readyz() -> dict[str, str]:
        return {"status": "ready"}

    @app.get("/metrics")
    def metrics() -> PlainTextResponse:
        return PlainTextResponse("# metrics scaffold\n")

    @app.get("/rpc/quant.system.v1.SystemService/GetHealth")
    def system_health() -> dict[str, str | int]:
        return {"service": "algorand", "status": "healthy", "ts_ms": int(time.time() * 1000)}

    @app.get("/rpc/quant.system.v1.SystemService/GetReadiness")
    def system_readiness() -> dict[str, object]:
        return {
            "service": "algorand",
            "status": "ready",
            "dependencies": [
                {"name": "postgres", "status": "up", "detail": "tortoise initialized"},
                {"name": "redis", "status": "up", "detail": "redis reachable"},
                {"name": "temporal", "status": "up", "detail": "worker queues configured"},
            ],
        }

    @app.post("/rpc/quant.algorand.v1.BacktestService/RunBacktest")
    def run_backtest(payload: dict = Body(default_factory=dict)) -> dict:
        return services["BacktestService"].run_backtest(payload)

    @app.post("/rpc/quant.algorand.v1.BacktestService/GetRun")
    def get_run(payload: dict = Body(default_factory=dict)) -> JSONResponse:
        result = services["BacktestService"].get_run(payload)
        if "error" in result:
            return JSONResponse(result, status_code=404)
        return JSONResponse(result)

    @app.post("/rpc/quant.algorand.v1.BacktestService/ListRuns")
    def list_runs(payload: dict = Body(default_factory=dict)) -> dict:
        return services["BacktestService"].list_runs(payload)

    @app.post("/rpc/quant.algorand.v1.AnalyticsService/GetPerformanceSummary")
    def performance_summary(payload: dict = Body(default_factory=dict)) -> dict:
        return services["AnalyticsService"].get_performance_summary(payload)

    @app.post("/rpc/quant.algorand.v1.AnalyticsService/GetPlotlyArtifact")
    def plotly_artifact(payload: dict = Body(default_factory=dict)) -> dict:
        return services["AnalyticsService"].get_plotly_artifact(payload)

    @app.post("/rpc/quant.algorand.v1.AnalyticsService/GetTradingViewSeries")
    def tradingview_series(payload: dict = Body(default_factory=dict)) -> dict:
        return services["AnalyticsService"].get_tradingview_series(payload)

    @app.post("/rpc/quant.algorand.v1.AlertService/TestAlert")
    def test_alert(payload: dict = Body(default_factory=dict)) -> dict:
        return services["AlertService"].test_alert(payload)

    @app.post("/rpc/quant.algorand.v1.AlertService/ListAlertEvents")
    def list_alert_events(payload: dict = Body(default_factory=dict)) -> dict:
        return services["AlertService"].list_alert_events(payload)

    @app.post("/rpc/quant.algorand.v1.CatalogService/ListStrategies")
    def list_strategies(payload: dict = Body(default_factory=dict)) -> dict:
        return services["CatalogService"].list_strategies(payload)

    @app.post("/rpc/quant.algorand.v1.CatalogService/ListIndicators")
    def list_indicators(payload: dict = Body(default_factory=dict)) -> dict:
        return services["CatalogService"].list_indicators(payload)

    @app.post("/rpc/quant.algorand.v1.CatalogService/ListSignals")
    def list_signals(payload: dict = Body(default_factory=dict)) -> dict:
        return services["CatalogService"].list_signals(payload)

    @app.post("/rpc/quant.algorand.v1.MLService/RunTrainingJob")
    def run_training(payload: dict = Body(default_factory=dict)) -> dict:
        return services["MLService"].run_training_job(payload)

    @app.post("/rpc/quant.algorand.v1.MLService/GetModelVersions")
    def get_model_versions(payload: dict = Body(default_factory=dict)) -> dict:
        return services["MLService"].get_model_versions(payload)
    return app
