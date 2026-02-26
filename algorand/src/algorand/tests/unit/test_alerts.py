from __future__ import annotations

import httpx
import pytest

from algorand.modules.alerts.repo import InMemoryAlertEventRepository
from algorand.modules.alerts.schemas import AlertRequest
from algorand.modules.alerts.service import AlertService


class _Resp:
    def __init__(self, ok: bool) -> None:
        self._ok = ok

    def raise_for_status(self) -> None:
        if not self._ok:
            request = httpx.Request("POST", "https://example.com/hook")
            response = httpx.Response(status_code=500, request=request)
            raise httpx.HTTPStatusError("bad", request=request, response=response)


def test_alert_webhook_retries(monkeypatch: pytest.MonkeyPatch) -> None:
    calls = {"count": 0}

    def flaky_post(*args, **kwargs):
        calls["count"] += 1
        if calls["count"] < 3:
            raise httpx.ConnectError("retry")
        return _Resp(ok=True)

    monkeypatch.setattr(httpx, "post", flaky_post)
    service = AlertService(repository=InMemoryAlertEventRepository(), timeout_seconds=1)

    event = service.test_alert(
        AlertRequest(channel="webhook", target="https://example.com/hook", message="hello", run_id="r1")
    )

    assert calls["count"] == 3
    assert event.status == "SENT"


def test_alert_template_rendering() -> None:
    service = AlertService(repository=InMemoryAlertEventRepository())
    msg = service.render_message("Run {run_id} is {status}", {"run_id": "abc", "status": "done"})
    assert msg == "Run abc is done"
