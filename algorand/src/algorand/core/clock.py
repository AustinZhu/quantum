"""Clock abstractions for deterministic testing."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import UTC, datetime
from typing import Protocol


class Clock(Protocol):
    """Clock interface."""

    def now(self) -> datetime:
        """Return the current UTC time."""


@dataclass(frozen=True)
class SystemClock:
    """Production clock implementation."""

    def now(self) -> datetime:
        return datetime.now(tz=UTC)


@dataclass(frozen=True)
class FrozenClock:
    """Deterministic clock implementation for tests."""

    fixed: datetime

    def now(self) -> datetime:
        return self.fixed
