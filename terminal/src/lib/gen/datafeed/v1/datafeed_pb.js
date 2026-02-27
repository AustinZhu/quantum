// source: datafeed/v1/datafeed.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = globalThis;

var buf_validate_validate_pb = require('../../buf/validate/validate_pb.js');
goog.object.extend(proto, buf_validate_validate_pb);
var gnostic_openapi_v3_annotations_pb = require('../../gnostic/openapi/v3/annotations_pb.js');
goog.object.extend(proto, gnostic_openapi_v3_annotations_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.quant.datafeed.v1.Bar', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.BoolList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.BoolOrBoolList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.BoolOrBoolList.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.BoolOrNullableBoolList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.BoolOrNullableBoolList.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.CurrencyCodeEntry', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.CurrencyCodeEntry.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.CurrencyItem', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.DataStatus', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.DoubleList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.DoubleOrDoubleList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.DoubleOrDoubleList.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.DoubleOrNullableDoubleList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.DoubleOrNullableDoubleList.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ExchangeDescriptor', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetConfigRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetConfigResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetHistoryError', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetHistoryNoData', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetHistoryOk', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetHistoryRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetHistoryResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetHistoryResponse.ResultCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetMarksRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetMarksResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetQuotesError', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetQuotesOk', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetQuotesRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetQuotesResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetQuotesResponse.ResultCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetSymbolGroupInfoRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetSymbolGroupInfoResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetTimeRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetTimeResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetTimescaleMarksRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.GetTimescaleMarksResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.IngestTicksRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.IngestTicksResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.Int64List', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.Int64OrInt64List', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.Int64OrInt64List.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.LibrarySymbolInfo', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ListNewsRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ListNewsResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ListSocialRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ListSocialResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ListSymbolsRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ListSymbolsResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.MarkId', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.MarkId.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.NewsEvent', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.NullableBoolList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.NullableDoubleList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.NullableStringList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.QueryBarsRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.QueryBarsResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.QuoteData', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.QuoteValues', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ReplayTicksRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ReplayTicksResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ResolveSymbolRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ResolveSymbolResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScanSymbolRow', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScanSymbolsRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScanSymbolsResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerFilter', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerFilterExpression', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerFilterGroup', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerFilterNode', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerFilterOperation', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerFilterValue', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerFilterValue.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerLogicalOperator', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerOptions', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerRange', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.ScannerSort', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SearchResultItem', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SearchSymbolsRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SearchSymbolsResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SeriesFormat', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SocialEvent', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SortOrder', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StreamBarsRequest', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StreamBarsResponse', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StringList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StringListList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StringListOrStringListList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StringListOrStringListList.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StringOrNullableStringList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StringOrNullableStringList.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StringOrStringList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.StringOrStringList.ValueCase', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SubsessionInfo', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SymbolPriceSource', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.SymbolTypeDescriptor', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.Tick', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.TimescaleMark', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.TimescaleMarkShape', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.UnitItem', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.UnitList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.VisiblePlotsSet', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.VisiblePlotsSetList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.VisiblePlotsSetOrList', null, global);
goog.exportSymbol('proto.quant.datafeed.v1.VisiblePlotsSetOrList.ValueCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.StringList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.StringList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.StringList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.StringList.displayName = 'proto.quant.datafeed.v1.StringList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.StringListList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.StringListList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.StringListList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.StringListList.displayName = 'proto.quant.datafeed.v1.StringListList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.DoubleList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.DoubleList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.DoubleList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.DoubleList.displayName = 'proto.quant.datafeed.v1.DoubleList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.Int64List = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.Int64List.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.Int64List, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.Int64List.displayName = 'proto.quant.datafeed.v1.Int64List';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.BoolList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.BoolList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.BoolList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.BoolList.displayName = 'proto.quant.datafeed.v1.BoolList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.NullableStringList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.NullableStringList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.NullableStringList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.NullableStringList.displayName = 'proto.quant.datafeed.v1.NullableStringList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.NullableDoubleList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.NullableDoubleList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.NullableDoubleList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.NullableDoubleList.displayName = 'proto.quant.datafeed.v1.NullableDoubleList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.NullableBoolList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.NullableBoolList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.NullableBoolList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.NullableBoolList.displayName = 'proto.quant.datafeed.v1.NullableBoolList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.StringOrStringList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.StringOrStringList.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.StringOrStringList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.StringOrStringList.displayName = 'proto.quant.datafeed.v1.StringOrStringList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.StringListOrStringListList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.StringListOrStringListList.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.StringListOrStringListList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.StringListOrStringListList.displayName = 'proto.quant.datafeed.v1.StringListOrStringListList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.DoubleOrDoubleList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.DoubleOrDoubleList.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.DoubleOrDoubleList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.DoubleOrDoubleList.displayName = 'proto.quant.datafeed.v1.DoubleOrDoubleList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.Int64OrInt64List = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.Int64OrInt64List.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.Int64OrInt64List, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.Int64OrInt64List.displayName = 'proto.quant.datafeed.v1.Int64OrInt64List';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.BoolOrBoolList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.BoolOrBoolList.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.BoolOrBoolList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.BoolOrBoolList.displayName = 'proto.quant.datafeed.v1.BoolOrBoolList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.StringOrNullableStringList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.StringOrNullableStringList.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.StringOrNullableStringList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.StringOrNullableStringList.displayName = 'proto.quant.datafeed.v1.StringOrNullableStringList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.DoubleOrNullableDoubleList.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.DoubleOrNullableDoubleList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.DoubleOrNullableDoubleList.displayName = 'proto.quant.datafeed.v1.DoubleOrNullableDoubleList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.BoolOrNullableBoolList.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.BoolOrNullableBoolList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.BoolOrNullableBoolList.displayName = 'proto.quant.datafeed.v1.BoolOrNullableBoolList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.VisiblePlotsSetList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.VisiblePlotsSetList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.VisiblePlotsSetList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.VisiblePlotsSetList.displayName = 'proto.quant.datafeed.v1.VisiblePlotsSetList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.VisiblePlotsSetOrList.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.VisiblePlotsSetOrList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.VisiblePlotsSetOrList.displayName = 'proto.quant.datafeed.v1.VisiblePlotsSetOrList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.SymbolPriceSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.SymbolPriceSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.SymbolPriceSource.displayName = 'proto.quant.datafeed.v1.SymbolPriceSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.SubsessionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.SubsessionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.SubsessionInfo.displayName = 'proto.quant.datafeed.v1.SubsessionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.LibrarySymbolInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.LibrarySymbolInfo.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.LibrarySymbolInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.LibrarySymbolInfo.displayName = 'proto.quant.datafeed.v1.LibrarySymbolInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ListSymbolsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ListSymbolsRequest.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ListSymbolsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ListSymbolsRequest.displayName = 'proto.quant.datafeed.v1.ListSymbolsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ListSymbolsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ListSymbolsResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ListSymbolsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ListSymbolsResponse.displayName = 'proto.quant.datafeed.v1.ListSymbolsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ExchangeDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ExchangeDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ExchangeDescriptor.displayName = 'proto.quant.datafeed.v1.ExchangeDescriptor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.SymbolTypeDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.SymbolTypeDescriptor.displayName = 'proto.quant.datafeed.v1.SymbolTypeDescriptor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.CurrencyItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.CurrencyItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.CurrencyItem.displayName = 'proto.quant.datafeed.v1.CurrencyItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.CurrencyCodeEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.CurrencyCodeEntry.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.CurrencyCodeEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.CurrencyCodeEntry.displayName = 'proto.quant.datafeed.v1.CurrencyCodeEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.UnitItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.UnitItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.UnitItem.displayName = 'proto.quant.datafeed.v1.UnitItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.UnitList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.UnitList.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.UnitList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.UnitList.displayName = 'proto.quant.datafeed.v1.UnitList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetConfigRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetConfigRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetConfigRequest.displayName = 'proto.quant.datafeed.v1.GetConfigRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetConfigResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.GetConfigResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.GetConfigResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetConfigResponse.displayName = 'proto.quant.datafeed.v1.GetConfigResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetTimeRequest.displayName = 'proto.quant.datafeed.v1.GetTimeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetTimeResponse.displayName = 'proto.quant.datafeed.v1.GetTimeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetHistoryRequest.displayName = 'proto.quant.datafeed.v1.GetHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetHistoryOk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.GetHistoryOk.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.GetHistoryOk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetHistoryOk.displayName = 'proto.quant.datafeed.v1.GetHistoryOk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetHistoryNoData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetHistoryNoData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetHistoryNoData.displayName = 'proto.quant.datafeed.v1.GetHistoryNoData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetHistoryError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetHistoryError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetHistoryError.displayName = 'proto.quant.datafeed.v1.GetHistoryError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.GetHistoryResponse.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.GetHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetHistoryResponse.displayName = 'proto.quant.datafeed.v1.GetHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.QuoteValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.QuoteValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.QuoteValues.displayName = 'proto.quant.datafeed.v1.QuoteValues';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.QuoteData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.QuoteData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.QuoteData.displayName = 'proto.quant.datafeed.v1.QuoteData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetQuotesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetQuotesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetQuotesRequest.displayName = 'proto.quant.datafeed.v1.GetQuotesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetQuotesOk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.GetQuotesOk.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.GetQuotesOk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetQuotesOk.displayName = 'proto.quant.datafeed.v1.GetQuotesOk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetQuotesError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetQuotesError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetQuotesError.displayName = 'proto.quant.datafeed.v1.GetQuotesError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetQuotesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.GetQuotesResponse.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.GetQuotesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetQuotesResponse.displayName = 'proto.quant.datafeed.v1.GetQuotesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.MarkId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.MarkId.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.MarkId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.MarkId.displayName = 'proto.quant.datafeed.v1.MarkId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetMarksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetMarksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetMarksRequest.displayName = 'proto.quant.datafeed.v1.GetMarksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetMarksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.GetMarksResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.GetMarksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetMarksResponse.displayName = 'proto.quant.datafeed.v1.GetMarksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.TimescaleMark = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.TimescaleMark, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.TimescaleMark.displayName = 'proto.quant.datafeed.v1.TimescaleMark';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetTimescaleMarksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetTimescaleMarksRequest.displayName = 'proto.quant.datafeed.v1.GetTimescaleMarksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.GetTimescaleMarksResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.GetTimescaleMarksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetTimescaleMarksResponse.displayName = 'proto.quant.datafeed.v1.GetTimescaleMarksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ResolveSymbolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ResolveSymbolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ResolveSymbolRequest.displayName = 'proto.quant.datafeed.v1.ResolveSymbolRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ResolveSymbolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ResolveSymbolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ResolveSymbolResponse.displayName = 'proto.quant.datafeed.v1.ResolveSymbolResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.GetSymbolGroupInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.displayName = 'proto.quant.datafeed.v1.GetSymbolGroupInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.GetSymbolGroupInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.displayName = 'proto.quant.datafeed.v1.GetSymbolGroupInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.SearchResultItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.SearchResultItem.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.SearchResultItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.SearchResultItem.displayName = 'proto.quant.datafeed.v1.SearchResultItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.SearchSymbolsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.SearchSymbolsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.SearchSymbolsRequest.displayName = 'proto.quant.datafeed.v1.SearchSymbolsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.SearchSymbolsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.SearchSymbolsResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.SearchSymbolsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.SearchSymbolsResponse.displayName = 'proto.quant.datafeed.v1.SearchSymbolsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.StreamBarsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.StreamBarsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.StreamBarsRequest.displayName = 'proto.quant.datafeed.v1.StreamBarsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.StreamBarsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.StreamBarsResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.StreamBarsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.StreamBarsResponse.displayName = 'proto.quant.datafeed.v1.StreamBarsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScannerFilterValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_);
};
goog.inherits(proto.quant.datafeed.v1.ScannerFilterValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScannerFilterValue.displayName = 'proto.quant.datafeed.v1.ScannerFilterValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScannerFilterExpression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ScannerFilterExpression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScannerFilterExpression.displayName = 'proto.quant.datafeed.v1.ScannerFilterExpression';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScannerFilterNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ScannerFilterNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScannerFilterNode.displayName = 'proto.quant.datafeed.v1.ScannerFilterNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScannerFilterGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ScannerFilterGroup.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ScannerFilterGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScannerFilterGroup.displayName = 'proto.quant.datafeed.v1.ScannerFilterGroup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScannerFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ScannerFilter.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ScannerFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScannerFilter.displayName = 'proto.quant.datafeed.v1.ScannerFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScannerSort = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ScannerSort, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScannerSort.displayName = 'proto.quant.datafeed.v1.ScannerSort';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScannerRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ScannerRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScannerRange.displayName = 'proto.quant.datafeed.v1.ScannerRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScannerOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ScannerOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScannerOptions.displayName = 'proto.quant.datafeed.v1.ScannerOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScanSymbolsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ScanSymbolsRequest.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ScanSymbolsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScanSymbolsRequest.displayName = 'proto.quant.datafeed.v1.ScanSymbolsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScanSymbolRow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ScanSymbolRow.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ScanSymbolRow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScanSymbolRow.displayName = 'proto.quant.datafeed.v1.ScanSymbolRow';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ScanSymbolsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ScanSymbolsResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ScanSymbolsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ScanSymbolsResponse.displayName = 'proto.quant.datafeed.v1.ScanSymbolsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.Tick = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.Tick, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.Tick.displayName = 'proto.quant.datafeed.v1.Tick';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.IngestTicksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.IngestTicksRequest.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.IngestTicksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.IngestTicksRequest.displayName = 'proto.quant.datafeed.v1.IngestTicksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.IngestTicksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.IngestTicksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.IngestTicksResponse.displayName = 'proto.quant.datafeed.v1.IngestTicksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ReplayTicksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ReplayTicksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ReplayTicksRequest.displayName = 'proto.quant.datafeed.v1.ReplayTicksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ReplayTicksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ReplayTicksResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ReplayTicksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ReplayTicksResponse.displayName = 'proto.quant.datafeed.v1.ReplayTicksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.Bar = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.Bar, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.Bar.displayName = 'proto.quant.datafeed.v1.Bar';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.QueryBarsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.QueryBarsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.QueryBarsRequest.displayName = 'proto.quant.datafeed.v1.QueryBarsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.QueryBarsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.QueryBarsResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.QueryBarsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.QueryBarsResponse.displayName = 'proto.quant.datafeed.v1.QueryBarsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ListNewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ListNewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ListNewsRequest.displayName = 'proto.quant.datafeed.v1.ListNewsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.NewsEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.NewsEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.NewsEvent.displayName = 'proto.quant.datafeed.v1.NewsEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ListNewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ListNewsResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ListNewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ListNewsResponse.displayName = 'proto.quant.datafeed.v1.ListNewsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ListSocialRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.ListSocialRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ListSocialRequest.displayName = 'proto.quant.datafeed.v1.ListSocialRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.SocialEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.quant.datafeed.v1.SocialEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.SocialEvent.displayName = 'proto.quant.datafeed.v1.SocialEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.quant.datafeed.v1.ListSocialResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.quant.datafeed.v1.ListSocialResponse.repeatedFields_, null);
};
goog.inherits(proto.quant.datafeed.v1.ListSocialResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.quant.datafeed.v1.ListSocialResponse.displayName = 'proto.quant.datafeed.v1.ListSocialResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.StringList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.StringList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.StringList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.StringList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringList.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.StringList}
 */
proto.quant.datafeed.v1.StringList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.StringList;
  return proto.quant.datafeed.v1.StringList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.StringList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.StringList}
 */
proto.quant.datafeed.v1.StringList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.StringList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.StringList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.StringList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string values = 1;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.StringList.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.StringList} returns this
 */
proto.quant.datafeed.v1.StringList.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.StringList} returns this
 */
proto.quant.datafeed.v1.StringList.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.StringList} returns this
 */
proto.quant.datafeed.v1.StringList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.StringListList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.StringListList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.StringListList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.StringListList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringListList.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.quant.datafeed.v1.StringList.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.StringListList}
 */
proto.quant.datafeed.v1.StringListList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.StringListList;
  return proto.quant.datafeed.v1.StringListList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.StringListList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.StringListList}
 */
proto.quant.datafeed.v1.StringListList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.StringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringList.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.StringListList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.StringListList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.StringListList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringListList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.StringList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StringList values = 1;
 * @return {!Array<!proto.quant.datafeed.v1.StringList>}
 */
proto.quant.datafeed.v1.StringListList.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.StringList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.StringList, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.StringList>} value
 * @return {!proto.quant.datafeed.v1.StringListList} returns this
*/
proto.quant.datafeed.v1.StringListList.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.StringList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.StringList}
 */
proto.quant.datafeed.v1.StringListList.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.StringList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.StringListList} returns this
 */
proto.quant.datafeed.v1.StringListList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.DoubleList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.DoubleList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.DoubleList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.DoubleList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.DoubleList.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.DoubleList}
 */
proto.quant.datafeed.v1.DoubleList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.DoubleList;
  return proto.quant.datafeed.v1.DoubleList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.DoubleList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.DoubleList}
 */
proto.quant.datafeed.v1.DoubleList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      reader.readPackableDoubleInto(msg.getValuesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.DoubleList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.DoubleList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.DoubleList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.DoubleList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedDouble(
      1,
      f
    );
  }
};


/**
 * repeated double values = 1;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.DoubleList.prototype.getValuesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.DoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleList.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.DoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleList.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.DoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.Int64List.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.Int64List.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.Int64List.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.Int64List} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.Int64List.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.Int64List}
 */
proto.quant.datafeed.v1.Int64List.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.Int64List;
  return proto.quant.datafeed.v1.Int64List.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.Int64List} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.Int64List}
 */
proto.quant.datafeed.v1.Int64List.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      reader.readPackableInt64Into(msg.getValuesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.Int64List.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.Int64List.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.Int64List} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.Int64List.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 values = 1;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.Int64List.prototype.getValuesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.Int64List} returns this
 */
proto.quant.datafeed.v1.Int64List.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.Int64List} returns this
 */
proto.quant.datafeed.v1.Int64List.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.Int64List} returns this
 */
proto.quant.datafeed.v1.Int64List.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.BoolList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.BoolList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.BoolList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.BoolList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.BoolList.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: (f = jspb.Message.getRepeatedBooleanField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.BoolList}
 */
proto.quant.datafeed.v1.BoolList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.BoolList;
  return proto.quant.datafeed.v1.BoolList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.BoolList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.BoolList}
 */
proto.quant.datafeed.v1.BoolList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      reader.readPackableBoolInto(msg.getValuesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.BoolList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.BoolList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.BoolList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.BoolList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedBool(
      1,
      f
    );
  }
};


/**
 * repeated bool values = 1;
 * @return {!Array<boolean>}
 */
proto.quant.datafeed.v1.BoolList.prototype.getValuesList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 1));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.quant.datafeed.v1.BoolList} returns this
 */
proto.quant.datafeed.v1.BoolList.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.BoolList} returns this
 */
proto.quant.datafeed.v1.BoolList.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.BoolList} returns this
 */
proto.quant.datafeed.v1.BoolList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.NullableStringList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.NullableStringList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.NullableStringList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.NullableStringList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.NullableStringList.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    google_protobuf_wrappers_pb.StringValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.NullableStringList}
 */
proto.quant.datafeed.v1.NullableStringList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.NullableStringList;
  return proto.quant.datafeed.v1.NullableStringList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.NullableStringList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.NullableStringList}
 */
proto.quant.datafeed.v1.NullableStringList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.NullableStringList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.NullableStringList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.NullableStringList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.NullableStringList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.StringValue values = 1;
 * @return {!Array<!proto.google.protobuf.StringValue>}
 */
proto.quant.datafeed.v1.NullableStringList.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.google.protobuf.StringValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.StringValue>} value
 * @return {!proto.quant.datafeed.v1.NullableStringList} returns this
*/
proto.quant.datafeed.v1.NullableStringList.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.StringValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.StringValue}
 */
proto.quant.datafeed.v1.NullableStringList.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.StringValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.NullableStringList} returns this
 */
proto.quant.datafeed.v1.NullableStringList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.NullableDoubleList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.NullableDoubleList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.NullableDoubleList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.NullableDoubleList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.NullableDoubleList.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    google_protobuf_wrappers_pb.DoubleValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.NullableDoubleList}
 */
proto.quant.datafeed.v1.NullableDoubleList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.NullableDoubleList;
  return proto.quant.datafeed.v1.NullableDoubleList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.NullableDoubleList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.NullableDoubleList}
 */
proto.quant.datafeed.v1.NullableDoubleList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.NullableDoubleList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.NullableDoubleList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.NullableDoubleList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.NullableDoubleList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.DoubleValue values = 1;
 * @return {!Array<!proto.google.protobuf.DoubleValue>}
 */
proto.quant.datafeed.v1.NullableDoubleList.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.google.protobuf.DoubleValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.DoubleValue>} value
 * @return {!proto.quant.datafeed.v1.NullableDoubleList} returns this
*/
proto.quant.datafeed.v1.NullableDoubleList.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.DoubleValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.DoubleValue}
 */
proto.quant.datafeed.v1.NullableDoubleList.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.DoubleValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.NullableDoubleList} returns this
 */
proto.quant.datafeed.v1.NullableDoubleList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.NullableBoolList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.NullableBoolList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.NullableBoolList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.NullableBoolList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.NullableBoolList.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    google_protobuf_wrappers_pb.BoolValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.NullableBoolList}
 */
