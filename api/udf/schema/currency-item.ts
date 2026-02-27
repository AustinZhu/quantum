import * as z from 'zod';

export const CurrencyItem = z.object({
  id: z.string().meta({
    examples: ['USD'],
    description: 'Currency id',
  }),
  code: z.string().meta({
    examples: ['USD'],
    description: 'Currency code',
  }),
  description: z
    .string()
    .optional()
    .meta({
      examples: ['$'],
      description: 'Currency description/symbol',
    }),
});

export type CurrencyItem = z.infer<typeof CurrencyItem>;
