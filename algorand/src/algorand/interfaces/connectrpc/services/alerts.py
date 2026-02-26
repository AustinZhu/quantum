"""Alert ConnectRPC service scaffold."""

from __future__ import annotations

from algorand.interfaces.connectrpc.mappers.alerts import event_to_payload
from algorand.modules.alerts.schemas import AlertRequest


class AlertRpcService:
    def __init__(self, container) -> None:
        self._container = container

    def test_alert(self, payload: dict) -> dict:
        request = AlertRequest(
            channel=payload.get("channel", "webhook"),
            target=payload["target"],
            message=payload.get("message", "test alert"),
            run_id=payload.get("run_id", ""),
        )
        event = self._container.alert_service.test_alert(request)
        self._container.event_publisher.publish("algorand.alerts", f"{event.event_id}:{event.status}")
        self._container.event_publisher.add_stream_event(
            "algorand:alert_stream",
            {"event_id": event.event_id, "run_id": event.run_id, "status": event.status},
        )
        return event_to_payload(event)

    def list_alert_events(self, payload: dict) -> dict:
        run_id = payload.get("run_id", "")
        events = self._container.alert_service.list_alert_events(run_id)
        return {"events": [event_to_payload(event) for event in events]}
