"""Signal ports."""

from __future__ import annotations

from typing import Protocol

from algorand.modules.signals.domain import SignalPoint


class SignalRepository(Protocol):
    def put(self, key: str, points: list[SignalPoint]) -> None:
        """Store signal output."""

    def get(self, key: str) -> list[SignalPoint]:
        """Read signal output."""
