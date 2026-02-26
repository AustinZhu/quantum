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
