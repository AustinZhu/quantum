"""Alerting schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class AlertRequest:
    channel: str
    target: str
    message: str
    run_id: str = ""
