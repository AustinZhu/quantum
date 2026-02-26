"""Signal generation service with RSI-cross exemplar."""

from __future__ import annotations

from algorand.modules.indicators.domain import IndicatorSeries
from algorand.modules.signals.domain import SignalPoint

SIGNAL_RSI_CROSS_V1 = "signal_rsi_cross_v1"


class SignalService:
    """Builds discrete trading signals from indicators and ML scores."""

    def list_signals(self) -> list[dict[str, str]]:
        return [
            {
                "signal_id": SIGNAL_RSI_CROSS_V1,
                "version": "v1",
                "display_name": "RSI Cross",
                "description": "Long below lower threshold, short above upper threshold",
            }
        ]

    def generate_rsi_cross_v1(
        self,
        rsi_series: IndicatorSeries,
        lower: float = 30.0,
        upper: float = 70.0,
    ) -> list[SignalPoint]:
        points: list[SignalPoint] = []
        for point in rsi_series.points:
            if point.value <= lower:
                side = 1
            elif point.value >= upper:
                side = -1
            else:
                side = 0
            points.append(SignalPoint(ts_ms=point.ts_ms, side=side, score=point.value))
        return points
