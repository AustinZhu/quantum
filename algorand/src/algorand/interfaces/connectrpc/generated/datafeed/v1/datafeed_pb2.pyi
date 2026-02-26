from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Tick(_message.Message):
    __slots__ = ("symbol", "ts_ms", "price", "size", "source")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    TS_MS_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    SOURCE_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    ts_ms: int
    price: float
    size: float
    source: str
    def __init__(self, symbol: _Optional[str] = ..., ts_ms: _Optional[int] = ..., price: _Optional[float] = ..., size: _Optional[float] = ..., source: _Optional[str] = ...) -> None: ...

class IngestTicksRequest(_message.Message):
    __slots__ = ("ticks",)
    TICKS_FIELD_NUMBER: _ClassVar[int]
    ticks: _containers.RepeatedCompositeFieldContainer[Tick]
    def __init__(self, ticks: _Optional[_Iterable[_Union[Tick, _Mapping]]] = ...) -> None: ...

class IngestTicksResponse(_message.Message):
    __slots__ = ("inserted",)
    INSERTED_FIELD_NUMBER: _ClassVar[int]
    inserted: int
    def __init__(self, inserted: _Optional[int] = ...) -> None: ...

class ReplayTicksRequest(_message.Message):
    __slots__ = ("symbol", "start_ts_ms", "end_ts_ms", "limit")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    START_TS_MS_FIELD_NUMBER: _ClassVar[int]
    END_TS_MS_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    start_ts_ms: int
    end_ts_ms: int
    limit: int
    def __init__(self, symbol: _Optional[str] = ..., start_ts_ms: _Optional[int] = ..., end_ts_ms: _Optional[int] = ..., limit: _Optional[int] = ...) -> None: ...

class ReplayTicksResponse(_message.Message):
    __slots__ = ("ticks",)
    TICKS_FIELD_NUMBER: _ClassVar[int]
    ticks: _containers.RepeatedCompositeFieldContainer[Tick]
    def __init__(self, ticks: _Optional[_Iterable[_Union[Tick, _Mapping]]] = ...) -> None: ...

class Bar(_message.Message):
    __slots__ = ("symbol", "interval", "ts_ms", "open", "high", "low", "close", "volume")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    TS_MS_FIELD_NUMBER: _ClassVar[int]
    OPEN_FIELD_NUMBER: _ClassVar[int]
    HIGH_FIELD_NUMBER: _ClassVar[int]
    LOW_FIELD_NUMBER: _ClassVar[int]
    CLOSE_FIELD_NUMBER: _ClassVar[int]
    VOLUME_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    interval: str
    ts_ms: int
    open: float
    high: float
    low: float
    close: float
    volume: float
    def __init__(self, symbol: _Optional[str] = ..., interval: _Optional[str] = ..., ts_ms: _Optional[int] = ..., open: _Optional[float] = ..., high: _Optional[float] = ..., low: _Optional[float] = ..., close: _Optional[float] = ..., volume: _Optional[float] = ...) -> None: ...

class QueryBarsRequest(_message.Message):
    __slots__ = ("symbol", "interval", "start_ts_ms", "end_ts_ms", "limit")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    START_TS_MS_FIELD_NUMBER: _ClassVar[int]
    END_TS_MS_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    interval: str
    start_ts_ms: int
    end_ts_ms: int
    limit: int
    def __init__(self, symbol: _Optional[str] = ..., interval: _Optional[str] = ..., start_ts_ms: _Optional[int] = ..., end_ts_ms: _Optional[int] = ..., limit: _Optional[int] = ...) -> None: ...

class QueryBarsResponse(_message.Message):
    __slots__ = ("bars",)
    BARS_FIELD_NUMBER: _ClassVar[int]
    bars: _containers.RepeatedCompositeFieldContainer[Bar]
    def __init__(self, bars: _Optional[_Iterable[_Union[Bar, _Mapping]]] = ...) -> None: ...

class ListNewsRequest(_message.Message):
    __slots__ = ("symbol", "limit")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    limit: int
    def __init__(self, symbol: _Optional[str] = ..., limit: _Optional[int] = ...) -> None: ...

class NewsEvent(_message.Message):
    __slots__ = ("id", "symbol", "title", "url", "ts_ms", "source")
    ID_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    TS_MS_FIELD_NUMBER: _ClassVar[int]
    SOURCE_FIELD_NUMBER: _ClassVar[int]
    id: str
    symbol: str
    title: str
    url: str
    ts_ms: int
    source: str
    def __init__(self, id: _Optional[str] = ..., symbol: _Optional[str] = ..., title: _Optional[str] = ..., url: _Optional[str] = ..., ts_ms: _Optional[int] = ..., source: _Optional[str] = ...) -> None: ...

class ListNewsResponse(_message.Message):
    __slots__ = ("items",)
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[NewsEvent]
    def __init__(self, items: _Optional[_Iterable[_Union[NewsEvent, _Mapping]]] = ...) -> None: ...

class ListSocialRequest(_message.Message):
    __slots__ = ("symbol", "limit")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    limit: int
    def __init__(self, symbol: _Optional[str] = ..., limit: _Optional[int] = ...) -> None: ...

class SocialEvent(_message.Message):
    __slots__ = ("id", "symbol", "platform", "author", "text", "ts_ms", "sentiment")
    ID_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FIELD_NUMBER: _ClassVar[int]
    AUTHOR_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    TS_MS_FIELD_NUMBER: _ClassVar[int]
    SENTIMENT_FIELD_NUMBER: _ClassVar[int]
    id: str
    symbol: str
    platform: str
    author: str
    text: str
    ts_ms: int
    sentiment: float
    def __init__(self, id: _Optional[str] = ..., symbol: _Optional[str] = ..., platform: _Optional[str] = ..., author: _Optional[str] = ..., text: _Optional[str] = ..., ts_ms: _Optional[int] = ..., sentiment: _Optional[float] = ...) -> None: ...

class ListSocialResponse(_message.Message):
    __slots__ = ("items",)
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[SocialEvent]
    def __init__(self, items: _Optional[_Iterable[_Union[SocialEvent, _Mapping]]] = ...) -> None: ...