proto.quant.datafeed.v1.NullableBoolList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.NullableBoolList;
  return proto.quant.datafeed.v1.NullableBoolList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.NullableBoolList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.NullableBoolList}
 */
proto.quant.datafeed.v1.NullableBoolList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.NullableBoolList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.NullableBoolList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.NullableBoolList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.NullableBoolList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.BoolValue values = 1;
 * @return {!Array<!proto.google.protobuf.BoolValue>}
 */
proto.quant.datafeed.v1.NullableBoolList.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.google.protobuf.BoolValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.BoolValue>} value
 * @return {!proto.quant.datafeed.v1.NullableBoolList} returns this
*/
proto.quant.datafeed.v1.NullableBoolList.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.BoolValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.BoolValue}
 */
proto.quant.datafeed.v1.NullableBoolList.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.BoolValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.NullableBoolList} returns this
 */
proto.quant.datafeed.v1.NullableBoolList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.StringOrStringList.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.StringOrStringList.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.StringOrStringList.ValueCase}
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.StringOrStringList.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.StringOrStringList.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.StringOrStringList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.StringOrStringList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringOrStringList.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
many: (f = msg.getMany()) && proto.quant.datafeed.v1.StringList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.StringOrStringList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.StringOrStringList;
  return proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.StringOrStringList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.StringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringList.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.StringOrStringList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.StringList.serializeBinaryToWriter
    );
  }
};


/**
 * optional string single = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.getSingle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.StringOrStringList} returns this
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.setSingle = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.StringOrStringList.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.StringOrStringList} returns this
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.clearSingle = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.StringOrStringList.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StringList many = 2;
 * @return {?proto.quant.datafeed.v1.StringList}
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.StringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.StringList|undefined} value
 * @return {!proto.quant.datafeed.v1.StringOrStringList} returns this
*/
proto.quant.datafeed.v1.StringOrStringList.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.StringOrStringList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.StringOrStringList} returns this
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.StringOrStringList.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.StringListOrStringListList.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.StringListOrStringListList.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.StringListOrStringListList.ValueCase}
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.StringListOrStringListList.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.StringListOrStringListList.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.StringListOrStringListList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.StringListOrStringListList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringListOrStringListList.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = msg.getSingle()) && proto.quant.datafeed.v1.StringList.toObject(includeInstance, f),
many: (f = msg.getMany()) && proto.quant.datafeed.v1.StringListList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.StringListOrStringListList}
 */
proto.quant.datafeed.v1.StringListOrStringListList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.StringListOrStringListList;
  return proto.quant.datafeed.v1.StringListOrStringListList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.StringListOrStringListList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.StringListOrStringListList}
 */
proto.quant.datafeed.v1.StringListOrStringListList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.StringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringList.deserializeBinaryFromReader);
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.StringListList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringListList.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.StringListOrStringListList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.StringListOrStringListList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringListOrStringListList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSingle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quant.datafeed.v1.StringList.serializeBinaryToWriter
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.StringListList.serializeBinaryToWriter
    );
  }
};


/**
 * optional StringList single = 1;
 * @return {?proto.quant.datafeed.v1.StringList}
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.getSingle = function() {
  return /** @type{?proto.quant.datafeed.v1.StringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringList, 1));
};


/**
 * @param {?proto.quant.datafeed.v1.StringList|undefined} value
 * @return {!proto.quant.datafeed.v1.StringListOrStringListList} returns this
*/
proto.quant.datafeed.v1.StringListOrStringListList.prototype.setSingle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.quant.datafeed.v1.StringListOrStringListList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.StringListOrStringListList} returns this
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.clearSingle = function() {
  return this.setSingle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional StringListList many = 2;
 * @return {?proto.quant.datafeed.v1.StringListList}
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.StringListList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringListList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.StringListList|undefined} value
 * @return {!proto.quant.datafeed.v1.StringListOrStringListList} returns this
*/
proto.quant.datafeed.v1.StringListOrStringListList.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.StringListOrStringListList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.StringListOrStringListList} returns this
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.StringListOrStringListList.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.DoubleOrDoubleList.ValueCase}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.DoubleOrDoubleList.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.DoubleOrDoubleList.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.DoubleOrDoubleList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.DoubleOrDoubleList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
many: (f = msg.getMany()) && proto.quant.datafeed.v1.DoubleList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.DoubleOrDoubleList}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.DoubleOrDoubleList;
  return proto.quant.datafeed.v1.DoubleOrDoubleList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.DoubleOrDoubleList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.DoubleOrDoubleList}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.DoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleList.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.DoubleOrDoubleList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.DoubleOrDoubleList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.DoubleList.serializeBinaryToWriter
    );
  }
};


/**
 * optional double single = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.getSingle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.DoubleOrDoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.setSingle = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.DoubleOrDoubleList.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.DoubleOrDoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.clearSingle = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.DoubleOrDoubleList.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DoubleList many = 2;
 * @return {?proto.quant.datafeed.v1.DoubleList}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.DoubleOrDoubleList} returns this
*/
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.DoubleOrDoubleList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.DoubleOrDoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.DoubleOrDoubleList.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.Int64OrInt64List.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.Int64OrInt64List.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.Int64OrInt64List.ValueCase}
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.Int64OrInt64List.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.Int64OrInt64List.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.Int64OrInt64List.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.Int64OrInt64List} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.Int64OrInt64List.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
many: (f = msg.getMany()) && proto.quant.datafeed.v1.Int64List.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.Int64OrInt64List}
 */
proto.quant.datafeed.v1.Int64OrInt64List.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.Int64OrInt64List;
  return proto.quant.datafeed.v1.Int64OrInt64List.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.Int64OrInt64List} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.Int64OrInt64List}
 */
proto.quant.datafeed.v1.Int64OrInt64List.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.Int64List;
      reader.readMessage(value,proto.quant.datafeed.v1.Int64List.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.Int64OrInt64List.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.Int64OrInt64List} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.Int64OrInt64List.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.Int64List.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 single = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.getSingle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Int64OrInt64List} returns this
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.setSingle = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.Int64OrInt64List.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.Int64OrInt64List} returns this
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.clearSingle = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.Int64OrInt64List.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Int64List many = 2;
 * @return {?proto.quant.datafeed.v1.Int64List}
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.Int64List} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.Int64List, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.Int64List|undefined} value
 * @return {!proto.quant.datafeed.v1.Int64OrInt64List} returns this
*/
proto.quant.datafeed.v1.Int64OrInt64List.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.Int64OrInt64List.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.Int64OrInt64List} returns this
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.Int64OrInt64List.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.BoolOrBoolList.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.BoolOrBoolList.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.BoolOrBoolList.ValueCase}
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.BoolOrBoolList.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.BoolOrBoolList.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.BoolOrBoolList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.BoolOrBoolList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.BoolOrBoolList.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
many: (f = msg.getMany()) && proto.quant.datafeed.v1.BoolList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.BoolOrBoolList}
 */
proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.BoolOrBoolList;
  return proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.BoolOrBoolList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.BoolOrBoolList}
 */
proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.BoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.BoolList.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.BoolOrBoolList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.BoolOrBoolList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.BoolOrBoolList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.BoolList.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool single = 1;
 * @return {boolean}
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.getSingle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.BoolOrBoolList} returns this
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.setSingle = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.BoolOrBoolList.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.BoolOrBoolList} returns this
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.clearSingle = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.BoolOrBoolList.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BoolList many = 2;
 * @return {?proto.quant.datafeed.v1.BoolList}
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.BoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.BoolList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.BoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.BoolOrBoolList} returns this
*/
proto.quant.datafeed.v1.BoolOrBoolList.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.BoolOrBoolList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.BoolOrBoolList} returns this
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.BoolOrBoolList.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.StringOrNullableStringList.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.StringOrNullableStringList.ValueCase}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.StringOrNullableStringList.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.StringOrNullableStringList.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.StringOrNullableStringList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.StringOrNullableStringList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringOrNullableStringList.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
many: (f = msg.getMany()) && proto.quant.datafeed.v1.NullableStringList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.StringOrNullableStringList}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.StringOrNullableStringList;
  return proto.quant.datafeed.v1.StringOrNullableStringList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.StringOrNullableStringList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.StringOrNullableStringList}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.NullableStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.NullableStringList.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.StringOrNullableStringList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.StringOrNullableStringList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StringOrNullableStringList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.NullableStringList.serializeBinaryToWriter
    );
  }
};


/**
 * optional string single = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.getSingle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.StringOrNullableStringList} returns this
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.setSingle = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.StringOrNullableStringList.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.StringOrNullableStringList} returns this
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.clearSingle = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.StringOrNullableStringList.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NullableStringList many = 2;
 * @return {?proto.quant.datafeed.v1.NullableStringList}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.NullableStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.NullableStringList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.NullableStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.StringOrNullableStringList} returns this
*/
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.StringOrNullableStringList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.StringOrNullableStringList} returns this
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.StringOrNullableStringList.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.DoubleOrNullableDoubleList.ValueCase}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.DoubleOrNullableDoubleList.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.DoubleOrNullableDoubleList.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.DoubleOrNullableDoubleList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
many: (f = msg.getMany()) && proto.quant.datafeed.v1.NullableDoubleList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.DoubleOrNullableDoubleList;
  return proto.quant.datafeed.v1.DoubleOrNullableDoubleList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.NullableDoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.NullableDoubleList.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.DoubleOrNullableDoubleList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.NullableDoubleList.serializeBinaryToWriter
    );
  }
};


/**
 * optional double single = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.getSingle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.setSingle = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.DoubleOrNullableDoubleList.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.clearSingle = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.DoubleOrNullableDoubleList.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NullableDoubleList many = 2;
 * @return {?proto.quant.datafeed.v1.NullableDoubleList}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.NullableDoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.NullableDoubleList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.NullableDoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList} returns this
*/
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.DoubleOrNullableDoubleList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.DoubleOrNullableDoubleList} returns this
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.DoubleOrNullableDoubleList.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.BoolOrNullableBoolList.ValueCase}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.BoolOrNullableBoolList.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.BoolOrNullableBoolList.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.BoolOrNullableBoolList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.BoolOrNullableBoolList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
many: (f = msg.getMany()) && proto.quant.datafeed.v1.NullableBoolList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.BoolOrNullableBoolList}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.BoolOrNullableBoolList;
  return proto.quant.datafeed.v1.BoolOrNullableBoolList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.BoolOrNullableBoolList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.BoolOrNullableBoolList}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.NullableBoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.NullableBoolList.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.BoolOrNullableBoolList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.BoolOrNullableBoolList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.NullableBoolList.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool single = 1;
 * @return {boolean}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.getSingle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.BoolOrNullableBoolList} returns this
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.setSingle = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.BoolOrNullableBoolList.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.BoolOrNullableBoolList} returns this
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.clearSingle = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.BoolOrNullableBoolList.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NullableBoolList many = 2;
 * @return {?proto.quant.datafeed.v1.NullableBoolList}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.NullableBoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.NullableBoolList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.NullableBoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.BoolOrNullableBoolList} returns this
*/
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.BoolOrNullableBoolList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.BoolOrNullableBoolList} returns this
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.BoolOrNullableBoolList.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.VisiblePlotsSetList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSetList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.toObject = function(includeInstance, msg) {
  var f, obj = {
valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetList}
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.VisiblePlotsSetList;
  return proto.quant.datafeed.v1.VisiblePlotsSetList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSetList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetList}
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      reader.readPackableEnumInto(msg.getValuesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.VisiblePlotsSetList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSetList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated VisiblePlotsSet values = 1;
 * @return {!Array<!proto.quant.datafeed.v1.VisiblePlotsSet>}
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.prototype.getValuesList = function() {
  return /** @type {!Array<!proto.quant.datafeed.v1.VisiblePlotsSet>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.VisiblePlotsSet>} value
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetList} returns this
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSet} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetList} returns this
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetList} returns this
 */
proto.quant.datafeed.v1.VisiblePlotsSetList.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.ValueCase = {
  VALUE_NOT_SET: 0,
  SINGLE: 1,
  MANY: 2
};

/**
 * @return {proto.quant.datafeed.v1.VisiblePlotsSetOrList.ValueCase}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.VisiblePlotsSetOrList.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.VisiblePlotsSetOrList.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.VisiblePlotsSetOrList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSetOrList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.toObject = function(includeInstance, msg) {
  var f, obj = {
single: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
many: (f = msg.getMany()) && proto.quant.datafeed.v1.VisiblePlotsSetList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetOrList}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.VisiblePlotsSetOrList;
  return proto.quant.datafeed.v1.VisiblePlotsSetOrList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSetOrList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetOrList}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.quant.datafeed.v1.VisiblePlotsSet} */ (reader.readEnum());
      msg.setSingle(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.VisiblePlotsSetList;
      reader.readMessage(value,proto.quant.datafeed.v1.VisiblePlotsSetList.deserializeBinaryFromReader);
      msg.setMany(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.VisiblePlotsSetOrList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSetOrList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.quant.datafeed.v1.VisiblePlotsSet} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMany();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.VisiblePlotsSetList.serializeBinaryToWriter
    );
  }
};


/**
 * optional VisiblePlotsSet single = 1;
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSet}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.getSingle = function() {
  return /** @type {!proto.quant.datafeed.v1.VisiblePlotsSet} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSet} value
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetOrList} returns this
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.setSingle = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.VisiblePlotsSetOrList.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetOrList} returns this
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.clearSingle = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.VisiblePlotsSetOrList.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.hasSingle = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VisiblePlotsSetList many = 2;
 * @return {?proto.quant.datafeed.v1.VisiblePlotsSetList}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.getMany = function() {
  return /** @type{?proto.quant.datafeed.v1.VisiblePlotsSetList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.VisiblePlotsSetList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.VisiblePlotsSetList|undefined} value
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetOrList} returns this
*/
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.setMany = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.VisiblePlotsSetOrList.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSetOrList} returns this
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.clearMany = function() {
  return this.setMany(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.VisiblePlotsSetOrList.prototype.hasMany = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.SymbolPriceSource.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.SymbolPriceSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.SymbolPriceSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SymbolPriceSource.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.SymbolPriceSource}
 */
proto.quant.datafeed.v1.SymbolPriceSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.SymbolPriceSource;
  return proto.quant.datafeed.v1.SymbolPriceSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.SymbolPriceSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.SymbolPriceSource}
 */
proto.quant.datafeed.v1.SymbolPriceSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.SymbolPriceSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.SymbolPriceSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.SymbolPriceSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SymbolPriceSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.SymbolPriceSource.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SymbolPriceSource} returns this
 */
proto.quant.datafeed.v1.SymbolPriceSource.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.SymbolPriceSource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SymbolPriceSource} returns this
 */
proto.quant.datafeed.v1.SymbolPriceSource.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.SubsessionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.SubsessionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SubsessionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
session: jspb.Message.getFieldWithDefault(msg, 3, ""),
sessionCorrection: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
sessionDisplay: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.SubsessionInfo}
 */
proto.quant.datafeed.v1.SubsessionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.SubsessionInfo;
  return proto.quant.datafeed.v1.SubsessionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.SubsessionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.SubsessionInfo}
 */
proto.quant.datafeed.v1.SubsessionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSession(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSessionCorrection(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSessionDisplay(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.SubsessionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.SubsessionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SubsessionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SubsessionInfo} returns this
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SubsessionInfo} returns this
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string session = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SubsessionInfo} returns this
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.setSession = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string session_correction = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.getSessionCorrection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SubsessionInfo} returns this
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.setSessionCorrection = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.SubsessionInfo} returns this
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.clearSessionCorrection = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.hasSessionCorrection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string session_display = 5;
 * @return {string}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.getSessionDisplay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SubsessionInfo} returns this
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.setSessionDisplay = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.SubsessionInfo} returns this
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.clearSessionDisplay = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.SubsessionInfo.prototype.hasSessionDisplay = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.repeatedFields_ = [25,26,27,28,29,30,42,45,47,48,50];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.LibrarySymbolInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.LibrarySymbolInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
ticker: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
description: jspb.Message.getFieldWithDefault(msg, 3, ""),
type: jspb.Message.getFieldWithDefault(msg, 4, ""),
session: jspb.Message.getFieldWithDefault(msg, 5, ""),
sessionHolidays: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
sessionDisplay: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
corrections: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
timezone: jspb.Message.getFieldWithDefault(msg, 9, ""),
exchange: jspb.Message.getFieldWithDefault(msg, 10, ""),
listedExchange: jspb.Message.getFieldWithDefault(msg, 11, ""),
format: jspb.Message.getFieldWithDefault(msg, 12, 0),
minmov: jspb.Message.getFieldWithDefault(msg, 13, 0),
pricescale: jspb.Message.getFieldWithDefault(msg, 14, 0),
minmove2: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
fractional: (f = jspb.Message.getBooleanField(msg, 16)) == null ? undefined : f,
variableTickSize: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
hasIntraday: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
hasDaily: (f = jspb.Message.getBooleanField(msg, 19)) == null ? undefined : f,
hasWeeklyAndMonthly: (f = jspb.Message.getBooleanField(msg, 20)) == null ? undefined : f,
hasSeconds: (f = jspb.Message.getBooleanField(msg, 21)) == null ? undefined : f,
hasTicks: (f = jspb.Message.getBooleanField(msg, 22)) == null ? undefined : f,
hasEmptyBars: (f = jspb.Message.getBooleanField(msg, 23)) == null ? undefined : f,
buildSecondsFromTicks: (f = jspb.Message.getBooleanField(msg, 24)) == null ? undefined : f,
supportedResolutionsList: (f = jspb.Message.getRepeatedField(msg, 25)) == null ? undefined : f,
intradayMultipliersList: (f = jspb.Message.getRepeatedField(msg, 26)) == null ? undefined : f,
secondsMultipliersList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
dailyMultipliersList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
weeklyMultipliersList: (f = jspb.Message.getRepeatedField(msg, 29)) == null ? undefined : f,
monthlyMultipliersList: (f = jspb.Message.getRepeatedField(msg, 30)) == null ? undefined : f,
volumePrecision: (f = jspb.Message.getField(msg, 31)) == null ? undefined : f,
dataStatus: jspb.Message.getFieldWithDefault(msg, 32, 0),
delay: (f = jspb.Message.getField(msg, 33)) == null ? undefined : f,
expired: (f = jspb.Message.getBooleanField(msg, 34)) == null ? undefined : f,
expirationDate: (f = jspb.Message.getField(msg, 35)) == null ? undefined : f,
sector: (f = jspb.Message.getField(msg, 36)) == null ? undefined : f,
industry: (f = jspb.Message.getField(msg, 37)) == null ? undefined : f,
currencyCode: (f = jspb.Message.getField(msg, 38)) == null ? undefined : f,
originalCurrencyCode: (f = jspb.Message.getField(msg, 39)) == null ? undefined : f,
unitId: (f = jspb.Message.getField(msg, 40)) == null ? undefined : f,
originalUnitId: (f = jspb.Message.getField(msg, 41)) == null ? undefined : f,
unitConversionTypesList: (f = jspb.Message.getRepeatedField(msg, 42)) == null ? undefined : f,
visiblePlotsSet: jspb.Message.getFieldWithDefault(msg, 43, 0),
exchangeLogo: (f = jspb.Message.getField(msg, 44)) == null ? undefined : f,
logoUrlsList: (f = jspb.Message.getRepeatedField(msg, 45)) == null ? undefined : f,
longDescription: (f = jspb.Message.getField(msg, 46)) == null ? undefined : f,
baseNameList: (f = jspb.Message.getRepeatedField(msg, 47)) == null ? undefined : f,
priceSourcesList: jspb.Message.toObjectList(msg.getPriceSourcesList(),
    proto.quant.datafeed.v1.SymbolPriceSource.toObject, includeInstance),
priceSourceId: (f = jspb.Message.getField(msg, 49)) == null ? undefined : f,
subsessionsList: jspb.Message.toObjectList(msg.getSubsessionsList(),
    proto.quant.datafeed.v1.SubsessionInfo.toObject, includeInstance),
