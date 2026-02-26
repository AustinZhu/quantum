"""Temporal ML activities."""

from __future__ import annotations

from algorand.interfaces.temporal.runtime import activity


@activity.defn
async def extract_training_set(payload: dict) -> dict:
    return {"dataset_id": "train_set_v1", "rows": 1000, **payload}


@activity.defn
async def train_model(payload: dict) -> dict:
    return {"model_blob_id": "model_blob_v1", **payload}


@activity.defn
async def validate_model(payload: dict) -> dict:
    return {"validation_score": 0.62, **payload}


@activity.defn
async def register_model(payload: dict) -> dict:
    return {"model_version_id": "model_v1", **payload}
