"""Temporal analytics activities."""

from __future__ import annotations

from algorand.interfaces.temporal.runtime import activity


@activity.defn
async def compute_analytics(payload: dict) -> dict:
    return {"run_id": payload["run_id"], "status": "ANALYZED"}


@activity.defn
async def persist_artifacts(payload: dict) -> dict:
    return {"run_id": payload["run_id"], "status": "ARTIFACTS_PERSISTED"}


@activity.defn
async def refresh_cached_artifacts(payload: dict) -> dict:
    return {"run_id": payload.get("run_id", ""), "status": "REFRESHED"}
