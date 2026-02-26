from common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class RunBacktestRequest(_message.Message):
    __slots__ = ("symbol", "interval", "time_range", "strategy_id", "strategy_params")
    class StrategyParamsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    TIME_RANGE_FIELD_NUMBER: _ClassVar[int]
    STRATEGY_ID_FIELD_NUMBER: _ClassVar[int]
    STRATEGY_PARAMS_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    interval: str
    time_range: _common_pb2.TimeRange
    strategy_id: _common_pb2.StrategyId
    strategy_params: _containers.ScalarMap[str, str]
    def __init__(self, symbol: _Optional[str] = ..., interval: _Optional[str] = ..., time_range: _Optional[_Union[_common_pb2.TimeRange, _Mapping]] = ..., strategy_id: _Optional[_Union[_common_pb2.StrategyId, _Mapping]] = ..., strategy_params: _Optional[_Mapping[str, str]] = ...) -> None: ...

class RunBacktestResponse(_message.Message):
    __slots__ = ("run_id", "status")
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    run_id: _common_pb2.RunId
    status: str
    def __init__(self, run_id: _Optional[_Union[_common_pb2.RunId, _Mapping]] = ..., status: _Optional[str] = ...) -> None: ...

class GetRunRequest(_message.Message):
    __slots__ = ("run_id",)
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    run_id: _common_pb2.RunId
    def __init__(self, run_id: _Optional[_Union[_common_pb2.RunId, _Mapping]] = ...) -> None: ...

class GetRunResponse(_message.Message):
    __slots__ = ("run_id", "status", "symbol", "interval", "strategy_id", "metadata")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    INTERVAL_FIELD_NUMBER: _ClassVar[int]
    STRATEGY_ID_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    run_id: _common_pb2.RunId
    status: str
    symbol: str
    interval: str
    strategy_id: _common_pb2.StrategyId
    metadata: _containers.ScalarMap[str, str]
    def __init__(self, run_id: _Optional[_Union[_common_pb2.RunId, _Mapping]] = ..., status: _Optional[str] = ..., symbol: _Optional[str] = ..., interval: _Optional[str] = ..., strategy_id: _Optional[_Union[_common_pb2.StrategyId, _Mapping]] = ..., metadata: _Optional[_Mapping[str, str]] = ...) -> None: ...

class ListRunsRequest(_message.Message):
    __slots__ = ("paging",)
    PAGING_FIELD_NUMBER: _ClassVar[int]
    paging: _common_pb2.Paging
    def __init__(self, paging: _Optional[_Union[_common_pb2.Paging, _Mapping]] = ...) -> None: ...

class ListRunsResponse(_message.Message):
    __slots__ = ("runs", "page")
    RUNS_FIELD_NUMBER: _ClassVar[int]
    PAGE_FIELD_NUMBER: _ClassVar[int]
    runs: _containers.RepeatedCompositeFieldContainer[GetRunResponse]
    page: _common_pb2.PageInfo
    def __init__(self, runs: _Optional[_Iterable[_Union[GetRunResponse, _Mapping]]] = ..., page: _Optional[_Union[_common_pb2.PageInfo, _Mapping]] = ...) -> None: ...
