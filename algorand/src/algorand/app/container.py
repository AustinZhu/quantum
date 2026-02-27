"""Dependency injection container for module services."""

from __future__ import annotations

import logging
from dataclasses import dataclass

from algorand.core.config import Settings, get_settings
from algorand.core.events import InMemoryEventBus
from algorand.infra.cache.redis_client import build_redis
from algorand.infra.db import init_database
from algorand.infra.events.publisher import RedisEventPublisher
from algorand.infra.events.redpanda import RedpandaPublisher
from algorand.infra.integrations import AirflowClient, FeastClient, MLflowClient
from algorand.infra.telemetry.otel import init_otel
from algorand.modules.alerts.repo import InMemoryAlertEventRepository, TortoiseAlertEventRepository
from algorand.modules.alerts.service import AlertService
from algorand.modules.analytics.repo import ArtifactRepository
from algorand.modules.analytics.service import AnalyticsService
from algorand.modules.backtests.repo import InMemoryBacktestRunRepository, TortoiseBacktestRunRepository
from algorand.modules.backtests.service import BacktestService
from algorand.modules.catalog.service import CatalogService
from algorand.modules.features.service import FeatureService
from algorand.modules.indicators.service import IndicatorService
from algorand.modules.market_data.repo import InMemoryMarketDataRepository, TortoiseMarketDataRepository
from algorand.modules.market_data.service import MarketDataService
from algorand.modules.ml.provider import YFinanceSimilarityMarketDataProvider
from algorand.modules.ml.repo import InMemoryModelRepository, TortoiseModelRepository
from algorand.modules.ml.service import MLService
from algorand.modules.signals.service import SignalService
from algorand.modules.strategies.service import StrategyService

logger = logging.getLogger(__name__)


@dataclass
class AppContainer:
    """App-level dependency graph."""

    settings: Settings
    event_bus: InMemoryEventBus
    market_data_service: MarketDataService
    feature_service: FeatureService
    indicator_service: IndicatorService
    signal_service: SignalService
    strategy_service: StrategyService
    backtest_service: BacktestService
    analytics_service: AnalyticsService
    ml_service: MLService
    alert_service: AlertService
    catalog_service: CatalogService
    event_publisher: RedisEventPublisher
    airflow_client: AirflowClient
    feast_client: FeastClient
    mlflow_client: MLflowClient

    @classmethod
    def build(cls) -> AppContainer:
        settings = get_settings()
        init_otel(settings.otel_endpoint)
        persistent_storage = True
        try:
            init_database(settings)
        except Exception as exc:
            if settings.allow_in_memory_fallback:
                persistent_storage = False
                logger.warning(
                    "Falling back to in-memory repositories because ALG_ALLOW_IN_MEMORY_FALLBACK=true: %s",
                    exc,
                )
            else:
                raise RuntimeError(
                    "Database initialization failed. Fix DB connectivity/migrations or set "
                    "ALG_ALLOW_IN_MEMORY_FALLBACK=true for explicit local fallback."
                ) from exc

        redis_client = build_redis(settings.redis_url)
        redpanda_publisher = RedpandaPublisher(settings.redpanda_brokers)
        event_publisher = RedisEventPublisher(
            redis_client,
            redpanda=redpanda_publisher,
            topic_prefix=settings.redpanda_topic_prefix,
        )
        event_bus = InMemoryEventBus()
        airflow_client = AirflowClient(
            base_url=settings.airflow_api_base_url,
            username=settings.airflow_username,
            password=settings.airflow_password,
        )
        feast_client = FeastClient(feature_server_url=settings.feast_feature_server_url)
        mlflow_client = MLflowClient(
            tracking_uri=settings.mlflow_tracking_uri,
            experiment_name=settings.mlflow_experiment,
        )

        market_data_repo = TortoiseMarketDataRepository() if persistent_storage else InMemoryMarketDataRepository()
        backtest_repo = TortoiseBacktestRunRepository() if persistent_storage else InMemoryBacktestRunRepository()
        artifact_repo = ArtifactRepository(settings.artifact_root)
        model_repo = TortoiseModelRepository() if persistent_storage else InMemoryModelRepository()
        alert_repo = TortoiseAlertEventRepository() if persistent_storage else InMemoryAlertEventRepository()
        similarity_data_provider = YFinanceSimilarityMarketDataProvider()

        market_data_service = MarketDataService(repository=market_data_repo)
        feature_service = FeatureService()
        indicator_service = IndicatorService()
        signal_service = SignalService()
        strategy_service = StrategyService()
        backtest_service = BacktestService(repository=backtest_repo)
        analytics_service = AnalyticsService(repository=artifact_repo)
        ml_service = MLService(
            repository=model_repo,
            market_data_provider=similarity_data_provider,
            artifact_store=artifact_repo,
            mlflow_client=mlflow_client,
        )
        alert_service = AlertService(repository=alert_repo)
        catalog_service = CatalogService(
            strategy_service=strategy_service,
            indicator_service=indicator_service,
            signal_service=signal_service,
        )

        return cls(
            settings=settings,
            event_bus=event_bus,
            market_data_service=market_data_service,
            feature_service=feature_service,
            indicator_service=indicator_service,
            signal_service=signal_service,
            strategy_service=strategy_service,
            backtest_service=backtest_service,
            analytics_service=analytics_service,
            ml_service=ml_service,
            alert_service=alert_service,
            catalog_service=catalog_service,
            event_publisher=event_publisher,
            airflow_client=airflow_client,
            feast_client=feast_client,
            mlflow_client=mlflow_client,
        )

    def connect_service_names(self) -> list[str]:
        return [
            "BacktestService",
            "AnalyticsService",
            "CatalogService",
            "AlertService",
            "MLService",
        ]
