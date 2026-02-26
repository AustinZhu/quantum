"""Temporal activities for backtest orchestration."""

from __future__ import annotations

from algorand.app.container import AppContainer
from algorand.interfaces.temporal.runtime import activity
from algorand.modules.indicators.service import INDICATOR_RSI_V1
from algorand.modules.market_data.domain import MarketBar
from algorand.modules.signals.service import SIGNAL_RSI_CROSS_V1


@activity.defn
async def fetch_data(payload: dict) -> dict:
    container = AppContainer.build()
    request = container.market_data_service.fetch
    bars = request(payload["request"])
    return {"bars": [bar.__dict__ for bar in bars]}


@activity.defn
async def build_features(payload: dict) -> dict:
    container = AppContainer.build()
    bars = [MarketBar(**bar) for bar in payload["bars"]]
    feature_rows = container.feature_service.build(bars)
    return {"feature_rows": [{"ts_ms": row.ts_ms, "values": row.values} for row in feature_rows]}


@activity.defn
async def compute_indicators_signals(payload: dict) -> dict:
    container = AppContainer.build()
    bars = [MarketBar(**bar) for bar in payload["bars"]]
    rsi = container.indicator_service.compute_rsi_v1(bars)
    signals = container.signal_service.generate_rsi_cross_v1(rsi)
    return {
        "indicator_id": INDICATOR_RSI_V1,
        "signal_id": SIGNAL_RSI_CROSS_V1,
        "signals": [signal.__dict__ for signal in signals],
    }


@activity.defn
async def execute_backtest(payload: dict) -> dict:
    return {
        "run_id": payload["run_id"],
        "status": "COMPLETED",
    }
