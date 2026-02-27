import * as z from 'zod';

export const SymbolColumn = z.enum([
  // Basic Info
  'id',
  'class',
  'instrument_id',
  'exchange_id',
  'ins_id',
  'ins_name',
  'ins_name_wh',
  'py',
  'py_wh',
  'sort_key',
  'expired',

  // Trading Info
  'volume_multiple',
  'price_tick',
  'price_decs',
  'trading_time',
  'commission',
  'margin',

  // Product Info
  'product_id',
  'underlying_product',
  'product_short_name',
  'product_short_name_wh',

  // Options Info
  'option_class',
  'strike_price',
  'underlying_symbol',
  'underlying_multiple',

  // Delivery Info
  'delivery_year',
  'delivery_month',
  'expire_datetime',

  // Market Data
  'last_price',
  'pre_volume',
  'open_interest',
  'settlement_price',

  // Order Limits
  'max_market_order_volume',
  'max_limit_order_volume',
  'min_market_order_volume',
  'min_limit_order_volume',
  'open_max_market_order_volume',
  'open_max_limit_order_volume',
  'open_min_market_order_volume',
  'open_min_limit_order_volume',
  'close_max_market_order_volume',
  'close_max_limit_order_volume',
  'close_min_market_order_volume',
  'close_min_limit_order_volume',

  // Combination Info
  'leg1_symbol',
  'leg2_symbol',
  'mmsa',

  // Timestamps
  'created_at',
  'updated_at',
]);

export type SymbolColumn = z.infer<typeof SymbolColumn>;
