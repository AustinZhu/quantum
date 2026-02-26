"""ML ConnectRPC service scaffold."""

from __future__ import annotations

from algorand.interfaces.connectrpc.mappers.ml import model_versions_to_payload
from algorand.modules.ml.schemas import TrainingRequest


class MLRpcService:
    def __init__(self, container) -> None:
        self._container = container

    def run_training_job(self, payload: dict) -> dict:
        request = TrainingRequest(
            model_name=payload.get("model_name", "lightgbm_classifier"),
            hyperparameters=payload.get("hyperparameters", {}),
        )
        model_version_id = self._container.ml_service.run_training_job(request)
        self._container.event_publisher.publish("algorand.ml", f"{model_version_id}:COMPLETED")
        self._container.event_publisher.add_stream_event(
            "algorand:ml_stream", {"model_version_id": model_version_id, "status": "COMPLETED"}
        )
        return {"job_id": model_version_id, "status": "COMPLETED"}

    def get_model_versions(self, payload: dict) -> dict:
        model_name = payload.get("model_name", "lightgbm_classifier")
        versions = self._container.ml_service.get_model_versions(model_name)
        return {"versions": model_versions_to_payload(versions)}
