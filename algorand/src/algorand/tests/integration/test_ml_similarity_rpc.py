from __future__ import annotations

import numpy as np
import pandas as pd

from algorand.interfaces.connectrpc.services.ml import MLRpcService


class _Provider:
    def fetch_close_prices(
        self,
        symbols: list[str],
        interval: str,
        window_bars: int | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
    ) -> pd.DataFrame:
        _ = interval
        idx = pd.date_range("2024-01-01", periods=160, freq="D")
        steps = np.arange(len(idx))
        data = {
            "AAPL": 100 + 0.2 * steps + np.sin(steps / 8),
            "MSFT": 95 + 0.22 * steps + np.sin((steps + 1) / 8),
            "NVDA": 70 + 0.4 * steps + 2 * np.sin(steps / 6),
            "XOM": 150 - 0.1 * steps + np.cos(steps / 10),
        }
        frame = pd.DataFrame(data, index=idx)
        subset = frame[symbols]
        if start_date and end_date:
            subset = subset.loc[start_date:end_date]
        if window_bars is not None:
            subset = subset.tail(window_bars)
        return subset

    def fetch_sectors(self, symbols: list[str]) -> dict[str, str]:
        values = {
            "AAPL": "Technology",
            "MSFT": "Technology",
            "NVDA": "Technology",
            "XOM": "Energy",
        }
        return {symbol: values.get(symbol, "UNKNOWN") for symbol in symbols}


def test_rpc_find_similar_stocks_shape(container) -> None:
    container.ml_service._market_data_provider = _Provider()
    svc = MLRpcService(container)
    payload = {
        "target_symbol": "AAPL",
        "symbols": ["AAPL", "MSFT", "NVDA", "XOM"],
        "interval": "1D",
        "time_window": {"window_bars": 100},
        "top_k": 3,
    }

    result = svc.find_similar_stocks(payload)

    assert result["target_symbol"] == "AAPL"
    assert len(result["members"]) == 4
    assert len(result["similar"]) == 3
    assert result["figures"][0]["artifact_id"]


def test_rpc_cluster_stocks_validation_error(container) -> None:
    container.ml_service._market_data_provider = _Provider()
    svc = MLRpcService(container)

    result = svc.cluster_stocks({"symbols": ["AAPL", "MSFT", "NVDA"], "interval": "1D"})

    assert result["error"] == "invalid_argument"
