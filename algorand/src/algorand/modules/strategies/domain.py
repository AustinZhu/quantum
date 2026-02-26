"""Strategy domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class PositionIntent:
    ts_ms: int
    target_position: int
