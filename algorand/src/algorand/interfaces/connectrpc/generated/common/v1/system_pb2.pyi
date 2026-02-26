from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class HealthRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class HealthResponse(_message.Message):
    __slots__ = ("service", "status", "ts_ms")
    SERVICE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TS_MS_FIELD_NUMBER: _ClassVar[int]
    service: str
    status: str
    ts_ms: int
    def __init__(self, service: _Optional[str] = ..., status: _Optional[str] = ..., ts_ms: _Optional[int] = ...) -> None: ...

class ReadinessRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class DependencyStatus(_message.Message):
    __slots__ = ("name", "status", "detail")
    NAME_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    DETAIL_FIELD_NUMBER: _ClassVar[int]
    name: str
    status: str
    detail: str
    def __init__(self, name: _Optional[str] = ..., status: _Optional[str] = ..., detail: _Optional[str] = ...) -> None: ...

class ReadinessResponse(_message.Message):
    __slots__ = ("service", "status", "dependencies")
    SERVICE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    DEPENDENCIES_FIELD_NUMBER: _ClassVar[int]
    service: str
    status: str
    dependencies: _containers.RepeatedCompositeFieldContainer[DependencyStatus]
    def __init__(self, service: _Optional[str] = ..., status: _Optional[str] = ..., dependencies: _Optional[_Iterable[_Union[DependencyStatus, _Mapping]]] = ...) -> None: ...
