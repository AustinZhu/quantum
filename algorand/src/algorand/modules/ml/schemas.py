"""Machine learning schemas."""

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class TrainingRequest:
    model_name: str
    hyperparameters: dict[str, str]
