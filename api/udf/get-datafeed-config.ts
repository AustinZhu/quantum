import { oc } from '@orpc/contract';
import * as z from 'zod';
import { Exchange, CurrencyItem, Unit, SymbolType } from './schema';

const DatafeedConfiguration = z.object({
  supported_resolutions: z
    .array(z.string())
    .optional()
    .meta({
      examples: [['1', '5', '15', '30', '60', '1D', '1W', '1M']],
      description: 'Array of supported resolutions',
    }),
  supports_group_request: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description: 'Whether the datafeed supports group requests',
    }),
  supports_marks: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description: 'Whether the datafeed supports marks on bars',
    }),
  supports_search: z
    .boolean()
    .optional()
    .meta({
      examples: [true],
      description: 'Whether the datafeed supports symbol search',
    }),
  supports_timescale_marks: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description: 'Whether the datafeed supports marks on the timescale',
    }),
  supports_time: z
    .boolean()
    .optional()
    .meta({
      examples: [false],
      description: 'Whether the datafeed provides server time',
    }),
  exchanges: z
    .array(Exchange)
    .optional()
    .meta({
      examples: [
        [
          {
            value: 'NYSE',
            name: 'New York Stock Exchange',
            desc: 'NYSE',
          },
        ],
      ],
      description: 'List of exchange descriptors',
    }),
  symbols_types: z
    .array(SymbolType)
    .optional()
    .meta({
      examples: [
        [
          {
            name: 'Stock',
            value: 'stock',
          },
        ],
      ],
      description: 'List of symbol type descriptors',
    }),
  currency_codes: z
    .array(z.union([z.string(), CurrencyItem]))
    .optional()
    .meta({
      examples: [['USD', 'EUR', 'GBP']],
      description: 'Supported currencies for currency conversion',
    }),
  units: z
    .record(z.string(), z.array(Unit))
    .optional()
    .meta({
      examples: [
        {
          weight: [
            {
              id: 'kg',
              name: 'kg',
              description: 'Kilograms',
            },
          ],
        },
      ],
      description: 'Supported unit groups',
    }),
  symbols_grouping: z
    .record(z.string(), z.string())
    .optional()
    .meta({
      examples: [
        {
          futures: '/^(.+)([12]!|[FGHJKMNQUVXZ]\\d{1,2})$/',
        },
      ],
      description: 'Regular expressions for grouping symbols by type',
    }),
});

type DatafeedConfiguration = z.infer<typeof DatafeedConfiguration>;

const getDatafeedConfig = oc
  .route({
    method: 'GET',
    path: '/config',
    summary: 'Get Datafeed Configuration',
    description: 'Returns the configuration of the datafeed',
    tags: ['UDF'],
  })
  .output(DatafeedConfiguration);

export { DatafeedConfiguration, getDatafeedConfig };
