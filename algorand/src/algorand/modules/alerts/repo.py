"""Alert repositories."""

from __future__ import annotations

from collections import defaultdict
from typing import Protocol

from algorand.infra.db.models import AlertEventRecord
from algorand.infra.db.runtime import run_sync
from algorand.modules.alerts.domain import AlertEvent


class AlertEventRepository(Protocol):
    def add(self, event: AlertEvent) -> None:
        """Persist one alert event."""

    def list(self, run_id: str) -> list[AlertEvent]:
        """List alert events by run id."""


class InMemoryAlertEventRepository:
    def __init__(self) -> None:
        self._events: dict[str, list[AlertEvent]] = defaultdict(list)

    def add(self, event: AlertEvent) -> None:
        self._events[event.run_id].append(event)

    def list(self, run_id: str) -> list[AlertEvent]:
        return list(self._events.get(run_id, []))


class TortoiseAlertEventRepository:
    """Alert event persistence backed by Tortoise ORM."""

    def add(self, event: AlertEvent) -> None:
        async def _add() -> None:
            await AlertEventRecord.update_or_create(
                defaults={
                    "run_id": event.run_id,
                    "channel": event.channel,
                    "target": event.target,
                    "status": event.status,
                    "created_ts_ms": event.created_ts_ms,
                },
                event_id=event.event_id,
            )

        run_sync(_add())

    def list(self, run_id: str) -> list[AlertEvent]:
        async def _list() -> list[AlertEvent]:
            rows = await AlertEventRecord.filter(run_id=run_id).order_by("-created_ts_ms")
            return [
                AlertEvent(
                    event_id=row.event_id,
                    run_id=row.run_id,
                    channel=row.channel,
                    target=row.target,
                    status=row.status,
                    created_ts_ms=row.created_ts_ms,
                )
                for row in rows
            ]

        return run_sync(_list())
