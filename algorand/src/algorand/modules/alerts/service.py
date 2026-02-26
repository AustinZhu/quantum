"""Alert dispatch and retry logic."""

from __future__ import annotations

import time
from uuid import uuid4

import httpx

from algorand.modules.alerts.domain import AlertEvent
from algorand.modules.alerts.repo import AlertEventRepository
from algorand.modules.alerts.schemas import AlertRequest


class AlertService:
    """Sends webhook or push-style notifications and records delivery events."""

    def __init__(self, repository: AlertEventRepository, timeout_seconds: int = 10) -> None:
        self._repository = repository
        self._timeout_seconds = timeout_seconds

    def render_message(self, template: str, context: dict[str, str]) -> str:
        return template.format(**context)

    def send_webhook(self, target: str, message: str, retries: int = 2) -> None:
        last_error: Exception | None = None
        for _ in range(retries + 1):
            try:
                response = httpx.post(
                    target,
                    json={"message": message},
                    timeout=self._timeout_seconds,
                )
                response.raise_for_status()
                return
            except Exception as exc:  # pragma: no cover - exercised through monkeypatching
                last_error = exc
        if last_error is not None:
            raise last_error

    def test_alert(self, request: AlertRequest) -> AlertEvent:
        status = "SENT"
        if request.channel == "webhook":
            self.send_webhook(target=request.target, message=request.message)
        event = AlertEvent(
            event_id=uuid4().hex,
            run_id=request.run_id,
            channel=request.channel,
            target=request.target,
            status=status,
            created_ts_ms=int(time.time() * 1000),
        )
        self._repository.add(event)
        return event

    def list_alert_events(self, run_id: str) -> list[AlertEvent]:
        return self._repository.list(run_id)
