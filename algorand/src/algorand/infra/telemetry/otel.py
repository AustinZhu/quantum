"""OpenTelemetry initialization scaffold."""

from __future__ import annotations

import logging

logger = logging.getLogger(__name__)


def init_otel(endpoint: str) -> None:
    logger.info("OTEL export configured for %s", endpoint)
