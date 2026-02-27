import { oc } from '@orpc/contract';
import * as z from 'zod';

const GetBarsInput = z.object({
  symbol: z.string().meta({
    param: {
      name: 'symbol',
      in: 'query',
    },
    example: 'AAPL',
    description: 'Symbol name or ticker',
  }),
  from: z.number().meta({
    param: {
      name: 'from',
      in: 'query',
    },
    example: 1386493512,
    description: 'Unix timestamp (UTC) of leftmost required bar',
  }),
  to: z.number().meta({
    param: {
      name: 'to',
      in: 'query',
    },
    example: 1395133512,
    description: 'Unix timestamp (UTC) of rightmost required bar',
  }),
  resolution: z.string().meta({
    param: {
      name: 'resolution',
      in: 'query',
    },
    example: 'D',
    description: 'Resolution (1, 5, 15, 30, 60, D, W, M)',
  }),
  countback: z.coerce.number().meta({
    param: {
      name: 'countback',
      in: 'query',
    },
    example: 300,
    description: 'Number of bars (higher priority than from) starting with to',
  }),
});

type GetBarsInput = z.infer<typeof GetBarsInput>;

const GetBarsSuccess = z.object({
  // Required fields
  s: z.literal('ok').meta({
    description: 'Status code',
  }),
  t: z.array(z.number()).meta({
    examples: [[1386493512, 1386493572, 1386493632]],
    description: 'Bar time, Unix timestamp (UTC)',
  }),
  c: z.array(z.number()).meta({
    examples: [[42.1, 43.4, 44.3]],
    description: 'Closing price',
  }),
  // Optional fields
  o: z
    .array(z.number())
    .optional()
    .meta({
      examples: [[41.0, 42.9, 43.7]],
      description: 'Opening price',
    }),
  h: z
    .array(z.number())
    .optional()
    .meta({
      examples: [[43.0, 44.1, 44.8]],
      description: 'High price',
    }),
  l: z
    .array(z.number())
    .optional()
    .meta({
      examples: [[40.4, 42.1, 42.8]],
      description: 'Low price',
    }),
  v: z
    .array(z.number())
    .optional()
    .meta({
      examples: [[12000, 18500, 24000]],
      description: 'Volume',
    }),
});

type GetBarsSuccess = z.infer<typeof GetBarsSuccess>;

const GetBarsNoData = z.object({
  s: z.literal('no_data').meta({
    description: 'Status code indicating no data',
  }),
  nextTime: z
    .number()
    .optional()
    .meta({
      examples: [1386493512],
      description: 'Time of the next bar if there is no data in the requested period',
    }),
});

type GetBarsNoData = z.infer<typeof GetBarsNoData>;

const GetBarsError = z.object({
  s: z.literal('error').meta({
    description: 'Status code indicating error',
  }),
  errmsg: z.string().meta({
    examples: ['Invalid symbol'],
    description: 'Error message',
  }),
});

type GetBarsError = z.infer<typeof GetBarsError>;

const GetBarsOutput = z.union([GetBarsSuccess, GetBarsNoData, GetBarsError]);

type GetBarsOutput = z.infer<typeof GetBarsOutput>;

const getBars = oc
  .route({
    method: 'GET',
    path: '/history',
    tags: ['UDF'],
    summary: 'Get Historical Bars',
    description: 'Returns historical OHLCV data for a symbol',
  })
  .input(GetBarsInput)
  .output(GetBarsOutput);

export { GetBarsInput, GetBarsSuccess, GetBarsNoData, GetBarsError, GetBarsOutput, getBars };