subsessionId: (f = jspb.Message.getField(msg, 51)) == null ? undefined : f,
libraryCustomFieldsMap: (f = msg.getLibraryCustomFieldsMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.LibrarySymbolInfo;
  return proto.quant.datafeed.v1.LibrarySymbolInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.LibrarySymbolInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTicker(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSession(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSessionHolidays(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSessionDisplay(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCorrections(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTimezone(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setExchange(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setListedExchange(value);
      break;
    case 12:
      var value = /** @type {!proto.quant.datafeed.v1.SeriesFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinmov(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPricescale(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinmove2(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFractional(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVariableTickSize(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasIntraday(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDaily(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasWeeklyAndMonthly(value);
      break;
    case 21:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSeconds(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasTicks(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasEmptyBars(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBuildSecondsFromTicks(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addSupportedResolutions(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addIntradayMultipliers(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addSecondsMultipliers(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addDailyMultipliers(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addWeeklyMultipliers(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addMonthlyMultipliers(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVolumePrecision(value);
      break;
    case 32:
      var value = /** @type {!proto.quant.datafeed.v1.DataStatus} */ (reader.readEnum());
      msg.setDataStatus(value);
      break;
    case 33:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDelay(value);
      break;
    case 34:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExpired(value);
      break;
    case 35:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpirationDate(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSector(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIndustry(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCurrencyCode(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOriginalCurrencyCode(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUnitId(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOriginalUnitId(value);
      break;
    case 42:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addUnitConversionTypes(value);
      break;
    case 43:
      var value = /** @type {!proto.quant.datafeed.v1.VisiblePlotsSet} */ (reader.readEnum());
      msg.setVisiblePlotsSet(value);
      break;
    case 44:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setExchangeLogo(value);
      break;
    case 45:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addLogoUrls(value);
      break;
    case 46:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLongDescription(value);
      break;
    case 47:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addBaseName(value);
      break;
    case 48:
      var value = new proto.quant.datafeed.v1.SymbolPriceSource;
      reader.readMessage(value,proto.quant.datafeed.v1.SymbolPriceSource.deserializeBinaryFromReader);
      msg.addPriceSources(value);
      break;
    case 49:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPriceSourceId(value);
      break;
    case 50:
      var value = new proto.quant.datafeed.v1.SubsessionInfo;
      reader.readMessage(value,proto.quant.datafeed.v1.SubsessionInfo.deserializeBinaryFromReader);
      msg.addSubsessions(value);
      break;
    case 51:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSubsessionId(value);
      break;
    case 52:
      var value = msg.getLibraryCustomFieldsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader, "", new proto.google.protobuf.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.LibrarySymbolInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.LibrarySymbolInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getListedExchange();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getMinmov();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getPricescale();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBool(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeBool(
      19,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeBool(
      21,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeBool(
      22,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeBool(
      23,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getSupportedResolutionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      25,
      f
    );
  }
  f = message.getIntradayMultipliersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      26,
      f
    );
  }
  f = message.getSecondsMultipliersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getDailyMultipliersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      28,
      f
    );
  }
  f = message.getWeeklyMultipliersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      29,
      f
    );
  }
  f = message.getMonthlyMultipliersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      30,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 31));
  if (f != null) {
    writer.writeInt32(
      31,
      f
    );
  }
  f = message.getDataStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      32,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 33));
  if (f != null) {
    writer.writeInt32(
      33,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 34));
  if (f != null) {
    writer.writeBool(
      34,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 35));
  if (f != null) {
    writer.writeInt64(
      35,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 36));
  if (f != null) {
    writer.writeString(
      36,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 37));
  if (f != null) {
    writer.writeString(
      37,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 38));
  if (f != null) {
    writer.writeString(
      38,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 39));
  if (f != null) {
    writer.writeString(
      39,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 40));
  if (f != null) {
    writer.writeString(
      40,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 41));
  if (f != null) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getUnitConversionTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      42,
      f
    );
  }
  f = message.getVisiblePlotsSet();
  if (f !== 0.0) {
    writer.writeEnum(
      43,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 44));
  if (f != null) {
    writer.writeString(
      44,
      f
    );
  }
  f = message.getLogoUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      45,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 46));
  if (f != null) {
    writer.writeString(
      46,
      f
    );
  }
  f = message.getBaseNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      47,
      f
    );
  }
  f = message.getPriceSourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      48,
      f,
      proto.quant.datafeed.v1.SymbolPriceSource.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 49));
  if (f != null) {
    writer.writeString(
      49,
      f
    );
  }
  f = message.getSubsessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      50,
      f,
      proto.quant.datafeed.v1.SubsessionInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 51));
  if (f != null) {
    writer.writeString(
      51,
      f
    );
  }
  f = message.getLibraryCustomFieldsMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getLibraryCustomFieldsMap(true),
    52,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.protobuf.Value.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ticker = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setTicker = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearTicker = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasTicker = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string session = 5;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setSession = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string session_holidays = 6;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getSessionHolidays = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setSessionHolidays = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearSessionHolidays = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasSessionHolidays = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string session_display = 7;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getSessionDisplay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setSessionDisplay = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearSessionDisplay = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasSessionDisplay = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string corrections = 8;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getCorrections = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setCorrections = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearCorrections = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasCorrections = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string timezone = 9;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string exchange = 10;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setExchange = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string listed_exchange = 11;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getListedExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setListedExchange = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional SeriesFormat format = 12;
 * @return {!proto.quant.datafeed.v1.SeriesFormat}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getFormat = function() {
  return /** @type {!proto.quant.datafeed.v1.SeriesFormat} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.SeriesFormat} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional int32 minmov = 13;
 * @return {number}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getMinmov = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setMinmov = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 pricescale = 14;
 * @return {number}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getPricescale = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setPricescale = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int32 minmove2 = 15;
 * @return {number}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getMinmove2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setMinmove2 = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearMinmove2 = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasMinmove2 = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bool fractional = 16;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getFractional = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setFractional = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearFractional = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasFractional = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string variable_tick_size = 17;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getVariableTickSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setVariableTickSize = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearVariableTickSize = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasVariableTickSize = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool has_intraday = 18;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getHasIntraday = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setHasIntraday = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearHasIntraday = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasHasIntraday = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional bool has_daily = 19;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getHasDaily = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setHasDaily = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearHasDaily = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasHasDaily = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool has_weekly_and_monthly = 20;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getHasWeeklyAndMonthly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setHasWeeklyAndMonthly = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearHasWeeklyAndMonthly = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasHasWeeklyAndMonthly = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional bool has_seconds = 21;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getHasSeconds = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 21, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setHasSeconds = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearHasSeconds = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasHasSeconds = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional bool has_ticks = 22;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getHasTicks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setHasTicks = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearHasTicks = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasHasTicks = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional bool has_empty_bars = 23;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getHasEmptyBars = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setHasEmptyBars = function(value) {
  return jspb.Message.setField(this, 23, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearHasEmptyBars = function() {
  return jspb.Message.setField(this, 23, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasHasEmptyBars = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional bool build_seconds_from_ticks = 24;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getBuildSecondsFromTicks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setBuildSecondsFromTicks = function(value) {
  return jspb.Message.setField(this, 24, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearBuildSecondsFromTicks = function() {
  return jspb.Message.setField(this, 24, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasBuildSecondsFromTicks = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * repeated string supported_resolutions = 25;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getSupportedResolutionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 25));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setSupportedResolutionsList = function(value) {
  return jspb.Message.setField(this, 25, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addSupportedResolutions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 25, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearSupportedResolutionsList = function() {
  return this.setSupportedResolutionsList([]);
};


/**
 * repeated string intraday_multipliers = 26;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getIntradayMultipliersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setIntradayMultipliersList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addIntradayMultipliers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearIntradayMultipliersList = function() {
  return this.setIntradayMultipliersList([]);
};


/**
 * repeated string seconds_multipliers = 27;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getSecondsMultipliersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setSecondsMultipliersList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addSecondsMultipliers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearSecondsMultipliersList = function() {
  return this.setSecondsMultipliersList([]);
};


/**
 * repeated string daily_multipliers = 28;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getDailyMultipliersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setDailyMultipliersList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addDailyMultipliers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearDailyMultipliersList = function() {
  return this.setDailyMultipliersList([]);
};


/**
 * repeated string weekly_multipliers = 29;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getWeeklyMultipliersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 29));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setWeeklyMultipliersList = function(value) {
  return jspb.Message.setField(this, 29, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addWeeklyMultipliers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 29, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearWeeklyMultipliersList = function() {
  return this.setWeeklyMultipliersList([]);
};


/**
 * repeated string monthly_multipliers = 30;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getMonthlyMultipliersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 30));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setMonthlyMultipliersList = function(value) {
  return jspb.Message.setField(this, 30, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addMonthlyMultipliers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 30, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearMonthlyMultipliersList = function() {
  return this.setMonthlyMultipliersList([]);
};


/**
 * optional int32 volume_precision = 31;
 * @return {number}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getVolumePrecision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setVolumePrecision = function(value) {
  return jspb.Message.setField(this, 31, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearVolumePrecision = function() {
  return jspb.Message.setField(this, 31, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasVolumePrecision = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional DataStatus data_status = 32;
 * @return {!proto.quant.datafeed.v1.DataStatus}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getDataStatus = function() {
  return /** @type {!proto.quant.datafeed.v1.DataStatus} */ (jspb.Message.getFieldWithDefault(this, 32, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.DataStatus} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setDataStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 32, value);
};


/**
 * optional int32 delay = 33;
 * @return {number}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getDelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setDelay = function(value) {
  return jspb.Message.setField(this, 33, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearDelay = function() {
  return jspb.Message.setField(this, 33, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasDelay = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional bool expired = 34;
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getExpired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 34, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setExpired = function(value) {
  return jspb.Message.setField(this, 34, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearExpired = function() {
  return jspb.Message.setField(this, 34, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasExpired = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional int64 expiration_date = 35;
 * @return {number}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getExpirationDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 35, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setExpirationDate = function(value) {
  return jspb.Message.setField(this, 35, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearExpirationDate = function() {
  return jspb.Message.setField(this, 35, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasExpirationDate = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional string sector = 36;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getSector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setSector = function(value) {
  return jspb.Message.setField(this, 36, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearSector = function() {
  return jspb.Message.setField(this, 36, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasSector = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional string industry = 37;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getIndustry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 37, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setIndustry = function(value) {
  return jspb.Message.setField(this, 37, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearIndustry = function() {
  return jspb.Message.setField(this, 37, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasIndustry = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional string currency_code = 38;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 38, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setField(this, 38, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearCurrencyCode = function() {
  return jspb.Message.setField(this, 38, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasCurrencyCode = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional string original_currency_code = 39;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getOriginalCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 39, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setOriginalCurrencyCode = function(value) {
  return jspb.Message.setField(this, 39, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearOriginalCurrencyCode = function() {
  return jspb.Message.setField(this, 39, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasOriginalCurrencyCode = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional string unit_id = 40;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getUnitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setUnitId = function(value) {
  return jspb.Message.setField(this, 40, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearUnitId = function() {
  return jspb.Message.setField(this, 40, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasUnitId = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional string original_unit_id = 41;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getOriginalUnitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setOriginalUnitId = function(value) {
  return jspb.Message.setField(this, 41, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearOriginalUnitId = function() {
  return jspb.Message.setField(this, 41, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasOriginalUnitId = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * repeated string unit_conversion_types = 42;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getUnitConversionTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 42));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setUnitConversionTypesList = function(value) {
  return jspb.Message.setField(this, 42, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addUnitConversionTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 42, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearUnitConversionTypesList = function() {
  return this.setUnitConversionTypesList([]);
};


/**
 * optional VisiblePlotsSet visible_plots_set = 43;
 * @return {!proto.quant.datafeed.v1.VisiblePlotsSet}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getVisiblePlotsSet = function() {
  return /** @type {!proto.quant.datafeed.v1.VisiblePlotsSet} */ (jspb.Message.getFieldWithDefault(this, 43, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.VisiblePlotsSet} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setVisiblePlotsSet = function(value) {
  return jspb.Message.setProto3EnumField(this, 43, value);
};


/**
 * optional string exchange_logo = 44;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getExchangeLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 44, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setExchangeLogo = function(value) {
  return jspb.Message.setField(this, 44, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearExchangeLogo = function() {
  return jspb.Message.setField(this, 44, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasExchangeLogo = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * repeated string logo_urls = 45;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getLogoUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 45));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setLogoUrlsList = function(value) {
  return jspb.Message.setField(this, 45, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addLogoUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 45, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearLogoUrlsList = function() {
  return this.setLogoUrlsList([]);
};


/**
 * optional string long_description = 46;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getLongDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 46, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setLongDescription = function(value) {
  return jspb.Message.setField(this, 46, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearLongDescription = function() {
  return jspb.Message.setField(this, 46, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasLongDescription = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * repeated string base_name = 47;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getBaseNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 47));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setBaseNameList = function(value) {
  return jspb.Message.setField(this, 47, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addBaseName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 47, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearBaseNameList = function() {
  return this.setBaseNameList([]);
};


/**
 * repeated SymbolPriceSource price_sources = 48;
 * @return {!Array<!proto.quant.datafeed.v1.SymbolPriceSource>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getPriceSourcesList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.SymbolPriceSource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.SymbolPriceSource, 48));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.SymbolPriceSource>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
*/
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setPriceSourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 48, value);
};


/**
 * @param {!proto.quant.datafeed.v1.SymbolPriceSource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.SymbolPriceSource}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addPriceSources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 48, opt_value, proto.quant.datafeed.v1.SymbolPriceSource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearPriceSourcesList = function() {
  return this.setPriceSourcesList([]);
};


/**
 * optional string price_source_id = 49;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getPriceSourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 49, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setPriceSourceId = function(value) {
  return jspb.Message.setField(this, 49, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearPriceSourceId = function() {
  return jspb.Message.setField(this, 49, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasPriceSourceId = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * repeated SubsessionInfo subsessions = 50;
 * @return {!Array<!proto.quant.datafeed.v1.SubsessionInfo>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getSubsessionsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.SubsessionInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.SubsessionInfo, 50));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.SubsessionInfo>} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
*/
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setSubsessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 50, value);
};


/**
 * @param {!proto.quant.datafeed.v1.SubsessionInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.SubsessionInfo}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.addSubsessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 50, opt_value, proto.quant.datafeed.v1.SubsessionInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearSubsessionsList = function() {
  return this.setSubsessionsList([]);
};


/**
 * optional string subsession_id = 51;
 * @return {string}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getSubsessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 51, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.setSubsessionId = function(value) {
  return jspb.Message.setField(this, 51, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearSubsessionId = function() {
  return jspb.Message.setField(this, 51, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.hasSubsessionId = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * map<string, google.protobuf.Value> library_custom_fields = 52;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.getLibraryCustomFieldsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 52, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo} returns this
 */
proto.quant.datafeed.v1.LibrarySymbolInfo.prototype.clearLibraryCustomFieldsMap = function() {
  this.getLibraryCustomFieldsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ListSymbolsRequest.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ListSymbolsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ListSymbolsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListSymbolsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
type: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
exchange: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
limit: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
offset: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
marketsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
symbolsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
includeExpired: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
sortBy: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
sortOrder: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ListSymbolsRequest;
  return proto.quant.datafeed.v1.ListSymbolsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ListSymbolsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setExchange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffset(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addMarkets(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addSymbols(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeExpired(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSortBy(value);
      break;
    case 10:
      var value = /** @type {!proto.quant.datafeed.v1.SortOrder} */ (reader.readEnum());
      msg.setSortOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ListSymbolsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ListSymbolsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListSymbolsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getSymbolsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSortOrder();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearQuery = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string exchange = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setExchange = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearExchange = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 offset = 5;
 * @return {number}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setOffset = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearOffset = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.hasOffset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string markets = 6;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getMarketsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setMarketsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.addMarkets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearMarketsList = function() {
  return this.setMarketsList([]);
};


/**
 * repeated string symbols = 7;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getSymbolsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setSymbolsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.addSymbols = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearSymbolsList = function() {
  return this.setSymbolsList([]);
};


/**
 * optional bool include_expired = 8;
 * @return {boolean}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getIncludeExpired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setIncludeExpired = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearIncludeExpired = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.hasIncludeExpired = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string sort_by = 9;
 * @return {string}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getSortBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setSortBy = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.clearSortBy = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.hasSortBy = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional SortOrder sort_order = 10;
 * @return {!proto.quant.datafeed.v1.SortOrder}
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.getSortOrder = function() {
  return /** @type {!proto.quant.datafeed.v1.SortOrder} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.SortOrder} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ListSymbolsRequest.prototype.setSortOrder = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ListSymbolsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ListSymbolsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ListSymbolsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ListSymbolsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListSymbolsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
totalCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
symbolsList: jspb.Message.toObjectList(msg.getSymbolsList(),
    proto.quant.datafeed.v1.LibrarySymbolInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ListSymbolsResponse}
 */
proto.quant.datafeed.v1.ListSymbolsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ListSymbolsResponse;
  return proto.quant.datafeed.v1.ListSymbolsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ListSymbolsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ListSymbolsResponse}
 */
proto.quant.datafeed.v1.ListSymbolsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.LibrarySymbolInfo;
      reader.readMessage(value,proto.quant.datafeed.v1.LibrarySymbolInfo.deserializeBinaryFromReader);
      msg.addSymbols(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ListSymbolsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ListSymbolsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ListSymbolsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListSymbolsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSymbolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quant.datafeed.v1.LibrarySymbolInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 total_count = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.ListSymbolsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsResponse} returns this
 */
proto.quant.datafeed.v1.ListSymbolsResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LibrarySymbolInfo symbols = 2;
 * @return {!Array<!proto.quant.datafeed.v1.LibrarySymbolInfo>}
 */
proto.quant.datafeed.v1.ListSymbolsResponse.prototype.getSymbolsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.LibrarySymbolInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.LibrarySymbolInfo, 2));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.LibrarySymbolInfo>} value
 * @return {!proto.quant.datafeed.v1.ListSymbolsResponse} returns this
*/
proto.quant.datafeed.v1.ListSymbolsResponse.prototype.setSymbolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quant.datafeed.v1.LibrarySymbolInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.LibrarySymbolInfo}
 */
proto.quant.datafeed.v1.ListSymbolsResponse.prototype.addSymbols = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quant.datafeed.v1.LibrarySymbolInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ListSymbolsResponse} returns this
 */
proto.quant.datafeed.v1.ListSymbolsResponse.prototype.clearSymbolsList = function() {
  return this.setSymbolsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ExchangeDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ExchangeDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ExchangeDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ExchangeDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
value: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
desc: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ExchangeDescriptor}
 */
proto.quant.datafeed.v1.ExchangeDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ExchangeDescriptor;
  return proto.quant.datafeed.v1.ExchangeDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ExchangeDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ExchangeDescriptor}
 */
proto.quant.datafeed.v1.ExchangeDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ExchangeDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ExchangeDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ExchangeDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ExchangeDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ExchangeDescriptor.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ExchangeDescriptor} returns this
 */
proto.quant.datafeed.v1.ExchangeDescriptor.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.ExchangeDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ExchangeDescriptor} returns this
 */
proto.quant.datafeed.v1.ExchangeDescriptor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string desc = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.ExchangeDescriptor.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ExchangeDescriptor} returns this
 */
proto.quant.datafeed.v1.ExchangeDescriptor.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.SymbolTypeDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.SymbolTypeDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.SymbolTypeDescriptor}
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.SymbolTypeDescriptor;
  return proto.quant.datafeed.v1.SymbolTypeDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.SymbolTypeDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.SymbolTypeDescriptor}
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.SymbolTypeDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.SymbolTypeDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SymbolTypeDescriptor} returns this
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SymbolTypeDescriptor} returns this
 */
proto.quant.datafeed.v1.SymbolTypeDescriptor.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.CurrencyItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.CurrencyItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.CurrencyItem.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
code: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.CurrencyItem}
 */
proto.quant.datafeed.v1.CurrencyItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.CurrencyItem;
  return proto.quant.datafeed.v1.CurrencyItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.CurrencyItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.CurrencyItem}
 */
proto.quant.datafeed.v1.CurrencyItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.CurrencyItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.CurrencyItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.CurrencyItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.CurrencyItem} returns this
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.CurrencyItem} returns this
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.CurrencyItem} returns this
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.CurrencyItem} returns this
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.CurrencyItem.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.ValueCase = {
  VALUE_NOT_SET: 0,
  CODE: 1,
  ITEM: 2
};

/**
 * @return {proto.quant.datafeed.v1.CurrencyCodeEntry.ValueCase}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.CurrencyCodeEntry.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.CurrencyCodeEntry.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.CurrencyCodeEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.CurrencyCodeEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
item: (f = msg.getItem()) && proto.quant.datafeed.v1.CurrencyItem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.CurrencyCodeEntry}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.CurrencyCodeEntry;
  return proto.quant.datafeed.v1.CurrencyCodeEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.CurrencyCodeEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.CurrencyCodeEntry}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.CurrencyItem;
      reader.readMessage(value,proto.quant.datafeed.v1.CurrencyItem.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.CurrencyCodeEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.CurrencyCodeEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.CurrencyItem.serializeBinaryToWriter
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.CurrencyCodeEntry} returns this
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.setCode = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.CurrencyCodeEntry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.CurrencyCodeEntry} returns this
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.clearCode = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.CurrencyCodeEntry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CurrencyItem item = 2;
 * @return {?proto.quant.datafeed.v1.CurrencyItem}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.getItem = function() {
  return /** @type{?proto.quant.datafeed.v1.CurrencyItem} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.CurrencyItem, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.CurrencyItem|undefined} value
 * @return {!proto.quant.datafeed.v1.CurrencyCodeEntry} returns this
*/
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.setItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.CurrencyCodeEntry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.CurrencyCodeEntry} returns this
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.CurrencyCodeEntry.prototype.hasItem = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.UnitItem.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.UnitItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.UnitItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.UnitItem.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
name: jspb.Message.getFieldWithDefault(msg, 2, ""),
description: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.UnitItem}
 */
proto.quant.datafeed.v1.UnitItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.UnitItem;
  return proto.quant.datafeed.v1.UnitItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.UnitItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.UnitItem}
 */
proto.quant.datafeed.v1.UnitItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.UnitItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.UnitItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.UnitItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.UnitItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.UnitItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.UnitItem} returns this
 */
proto.quant.datafeed.v1.UnitItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.UnitItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.UnitItem} returns this
 */
proto.quant.datafeed.v1.UnitItem.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.UnitItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.UnitItem} returns this
 */
proto.quant.datafeed.v1.UnitItem.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.UnitList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.UnitList.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.UnitList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.UnitList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.UnitList.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.quant.datafeed.v1.UnitItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.UnitList}
 */
