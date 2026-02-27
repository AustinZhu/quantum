"""Simple DuckDB web UI for local development."""

from __future__ import annotations

from datetime import date, datetime, time
from decimal import Decimal
from pathlib import Path
from threading import Lock
from typing import Any

import duckdb
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from pydantic import BaseModel


class QueryRequest(BaseModel):
    sql: str


def build_duckdb_ui_app(duckdb_path: Path) -> FastAPI:
    connection = duckdb.connect(str(duckdb_path))
    lock = Lock()
    app = FastAPI(title="DuckDB UI", version="1.0.0")

    @app.get("/healthz")
    async def healthz() -> dict[str, str]:
        return {"status": "ok", "service": "duckdb-ui"}

    @app.get("/", response_class=HTMLResponse)
    async def index() -> str:
        return _index_html()

    @app.post("/query")
    async def query(request: QueryRequest) -> dict[str, Any]:
        sql = request.sql.strip()
        if not sql:
            raise HTTPException(status_code=400, detail="SQL query is required")
        if ";" in sql.rstrip(";"):
            raise HTTPException(status_code=400, detail="Only one SQL statement is allowed")

        try:
            with lock:
                cursor = connection.execute(sql)
                description = cursor.description
                if description is None:
                    return {"columns": [], "rows": [], "row_count": 0}

                columns = [str(field[0]) for field in description]
                rows = cursor.fetchmany(500)
        except Exception as exc:
            raise HTTPException(status_code=400, detail=str(exc)) from exc

        return {
            "columns": columns,
            "rows": [[_to_json(value) for value in row] for row in rows],
            "row_count": len(rows),
            "truncated": len(rows) == 500,
        }

    return app


async def serve_duckdb_ui(duckdb_path: Path, host: str, port: int, log_level: str) -> None:
    app = build_duckdb_ui_app(duckdb_path)
    config = uvicorn.Config(app=app, host=host, port=port, log_level=log_level.lower())
    server = uvicorn.Server(config)
    await server.serve()


def _to_json(value: Any) -> Any:
    if value is None or isinstance(value, (bool, int, float, str)):
        return value
    if isinstance(value, (datetime, date, time)):
        return value.isoformat()
    if isinstance(value, Decimal):
        return float(value)
    return str(value)


def _index_html() -> str:
    return """<!doctype html>
<html lang='en'>
<head>
  <meta charset='utf-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1' />
  <title>DuckDB UI</title>
  <style>
    :root { color-scheme: light dark; }
    body { font-family: ui-monospace, Menlo, Consolas, monospace; margin: 24px; }
    textarea { width: 100%; min-height: 160px; margin-bottom: 12px; }
    button { padding: 8px 14px; cursor: pointer; }
    table { border-collapse: collapse; width: 100%; margin-top: 16px; }
    th, td { border: 1px solid #999; padding: 6px 8px; text-align: left; }
    .err { color: #d11; margin-top: 12px; }
  </style>
</head>
<body>
  <h1>DuckDB UI</h1>
  <p>Querying <code>ALG_DUCKDB_PATH</code> from the running container.</p>
  <textarea id='sql'>SELECT table_name FROM information_schema.tables ORDER BY table_name LIMIT 50</textarea>
  <div>
    <button id='run'>Run Query</button>
  </div>
  <div id='result'></div>
  <script>
    const sqlInput = document.getElementById('sql');
    const runBtn = document.getElementById('run');
    const result = document.getElementById('result');

    const renderTable = (columns, rows) => {
      const thead = `<thead><tr>${columns.map((c) => `<th>${c}</th>`).join('')}</tr></thead>`;
      const tbody = `<tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell ?? ''}</td>`).join('')}</tr>`).join('')}</tbody>`;
      return `<table>${thead}${tbody}</table>`;
    };

    runBtn.addEventListener('click', async () => {
      result.innerHTML = '';
      try {
        const response = await fetch('/query', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ sql: sqlInput.value })
        });
        const payload = await response.json();
        if (!response.ok) {
          throw new Error(payload.detail || 'Query failed');
        }
        const table = renderTable(payload.columns, payload.rows);
        const note = payload.truncated ? '<p>Showing first 500 rows.</p>' : '';
        result.innerHTML = `${note}${table}`;
      } catch (error) {
        result.innerHTML = `<div class='err'>${error.message}</div>`;
      }
    });
  </script>
</body>
</html>"""
