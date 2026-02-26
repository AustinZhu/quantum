"""Redis client factory."""

from __future__ import annotations

import redis


def build_redis(url: str) -> redis.Redis:
    return redis.Redis.from_url(url, decode_responses=True)
