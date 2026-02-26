"""Command-line entrypoint."""

from __future__ import annotations

import asyncio

import typer

from algorand.app.container import AppContainer
from algorand.app.server import serve
from algorand.app.worker import run_worker
from algorand.core.logging import configure_logging
from algorand.modules.market_data.schemas import IngestMarketDataRequest

app = typer.Typer(no_args_is_help=True, add_completion=False)


@app.command("serve-api")
def serve_api() -> None:
    """Run API server."""

    container = AppContainer.build()
    configure_logging(container.settings.log_level)
    asyncio.run(serve(container))


@app.command("run-worker")
def run_worker_cmd() -> None:
    """Run Temporal workers."""

    container = AppContainer.build()
    configure_logging(container.settings.log_level)
    asyncio.run(run_worker(container))


@app.command("seed-data")
def seed_data(symbol: str = "AAPL", interval: str = "1D") -> None:
    """Seed sample market data into local repository."""

    container = AppContainer.build()
    configure_logging(container.settings.log_level)
    request = IngestMarketDataRequest(symbol=symbol, interval=interval)
    bars = container.market_data_service.generate_sample_data(request)
    container.market_data_service.ingest(symbol, interval, bars)
    typer.echo(f"Seeded {len(bars)} bars for {symbol} {interval}")


def main() -> None:
    app()
