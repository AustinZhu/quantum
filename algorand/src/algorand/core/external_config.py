"""Optional external configuration/secrets from Consul and Vault."""

from __future__ import annotations

import logging
from typing import Any

import httpx

logger = logging.getLogger(__name__)


def apply_external_settings(settings):
    updates: dict[str, Any] = {}

    if settings.config_from_consul:
        try:
            updates.update(_fetch_consul_config(settings))
        except Exception as exc:
            logger.warning("Consul config fetch failed: %s", exc)

    if settings.secrets_from_vault:
        try:
            secret_data = _fetch_vault_secret(settings)
            if settings.vault_api_key_field in secret_data:
                updates["api_key"] = secret_data[settings.vault_api_key_field]
        except Exception as exc:
            logger.warning("Vault secret fetch failed: %s", exc)

    if not updates:
        return settings

    allowed = set(settings.model_fields.keys())
    filtered_updates = {key: value for key, value in updates.items() if key in allowed}
    if not filtered_updates:
        return settings

    merged = {**settings.model_dump(), **filtered_updates}
    return settings.__class__.model_validate(merged)


def _fetch_consul_config(settings) -> dict[str, Any]:
    key_path = settings.consul_kv_path.lstrip("/")
    url = f"{settings.consul_http_addr.rstrip('/')}/v1/kv/{key_path}?raw"
    response = httpx.get(url, timeout=5.0)
    if response.status_code == 404:
        return {}
    response.raise_for_status()
    payload = response.json()
    if not isinstance(payload, dict):
        raise RuntimeError("consul config payload must be a JSON object")
    return payload


def _fetch_vault_secret(settings) -> dict[str, Any]:
    secret_path = settings.vault_secret_path.lstrip("/")
    url = f"{settings.vault_addr.rstrip('/')}/v1/{settings.vault_kv_mount}/data/{secret_path}"
    response = httpx.get(
        url,
        headers={"X-Vault-Token": settings.vault_token},
        timeout=5.0,
    )
    if response.status_code == 404:
        return {}
    response.raise_for_status()
    payload = response.json()
    secret_data = payload.get("data", {}).get("data", {})
    if not isinstance(secret_data, dict):
        return {}
    return secret_data
