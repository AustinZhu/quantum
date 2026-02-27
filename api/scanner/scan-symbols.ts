import * as z from 'zod';
import { oc } from '@orpc/contract';
import { Filter, ScanOptions, Sort, SymbolColumn } from './schema';

const ScanSymbolsInput = z.object({
  columns: z.array(SymbolColumn).meta({
    description: 'Array of column names to return in the response',
    examples: [
      ['instrument_id', 'ins_name', 'exchange_id', 'class', 'last_price', 'volume_multiple'],
      ['id', 'ins_id', 'ins_name', 'price_tick', 'expired', 'last_price', 'open_interest'],
    ],
  }),

  filter: Filter.optional().meta({
    description: 'Filter with nested logical operations',
    examples: [
      {
        operator: 'and',
        operands: [
          {
            expression: {
              left: 'expired',
              operation: 'equal',
              right: false,
            },
          },
          {
            operation: {
              operator: 'or',
              operands: [
                {
                  expression: {
                    left: 'exchange_id',
                    operation: 'equal',
                    right: 'SHFE',
                  },
                },
                {
                  expression: {
                    left: 'exchange_id',
                    operation: 'equal',
                    right: 'DCE',
                  },
                },
              ],
            },
          },
        ],
      },
    ],
  }),

  sort: Sort.optional().meta({
    description: 'Sort configuration',
    examples: [
      { sortBy: 'open_interest', sortOrder: 'desc' },
      { sortBy: 'volume_multiple', sortOrder: 'asc' },
    ],
  }),

  range: z
    .tuple([z.number(), z.number()])
    .optional()
    .default([0, 100])
    .meta({
      description: 'Pagination range [start, end] (inclusive)',
      examples: [
        [0, 50],
        [50, 100],
        [0, 100],
      ],
    }),

  options: ScanOptions.optional().meta({
    description: 'Additional options for the scan',
  }),

  ignore_unknown_fields: z.boolean().optional().default(false).meta({
    description: 'Whether to ignore unknown field names in filters',
  }),

  markets: z
    .array(z.string())
    .optional()
    .meta({
      description: 'Market identifiers to filter by (if applicable)',
      examples: [['china', 'futures'], ['asia']],
    }),

  symbols: z.record(z.string(), z.any()).optional().default({}).meta({
    description: 'Symbol-specific overrides or configurations',
  }),
});

type ScanSymbolsInput = z.infer<typeof ScanSymbolsInput>;

const ScanSymbolsOutput = z.object({
  totalCount: z.number().meta({
    description: 'Total number of symbols matching the filter criteria',
    examples: [8351, 1234],
  }),

  data: z
    .array(
      z.object({
        s: z.string().meta({
          description: 'Symbol identifier',
          examples: ['SHFE.cu2506', 'DCE.m2505'],
        }),
        d: z.array(z.any()).meta({
          description:
            'Array of field values in the same order as the columns array in the request. Values can be string, number, boolean, array, or object depending on the field type.',
          examples: [
            ['cu2506', 'Copper 2506', 'SHFE', 'FUTURE', 68150, 10, 0.1, 5, false],
            ['m2505', 'Soybean Meal 2505', 'DCE', 'FUTURE', 3020, 10, 0.01, 1, false],
          ],
        }),
      }),
    )
    .meta({
      description: 'Array of symbol data rows. Each row contains symbol ID and corresponding field values.',
    }),
});

type ScanSymbolsOutput = z.infer<typeof ScanSymbolsOutput>;

const scanSymbols = oc
  .route({
    method: 'POST',
    path: '/scan',
    tags: ['Scanner'],
    summary: 'Scan Symbols',
    description: 'Scans and retrieves symbols based on filter, sort, and pagination criteria',
  })
  .input(ScanSymbolsInput)
  .output(ScanSymbolsOutput);

export { ScanSymbolsInput, ScanSymbolsOutput, scanSymbols };
