"""Alert dispatch workflow."""

from __future__ import annotations

from datetime import timedelta

from algorand.interfaces.temporal.activities import alerting
from algorand.interfaces.temporal.runtime import workflow


@workflow.defn
class AlertDispatchWorkflow:
    @workflow.run
    async def run(self, payload: dict) -> dict:
        rendered = await workflow.execute_activity(
            alerting.render_template,
            args=[payload],
            start_to_close_timeout=timedelta(seconds=30),
        )
        sent = await workflow.execute_activity(
            alerting.send_channel,
            args=[{**payload, **rendered}],
            start_to_close_timeout=timedelta(seconds=30),
        )
        persisted = await workflow.execute_activity(
            alerting.persist_delivery,
            args=[sent],
            start_to_close_timeout=timedelta(seconds=30),
        )
        return {"status": persisted["status"]}
