import * as z from 'zod';
import { QuoteData } from './schema';
import { oc } from '@orpc/contract';

const GetQuotesInput = z.object({
  symbols: z.string().meta({
    param: {
      name: 'symbols',
      in: 'query',
    },
    example: 'NASDAQ:AAPL,NYSE:AA',
    description: 'Comma-separated list of symbols',
  }),
});

type GetQuotesInput = z.infer<typeof GetQuotesInput>;

const GetQuotesSuccess = z.object({
  s: z.literal('ok').meta({
    description: 'Status code',
  }),
  d: z.array(QuoteData).meta({
    description: 'Array of quote data',
  }),
});

type GetQuotesSuccess = z.infer<typeof GetQuotesSuccess>;

const GetQuotesError = z.object({
  s: z.literal('error').meta({
    description: 'Status code indicating error',
  }),
  errmsg: z.string().meta({
    examples: ['Invalid symbols'],
    description: 'Error message',
  }),
});

type GetQuotesError = z.infer<typeof GetQuotesError>;

const GetQuotesOutput = z.union([GetQuotesSuccess, GetQuotesError]);

type GetQuotesOutput = z.infer<typeof GetQuotesOutput>;

const getQuotes = oc
  .route({
    method: 'GET',
    path: '/quotes',
    tags: ['UDF'],
    summary: 'Get Quotes',
    description: 'Returns real-time quote data for symbols',
  })
  .input(GetQuotesInput)
  .output(GetQuotesOutput);

export { GetQuotesInput, GetQuotesSuccess, GetQuotesError, GetQuotesOutput, getQuotes };
