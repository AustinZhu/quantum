"""Market data repository implementations."""

from __future__ import annotations

from collections import defaultdict

from algorand.infra.db.models import MarketBarRecord
from algorand.infra.db.runtime import run_sync
from algorand.modules.market_data.domain import MarketBar


class InMemoryMarketDataRepository:
    """Simple in-memory repository for scaffolding and tests."""

    def __init__(self) -> None:
        self._data: dict[tuple[str, str], list[MarketBar]] = defaultdict(list)

    def upsert_bars(self, symbol: str, interval: str, bars: list[MarketBar]) -> None:
        key = (symbol, interval)
        existing = {bar.ts_ms: bar for bar in self._data[key]}
        for bar in bars:
            existing[bar.ts_ms] = bar
        self._data[key] = sorted(existing.values(), key=lambda bar: bar.ts_ms)

    def get_bars(
        self,
        symbol: str,
        interval: str,
        start_ts_ms: int | None = None,
        end_ts_ms: int | None = None,
    ) -> list[MarketBar]:
        bars = self._data.get((symbol, interval), [])
        filtered = [
            bar
            for bar in bars
            if (start_ts_ms is None or bar.ts_ms >= start_ts_ms)
            and (end_ts_ms is None or bar.ts_ms <= end_ts_ms)
        ]
        return filtered


class TortoiseMarketDataRepository:
    """Postgres-backed market data repository via Tortoise ORM."""

    def upsert_bars(self, symbol: str, interval: str, bars: list[MarketBar]) -> None:
        async def _upsert() -> None:
            for bar in bars:
                await MarketBarRecord.update_or_create(
                    defaults={
                        "open": bar.open,
                        "high": bar.high,
                        "low": bar.low,
                        "close": bar.close,
                        "volume": bar.volume,
                    },
                    symbol=symbol,
                    interval=interval,
                    ts_ms=bar.ts_ms,
                )

        run_sync(_upsert())

    def get_bars(
        self,
        symbol: str,
        interval: str,
        start_ts_ms: int | None = None,
        end_ts_ms: int | None = None,
    ) -> list[MarketBar]:
        async def _fetch() -> list[MarketBar]:
            query = MarketBarRecord.filter(symbol=symbol, interval=interval)
            if start_ts_ms is not None:
                query = query.filter(ts_ms__gte=start_ts_ms)
            if end_ts_ms is not None:
                query = query.filter(ts_ms__lte=end_ts_ms)
            rows = await query.order_by("ts_ms")
            return [
                MarketBar(
                    ts_ms=row.ts_ms,
                    open=row.open,
                    high=row.high,
                    low=row.low,
                    close=row.close,
                    volume=row.volume,
                )
                for row in rows
            ]

        return run_sync(_fetch())
