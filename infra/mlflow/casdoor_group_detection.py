"""Custom group detection for mlflow-oidc-auth with Casdoor.

This plugin normalizes the OIDC access token payload into a list value
accepted by mlflow-oidc-auth group authorization.
"""

from __future__ import annotations

import base64
import json
import os
from typing import Any


def _decode_jwt_payload(access_token: str) -> dict[str, Any]:
    parts = access_token.split(".")
    if len(parts) != 3:
        return {}

    payload = parts[1]
    padding = "=" * (-len(payload) % 4)
    try:
        raw = base64.urlsafe_b64decode(payload + padding)
        decoded = json.loads(raw.decode("utf-8"))
        if isinstance(decoded, dict):
            return decoded
    except Exception:
        return {}
    return {}


def get_user_groups(access_token: str) -> list[str]:
    """Return one deterministic group token derived from email/sub.

    The mlflow-oidc-auth plugin requires a list of group strings.
    Returning exactly one value avoids duplicate group-link inserts.
    """

    payload = _decode_jwt_payload(access_token)

    email = payload.get("email")
    if isinstance(email, str) and email:
        return [email.lower()]

    sub = payload.get("sub")
    if isinstance(sub, str) and sub:
        return [sub]

    fallback = os.getenv("MLFLOW_OIDC_FALLBACK_GROUP", "admin@example.com")
    return [fallback.lower()]
