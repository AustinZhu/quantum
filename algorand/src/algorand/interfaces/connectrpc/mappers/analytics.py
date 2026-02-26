"""Mapping helpers for analytics API payloads."""

from __future__ import annotations

from algorand.modules.analytics.domain import Metric


def metrics_to_payload(metrics: list[Metric]) -> list[dict]:
    return [{"name": metric.name, "value": metric.value, "unit": metric.unit} for metric in metrics]
