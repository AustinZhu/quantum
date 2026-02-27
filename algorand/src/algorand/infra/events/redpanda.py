"""Redpanda (Kafka API) event publisher."""

from __future__ import annotations

import json
from dataclasses import dataclass


@dataclass
class RedpandaPublisher:
    brokers: str
    client_id: str = "algorand"

    def __post_init__(self) -> None:
        self._producer = None
        self._enabled = bool(self.brokers.strip())
        if not self._enabled:
            return

        try:
            from kafka import KafkaProducer

            self._producer = KafkaProducer(
                bootstrap_servers=[addr.strip() for addr in self.brokers.split(",") if addr.strip()],
                client_id=self.client_id,
                key_serializer=lambda value: value.encode("utf-8") if value is not None else None,
                value_serializer=lambda value: json.dumps(value).encode("utf-8"),
                acks=0,
            )
        except Exception:
            self._producer = None

    def publish(self, topic: str, payload: dict[str, object], key: str | None = None) -> None:
        if self._producer is None:
            return
        try:
            self._producer.send(topic, key=key, value=payload)
        except Exception:
            return

    def close(self) -> None:
        if self._producer is None:
            return
        try:
            self._producer.flush(timeout=1)
            self._producer.close(timeout=1)
        except Exception:
            return
