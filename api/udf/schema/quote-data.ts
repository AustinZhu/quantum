import * as z from 'zod';
import { QuoteValues } from './quote-values';

export const QuoteData = z.object({
  s: z.string().meta({
    example: 'ok',
    description: 'Status code for this symbol',
  }),
  n: z.string().meta({
    example: 'NASDAQ:AAPL',
    description: 'Symbol name',
  }),
  v: QuoteValues.optional().meta({
    description: 'Quote values',
  }),
});

export type QuoteData = z.infer<typeof QuoteData>;
