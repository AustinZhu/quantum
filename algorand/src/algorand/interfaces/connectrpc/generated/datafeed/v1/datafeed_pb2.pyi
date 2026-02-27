from buf.validate import validate_pb2 as _validate_pb2
from gnostic.openapi.v3 import annotations_pb2 as _annotations_pb2
from google.protobuf import struct_pb2 as _struct_pb2
from google.protobuf import wrappers_pb2 as _wrappers_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SeriesFormat(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SERIES_FORMAT_UNSPECIFIED: _ClassVar[SeriesFormat]
    SERIES_FORMAT_PRICE: _ClassVar[SeriesFormat]
    SERIES_FORMAT_VOLUME: _ClassVar[SeriesFormat]

class VisiblePlotsSet(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    VISIBLE_PLOTS_SET_UNSPECIFIED: _ClassVar[VisiblePlotsSet]
    VISIBLE_PLOTS_SET_OHLCV: _ClassVar[VisiblePlotsSet]
    VISIBLE_PLOTS_SET_OHLC: _ClassVar[VisiblePlotsSet]
    VISIBLE_PLOTS_SET_C: _ClassVar[VisiblePlotsSet]
    VISIBLE_PLOTS_SET_HLC: _ClassVar[VisiblePlotsSet]

class DataStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    DATA_STATUS_UNSPECIFIED: _ClassVar[DataStatus]
    DATA_STATUS_STREAMING: _ClassVar[DataStatus]
    DATA_STATUS_ENDOFDAY: _ClassVar[DataStatus]
    DATA_STATUS_DELAYED_STREAMING: _ClassVar[DataStatus]

class SortOrder(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    SORT_ORDER_UNSPECIFIED: _ClassVar[SortOrder]
    SORT_ORDER_ASC: _ClassVar[SortOrder]
    SORT_ORDER_DESC: _ClassVar[SortOrder]

class TimescaleMarkShape(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    TIMESCALE_MARK_SHAPE_UNSPECIFIED: _ClassVar[TimescaleMarkShape]
    TIMESCALE_MARK_SHAPE_CIRCLE: _ClassVar[TimescaleMarkShape]
    TIMESCALE_MARK_SHAPE_EARNING_UP: _ClassVar[TimescaleMarkShape]
    TIMESCALE_MARK_SHAPE_EARNING_DOWN: _ClassVar[TimescaleMarkShape]
    TIMESCALE_MARK_SHAPE_EARNING: _ClassVar[TimescaleMarkShape]

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
SERIES_FORMAT_UNSPECIFIED: SeriesFormat
SERIES_FORMAT_PRICE: SeriesFormat
SERIES_FORMAT_VOLUME: SeriesFormat
VISIBLE_PLOTS_SET_UNSPECIFIED: VisiblePlotsSet
VISIBLE_PLOTS_SET_OHLCV: VisiblePlotsSet
VISIBLE_PLOTS_SET_OHLC: VisiblePlotsSet
VISIBLE_PLOTS_SET_C: VisiblePlotsSet
VISIBLE_PLOTS_SET_HLC: VisiblePlotsSet
DATA_STATUS_UNSPECIFIED: DataStatus
DATA_STATUS_STREAMING: DataStatus
DATA_STATUS_ENDOFDAY: DataStatus
DATA_STATUS_DELAYED_STREAMING: DataStatus
SORT_ORDER_UNSPECIFIED: SortOrder
SORT_ORDER_ASC: SortOrder
SORT_ORDER_DESC: SortOrder
TIMESCALE_MARK_SHAPE_UNSPECIFIED: TimescaleMarkShape
TIMESCALE_MARK_SHAPE_CIRCLE: TimescaleMarkShape
TIMESCALE_MARK_SHAPE_EARNING_UP: TimescaleMarkShape
TIMESCALE_MARK_SHAPE_EARNING_DOWN: TimescaleMarkShape
TIMESCALE_MARK_SHAPE_EARNING: TimescaleMarkShape
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

class StringList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, values: _Optional[_Iterable[str]] = ...) -> None: ...

class StringListList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedCompositeFieldContainer[StringList]
    def __init__(self, values: _Optional[_Iterable[_Union[StringList, _Mapping]]] = ...) -> None: ...

class DoubleList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, values: _Optional[_Iterable[float]] = ...) -> None: ...

class Int64List(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, values: _Optional[_Iterable[int]] = ...) -> None: ...

class BoolList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[bool]
    def __init__(self, values: _Optional[_Iterable[bool]] = ...) -> None: ...

class NullableStringList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.StringValue]
    def __init__(self, values: _Optional[_Iterable[_Union[_wrappers_pb2.StringValue, _Mapping]]] = ...) -> None: ...

class NullableDoubleList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.DoubleValue]
    def __init__(self, values: _Optional[_Iterable[_Union[_wrappers_pb2.DoubleValue, _Mapping]]] = ...) -> None: ...

class NullableBoolList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedCompositeFieldContainer[_wrappers_pb2.BoolValue]
    def __init__(self, values: _Optional[_Iterable[_Union[_wrappers_pb2.BoolValue, _Mapping]]] = ...) -> None: ...

