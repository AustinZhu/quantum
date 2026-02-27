"""YFinance-backed market data provider for clustering/similarity."""

from __future__ import annotations

import re
from datetime import date, timedelta

import pandas as pd

try:  # pragma: no cover - exercised in integration environments with yfinance installed
    import yfinance as yf
except ImportError:  # pragma: no cover - local tests may run without optional dependency
    yf = None

_INTERVAL_UNITS = {
    "M": "m",
    "MIN": "m",
    "H": "h",
    "D": "d",
    "W": "wk",
    "WK": "wk",
    "MO": "mo",
}


def normalize_interval(interval: str) -> str:
    raw = interval.strip().upper()
    if not raw:
        raise ValueError("interval is required")
    if raw in {"1M", "2M", "5M", "15M", "30M", "60M", "90M", "1H"}:
        return "60m" if raw == "1H" else raw.lower()
    if raw in {"1D", "5D"}:
        return raw.lower()
    if raw == "1W":
        return "1wk"
    if raw == "1MO":
        return "1mo"

    match = re.fullmatch(r"(\d+)([A-Z]+)", raw)
    if not match:
        raise ValueError(f"unsupported interval: {interval}")

    count = int(match.group(1))
    unit = match.group(2)
    mapped = _INTERVAL_UNITS.get(unit)
    if mapped is None:
        raise ValueError(f"unsupported interval: {interval}")
    return f"{count}{mapped}"


class YFinanceSimilarityMarketDataProvider:
    """Fetches historical close prices and sector metadata using yfinance."""

    def __init__(self) -> None:
        self._sector_cache: dict[str, str] = {}

    def fetch_close_prices(
        self,
        symbols: list[str],
        interval: str,
        window_bars: int | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
    ) -> pd.DataFrame:
        if yf is None:
            raise RuntimeError("yfinance dependency is not installed")

        tickers = [symbol.strip().upper() for symbol in symbols if symbol and symbol.strip()]
        if not tickers:
            return pd.DataFrame()

        normalized_interval = normalize_interval(interval)
        download_kwargs: dict[str, object] = {
            "tickers": tickers,
            "interval": normalized_interval,
            "progress": False,
            "auto_adjust": False,
            "group_by": "column",
            "threads": True,
        }
        if window_bars is not None:
            download_kwargs["period"] = "max"
        else:
            download_kwargs["start"] = start_date
            if end_date:
                end_exclusive = date.fromisoformat(end_date) + timedelta(days=1)
                download_kwargs["end"] = end_exclusive.isoformat()

        raw = yf.download(**download_kwargs)
        if raw is None or raw.empty:
            return pd.DataFrame()

        close = self._extract_close_frame(raw, tickers)
        close = close.dropna(how="all")
        if window_bars is not None:
            close = close.tail(window_bars)
        return close

    def fetch_sectors(self, symbols: list[str]) -> dict[str, str]:
        if yf is None:
            raise RuntimeError("yfinance dependency is not installed")

        resolved: dict[str, str] = {}
        for symbol in symbols:
            key = symbol.strip().upper()
            if not key:
                continue
            if key not in self._sector_cache:
                sector = "UNKNOWN"
                try:
                    info = yf.Ticker(key).info
                    if isinstance(info, dict):
                        sector = str(info.get("sector") or "UNKNOWN")
                except Exception:
                    sector = "UNKNOWN"
                self._sector_cache[key] = sector
            resolved[key] = self._sector_cache[key]
        return resolved

    @staticmethod
    def _extract_close_frame(raw: pd.DataFrame, tickers: list[str]) -> pd.DataFrame:
        if isinstance(raw.columns, pd.MultiIndex):
            if "Close" not in raw.columns.get_level_values(0):
                return pd.DataFrame(columns=tickers)
            close = raw["Close"]
        else:
            if "Close" not in raw.columns:
                return pd.DataFrame(columns=tickers)
            close = raw[["Close"]]
            if len(tickers) == 1:
                close.columns = [tickers[0]]
            else:
                close.columns = [str(col).upper() for col in close.columns]

        if isinstance(close, pd.Series):
            close = close.to_frame(name=tickers[0])

        close = close.copy()
        close.columns = [str(col).upper() for col in close.columns]
        return close.reindex(columns=tickers)
