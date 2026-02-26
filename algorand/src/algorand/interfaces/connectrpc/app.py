"""ConnectRPC application scaffolding.

In v1 scaffold this returns a plain registry. When generated stubs are available,
wire these handlers into the official connect-python server adapters.
"""

from __future__ import annotations

from algorand.interfaces.connectrpc.services import (
    AlertRpcService,
    AnalyticsRpcService,
    BacktestRpcService,
    CatalogRpcService,
    MLRpcService,
)


def build_registry(container) -> dict[str, object]:
    return {
        "BacktestService": BacktestRpcService(container),
        "AnalyticsService": AnalyticsRpcService(container),
        "CatalogService": CatalogRpcService(container),
        "AlertService": AlertRpcService(container),
        "MLService": MLRpcService(container),
    }
