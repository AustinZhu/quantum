"""Alerting domain models."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class AlertEvent:
    event_id: str
    run_id: str
    channel: str
    target: str
    status: str
    created_ts_ms: int
