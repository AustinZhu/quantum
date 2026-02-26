from __future__ import annotations

from pathlib import Path


def test_proto_files_exist() -> None:
    monorepo_root = Path(__file__).resolve().parents[5]
    root = monorepo_root / "api" / "proto" / "service" / "v1"
    expected = {
        "common.proto",
        "backtest.proto",
        "analytics.proto",
        "catalog.proto",
        "alerts.proto",
        "ml.proto",
    }
    present = {path.name for path in root.glob("*.proto")}
    assert expected.issubset(present)
