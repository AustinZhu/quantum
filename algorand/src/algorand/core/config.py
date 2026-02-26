"""Application settings."""

from __future__ import annotations

from functools import lru_cache
from pathlib import Path

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

from algorand.core.external_config import apply_external_settings


class Settings(BaseSettings):
    """Environment-driven app configuration."""

    model_config = SettingsConfigDict(env_prefix="ALG_", extra="ignore", env_file=".env")

    server_host: str = Field(default="0.0.0.0")
    server_port: int = Field(default=8080)
    log_level: str = Field(default="INFO")
    api_key: str = Field(default="dev-key")

    temporal_target: str = Field(default="localhost:7233")
    temporal_namespace: str = Field(default="default")
    backtest_task_queue: str = Field(default="quant-backtest")
    ml_task_queue: str = Field(default="quant-ml")
    alert_task_queue: str = Field(default="quant-alerts")
    analytics_task_queue: str = Field(default="quant-analytics")

    data_lake_root: Path = Field(default=Path("data/lake"))
    duckdb_path: Path = Field(default=Path("data/duckdb/quant.db"))
    artifact_root: Path = Field(default=Path("data/artifacts"))
    db_url: str = Field(default="postgres://quantum:quantum@localhost:5432/quantum")
    db_schema: str = Field(default="algorand")
    redis_url: str = Field(default="redis://localhost:6379/0")
    otel_endpoint: str = Field(default="http://localhost:4318")
    config_from_consul: bool = Field(default=False)
    consul_http_addr: str = Field(default="http://localhost:8500")
    consul_kv_path: str = Field(default="quantum/algorand/config")
    secrets_from_vault: bool = Field(default=False)
    vault_addr: str = Field(default="http://localhost:8200")
    vault_token: str = Field(default="root")
    vault_kv_mount: str = Field(default="secret")
    vault_secret_path: str = Field(default="quantum/algorand")
    vault_api_key_field: str = Field(default="api_key")

    default_timezone: str = Field(default="UTC")
    webhook_timeout_seconds: int = Field(default=10)

    def ensure_directories(self) -> None:
        self.data_lake_root.mkdir(parents=True, exist_ok=True)
        self.duckdb_path.parent.mkdir(parents=True, exist_ok=True)
        self.artifact_root.mkdir(parents=True, exist_ok=True)


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    settings = Settings()
    settings = apply_external_settings(settings)
    settings.ensure_directories()
    return settings
