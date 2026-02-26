"""Analytics service for metrics and chart artifacts."""

from __future__ import annotations

from statistics import mean

import plotly.graph_objects as go

from algorand.modules.analytics.domain import Metric
from algorand.modules.analytics.ports import ArtifactStore
from algorand.modules.analytics.schemas import TradingViewPoint, TradingViewSeries
from algorand.modules.backtests.domain import BacktestRun
from algorand.modules.indicators.domain import IndicatorSeries


class AnalyticsService:
    """Computes analytics and serializes visualization artifacts."""

    def __init__(self, repository: ArtifactStore) -> None:
        self._repository = repository

    def performance_summary(self, run: BacktestRun) -> list[Metric]:
        if not run.equity_curve:
            return []
        first = run.equity_curve[0][1]
        last = run.equity_curve[-1][1]
        returns = [
            (curr - prev) / prev
            for (_, prev), (_, curr) in zip(run.equity_curve, run.equity_curve[1:], strict=False)
            if prev != 0
        ]
        if returns:
            avg_return = mean(returns)
            variance = sum((item - avg_return) ** 2 for item in returns) / max(1, len(returns) - 1)
            sharpe_proxy = avg_return / (1e-6 + variance**0.5)
        else:
            sharpe_proxy = 0.0
        return [
            Metric(name="total_return", value=((last / first) - 1) * 100, unit="pct"),
            Metric(name="ending_equity", value=last, unit="usd"),
            Metric(name="trade_count", value=float(len(run.trades)), unit="count"),
            Metric(name="sharpe_proxy", value=sharpe_proxy, unit="ratio"),
        ]

    def build_plotly_artifacts(self, run: BacktestRun) -> dict[str, str]:
        ts = [point[0] for point in run.equity_curve]
        values = [point[1] for point in run.equity_curve]

        equity_figure = go.Figure(data=[go.Scatter(x=ts, y=values, mode="lines", name="equity")])
        equity_id = self._repository.save_json(
            f"{run.run_id}_equity_curve",
            {
                "artifact_id": f"{run.run_id}_equity_curve",
                "figure_json": equity_figure.to_json(),
                "kind": "equity_curve",
            },
        )

        peaks: list[float] = []
        max_so_far = float("-inf")
        for value in values:
            max_so_far = max(max_so_far, value)
            peaks.append(max_so_far)
        drawdowns = [
            0.0 if peak == 0 else ((value - peak) / peak) * 100
            for value, peak in zip(values, peaks, strict=True)
        ]
        drawdown_figure = go.Figure(data=[go.Scatter(x=ts, y=drawdowns, mode="lines", name="drawdown_pct")])
        drawdown_id = self._repository.save_json(
            f"{run.run_id}_drawdown_curve",
            {
                "artifact_id": f"{run.run_id}_drawdown_curve",
                "figure_json": drawdown_figure.to_json(),
                "kind": "drawdown_curve",
            },
        )

        return {"equity_curve": equity_id, "drawdown_curve": drawdown_id}

    def build_tradingview_series(
        self,
        indicator_series: IndicatorSeries,
        symbol: str,
        interval: str,
    ) -> dict:
        series = TradingViewSeries(
            series_id=indicator_series.indicator_id,
            name="RSI",
            pane="indicator",
            color="#f39c12",
            points=[TradingViewPoint(ts_ms=point.ts_ms, value=point.value) for point in indicator_series.points],
        )
        payload = {
            "series": [
                {
                    "series_id": series.series_id,
                    "name": series.name,
                    "pane": series.pane,
                    "color": series.color,
                    "points": [{"ts_ms": p.ts_ms, "value": p.value} for p in series.points],
                }
            ],
            "meta": {
                "timezone": "UTC",
                "symbol": symbol,
                "interval": interval,
                "source_version": indicator_series.version,
            },
        }
        return payload
