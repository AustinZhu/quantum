import * as z from 'zod';

export const SymbolType = z.object({
  name: z.string().meta({
    examples: ['Stock'],
    description: 'Symbol type name',
  }),
  value: z.string().meta({
    examples: ['stock'],
    description: 'Symbol type value',
  }),
});

export type SymbolType = z.infer<typeof SymbolType>;
