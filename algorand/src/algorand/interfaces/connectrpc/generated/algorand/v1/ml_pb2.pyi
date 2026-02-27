from common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RunTrainingJobRequest(_message.Message):
    __slots__ = ("model_name", "training_range", "hyperparameters")
    class HyperparametersEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
    TRAINING_RANGE_FIELD_NUMBER: _ClassVar[int]
    HYPERPARAMETERS_FIELD_NUMBER: _ClassVar[int]
    model_name: str
    training_range: _common_pb2.TimeRange
    hyperparameters: _containers.ScalarMap[str, str]
    def __init__(self, model_name: _Optional[str] = ..., training_range: _Optional[_Union[_common_pb2.TimeRange, _Mapping]] = ..., hyperparameters: _Optional[_Mapping[str, str]] = ...) -> None: ...

class RunTrainingJobResponse(_message.Message):
    __slots__ = ("job_id", "status")
    JOB_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    job_id: str
    status: str
    def __init__(self, job_id: _Optional[str] = ..., status: _Optional[str] = ...) -> None: ...

class GetModelVersionsRequest(_message.Message):
    __slots__ = ("model_name",)
    MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
    model_name: str
    def __init__(self, model_name: _Optional[str] = ...) -> None: ...

class ModelVersion(_message.Message):
    __slots__ = ("model_version_id", "model_name", "status", "trained_ts_ms", "metrics")
    class MetricsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    MODEL_VERSION_ID_FIELD_NUMBER: _ClassVar[int]
    MODEL_NAME_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TRAINED_TS_MS_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    model_version_id: _common_pb2.ModelVersionId
    model_name: str
    status: str
    trained_ts_ms: int
    metrics: _containers.ScalarMap[str, str]
    def __init__(self, model_version_id: _Optional[_Union[_common_pb2.ModelVersionId, _Mapping]] = ..., model_name: _Optional[str] = ..., status: _Optional[str] = ..., trained_ts_ms: _Optional[int] = ..., metrics: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetModelVersionsResponse(_message.Message):
    __slots__ = ("versions",)
    VERSIONS_FIELD_NUMBER: _ClassVar[int]
    versions: _containers.RepeatedCompositeFieldContainer[ModelVersion]
    def __init__(self, versions: _Optional[_Iterable[_Union[ModelVersion, _Mapping]]] = ...) -> None: ...

class DateRange(_message.Message):
    __slots__ = ("start_date", "end_date")
    START_DATE_FIELD_NUMBER: _ClassVar[int]
    END_DATE_FIELD_NUMBER: _ClassVar[int]
    start_date: str
    end_date: str
    def __init__(self, start_date: _Optional[str] = ..., end_date: _Optional[str] = ...) -> None: ...

class TimeWindow(_message.Message):
    __slots__ = ("window_bars", "date_range")
    WINDOW_BARS_FIELD_NUMBER: _ClassVar[int]
    DATE_RANGE_FIELD_NUMBER: _ClassVar[int]
    window_bars: int
    date_range: DateRange
    def __init__(self, window_bars: _Optional[int] = ..., date_range: _Optional[_Union[DateRange, _Mapping]] = ...) -> None: ...

class SimilarityWeights(_message.Message):
    __slots__ = ("price_action_weight", "volatility_weight", "performance_weight", "sector_weight")
    PRICE_ACTION_WEIGHT_FIELD_NUMBER: _ClassVar[int]
    VOLATILITY_WEIGHT_FIELD_NUMBER: _ClassVar[int]
    PERFORMANCE_WEIGHT_FIELD_NUMBER: _ClassVar[int]
    SECTOR_WEIGHT_FIELD_NUMBER: _ClassVar[int]
    price_action_weight: float
    volatility_weight: float
    performance_weight: float
    sector_weight: float
    def __init__(self, price_action_weight: _Optional[float] = ..., volatility_weight: _Optional[float] = ..., performance_weight: _Optional[float] = ..., sector_weight: _Optional[float] = ...) -> None: ...

class ClusterMember(_message.Message):
    __slots__ = ("symbol", "sector", "cluster_id", "period_return", "volatility")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    SECTOR_FIELD_NUMBER: _ClassVar[int]
    CLUSTER_ID_FIELD_NUMBER: _ClassVar[int]
    PERIOD_RETURN_FIELD_NUMBER: _ClassVar[int]
    VOLATILITY_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    sector: str
    cluster_id: int
    period_return: float
    volatility: float
    def __init__(self, symbol: _Optional[str] = ..., sector: _Optional[str] = ..., cluster_id: _Optional[int] = ..., period_return: _Optional[float] = ..., volatility: _Optional[float] = ...) -> None: ...

class SimilarStock(_message.Message):
    __slots__ = ("symbol", "sector", "cluster_id", "score", "price_action_similarity", "volatility_similarity", "performance_similarity", "sector_similarity", "period_return", "volatility")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    SECTOR_FIELD_NUMBER: _ClassVar[int]
    CLUSTER_ID_FIELD_NUMBER: _ClassVar[int]
    SCORE_FIELD_NUMBER: _ClassVar[int]
    PRICE_ACTION_SIMILARITY_FIELD_NUMBER: _ClassVar[int]
    VOLATILITY_SIMILARITY_FIELD_NUMBER: _ClassVar[int]
    PERFORMANCE_SIMILARITY_FIELD_NUMBER: _ClassVar[int]
    SECTOR_SIMILARITY_FIELD_NUMBER: _ClassVar[int]
    PERIOD_RETURN_FIELD_NUMBER: _ClassVar[int]
    VOLATILITY_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    sector: str
    cluster_id: int
    score: float
    price_action_similarity: float
    volatility_similarity: float
    performance_similarity: float
    sector_similarity: float
    period_return: float
    volatility: float
    def __init__(self, symbol: _Optional[str] = ..., sector: _Optional[str] = ..., cluster_id: _Optional[int] = ..., score: _Optional[float] = ..., price_action_similarity: _Optional[float] = ..., volatility_similarity: _Optional[float] = ..., performance_similarity: _Optional[float] = ..., sector_similarity: _Optional[float] = ..., period_return: _Optional[float] = ..., volatility: _Optional[float] = ...) -> None: ...

class ClusterStocksRequest(_message.Message):
    __slots__ = ("symbols", "interval", "time_window", "min_clusters", "max_clusters", "weights")
    SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    TIME_WINDOW_FIELD_NUMBER: _ClassVar[int]
    MIN_CLUSTERS_FIELD_NUMBER: _ClassVar[int]
    MAX_CLUSTERS_FIELD_NUMBER: _ClassVar[int]
    WEIGHTS_FIELD_NUMBER: _ClassVar[int]
    symbols: _containers.RepeatedScalarFieldContainer[str]
    interval: str
    time_window: TimeWindow
    min_clusters: int
    max_clusters: int
    weights: SimilarityWeights
    def __init__(self, symbols: _Optional[_Iterable[str]] = ..., interval: _Optional[str] = ..., time_window: _Optional[_Union[TimeWindow, _Mapping]] = ..., min_clusters: _Optional[int] = ..., max_clusters: _Optional[int] = ..., weights: _Optional[_Union[SimilarityWeights, _Mapping]] = ...) -> None: ...

class ClusterStocksResponse(_message.Message):
    __slots__ = ("members", "cluster_count", "figures", "dropped_symbols")
    MEMBERS_FIELD_NUMBER: _ClassVar[int]
    CLUSTER_COUNT_FIELD_NUMBER: _ClassVar[int]
    FIGURES_FIELD_NUMBER: _ClassVar[int]
    DROPPED_SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    members: _containers.RepeatedCompositeFieldContainer[ClusterMember]
    cluster_count: int
    figures: _containers.RepeatedCompositeFieldContainer[_common_pb2.PlotlyFigureSpec]
    dropped_symbols: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, members: _Optional[_Iterable[_Union[ClusterMember, _Mapping]]] = ..., cluster_count: _Optional[int] = ..., figures: _Optional[_Iterable[_Union[_common_pb2.PlotlyFigureSpec, _Mapping]]] = ..., dropped_symbols: _Optional[_Iterable[str]] = ...) -> None: ...

