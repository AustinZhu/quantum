"""Temporal worker bootstrap."""

from __future__ import annotations

import asyncio
import logging

from algorand.app.container import AppContainer

logger = logging.getLogger(__name__)


async def run_worker(container: AppContainer) -> None:
    """Run Temporal workers for backtest, analytics, ML, and alerts."""

    try:
        from temporalio.client import Client
        from temporalio.worker import Worker
    except ImportError as exc:  # pragma: no cover - guarded by dependency install
        raise RuntimeError("temporalio is required to run workers") from exc

    from algorand.interfaces.temporal.activities import (
        alerting,
        analytics,
        backtests,
        ml,
    )
    from algorand.interfaces.temporal.workflows.alert_dispatch import AlertDispatchWorkflow
    from algorand.interfaces.temporal.workflows.artifact_refresh import ArtifactRefreshWorkflow
    from algorand.interfaces.temporal.workflows.backtest_run import BacktestRunWorkflow
    from algorand.interfaces.temporal.workflows.model_training import ModelTrainingWorkflow

    logger.info("Connecting to Temporal at %s", container.settings.temporal_target)
    client = await Client.connect(
        container.settings.temporal_target,
        namespace=container.settings.temporal_namespace,
    )

    workers = [
        Worker(
            client,
            task_queue=container.settings.backtest_task_queue,
            workflows=[BacktestRunWorkflow],
            activities=[
                backtests.fetch_data,
                backtests.build_features,
                backtests.compute_indicators_signals,
                backtests.execute_backtest,
                analytics.compute_analytics,
                analytics.persist_artifacts,
                alerting.emit_alerts,
            ],
        ),
        Worker(
            client,
            task_queue=container.settings.ml_task_queue,
            workflows=[ModelTrainingWorkflow],
            activities=[ml.extract_training_set, ml.train_model, ml.validate_model, ml.register_model],
        ),
        Worker(
            client,
            task_queue=container.settings.alert_task_queue,
            workflows=[AlertDispatchWorkflow],
            activities=[alerting.render_template, alerting.send_channel, alerting.persist_delivery],
        ),
        Worker(
            client,
            task_queue=container.settings.analytics_task_queue,
            workflows=[ArtifactRefreshWorkflow],
            activities=[analytics.refresh_cached_artifacts],
        ),
    ]

    logger.info("Starting %s Temporal workers", len(workers))
    await asyncio.gather(*(worker.run() for worker in workers))
