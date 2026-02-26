"""Indicator service with RSI exemplar implementation."""

from __future__ import annotations

from algorand.modules.indicators.domain import IndicatorPoint, IndicatorSeries
from algorand.modules.market_data.domain import MarketBar

INDICATOR_RSI_V1 = "indicator_rsi_v1"


def _compute_rsi(closes: list[float], period: int) -> list[float]:
    if not closes:
        return []
    gains: list[float] = []
    losses: list[float] = []
    output = [50.0]
    for idx in range(1, len(closes)):
        change = closes[idx] - closes[idx - 1]
        gains.append(max(change, 0.0))
        losses.append(abs(min(change, 0.0)))
        start = max(0, idx - period)
        avg_gain = sum(gains[start:idx]) / max(1, min(idx, period))
        avg_loss = sum(losses[start:idx]) / max(1, min(idx, period))
        if avg_loss == 0:
            output.append(100.0)
        else:
            rs = avg_gain / avg_loss
            output.append(100.0 - (100.0 / (1.0 + rs)))
    return output


class IndicatorService:
    """Computes technical indicators."""

    def list_indicators(self) -> list[dict[str, str]]:
        return [
            {
                "indicator_id": INDICATOR_RSI_V1,
                "version": "v1",
                "display_name": "RSI",
                "description": "Relative Strength Index",
            }
        ]

    def compute_rsi_v1(self, bars: list[MarketBar], period: int = 14) -> IndicatorSeries:
        closes = [bar.close for bar in bars]
        values = _compute_rsi(closes=closes, period=period)
        points = [IndicatorPoint(ts_ms=bar.ts_ms, value=value) for bar, value in zip(bars, values, strict=True)]
        return IndicatorSeries(indicator_id=INDICATOR_RSI_V1, version="v1", points=points)
