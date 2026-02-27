import * as z from 'zod';

export const Exchange = z.object({
  value: z.string().meta({
    examples: ['NYSE'],
    description: 'Exchange value/id',
  }),
  name: z.string().meta({
    examples: ['New York Stock Exchange'],
    description: 'Exchange name',
  }),
  desc: z.string().meta({
    examples: ['NYSE'],
    description: 'Exchange description',
  }),
});

export type Exchange = z.infer<typeof Exchange>;
