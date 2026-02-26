"""Catalog repository placeholder."""

from __future__ import annotations


class StaticCatalogRepository:
    def __init__(self, items: list[dict[str, str]] | None = None) -> None:
        self._items = items or []

    def list_items(self) -> list[dict[str, str]]:
        return list(self._items)
