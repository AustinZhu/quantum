"""Redis PubSub + Streams event publisher."""

from __future__ import annotations

from dataclasses import dataclass

import redis


@dataclass
class RedisEventPublisher:
    client: redis.Redis

    def publish(self, channel: str, payload: str) -> None:
        try:
            self.client.publish(channel, payload)
        except Exception:
            # Keep command-paths non-fatal when Redis is unavailable in local tests.
            return

    def add_stream_event(self, stream: str, values: dict[str, str]) -> None:
        try:
            self.client.xadd(stream, values)
        except Exception:
            return