proto.quant.datafeed.v1.UnitList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.UnitList;
  return proto.quant.datafeed.v1.UnitList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.UnitList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.UnitList}
 */
proto.quant.datafeed.v1.UnitList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.UnitItem;
      reader.readMessage(value,proto.quant.datafeed.v1.UnitItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.UnitList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.UnitList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.UnitList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.UnitList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.UnitItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UnitItem items = 1;
 * @return {!Array<!proto.quant.datafeed.v1.UnitItem>}
 */
proto.quant.datafeed.v1.UnitList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.UnitItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.UnitItem, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.UnitItem>} value
 * @return {!proto.quant.datafeed.v1.UnitList} returns this
*/
proto.quant.datafeed.v1.UnitList.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.UnitItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.UnitItem}
 */
proto.quant.datafeed.v1.UnitList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.UnitItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.UnitList} returns this
 */
proto.quant.datafeed.v1.UnitList.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetConfigRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetConfigRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetConfigRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetConfigRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetConfigRequest}
 */
proto.quant.datafeed.v1.GetConfigRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetConfigRequest;
  return proto.quant.datafeed.v1.GetConfigRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetConfigRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetConfigRequest}
 */
proto.quant.datafeed.v1.GetConfigRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetConfigRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetConfigRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetConfigRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetConfigRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.GetConfigResponse.repeatedFields_ = [1,7,8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetConfigResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetConfigResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetConfigResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
supportedResolutionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
supportsGroupRequest: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
supportsMarks: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
supportsSearch: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
supportsTimescaleMarks: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
supportsTime: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
exchangesList: jspb.Message.toObjectList(msg.getExchangesList(),
    proto.quant.datafeed.v1.ExchangeDescriptor.toObject, includeInstance),
symbolsTypesList: jspb.Message.toObjectList(msg.getSymbolsTypesList(),
    proto.quant.datafeed.v1.SymbolTypeDescriptor.toObject, includeInstance),
currencyCodesList: jspb.Message.toObjectList(msg.getCurrencyCodesList(),
    proto.quant.datafeed.v1.CurrencyCodeEntry.toObject, includeInstance),
unitsMap: (f = msg.getUnitsMap()) ? f.toObject(includeInstance, proto.quant.datafeed.v1.UnitList.toObject) : [],
symbolsGroupingMap: (f = msg.getSymbolsGroupingMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse}
 */
proto.quant.datafeed.v1.GetConfigResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetConfigResponse;
  return proto.quant.datafeed.v1.GetConfigResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetConfigResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse}
 */
proto.quant.datafeed.v1.GetConfigResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addSupportedResolutions(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsGroupRequest(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsMarks(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsSearch(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsTimescaleMarks(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsTime(value);
      break;
    case 7:
      var value = new proto.quant.datafeed.v1.ExchangeDescriptor;
      reader.readMessage(value,proto.quant.datafeed.v1.ExchangeDescriptor.deserializeBinaryFromReader);
      msg.addExchanges(value);
      break;
    case 8:
      var value = new proto.quant.datafeed.v1.SymbolTypeDescriptor;
      reader.readMessage(value,proto.quant.datafeed.v1.SymbolTypeDescriptor.deserializeBinaryFromReader);
      msg.addSymbolsTypes(value);
      break;
    case 9:
      var value = new proto.quant.datafeed.v1.CurrencyCodeEntry;
      reader.readMessage(value,proto.quant.datafeed.v1.CurrencyCodeEntry.deserializeBinaryFromReader);
      msg.addCurrencyCodes(value);
      break;
    case 10:
      var value = msg.getUnitsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.quant.datafeed.v1.UnitList.deserializeBinaryFromReader, "", new proto.quant.datafeed.v1.UnitList());
         });
      break;
    case 11:
      var value = msg.getSymbolsGroupingMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readStringRequireUtf8, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetConfigResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetConfigResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetConfigResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSupportedResolutionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getExchangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.quant.datafeed.v1.ExchangeDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getSymbolsTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.quant.datafeed.v1.SymbolTypeDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getCurrencyCodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.quant.datafeed.v1.CurrencyCodeEntry.serializeBinaryToWriter
    );
  }
  f = message.getUnitsMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getUnitsMap(true),
    10,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.quant.datafeed.v1.UnitList.serializeBinaryToWriter);
  }
  f = message.getSymbolsGroupingMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getSymbolsGroupingMap(true),
    11,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * repeated string supported_resolutions = 1;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getSupportedResolutionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.setSupportedResolutionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.addSupportedResolutions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearSupportedResolutionsList = function() {
  return this.setSupportedResolutionsList([]);
};


/**
 * optional bool supports_group_request = 2;
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getSupportsGroupRequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.setSupportsGroupRequest = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearSupportsGroupRequest = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.hasSupportsGroupRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool supports_marks = 3;
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getSupportsMarks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.setSupportsMarks = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearSupportsMarks = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.hasSupportsMarks = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool supports_search = 4;
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getSupportsSearch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.setSupportsSearch = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearSupportsSearch = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.hasSupportsSearch = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool supports_timescale_marks = 5;
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getSupportsTimescaleMarks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.setSupportsTimescaleMarks = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearSupportsTimescaleMarks = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.hasSupportsTimescaleMarks = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool supports_time = 6;
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getSupportsTime = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.setSupportsTime = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearSupportsTime = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.hasSupportsTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated ExchangeDescriptor exchanges = 7;
 * @return {!Array<!proto.quant.datafeed.v1.ExchangeDescriptor>}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getExchangesList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.ExchangeDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.ExchangeDescriptor, 7));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.ExchangeDescriptor>} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
*/
proto.quant.datafeed.v1.GetConfigResponse.prototype.setExchangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.quant.datafeed.v1.ExchangeDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.ExchangeDescriptor}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.addExchanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.quant.datafeed.v1.ExchangeDescriptor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearExchangesList = function() {
  return this.setExchangesList([]);
};


/**
 * repeated SymbolTypeDescriptor symbols_types = 8;
 * @return {!Array<!proto.quant.datafeed.v1.SymbolTypeDescriptor>}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getSymbolsTypesList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.SymbolTypeDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.SymbolTypeDescriptor, 8));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.SymbolTypeDescriptor>} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
*/
proto.quant.datafeed.v1.GetConfigResponse.prototype.setSymbolsTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.quant.datafeed.v1.SymbolTypeDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.SymbolTypeDescriptor}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.addSymbolsTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.quant.datafeed.v1.SymbolTypeDescriptor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearSymbolsTypesList = function() {
  return this.setSymbolsTypesList([]);
};


/**
 * repeated CurrencyCodeEntry currency_codes = 9;
 * @return {!Array<!proto.quant.datafeed.v1.CurrencyCodeEntry>}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getCurrencyCodesList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.CurrencyCodeEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.CurrencyCodeEntry, 9));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.CurrencyCodeEntry>} value
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
*/
proto.quant.datafeed.v1.GetConfigResponse.prototype.setCurrencyCodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.quant.datafeed.v1.CurrencyCodeEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.CurrencyCodeEntry}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.addCurrencyCodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.quant.datafeed.v1.CurrencyCodeEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearCurrencyCodesList = function() {
  return this.setCurrencyCodesList([]);
};


/**
 * map<string, UnitList> units = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.quant.datafeed.v1.UnitList>}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getUnitsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.quant.datafeed.v1.UnitList>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.quant.datafeed.v1.UnitList));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearUnitsMap = function() {
  this.getUnitsMap().clear();
  return this;
};


/**
 * map<string, string> symbols_grouping = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.getSymbolsGroupingMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.quant.datafeed.v1.GetConfigResponse} returns this
 */
proto.quant.datafeed.v1.GetConfigResponse.prototype.clearSymbolsGroupingMap = function() {
  this.getSymbolsGroupingMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetTimeRequest}
 */
proto.quant.datafeed.v1.GetTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetTimeRequest;
  return proto.quant.datafeed.v1.GetTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetTimeRequest}
 */
proto.quant.datafeed.v1.GetTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
unixTime: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetTimeResponse}
 */
proto.quant.datafeed.v1.GetTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetTimeResponse;
  return proto.quant.datafeed.v1.GetTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetTimeResponse}
 */
proto.quant.datafeed.v1.GetTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnixTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnixTime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 unix_time = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.GetTimeResponse.prototype.getUnixTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetTimeResponse} returns this
 */
proto.quant.datafeed.v1.GetTimeResponse.prototype.setUnixTime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
from: jspb.Message.getFieldWithDefault(msg, 2, 0),
to: jspb.Message.getFieldWithDefault(msg, 3, 0),
resolution: jspb.Message.getFieldWithDefault(msg, 4, ""),
countback: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetHistoryRequest}
 */
proto.quant.datafeed.v1.GetHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetHistoryRequest;
  return proto.quant.datafeed.v1.GetHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetHistoryRequest}
 */
proto.quant.datafeed.v1.GetHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setResolution(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCountback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTo();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getResolution();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCountback();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetHistoryRequest} returns this
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 from = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.getFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetHistoryRequest} returns this
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.setFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 to = 3;
 * @return {number}
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetHistoryRequest} returns this
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string resolution = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.getResolution = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetHistoryRequest} returns this
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.setResolution = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 countback = 5;
 * @return {number}
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.getCountback = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetHistoryRequest} returns this
 */
proto.quant.datafeed.v1.GetHistoryRequest.prototype.setCountback = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.GetHistoryOk.repeatedFields_ = [1,2,3,4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetHistoryOk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetHistoryOk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryOk.toObject = function(includeInstance, msg) {
  var f, obj = {
tList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
cList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
oList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
hList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
lList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f,
vList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetHistoryOk}
 */
proto.quant.datafeed.v1.GetHistoryOk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetHistoryOk;
  return proto.quant.datafeed.v1.GetHistoryOk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetHistoryOk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetHistoryOk}
 */
proto.quant.datafeed.v1.GetHistoryOk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      reader.readPackableInt64Into(msg.getTList());
      break;
    case 2:
      reader.readPackableDoubleInto(msg.getCList());
      break;
    case 3:
      reader.readPackableDoubleInto(msg.getOList());
      break;
    case 4:
      reader.readPackableDoubleInto(msg.getHList());
      break;
    case 5:
      reader.readPackableDoubleInto(msg.getLList());
      break;
    case 6:
      reader.readPackableDoubleInto(msg.getVList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetHistoryOk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetHistoryOk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryOk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getCList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
  f = message.getOList();
  if (f.length > 0) {
    writer.writePackedDouble(
      3,
      f
    );
  }
  f = message.getHList();
  if (f.length > 0) {
    writer.writePackedDouble(
      4,
      f
    );
  }
  f = message.getLList();
  if (f.length > 0) {
    writer.writePackedDouble(
      5,
      f
    );
  }
  f = message.getVList();
  if (f.length > 0) {
    writer.writePackedDouble(
      6,
      f
    );
  }
};


/**
 * repeated int64 t = 1;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.getTList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.setTList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.addT = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.clearTList = function() {
  return this.setTList([]);
};


/**
 * repeated double c = 2;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.getCList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.setCList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.addC = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.clearCList = function() {
  return this.setCList([]);
};


/**
 * repeated double o = 3;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.getOList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.setOList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.addO = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.clearOList = function() {
  return this.setOList([]);
};


/**
 * repeated double h = 4;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.getHList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.setHList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.addH = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.clearHList = function() {
  return this.setHList([]);
};


/**
 * repeated double l = 5;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.getLList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.setLList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.addL = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.clearLList = function() {
  return this.setLList([]);
};


/**
 * repeated double v = 6;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.getVList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.setVList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.addV = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetHistoryOk} returns this
 */
proto.quant.datafeed.v1.GetHistoryOk.prototype.clearVList = function() {
  return this.setVList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetHistoryNoData.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetHistoryNoData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetHistoryNoData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryNoData.toObject = function(includeInstance, msg) {
  var f, obj = {
nextTime: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetHistoryNoData}
 */
proto.quant.datafeed.v1.GetHistoryNoData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetHistoryNoData;
  return proto.quant.datafeed.v1.GetHistoryNoData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetHistoryNoData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetHistoryNoData}
 */
proto.quant.datafeed.v1.GetHistoryNoData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetHistoryNoData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetHistoryNoData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetHistoryNoData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryNoData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 next_time = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.GetHistoryNoData.prototype.getNextTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetHistoryNoData} returns this
 */
proto.quant.datafeed.v1.GetHistoryNoData.prototype.setNextTime = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetHistoryNoData} returns this
 */
proto.quant.datafeed.v1.GetHistoryNoData.prototype.clearNextTime = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetHistoryNoData.prototype.hasNextTime = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetHistoryError.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetHistoryError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetHistoryError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryError.toObject = function(includeInstance, msg) {
  var f, obj = {
errmsg: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetHistoryError}
 */
proto.quant.datafeed.v1.GetHistoryError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetHistoryError;
  return proto.quant.datafeed.v1.GetHistoryError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetHistoryError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetHistoryError}
 */
proto.quant.datafeed.v1.GetHistoryError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setErrmsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetHistoryError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetHistoryError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetHistoryError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrmsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string errmsg = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.GetHistoryError.prototype.getErrmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetHistoryError} returns this
 */
proto.quant.datafeed.v1.GetHistoryError.prototype.setErrmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.GetHistoryResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.GetHistoryResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  OK: 1,
  NO_DATA: 2,
  ERROR: 3
};

/**
 * @return {proto.quant.datafeed.v1.GetHistoryResponse.ResultCase}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.getResultCase = function() {
  return /** @type {proto.quant.datafeed.v1.GetHistoryResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.GetHistoryResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
ok: (f = msg.getOk()) && proto.quant.datafeed.v1.GetHistoryOk.toObject(includeInstance, f),
noData: (f = msg.getNoData()) && proto.quant.datafeed.v1.GetHistoryNoData.toObject(includeInstance, f),
error: (f = msg.getError()) && proto.quant.datafeed.v1.GetHistoryError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetHistoryResponse}
 */
proto.quant.datafeed.v1.GetHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetHistoryResponse;
  return proto.quant.datafeed.v1.GetHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetHistoryResponse}
 */
