"""Tortoise ORM migration settings module."""

from __future__ import annotations

from importlib.util import find_spec

from algorand.core.config import get_settings

settings = get_settings()
model_modules = ["algorand.infra.db.models"]

# Keep Aerich models optional so the project can move with newer tortoise-orm versions.
if find_spec("aerich.models") is not None:
    model_modules.append("aerich.models")

TORTOISE_ORM = {
    "connections": {"default": settings.db_url},
    "apps": {
        "models": {
            "models": model_modules,
            "default_connection": "default",
        }
    },
}
