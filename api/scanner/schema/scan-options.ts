import * as z from 'zod';

export const ScanOptions = z.object({
  lang: z
    .string()
    .optional()
    .default('en')
    .meta({
      description: 'Language code for localized fields',
      examples: ['en', 'zh', 'ja'],
    }),
});

export type ScanOptions = z.infer<typeof ScanOptions>;