proto.quant.datafeed.v1.GetHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.GetHistoryOk;
      reader.readMessage(value,proto.quant.datafeed.v1.GetHistoryOk.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.GetHistoryNoData;
      reader.readMessage(value,proto.quant.datafeed.v1.GetHistoryNoData.deserializeBinaryFromReader);
      msg.setNoData(value);
      break;
    case 3:
      var value = new proto.quant.datafeed.v1.GetHistoryError;
      reader.readMessage(value,proto.quant.datafeed.v1.GetHistoryError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quant.datafeed.v1.GetHistoryOk.serializeBinaryToWriter
    );
  }
  f = message.getNoData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.GetHistoryNoData.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quant.datafeed.v1.GetHistoryError.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetHistoryOk ok = 1;
 * @return {?proto.quant.datafeed.v1.GetHistoryOk}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.getOk = function() {
  return /** @type{?proto.quant.datafeed.v1.GetHistoryOk} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.GetHistoryOk, 1));
};


/**
 * @param {?proto.quant.datafeed.v1.GetHistoryOk|undefined} value
 * @return {!proto.quant.datafeed.v1.GetHistoryResponse} returns this
*/
proto.quant.datafeed.v1.GetHistoryResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.quant.datafeed.v1.GetHistoryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetHistoryResponse} returns this
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetHistoryNoData no_data = 2;
 * @return {?proto.quant.datafeed.v1.GetHistoryNoData}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.getNoData = function() {
  return /** @type{?proto.quant.datafeed.v1.GetHistoryNoData} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.GetHistoryNoData, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.GetHistoryNoData|undefined} value
 * @return {!proto.quant.datafeed.v1.GetHistoryResponse} returns this
*/
proto.quant.datafeed.v1.GetHistoryResponse.prototype.setNoData = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.GetHistoryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetHistoryResponse} returns this
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.clearNoData = function() {
  return this.setNoData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.hasNoData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GetHistoryError error = 3;
 * @return {?proto.quant.datafeed.v1.GetHistoryError}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.getError = function() {
  return /** @type{?proto.quant.datafeed.v1.GetHistoryError} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.GetHistoryError, 3));
};


/**
 * @param {?proto.quant.datafeed.v1.GetHistoryError|undefined} value
 * @return {!proto.quant.datafeed.v1.GetHistoryResponse} returns this
*/
proto.quant.datafeed.v1.GetHistoryResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.quant.datafeed.v1.GetHistoryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetHistoryResponse} returns this
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetHistoryResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.QuoteValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.QuoteValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.QuoteValues.toObject = function(includeInstance, msg) {
  var f, obj = {
ch: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
chp: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
shortName: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
exchange: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
lp: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
ask: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
bid: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
openPrice: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
highPrice: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f,
lowPrice: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
prevClosePrice: (f = jspb.Message.getOptionalFloatingPointField(msg, 12)) == null ? undefined : f,
volume: (f = jspb.Message.getOptionalFloatingPointField(msg, 13)) == null ? undefined : f,
originalName: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
spread: (f = jspb.Message.getOptionalFloatingPointField(msg, 15)) == null ? undefined : f,
rtc: (f = jspb.Message.getOptionalFloatingPointField(msg, 16)) == null ? undefined : f,
rtcTime: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
rch: (f = jspb.Message.getOptionalFloatingPointField(msg, 18)) == null ? undefined : f,
rchp: (f = jspb.Message.getOptionalFloatingPointField(msg, 19)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.QuoteValues}
 */
proto.quant.datafeed.v1.QuoteValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.QuoteValues;
  return proto.quant.datafeed.v1.QuoteValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.QuoteValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.QuoteValues}
 */
proto.quant.datafeed.v1.QuoteValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCh(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setShortName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setExchange(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAsk(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpenPrice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHighPrice(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLowPrice(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrevClosePrice(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOriginalName(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpread(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRtc(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRtcTime(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRch(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRchp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.QuoteValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.QuoteValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.QuoteValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeDouble(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeDouble(
      19,
      f
    );
  }
};


/**
 * optional double ch = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getCh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setCh = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearCh = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasCh = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double chp = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getChp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setChp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearChp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasChp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string short_name = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getShortName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setShortName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearShortName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasShortName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string exchange = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setExchange = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearExchange = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double lp = 6;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getLp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setLp = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearLp = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasLp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double ask = 7;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getAsk = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setAsk = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearAsk = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasAsk = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double bid = 8;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getBid = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setBid = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearBid = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasBid = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double open_price = 9;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getOpenPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setOpenPrice = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearOpenPrice = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasOpenPrice = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double high_price = 10;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getHighPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setHighPrice = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearHighPrice = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasHighPrice = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double low_price = 11;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getLowPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setLowPrice = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearLowPrice = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasLowPrice = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double prev_close_price = 12;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getPrevClosePrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setPrevClosePrice = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearPrevClosePrice = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasPrevClosePrice = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double volume = 13;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setVolume = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearVolume = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string original_name = 14;
 * @return {string}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getOriginalName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setOriginalName = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearOriginalName = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasOriginalName = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional double spread = 15;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getSpread = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setSpread = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearSpread = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasSpread = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double rtc = 16;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getRtc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setRtc = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearRtc = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasRtc = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int64 rtc_time = 17;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getRtcTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setRtcTime = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearRtcTime = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasRtcTime = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional double rch = 18;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getRch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setRch = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearRch = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasRch = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional double rchp = 19;
 * @return {number}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.getRchp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.setRchp = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteValues} returns this
 */
proto.quant.datafeed.v1.QuoteValues.prototype.clearRchp = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteValues.prototype.hasRchp = function() {
  return jspb.Message.getField(this, 19) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.QuoteData.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.QuoteData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.QuoteData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.QuoteData.toObject = function(includeInstance, msg) {
  var f, obj = {
s: jspb.Message.getFieldWithDefault(msg, 1, ""),
n: jspb.Message.getFieldWithDefault(msg, 2, ""),
v: (f = msg.getV()) && proto.quant.datafeed.v1.QuoteValues.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.QuoteData}
 */
proto.quant.datafeed.v1.QuoteData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.QuoteData;
  return proto.quant.datafeed.v1.QuoteData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.QuoteData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.QuoteData}
 */
proto.quant.datafeed.v1.QuoteData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setS(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setN(value);
      break;
    case 3:
      var value = new proto.quant.datafeed.v1.QuoteValues;
      reader.readMessage(value,proto.quant.datafeed.v1.QuoteValues.deserializeBinaryFromReader);
      msg.setV(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.QuoteData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.QuoteData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.QuoteData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.QuoteData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getS();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getN();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getV();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quant.datafeed.v1.QuoteValues.serializeBinaryToWriter
    );
  }
};


/**
 * optional string s = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.QuoteData.prototype.getS = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.QuoteData} returns this
 */
proto.quant.datafeed.v1.QuoteData.prototype.setS = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string n = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.QuoteData.prototype.getN = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.QuoteData} returns this
 */
proto.quant.datafeed.v1.QuoteData.prototype.setN = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional QuoteValues v = 3;
 * @return {?proto.quant.datafeed.v1.QuoteValues}
 */
proto.quant.datafeed.v1.QuoteData.prototype.getV = function() {
  return /** @type{?proto.quant.datafeed.v1.QuoteValues} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.QuoteValues, 3));
};


/**
 * @param {?proto.quant.datafeed.v1.QuoteValues|undefined} value
 * @return {!proto.quant.datafeed.v1.QuoteData} returns this
*/
proto.quant.datafeed.v1.QuoteData.prototype.setV = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.QuoteData} returns this
 */
proto.quant.datafeed.v1.QuoteData.prototype.clearV = function() {
  return this.setV(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.QuoteData.prototype.hasV = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetQuotesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetQuotesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetQuotesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetQuotesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbols: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetQuotesRequest}
 */
proto.quant.datafeed.v1.GetQuotesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetQuotesRequest;
  return proto.quant.datafeed.v1.GetQuotesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetQuotesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetQuotesRequest}
 */
proto.quant.datafeed.v1.GetQuotesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbols(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetQuotesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetQuotesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetQuotesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetQuotesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbols();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string symbols = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.GetQuotesRequest.prototype.getSymbols = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetQuotesRequest} returns this
 */
proto.quant.datafeed.v1.GetQuotesRequest.prototype.setSymbols = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.GetQuotesOk.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetQuotesOk.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetQuotesOk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetQuotesOk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetQuotesOk.toObject = function(includeInstance, msg) {
  var f, obj = {
dList: jspb.Message.toObjectList(msg.getDList(),
    proto.quant.datafeed.v1.QuoteData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetQuotesOk}
 */
proto.quant.datafeed.v1.GetQuotesOk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetQuotesOk;
  return proto.quant.datafeed.v1.GetQuotesOk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetQuotesOk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetQuotesOk}
 */
proto.quant.datafeed.v1.GetQuotesOk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.QuoteData;
      reader.readMessage(value,proto.quant.datafeed.v1.QuoteData.deserializeBinaryFromReader);
      msg.addD(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetQuotesOk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetQuotesOk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetQuotesOk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetQuotesOk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.QuoteData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated QuoteData d = 1;
 * @return {!Array<!proto.quant.datafeed.v1.QuoteData>}
 */
proto.quant.datafeed.v1.GetQuotesOk.prototype.getDList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.QuoteData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.QuoteData, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.QuoteData>} value
 * @return {!proto.quant.datafeed.v1.GetQuotesOk} returns this
*/
proto.quant.datafeed.v1.GetQuotesOk.prototype.setDList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.QuoteData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.QuoteData}
 */
proto.quant.datafeed.v1.GetQuotesOk.prototype.addD = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.QuoteData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetQuotesOk} returns this
 */
proto.quant.datafeed.v1.GetQuotesOk.prototype.clearDList = function() {
  return this.setDList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetQuotesError.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetQuotesError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetQuotesError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetQuotesError.toObject = function(includeInstance, msg) {
  var f, obj = {
errmsg: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetQuotesError}
 */
proto.quant.datafeed.v1.GetQuotesError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetQuotesError;
  return proto.quant.datafeed.v1.GetQuotesError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetQuotesError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetQuotesError}
 */
proto.quant.datafeed.v1.GetQuotesError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setErrmsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetQuotesError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetQuotesError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetQuotesError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetQuotesError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrmsg();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string errmsg = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.GetQuotesError.prototype.getErrmsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetQuotesError} returns this
 */
proto.quant.datafeed.v1.GetQuotesError.prototype.setErrmsg = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.GetQuotesResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.GetQuotesResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  OK: 1,
  ERROR: 2
};

/**
 * @return {proto.quant.datafeed.v1.GetQuotesResponse.ResultCase}
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.getResultCase = function() {
  return /** @type {proto.quant.datafeed.v1.GetQuotesResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.GetQuotesResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetQuotesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetQuotesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetQuotesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
ok: (f = msg.getOk()) && proto.quant.datafeed.v1.GetQuotesOk.toObject(includeInstance, f),
error: (f = msg.getError()) && proto.quant.datafeed.v1.GetQuotesError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetQuotesResponse}
 */
proto.quant.datafeed.v1.GetQuotesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetQuotesResponse;
  return proto.quant.datafeed.v1.GetQuotesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetQuotesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetQuotesResponse}
 */
proto.quant.datafeed.v1.GetQuotesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.GetQuotesOk;
      reader.readMessage(value,proto.quant.datafeed.v1.GetQuotesOk.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.GetQuotesError;
      reader.readMessage(value,proto.quant.datafeed.v1.GetQuotesError.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetQuotesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetQuotesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetQuotesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quant.datafeed.v1.GetQuotesOk.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.GetQuotesError.serializeBinaryToWriter
    );
  }
};


/**
 * optional GetQuotesOk ok = 1;
 * @return {?proto.quant.datafeed.v1.GetQuotesOk}
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.getOk = function() {
  return /** @type{?proto.quant.datafeed.v1.GetQuotesOk} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.GetQuotesOk, 1));
};


/**
 * @param {?proto.quant.datafeed.v1.GetQuotesOk|undefined} value
 * @return {!proto.quant.datafeed.v1.GetQuotesResponse} returns this
*/
proto.quant.datafeed.v1.GetQuotesResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.quant.datafeed.v1.GetQuotesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetQuotesResponse} returns this
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GetQuotesError error = 2;
 * @return {?proto.quant.datafeed.v1.GetQuotesError}
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.getError = function() {
  return /** @type{?proto.quant.datafeed.v1.GetQuotesError} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.GetQuotesError, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.GetQuotesError|undefined} value
 * @return {!proto.quant.datafeed.v1.GetQuotesResponse} returns this
*/
proto.quant.datafeed.v1.GetQuotesResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.quant.datafeed.v1.GetQuotesResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetQuotesResponse} returns this
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetQuotesResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.MarkId.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.MarkId.ValueCase = {
  VALUE_NOT_SET: 0,
  STRING_ID: 1,
  NUMERIC_ID: 2
};

/**
 * @return {proto.quant.datafeed.v1.MarkId.ValueCase}
 */
proto.quant.datafeed.v1.MarkId.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.MarkId.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.MarkId.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.MarkId.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.MarkId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.MarkId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.MarkId.toObject = function(includeInstance, msg) {
  var f, obj = {
stringId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
numericId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.MarkId}
 */
proto.quant.datafeed.v1.MarkId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.MarkId;
  return proto.quant.datafeed.v1.MarkId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.MarkId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.MarkId}
 */
proto.quant.datafeed.v1.MarkId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStringId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumericId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.MarkId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.MarkId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.MarkId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.MarkId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string string_id = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.MarkId.prototype.getStringId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.MarkId} returns this
 */
proto.quant.datafeed.v1.MarkId.prototype.setStringId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.MarkId.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.MarkId} returns this
 */
proto.quant.datafeed.v1.MarkId.prototype.clearStringId = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.MarkId.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.MarkId.prototype.hasStringId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 numeric_id = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.MarkId.prototype.getNumericId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.MarkId} returns this
 */
proto.quant.datafeed.v1.MarkId.prototype.setNumericId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.quant.datafeed.v1.MarkId.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.MarkId} returns this
 */
proto.quant.datafeed.v1.MarkId.prototype.clearNumericId = function() {
  return jspb.Message.setOneofField(this, 2, proto.quant.datafeed.v1.MarkId.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.MarkId.prototype.hasNumericId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetMarksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetMarksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetMarksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
from: jspb.Message.getFieldWithDefault(msg, 2, 0),
to: jspb.Message.getFieldWithDefault(msg, 3, 0),
resolution: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetMarksRequest}
 */
proto.quant.datafeed.v1.GetMarksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetMarksRequest;
  return proto.quant.datafeed.v1.GetMarksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetMarksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetMarksRequest}
 */
proto.quant.datafeed.v1.GetMarksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setResolution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetMarksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetMarksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetMarksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTo();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getResolution();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetMarksRequest} returns this
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 from = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.getFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetMarksRequest} returns this
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.setFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 to = 3;
 * @return {number}
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetMarksRequest} returns this
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string resolution = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.getResolution = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetMarksRequest} returns this
 */
proto.quant.datafeed.v1.GetMarksRequest.prototype.setResolution = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.GetMarksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetMarksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetMarksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetMarksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
idList: jspb.Message.toObjectList(msg.getIdList(),
    proto.quant.datafeed.v1.MarkId.toObject, includeInstance),
time: (f = msg.getTime()) && proto.quant.datafeed.v1.Int64OrInt64List.toObject(includeInstance, f),
color: (f = msg.getColor()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
text: (f = msg.getText()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
label: (f = msg.getLabel()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
labelFontColor: (f = msg.getLabelFontColor()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
minSize: (f = msg.getMinSize()) && proto.quant.datafeed.v1.DoubleOrDoubleList.toObject(includeInstance, f),
borderWidth: (f = msg.getBorderWidth()) && proto.quant.datafeed.v1.DoubleOrNullableDoubleList.toObject(includeInstance, f),
hoveredBorderWidth: (f = msg.getHoveredBorderWidth()) && proto.quant.datafeed.v1.DoubleOrNullableDoubleList.toObject(includeInstance, f),
imageUrl: (f = msg.getImageUrl()) && proto.quant.datafeed.v1.StringOrNullableStringList.toObject(includeInstance, f),
showLabelWhenImageLoaded: (f = msg.getShowLabelWhenImageLoaded()) && proto.quant.datafeed.v1.BoolOrNullableBoolList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse}
 */
proto.quant.datafeed.v1.GetMarksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetMarksResponse;
  return proto.quant.datafeed.v1.GetMarksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetMarksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse}
 */
proto.quant.datafeed.v1.GetMarksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.MarkId;
      reader.readMessage(value,proto.quant.datafeed.v1.MarkId.deserializeBinaryFromReader);
      msg.addId(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.Int64OrInt64List;
      reader.readMessage(value,proto.quant.datafeed.v1.Int64OrInt64List.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 4:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 5:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setLabel(value);
      break;
    case 6:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setLabelFontColor(value);
      break;
    case 7:
      var value = new proto.quant.datafeed.v1.DoubleOrDoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleOrDoubleList.deserializeBinaryFromReader);
      msg.setMinSize(value);
      break;
    case 8:
      var value = new proto.quant.datafeed.v1.DoubleOrNullableDoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleOrNullableDoubleList.deserializeBinaryFromReader);
      msg.setBorderWidth(value);
      break;
    case 9:
      var value = new proto.quant.datafeed.v1.DoubleOrNullableDoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleOrNullableDoubleList.deserializeBinaryFromReader);
      msg.setHoveredBorderWidth(value);
      break;
    case 10:
      var value = new proto.quant.datafeed.v1.StringOrNullableStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrNullableStringList.deserializeBinaryFromReader);
      msg.setImageUrl(value);
      break;
    case 11:
      var value = new proto.quant.datafeed.v1.BoolOrNullableBoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.BoolOrNullableBoolList.deserializeBinaryFromReader);
      msg.setShowLabelWhenImageLoaded(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetMarksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetMarksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetMarksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.MarkId.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.Int64OrInt64List.serializeBinaryToWriter
    );
  }
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getLabelFontColor();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getMinSize();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.quant.datafeed.v1.DoubleOrDoubleList.serializeBinaryToWriter
    );
  }
  f = message.getBorderWidth();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.quant.datafeed.v1.DoubleOrNullableDoubleList.serializeBinaryToWriter
    );
  }
  f = message.getHoveredBorderWidth();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.quant.datafeed.v1.DoubleOrNullableDoubleList.serializeBinaryToWriter
    );
  }
  f = message.getImageUrl();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.quant.datafeed.v1.StringOrNullableStringList.serializeBinaryToWriter
    );
  }
  f = message.getShowLabelWhenImageLoaded();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.quant.datafeed.v1.BoolOrNullableBoolList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MarkId id = 1;
 * @return {!Array<!proto.quant.datafeed.v1.MarkId>}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getIdList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.MarkId>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.MarkId, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.MarkId>} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.MarkId=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.MarkId}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.addId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.MarkId, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearIdList = function() {
  return this.setIdList([]);
};


/**
 * optional Int64OrInt64List time = 2;
 * @return {?proto.quant.datafeed.v1.Int64OrInt64List}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getTime = function() {
  return /** @type{?proto.quant.datafeed.v1.Int64OrInt64List} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.Int64OrInt64List, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.Int64OrInt64List|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional StringOrStringList color = 3;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getColor = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 3));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasColor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StringOrStringList text = 4;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getText = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 4));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasText = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StringOrStringList label = 5;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getLabel = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 5));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setLabel = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearLabel = function() {
  return this.setLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StringOrStringList label_font_color = 6;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getLabelFontColor = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 6));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setLabelFontColor = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearLabelFontColor = function() {
  return this.setLabelFontColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasLabelFontColor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DoubleOrDoubleList min_size = 7;
 * @return {?proto.quant.datafeed.v1.DoubleOrDoubleList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getMinSize = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleOrDoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleOrDoubleList, 7));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleOrDoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setMinSize = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearMinSize = function() {
  return this.setMinSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasMinSize = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DoubleOrNullableDoubleList border_width = 8;
 * @return {?proto.quant.datafeed.v1.DoubleOrNullableDoubleList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getBorderWidth = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleOrNullableDoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleOrNullableDoubleList, 8));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleOrNullableDoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setBorderWidth = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearBorderWidth = function() {
  return this.setBorderWidth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasBorderWidth = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DoubleOrNullableDoubleList hovered_border_width = 9;
 * @return {?proto.quant.datafeed.v1.DoubleOrNullableDoubleList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getHoveredBorderWidth = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleOrNullableDoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleOrNullableDoubleList, 9));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleOrNullableDoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setHoveredBorderWidth = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearHoveredBorderWidth = function() {
  return this.setHoveredBorderWidth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasHoveredBorderWidth = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional StringOrNullableStringList image_url = 10;
 * @return {?proto.quant.datafeed.v1.StringOrNullableStringList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getImageUrl = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrNullableStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrNullableStringList, 10));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrNullableStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setImageUrl = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearImageUrl = function() {
  return this.setImageUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasImageUrl = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BoolOrNullableBoolList show_label_when_image_loaded = 11;
 * @return {?proto.quant.datafeed.v1.BoolOrNullableBoolList}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.getShowLabelWhenImageLoaded = function() {
  return /** @type{?proto.quant.datafeed.v1.BoolOrNullableBoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.BoolOrNullableBoolList, 11));
};


/**
 * @param {?proto.quant.datafeed.v1.BoolOrNullableBoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetMarksResponse.prototype.setShowLabelWhenImageLoaded = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.clearShowLabelWhenImageLoaded = function() {
  return this.setShowLabelWhenImageLoaded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetMarksResponse.prototype.hasShowLabelWhenImageLoaded = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.TimescaleMark.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.TimescaleMark} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.TimescaleMark.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = msg.getId()) && proto.quant.datafeed.v1.MarkId.toObject(includeInstance, f),
color: jspb.Message.getFieldWithDefault(msg, 2, ""),
label: jspb.Message.getFieldWithDefault(msg, 3, ""),
time: jspb.Message.getFieldWithDefault(msg, 4, 0),
tooltip: jspb.Message.getFieldWithDefault(msg, 5, ""),
shape: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.TimescaleMark}
 */
proto.quant.datafeed.v1.TimescaleMark.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.TimescaleMark;
  return proto.quant.datafeed.v1.TimescaleMark.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.TimescaleMark} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.TimescaleMark}
 */
proto.quant.datafeed.v1.TimescaleMark.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.MarkId;
      reader.readMessage(value,proto.quant.datafeed.v1.MarkId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setColor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLabel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTooltip(value);
      break;
    case 6:
      var value = /** @type {!proto.quant.datafeed.v1.TimescaleMarkShape} */ (reader.readEnum());
      msg.setShape(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.TimescaleMark.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.TimescaleMark} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.TimescaleMark.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quant.datafeed.v1.MarkId.serializeBinaryToWriter
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTooltip();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {!proto.quant.datafeed.v1.TimescaleMarkShape} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional MarkId id = 1;
 * @return {?proto.quant.datafeed.v1.MarkId}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.getId = function() {
  return /** @type{?proto.quant.datafeed.v1.MarkId} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.MarkId, 1));
};


/**
 * @param {?proto.quant.datafeed.v1.MarkId|undefined} value
 * @return {!proto.quant.datafeed.v1.TimescaleMark} returns this
*/
proto.quant.datafeed.v1.TimescaleMark.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.TimescaleMark} returns this
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string color = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.TimescaleMark} returns this
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string label = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.TimescaleMark} returns this
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 time = 4;
 * @return {number}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.TimescaleMark} returns this
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string tooltip = 5;
 * @return {string}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.getTooltip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.TimescaleMark} returns this
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.setTooltip = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional TimescaleMarkShape shape = 6;
 * @return {!proto.quant.datafeed.v1.TimescaleMarkShape}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.getShape = function() {
  return /** @type {!proto.quant.datafeed.v1.TimescaleMarkShape} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.TimescaleMarkShape} value
 * @return {!proto.quant.datafeed.v1.TimescaleMark} returns this
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.setShape = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.TimescaleMark} returns this
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.clearShape = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.TimescaleMark.prototype.hasShape = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetTimescaleMarksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetTimescaleMarksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
from: jspb.Message.getFieldWithDefault(msg, 2, 0),
to: jspb.Message.getFieldWithDefault(msg, 3, 0),
resolution: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksRequest}
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetTimescaleMarksRequest;
  return proto.quant.datafeed.v1.GetTimescaleMarksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetTimescaleMarksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksRequest}
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setResolution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetTimescaleMarksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetTimescaleMarksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTo();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getResolution();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksRequest} returns this
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 from = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.getFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksRequest} returns this
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.setFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 to = 3;
 * @return {number}
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.getTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksRequest} returns this
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.setTo = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string resolution = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.getResolution = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksRequest} returns this
 */
proto.quant.datafeed.v1.GetTimescaleMarksRequest.prototype.setResolution = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetTimescaleMarksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetTimescaleMarksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
marksList: jspb.Message.toObjectList(msg.getMarksList(),
    proto.quant.datafeed.v1.TimescaleMark.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksResponse}
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetTimescaleMarksResponse;
  return proto.quant.datafeed.v1.GetTimescaleMarksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetTimescaleMarksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksResponse}
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.TimescaleMark;
      reader.readMessage(value,proto.quant.datafeed.v1.TimescaleMark.deserializeBinaryFromReader);
      msg.addMarks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetTimescaleMarksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetTimescaleMarksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.TimescaleMark.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TimescaleMark marks = 1;
 * @return {!Array<!proto.quant.datafeed.v1.TimescaleMark>}
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.prototype.getMarksList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.TimescaleMark>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.TimescaleMark, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.TimescaleMark>} value
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksResponse} returns this
*/
proto.quant.datafeed.v1.GetTimescaleMarksResponse.prototype.setMarksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.TimescaleMark=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.TimescaleMark}
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.prototype.addMarks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.TimescaleMark, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetTimescaleMarksResponse} returns this
 */
proto.quant.datafeed.v1.GetTimescaleMarksResponse.prototype.clearMarksList = function() {
  return this.setMarksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ResolveSymbolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ResolveSymbolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
currencyCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
unitId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
session: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ResolveSymbolRequest;
  return proto.quant.datafeed.v1.ResolveSymbolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ResolveSymbolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCurrencyCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUnitId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSession(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ResolveSymbolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ResolveSymbolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest} returns this
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string currency_code = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest} returns this
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest} returns this
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.clearCurrencyCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.hasCurrencyCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string unit_id = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.getUnitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest} returns this
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.setUnitId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest} returns this
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.clearUnitId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.hasUnitId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string session = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest} returns this
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.setSession = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ResolveSymbolRequest} returns this
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.clearSession = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ResolveSymbolRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ResolveSymbolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ResolveSymbolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: (f = msg.getSymbol()) && proto.quant.datafeed.v1.LibrarySymbolInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ResolveSymbolResponse}
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ResolveSymbolResponse;
  return proto.quant.datafeed.v1.ResolveSymbolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ResolveSymbolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ResolveSymbolResponse}
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.LibrarySymbolInfo;
      reader.readMessage(value,proto.quant.datafeed.v1.LibrarySymbolInfo.deserializeBinaryFromReader);
      msg.setSymbol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ResolveSymbolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ResolveSymbolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quant.datafeed.v1.LibrarySymbolInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional LibrarySymbolInfo symbol = 1;
 * @return {?proto.quant.datafeed.v1.LibrarySymbolInfo}
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.prototype.getSymbol = function() {
  return /** @type{?proto.quant.datafeed.v1.LibrarySymbolInfo} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.LibrarySymbolInfo, 1));
};


/**
 * @param {?proto.quant.datafeed.v1.LibrarySymbolInfo|undefined} value
 * @return {!proto.quant.datafeed.v1.ResolveSymbolResponse} returns this
*/
proto.quant.datafeed.v1.ResolveSymbolResponse.prototype.setSymbol = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ResolveSymbolResponse} returns this
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.prototype.clearSymbol = function() {
  return this.setSymbol(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ResolveSymbolResponse.prototype.hasSymbol = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetSymbolGroupInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
group: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoRequest}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetSymbolGroupInfoRequest;
  return proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetSymbolGroupInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoRequest}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetSymbolGroupInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoRequest} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoRequest.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
