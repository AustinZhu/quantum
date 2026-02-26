from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ListStrategiesRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class StrategyDefinition(_message.Message):
    __slots__ = ("strategy_id", "version", "display_name", "description")
    STRATEGY_ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    strategy_id: str
    version: str
    display_name: str
    description: str
    def __init__(self, strategy_id: _Optional[str] = ..., version: _Optional[str] = ..., display_name: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class ListStrategiesResponse(_message.Message):
    __slots__ = ("strategies",)
    STRATEGIES_FIELD_NUMBER: _ClassVar[int]
    strategies: _containers.RepeatedCompositeFieldContainer[StrategyDefinition]
    def __init__(self, strategies: _Optional[_Iterable[_Union[StrategyDefinition, _Mapping]]] = ...) -> None: ...

class ListIndicatorsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class IndicatorDefinition(_message.Message):
    __slots__ = ("indicator_id", "version", "display_name", "description")
    INDICATOR_ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    indicator_id: str
    version: str
    display_name: str
    description: str
    def __init__(self, indicator_id: _Optional[str] = ..., version: _Optional[str] = ..., display_name: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class ListIndicatorsResponse(_message.Message):
    __slots__ = ("indicators",)
    INDICATORS_FIELD_NUMBER: _ClassVar[int]
    indicators: _containers.RepeatedCompositeFieldContainer[IndicatorDefinition]
    def __init__(self, indicators: _Optional[_Iterable[_Union[IndicatorDefinition, _Mapping]]] = ...) -> None: ...

class ListSignalsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SignalDefinition(_message.Message):
    __slots__ = ("signal_id", "version", "display_name", "description")
    SIGNAL_ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DISPLAY_NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    signal_id: str
    version: str
    display_name: str
    description: str
    def __init__(self, signal_id: _Optional[str] = ..., version: _Optional[str] = ..., display_name: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class ListSignalsResponse(_message.Message):
    __slots__ = ("signals",)
    SIGNALS_FIELD_NUMBER: _ClassVar[int]
    signals: _containers.RepeatedCompositeFieldContainer[SignalDefinition]
    def __init__(self, signals: _Optional[_Iterable[_Union[SignalDefinition, _Mapping]]] = ...) -> None: ...
