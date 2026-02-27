from __future__ import annotations

from datetime import datetime

from airflow import DAG
from airflow.operators.empty import EmptyOperator


with DAG(
    dag_id="quantum_healthcheck",
    start_date=datetime(2025, 1, 1),
    schedule="@hourly",
    catchup=False,
    tags=["quantum", "bootstrap"],
):
    start = EmptyOperator(task_id="start")
    finish = EmptyOperator(task_id="finish")
    start >> finish