symbolList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
description: (f = msg.getDescription()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
minmov: (f = msg.getMinmov()) && proto.quant.datafeed.v1.DoubleOrDoubleList.toObject(includeInstance, f),
pricescale: (f = msg.getPricescale()) && proto.quant.datafeed.v1.DoubleOrDoubleList.toObject(includeInstance, f),
type: (f = msg.getType()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
timezone: (f = msg.getTimezone()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
exchangeListed: (f = msg.getExchangeListed()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
exchangeTraded: (f = msg.getExchangeTraded()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
minmov2: (f = msg.getMinmov2()) && proto.quant.datafeed.v1.DoubleOrDoubleList.toObject(includeInstance, f),
fractional: (f = msg.getFractional()) && proto.quant.datafeed.v1.BoolOrBoolList.toObject(includeInstance, f),
hasIntraday: (f = msg.getHasIntraday()) && proto.quant.datafeed.v1.BoolOrBoolList.toObject(includeInstance, f),
hasDaily: (f = msg.getHasDaily()) && proto.quant.datafeed.v1.BoolOrBoolList.toObject(includeInstance, f),
hasWeeklyAndMonthly: (f = msg.getHasWeeklyAndMonthly()) && proto.quant.datafeed.v1.BoolOrBoolList.toObject(includeInstance, f),
hasEmptyBars: (f = msg.getHasEmptyBars()) && proto.quant.datafeed.v1.BoolOrBoolList.toObject(includeInstance, f),
visiblePlotsSet: (f = msg.getVisiblePlotsSet()) && proto.quant.datafeed.v1.VisiblePlotsSetOrList.toObject(includeInstance, f),
ticker: (f = msg.getTicker()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
sessionRegular: (f = msg.getSessionRegular()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
sessionHolidays: (f = msg.getSessionHolidays()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
corrections: (f = msg.getCorrections()) && proto.quant.datafeed.v1.StringOrStringList.toObject(includeInstance, f),
supportedResolutions: (f = msg.getSupportedResolutions()) && proto.quant.datafeed.v1.StringListOrStringListList.toObject(includeInstance, f),
forceSessionRebuild: (f = msg.getForceSessionRebuild()) && proto.quant.datafeed.v1.BoolOrBoolList.toObject(includeInstance, f),
intradayMultipliers: (f = msg.getIntradayMultipliers()) && proto.quant.datafeed.v1.StringListOrStringListList.toObject(includeInstance, f),
volumePrecision: (f = msg.getVolumePrecision()) && proto.quant.datafeed.v1.DoubleOrDoubleList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.GetSymbolGroupInfoResponse;
  return proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addSymbol(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.quant.datafeed.v1.DoubleOrDoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleOrDoubleList.deserializeBinaryFromReader);
      msg.setMinmov(value);
      break;
    case 4:
      var value = new proto.quant.datafeed.v1.DoubleOrDoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleOrDoubleList.deserializeBinaryFromReader);
      msg.setPricescale(value);
      break;
    case 5:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 6:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setTimezone(value);
      break;
    case 7:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setExchangeListed(value);
      break;
    case 8:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setExchangeTraded(value);
      break;
    case 9:
      var value = new proto.quant.datafeed.v1.DoubleOrDoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleOrDoubleList.deserializeBinaryFromReader);
      msg.setMinmov2(value);
      break;
    case 10:
      var value = new proto.quant.datafeed.v1.BoolOrBoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinaryFromReader);
      msg.setFractional(value);
      break;
    case 11:
      var value = new proto.quant.datafeed.v1.BoolOrBoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinaryFromReader);
      msg.setHasIntraday(value);
      break;
    case 12:
      var value = new proto.quant.datafeed.v1.BoolOrBoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinaryFromReader);
      msg.setHasDaily(value);
      break;
    case 13:
      var value = new proto.quant.datafeed.v1.BoolOrBoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinaryFromReader);
      msg.setHasWeeklyAndMonthly(value);
      break;
    case 14:
      var value = new proto.quant.datafeed.v1.BoolOrBoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinaryFromReader);
      msg.setHasEmptyBars(value);
      break;
    case 15:
      var value = new proto.quant.datafeed.v1.VisiblePlotsSetOrList;
      reader.readMessage(value,proto.quant.datafeed.v1.VisiblePlotsSetOrList.deserializeBinaryFromReader);
      msg.setVisiblePlotsSet(value);
      break;
    case 16:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setTicker(value);
      break;
    case 17:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setSessionRegular(value);
      break;
    case 18:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setSessionHolidays(value);
      break;
    case 19:
      var value = new proto.quant.datafeed.v1.StringOrStringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringOrStringList.deserializeBinaryFromReader);
      msg.setCorrections(value);
      break;
    case 20:
      var value = new proto.quant.datafeed.v1.StringListOrStringListList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringListOrStringListList.deserializeBinaryFromReader);
      msg.setSupportedResolutions(value);
      break;
    case 21:
      var value = new proto.quant.datafeed.v1.BoolOrBoolList;
      reader.readMessage(value,proto.quant.datafeed.v1.BoolOrBoolList.deserializeBinaryFromReader);
      msg.setForceSessionRebuild(value);
      break;
    case 22:
      var value = new proto.quant.datafeed.v1.StringListOrStringListList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringListOrStringListList.deserializeBinaryFromReader);
      msg.setIntradayMultipliers(value);
      break;
    case 23:
      var value = new proto.quant.datafeed.v1.DoubleOrDoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleOrDoubleList.deserializeBinaryFromReader);
      msg.setVolumePrecision(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getMinmov();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quant.datafeed.v1.DoubleOrDoubleList.serializeBinaryToWriter
    );
  }
  f = message.getPricescale();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quant.datafeed.v1.DoubleOrDoubleList.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getTimezone();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getExchangeListed();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getExchangeTraded();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getMinmov2();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.quant.datafeed.v1.DoubleOrDoubleList.serializeBinaryToWriter
    );
  }
  f = message.getFractional();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.quant.datafeed.v1.BoolOrBoolList.serializeBinaryToWriter
    );
  }
  f = message.getHasIntraday();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.quant.datafeed.v1.BoolOrBoolList.serializeBinaryToWriter
    );
  }
  f = message.getHasDaily();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.quant.datafeed.v1.BoolOrBoolList.serializeBinaryToWriter
    );
  }
  f = message.getHasWeeklyAndMonthly();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.quant.datafeed.v1.BoolOrBoolList.serializeBinaryToWriter
    );
  }
  f = message.getHasEmptyBars();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.quant.datafeed.v1.BoolOrBoolList.serializeBinaryToWriter
    );
  }
  f = message.getVisiblePlotsSet();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.quant.datafeed.v1.VisiblePlotsSetOrList.serializeBinaryToWriter
    );
  }
  f = message.getTicker();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getSessionRegular();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getSessionHolidays();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getCorrections();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.quant.datafeed.v1.StringOrStringList.serializeBinaryToWriter
    );
  }
  f = message.getSupportedResolutions();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.quant.datafeed.v1.StringListOrStringListList.serializeBinaryToWriter
    );
  }
  f = message.getForceSessionRebuild();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.quant.datafeed.v1.BoolOrBoolList.serializeBinaryToWriter
    );
  }
  f = message.getIntradayMultipliers();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.quant.datafeed.v1.StringListOrStringListList.serializeBinaryToWriter
    );
  }
  f = message.getVolumePrecision();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.quant.datafeed.v1.DoubleOrDoubleList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string symbol = 1;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getSymbolList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setSymbolList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.addSymbol = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearSymbolList = function() {
  return this.setSymbolList([]);
};


/**
 * optional StringOrStringList description = 2;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getDescription = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setDescription = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearDescription = function() {
  return this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DoubleOrDoubleList minmov = 3;
 * @return {?proto.quant.datafeed.v1.DoubleOrDoubleList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getMinmov = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleOrDoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleOrDoubleList, 3));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleOrDoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setMinmov = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearMinmov = function() {
  return this.setMinmov(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasMinmov = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DoubleOrDoubleList pricescale = 4;
 * @return {?proto.quant.datafeed.v1.DoubleOrDoubleList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getPricescale = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleOrDoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleOrDoubleList, 4));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleOrDoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setPricescale = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearPricescale = function() {
  return this.setPricescale(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasPricescale = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional StringOrStringList type = 5;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getType = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 5));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional StringOrStringList timezone = 6;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getTimezone = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 6));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setTimezone = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearTimezone = function() {
  return this.setTimezone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasTimezone = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional StringOrStringList exchange_listed = 7;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getExchangeListed = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 7));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setExchangeListed = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearExchangeListed = function() {
  return this.setExchangeListed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasExchangeListed = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional StringOrStringList exchange_traded = 8;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getExchangeTraded = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 8));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setExchangeTraded = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearExchangeTraded = function() {
  return this.setExchangeTraded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasExchangeTraded = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DoubleOrDoubleList minmov2 = 9;
 * @return {?proto.quant.datafeed.v1.DoubleOrDoubleList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getMinmov2 = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleOrDoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleOrDoubleList, 9));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleOrDoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setMinmov2 = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearMinmov2 = function() {
  return this.setMinmov2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasMinmov2 = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional BoolOrBoolList fractional = 10;
 * @return {?proto.quant.datafeed.v1.BoolOrBoolList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getFractional = function() {
  return /** @type{?proto.quant.datafeed.v1.BoolOrBoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.BoolOrBoolList, 10));
};


/**
 * @param {?proto.quant.datafeed.v1.BoolOrBoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setFractional = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearFractional = function() {
  return this.setFractional(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasFractional = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BoolOrBoolList has_intraday = 11;
 * @return {?proto.quant.datafeed.v1.BoolOrBoolList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getHasIntraday = function() {
  return /** @type{?proto.quant.datafeed.v1.BoolOrBoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.BoolOrBoolList, 11));
};


/**
 * @param {?proto.quant.datafeed.v1.BoolOrBoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setHasIntraday = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearHasIntraday = function() {
  return this.setHasIntraday(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasHasIntraday = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional BoolOrBoolList has_daily = 12;
 * @return {?proto.quant.datafeed.v1.BoolOrBoolList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getHasDaily = function() {
  return /** @type{?proto.quant.datafeed.v1.BoolOrBoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.BoolOrBoolList, 12));
};


/**
 * @param {?proto.quant.datafeed.v1.BoolOrBoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setHasDaily = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearHasDaily = function() {
  return this.setHasDaily(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasHasDaily = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional BoolOrBoolList has_weekly_and_monthly = 13;
 * @return {?proto.quant.datafeed.v1.BoolOrBoolList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getHasWeeklyAndMonthly = function() {
  return /** @type{?proto.quant.datafeed.v1.BoolOrBoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.BoolOrBoolList, 13));
};


/**
 * @param {?proto.quant.datafeed.v1.BoolOrBoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setHasWeeklyAndMonthly = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearHasWeeklyAndMonthly = function() {
  return this.setHasWeeklyAndMonthly(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasHasWeeklyAndMonthly = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional BoolOrBoolList has_empty_bars = 14;
 * @return {?proto.quant.datafeed.v1.BoolOrBoolList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getHasEmptyBars = function() {
  return /** @type{?proto.quant.datafeed.v1.BoolOrBoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.BoolOrBoolList, 14));
};


/**
 * @param {?proto.quant.datafeed.v1.BoolOrBoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setHasEmptyBars = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearHasEmptyBars = function() {
  return this.setHasEmptyBars(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasHasEmptyBars = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional VisiblePlotsSetOrList visible_plots_set = 15;
 * @return {?proto.quant.datafeed.v1.VisiblePlotsSetOrList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getVisiblePlotsSet = function() {
  return /** @type{?proto.quant.datafeed.v1.VisiblePlotsSetOrList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.VisiblePlotsSetOrList, 15));
};


/**
 * @param {?proto.quant.datafeed.v1.VisiblePlotsSetOrList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setVisiblePlotsSet = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearVisiblePlotsSet = function() {
  return this.setVisiblePlotsSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasVisiblePlotsSet = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional StringOrStringList ticker = 16;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getTicker = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 16));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setTicker = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearTicker = function() {
  return this.setTicker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasTicker = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional StringOrStringList session_regular = 17;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getSessionRegular = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 17));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setSessionRegular = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearSessionRegular = function() {
  return this.setSessionRegular(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasSessionRegular = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional StringOrStringList session_holidays = 18;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getSessionHolidays = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 18));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setSessionHolidays = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearSessionHolidays = function() {
  return this.setSessionHolidays(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasSessionHolidays = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional StringOrStringList corrections = 19;
 * @return {?proto.quant.datafeed.v1.StringOrStringList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getCorrections = function() {
  return /** @type{?proto.quant.datafeed.v1.StringOrStringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringOrStringList, 19));
};


/**
 * @param {?proto.quant.datafeed.v1.StringOrStringList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setCorrections = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearCorrections = function() {
  return this.setCorrections(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasCorrections = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional StringListOrStringListList supported_resolutions = 20;
 * @return {?proto.quant.datafeed.v1.StringListOrStringListList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getSupportedResolutions = function() {
  return /** @type{?proto.quant.datafeed.v1.StringListOrStringListList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringListOrStringListList, 20));
};


/**
 * @param {?proto.quant.datafeed.v1.StringListOrStringListList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setSupportedResolutions = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearSupportedResolutions = function() {
  return this.setSupportedResolutions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasSupportedResolutions = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional BoolOrBoolList force_session_rebuild = 21;
 * @return {?proto.quant.datafeed.v1.BoolOrBoolList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getForceSessionRebuild = function() {
  return /** @type{?proto.quant.datafeed.v1.BoolOrBoolList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.BoolOrBoolList, 21));
};


/**
 * @param {?proto.quant.datafeed.v1.BoolOrBoolList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setForceSessionRebuild = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearForceSessionRebuild = function() {
  return this.setForceSessionRebuild(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasForceSessionRebuild = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional StringListOrStringListList intraday_multipliers = 22;
 * @return {?proto.quant.datafeed.v1.StringListOrStringListList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getIntradayMultipliers = function() {
  return /** @type{?proto.quant.datafeed.v1.StringListOrStringListList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringListOrStringListList, 22));
};


/**
 * @param {?proto.quant.datafeed.v1.StringListOrStringListList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setIntradayMultipliers = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearIntradayMultipliers = function() {
  return this.setIntradayMultipliers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasIntradayMultipliers = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional DoubleOrDoubleList volume_precision = 23;
 * @return {?proto.quant.datafeed.v1.DoubleOrDoubleList}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.getVolumePrecision = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleOrDoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleOrDoubleList, 23));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleOrDoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
*/
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.setVolumePrecision = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.GetSymbolGroupInfoResponse} returns this
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.clearVolumePrecision = function() {
  return this.setVolumePrecision(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.GetSymbolGroupInfoResponse.prototype.hasVolumePrecision = function() {
  return jspb.Message.getField(this, 23) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.SearchResultItem.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.SearchResultItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.SearchResultItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SearchResultItem.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
exchange: jspb.Message.getFieldWithDefault(msg, 3, ""),
type: jspb.Message.getFieldWithDefault(msg, 4, ""),
ticker: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
exchangeLogo: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
logoUrlsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.SearchResultItem}
 */
proto.quant.datafeed.v1.SearchResultItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.SearchResultItem;
  return proto.quant.datafeed.v1.SearchResultItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.SearchResultItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.SearchResultItem}
 */
proto.quant.datafeed.v1.SearchResultItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setExchange(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTicker(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setExchangeLogo(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addLogoUrls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.SearchResultItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.SearchResultItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SearchResultItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExchange();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLogoUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string exchange = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.setExchange = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ticker = 5;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.getTicker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.setTicker = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.clearTicker = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.hasTicker = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string exchange_logo = 6;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.getExchangeLogo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.setExchangeLogo = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.clearExchangeLogo = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.hasExchangeLogo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string logo_urls = 7;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.getLogoUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.setLogoUrlsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.addLogoUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.SearchResultItem} returns this
 */
proto.quant.datafeed.v1.SearchResultItem.prototype.clearLogoUrlsList = function() {
  return this.setLogoUrlsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.SearchSymbolsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.SearchSymbolsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
query: jspb.Message.getFieldWithDefault(msg, 1, ""),
type: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
exchange: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
limit: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.SearchSymbolsRequest;
  return proto.quant.datafeed.v1.SearchSymbolsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.SearchSymbolsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setExchange(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.SearchSymbolsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.SearchSymbolsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string exchange = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.getExchange = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.setExchange = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.clearExchange = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.SearchSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.SearchSymbolsRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.SearchSymbolsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.SearchSymbolsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.quant.datafeed.v1.SearchResultItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.SearchSymbolsResponse}
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.SearchSymbolsResponse;
  return proto.quant.datafeed.v1.SearchSymbolsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.SearchSymbolsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.SearchSymbolsResponse}
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.SearchResultItem;
      reader.readMessage(value,proto.quant.datafeed.v1.SearchResultItem.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.SearchSymbolsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.SearchSymbolsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.SearchResultItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SearchResultItem items = 1;
 * @return {!Array<!proto.quant.datafeed.v1.SearchResultItem>}
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.SearchResultItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.SearchResultItem, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.SearchResultItem>} value
 * @return {!proto.quant.datafeed.v1.SearchSymbolsResponse} returns this
*/
proto.quant.datafeed.v1.SearchSymbolsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.SearchResultItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.SearchResultItem}
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.SearchResultItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.SearchSymbolsResponse} returns this
 */
proto.quant.datafeed.v1.SearchSymbolsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.StreamBarsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.StreamBarsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StreamBarsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbolInfo: (f = msg.getSymbolInfo()) && proto.quant.datafeed.v1.LibrarySymbolInfo.toObject(includeInstance, f),
resolution: jspb.Message.getFieldWithDefault(msg, 2, ""),
listenerGuid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.StreamBarsRequest}
 */
proto.quant.datafeed.v1.StreamBarsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.StreamBarsRequest;
  return proto.quant.datafeed.v1.StreamBarsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.StreamBarsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.StreamBarsRequest}
 */
proto.quant.datafeed.v1.StreamBarsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.LibrarySymbolInfo;
      reader.readMessage(value,proto.quant.datafeed.v1.LibrarySymbolInfo.deserializeBinaryFromReader);
      msg.setSymbolInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setResolution(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setListenerGuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.StreamBarsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.StreamBarsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StreamBarsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quant.datafeed.v1.LibrarySymbolInfo.serializeBinaryToWriter
    );
  }
  f = message.getResolution();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getListenerGuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional LibrarySymbolInfo symbol_info = 1;
 * @return {?proto.quant.datafeed.v1.LibrarySymbolInfo}
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.getSymbolInfo = function() {
  return /** @type{?proto.quant.datafeed.v1.LibrarySymbolInfo} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.LibrarySymbolInfo, 1));
};


/**
 * @param {?proto.quant.datafeed.v1.LibrarySymbolInfo|undefined} value
 * @return {!proto.quant.datafeed.v1.StreamBarsRequest} returns this
*/
proto.quant.datafeed.v1.StreamBarsRequest.prototype.setSymbolInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.StreamBarsRequest} returns this
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.clearSymbolInfo = function() {
  return this.setSymbolInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.hasSymbolInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string resolution = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.getResolution = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.StreamBarsRequest} returns this
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.setResolution = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string listener_guid = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.getListenerGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.StreamBarsRequest} returns this
 */
proto.quant.datafeed.v1.StreamBarsRequest.prototype.setListenerGuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.StreamBarsResponse.repeatedFields_ = [1,2,3,4,5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.StreamBarsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.StreamBarsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StreamBarsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
tList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
cList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
oList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
hList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
lList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f,
vList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse}
 */
proto.quant.datafeed.v1.StreamBarsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.StreamBarsResponse;
  return proto.quant.datafeed.v1.StreamBarsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.StreamBarsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse}
 */
proto.quant.datafeed.v1.StreamBarsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      reader.readPackableInt64Into(msg.getTList());
      break;
    case 2:
      reader.readPackableDoubleInto(msg.getCList());
      break;
    case 3:
      reader.readPackableDoubleInto(msg.getOList());
      break;
    case 4:
      reader.readPackableDoubleInto(msg.getHList());
      break;
    case 5:
      reader.readPackableDoubleInto(msg.getLList());
      break;
    case 6:
      reader.readPackableDoubleInto(msg.getVList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.StreamBarsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.StreamBarsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.StreamBarsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
  f = message.getCList();
  if (f.length > 0) {
    writer.writePackedDouble(
      2,
      f
    );
  }
  f = message.getOList();
  if (f.length > 0) {
    writer.writePackedDouble(
      3,
      f
    );
  }
  f = message.getHList();
  if (f.length > 0) {
    writer.writePackedDouble(
      4,
      f
    );
  }
  f = message.getLList();
  if (f.length > 0) {
    writer.writePackedDouble(
      5,
      f
    );
  }
  f = message.getVList();
  if (f.length > 0) {
    writer.writePackedDouble(
      6,
      f
    );
  }
};


/**
 * repeated int64 t = 1;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.getTList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.setTList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.addT = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.clearTList = function() {
  return this.setTList([]);
};


/**
 * repeated double c = 2;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.getCList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.setCList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.addC = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.clearCList = function() {
  return this.setCList([]);
};


/**
 * repeated double o = 3;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.getOList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.setOList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.addO = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.clearOList = function() {
  return this.setOList([]);
};


/**
 * repeated double h = 4;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.getHList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.setHList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.addH = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.clearHList = function() {
  return this.setHList([]);
};


/**
 * repeated double l = 5;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.getLList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.setLList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.addL = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.clearLList = function() {
  return this.setLList([]);
};


/**
 * repeated double v = 6;
 * @return {!Array<number>}
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.getVList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.setVList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.addV = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.StreamBarsResponse} returns this
 */
