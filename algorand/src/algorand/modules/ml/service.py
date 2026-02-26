"""Machine learning service scaffolding."""

from __future__ import annotations

import time
from uuid import uuid4

from algorand.modules.ml.domain import ModelVersion
from algorand.modules.ml.ports import ModelRepository
from algorand.modules.ml.schemas import TrainingRequest


class MLService:
    """Offline train / online inference entrypoints."""

    def __init__(self, repository: ModelRepository) -> None:
        self._repository = repository

    def run_training_job(self, request: TrainingRequest) -> str:
        model_version = ModelVersion(
            model_version_id=uuid4().hex,
            model_name=request.model_name,
            status="READY",
            trained_ts_ms=int(time.time() * 1000),
            metrics={"cv_score": "0.61", "train_rows": "1200"},
        )
        self._repository.put(model_version)
        return model_version.model_version_id

    def get_model_versions(self, model_name: str) -> list[ModelVersion]:
        return self._repository.list_versions(model_name)
