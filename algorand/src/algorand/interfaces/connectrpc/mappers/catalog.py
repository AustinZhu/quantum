"""Mapping helpers for catalog API payloads."""

from __future__ import annotations


def passthrough(items: list[dict[str, str]]) -> list[dict[str, str]]:
    return items