proto.quant.datafeed.v1.StreamBarsResponse.prototype.clearVList = function() {
  return this.setVList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.ScannerFilterValue.ValueCase = {
  VALUE_NOT_SET: 0,
  STRING_VALUE: 1,
  NUMBER_VALUE: 2,
  BOOL_VALUE: 3,
  STRING_LIST: 4,
  NUMBER_LIST: 5
};

/**
 * @return {proto.quant.datafeed.v1.ScannerFilterValue.ValueCase}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.getValueCase = function() {
  return /** @type {proto.quant.datafeed.v1.ScannerFilterValue.ValueCase} */(jspb.Message.computeOneofCase(this, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScannerFilterValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScannerFilterValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilterValue.toObject = function(includeInstance, msg) {
  var f, obj = {
stringValue: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
numberValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
boolValue: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
stringList: (f = msg.getStringList()) && proto.quant.datafeed.v1.StringList.toObject(includeInstance, f),
numberList: (f = msg.getNumberList()) && proto.quant.datafeed.v1.DoubleList.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue}
 */
proto.quant.datafeed.v1.ScannerFilterValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScannerFilterValue;
  return proto.quant.datafeed.v1.ScannerFilterValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScannerFilterValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue}
 */
proto.quant.datafeed.v1.ScannerFilterValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStringValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setNumberValue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 4:
      var value = new proto.quant.datafeed.v1.StringList;
      reader.readMessage(value,proto.quant.datafeed.v1.StringList.deserializeBinaryFromReader);
      msg.setStringList(value);
      break;
    case 5:
      var value = new proto.quant.datafeed.v1.DoubleList;
      reader.readMessage(value,proto.quant.datafeed.v1.DoubleList.deserializeBinaryFromReader);
      msg.setNumberList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScannerFilterValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScannerFilterValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilterValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getStringList();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quant.datafeed.v1.StringList.serializeBinaryToWriter
    );
  }
  f = message.getNumberList();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quant.datafeed.v1.DoubleList.serializeBinaryToWriter
    );
  }
};


/**
 * optional string string_value = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 1, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double number_value = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.getNumberValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.setNumberValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.clearNumberValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.hasNumberValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool bool_value = 3;
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.setBoolValue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.clearBoolValue = function() {
  return jspb.Message.setOneofField(this, 3, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional StringList string_list = 4;
 * @return {?proto.quant.datafeed.v1.StringList}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.getStringList = function() {
  return /** @type{?proto.quant.datafeed.v1.StringList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.StringList, 4));
};


/**
 * @param {?proto.quant.datafeed.v1.StringList|undefined} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
*/
proto.quant.datafeed.v1.ScannerFilterValue.prototype.setStringList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.clearStringList = function() {
  return this.setStringList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.hasStringList = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DoubleList number_list = 5;
 * @return {?proto.quant.datafeed.v1.DoubleList}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.getNumberList = function() {
  return /** @type{?proto.quant.datafeed.v1.DoubleList} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.DoubleList, 5));
};


/**
 * @param {?proto.quant.datafeed.v1.DoubleList|undefined} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
*/
proto.quant.datafeed.v1.ScannerFilterValue.prototype.setNumberList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.quant.datafeed.v1.ScannerFilterValue.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerFilterValue} returns this
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.clearNumberList = function() {
  return this.setNumberList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterValue.prototype.hasNumberList = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScannerFilterExpression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScannerFilterExpression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilterExpression.toObject = function(includeInstance, msg) {
  var f, obj = {
left: jspb.Message.getFieldWithDefault(msg, 1, ""),
operation: jspb.Message.getFieldWithDefault(msg, 2, 0),
right: (f = msg.getRight()) && proto.quant.datafeed.v1.ScannerFilterValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScannerFilterExpression}
 */
proto.quant.datafeed.v1.ScannerFilterExpression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScannerFilterExpression;
  return proto.quant.datafeed.v1.ScannerFilterExpression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScannerFilterExpression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScannerFilterExpression}
 */
proto.quant.datafeed.v1.ScannerFilterExpression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLeft(value);
      break;
    case 2:
      var value = /** @type {!proto.quant.datafeed.v1.ScannerFilterOperation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    case 3:
      var value = new proto.quant.datafeed.v1.ScannerFilterValue;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerFilterValue.deserializeBinaryFromReader);
      msg.setRight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScannerFilterExpression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScannerFilterExpression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilterExpression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeft();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRight();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quant.datafeed.v1.ScannerFilterValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string left = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.getLeft = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterExpression} returns this
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.setLeft = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ScannerFilterOperation operation = 2;
 * @return {!proto.quant.datafeed.v1.ScannerFilterOperation}
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.getOperation = function() {
  return /** @type {!proto.quant.datafeed.v1.ScannerFilterOperation} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.ScannerFilterOperation} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterExpression} returns this
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ScannerFilterValue right = 3;
 * @return {?proto.quant.datafeed.v1.ScannerFilterValue}
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.getRight = function() {
  return /** @type{?proto.quant.datafeed.v1.ScannerFilterValue} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.ScannerFilterValue, 3));
};


/**
 * @param {?proto.quant.datafeed.v1.ScannerFilterValue|undefined} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterExpression} returns this
*/
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.setRight = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerFilterExpression} returns this
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.clearRight = function() {
  return this.setRight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterExpression.prototype.hasRight = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScannerFilterNode.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScannerFilterNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScannerFilterNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilterNode.toObject = function(includeInstance, msg) {
  var f, obj = {
expression: (f = msg.getExpression()) && proto.quant.datafeed.v1.ScannerFilterExpression.toObject(includeInstance, f),
operation: (f = msg.getOperation()) && proto.quant.datafeed.v1.ScannerFilterGroup.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScannerFilterNode}
 */
proto.quant.datafeed.v1.ScannerFilterNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScannerFilterNode;
  return proto.quant.datafeed.v1.ScannerFilterNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScannerFilterNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScannerFilterNode}
 */
proto.quant.datafeed.v1.ScannerFilterNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.ScannerFilterExpression;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerFilterExpression.deserializeBinaryFromReader);
      msg.setExpression(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.ScannerFilterGroup;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerFilterGroup.deserializeBinaryFromReader);
      msg.setOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScannerFilterNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScannerFilterNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScannerFilterNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilterNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExpression();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.quant.datafeed.v1.ScannerFilterExpression.serializeBinaryToWriter
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.ScannerFilterGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScannerFilterExpression expression = 1;
 * @return {?proto.quant.datafeed.v1.ScannerFilterExpression}
 */
proto.quant.datafeed.v1.ScannerFilterNode.prototype.getExpression = function() {
  return /** @type{?proto.quant.datafeed.v1.ScannerFilterExpression} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.ScannerFilterExpression, 1));
};


/**
 * @param {?proto.quant.datafeed.v1.ScannerFilterExpression|undefined} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterNode} returns this
*/
proto.quant.datafeed.v1.ScannerFilterNode.prototype.setExpression = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerFilterNode} returns this
 */
proto.quant.datafeed.v1.ScannerFilterNode.prototype.clearExpression = function() {
  return this.setExpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterNode.prototype.hasExpression = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ScannerFilterGroup operation = 2;
 * @return {?proto.quant.datafeed.v1.ScannerFilterGroup}
 */
proto.quant.datafeed.v1.ScannerFilterNode.prototype.getOperation = function() {
  return /** @type{?proto.quant.datafeed.v1.ScannerFilterGroup} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.ScannerFilterGroup, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.ScannerFilterGroup|undefined} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterNode} returns this
*/
proto.quant.datafeed.v1.ScannerFilterNode.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerFilterNode} returns this
 */
proto.quant.datafeed.v1.ScannerFilterNode.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerFilterNode.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ScannerFilterGroup.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScannerFilterGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScannerFilterGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScannerFilterGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilterGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
operator: jspb.Message.getFieldWithDefault(msg, 1, 0),
operandsList: jspb.Message.toObjectList(msg.getOperandsList(),
    proto.quant.datafeed.v1.ScannerFilterNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScannerFilterGroup}
 */
proto.quant.datafeed.v1.ScannerFilterGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScannerFilterGroup;
  return proto.quant.datafeed.v1.ScannerFilterGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScannerFilterGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScannerFilterGroup}
 */
proto.quant.datafeed.v1.ScannerFilterGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.quant.datafeed.v1.ScannerLogicalOperator} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.ScannerFilterNode;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerFilterNode.deserializeBinaryFromReader);
      msg.addOperands(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScannerFilterGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScannerFilterGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScannerFilterGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilterGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOperandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quant.datafeed.v1.ScannerFilterNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScannerLogicalOperator operator = 1;
 * @return {!proto.quant.datafeed.v1.ScannerLogicalOperator}
 */
proto.quant.datafeed.v1.ScannerFilterGroup.prototype.getOperator = function() {
  return /** @type {!proto.quant.datafeed.v1.ScannerLogicalOperator} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.ScannerLogicalOperator} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterGroup} returns this
 */
proto.quant.datafeed.v1.ScannerFilterGroup.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated ScannerFilterNode operands = 2;
 * @return {!Array<!proto.quant.datafeed.v1.ScannerFilterNode>}
 */
proto.quant.datafeed.v1.ScannerFilterGroup.prototype.getOperandsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.ScannerFilterNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.ScannerFilterNode, 2));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.ScannerFilterNode>} value
 * @return {!proto.quant.datafeed.v1.ScannerFilterGroup} returns this
*/
proto.quant.datafeed.v1.ScannerFilterGroup.prototype.setOperandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quant.datafeed.v1.ScannerFilterNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.ScannerFilterNode}
 */
proto.quant.datafeed.v1.ScannerFilterGroup.prototype.addOperands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quant.datafeed.v1.ScannerFilterNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ScannerFilterGroup} returns this
 */
proto.quant.datafeed.v1.ScannerFilterGroup.prototype.clearOperandsList = function() {
  return this.setOperandsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ScannerFilter.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScannerFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScannerFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScannerFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
operator: jspb.Message.getFieldWithDefault(msg, 1, 0),
operandsList: jspb.Message.toObjectList(msg.getOperandsList(),
    proto.quant.datafeed.v1.ScannerFilterNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScannerFilter}
 */
proto.quant.datafeed.v1.ScannerFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScannerFilter;
  return proto.quant.datafeed.v1.ScannerFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScannerFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScannerFilter}
 */
proto.quant.datafeed.v1.ScannerFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.quant.datafeed.v1.ScannerLogicalOperator} */ (reader.readEnum());
      msg.setOperator(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.ScannerFilterNode;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerFilterNode.deserializeBinaryFromReader);
      msg.addOperands(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScannerFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScannerFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScannerFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOperandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quant.datafeed.v1.ScannerFilterNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional ScannerLogicalOperator operator = 1;
 * @return {!proto.quant.datafeed.v1.ScannerLogicalOperator}
 */
proto.quant.datafeed.v1.ScannerFilter.prototype.getOperator = function() {
  return /** @type {!proto.quant.datafeed.v1.ScannerLogicalOperator} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.ScannerLogicalOperator} value
 * @return {!proto.quant.datafeed.v1.ScannerFilter} returns this
 */
proto.quant.datafeed.v1.ScannerFilter.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated ScannerFilterNode operands = 2;
 * @return {!Array<!proto.quant.datafeed.v1.ScannerFilterNode>}
 */
proto.quant.datafeed.v1.ScannerFilter.prototype.getOperandsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.ScannerFilterNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.ScannerFilterNode, 2));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.ScannerFilterNode>} value
 * @return {!proto.quant.datafeed.v1.ScannerFilter} returns this
*/
proto.quant.datafeed.v1.ScannerFilter.prototype.setOperandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quant.datafeed.v1.ScannerFilterNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.ScannerFilterNode}
 */
proto.quant.datafeed.v1.ScannerFilter.prototype.addOperands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quant.datafeed.v1.ScannerFilterNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ScannerFilter} returns this
 */
proto.quant.datafeed.v1.ScannerFilter.prototype.clearOperandsList = function() {
  return this.setOperandsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScannerSort.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScannerSort.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScannerSort} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerSort.toObject = function(includeInstance, msg) {
  var f, obj = {
sortBy: jspb.Message.getFieldWithDefault(msg, 1, ""),
sortOrder: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScannerSort}
 */
proto.quant.datafeed.v1.ScannerSort.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScannerSort;
  return proto.quant.datafeed.v1.ScannerSort.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScannerSort} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScannerSort}
 */
proto.quant.datafeed.v1.ScannerSort.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSortBy(value);
      break;
    case 2:
      var value = /** @type {!proto.quant.datafeed.v1.SortOrder} */ (reader.readEnum());
      msg.setSortOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScannerSort.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScannerSort.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScannerSort} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerSort.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSortBy();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSortOrder();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string sort_by = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ScannerSort.prototype.getSortBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ScannerSort} returns this
 */
proto.quant.datafeed.v1.ScannerSort.prototype.setSortBy = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SortOrder sort_order = 2;
 * @return {!proto.quant.datafeed.v1.SortOrder}
 */
proto.quant.datafeed.v1.ScannerSort.prototype.getSortOrder = function() {
  return /** @type {!proto.quant.datafeed.v1.SortOrder} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.quant.datafeed.v1.SortOrder} value
 * @return {!proto.quant.datafeed.v1.ScannerSort} returns this
 */
proto.quant.datafeed.v1.ScannerSort.prototype.setSortOrder = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScannerRange.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScannerRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScannerRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerRange.toObject = function(includeInstance, msg) {
  var f, obj = {
start: jspb.Message.getFieldWithDefault(msg, 1, 0),
end: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScannerRange}
 */
proto.quant.datafeed.v1.ScannerRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScannerRange;
  return proto.quant.datafeed.v1.ScannerRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScannerRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScannerRange}
 */
proto.quant.datafeed.v1.ScannerRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScannerRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScannerRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScannerRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 start = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.ScannerRange.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ScannerRange} returns this
 */
proto.quant.datafeed.v1.ScannerRange.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 end = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.ScannerRange.prototype.getEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ScannerRange} returns this
 */
proto.quant.datafeed.v1.ScannerRange.prototype.setEnd = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScannerOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScannerOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScannerOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
lang: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScannerOptions}
 */
proto.quant.datafeed.v1.ScannerOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScannerOptions;
  return proto.quant.datafeed.v1.ScannerOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScannerOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScannerOptions}
 */
proto.quant.datafeed.v1.ScannerOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLang(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScannerOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScannerOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScannerOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScannerOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string lang = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ScannerOptions.prototype.getLang = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ScannerOptions} returns this
 */
proto.quant.datafeed.v1.ScannerOptions.prototype.setLang = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScannerOptions} returns this
 */
proto.quant.datafeed.v1.ScannerOptions.prototype.clearLang = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScannerOptions.prototype.hasLang = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.repeatedFields_ = [1,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScanSymbolsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScanSymbolsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
columnsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
filter: (f = msg.getFilter()) && proto.quant.datafeed.v1.ScannerFilter.toObject(includeInstance, f),
sort: (f = msg.getSort()) && proto.quant.datafeed.v1.ScannerSort.toObject(includeInstance, f),
range: (f = msg.getRange()) && proto.quant.datafeed.v1.ScannerRange.toObject(includeInstance, f),
options: (f = msg.getOptions()) && proto.quant.datafeed.v1.ScannerOptions.toObject(includeInstance, f),
ignoreUnknownFields: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
marketsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
symbolsMap: (f = msg.getSymbolsMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScanSymbolsRequest;
  return proto.quant.datafeed.v1.ScanSymbolsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScanSymbolsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addColumns(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.ScannerFilter;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 3:
      var value = new proto.quant.datafeed.v1.ScannerSort;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerSort.deserializeBinaryFromReader);
      msg.setSort(value);
      break;
    case 4:
      var value = new proto.quant.datafeed.v1.ScannerRange;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerRange.deserializeBinaryFromReader);
      msg.setRange(value);
      break;
    case 5:
      var value = new proto.quant.datafeed.v1.ScannerOptions;
      reader.readMessage(value,proto.quant.datafeed.v1.ScannerOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreUnknownFields(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addMarkets(value);
      break;
    case 8:
      var value = msg.getSymbolsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readStringRequireUtf8, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader, "", new proto.google.protobuf.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScanSymbolsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScanSymbolsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.quant.datafeed.v1.ScannerFilter.serializeBinaryToWriter
    );
  }
  f = message.getSort();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.quant.datafeed.v1.ScannerSort.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.quant.datafeed.v1.ScannerRange.serializeBinaryToWriter
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.quant.datafeed.v1.ScannerOptions.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getMarketsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getSymbolsMap(true);
  if (f && f.getLength() > 0) {
jspb.internal.public_for_gencode.serializeMapToBinary(
    message.getSymbolsMap(true),
    8,
    writer,
    jspb.BinaryWriter.prototype.writeString,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.google.protobuf.Value.serializeBinaryToWriter);
  }
};


/**
 * repeated string columns = 1;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional ScannerFilter filter = 2;
 * @return {?proto.quant.datafeed.v1.ScannerFilter}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.getFilter = function() {
  return /** @type{?proto.quant.datafeed.v1.ScannerFilter} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.ScannerFilter, 2));
};


/**
 * @param {?proto.quant.datafeed.v1.ScannerFilter|undefined} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
*/
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ScannerSort sort = 3;
 * @return {?proto.quant.datafeed.v1.ScannerSort}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.getSort = function() {
  return /** @type{?proto.quant.datafeed.v1.ScannerSort} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.ScannerSort, 3));
};


/**
 * @param {?proto.quant.datafeed.v1.ScannerSort|undefined} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
*/
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.setSort = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.clearSort = function() {
  return this.setSort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.hasSort = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ScannerRange range = 4;
 * @return {?proto.quant.datafeed.v1.ScannerRange}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.getRange = function() {
  return /** @type{?proto.quant.datafeed.v1.ScannerRange} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.ScannerRange, 4));
};


/**
 * @param {?proto.quant.datafeed.v1.ScannerRange|undefined} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
*/
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.setRange = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.clearRange = function() {
  return this.setRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.hasRange = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ScannerOptions options = 5;
 * @return {?proto.quant.datafeed.v1.ScannerOptions}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.getOptions = function() {
  return /** @type{?proto.quant.datafeed.v1.ScannerOptions} */ (
    jspb.Message.getWrapperField(this, proto.quant.datafeed.v1.ScannerOptions, 5));
};


/**
 * @param {?proto.quant.datafeed.v1.ScannerOptions|undefined} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
*/
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool ignore_unknown_fields = 6;
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.getIgnoreUnknownFields = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.setIgnoreUnknownFields = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.clearIgnoreUnknownFields = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.hasIgnoreUnknownFields = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string markets = 7;
 * @return {!Array<string>}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.getMarketsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.setMarketsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.addMarkets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.clearMarketsList = function() {
  return this.setMarketsList([]);
};


/**
 * map<string, google.protobuf.Value> symbols = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.getSymbolsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsRequest} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsRequest.prototype.clearSymbolsMap = function() {
  this.getSymbolsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ScanSymbolRow.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScanSymbolRow.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScanSymbolRow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScanSymbolRow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScanSymbolRow.toObject = function(includeInstance, msg) {
  var f, obj = {
s: jspb.Message.getFieldWithDefault(msg, 1, ""),
dList: jspb.Message.toObjectList(msg.getDList(),
    google_protobuf_struct_pb.Value.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScanSymbolRow}
 */
proto.quant.datafeed.v1.ScanSymbolRow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScanSymbolRow;
  return proto.quant.datafeed.v1.ScanSymbolRow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScanSymbolRow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScanSymbolRow}
 */
proto.quant.datafeed.v1.ScanSymbolRow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setS(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.addD(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScanSymbolRow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScanSymbolRow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScanSymbolRow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScanSymbolRow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getS();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string s = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ScanSymbolRow.prototype.getS = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolRow} returns this
 */
proto.quant.datafeed.v1.ScanSymbolRow.prototype.setS = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated google.protobuf.Value d = 2;
 * @return {!Array<!proto.google.protobuf.Value>}
 */
proto.quant.datafeed.v1.ScanSymbolRow.prototype.getDList = function() {
  return /** @type{!Array<!proto.google.protobuf.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.Value, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.Value>} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolRow} returns this
*/
proto.quant.datafeed.v1.ScanSymbolRow.prototype.setDList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Value}
 */
proto.quant.datafeed.v1.ScanSymbolRow.prototype.addD = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ScanSymbolRow} returns this
 */
proto.quant.datafeed.v1.ScanSymbolRow.prototype.clearDList = function() {
  return this.setDList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ScanSymbolsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ScanSymbolsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
totalCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.quant.datafeed.v1.ScanSymbolRow.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsResponse}
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ScanSymbolsResponse;
  return proto.quant.datafeed.v1.ScanSymbolsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ScanSymbolsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsResponse}
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
      break;
    case 2:
      var value = new proto.quant.datafeed.v1.ScanSymbolRow;
      reader.readMessage(value,proto.quant.datafeed.v1.ScanSymbolRow.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ScanSymbolsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ScanSymbolsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.quant.datafeed.v1.ScanSymbolRow.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 total_count = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsResponse} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ScanSymbolRow data = 2;
 * @return {!Array<!proto.quant.datafeed.v1.ScanSymbolRow>}
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.ScanSymbolRow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.ScanSymbolRow, 2));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.ScanSymbolRow>} value
 * @return {!proto.quant.datafeed.v1.ScanSymbolsResponse} returns this
