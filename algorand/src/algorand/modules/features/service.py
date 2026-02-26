"""Feature engineering service."""

from __future__ import annotations

from algorand.modules.features.domain import FeatureRow
from algorand.modules.features.schemas import FEATURE_SCHEMA_VERSION
from algorand.modules.market_data.domain import MarketBar


class FeatureService:
    """Builds deterministic feature sets from canonical market bars."""

    schema_version = FEATURE_SCHEMA_VERSION

    def build(self, bars: list[MarketBar]) -> list[FeatureRow]:
        rows: list[FeatureRow] = []
        prev_close: float | None = None
        for bar in bars:
            if prev_close is None or prev_close == 0.0:
                daily_return = 0.0
            else:
                daily_return = (bar.close / prev_close) - 1
            rows.append(
                FeatureRow(
                    ts_ms=bar.ts_ms,
                    values={
                        "close": bar.close,
                        "volume": bar.volume,
                        "daily_return": daily_return,
                    },
                )
            )
            prev_close = bar.close
        return rows
