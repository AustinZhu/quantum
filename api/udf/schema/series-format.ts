import * as z from 'zod';

export const SeriesFormat = z.enum(['price', 'volume']);

export type SeriesFormat = z.infer<typeof SeriesFormat>;
