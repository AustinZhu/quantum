from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from collections.abc import Iterable as _Iterable, Mapping as _Mapping
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PlaceOrderRequest(_message.Message):
    __slots__ = ("symbol", "side", "quantity", "order_type", "limit_price", "account_id")
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    ORDER_TYPE_FIELD_NUMBER: _ClassVar[int]
    LIMIT_PRICE_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_ID_FIELD_NUMBER: _ClassVar[int]
    symbol: str
    side: str
    quantity: float
    order_type: str
    limit_price: float
    account_id: str
    def __init__(self, symbol: _Optional[str] = ..., side: _Optional[str] = ..., quantity: _Optional[float] = ..., order_type: _Optional[str] = ..., limit_price: _Optional[float] = ..., account_id: _Optional[str] = ...) -> None: ...

class PlaceOrderResponse(_message.Message):
    __slots__ = ("order_id", "status")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    status: str
    def __init__(self, order_id: _Optional[str] = ..., status: _Optional[str] = ...) -> None: ...

class GetOrderRequest(_message.Message):
    __slots__ = ("order_id",)
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    def __init__(self, order_id: _Optional[str] = ...) -> None: ...

class GetOrderResponse(_message.Message):
    __slots__ = ("order_id", "status", "symbol", "side", "quantity", "account_id")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_ID_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    status: str
    symbol: str
    side: str
    quantity: float
    account_id: str
    def __init__(self, order_id: _Optional[str] = ..., status: _Optional[str] = ..., symbol: _Optional[str] = ..., side: _Optional[str] = ..., quantity: _Optional[float] = ..., account_id: _Optional[str] = ...) -> None: ...

class ListOrdersRequest(_message.Message):
    __slots__ = ("account_id", "limit")
    ACCOUNT_ID_FIELD_NUMBER: _ClassVar[int]
    LIMIT_FIELD_NUMBER: _ClassVar[int]
    account_id: str
    limit: int
    def __init__(self, account_id: _Optional[str] = ..., limit: _Optional[int] = ...) -> None: ...

class ListOrdersResponse(_message.Message):
    __slots__ = ("orders",)
    ORDERS_FIELD_NUMBER: _ClassVar[int]
    orders: _containers.RepeatedCompositeFieldContainer[GetOrderResponse]
    def __init__(self, orders: _Optional[_Iterable[_Union[GetOrderResponse, _Mapping]]] = ...) -> None: ...

class EvaluateRiskRequest(_message.Message):
    __slots__ = ("order_id", "account_id", "symbol", "side", "quantity")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    ACCOUNT_ID_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    SIDE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    account_id: str
    symbol: str
    side: str
    quantity: float
    def __init__(self, order_id: _Optional[str] = ..., account_id: _Optional[str] = ..., symbol: _Optional[str] = ..., side: _Optional[str] = ..., quantity: _Optional[float] = ...) -> None: ...

class EvaluateRiskResponse(_message.Message):
    __slots__ = ("decision_id", "verdict", "reasons")
    DECISION_ID_FIELD_NUMBER: _ClassVar[int]
    VERDICT_FIELD_NUMBER: _ClassVar[int]
    REASONS_FIELD_NUMBER: _ClassVar[int]
    decision_id: str
    verdict: str
    reasons: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, decision_id: _Optional[str] = ..., verdict: _Optional[str] = ..., reasons: _Optional[_Iterable[str]] = ...) -> None: ...

class UpsertRuleRequest(_message.Message):
    __slots__ = ("rule_id", "version", "drl", "enabled")
    RULE_ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    DRL_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    rule_id: str
    version: str
    drl: str
    enabled: bool
    def __init__(self, rule_id: _Optional[str] = ..., version: _Optional[str] = ..., drl: _Optional[str] = ..., enabled: _Optional[bool] = ...) -> None: ...

class UpsertRuleResponse(_message.Message):
    __slots__ = ("rule_id", "version")
    RULE_ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    rule_id: str
    version: str
    def __init__(self, rule_id: _Optional[str] = ..., version: _Optional[str] = ...) -> None: ...

class RuleVersion(_message.Message):
    __slots__ = ("rule_id", "version", "enabled", "updated_ts_ms")
    RULE_ID_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    ENABLED_FIELD_NUMBER: _ClassVar[int]
    UPDATED_TS_MS_FIELD_NUMBER: _ClassVar[int]
    rule_id: str
    version: str
    enabled: bool
    updated_ts_ms: int
    def __init__(self, rule_id: _Optional[str] = ..., version: _Optional[str] = ..., enabled: _Optional[bool] = ..., updated_ts_ms: _Optional[int] = ...) -> None: ...

class ListRulesRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class ListRulesResponse(_message.Message):
    __slots__ = ("rules",)
    RULES_FIELD_NUMBER: _ClassVar[int]
    rules: _containers.RepeatedCompositeFieldContainer[RuleVersion]
    def __init__(self, rules: _Optional[_Iterable[_Union[RuleVersion, _Mapping]]] = ...) -> None: ...
