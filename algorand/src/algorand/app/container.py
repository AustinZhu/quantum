"""Dependency injection container for module services."""

from __future__ import annotations

import logging
from dataclasses import dataclass

from algorand.core.config import Settings, get_settings
from algorand.core.events import InMemoryEventBus
from algorand.infra.cache.redis_client import build_redis
from algorand.infra.db import init_database
from algorand.infra.events.publisher import RedisEventPublisher
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

    @classmethod
    def build(cls) -> AppContainer:
        settings = get_settings()
        init_otel(settings.otel_endpoint)
        persistent_storage = True
        try:
            init_database(settings)
        except Exception as exc:
            persistent_storage = False
            logger.warning("Falling back to in-memory repositories: %s", exc)

        redis_client = build_redis(settings.redis_url)
        event_publisher = RedisEventPublisher(redis_client)
        event_bus = InMemoryEventBus()

        market_data_repo = TortoiseMarketDataRepository() if persistent_storage else InMemoryMarketDataRepository()
        backtest_repo = TortoiseBacktestRunRepository() if persistent_storage else InMemoryBacktestRunRepository()
        artifact_repo = ArtifactRepository(settings.artifact_root)
        model_repo = TortoiseModelRepository() if persistent_storage else InMemoryModelRepository()
        alert_repo = TortoiseAlertEventRepository() if persistent_storage else InMemoryAlertEventRepository()

        market_data_service = MarketDataService(repository=market_data_repo)
        feature_service = FeatureService()
        indicator_service = IndicatorService()
        signal_service = SignalService()
        strategy_service = StrategyService()
        backtest_service = BacktestService(repository=backtest_repo)
        analytics_service = AnalyticsService(repository=artifact_repo)
        ml_service = MLService(repository=model_repo)
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
        )

    def connect_service_names(self) -> list[str]:
        return [
            "BacktestService",
            "AnalyticsService",
            "CatalogService",
            "AlertService",
            "MLService",
        ]