class StringOrStringList(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: str
    many: StringList
    def __init__(self, single: _Optional[str] = ..., many: _Optional[_Union[StringList, _Mapping]] = ...) -> None: ...

class StringListOrStringListList(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: StringList
    many: StringListList
    def __init__(self, single: _Optional[_Union[StringList, _Mapping]] = ..., many: _Optional[_Union[StringListList, _Mapping]] = ...) -> None: ...

class DoubleOrDoubleList(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: float
    many: DoubleList
    def __init__(self, single: _Optional[float] = ..., many: _Optional[_Union[DoubleList, _Mapping]] = ...) -> None: ...

class Int64OrInt64List(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: int
    many: Int64List
    def __init__(self, single: _Optional[int] = ..., many: _Optional[_Union[Int64List, _Mapping]] = ...) -> None: ...

class BoolOrBoolList(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: bool
    many: BoolList
    def __init__(self, single: _Optional[bool] = ..., many: _Optional[_Union[BoolList, _Mapping]] = ...) -> None: ...

class StringOrNullableStringList(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: str
    many: NullableStringList
    def __init__(self, single: _Optional[str] = ..., many: _Optional[_Union[NullableStringList, _Mapping]] = ...) -> None: ...

class DoubleOrNullableDoubleList(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: float
    many: NullableDoubleList
    def __init__(self, single: _Optional[float] = ..., many: _Optional[_Union[NullableDoubleList, _Mapping]] = ...) -> None: ...

class BoolOrNullableBoolList(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: bool
    many: NullableBoolList
    def __init__(self, single: _Optional[bool] = ..., many: _Optional[_Union[NullableBoolList, _Mapping]] = ...) -> None: ...

class VisiblePlotsSetList(_message.Message):
    __slots__ = ("values",)
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[VisiblePlotsSet]
    def __init__(self, values: _Optional[_Iterable[_Union[VisiblePlotsSet, str]]] = ...) -> None: ...

class VisiblePlotsSetOrList(_message.Message):
    __slots__ = ("single", "many")
    SINGLE_FIELD_NUMBER: _ClassVar[int]
    MANY_FIELD_NUMBER: _ClassVar[int]
    single: VisiblePlotsSet
    many: VisiblePlotsSetList
    def __init__(self, single: _Optional[_Union[VisiblePlotsSet, str]] = ..., many: _Optional[_Union[VisiblePlotsSetList, _Mapping]] = ...) -> None: ...

class SymbolPriceSource(_message.Message):
    __slots__ = ("id", "name")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ...) -> None: ...

class SubsessionInfo(_message.Message):
    __slots__ = ("id", "description", "session", "session_correction", "session_display")
    ID_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SESSION_FIELD_NUMBER: _ClassVar[int]
    SESSION_CORRECTION_FIELD_NUMBER: _ClassVar[int]
    SESSION_DISPLAY_FIELD_NUMBER: _ClassVar[int]
    id: str
    description: str
    session: str
    session_correction: str
    session_display: str
    def __init__(self, id: _Optional[str] = ..., description: _Optional[str] = ..., session: _Optional[str] = ..., session_correction: _Optional[str] = ..., session_display: _Optional[str] = ...) -> None: ...

class LibrarySymbolInfo(_message.Message):
    __slots__ = ("name", "ticker", "description", "type", "session", "session_holidays", "session_display", "corrections", "timezone", "exchange", "listed_exchange", "format", "minmov", "pricescale", "minmove2", "fractional", "variable_tick_size", "has_intraday", "has_daily", "has_weekly_and_monthly", "has_seconds", "has_ticks", "has_empty_bars", "build_seconds_from_ticks", "supported_resolutions", "intraday_multipliers", "seconds_multipliers", "daily_multipliers", "weekly_multipliers", "monthly_multipliers", "volume_precision", "data_status", "delay", "expired", "expiration_date", "sector", "industry", "currency_code", "original_currency_code", "unit_id", "original_unit_id", "unit_conversion_types", "visible_plots_set", "exchange_logo", "logo_urls", "long_description", "base_name", "price_sources", "price_source_id", "subsessions", "subsession_id", "library_custom_fields")
    class LibraryCustomFieldsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _struct_pb2.Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    TICKER_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    SESSION_FIELD_NUMBER: _ClassVar[int]
    SESSION_HOLIDAYS_FIELD_NUMBER: _ClassVar[int]
    SESSION_DISPLAY_FIELD_NUMBER: _ClassVar[int]
    CORRECTIONS_FIELD_NUMBER: _ClassVar[int]
    TIMEZONE_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    LISTED_EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    MINMOV_FIELD_NUMBER: _ClassVar[int]
    PRICESCALE_FIELD_NUMBER: _ClassVar[int]
    MINMOVE2_FIELD_NUMBER: _ClassVar[int]
    FRACTIONAL_FIELD_NUMBER: _ClassVar[int]
    VARIABLE_TICK_SIZE_FIELD_NUMBER: _ClassVar[int]
    HAS_INTRADAY_FIELD_NUMBER: _ClassVar[int]
    HAS_DAILY_FIELD_NUMBER: _ClassVar[int]
    HAS_WEEKLY_AND_MONTHLY_FIELD_NUMBER: _ClassVar[int]
    HAS_SECONDS_FIELD_NUMBER: _ClassVar[int]
    HAS_TICKS_FIELD_NUMBER: _ClassVar[int]
    HAS_EMPTY_BARS_FIELD_NUMBER: _ClassVar[int]
    BUILD_SECONDS_FROM_TICKS_FIELD_NUMBER: _ClassVar[int]
    SUPPORTED_RESOLUTIONS_FIELD_NUMBER: _ClassVar[int]
    INTRADAY_MULTIPLIERS_FIELD_NUMBER: _ClassVar[int]
    SECONDS_MULTIPLIERS_FIELD_NUMBER: _ClassVar[int]
    DAILY_MULTIPLIERS_FIELD_NUMBER: _ClassVar[int]
    WEEKLY_MULTIPLIERS_FIELD_NUMBER: _ClassVar[int]
    MONTHLY_MULTIPLIERS_FIELD_NUMBER: _ClassVar[int]
    VOLUME_PRECISION_FIELD_NUMBER: _ClassVar[int]
    DATA_STATUS_FIELD_NUMBER: _ClassVar[int]
    DELAY_FIELD_NUMBER: _ClassVar[int]
    EXPIRED_FIELD_NUMBER: _ClassVar[int]
    EXPIRATION_DATE_FIELD_NUMBER: _ClassVar[int]
    SECTOR_FIELD_NUMBER: _ClassVar[int]
    INDUSTRY_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    ORIGINAL_CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    UNIT_ID_FIELD_NUMBER: _ClassVar[int]
    ORIGINAL_UNIT_ID_FIELD_NUMBER: _ClassVar[int]
    UNIT_CONVERSION_TYPES_FIELD_NUMBER: _ClassVar[int]
    VISIBLE_PLOTS_SET_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_LOGO_FIELD_NUMBER: _ClassVar[int]
    LOGO_URLS_FIELD_NUMBER: _ClassVar[int]
    LONG_DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    BASE_NAME_FIELD_NUMBER: _ClassVar[int]
    PRICE_SOURCES_FIELD_NUMBER: _ClassVar[int]
    PRICE_SOURCE_ID_FIELD_NUMBER: _ClassVar[int]
    SUBSESSIONS_FIELD_NUMBER: _ClassVar[int]
    SUBSESSION_ID_FIELD_NUMBER: _ClassVar[int]
    LIBRARY_CUSTOM_FIELDS_FIELD_NUMBER: _ClassVar[int]
    name: str
    ticker: str
    description: str
    type: str
    session: str
    session_holidays: str
    session_display: str
    corrections: str
    timezone: str
    exchange: str
    listed_exchange: str
    format: SeriesFormat
    minmov: int
    pricescale: int
    minmove2: int
    fractional: bool
    variable_tick_size: str
    has_intraday: bool
    has_daily: bool
    has_weekly_and_monthly: bool
    has_seconds: bool
    has_ticks: bool
    has_empty_bars: bool
    build_seconds_from_ticks: bool
    supported_resolutions: _containers.RepeatedScalarFieldContainer[str]
    intraday_multipliers: _containers.RepeatedScalarFieldContainer[str]
    seconds_multipliers: _containers.RepeatedScalarFieldContainer[str]
    daily_multipliers: _containers.RepeatedScalarFieldContainer[str]
    weekly_multipliers: _containers.RepeatedScalarFieldContainer[str]
    monthly_multipliers: _containers.RepeatedScalarFieldContainer[str]
    volume_precision: int
    data_status: DataStatus
    delay: int
    expired: bool
    expiration_date: int
    sector: str
    industry: str
    currency_code: str
    original_currency_code: str
    unit_id: str
    original_unit_id: str
    unit_conversion_types: _containers.RepeatedScalarFieldContainer[str]
    visible_plots_set: VisiblePlotsSet
    exchange_logo: str
    logo_urls: _containers.RepeatedScalarFieldContainer[str]
    long_description: str
    base_name: _containers.RepeatedScalarFieldContainer[str]
    price_sources: _containers.RepeatedCompositeFieldContainer[SymbolPriceSource]
    price_source_id: str
    subsessions: _containers.RepeatedCompositeFieldContainer[SubsessionInfo]
    subsession_id: str
    library_custom_fields: _containers.MessageMap[str, _struct_pb2.Value]
    def __init__(self, name: _Optional[str] = ..., ticker: _Optional[str] = ..., description: _Optional[str] = ..., type: _Optional[str] = ..., session: _Optional[str] = ..., session_holidays: _Optional[str] = ..., session_display: _Optional[str] = ..., corrections: _Optional[str] = ..., timezone: _Optional[str] = ..., exchange: _Optional[str] = ..., listed_exchange: _Optional[str] = ..., format: _Optional[_Union[SeriesFormat, str]] = ..., minmov: _Optional[int] = ..., pricescale: _Optional[int] = ..., minmove2: _Optional[int] = ..., fractional: _Optional[bool] = ..., variable_tick_size: _Optional[str] = ..., has_intraday: _Optional[bool] = ..., has_daily: _Optional[bool] = ..., has_weekly_and_monthly: _Optional[bool] = ..., has_seconds: _Optional[bool] = ..., has_ticks: _Optional[bool] = ..., has_empty_bars: _Optional[bool] = ..., build_seconds_from_ticks: _Optional[bool] = ..., supported_resolutions: _Optional[_Iterable[str]] = ..., intraday_multipliers: _Optional[_Iterable[str]] = ..., seconds_multipliers: _Optional[_Iterable[str]] = ..., daily_multipliers: _Optional[_Iterable[str]] = ..., weekly_multipliers: _Optional[_Iterable[str]] = ..., monthly_multipliers: _Optional[_Iterable[str]] = ..., volume_precision: _Optional[int] = ..., data_status: _Optional[_Union[DataStatus, str]] = ..., delay: _Optional[int] = ..., expired: _Optional[bool] = ..., expiration_date: _Optional[int] = ..., sector: _Optional[str] = ..., industry: _Optional[str] = ..., currency_code: _Optional[str] = ..., original_currency_code: _Optional[str] = ..., unit_id: _Optional[str] = ..., original_unit_id: _Optional[str] = ..., unit_conversion_types: _Optional[_Iterable[str]] = ..., visible_plots_set: _Optional[_Union[VisiblePlotsSet, str]] = ..., exchange_logo: _Optional[str] = ..., logo_urls: _Optional[_Iterable[str]] = ..., long_description: _Optional[str] = ..., base_name: _Optional[_Iterable[str]] = ..., price_sources: _Optional[_Iterable[_Union[SymbolPriceSource, _Mapping]]] = ..., price_source_id: _Optional[str] = ..., subsessions: _Optional[_Iterable[_Union[SubsessionInfo, _Mapping]]] = ..., subsession_id: _Optional[str] = ..., library_custom_fields: _Optional[_Mapping[str, _struct_pb2.Value]] = ...) -> None: ...

class ListSymbolsRequest(_message.Message):
    __slots__ = ("query", "type", "exchange", "limit", "offset", "markets", "symbols", "include_expired", "sort_by", "sort_order")
    QUERY_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    MARKETS_FIELD_NUMBER: _ClassVar[int]
    SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    INCLUDE_EXPIRED_FIELD_NUMBER: _ClassVar[int]
    SORT_BY_FIELD_NUMBER: _ClassVar[int]
    SORT_ORDER_FIELD_NUMBER: _ClassVar[int]
    query: str
    type: str
    exchange: str
    limit: int
    offset: int
    markets: _containers.RepeatedScalarFieldContainer[str]
    symbols: _containers.RepeatedScalarFieldContainer[str]
    include_expired: bool
    sort_by: str
    sort_order: SortOrder
    def __init__(self, query: _Optional[str] = ..., type: _Optional[str] = ..., exchange: _Optional[str] = ..., limit: _Optional[int] = ..., offset: _Optional[int] = ..., markets: _Optional[_Iterable[str]] = ..., symbols: _Optional[_Iterable[str]] = ..., include_expired: _Optional[bool] = ..., sort_by: _Optional[str] = ..., sort_order: _Optional[_Union[SortOrder, str]] = ...) -> None: ...

class ListSymbolsResponse(_message.Message):
    __slots__ = ("total_count", "symbols")
    TOTAL_COUNT_FIELD_NUMBER: _ClassVar[int]
    SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    total_count: int
    symbols: _containers.RepeatedCompositeFieldContainer[LibrarySymbolInfo]
    def __init__(self, total_count: _Optional[int] = ..., symbols: _Optional[_Iterable[_Union[LibrarySymbolInfo, _Mapping]]] = ...) -> None: ...

class ExchangeDescriptor(_message.Message):
    __slots__ = ("value", "name", "desc")
    VALUE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESC_FIELD_NUMBER: _ClassVar[int]
    value: str
    name: str
    desc: str
    def __init__(self, value: _Optional[str] = ..., name: _Optional[str] = ..., desc: _Optional[str] = ...) -> None: ...

class SymbolTypeDescriptor(_message.Message):
    __slots__ = ("name", "value")
    NAME_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    name: str
    value: str
    def __init__(self, name: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...

class CurrencyItem(_message.Message):
    __slots__ = ("id", "code", "description")
    ID_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    id: str
    code: str
    description: str
    def __init__(self, id: _Optional[str] = ..., code: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class CurrencyCodeEntry(_message.Message):
    __slots__ = ("code", "item")
    CODE_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    code: str
    item: CurrencyItem
    def __init__(self, code: _Optional[str] = ..., item: _Optional[_Union[CurrencyItem, _Mapping]] = ...) -> None: ...

class UnitItem(_message.Message):
    __slots__ = ("id", "name", "description")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    description: str
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class UnitList(_message.Message):
    __slots__ = ("items",)
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[UnitItem]
    def __init__(self, items: _Optional[_Iterable[_Union[UnitItem, _Mapping]]] = ...) -> None: ...

class GetConfigRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetConfigResponse(_message.Message):
    __slots__ = ("supported_resolutions", "supports_group_request", "supports_marks", "supports_search", "supports_timescale_marks", "supports_time", "exchanges", "symbols_types", "currency_codes", "units", "symbols_grouping")
    class UnitsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: UnitList
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[UnitList, _Mapping]] = ...) -> None: ...
    class SymbolsGroupingEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    SUPPORTED_RESOLUTIONS_FIELD_NUMBER: _ClassVar[int]
    SUPPORTS_GROUP_REQUEST_FIELD_NUMBER: _ClassVar[int]
    SUPPORTS_MARKS_FIELD_NUMBER: _ClassVar[int]
    SUPPORTS_SEARCH_FIELD_NUMBER: _ClassVar[int]
    SUPPORTS_TIMESCALE_MARKS_FIELD_NUMBER: _ClassVar[int]
    SUPPORTS_TIME_FIELD_NUMBER: _ClassVar[int]
    EXCHANGES_FIELD_NUMBER: _ClassVar[int]
    SYMBOLS_TYPES_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODES_FIELD_NUMBER: _ClassVar[int]
    UNITS_FIELD_NUMBER: _ClassVar[int]
    SYMBOLS_GROUPING_FIELD_NUMBER: _ClassVar[int]
    supported_resolutions: _containers.RepeatedScalarFieldContainer[str]
    supports_group_request: bool
    supports_marks: bool
    supports_search: bool
    supports_timescale_marks: bool
    supports_time: bool
    exchanges: _containers.RepeatedCompositeFieldContainer[ExchangeDescriptor]
    symbols_types: _containers.RepeatedCompositeFieldContainer[SymbolTypeDescriptor]
    currency_codes: _containers.RepeatedCompositeFieldContainer[CurrencyCodeEntry]
    units: _containers.MessageMap[str, UnitList]
    symbols_grouping: _containers.ScalarMap[str, str]
    def __init__(self, supported_resolutions: _Optional[_Iterable[str]] = ..., supports_group_request: _Optional[bool] = ..., supports_marks: _Optional[bool] = ..., supports_search: _Optional[bool] = ..., supports_timescale_marks: _Optional[bool] = ..., supports_time: _Optional[bool] = ..., exchanges: _Optional[_Iterable[_Union[ExchangeDescriptor, _Mapping]]] = ..., symbols_types: _Optional[_Iterable[_Union[SymbolTypeDescriptor, _Mapping]]] = ..., currency_codes: _Optional[_Iterable[_Union[CurrencyCodeEntry, _Mapping]]] = ..., units: _Optional[_Mapping[str, UnitList]] = ..., symbols_grouping: _Optional[_Mapping[str, str]] = ...) -> None: ...

class GetTimeRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class GetTimeResponse(_message.Message):
    __slots__ = ("unix_time",)
    UNIX_TIME_FIELD_NUMBER: _ClassVar[int]
    unix_time: int
    def __init__(self, unix_time: _Optional[int] = ...) -> None: ...

class GetHistoryRequest(_message.Message):
    __slots__ = ("symbol", "to", "resolution", "countback")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    COUNTBACK_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    to: int
    resolution: str
    countback: int
    def __init__(self, symbol: _Optional[str] = ..., to: _Optional[int] = ..., resolution: _Optional[str] = ..., countback: _Optional[int] = ..., **kwargs) -> None: ...

class GetHistoryOk(_message.Message):
    __slots__ = ("t", "c", "o", "h", "l", "v")
    T_FIELD_NUMBER: _ClassVar[int]
    C_FIELD_NUMBER: _ClassVar[int]
    O_FIELD_NUMBER: _ClassVar[int]
    H_FIELD_NUMBER: _ClassVar[int]
    L_FIELD_NUMBER: _ClassVar[int]
    V_FIELD_NUMBER: _ClassVar[int]
    t: _containers.RepeatedScalarFieldContainer[int]
    c: _containers.RepeatedScalarFieldContainer[float]
    o: _containers.RepeatedScalarFieldContainer[float]
    h: _containers.RepeatedScalarFieldContainer[float]
    l: _containers.RepeatedScalarFieldContainer[float]
    v: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, t: _Optional[_Iterable[int]] = ..., c: _Optional[_Iterable[float]] = ..., o: _Optional[_Iterable[float]] = ..., h: _Optional[_Iterable[float]] = ..., l: _Optional[_Iterable[float]] = ..., v: _Optional[_Iterable[float]] = ...) -> None: ...

class GetHistoryNoData(_message.Message):
    __slots__ = ("next_time",)
    NEXT_TIME_FIELD_NUMBER: _ClassVar[int]
    next_time: int
    def __init__(self, next_time: _Optional[int] = ...) -> None: ...

class GetHistoryError(_message.Message):
    __slots__ = ("errmsg",)
    ERRMSG_FIELD_NUMBER: _ClassVar[int]
    errmsg: str
    def __init__(self, errmsg: _Optional[str] = ...) -> None: ...

class GetHistoryResponse(_message.Message):
    __slots__ = ("ok", "no_data", "error")
    OK_FIELD_NUMBER: _ClassVar[int]
    NO_DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    ok: GetHistoryOk
    no_data: GetHistoryNoData
    error: GetHistoryError
    def __init__(self, ok: _Optional[_Union[GetHistoryOk, _Mapping]] = ..., no_data: _Optional[_Union[GetHistoryNoData, _Mapping]] = ..., error: _Optional[_Union[GetHistoryError, _Mapping]] = ...) -> None: ...

class QuoteValues(_message.Message):
    __slots__ = ("ch", "chp", "short_name", "exchange", "description", "lp", "ask", "bid", "open_price", "high_price", "low_price", "prev_close_price", "volume", "original_name", "spread", "rtc", "rtc_time", "rch", "rchp")
    CH_FIELD_NUMBER: _ClassVar[int]
    CHP_FIELD_NUMBER: _ClassVar[int]
    SHORT_NAME_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    LP_FIELD_NUMBER: _ClassVar[int]
    ASK_FIELD_NUMBER: _ClassVar[int]
    BID_FIELD_NUMBER: _ClassVar[int]
    OPEN_PRICE_FIELD_NUMBER: _ClassVar[int]
    HIGH_PRICE_FIELD_NUMBER: _ClassVar[int]
    LOW_PRICE_FIELD_NUMBER: _ClassVar[int]
    PREV_CLOSE_PRICE_FIELD_NUMBER: _ClassVar[int]
    VOLUME_FIELD_NUMBER: _ClassVar[int]
    ORIGINAL_NAME_FIELD_NUMBER: _ClassVar[int]
    SPREAD_FIELD_NUMBER: _ClassVar[int]
    RTC_FIELD_NUMBER: _ClassVar[int]
    RTC_TIME_FIELD_NUMBER: _ClassVar[int]
    RCH_FIELD_NUMBER: _ClassVar[int]
    RCHP_FIELD_NUMBER: _ClassVar[int]
    ch: float
    chp: float
    short_name: str
    exchange: str
    description: str
    lp: float
    ask: float
    bid: float
    open_price: float
    high_price: float
    low_price: float
    prev_close_price: float
    volume: float
    original_name: str
    spread: float
    rtc: float
    rtc_time: int
    rch: float
    rchp: float
    def __init__(self, ch: _Optional[float] = ..., chp: _Optional[float] = ..., short_name: _Optional[str] = ..., exchange: _Optional[str] = ..., description: _Optional[str] = ..., lp: _Optional[float] = ..., ask: _Optional[float] = ..., bid: _Optional[float] = ..., open_price: _Optional[float] = ..., high_price: _Optional[float] = ..., low_price: _Optional[float] = ..., prev_close_price: _Optional[float] = ..., volume: _Optional[float] = ..., original_name: _Optional[str] = ..., spread: _Optional[float] = ..., rtc: _Optional[float] = ..., rtc_time: _Optional[int] = ..., rch: _Optional[float] = ..., rchp: _Optional[float] = ...) -> None: ...

class QuoteData(_message.Message):
    __slots__ = ("s", "n", "v")
    S_FIELD_NUMBER: _ClassVar[int]
    N_FIELD_NUMBER: _ClassVar[int]
    V_FIELD_NUMBER: _ClassVar[int]
    s: str
    n: str
    v: QuoteValues
    def __init__(self, s: _Optional[str] = ..., n: _Optional[str] = ..., v: _Optional[_Union[QuoteValues, _Mapping]] = ...) -> None: ...

class GetQuotesRequest(_message.Message):
    __slots__ = ("symbols",)
    SYMBOLS_FIELD_NUMBER: _ClassVar[int]
    symbols: str
    def __init__(self, symbols: _Optional[str] = ...) -> None: ...

class GetQuotesOk(_message.Message):
    __slots__ = ("d",)
    D_FIELD_NUMBER: _ClassVar[int]
    d: _containers.RepeatedCompositeFieldContainer[QuoteData]
    def __init__(self, d: _Optional[_Iterable[_Union[QuoteData, _Mapping]]] = ...) -> None: ...

class GetQuotesError(_message.Message):
    __slots__ = ("errmsg",)
    ERRMSG_FIELD_NUMBER: _ClassVar[int]
    errmsg: str
    def __init__(self, errmsg: _Optional[str] = ...) -> None: ...

class GetQuotesResponse(_message.Message):
    __slots__ = ("ok", "error")
    OK_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    ok: GetQuotesOk
    error: GetQuotesError
    def __init__(self, ok: _Optional[_Union[GetQuotesOk, _Mapping]] = ..., error: _Optional[_Union[GetQuotesError, _Mapping]] = ...) -> None: ...

class MarkId(_message.Message):
    __slots__ = ("string_id", "numeric_id")
    STRING_ID_FIELD_NUMBER: _ClassVar[int]
    NUMERIC_ID_FIELD_NUMBER: _ClassVar[int]
    string_id: str
    numeric_id: int
    def __init__(self, string_id: _Optional[str] = ..., numeric_id: _Optional[int] = ...) -> None: ...

class GetMarksRequest(_message.Message):
    __slots__ = ("symbol", "to", "resolution")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    to: int
    resolution: str
    def __init__(self, symbol: _Optional[str] = ..., to: _Optional[int] = ..., resolution: _Optional[str] = ..., **kwargs) -> None: ...

class GetMarksResponse(_message.Message):
    __slots__ = ("id", "time", "color", "text", "label", "label_font_color", "min_size", "border_width", "hovered_border_width", "image_url", "show_label_when_image_loaded")
    ID_FIELD_NUMBER: _ClassVar[int]
    TIME_FIELD_NUMBER: _ClassVar[int]
    COLOR_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    LABEL_FONT_COLOR_FIELD_NUMBER: _ClassVar[int]
    MIN_SIZE_FIELD_NUMBER: _ClassVar[int]
    BORDER_WIDTH_FIELD_NUMBER: _ClassVar[int]
    HOVERED_BORDER_WIDTH_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URL_FIELD_NUMBER: _ClassVar[int]
    SHOW_LABEL_WHEN_IMAGE_LOADED_FIELD_NUMBER: _ClassVar[int]
    id: _containers.RepeatedCompositeFieldContainer[MarkId]
    time: Int64OrInt64List
    color: StringOrStringList
    text: StringOrStringList
    label: StringOrStringList
    label_font_color: StringOrStringList
    min_size: DoubleOrDoubleList
    border_width: DoubleOrNullableDoubleList
    hovered_border_width: DoubleOrNullableDoubleList
    image_url: StringOrNullableStringList
    show_label_when_image_loaded: BoolOrNullableBoolList
    def __init__(self, id: _Optional[_Iterable[_Union[MarkId, _Mapping]]] = ..., time: _Optional[_Union[Int64OrInt64List, _Mapping]] = ..., color: _Optional[_Union[StringOrStringList, _Mapping]] = ..., text: _Optional[_Union[StringOrStringList, _Mapping]] = ..., label: _Optional[_Union[StringOrStringList, _Mapping]] = ..., label_font_color: _Optional[_Union[StringOrStringList, _Mapping]] = ..., min_size: _Optional[_Union[DoubleOrDoubleList, _Mapping]] = ..., border_width: _Optional[_Union[DoubleOrNullableDoubleList, _Mapping]] = ..., hovered_border_width: _Optional[_Union[DoubleOrNullableDoubleList, _Mapping]] = ..., image_url: _Optional[_Union[StringOrNullableStringList, _Mapping]] = ..., show_label_when_image_loaded: _Optional[_Union[BoolOrNullableBoolList, _Mapping]] = ...) -> None: ...

class TimescaleMark(_message.Message):
    __slots__ = ("id", "color", "label", "time", "tooltip", "shape")
    ID_FIELD_NUMBER: _ClassVar[int]
    COLOR_FIELD_NUMBER: _ClassVar[int]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    TIME_FIELD_NUMBER: _ClassVar[int]
    TOOLTIP_FIELD_NUMBER: _ClassVar[int]
    SHAPE_FIELD_NUMBER: _ClassVar[int]
    id: MarkId
    color: str
    label: str
    time: int
    tooltip: str
    shape: TimescaleMarkShape
    def __init__(self, id: _Optional[_Union[MarkId, _Mapping]] = ..., color: _Optional[str] = ..., label: _Optional[str] = ..., time: _Optional[int] = ..., tooltip: _Optional[str] = ..., shape: _Optional[_Union[TimescaleMarkShape, str]] = ...) -> None: ...

class GetTimescaleMarksRequest(_message.Message):
    __slots__ = ("symbol", "to", "resolution")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    FROM_FIELD_NUMBER: _ClassVar[int]
    TO_FIELD_NUMBER: _ClassVar[int]
    RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    to: int
    resolution: str
    def __init__(self, symbol: _Optional[str] = ..., to: _Optional[int] = ..., resolution: _Optional[str] = ..., **kwargs) -> None: ...

class GetTimescaleMarksResponse(_message.Message):
    __slots__ = ("marks",)
    MARKS_FIELD_NUMBER: _ClassVar[int]
    marks: _containers.RepeatedCompositeFieldContainer[TimescaleMark]
    def __init__(self, marks: _Optional[_Iterable[_Union[TimescaleMark, _Mapping]]] = ...) -> None: ...

class ResolveSymbolRequest(_message.Message):
    __slots__ = ("symbol", "currency_code", "unit_id", "session")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    UNIT_ID_FIELD_NUMBER: _ClassVar[int]
    SESSION_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    currency_code: str
    unit_id: str
    session: str
    def __init__(self, symbol: _Optional[str] = ..., currency_code: _Optional[str] = ..., unit_id: _Optional[str] = ..., session: _Optional[str] = ...) -> None: ...

class ResolveSymbolResponse(_message.Message):
    __slots__ = ("symbol",)
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    symbol: LibrarySymbolInfo
    def __init__(self, symbol: _Optional[_Union[LibrarySymbolInfo, _Mapping]] = ...) -> None: ...

class GetSymbolGroupInfoRequest(_message.Message):
    __slots__ = ("group",)
    GROUP_FIELD_NUMBER: _ClassVar[int]
    group: str
    def __init__(self, group: _Optional[str] = ...) -> None: ...

class GetSymbolGroupInfoResponse(_message.Message):
    __slots__ = ("symbol", "description", "minmov", "pricescale", "type", "timezone", "exchange_listed", "exchange_traded", "minmov2", "fractional", "has_intraday", "has_daily", "has_weekly_and_monthly", "has_empty_bars", "visible_plots_set", "ticker", "session_regular", "session_holidays", "corrections", "supported_resolutions", "force_session_rebuild", "intraday_multipliers", "volume_precision")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    MINMOV_FIELD_NUMBER: _ClassVar[int]
    PRICESCALE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TIMEZONE_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_LISTED_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_TRADED_FIELD_NUMBER: _ClassVar[int]
    MINMOV2_FIELD_NUMBER: _ClassVar[int]
    FRACTIONAL_FIELD_NUMBER: _ClassVar[int]
    HAS_INTRADAY_FIELD_NUMBER: _ClassVar[int]
    HAS_DAILY_FIELD_NUMBER: _ClassVar[int]
    HAS_WEEKLY_AND_MONTHLY_FIELD_NUMBER: _ClassVar[int]
    HAS_EMPTY_BARS_FIELD_NUMBER: _ClassVar[int]
    VISIBLE_PLOTS_SET_FIELD_NUMBER: _ClassVar[int]
    TICKER_FIELD_NUMBER: _ClassVar[int]
    SESSION_REGULAR_FIELD_NUMBER: _ClassVar[int]
    SESSION_HOLIDAYS_FIELD_NUMBER: _ClassVar[int]
    CORRECTIONS_FIELD_NUMBER: _ClassVar[int]
    SUPPORTED_RESOLUTIONS_FIELD_NUMBER: _ClassVar[int]
    FORCE_SESSION_REBUILD_FIELD_NUMBER: _ClassVar[int]
    INTRADAY_MULTIPLIERS_FIELD_NUMBER: _ClassVar[int]
    VOLUME_PRECISION_FIELD_NUMBER: _ClassVar[int]
    symbol: _containers.RepeatedScalarFieldContainer[str]
    description: StringOrStringList
    minmov: DoubleOrDoubleList
    pricescale: DoubleOrDoubleList
    type: StringOrStringList
    timezone: StringOrStringList
    exchange_listed: StringOrStringList
    exchange_traded: StringOrStringList
    minmov2: DoubleOrDoubleList
    fractional: BoolOrBoolList
    has_intraday: BoolOrBoolList
    has_daily: BoolOrBoolList
    has_weekly_and_monthly: BoolOrBoolList
    has_empty_bars: BoolOrBoolList
    visible_plots_set: VisiblePlotsSetOrList
    ticker: StringOrStringList
    session_regular: StringOrStringList
    session_holidays: StringOrStringList
    corrections: StringOrStringList
    supported_resolutions: StringListOrStringListList
    force_session_rebuild: BoolOrBoolList
    intraday_multipliers: StringListOrStringListList
    volume_precision: DoubleOrDoubleList
    def __init__(self, symbol: _Optional[_Iterable[str]] = ..., description: _Optional[_Union[StringOrStringList, _Mapping]] = ..., minmov: _Optional[_Union[DoubleOrDoubleList, _Mapping]] = ..., pricescale: _Optional[_Union[DoubleOrDoubleList, _Mapping]] = ..., type: _Optional[_Union[StringOrStringList, _Mapping]] = ..., timezone: _Optional[_Union[StringOrStringList, _Mapping]] = ..., exchange_listed: _Optional[_Union[StringOrStringList, _Mapping]] = ..., exchange_traded: _Optional[_Union[StringOrStringList, _Mapping]] = ..., minmov2: _Optional[_Union[DoubleOrDoubleList, _Mapping]] = ..., fractional: _Optional[_Union[BoolOrBoolList, _Mapping]] = ..., has_intraday: _Optional[_Union[BoolOrBoolList, _Mapping]] = ..., has_daily: _Optional[_Union[BoolOrBoolList, _Mapping]] = ..., has_weekly_and_monthly: _Optional[_Union[BoolOrBoolList, _Mapping]] = ..., has_empty_bars: _Optional[_Union[BoolOrBoolList, _Mapping]] = ..., visible_plots_set: _Optional[_Union[VisiblePlotsSetOrList, _Mapping]] = ..., ticker: _Optional[_Union[StringOrStringList, _Mapping]] = ..., session_regular: _Optional[_Union[StringOrStringList, _Mapping]] = ..., session_holidays: _Optional[_Union[StringOrStringList, _Mapping]] = ..., corrections: _Optional[_Union[StringOrStringList, _Mapping]] = ..., supported_resolutions: _Optional[_Union[StringListOrStringListList, _Mapping]] = ..., force_session_rebuild: _Optional[_Union[BoolOrBoolList, _Mapping]] = ..., intraday_multipliers: _Optional[_Union[StringListOrStringListList, _Mapping]] = ..., volume_precision: _Optional[_Union[DoubleOrDoubleList, _Mapping]] = ...) -> None: ...

class SearchResultItem(_message.Message):
    __slots__ = ("symbol", "description", "exchange", "type", "ticker", "exchange_logo", "logo_urls")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    TICKER_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_LOGO_FIELD_NUMBER: _ClassVar[int]
    LOGO_URLS_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    description: str
    exchange: str
    type: str
    ticker: str
    exchange_logo: str
    logo_urls: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, symbol: _Optional[str] = ..., description: _Optional[str] = ..., exchange: _Optional[str] = ..., type: _Optional[str] = ..., ticker: _Optional[str] = ..., exchange_logo: _Optional[str] = ..., logo_urls: _Optional[_Iterable[str]] = ...) -> None: ...

class SearchSymbolsRequest(_message.Message):
    __slots__ = ("query", "type", "exchange", "limit")
    QUERY_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    query: str
    type: str
    exchange: str
    limit: int
    def __init__(self, query: _Optional[str] = ..., type: _Optional[str] = ..., exchange: _Optional[str] = ..., limit: _Optional[int] = ...) -> None: ...

class SearchSymbolsResponse(_message.Message):
    __slots__ = ("items",)
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[SearchResultItem]
    def __init__(self, items: _Optional[_Iterable[_Union[SearchResultItem, _Mapping]]] = ...) -> None: ...

class StreamBarsRequest(_message.Message):
    __slots__ = ("symbol_info", "resolution", "listener_guid")
    SYMBOL_INFO_FIELD_NUMBER: _ClassVar[int]
    RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    LISTENER_GUID_FIELD_NUMBER: _ClassVar[int]
    symbol_info: LibrarySymbolInfo
    resolution: str
    listener_guid: str
    def __init__(self, symbol_info: _Optional[_Union[LibrarySymbolInfo, _Mapping]] = ..., resolution: _Optional[str] = ..., listener_guid: _Optional[str] = ...) -> None: ...

class StreamBarsResponse(_message.Message):
    __slots__ = ("t", "c", "o", "h", "l", "v")
    T_FIELD_NUMBER: _ClassVar[int]
    C_FIELD_NUMBER: _ClassVar[int]
    O_FIELD_NUMBER: _ClassVar[int]
    H_FIELD_NUMBER: _ClassVar[int]
    L_FIELD_NUMBER: _ClassVar[int]
    V_FIELD_NUMBER: _ClassVar[int]
    t: _containers.RepeatedScalarFieldContainer[int]
    c: _containers.RepeatedScalarFieldContainer[float]
    o: _containers.RepeatedScalarFieldContainer[float]
    h: _containers.RepeatedScalarFieldContainer[float]
    l: _containers.RepeatedScalarFieldContainer[float]
    v: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, t: _Optional[_Iterable[int]] = ..., c: _Optional[_Iterable[float]] = ..., o: _Optional[_Iterable[float]] = ..., h: _Optional[_Iterable[float]] = ..., l: _Optional[_Iterable[float]] = ..., v: _Optional[_Iterable[float]] = ...) -> None: ...

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
    string_list: StringList
    number_list: DoubleList
    def __init__(self, string_value: _Optional[str] = ..., number_value: _Optional[float] = ..., bool_value: _Optional[bool] = ..., string_list: _Optional[_Union[StringList, _Mapping]] = ..., number_list: _Optional[_Union[DoubleList, _Mapping]] = ...) -> None: ...

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
    sort_order: SortOrder
    def __init__(self, sort_by: _Optional[str] = ..., sort_order: _Optional[_Union[SortOrder, str]] = ...) -> None: ...

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
