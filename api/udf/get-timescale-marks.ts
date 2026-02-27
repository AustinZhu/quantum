import * as z from 'zod';
import { oc } from '@orpc/contract';
import { TimescaleMark } from './schema';

const GetTimescaleMarksInput = z.object({
  symbol: z.string().meta({
    param: {
      name: 'symbol',
      in: 'query',
    },
    example: 'AAPL',
    description: 'Symbol name or ticker',
  }),
  from: z.coerce.number().meta({
    param: {
      name: 'from',
      in: 'query',
    },
    example: 1386493512,
    description: 'Unix timestamp (UTC) of leftmost visible bar',
  }),
  to: z.coerce.number().meta({
    param: {
      name: 'to',
      in: 'query',
    },
    example: 1395133512,
    description: 'Unix timestamp (UTC) of rightmost visible bar',
  }),
  resolution: z.string().meta({
    param: {
      name: 'resolution',
      in: 'query',
    },
    example: 'D',
    description: 'Resolution',
  }),
});

type GetTimescaleMarksInput = z.infer<typeof GetTimescaleMarksInput>;

const GetTimescaleMarksOutput = z.array(TimescaleMark);

type GetTimescaleMarksOutput = z.infer<typeof GetTimescaleMarksOutput>;

const getTimescaleMarks = oc
  .route({
    method: 'GET',
    path: '/timescale_marks',
    tags: ['UDF'],
    summary: 'Get Timescale Marks',
    description: 'Returns timescale marks for a symbol',
  })
  .input(GetTimescaleMarksInput)
  .output(GetTimescaleMarksOutput);

export { GetTimescaleMarksInput, GetTimescaleMarksOutput, getTimescaleMarks };
