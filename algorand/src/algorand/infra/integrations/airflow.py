"""Minimal Airflow API client used by algorand workflows."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any

import httpx


@dataclass
class AirflowClient:
    base_url: str
    username: str
    password: str
    timeout_seconds: int = 10

    def health(self) -> dict[str, Any] | None:
        return self._request("GET", "/health")

    def trigger_dag(self, dag_id: str, conf: dict[str, Any] | None = None) -> dict[str, Any] | None:
        payload: dict[str, Any] = {}
        if conf:
            payload["conf"] = conf
        return self._request("POST", f"/dags/{dag_id}/dagRuns", json=payload)

    def _request(
        self,
        method: str,
        path: str,
        *,
        json: dict[str, Any] | None = None,
    ) -> dict[str, Any] | None:
        url = f"{self.base_url.rstrip('/')}{path}"
        try:
            response = httpx.request(
                method,
                url,
                json=json,
                auth=httpx.BasicAuth(self.username, self.password),
                timeout=self.timeout_seconds,
            )
            response.raise_for_status()
            if not response.content:
                return {}
            payload = response.json()
            if isinstance(payload, dict):
                return payload
            return {}
        except Exception:
            return None
