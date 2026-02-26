"""Market data application service."""

from __future__ import annotations

from datetime import UTC, datetime, timedelta

from algorand.modules.market_data.domain import MarketBar
from algorand.modules.market_data.ports import MarketDataRepository
from algorand.modules.market_data.schemas import FetchMarketDataRequest, IngestMarketDataRequest


class MarketDataService:
    """Coordinates ingestion and access of canonical market data."""

    def __init__(self, repository: MarketDataRepository) -> None:
        self._repository = repository

    def ingest(self, symbol: str, interval: str, bars: list[MarketBar]) -> None:
        self._repository.upsert_bars(symbol=symbol, interval=interval, bars=bars)

    def fetch(self, request: FetchMarketDataRequest) -> list[MarketBar]:
        return self._repository.get_bars(
            symbol=request.symbol,
            interval=request.interval,
            start_ts_ms=request.start_ts_ms,
            end_ts_ms=request.end_ts_ms,
        )

    def generate_sample_data(self, request: IngestMarketDataRequest, size: int = 120) -> list[MarketBar]:
        base = datetime.now(tz=UTC) - timedelta(days=size)
        bars: list[MarketBar] = []
        price = 100.0
        for idx in range(size):
            ts = int((base + timedelta(days=idx)).timestamp() * 1000)
            drift = 0.0008 if idx % 7 else -0.003
            price = max(1.0, price * (1 + drift))
            high = price * 1.01
            low = price * 0.99
            bars.append(
                MarketBar(
                    ts_ms=ts,
                    open=price * 0.995,
                    high=high,
                    low=low,
                    close=price,
                    volume=1_000_000 + idx,
                )
            )
        return bars
