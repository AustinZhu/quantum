"""Signal domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class SignalPoint:
    ts_ms: int
    side: int  # -1 short, 0 neutral, +1 long
    score: float