*/
proto.quant.datafeed.v1.ScanSymbolsResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.quant.datafeed.v1.ScanSymbolRow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.ScanSymbolRow}
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.quant.datafeed.v1.ScanSymbolRow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ScanSymbolsResponse} returns this
 */
proto.quant.datafeed.v1.ScanSymbolsResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.Tick.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.Tick.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.Tick} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.Tick.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
tsMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
price: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
size: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
source: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.Tick}
 */
proto.quant.datafeed.v1.Tick.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.Tick;
  return proto.quant.datafeed.v1.Tick.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.Tick} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.Tick}
 */
proto.quant.datafeed.v1.Tick.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTsMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.Tick.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.Tick.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.Tick} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.Tick.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTsMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.Tick.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.Tick} returns this
 */
proto.quant.datafeed.v1.Tick.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ts_ms = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.Tick.prototype.getTsMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Tick} returns this
 */
proto.quant.datafeed.v1.Tick.prototype.setTsMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional double price = 3;
 * @return {number}
 */
proto.quant.datafeed.v1.Tick.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Tick} returns this
 */
proto.quant.datafeed.v1.Tick.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double size = 4;
 * @return {number}
 */
proto.quant.datafeed.v1.Tick.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Tick} returns this
 */
proto.quant.datafeed.v1.Tick.prototype.setSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string source = 5;
 * @return {string}
 */
proto.quant.datafeed.v1.Tick.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.Tick} returns this
 */
proto.quant.datafeed.v1.Tick.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.IngestTicksRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.IngestTicksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.IngestTicksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.IngestTicksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.IngestTicksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
ticksList: jspb.Message.toObjectList(msg.getTicksList(),
    proto.quant.datafeed.v1.Tick.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.IngestTicksRequest}
 */
proto.quant.datafeed.v1.IngestTicksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.IngestTicksRequest;
  return proto.quant.datafeed.v1.IngestTicksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.IngestTicksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.IngestTicksRequest}
 */
proto.quant.datafeed.v1.IngestTicksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.Tick;
      reader.readMessage(value,proto.quant.datafeed.v1.Tick.deserializeBinaryFromReader);
      msg.addTicks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.IngestTicksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.IngestTicksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.IngestTicksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.IngestTicksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.Tick.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Tick ticks = 1;
 * @return {!Array<!proto.quant.datafeed.v1.Tick>}
 */
proto.quant.datafeed.v1.IngestTicksRequest.prototype.getTicksList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.Tick>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.Tick, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.Tick>} value
 * @return {!proto.quant.datafeed.v1.IngestTicksRequest} returns this
*/
proto.quant.datafeed.v1.IngestTicksRequest.prototype.setTicksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.Tick=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.Tick}
 */
proto.quant.datafeed.v1.IngestTicksRequest.prototype.addTicks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.Tick, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.IngestTicksRequest} returns this
 */
proto.quant.datafeed.v1.IngestTicksRequest.prototype.clearTicksList = function() {
  return this.setTicksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.IngestTicksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.IngestTicksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.IngestTicksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.IngestTicksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
inserted: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.IngestTicksResponse}
 */
proto.quant.datafeed.v1.IngestTicksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.IngestTicksResponse;
  return proto.quant.datafeed.v1.IngestTicksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.IngestTicksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.IngestTicksResponse}
 */
proto.quant.datafeed.v1.IngestTicksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInserted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.IngestTicksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.IngestTicksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.IngestTicksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.IngestTicksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInserted();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 inserted = 1;
 * @return {number}
 */
proto.quant.datafeed.v1.IngestTicksResponse.prototype.getInserted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.IngestTicksResponse} returns this
 */
proto.quant.datafeed.v1.IngestTicksResponse.prototype.setInserted = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ReplayTicksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ReplayTicksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ReplayTicksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
startTsMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
endTsMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
limit: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ReplayTicksRequest}
 */
proto.quant.datafeed.v1.ReplayTicksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ReplayTicksRequest;
  return proto.quant.datafeed.v1.ReplayTicksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ReplayTicksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ReplayTicksRequest}
 */
proto.quant.datafeed.v1.ReplayTicksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTsMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTsMs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ReplayTicksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ReplayTicksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ReplayTicksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartTsMs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getEndTsMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ReplayTicksRequest} returns this
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 start_ts_ms = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.getStartTsMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ReplayTicksRequest} returns this
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.setStartTsMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 end_ts_ms = 3;
 * @return {number}
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.getEndTsMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ReplayTicksRequest} returns this
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.setEndTsMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 limit = 4;
 * @return {number}
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ReplayTicksRequest} returns this
 */
proto.quant.datafeed.v1.ReplayTicksRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ReplayTicksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ReplayTicksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ReplayTicksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ReplayTicksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ReplayTicksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
ticksList: jspb.Message.toObjectList(msg.getTicksList(),
    proto.quant.datafeed.v1.Tick.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ReplayTicksResponse}
 */
proto.quant.datafeed.v1.ReplayTicksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ReplayTicksResponse;
  return proto.quant.datafeed.v1.ReplayTicksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ReplayTicksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ReplayTicksResponse}
 */
proto.quant.datafeed.v1.ReplayTicksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.Tick;
      reader.readMessage(value,proto.quant.datafeed.v1.Tick.deserializeBinaryFromReader);
      msg.addTicks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ReplayTicksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ReplayTicksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ReplayTicksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ReplayTicksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTicksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.Tick.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Tick ticks = 1;
 * @return {!Array<!proto.quant.datafeed.v1.Tick>}
 */
proto.quant.datafeed.v1.ReplayTicksResponse.prototype.getTicksList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.Tick>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.Tick, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.Tick>} value
 * @return {!proto.quant.datafeed.v1.ReplayTicksResponse} returns this
*/
proto.quant.datafeed.v1.ReplayTicksResponse.prototype.setTicksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.Tick=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.Tick}
 */
proto.quant.datafeed.v1.ReplayTicksResponse.prototype.addTicks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.Tick, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ReplayTicksResponse} returns this
 */
proto.quant.datafeed.v1.ReplayTicksResponse.prototype.clearTicksList = function() {
  return this.setTicksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.Bar.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.Bar.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.Bar} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.Bar.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
interval: jspb.Message.getFieldWithDefault(msg, 2, ""),
tsMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
open: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
high: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
low: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
close: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
volume: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.Bar}
 */
proto.quant.datafeed.v1.Bar.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.Bar;
  return proto.quant.datafeed.v1.Bar.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.Bar} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.Bar}
 */
proto.quant.datafeed.v1.Bar.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setInterval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTsMs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setOpen(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHigh(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLow(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClose(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setVolume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.Bar.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.Bar.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.Bar} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.Bar.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTsMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getOpen();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getLow();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getClose();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.Bar.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.Bar} returns this
 */
proto.quant.datafeed.v1.Bar.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string interval = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.Bar.prototype.getInterval = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.Bar} returns this
 */
proto.quant.datafeed.v1.Bar.prototype.setInterval = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 ts_ms = 3;
 * @return {number}
 */
proto.quant.datafeed.v1.Bar.prototype.getTsMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Bar} returns this
 */
proto.quant.datafeed.v1.Bar.prototype.setTsMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional double open = 4;
 * @return {number}
 */
proto.quant.datafeed.v1.Bar.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Bar} returns this
 */
proto.quant.datafeed.v1.Bar.prototype.setOpen = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double high = 5;
 * @return {number}
 */
proto.quant.datafeed.v1.Bar.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Bar} returns this
 */
proto.quant.datafeed.v1.Bar.prototype.setHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double low = 6;
 * @return {number}
 */
proto.quant.datafeed.v1.Bar.prototype.getLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Bar} returns this
 */
proto.quant.datafeed.v1.Bar.prototype.setLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double close = 7;
 * @return {number}
 */
proto.quant.datafeed.v1.Bar.prototype.getClose = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Bar} returns this
 */
proto.quant.datafeed.v1.Bar.prototype.setClose = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double volume = 8;
 * @return {number}
 */
proto.quant.datafeed.v1.Bar.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.Bar} returns this
 */
proto.quant.datafeed.v1.Bar.prototype.setVolume = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.QueryBarsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.QueryBarsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.QueryBarsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
interval: jspb.Message.getFieldWithDefault(msg, 2, ""),
startTsMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
endTsMs: jspb.Message.getFieldWithDefault(msg, 4, 0),
limit: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.QueryBarsRequest}
 */
proto.quant.datafeed.v1.QueryBarsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.QueryBarsRequest;
  return proto.quant.datafeed.v1.QueryBarsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.QueryBarsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.QueryBarsRequest}
 */
proto.quant.datafeed.v1.QueryBarsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setInterval(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTsMs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEndTsMs(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.QueryBarsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.QueryBarsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.QueryBarsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartTsMs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEndTsMs();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.QueryBarsRequest} returns this
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string interval = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.getInterval = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.QueryBarsRequest} returns this
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.setInterval = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 start_ts_ms = 3;
 * @return {number}
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.getStartTsMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QueryBarsRequest} returns this
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.setStartTsMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 end_ts_ms = 4;
 * @return {number}
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.getEndTsMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QueryBarsRequest} returns this
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.setEndTsMs = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 limit = 5;
 * @return {number}
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.QueryBarsRequest} returns this
 */
proto.quant.datafeed.v1.QueryBarsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.QueryBarsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.QueryBarsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.QueryBarsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.QueryBarsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.QueryBarsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
barsList: jspb.Message.toObjectList(msg.getBarsList(),
    proto.quant.datafeed.v1.Bar.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.QueryBarsResponse}
 */
proto.quant.datafeed.v1.QueryBarsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.QueryBarsResponse;
  return proto.quant.datafeed.v1.QueryBarsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.QueryBarsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.QueryBarsResponse}
 */
proto.quant.datafeed.v1.QueryBarsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.Bar;
      reader.readMessage(value,proto.quant.datafeed.v1.Bar.deserializeBinaryFromReader);
      msg.addBars(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.QueryBarsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.QueryBarsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.QueryBarsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.QueryBarsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBarsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.Bar.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Bar bars = 1;
 * @return {!Array<!proto.quant.datafeed.v1.Bar>}
 */
proto.quant.datafeed.v1.QueryBarsResponse.prototype.getBarsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.Bar>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.Bar, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.Bar>} value
 * @return {!proto.quant.datafeed.v1.QueryBarsResponse} returns this
*/
proto.quant.datafeed.v1.QueryBarsResponse.prototype.setBarsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.Bar=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.Bar}
 */
proto.quant.datafeed.v1.QueryBarsResponse.prototype.addBars = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.Bar, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.QueryBarsResponse} returns this
 */
proto.quant.datafeed.v1.QueryBarsResponse.prototype.clearBarsList = function() {
  return this.setBarsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ListNewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ListNewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ListNewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListNewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ListNewsRequest}
 */
proto.quant.datafeed.v1.ListNewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ListNewsRequest;
  return proto.quant.datafeed.v1.ListNewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ListNewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ListNewsRequest}
 */
proto.quant.datafeed.v1.ListNewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ListNewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ListNewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ListNewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListNewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ListNewsRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ListNewsRequest} returns this
 */
proto.quant.datafeed.v1.ListNewsRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.ListNewsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ListNewsRequest} returns this
 */
proto.quant.datafeed.v1.ListNewsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.NewsEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.NewsEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.NewsEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.NewsEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
symbol: jspb.Message.getFieldWithDefault(msg, 2, ""),
title: jspb.Message.getFieldWithDefault(msg, 3, ""),
url: jspb.Message.getFieldWithDefault(msg, 4, ""),
tsMs: jspb.Message.getFieldWithDefault(msg, 5, 0),
source: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.NewsEvent}
 */
proto.quant.datafeed.v1.NewsEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.NewsEvent;
  return proto.quant.datafeed.v1.NewsEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.NewsEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.NewsEvent}
 */
proto.quant.datafeed.v1.NewsEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTsMs(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.NewsEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.NewsEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.NewsEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.NewsEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTsMs();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.NewsEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.NewsEvent} returns this
 */
proto.quant.datafeed.v1.NewsEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string symbol = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.NewsEvent.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.NewsEvent} returns this
 */
proto.quant.datafeed.v1.NewsEvent.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.NewsEvent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.NewsEvent} returns this
 */
proto.quant.datafeed.v1.NewsEvent.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.NewsEvent.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.NewsEvent} returns this
 */
proto.quant.datafeed.v1.NewsEvent.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 ts_ms = 5;
 * @return {number}
 */
proto.quant.datafeed.v1.NewsEvent.prototype.getTsMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.NewsEvent} returns this
 */
proto.quant.datafeed.v1.NewsEvent.prototype.setTsMs = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string source = 6;
 * @return {string}
 */
proto.quant.datafeed.v1.NewsEvent.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.NewsEvent} returns this
 */
proto.quant.datafeed.v1.NewsEvent.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ListNewsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ListNewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ListNewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ListNewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListNewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.quant.datafeed.v1.NewsEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ListNewsResponse}
 */
proto.quant.datafeed.v1.ListNewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ListNewsResponse;
  return proto.quant.datafeed.v1.ListNewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ListNewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ListNewsResponse}
 */
proto.quant.datafeed.v1.ListNewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.NewsEvent;
      reader.readMessage(value,proto.quant.datafeed.v1.NewsEvent.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ListNewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ListNewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ListNewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListNewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.NewsEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewsEvent items = 1;
 * @return {!Array<!proto.quant.datafeed.v1.NewsEvent>}
 */
proto.quant.datafeed.v1.ListNewsResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.NewsEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.NewsEvent, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.NewsEvent>} value
 * @return {!proto.quant.datafeed.v1.ListNewsResponse} returns this
*/
proto.quant.datafeed.v1.ListNewsResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.NewsEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.NewsEvent}
 */
proto.quant.datafeed.v1.ListNewsResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.NewsEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ListNewsResponse} returns this
 */
proto.quant.datafeed.v1.ListNewsResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ListSocialRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ListSocialRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ListSocialRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListSocialRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
symbol: jspb.Message.getFieldWithDefault(msg, 1, ""),
limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ListSocialRequest}
 */
proto.quant.datafeed.v1.ListSocialRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ListSocialRequest;
  return proto.quant.datafeed.v1.ListSocialRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ListSocialRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ListSocialRequest}
 */
proto.quant.datafeed.v1.ListSocialRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ListSocialRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ListSocialRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ListSocialRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListSocialRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string symbol = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.ListSocialRequest.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.ListSocialRequest} returns this
 */
proto.quant.datafeed.v1.ListSocialRequest.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 limit = 2;
 * @return {number}
 */
proto.quant.datafeed.v1.ListSocialRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.ListSocialRequest} returns this
 */
proto.quant.datafeed.v1.ListSocialRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.SocialEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.SocialEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SocialEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
symbol: jspb.Message.getFieldWithDefault(msg, 2, ""),
platform: jspb.Message.getFieldWithDefault(msg, 3, ""),
author: jspb.Message.getFieldWithDefault(msg, 4, ""),
text: jspb.Message.getFieldWithDefault(msg, 5, ""),
tsMs: jspb.Message.getFieldWithDefault(msg, 6, 0),
sentiment: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.SocialEvent}
 */
proto.quant.datafeed.v1.SocialEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.SocialEvent;
  return proto.quant.datafeed.v1.SocialEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.SocialEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.SocialEvent}
 */
proto.quant.datafeed.v1.SocialEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPlatform(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAuthor(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setText(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTsMs(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSentiment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.SocialEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.SocialEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.SocialEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAuthor();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTsMs();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getSentiment();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SocialEvent} returns this
 */
proto.quant.datafeed.v1.SocialEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string symbol = 2;
 * @return {string}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SocialEvent} returns this
 */
proto.quant.datafeed.v1.SocialEvent.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string platform = 3;
 * @return {string}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SocialEvent} returns this
 */
proto.quant.datafeed.v1.SocialEvent.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string author = 4;
 * @return {string}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.getAuthor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SocialEvent} returns this
 */
proto.quant.datafeed.v1.SocialEvent.prototype.setAuthor = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string text = 5;
 * @return {string}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.quant.datafeed.v1.SocialEvent} returns this
 */
proto.quant.datafeed.v1.SocialEvent.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 ts_ms = 6;
 * @return {number}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.getTsMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.SocialEvent} returns this
 */
proto.quant.datafeed.v1.SocialEvent.prototype.setTsMs = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double sentiment = 7;
 * @return {number}
 */
proto.quant.datafeed.v1.SocialEvent.prototype.getSentiment = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.quant.datafeed.v1.SocialEvent} returns this
 */
proto.quant.datafeed.v1.SocialEvent.prototype.setSentiment = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.quant.datafeed.v1.ListSocialResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.quant.datafeed.v1.ListSocialResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.quant.datafeed.v1.ListSocialResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.quant.datafeed.v1.ListSocialResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListSocialResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.quant.datafeed.v1.SocialEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.binary.bytesource.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.quant.datafeed.v1.ListSocialResponse}
 */
proto.quant.datafeed.v1.ListSocialResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.quant.datafeed.v1.ListSocialResponse;
  return proto.quant.datafeed.v1.ListSocialResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.quant.datafeed.v1.ListSocialResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.quant.datafeed.v1.ListSocialResponse}
 */
proto.quant.datafeed.v1.ListSocialResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.quant.datafeed.v1.SocialEvent;
      reader.readMessage(value,proto.quant.datafeed.v1.SocialEvent.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.quant.datafeed.v1.ListSocialResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.quant.datafeed.v1.ListSocialResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.quant.datafeed.v1.ListSocialResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.quant.datafeed.v1.ListSocialResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.quant.datafeed.v1.SocialEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SocialEvent items = 1;
 * @return {!Array<!proto.quant.datafeed.v1.SocialEvent>}
 */
proto.quant.datafeed.v1.ListSocialResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.quant.datafeed.v1.SocialEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.quant.datafeed.v1.SocialEvent, 1));
};


/**
 * @param {!Array<!proto.quant.datafeed.v1.SocialEvent>} value
 * @return {!proto.quant.datafeed.v1.ListSocialResponse} returns this
*/
proto.quant.datafeed.v1.ListSocialResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.quant.datafeed.v1.SocialEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.quant.datafeed.v1.SocialEvent}
 */
proto.quant.datafeed.v1.ListSocialResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.quant.datafeed.v1.SocialEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.quant.datafeed.v1.ListSocialResponse} returns this
 */
proto.quant.datafeed.v1.ListSocialResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * @enum {number}
 */
proto.quant.datafeed.v1.SeriesFormat = {
  SERIES_FORMAT_UNSPECIFIED: 0,
  SERIES_FORMAT_PRICE: 1,
  SERIES_FORMAT_VOLUME: 2
};

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.VisiblePlotsSet = {
  VISIBLE_PLOTS_SET_UNSPECIFIED: 0,
  VISIBLE_PLOTS_SET_OHLCV: 1,
  VISIBLE_PLOTS_SET_OHLC: 2,
  VISIBLE_PLOTS_SET_C: 3,
  VISIBLE_PLOTS_SET_HLC: 4
};

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.DataStatus = {
  DATA_STATUS_UNSPECIFIED: 0,
  DATA_STATUS_STREAMING: 1,
  DATA_STATUS_ENDOFDAY: 2,
  DATA_STATUS_DELAYED_STREAMING: 3
};

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.SortOrder = {
  SORT_ORDER_UNSPECIFIED: 0,
  SORT_ORDER_ASC: 1,
  SORT_ORDER_DESC: 2
};

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.TimescaleMarkShape = {
  TIMESCALE_MARK_SHAPE_UNSPECIFIED: 0,
  TIMESCALE_MARK_SHAPE_CIRCLE: 1,
  TIMESCALE_MARK_SHAPE_EARNING_UP: 2,
  TIMESCALE_MARK_SHAPE_EARNING_DOWN: 3,
  TIMESCALE_MARK_SHAPE_EARNING: 4
};

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.ScannerLogicalOperator = {
  SCANNER_LOGICAL_OPERATOR_UNSPECIFIED: 0,
  SCANNER_LOGICAL_OPERATOR_AND: 1,
  SCANNER_LOGICAL_OPERATOR_OR: 2
};

/**
 * @enum {number}
 */
proto.quant.datafeed.v1.ScannerFilterOperation = {
  SCANNER_FILTER_OPERATION_UNSPECIFIED: 0,
  SCANNER_FILTER_OPERATION_EQUAL: 1,
  SCANNER_FILTER_OPERATION_NOT_EQUAL: 2,
  SCANNER_FILTER_OPERATION_GREATER: 3,
  SCANNER_FILTER_OPERATION_GREATER_OR_EQUAL: 4,
  SCANNER_FILTER_OPERATION_LESS: 5,
  SCANNER_FILTER_OPERATION_LESS_OR_EQUAL: 6,
  SCANNER_FILTER_OPERATION_IN_RANGE: 7,
  SCANNER_FILTER_OPERATION_NOT_IN_RANGE: 8,
  SCANNER_FILTER_OPERATION_HAS: 9,
  SCANNER_FILTER_OPERATION_HAS_NONE_OF: 10,
  SCANNER_FILTER_OPERATION_MATCH: 11,
  SCANNER_FILTER_OPERATION_NOT_MATCH: 12
};

goog.object.extend(exports, proto.quant.datafeed.v1);
