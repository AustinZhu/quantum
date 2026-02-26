from __future__ import annotations

from algorand.modules.indicators.service import IndicatorService
from algorand.modules.market_data.schemas import FetchMarketDataRequest
from algorand.modules.signals.service import SignalService
from algorand.modules.strategies.service import STRATEGY_MOMENTUM_V1, StrategyService


def test_indicator_signal_strategy_chain_is_deterministic(container) -> None:
    bars = container.market_data_service.fetch(
        FetchMarketDataRequest(symbol="AAPL", interval="1D", start_ts_ms=None, end_ts_ms=None)
    )

    indicator_service = IndicatorService()
    signal_service = SignalService()
    strategy_service = StrategyService()

    rsi = indicator_service.compute_rsi_v1(bars=bars, period=14)
    signals = signal_service.generate_rsi_cross_v1(rsi_series=rsi, lower=40, upper=60)
    intents = strategy_service.execute(STRATEGY_MOMENTUM_V1, signals=signals, params={"hold_bars": 2})

    assert len(rsi.points) == len(bars)
    assert len(signals) == len(bars)
    assert len(intents) == len(bars)
    assert all(-1 <= signal.side <= 1 for signal in signals)
