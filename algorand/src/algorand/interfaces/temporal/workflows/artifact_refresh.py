"""Artifact refresh workflow."""

from __future__ import annotations

from datetime import timedelta

from algorand.interfaces.temporal.activities import analytics
from algorand.interfaces.temporal.runtime import workflow


@workflow.defn
class ArtifactRefreshWorkflow:
    @workflow.run
    async def run(self, payload: dict) -> dict:
        result = await workflow.execute_activity(
            analytics.refresh_cached_artifacts,
            args=[payload],
            start_to_close_timeout=timedelta(minutes=2),
        )
        return result
