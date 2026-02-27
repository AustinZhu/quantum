import * as z from 'zod';
import { oc } from '@orpc/contract';
import { Timezone, VisiblePlotsSet } from './schema';

const GetSymbolInfoInput = z.object({
  group: z.string().meta({
    param: {
      name: 'group',
      in: 'query',
    },
    example: 'NYSE',
    description: 'Symbol group name',
  }),
});

type GetSymbolInfoInput = z.infer<typeof GetSymbolInfoInput>;

// Response-as-table format for symbol group information
// Each property can be either a single value (applied to all symbols) or an array (per-symbol values)
// Arrays must have the same length as the symbol array
const GetSymbolInfoOutput = z.object({
  // Required fields
  symbol: z.array(z.string()).meta({
    example: ['AAPL', 'MSFT', 'SPX'],
    description: 'Array of symbol names',
  }),
  description: z.union([z.string(), z.array(z.string())]).meta({
    example: ['Apple Inc', 'Microsoft corp', 'S&P 500 index'],
    description: 'Symbol description(s)',
  }),
  minmov: z.union([z.number(), z.array(z.number())]).meta({
    example: 1,
    description: 'Minimum price movement',
  }),
  pricescale: z.union([z.number(), z.array(z.number())]).meta({
    example: [1, 1, 100],
    description: 'Price scale',
  }),
  type: z.union([z.string(), z.array(z.string())]).meta({
    example: ['stock', 'stock', 'index'],
    description: 'Symbol type(s)',
  }),
  timezone: z.union([Timezone, z.array(Timezone)]).meta({
    example: 'America/New_York',
    description: 'Timezone',
  }),
  // Optional fields
  'exchange-listed': z
    .union([z.string(), z.array(z.string())])
    .optional()
    .meta({
      example: 'NYSE',
      description: 'Exchange where symbol is listed',
    }),
  'exchange-traded': z
    .union([z.string(), z.array(z.string())])
    .optional()
    .meta({
      example: 'NYSE',
      description: 'Exchange where symbol is traded',
    }),
  minmov2: z
    .union([z.number(), z.array(z.number())])
    .optional()
    .meta({
      example: 0,
      description: 'For fractional prices',
    }),
  fractional: z
    .union([z.boolean(), z.array(z.boolean())])
    .optional()
    .meta({
      example: false,
      description: 'Is fractional price',
    }),
  'has-intraday': z
    .union([z.boolean(), z.array(z.boolean())])
    .optional()
    .meta({
      example: true,
      description: 'Has intraday data',
    }),
  'has-daily': z
    .union([z.boolean(), z.array(z.boolean())])
    .optional()
    .meta({
      example: true,
      description: 'Has daily data',
    }),
  'has-weekly-and-monthly': z
    .union([z.boolean(), z.array(z.boolean())])
    .optional()
    .meta({
      example: true,
      description: 'Has weekly and monthly data',
    }),
  'has-empty-bars': z
    .union([z.boolean(), z.array(z.boolean())])
    .optional()
    .meta({
      example: false,
      description: 'Has empty bars',
    }),
  'visible-plots-set': z
    .union([VisiblePlotsSet, z.array(VisiblePlotsSet)])
    .optional()
    .meta({
      example: 'ohlcv',
      description: 'Visible plots set',
    }),
  ticker: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .meta({
      example: ['AAPL~0', 'MSFT~0', '$SPX500'],
      description: 'Ticker(s)',
    }),
  'session-regular': z
    .union([z.string(), z.array(z.string())])
    .optional()
    .meta({
      example: '0900-1600',
      description: 'Regular session hours (mapped to SymbolInfo.session)',
    }),
  'session-holidays': z
    .union([z.string(), z.array(z.string())])
    .optional()
    .meta({
      example: '20181105,20181107',
      description: 'Session holidays in YYYYMMDD format',
    }),
  corrections: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .meta({
      example: '1900F4-2350F4,1000-1845:20181113',
      description: 'Session corrections',
    }),
  'supported-resolutions': z
    .union([z.array(z.string()), z.array(z.array(z.string()))])
    .optional()
    .meta({
      example: ['1', '5', '15', '30', '60', 'D', 'W', 'M'],
      description: 'Supported resolutions',
    }),
  'force-session-rebuild': z
    .union([z.boolean(), z.array(z.boolean())])
    .optional()
    .meta({
      example: false,
      description: 'Force session rebuild',
    }),
  'intraday-multipliers': z
    .union([z.array(z.string()), z.array(z.array(z.string()))])
    .optional()
    .meta({
      example: ['1', '5', '15', '30', '60'],
      description: 'Intraday multipliers',
    }),
  volume_precision: z
    .union([z.number(), z.array(z.number())])
    .optional()
    .meta({
      example: 0,
      description: 'Volume precision',
    }),
});

type GetSymbolInfoOutput = z.infer<typeof GetSymbolInfoOutput>;

const getSymbolInfo = oc
  .route({
    method: 'GET',
    path: '/symbol_info',
    tags: ['UDF'],
    summary: 'Get Symbol Group Information',
    description:
      'Returns information for a group of symbols in response-as-table format. Called when supports_group_request is true.',
  })
  .input(GetSymbolInfoInput)
  .output(GetSymbolInfoOutput);

export { GetSymbolInfoInput, GetSymbolInfoOutput, getSymbolInfo };
