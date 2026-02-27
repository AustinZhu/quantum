import * as z from 'zod';
import { SortOrder } from './sort-order';

export const Sort = z.object({
  sortBy: z.string().meta({
    description: 'Field name to sort by',
    examples: ['volume_multiple', 'price_tick', 'last_price', 'open_interest', 'created_at'],
  }),
  sortOrder: SortOrder.meta({
    description: 'Sort direction',
  }),
});

export type Sort = z.infer<typeof Sort>;
