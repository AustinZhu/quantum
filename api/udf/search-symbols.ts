import * as z from 'zod';
import { oc } from '@orpc/contract';
import { SearchResultItem } from './schema';

const SearchSymbolsInput = z.object({
  query: z.string().meta({
    param: {
      name: 'query',
      in: 'query',
    },
    example: 'AA',
    description: 'Text typed by the user in the Symbol Search edit box',
  }),
  type: z
    .string()
    .optional()
    .meta({
      param: {
        name: 'type',
        in: 'query',
      },
      example: 'stock',
      description: 'Symbol type',
    }),
  exchange: z
    .string()
    .optional()
    .meta({
      param: {
        name: 'exchange',
        in: 'query',
      },
      example: 'NYSE',
      description: 'Exchange identifier',
    }),
  limit: z.coerce
    .number()
    .optional()
    .meta({
      param: {
        name: 'limit',
        in: 'query',
      },
      example: 30,
      description: 'Maximum number of symbols in response',
    }),
});

type SearchSymbolsInput = z.infer<typeof SearchSymbolsInput>;

const SearchSymbolsOutput = z.array(SearchResultItem);

type SearchSymbolsOutput = z.infer<typeof SearchSymbolsOutput>;

const searchSymbols = oc
  .route({
    method: 'GET',
    path: '/search',
    tags: ['UDF'],
    summary: 'Search Symbols',
    description: 'Searches for symbols based on user input',
  })
  .input(SearchSymbolsInput)
  .output(SearchSymbolsOutput);

export { SearchSymbolsInput, SearchSymbolsOutput, searchSymbols };