class FindSimilarStocksRequest(_message.Message):
    __slots__ = ("target_symbol", "symbols", "interval", "time_window", "top_k", "min_clusters", "max_clusters", "weights")
    TARGET_SYMBOL_FIELD_NUMBER: _ClassVar[int]
    SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    TIME_WINDOW_FIELD_NUMBER: _ClassVar[int]
    TOP_K_FIELD_NUMBER: _ClassVar[int]
    MIN_CLUSTERS_FIELD_NUMBER: _ClassVar[int]
    MAX_CLUSTERS_FIELD_NUMBER: _ClassVar[int]
    WEIGHTS_FIELD_NUMBER: _ClassVar[int]
    target_symbol: str
    symbols: _containers.RepeatedScalarFieldContainer[str]
    interval: str
    time_window: TimeWindow
    top_k: int
    min_clusters: int
    max_clusters: int
    weights: SimilarityWeights
    def __init__(self, target_symbol: _Optional[str] = ..., symbols: _Optional[_Iterable[str]] = ..., interval: _Optional[str] = ..., time_window: _Optional[_Union[TimeWindow, _Mapping]] = ..., top_k: _Optional[int] = ..., min_clusters: _Optional[int] = ..., max_clusters: _Optional[int] = ..., weights: _Optional[_Union[SimilarityWeights, _Mapping]] = ...) -> None: ...

class FindSimilarStocksResponse(_message.Message):
    __slots__ = ("target_symbol", "target_cluster_id", "members", "similar", "cluster_count", "figures", "dropped_symbols")
    TARGET_SYMBOL_FIELD_NUMBER: _ClassVar[int]
    TARGET_CLUSTER_ID_FIELD_NUMBER: _ClassVar[int]
    MEMBERS_FIELD_NUMBER: _ClassVar[int]
    SIMILAR_FIELD_NUMBER: _ClassVar[int]
    CLUSTER_COUNT_FIELD_NUMBER: _ClassVar[int]
    FIGURES_FIELD_NUMBER: _ClassVar[int]
    DROPPED_SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    target_symbol: str
    target_cluster_id: int
    members: _containers.RepeatedCompositeFieldContainer[ClusterMember]
    similar: _containers.RepeatedCompositeFieldContainer[SimilarStock]
    cluster_count: int
    figures: _containers.RepeatedCompositeFieldContainer[_common_pb2.PlotlyFigureSpec]
    dropped_symbols: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, target_symbol: _Optional[str] = ..., target_cluster_id: _Optional[int] = ..., members: _Optional[_Iterable[_Union[ClusterMember, _Mapping]]] = ..., similar: _Optional[_Iterable[_Union[SimilarStock, _Mapping]]] = ..., cluster_count: _Optional[int] = ..., figures: _Optional[_Iterable[_Union[_common_pb2.PlotlyFigureSpec, _Mapping]]] = ..., dropped_symbols: _Optional[_Iterable[str]] = ...) -> None: ...
