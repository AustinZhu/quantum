import * as z from 'zod';

export const LibrarySubsessionInfo = z.object({
  id: z.string().meta({
    description: 'Subsession ID.',
  }),
  description: z.string().meta({
    description: 'Description of the subsession.',
    examples: ['Regular Trading Hours'],
  }),
  session: z.string().meta({
    description: 'Session string.',
  }),
  'session-correction': z.string().optional().meta({
    description: 'Session corrections string.',
  }),
  'session-display': z.string().optional().meta({
    description: 'Session to display.',
  }),
});

export type LibrarySubsessionInfo = z.infer<typeof LibrarySubsessionInfo>;
