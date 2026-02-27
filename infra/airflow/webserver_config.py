"""Airflow webserver authentication config for Casdoor OIDC."""

from __future__ import annotations

import logging
import os
from typing import Any

from airflow.providers.fab.auth_manager.security_manager.override import FabAirflowSecurityManagerOverride
from flask_appbuilder.security.manager import AUTH_OAUTH

LOG = logging.getLogger(__name__)


def _truthy(value: str | None, default: bool = False) -> bool:
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


AUTH_TYPE = AUTH_OAUTH
AUTH_USER_REGISTRATION = True
AUTH_USER_REGISTRATION_ROLE = os.getenv("AIRFLOW_OIDC_DEFAULT_ROLE", "Admin")
AUTH_ROLES_SYNC_AT_LOGIN = True
ENABLE_PROXY_FIX = _truthy(os.getenv("AIRFLOW_OIDC_ENABLE_PROXY_FIX"), default=True)

OAUTH_PROVIDERS = [
    {
        "name": "casdoor",
        "icon": "fa-circle-o",
        "token_key": "access_token",
        "remote_app": {
            "client_id": os.getenv("AIRFLOW_OIDC_CLIENT_ID", ""),
            "client_secret": os.getenv("AIRFLOW_OIDC_CLIENT_SECRET", ""),
            "api_base_url": os.getenv("AIRFLOW_OIDC_API_BASE_URL", "http://casdoor.quantum.orb.local/"),
            "access_token_url": os.getenv(
                "AIRFLOW_OIDC_TOKEN_URL", "http://casdoor.quantum.orb.local/api/login/oauth/access_token"
            ),
            "authorize_url": os.getenv(
                "AIRFLOW_OIDC_AUTHORIZE_URL", "http://casdoor.quantum.orb.local/login/oauth/authorize"
            ),
            "server_metadata_url": os.getenv(
                "AIRFLOW_OIDC_DISCOVERY_URL", "http://casdoor.quantum.orb.local/.well-known/openid-configuration"
            ),
            "client_kwargs": {
                "scope": os.getenv("AIRFLOW_OIDC_SCOPE", "openid profile email"),
            },
        },
    }
]


class CustomSecurityManager(FabAirflowSecurityManagerOverride):
    """Resolve Casdoor user info into FAB's expected OAuth payload fields."""

    def get_oauth_user_info(self, provider: str, resp: dict[str, Any]) -> dict[str, Any]:
        if provider != "casdoor":
            return super().get_oauth_user_info(provider, resp)

        endpoint = os.getenv("AIRFLOW_OIDC_USERINFO_ENDPOINT", "api/userinfo")
        data: dict[str, Any] = {}
        try:
            me = self.oauth_remotes[provider].get(endpoint)
            me.raise_for_status()
            payload = me.json()
            if isinstance(payload, dict):
                data = payload
        except Exception as exc:
            LOG.warning("Failed to fetch OIDC user info from %s: %s", endpoint, exc)

        if isinstance(resp.get("userinfo"), dict):
            data = {**resp["userinfo"], **data}
        nested = data.get("data")
        if isinstance(nested, dict):
            data = nested

        email = data.get("email") or data.get("preferred_username") or data.get("sub") or ""
        username = (
            data.get("preferred_username")
            or data.get("name")
            or email
            or data.get("sub")
            or data.get("id")
            or ""
        )
        first_name = data.get("given_name") or data.get("first_name") or data.get("displayName") or ""
        last_name = data.get("family_name") or data.get("last_name") or ""
        role_keys_raw = data.get("groups") or data.get("roles") or []
        if isinstance(role_keys_raw, str):
            role_keys = [role_keys_raw]
        elif isinstance(role_keys_raw, list):
            role_keys = [str(role) for role in role_keys_raw]
        else:
            role_keys = []

        if not username:
            raise ValueError("Casdoor user info did not contain a usable username")

        return {
            "username": username,
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "role_keys": role_keys,
        }


SECURITY_MANAGER_CLASS = CustomSecurityManager
