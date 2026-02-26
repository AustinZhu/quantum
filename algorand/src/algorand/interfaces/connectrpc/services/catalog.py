"""Catalog ConnectRPC service scaffold."""

from __future__ import annotations

from algorand.interfaces.connectrpc.mappers.catalog import passthrough


class CatalogRpcService:
    def __init__(self, container) -> None:
        self._container = container

    def list_strategies(self, _: dict) -> dict:
        return {"strategies": passthrough(self._container.catalog_service.list_strategies())}

    def list_indicators(self, _: dict) -> dict:
        return {"indicators": passthrough(self._container.catalog_service.list_indicators())}

    def list_signals(self, _: dict) -> dict:
        return {"signals": passthrough(self._container.catalog_service.list_signals())}
