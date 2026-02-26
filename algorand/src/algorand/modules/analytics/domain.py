"""Analytics domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class Metric:
    name: str
    value: float
    unit: str
