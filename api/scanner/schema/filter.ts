import * as z from 'zod';
import { LogicalOperator } from './logical-operator';
import { FilterOperand } from './filter-operand';

export const Filter = z.object({
  operator: LogicalOperator.meta({
    description: 'Logical operator to combine filter operands',
  }),
  operands: z.array(FilterOperand).meta({
    description: 'Array of filter conditions and nested operations',
  }),
});

export type Filter = z.infer<typeof Filter>;
