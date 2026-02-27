import * as z from 'zod';

export const VisiblePlotsSet = z.enum(['ohlcv', 'ohlc', 'c', 'hlc']);

export type VisiblePlotsSet = z.infer<typeof VisiblePlotsSet>;
