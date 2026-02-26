"""ConnectRPC service scaffolds."""

from algorand.interfaces.connectrpc.services.alerts import AlertRpcService
from algorand.interfaces.connectrpc.services.analytics import AnalyticsRpcService
from algorand.interfaces.connectrpc.services.backtests import BacktestRpcService
from algorand.interfaces.connectrpc.services.catalog import CatalogRpcService
from algorand.interfaces.connectrpc.services.ml import MLRpcService

__all__ = [
    "AlertRpcService",
    "AnalyticsRpcService",
    "BacktestRpcService",
    "CatalogRpcService",
    "MLRpcService",
]
