"""ConnectRPC-style HTTP server bootstrap."""

from __future__ import annotations

import logging

import uvicorn

from algorand.app.container import AppContainer
from algorand.interfaces.connectrpc.http import build_http_app

logger = logging.getLogger(__name__)


async def serve(container: AppContainer) -> None:
    """Start the API server runtime."""

    app = build_http_app(container)
    logger.info(
        "Starting ConnectRPC HTTP server on %s:%s",
        container.settings.server_host,
        container.settings.server_port,
    )
    config = uvicorn.Config(
        app=app,
        host=container.settings.server_host,
        port=container.settings.server_port,
        log_level=container.settings.log_level.lower(),
    )
    server = uvicorn.Server(config)
    await server.serve()
