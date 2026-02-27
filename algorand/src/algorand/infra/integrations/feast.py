"""Minimal Feast feature-server client."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any

import httpx


@dataclass
class FeastClient:
    feature_server_url: str
    timeout_seconds: int = 10

    def health(self) -> bool:
        try:
            response = httpx.get(f"{self.feature_server_url.rstrip('/')}/health", timeout=self.timeout_seconds)
            return response.is_success
        except Exception:
            return False

    def get_online_features(self, features: list[str], entities: dict[str, list[Any]]) -> dict[str, Any] | None:
        payload = {
            "features": features,
            "entities": entities,
        }
        try:
            response = httpx.post(
                f"{self.feature_server_url.rstrip('/')}/get-online-features",
                json=payload,
                timeout=self.timeout_seconds,
            )
            response.raise_for_status()
            body = response.json()
            if isinstance(body, dict):
                return body
            return None
        except Exception:
            return None
