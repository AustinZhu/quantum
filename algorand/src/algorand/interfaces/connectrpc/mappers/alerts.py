"""Mapping helpers for alerts API payloads."""

from __future__ import annotations

from algorand.modules.alerts.domain import AlertEvent


def event_to_payload(event: AlertEvent) -> dict:
    return {
        "event_id": event.event_id,
        "run_id": event.run_id,
        "channel": event.channel,
        "target": event.target,
        "status": event.status,
        "created_ts_ms": event.created_ts_ms,
    }
