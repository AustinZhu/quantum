"""Seed deterministic sample data into the local market data repository."""

from __future__ import annotations

from algorand.app.container import AppContainer
from algorand.modules.market_data.schemas import IngestMarketDataRequest


def main() -> None:
    container = AppContainer.build()
    request = IngestMarketDataRequest(symbol="AAPL", interval="1D")
    bars = container.market_data_service.generate_sample_data(request=request, size=180)
    container.market_data_service.ingest(symbol=request.symbol, interval=request.interval, bars=bars)
    print(f"Seeded {len(bars)} bars for {request.symbol} {request.interval}")


if __name__ == "__main__":
    main()
