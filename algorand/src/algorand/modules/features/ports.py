"""Feature module ports."""

from __future__ import annotations

from typing import Protocol

from algorand.modules.features.domain import FeatureRow


class FeatureRepository(Protocol):
    def put_rows(self, key: str, rows: list[FeatureRow]) -> None:
        """Persist generated features."""

    def get_rows(self, key: str) -> list[FeatureRow]:
        """Read generated features."""
