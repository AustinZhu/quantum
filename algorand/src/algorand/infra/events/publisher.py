"""Redis PubSub + Streams event publisher."""

from __future__ import annotations

from collections.abc import Mapping
from dataclasses import dataclass

import redis

from algorand.infra.events.redpanda import RedpandaPublisher


@dataclass
class RedisEventPublisher:
    client: redis.Redis
    redpanda: RedpandaPublisher | None = None
    topic_prefix: str = "algorand"

    def publish(self, channel: str, payload: str) -> None:
        try:
            self.client.publish(channel, payload)
        except Exception:
            # Keep command-paths non-fatal when Redis is unavailable in local tests.
            pass

        if self.redpanda is not None:
            topic = f"{self.topic_prefix}.{channel.replace(':', '.').replace('/', '.')}"
            self.redpanda.publish(topic=topic, key=channel, payload={"channel": channel, "payload": payload})

    def add_stream_event(self, stream: str, values: dict[str, str]) -> None:
        try:
            self.client.xadd(stream, values)
        except Exception:
            return

        if self.redpanda is not None:
            topic = f"{self.topic_prefix}.{stream.replace(':', '.').replace('/', '.')}"
            self.redpanda.publish(
                topic=topic,
                key=stream,
                payload={"stream": stream, "values": _stringify_values(values)},
            )

    def close(self) -> None:
        if self.redpanda is not None:
            self.redpanda.close()


def _stringify_values(values: Mapping[str, str]) -> dict[str, str]:
    return {str(key): str(value) for key, value in values.items()}
