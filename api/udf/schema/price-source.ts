import * as z from 'zod';

export const SymbolInfoPriceSource = z.object({
  id: z.string().meta({
    description: 'Unique ID',
  }),
  name: z.string().meta({
    description: 'Short name',
  }),
});

export type SymbolInfoPriceSource = z.infer<typeof SymbolInfoPriceSource>;
