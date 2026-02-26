from __future__ import annotations

from algorand.modules.features.schemas import FEATURE_SCHEMA_VERSION
from algorand.modules.features.service import FeatureService
from algorand.modules.market_data.schemas import FetchMarketDataRequest


def test_feature_schema_version_and_rows(container) -> None:
    bars = container.market_data_service.fetch(
        FetchMarketDataRequest(symbol="AAPL", interval="1D", start_ts_ms=None, end_ts_ms=None)
    )
    service = FeatureService()
    rows = service.build(bars)

    assert FEATURE_SCHEMA_VERSION == "v1"
    assert len(rows) == len(bars)
    assert "daily_return" in rows[-1].values
