"""Model training workflow."""

from __future__ import annotations

from datetime import timedelta

from algorand.interfaces.temporal.activities import ml
from algorand.interfaces.temporal.runtime import workflow


@workflow.defn
class ModelTrainingWorkflow:
    @workflow.run
    async def run(self, payload: dict) -> dict:
        dataset = await workflow.execute_activity(
            ml.extract_training_set,
            args=[payload],
            start_to_close_timeout=timedelta(minutes=2),
        )
        model = await workflow.execute_activity(
            ml.train_model,
            args=[dataset],
            start_to_close_timeout=timedelta(minutes=5),
        )
        validated = await workflow.execute_activity(
            ml.validate_model,
            args=[model],
            start_to_close_timeout=timedelta(minutes=2),
        )
        registered = await workflow.execute_activity(
            ml.register_model,
            args=[validated],
            start_to_close_timeout=timedelta(minutes=2),
        )
        return {"status": "COMPLETED", **registered}
