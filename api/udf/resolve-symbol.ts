import { oc } from '@orpc/contract';
import * as z from 'zod';
import { LibrarySymbolInfo } from './schema';

const ResolveSymbolInput = z.object({
  symbol: z.string().meta({
    param: {
      name: 'symbol',
      in: 'query',
    },
    example: 'AAPL',
    description: 'Symbol name or ticker',
  }),
  currencyCode: z
    .string()
    .optional()
    .meta({
      param: {
        name: 'currencyCode',
        in: 'query',
      },
      example: 'USD',
      description: 'Indicates the currency for conversions',
    }),
  unitId: z
    .string()
    .optional()
    .meta({
      param: {
        name: 'unitId',
        in: 'query',
      },
      example: '1',
      description: 'Indicates the unit for conversion',
    }),
  session: z
    .string()
    .optional()
    .meta({
      param: {
        name: 'session',
        in: 'query',
      },
      examples: ['regular', 'extended'],
      description: 'Trading session type that the chart should currently display.',
    }),
});

type ResolveSymbolInput = z.infer<typeof ResolveSymbolInput>;

const resolveSymbol = oc
  .route({
    method: 'GET',
    path: '/symbols',
    tags: ['UDF'],
    summary: 'Resolve Symbol',
    description: 'Resolves detailed information for a given symbol',
  })
  .input(ResolveSymbolInput)
  .output(LibrarySymbolInfo);

export { ResolveSymbolInput, resolveSymbol };
