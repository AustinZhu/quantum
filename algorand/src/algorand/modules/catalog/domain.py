"""Catalog domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class CatalogItem:
    item_id: str
    version: str
    display_name: str
    description: str
