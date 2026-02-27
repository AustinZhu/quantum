import * as z from 'zod';
import { FilterOperation } from './filter-operation';

export const FilterExpression = z.object({
  left: z.string().meta({
    description: 'Field name from symbols table (e.g., "class", "exchange_id", "expired")',
    examples: ['class', 'exchange_id', 'volume_multiple', 'expired'],
  }),
  operation: FilterOperation,
  right: z.union([z.string(), z.number(), z.boolean(), z.array(z.string()), z.array(z.number())]).meta({
    description: 'Value or array of values to compare against',
    examples: ['FUTURE', 'SHFE', 1, true, ['SHFE', 'DCE'], [1, 100]],
  }),
});

export type FilterExpression = z.infer<typeof FilterExpression>;
