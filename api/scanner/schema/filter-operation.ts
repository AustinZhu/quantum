import * as z from 'zod';

export const FilterOperation = z.enum([
  'equal',
  'not_equal',
  'greater',
  'greater_or_equal',
  'less',
  'less_or_equal',
  'in_range',
  'not_in_range',
  'has',
  'has_none_of',
  'match',
  'not_match',
]);

export type FilterOperation = z.infer<typeof FilterOperation>;
