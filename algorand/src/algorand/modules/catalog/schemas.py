"""Catalog schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class CatalogResponse:
    items: list[dict[str, str]]
