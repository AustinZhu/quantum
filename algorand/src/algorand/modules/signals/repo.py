"""Signal repositories."""

from __future__ import annotations

from algorand.modules.signals.domain import SignalPoint


class InMemorySignalRepository:
    def __init__(self) -> None:
        self._store: dict[str, list[SignalPoint]] = {}

    def put(self, key: str, points: list[SignalPoint]) -> None:
        self._store[key] = points

    def get(self, key: str) -> list[SignalPoint]:
        return self._store.get(key, [])
