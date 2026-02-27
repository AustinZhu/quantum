"""Tortoise runtime bootstrap and sync wrappers."""

from __future__ import annotations

import asyncio
from concurrent.futures import ThreadPoolExecutor

from tortoise import Tortoise

from algorand.core.config import Settings

_initialized = False


async def _init_db_async(settings: Settings) -> None:
    await Tortoise.init(
        db_url=settings.db_url,
        modules={"models": ["algorand.infra.db.models"]},
    )
    if settings.db_generate_schemas:
        await Tortoise.generate_schemas(safe=True)


async def _close_db_async() -> None:
    await Tortoise.close_connections()


def run_sync(coro):
    """Run coroutine in sync contexts, even if caller already has an event loop."""

    try:
        asyncio.get_running_loop()
    except RuntimeError:
        return asyncio.run(coro)

    with ThreadPoolExecutor(max_workers=1) as executor:
        future = executor.submit(lambda: asyncio.run(coro))
        return future.result()


def init_database(settings: Settings) -> None:
    global _initialized
    if _initialized:
        return
    run_sync(_init_db_async(settings))
    _initialized = True


def close_database() -> None:
    global _initialized
    if not _initialized:
        return
    run_sync(_close_db_async())
    _initialized = False
