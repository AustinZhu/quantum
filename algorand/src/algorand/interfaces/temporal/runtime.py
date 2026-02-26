"""Temporal decorator compatibility helpers.

Allows importing workflow/activity modules in environments where temporalio is not
installed yet by providing no-op decorator shims.
"""

from __future__ import annotations

from typing import Any

activity: Any
workflow: Any

try:  # pragma: no cover - exercised when temporalio is installed
    from temporalio import activity, workflow
except ImportError:  # pragma: no cover - exercised in lightweight environments
    class _Noop:
        @staticmethod
        def defn(fn=None, **_kwargs):
            if fn is None:
                return lambda x: x
            return fn

        @staticmethod
        def run(fn):
            return fn

        @staticmethod
        def execute_activity(*_args, **_kwargs):
            return None

    activity = _Noop()
    workflow = _Noop()
