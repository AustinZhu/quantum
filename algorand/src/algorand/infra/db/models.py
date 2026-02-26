"""Tortoise ORM models for algorand schema."""

from __future__ import annotations

from tortoise import fields
from tortoise.models import Model


class MarketBarRecord(Model):
    id = fields.IntField(pk=True)
    symbol = fields.CharField(max_length=32)
    interval = fields.CharField(max_length=16)
    ts_ms = fields.BigIntField()
    open = fields.FloatField()
    high = fields.FloatField()
    low = fields.FloatField()
    close = fields.FloatField()
    volume = fields.FloatField()

    class Meta:
        table = "market_bars"
        schema = "algorand"
        unique_together = (("symbol", "interval", "ts_ms"),)


class BacktestRunRecord(Model):
    run_id = fields.CharField(pk=True, max_length=64)
    symbol = fields.CharField(max_length=32)
    interval = fields.CharField(max_length=16)
    strategy_id = fields.CharField(max_length=64)
    status = fields.CharField(max_length=32)
    equity_curve = fields.JSONField(default=list)
    trades = fields.JSONField(default=list)
    metadata = fields.JSONField(default=dict)

    class Meta:
        table = "backtest_runs"
        schema = "algorand"


class ModelVersionRecord(Model):
    model_version_id = fields.CharField(pk=True, max_length=64)
    model_name = fields.CharField(max_length=128)
    status = fields.CharField(max_length=32)
    trained_ts_ms = fields.BigIntField()
    metrics = fields.JSONField(default=dict)

    class Meta:
        table = "model_versions"
        schema = "algorand"


class AlertEventRecord(Model):
    event_id = fields.CharField(pk=True, max_length=64)
    run_id = fields.CharField(max_length=64)
    channel = fields.CharField(max_length=32)
    target = fields.TextField()
    status = fields.CharField(max_length=32)
    created_ts_ms = fields.BigIntField()

    class Meta:
        table = "alert_events"
        schema = "algorand"
