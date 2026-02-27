"""ML ConnectRPC service scaffold."""

from __future__ import annotations

from algorand.interfaces.connectrpc.mappers.ml import (
    cluster_result_to_payload,
    model_versions_to_payload,
    similar_result_to_payload,
)
from algorand.modules.ml.schemas import (
    ClusterStocksRequest,
    FindSimilarStocksRequest,
    SimilarityWeights,
    TimeWindowRequest,
    TrainingRequest,
)


class MLRpcService:
    def __init__(self, container) -> None:
        self._container = container

    def run_training_job(self, payload: dict) -> dict:
        request = TrainingRequest(
            model_name=payload.get("model_name", "lightgbm_classifier"),
            hyperparameters=payload.get("hyperparameters", {}),
        )
        model_version_id = self._container.ml_service.run_training_job(request)
        self._container.event_publisher.publish("algorand.ml", f"{model_version_id}:COMPLETED")
        self._container.event_publisher.add_stream_event(
            "algorand:ml_stream", {"model_version_id": model_version_id, "status": "COMPLETED"}
        )
        return {"job_id": model_version_id, "status": "COMPLETED"}

    def get_model_versions(self, payload: dict) -> dict:
        model_name = payload.get("model_name", "lightgbm_classifier")
        versions = self._container.ml_service.get_model_versions(model_name)
        return {"versions": model_versions_to_payload(versions)}

    def cluster_stocks(self, payload: dict) -> dict:
        try:
            request = ClusterStocksRequest(
                symbols=_list_value(payload, "symbols"),
                interval=_string_value(payload, "interval", default="1D"),
                time_window=_time_window_value(payload),
                min_clusters=_int_value(payload, "min_clusters", default=2),
                max_clusters=_int_value(payload, "max_clusters", default=0),
                weights=_weights_value(payload),
            )
            result = self._container.ml_service.cluster_stocks(request)
            return cluster_result_to_payload(result)
        except ValueError as exc:
            return {"error": "invalid_argument", "message": str(exc)}

    def find_similar_stocks(self, payload: dict) -> dict:
        try:
            request = FindSimilarStocksRequest(
                target_symbol=_string_value(payload, "target_symbol"),
                symbols=_list_value(payload, "symbols"),
                interval=_string_value(payload, "interval", default="1D"),
                time_window=_time_window_value(payload),
                top_k=_int_value(payload, "top_k", default=10),
                min_clusters=_int_value(payload, "min_clusters", default=2),
                max_clusters=_int_value(payload, "max_clusters", default=0),
                weights=_weights_value(payload),
            )
            result = self._container.ml_service.find_similar_stocks(request)
            return similar_result_to_payload(result)
        except ValueError as exc:
            return {"error": "invalid_argument", "message": str(exc)}


def _snake_to_camel(key: str) -> str:
    parts = key.split("_")
    return parts[0] + "".join(part.capitalize() for part in parts[1:])


def _field(payload: dict, key: str):
    camel = _snake_to_camel(key)
    if key in payload:
        return payload[key]
    return payload.get(camel)


def _string_value(payload: dict, key: str, default: str | None = None) -> str:
    value = _field(payload, key)
    if value is None:
        if default is None:
            raise ValueError(f"{key} is required")
        return default
    return str(value)


def _int_value(payload: dict, key: str, default: int) -> int:
    value = _field(payload, key)
    if value is None:
        return default
    return int(value)


def _list_value(payload: dict, key: str) -> list[str]:
    value = _field(payload, key)
    if not isinstance(value, list):
        raise ValueError(f"{key} must be a list")
    return [str(item) for item in value]


def _weights_value(payload: dict) -> SimilarityWeights:
    value = _field(payload, "weights") or {}
    if not isinstance(value, dict):
        raise ValueError("weights must be an object")
    return SimilarityWeights(
        price_action_weight=float(value.get("price_action_weight", value.get("priceActionWeight", 0.50))),
        volatility_weight=float(value.get("volatility_weight", value.get("volatilityWeight", 0.20))),
        performance_weight=float(value.get("performance_weight", value.get("performanceWeight", 0.20))),
        sector_weight=float(value.get("sector_weight", value.get("sectorWeight", 0.10))),
    )


def _time_window_value(payload: dict) -> TimeWindowRequest:
    value = _field(payload, "time_window")
    if not isinstance(value, dict):
        raise ValueError("time_window is required")

    window_bars = value.get("window_bars", value.get("windowBars"))
    date_range = value.get("date_range", value.get("dateRange"))
    if window_bars is not None:
        return TimeWindowRequest(window_bars=int(window_bars))
    if isinstance(date_range, dict):
        return TimeWindowRequest(
            start_date=str(date_range.get("start_date", date_range.get("startDate", ""))).strip() or None,
            end_date=str(date_range.get("end_date", date_range.get("endDate", ""))).strip() or None,
        )
    return TimeWindowRequest()
