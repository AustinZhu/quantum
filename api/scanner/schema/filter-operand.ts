import * as z from 'zod';
import { FilterExpression } from './filter-expression';
import { LogicalOperator } from './logical-operator';

export const FilterOperand: z.ZodType<FilterOperand> = z.lazy(() =>
  z.object({
    expression: FilterExpression.optional(),
    operation: z
      .object({
        operator: LogicalOperator,
        operands: z.array(FilterOperand),
      })
      .optional(),
  }),
);

export interface FilterOperand {
  expression?: z.infer<typeof FilterExpression>;
  operation?: {
    operator: z.infer<typeof LogicalOperator>;
    operands: FilterOperand[];
  };
}
