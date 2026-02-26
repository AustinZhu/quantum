from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RunId(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: str
    def __init__(self, value: _Optional[str] = ...) -> None: ...

class StrategyId(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: str
    def __init__(self, value: _Optional[str] = ...) -> None: ...

class IndicatorId(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: str
    def __init__(self, value: _Optional[str] = ...) -> None: ...

class ModelVersionId(_message.Message):
    __slots__ = ("value",)
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: str
    def __init__(self, value: _Optional[str] = ...) -> None: ...

class TimeRange(_message.Message):
    __slots__ = ("start_ts_ms", "end_ts_ms")
    START_TS_MS_FIELD_NUMBER: _ClassVar[int]
    END_TS_MS_FIELD_NUMBER: _ClassVar[int]
    start_ts_ms: int
    end_ts_ms: int
    def __init__(self, start_ts_ms: _Optional[int] = ..., end_ts_ms: _Optional[int] = ...) -> None: ...

class PlotlyFigureSpec(_message.Message):
    __slots__ = ("artifact_id", "figure_json", "kind")
    ARTIFACT_ID_FIELD_NUMBER: _ClassVar[int]
    FIGURE_JSON_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    artifact_id: str
    figure_json: str
    kind: str
    def __init__(self, artifact_id: _Optional[str] = ..., figure_json: _Optional[str] = ..., kind: _Optional[str] = ...) -> None: ...

class TradingViewPoint(_message.Message):
    __slots__ = ("ts_ms", "value")
    TS_MS_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    ts_ms: int
    value: float
    def __init__(self, ts_ms: _Optional[int] = ..., value: _Optional[float] = ...) -> None: ...

class TradingViewSeries(_message.Message):
    __slots__ = ("series_id", "name", "pane", "color", "points")
    SERIES_ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    PANE_FIELD_NUMBER: _ClassVar[int]
    COLOR_FIELD_NUMBER: _ClassVar[int]
    POINTS_FIELD_NUMBER: _ClassVar[int]
    series_id: str
    name: str
    pane: str
    color: str
    points: _containers.RepeatedCompositeFieldContainer[TradingViewPoint]
    def __init__(self, series_id: _Optional[str] = ..., name: _Optional[str] = ..., pane: _Optional[str] = ..., color: _Optional[str] = ..., points: _Optional[_Iterable[_Union[TradingViewPoint, _Mapping]]] = ...) -> None: ...

class TradingViewResponseMeta(_message.Message):
    __slots__ = ("timezone", "symbol", "interval", "source_version")
    TIMEZONE_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    SOURCE_VERSION_FIELD_NUMBER: _ClassVar[int]
    timezone: str
    symbol: str
    interval: str
    source_version: str
    def __init__(self, timezone: _Optional[str] = ..., symbol: _Optional[str] = ..., interval: _Optional[str] = ..., source_version: _Optional[str] = ...) -> None: ...

class Paging(_message.Message):
    __slots__ = ("page_size", "page_token")
    PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    page_size: int
    page_token: str
    def __init__(self, page_size: _Optional[int] = ..., page_token: _Optional[str] = ...) -> None: ...

class PageInfo(_message.Message):
    __slots__ = ("next_page_token",)
    NEXT_PAGE_TOKEN_FIELD_NUMBER: _ClassVar[int]
    next_page_token: str
    def __init__(self, next_page_token: _Optional[str] = ...) -> None: ...
