"""Minimal MLflow tracking client over HTTP APIs."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any

import httpx


@dataclass
class MLflowClient:
    tracking_uri: str
    experiment_name: str
    timeout_seconds: int = 10

    def health(self) -> bool:
        try:
            response = httpx.get(f"{self.tracking_uri.rstrip('/')}/health", timeout=self.timeout_seconds)
            return response.is_success
        except Exception:
            return False

    def create_experiment(self) -> str | None:
        payload = {"name": self.experiment_name}
        data = self._request("POST", "/api/2.0/mlflow/experiments/create", json=payload)
        if not data:
            return None
        value = data.get("experiment_id")
        return str(value) if value is not None else None

    def get_experiment_id(self) -> str | None:
        try:
            response = httpx.get(
                f"{self.tracking_uri.rstrip('/')}/api/2.0/mlflow/experiments/get-by-name",
                params={"experiment_name": self.experiment_name},
                timeout=self.timeout_seconds,
            )
            response.raise_for_status()
            payload = response.json()
            if not isinstance(payload, dict):
                return None
            experiment = payload.get("experiment")
            if not isinstance(experiment, dict):
                return None
            value = experiment.get("experiment_id")
            return str(value) if value is not None else None
        except Exception:
            return None

    def get_or_create_experiment_id(self) -> str | None:
        return self.get_experiment_id() or self.create_experiment()

    def create_run(self, experiment_id: str, tags: dict[str, str] | None = None) -> str | None:
        payload: dict[str, Any] = {"experiment_id": experiment_id}
        if tags:
            payload["tags"] = [{"key": key, "value": value} for key, value in tags.items()]
        data = self._request("POST", "/api/2.0/mlflow/runs/create", json=payload)
        if not data:
            return None
        run = data.get("run")
        if not isinstance(run, dict):
            return None
        info = run.get("info")
        if not isinstance(info, dict):
            return None
        run_id = info.get("run_id")
        return str(run_id) if run_id is not None else None

    def log_metric(self, run_id: str, key: str, value: float, timestamp_ms: int, step: int = 0) -> bool:
        payload = {
            "run_id": run_id,
            "key": key,
            "value": value,
            "timestamp": timestamp_ms,
            "step": step,
        }
        return self._request("POST", "/api/2.0/mlflow/runs/log-metric", json=payload) is not None

    def _request(
        self,
        method: str,
        path: str,
        *,
        json: dict[str, Any] | None = None,
    ) -> dict[str, Any] | None:
        url = f"{self.tracking_uri.rstrip('/')}{path}"
        try:
            response = httpx.request(method, url, json=json, timeout=self.timeout_seconds)
            if response.status_code == 409:
                # Experiment already exists.
                return {}
            response.raise_for_status()
            if not response.content:
                return {}
            payload = response.json()
            if isinstance(payload, dict):
                return payload
            return {}
        except Exception:
            return None
