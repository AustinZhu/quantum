"""Signal schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class SignalRequest:
    signal_id: str
    params: dict[str, float]
