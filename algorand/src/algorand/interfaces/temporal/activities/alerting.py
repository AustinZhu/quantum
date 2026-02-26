"""Temporal alerting activities."""

from __future__ import annotations

from algorand.interfaces.temporal.runtime import activity


@activity.defn
async def emit_alerts(payload: dict) -> dict:
    return {"run_id": payload["run_id"], "status": "ALERTS_EMITTED"}


@activity.defn
async def render_template(payload: dict) -> dict:
    template = payload.get("template", "Run {run_id} is {status}")
    return {"message": template.format(**payload)}


@activity.defn
async def send_channel(payload: dict) -> dict:
    return {"status": "SENT", "target": payload.get("target", "")}


@activity.defn
async def persist_delivery(payload: dict) -> dict:
    return {"status": payload.get("status", "SENT")}
