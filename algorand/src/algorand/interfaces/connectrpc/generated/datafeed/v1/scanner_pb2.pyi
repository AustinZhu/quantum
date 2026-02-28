from buf.validate import validate_pb2 as _validate_pb2
from gnostic.openapi.v3 import annotations_pb2 as _annotations_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ScannerLogicalOperator(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SCANNER_LOGICAL_OPERATOR_UNSPECIFIED: _ClassVar[ScannerLogicalOperator]
    SCANNER_LOGICAL_OPERATOR_AND: _ClassVar[ScannerLogicalOperator]
    SCANNER_LOGICAL_OPERATOR_OR: _ClassVar[ScannerLogicalOperator]

class ScannerFilterOperation(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SCANNER_FILTER_OPERATION_UNSPECIFIED: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_EQUAL: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_NOT_EQUAL: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_GREATER: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_GREATER_OR_EQUAL: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_LESS: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_LESS_OR_EQUAL: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_IN_RANGE: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_NOT_IN_RANGE: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_HAS: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_HAS_NONE_OF: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_MATCH: _ClassVar[ScannerFilterOperation]
    SCANNER_FILTER_OPERATION_NOT_MATCH: _ClassVar[ScannerFilterOperation]

class ScannerSortOrder(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SCANNER_SORT_ORDER_UNSPECIFIED: _ClassVar[ScannerSortOrder]
    SCANNER_SORT_ORDER_ASC: _ClassVar[ScannerSortOrder]
    SCANNER_SORT_ORDER_DESC: _ClassVar[ScannerSortOrder]
SCANNER_LOGICAL_OPERATOR_UNSPECIFIED: ScannerLogicalOperator
SCANNER_LOGICAL_OPERATOR_AND: ScannerLogicalOperator
SCANNER_LOGICAL_OPERATOR_OR: ScannerLogicalOperator
SCANNER_FILTER_OPERATION_UNSPECIFIED: ScannerFilterOperation
SCANNER_FILTER_OPERATION_EQUAL: ScannerFilterOperation
SCANNER_FILTER_OPERATION_NOT_EQUAL: ScannerFilterOperation
SCANNER_FILTER_OPERATION_GREATER: ScannerFilterOperation
SCANNER_FILTER_OPERATION_GREATER_OR_EQUAL: ScannerFilterOperation
SCANNER_FILTER_OPERATION_LESS: ScannerFilterOperation
SCANNER_FILTER_OPERATION_LESS_OR_EQUAL: ScannerFilterOperation
SCANNER_FILTER_OPERATION_IN_RANGE: ScannerFilterOperation
SCANNER_FILTER_OPERATION_NOT_IN_RANGE: ScannerFilterOperation
SCANNER_FILTER_OPERATION_HAS: ScannerFilterOperation
SCANNER_FILTER_OPERATION_HAS_NONE_OF: ScannerFilterOperation
SCANNER_FILTER_OPERATION_MATCH: ScannerFilterOperation
SCANNER_FILTER_OPERATION_NOT_MATCH: ScannerFilterOperation
SCANNER_SORT_ORDER_UNSPECIFIED: ScannerSortOrder
SCANNER_SORT_ORDER_ASC: ScannerSortOrder
SCANNER_SORT_ORDER_DESC: ScannerSortOrder

class ScannerStringList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, values: _Optional[_Iterable[str]] = ...) -> None: ...

class ScannerDoubleList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, values: _Optional[_Iterable[float]] = ...) -> None: ...

class ScannerFilterValue(_message.Message):
    __slots__ = ("string_value", "number_value", "bool_value", "string_list", "number_list")
    STRING_VALUE_FIELD_NUMBER: _ClassVar[int]
    NUMBER_VALUE_FIELD_NUMBER: _ClassVar[int]
    BOOL_VALUE_FIELD_NUMBER: _ClassVar[int]
    STRING_LIST_FIELD_NUMBER: _ClassVar[int]
    NUMBER_LIST_FIELD_NUMBER: _ClassVar[int]
    string_value: str
    number_value: float
    bool_value: bool
    string_list: ScannerStringList
    number_list: ScannerDoubleList
    def __init__(self, string_value: _Optional[str] = ..., number_value: _Optional[float] = ..., bool_value: _Optional[bool] = ..., string_list: _Optional[_Union[ScannerStringList, _Mapping]] = ..., number_list: _Optional[_Union[ScannerDoubleList, _Mapping]] = ...) -> None: ...

class ScannerFilterExpression(_message.Message):
    __slots__ = ("left", "operation", "right")
    LEFT_FIELD_NUMBER: _ClassVar[int]
    OPERATION_FIELD_NUMBER: _ClassVar[int]
    RIGHT_FIELD_NUMBER: _ClassVar[int]
    left: str
    operation: ScannerFilterOperation
    right: ScannerFilterValue
    def __init__(self, left: _Optional[str] = ..., operation: _Optional[_Union[ScannerFilterOperation, str]] = ..., right: _Optional[_Union[ScannerFilterValue, _Mapping]] = ...) -> None: ...

class ScannerFilterNode(_message.Message):
    __slots__ = ("expression", "operation")
    EXPRESSION_FIELD_NUMBER: _ClassVar[int]
    OPERATION_FIELD_NUMBER: _ClassVar[int]
    expression: ScannerFilterExpression
    operation: ScannerFilterGroup
    def __init__(self, expression: _Optional[_Union[ScannerFilterExpression, _Mapping]] = ..., operation: _Optional[_Union[ScannerFilterGroup, _Mapping]] = ...) -> None: ...

class ScannerFilterGroup(_message.Message):
    __slots__ = ("operator", "operands")
    OPERATOR_FIELD_NUMBER: _ClassVar[int]
    OPERANDS_FIELD_NUMBER: _ClassVar[int]
    operator: ScannerLogicalOperator
    operands: _containers.RepeatedCompositeFieldContainer[ScannerFilterNode]
    def __init__(self, operator: _Optional[_Union[ScannerLogicalOperator, str]] = ..., operands: _Optional[_Iterable[_Union[ScannerFilterNode, _Mapping]]] = ...) -> None: ...

class ScannerFilter(_message.Message):
    __slots__ = ("operator", "operands")
    OPERATOR_FIELD_NUMBER: _ClassVar[int]
    OPERANDS_FIELD_NUMBER: _ClassVar[int]
    operator: ScannerLogicalOperator
    operands: _containers.RepeatedCompositeFieldContainer[ScannerFilterNode]
    def __init__(self, operator: _Optional[_Union[ScannerLogicalOperator, str]] = ..., operands: _Optional[_Iterable[_Union[ScannerFilterNode, _Mapping]]] = ...) -> None: ...

class ScannerSort(_message.Message):
    __slots__ = ("sort_by", "sort_order")
    SORT_BY_FIELD_NUMBER: _ClassVar[int]
    SORT_ORDER_FIELD_NUMBER: _ClassVar[int]
    sort_by: str
    sort_order: ScannerSortOrder
    def __init__(self, sort_by: _Optional[str] = ..., sort_order: _Optional[_Union[ScannerSortOrder, str]] = ...) -> None: ...

class ScannerRange(_message.Message):
    __slots__ = ("start", "end")
    START_FIELD_NUMBER: _ClassVar[int]
    END_FIELD_NUMBER: _ClassVar[int]
    start: int
    end: int
    def __init__(self, start: _Optional[int] = ..., end: _Optional[int] = ...) -> None: ...

class ScannerOptions(_message.Message):
    __slots__ = ("lang",)
    LANG_FIELD_NUMBER: _ClassVar[int]
    lang: str
    def __init__(self, lang: _Optional[str] = ...) -> None: ...

class ScanSymbolsRequest(_message.Message):
    __slots__ = ("columns", "filter", "sort", "range", "options", "ignore_unknown_fields", "markets", "symbols")
    class SymbolsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _struct_pb2.Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
    COLUMNS_FIELD_NUMBER: _ClassVar[int]
    FILTER_FIELD_NUMBER: _ClassVar[int]
    SORT_FIELD_NUMBER: _ClassVar[int]
    RANGE_FIELD_NUMBER: _ClassVar[int]
    OPTIONS_FIELD_NUMBER: _ClassVar[int]
    IGNORE_UNKNOWN_FIELDS_FIELD_NUMBER: _ClassVar[int]
    MARKETS_FIELD_NUMBER: _ClassVar[int]
    SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    columns: _containers.RepeatedScalarFieldContainer[str]
    filter: ScannerFilter
    sort: ScannerSort
    range: ScannerRange
    options: ScannerOptions
    ignore_unknown_fields: bool
    markets: _containers.RepeatedScalarFieldContainer[str]
    symbols: _containers.MessageMap[str, _struct_pb2.Value]
    def __init__(self, columns: _Optional[_Iterable[str]] = ..., filter: _Optional[_Union[ScannerFilter, _Mapping]] = ..., sort: _Optional[_Union[ScannerSort, _Mapping]] = ..., range: _Optional[_Union[ScannerRange, _Mapping]] = ..., options: _Optional[_Union[ScannerOptions, _Mapping]] = ..., ignore_unknown_fields: _Optional[bool] = ..., markets: _Optional[_Iterable[str]] = ..., symbols: _Optional[_Mapping[str, _struct_pb2.Value]] = ...) -> None: ...

class ScanSymbolRow(_message.Message):
    __slots__ = ("s", "d")
    S_FIELD_NUMBER: _ClassVar[int]
    D_FIELD_NUMBER: _ClassVar[int]
    s: str
    d: _containers.RepeatedCompositeFieldContainer[_struct_pb2.Value]
    def __init__(self, s: _Optional[str] = ..., d: _Optional[_Iterable[_Union[_struct_pb2.Value, _Mapping]]] = ...) -> None: ...

class ScanSymbolsResponse(_message.Message):
    __slots__ = ("total_count", "data")
    TOTAL_COUNT_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    total_count: int
    data: _containers.RepeatedCompositeFieldContainer[ScanSymbolRow]
    def __init__(self, total_count: _Optional[int] = ..., data: _Optional[_Iterable[_Union[ScanSymbolRow, _Mapping]]] = ...) -> None: ...
