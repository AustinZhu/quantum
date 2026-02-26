"""Machine learning repositories."""

from __future__ import annotations

from collections import defaultdict

from algorand.infra.db.models import ModelVersionRecord
from algorand.infra.db.runtime import run_sync
from algorand.modules.ml.domain import ModelVersion


class InMemoryModelRepository:
    def __init__(self) -> None:
        self._models: dict[str, list[ModelVersion]] = defaultdict(list)

    def put(self, model_version: ModelVersion) -> None:
        self._models[model_version.model_name].append(model_version)

    def list_versions(self, model_name: str) -> list[ModelVersion]:
        return list(self._models.get(model_name, []))


class TortoiseModelRepository:
    """Persist model version metadata in Postgres via Tortoise."""

    def put(self, model_version: ModelVersion) -> None:
        async def _put() -> None:
            await ModelVersionRecord.update_or_create(
                defaults={
                    "model_name": model_version.model_name,
                    "status": model_version.status,
                    "trained_ts_ms": model_version.trained_ts_ms,
                    "metrics": model_version.metrics,
                },
                model_version_id=model_version.model_version_id,
            )

        run_sync(_put())

    def list_versions(self, model_name: str) -> list[ModelVersion]:
        async def _list() -> list[ModelVersion]:
            rows = await ModelVersionRecord.filter(model_name=model_name).order_by("-trained_ts_ms")
            return [
                ModelVersion(
                    model_version_id=row.model_version_id,
                    model_name=row.model_name,
                    status=row.status,
                    trained_ts_ms=row.trained_ts_ms,
                    metrics=dict(row.metrics or {}),
                )
                for row in rows
            ]

        return run_sync(_list())
