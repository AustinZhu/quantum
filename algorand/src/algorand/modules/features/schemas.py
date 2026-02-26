"""Feature schemas."""

from __future__ import annotations

from dataclasses import dataclass

FEATURE_SCHEMA_VERSION = "v1"


@dataclass(frozen=True)
class BuildFeatureRequest:
    symbol: str
    interval: str
