from common.v1 import common_pb2 as _common_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TestAlertRequest(_message.Message):
    __slots__ = ("channel", "target", "message")
    CHANNEL_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    channel: str
    target: str
    message: str
    def __init__(self, channel: _Optional[str] = ..., target: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...

class TestAlertResponse(_message.Message):
    __slots__ = ("status", "event_id")
    STATUS_FIELD_NUMBER: _ClassVar[int]
    EVENT_ID_FIELD_NUMBER: _ClassVar[int]
    status: str
    event_id: str
    def __init__(self, status: _Optional[str] = ..., event_id: _Optional[str] = ...) -> None: ...

class ListAlertEventsRequest(_message.Message):
    __slots__ = ("run_id", "paging")
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    PAGING_FIELD_NUMBER: _ClassVar[int]
    run_id: _common_pb2.RunId
    paging: _common_pb2.Paging
    def __init__(self, run_id: _Optional[_Union[_common_pb2.RunId, _Mapping]] = ..., paging: _Optional[_Union[_common_pb2.Paging, _Mapping]] = ...) -> None: ...

class AlertEvent(_message.Message):
    __slots__ = ("event_id", "run_id", "channel", "target", "status", "created_ts_ms")
    EVENT_ID_FIELD_NUMBER: _ClassVar[int]
    RUN_ID_FIELD_NUMBER: _ClassVar[int]
    CHANNEL_FIELD_NUMBER: _ClassVar[int]
    TARGET_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CREATED_TS_MS_FIELD_NUMBER: _ClassVar[int]
    event_id: str
    run_id: _common_pb2.RunId
    channel: str
    target: str
    status: str
    created_ts_ms: int
    def __init__(self, event_id: _Optional[str] = ..., run_id: _Optional[_Union[_common_pb2.RunId, _Mapping]] = ..., channel: _Optional[str] = ..., target: _Optional[str] = ..., status: _Optional[str] = ..., created_ts_ms: _Optional[int] = ...) -> None: ...

class ListAlertEventsResponse(_message.Message):
    __slots__ = ("events", "page")
    EVENTS_FIELD_NUMBER: _ClassVar[int]
    PAGE_FIELD_NUMBER: _ClassVar[int]
    events: _containers.RepeatedCompositeFieldContainer[AlertEvent]
    page: _common_pb2.PageInfo
    def __init__(self, events: _Optional[_Iterable[_Union[AlertEvent, _Mapping]]] = ..., page: _Optional[_Union[_common_pb2.PageInfo, _Mapping]] = ...) -> None: ...
