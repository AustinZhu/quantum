"""Catalog ports."""

from __future__ import annotations

from typing import Protocol


class CatalogSource(Protocol):
    def list_items(self) -> list[dict[str, str]]:
        """List catalog entities."""
