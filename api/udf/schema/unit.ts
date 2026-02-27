import * as z from 'zod';

export const Unit = z.object({
  id: z.string().meta({
    examples: ['kg'],
    description: 'Unit id',
  }),
  name: z.string().meta({
    examples: ['kg'],
    description: 'Unit name',
  }),
  description: z.string().meta({
    examples: ['Kilograms'],
    description: 'Unit description',
  }),
});

export type Unit = z.infer<typeof Unit>;
