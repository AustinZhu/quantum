import * as z from 'zod';

export const LogicalOperator = z.enum(['and', 'or']);

export type LogicalOperator = z.infer<typeof LogicalOperator>;
