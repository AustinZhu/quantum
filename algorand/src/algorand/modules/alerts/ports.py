"""Alerting ports."""

from __future__ import annotations

from typing import Protocol


class AlertChannel(Protocol):
    def send(self, target: str, message: str) -> None:
        """Dispatch alert to external channel."""
