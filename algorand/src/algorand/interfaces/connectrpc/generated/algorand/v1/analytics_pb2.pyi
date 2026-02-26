from common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class GetPerformanceSummaryRequest(_message.Message):
    __slots__ = ("run_id",)
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    run_id: _common_pb2.RunId
    def __init__(self, run_id: _Optional[_Union[_common_pb2.RunId, _Mapping]] = ...) -> None: ...

class Metric(_message.Message):
    __slots__ = ("name", "value", "unit")
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    UNIT_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: float
    unit: str
    def __init__(self, name: _Optional[str] = ..., value: _Optional[float] = ..., unit: _Optional[str] = ...) -> None: ...

class GetPerformanceSummaryResponse(_message.Message):
    __slots__ = ("run_id", "metrics")
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    run_id: _common_pb2.RunId
    metrics: _containers.RepeatedCompositeFieldContainer[Metric]
    def __init__(self, run_id: _Optional[_Union[_common_pb2.RunId, _Mapping]] = ..., metrics: _Optional[_Iterable[_Union[Metric, _Mapping]]] = ...) -> None: ...

class GetPlotlyArtifactRequest(_message.Message):
    __slots__ = ("artifact_id",)
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    artifact_id: str
    def __init__(self, artifact_id: _Optional[str] = ...) -> None: ...

class GetPlotlyArtifactResponse(_message.Message):
    __slots__ = ("spec",)
    SPEC_FIELD_NUMBER: _ClassVar[int]
    spec: _common_pb2.PlotlyFigureSpec
    def __init__(self, spec: _Optional[_Union[_common_pb2.PlotlyFigureSpec, _Mapping]] = ...) -> None: ...

class GetTradingViewSeriesRequest(_message.Message):
    __slots__ = ("run_id", "symbol", "interval")
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    run_id: _common_pb2.RunId
    symbol: str
    interval: str
    def __init__(self, run_id: _Optional[_Union[_common_pb2.RunId, _Mapping]] = ..., symbol: _Optional[str] = ..., interval: _Optional[str] = ...) -> None: ...

class GetTradingViewSeriesResponse(_message.Message):
    __slots__ = ("series", "meta")
    SERIES_FIELD_NUMBER: _ClassVar[int]
    META_FIELD_NUMBER: _ClassVar[int]
    series: _containers.RepeatedCompositeFieldContainer[_common_pb2.TradingViewSeries]
    meta: _common_pb2.TradingViewResponseMeta
    def __init__(self, series: _Optional[_Iterable[_Union[_common_pb2.TradingViewSeries, _Mapping]]] = ..., meta: _Optional[_Union[_common_pb2.TradingViewResponseMeta, _Mapping]] = ...) -> None: ...
