import * as z from 'zod';
import { LibrarySubsessionInfo } from './subsession-info';
import { SymbolInfoPriceSource } from './price-source';
import { VisiblePlotsSet } from './visible-plot-set';
import { ResolutionString } from './resolution';
import { Timezone } from './timezone';
import { SeriesFormat } from './series-format';

export const LibrarySymbolInfo = z.object({
  name: z.string().meta({
    examples: ['AAPL'],
    description:
      'It is a symbol name within an exchange, such as AAPL or 9988 (Hong Kong). Note that it should not contain the exchange name. This symbol name is visible to users and can be repeated.',
  }),
  ticker: z
    .string()
    .optional()
    .meta({
      examples: ['AAPL'],
      description:
        'It is an unique identifier for a particular symbol in your symbology. If you specify this property, its value will be used for all data requests for this symbol. ticker will be treated the same as name if not specified explicitly.',
    }),
  description: z.string().meta({
    examples: ['Apple Inc'],
    description: 'The description of the symbol. Will be displayed in the chart legend for this symbol.',
  }),
  type: z.string().meta({
    examples: ['stock'],
    description: 'Type of the instrument.',
  }),
  session: z.string().meta({
    examples: ['0930-1600'],
    description:
      'Trading hours for the symbol. The time should be in the exchange time zone specified in the timezone property.',
  }),
  session_holidays: z
    .string()
    .optional()
    .meta({
      examples: ['20181105,20181107,20181112'],
      description:
        'A string that contains a list of non-trading holidays for the symbol. Holiday dates should be in the YYYYMMDD format. These dates are not displayed on the chart.',
    }),
  session_display: z
    .string()
    .optional()
    .meta({
      examples: ['0930-1600'],
      description: 'The session value to display in the UI. If not specified, then session is used.',
    }),
  corrections: z
    .string()
    .optional()
    .meta({
      examples: ['1900F4-2350F4,1000-1845:20181113;1000-1400:20181114'],
      description:
        'List of corrections for a symbol. The corrections are days when the trading session differs from the default one set in session.',
    }),
  timezone: Timezone.meta({
    examples: ['America/New_York'],
    description:
      'The time zone of the exchange where the symbol is listed. The time zone value should be in the OlsonDB format.',
  }),
  exchange: z.string().meta({
    examples: ['NASDAQ'],
    description:
      'Traded exchange (current (proxy) exchange). The name will be displayed in the chart legend for this symbol.',
  }),
  listed_exchange: z.string().meta({
    examples: ['NASDAQ'],
    description:
      'short name of the exchange where this symbol is traded (real listed exchange). The name will be displayed in the chart legend for this symbol.',
  }),
  format: SeriesFormat.meta({
    examples: ['price'],
  }),
  minmov: z.number().meta({
    examples: [1],
    description:
      'The number of units that make up one tick. For example, U.S. equities are quotes in decimals, and tick in decimals, and can go up +/- .01. Therefore, the tick increment is 1 and minmov = 1.',
  }),
  pricescale: z.number().meta({
    examples: [100],
    description: 'A number of decimal places or fractions that the price has.',
  }),
  minmove2: z
    .number()
    .optional()
    .meta({
      examples: [0],
      description:
        'This property is used to display prices in the fraction of a fraction format. For common prices, minmove2 can be skipped or set to 0.',
    }),
  fractional: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description: 'For common prices this can be skipped.',
    }),
  variable_tick_size: z
    .string()
    .optional()
    .meta({
      examples: ['0.01 10 0.02 25 0.05'],
      description:
        "Dynamic minimum price movement. It is used if the instrument's minimum price movement changes depending on the price range.",
    }),
  has_intraday: z
    .boolean()
    .optional()
    .meta({
      examples: [true],
      description:
        'A flag indicating whether your datafeed contains intraday (minutes) data for this symbol. If true, the library requests this data when an intraday resolution is selected. If false, No data here is displayed on the chart.',
    }),
  has_daily: z
    .boolean()
    .optional()
    .meta({
      examples: [true],
      description:
        'A flag indicating whether your datafeed contains daily data for this symbol. If true, the library requests this data when a daily resolution is selected. If false, No data here is displayed on the chart.',
    }),
  has_weekly_and_monthly: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description:
        'A flag indicating whether your datafeed contains weekly or monthly data for this symbol. If true, the library requests this data when the corresponding resolution is selected.',
    }),
  has_seconds: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description:
        'A flag indicating whether your datafeed contains seconds data for this symbol. If true, the library requests this data when a seconds resolution is selected. If false, No data here is displayed on the chart.',
    }),
  has_ticks: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description:
        'A flag indicating whether your datafeed contains ticks data for this symbol. If true, the library requests this data when a resolution in ticks is selected. If false, No data here is displayed on the chart.',
    }),
  has_empty_bars: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description:
        'The boolean value showing whether the library should generate empty bars in the session when there is no data from the data feed for this particular time.',
    }),
  build_seconds_from_ticks: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description:
        'The boolean value showing whether or not seconds bars for this symbol can be built from ticks. Only available in Trading Platform.',
    }),
  supported_resolutions: z
    .array(ResolutionString)
    .optional()
    .meta({
      examples: [['1', '5', '15', '30', '60', '1D']],
      description:
        'An array of resolutions which should be enabled in the Resolution drop-down menu for this symbol. Resolution or time interval is a time period of one bar. Supports tick (xT), intraday seconds (xS), minutes (x), hours (x minutes), and DWM resolutions: days (xD), weeks (xW), months (xM), years (xM months).',
    }),
  intraday_multipliers: z
    .array(z.string())
    .optional()
    .meta({
      examples: [['1', '5', '15', '30', '60']],
      description:
        'An array of intraday (minutes) resolutions that your datafeed supports. Items in the array should be listed in ascending order.',
    }),
  seconds_multipliers: z
    .array(z.string())
    .optional()
    .meta({
      examples: [['1', '5', '15']],
      description:
        'An array of seconds resolutions that your datafeed supports. Items in the array should be listed in ascending order and should not include letters.',
    }),
  daily_multipliers: z
    .array(z.string())
    .optional()
    .meta({
      examples: [['1']],
      description:
        'An array of daily resolutions that your datafeed supports. Items in the array should be listed in ascending order and should not include letters.',
    }),
  weekly_multipliers: z
    .array(z.string())
    .optional()
    .meta({
      examples: [['1']],
      description:
        'An array of weekly resolutions that your datafeed supports. Items in the array should be listed in ascending order and should not include letters.',
    }),
  monthly_multipliers: z
    .array(z.string())
    .optional()
    .meta({
      examples: [['1', '3', '6', '12']],
      description:
        'An array of monthly resolutions that your datafeed supports. Items in the array should be listed in ascending order and should not include letters.',
    }),
  volume_precision: z
    .number()
    .optional()
    .meta({
      examples: [0],
      description:
        'Integer showing typical volume value decimal places for a particular symbol. 0 means volume is always an integer. 1 means that there might be 1 numeric character after the comma.',
    }),
  data_status: z
    .enum(['streaming', 'endofday', 'delayed_streaming'])
    .optional()
    .meta({
      examples: ['streaming'],
      description: 'The status code of a series with this symbol.',
    }),
  delay: z
    .number()
    .optional()
    .meta({
      examples: [0],
      description: 'Type of delay that is associated to the data or real delay for real time data.',
    }),
  expired: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description: 'Boolean showing whether this symbol is expired futures contract or not.',
    }),
  expiration_date: z
    .number()
    .optional()
    .meta({
      examples: [1666335600],
      description:
        'Unix timestamp of the expiration date. One must set this value when expired = true. The library will request data for this symbol starting from that time point.',
    }),
  sector: z
    .string()
    .optional()
    .meta({
      examples: ['Technology'],
      description: 'Sector for stocks to be displayed in the Security Info.',
    }),
  industry: z
    .string()
    .optional()
    .meta({
      examples: ['Consumer Electronics'],
      description: 'Industry for stocks to be displayed in the Security Info.',
    }),
  currency_code: z
    .string()
    .optional()
    .meta({
      examples: ['USD'],
      description:
        'The currency in which the instrument is traded or some other currency if currency conversion is enabled. It is displayed in the Security Info dialog and on the price axes.',
    }),
  original_currency_code: z
    .string()
    .optional()
    .meta({
      examples: ['USD'],
      description: 'The currency in which the instrument is traded.',
    }),
  unit_id: z
    .string()
    .optional()
    .meta({
      examples: ['1'],
      description:
        'A unique identifier of a unit in which the instrument is traded or some other identifier if unit conversion is enabled. It is displayed on the price axes.',
    }),
  original_unit_id: z
    .string()
    .optional()
    .meta({
      examples: ['1'],
      description: 'A unique identifier of a unit in which the instrument is traded.',
    }),
  unit_conversion_types: z
    .array(z.string())
    .optional()
    .meta({
      examples: [['currency', 'weight']],
      description: 'Allowed unit conversion group names.',
    }),
  visible_plots_set: VisiblePlotsSet.optional().meta({
    examples: ['ohlcv'],
  }),
  exchange_logo: z
    .string()
    .optional()
    .meta({
      examples: ['https://example.com/images/exchanges/nasdaq.png'],
      description:
        'URL of image to be displayed as the logo for the exchange. The show_exchange_logos featureset needs to be enabled for this to be visible in the UI.',
    }),
  logo_urls: z
    .union([z.tuple([z.string()]), z.tuple([z.string(), z.string()])])
    .optional()
    .meta({
      examples: [['https://example.com/images/symbols/aapl.png']],
      description:
        'URL of image/s to be displayed as the logo/s for the symbol. The show_symbol_logos featureset needs to be enabled for this to be visible in the UI.',
    }),
  long_description: z
    .string()
    .optional()
    .meta({
      examples: ['Apple Inc. is an American multinational technology company...'],
      description: 'Symbol Long description',
    }),
  base_name: z
    .array(z.string())
    .optional()
    .meta({
      examples: [['NASDAQ:AAPL', 'NASDAQ:MSFT']],
      description: 'Array of base symbols',
    }),
  price_sources: z
    .array(SymbolInfoPriceSource)
    .optional()
    .meta({
      examples: [[{ id: '1', name: 'Spot Price' }]],
      description:
        'Supported price sources for the symbol. Price sources appear in the series legend and indicate the origin of values represented by symbol bars.',
    }),
  price_source_id: z
    .string()
    .optional()
    .meta({
      examples: ['1'],
      description:
        'Optional ID of a price source for a symbol. Should match one of the price sources from the price_sources array.',
    }),
  subsessions: z
    .array(LibrarySubsessionInfo)
    .optional()
    .meta({
      examples: [
        [
          {
            id: 'premarket',
            description: 'Pre-market',
            session: '0400-0930',
          },
        ],
      ],
      description:
        'An array of objects that contain information about certain subsessions within the extended session.',
    }),
  subsession_id: z
    .string()
    .optional()
    .meta({
      examples: ['regular'],
      description:
        'An ID of a subsession specified in subsessions. The value must match the subsession that is currently displayed on the chart.',
    }),
  library_custom_fields: z.record(z.string(), z.unknown()).optional().meta({
    description:
      'Additional metadata to include with the symbol information. These parameters will not affect existing properties such as ticker or name and will not be processed by the library.',
  }),
});

export type LibrarySymbolInfo = z.infer<typeof LibrarySymbolInfo>;
