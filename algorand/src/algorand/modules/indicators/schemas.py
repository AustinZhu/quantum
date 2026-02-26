"""Indicator schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class IndicatorRequest:
    indicator_id: str
    params: dict[str, float]
