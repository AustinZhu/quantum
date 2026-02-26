from __future__ import annotations

import pytest

from algorand.app.container import AppContainer
from algorand.modules.market_data.schemas import IngestMarketDataRequest


@pytest.fixture
def container() -> AppContainer:
    c = AppContainer.build()
    request = IngestMarketDataRequest(symbol="AAPL", interval="1D")
    bars = c.market_data_service.generate_sample_data(request=request, size=120)
    c.market_data_service.ingest(symbol="AAPL", interval="1D", bars=bars)
    return c
