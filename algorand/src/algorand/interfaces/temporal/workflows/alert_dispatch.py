"""Alert dispatch workflow."""

from __future__ import annotations

from datetime import timedelta

from algorand.interfaces.temporal.runtime import workflow


@workflow.defn
class AlertDispatchWorkflow:
    @workflow.run
    async def run(self, payload: dict) -> dict:
        rendered = await workflow.execute_activity(
            "render_template",
            args=[payload],
            start_to_close_timeout=timedelta(seconds=30),
        )
        sent = await workflow.execute_activity(
            "send_channel",
            args=[{**payload, **rendered}],
            start_to_close_timeout=timedelta(seconds=30),
        )
        persisted = await workflow.execute_activity(
            "persist_delivery",
            args=[sent],
            start_to_close_timeout=timedelta(seconds=30),
        )
        return {"status": persisted["status"]}
