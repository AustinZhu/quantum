"""Feature repositories."""

from __future__ import annotations


class InMemoryFeatureRepository:
    def __init__(self) -> None:
        self._rows: dict[str, list] = {}

    def put_rows(self, key: str, rows: list) -> None:
        self._rows[key] = rows

    def get_rows(self, key: str) -> list:
        return self._rows.get(key, [])
