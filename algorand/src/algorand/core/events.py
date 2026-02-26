"""Simple in-process event bus contracts and implementation."""

from __future__ import annotations

from collections import defaultdict
from collections.abc import Callable
from dataclasses import dataclass
from typing import Any


@dataclass(frozen=True)
class DomainEvent:
    """Immutable event payload."""

    topic: str
    payload: dict[str, Any]


EventHandler = Callable[[DomainEvent], None]


class InMemoryEventBus:
    """Synchronous event bus suitable for a modular monolith."""

    def __init__(self) -> None:
        self._handlers: dict[str, list[EventHandler]] = defaultdict(list)

    def subscribe(self, topic: str, handler: EventHandler) -> None:
        self._handlers[topic].append(handler)

    def publish(self, event: DomainEvent) -> None:
        for handler in self._handlers.get(event.topic, []):
            handler(event)
