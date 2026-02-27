import * as z from 'zod';
import { eventIterator, oc } from '@orpc/contract';
import { LibrarySymbolInfo, ResolutionString } from './schema';

const StreamBarInput = z.object({
  symbol_info: LibrarySymbolInfo,
  resolution: ResolutionString,
  listener_guid: z.string(),
});

type StreamBarInput = z.infer<typeof StreamBarInput>;

const StreamBarOutput = z.object({
  t: z.array(z.number()).meta({
    examples: [[1386493512, 1386493572, 1386493632]],
    description: 'Bar time, Unix timestamp (UTC)',
  }),
  c: z.array(z.number()).meta({
    examples: [[42.1, 43.4, 44.3]],
    description: 'Closing price',
  }),
  o: z.array(z.number()).meta({
    examples: [[41.0, 42.9, 43.7]],
    description: 'Opening price',
  }),
  h: z.array(z.number()).meta({
    examples: [[43.0, 44.1, 44.8]],
    description: 'High price',
  }),
  l: z.array(z.number()).meta({
    examples: [[40.4, 42.1, 42.8]],
    description: 'Low price',
  }),
  // Optional fields
  v: z
    .array(z.number())
    .optional()
    .meta({
      examples: [[12000, 18500, 24000]],
      description: 'Volume',
    }),
});

type StreamBarOutput = z.infer<typeof StreamBarOutput>;

const streamBar = oc
  .route({
    method: 'GET',
    path: '/tick',
    tags: ['UDF'],
    summary: 'Get Streaming Bar Data',
    description: 'Get real-time bar updates for a specified symbol and resolution',
  })
  .input(StreamBarInput)
  .output(eventIterator(StreamBarOutput));

export { StreamBarInput, StreamBarOutput, streamBar };
