import * as z from 'zod';

export const TimescaleMark = z.object({
  // Required fields
  id: z.union([z.string(), z.number()]).meta({
    example: 'mark1',
    description: 'Unique identifier of a mark',
  }),
  color: z.string().meta({
    example: 'rgba(255, 0, 0, 0.5)',
    description: 'RGBA color',
  }),
  label: z.string().meta({
    example: 'E',
    description: 'A letter to be displayed in a circle',
  }),
  time: z.number().meta({
    example: 1386493512,
    description: 'Unix time (timestamp in seconds)',
  }),
  tooltip: z.string().meta({
    example: 'Earnings Report',
    description: 'Tooltip text',
  }),
  // Optional fields
  shape: z.enum(['circle', 'earningUp', 'earningDown', 'earning']).optional().meta({
    example: 'circle',
    description: 'Optional mark shape (TimeScaleMarkShape)',
  }),
});

export type TimescaleMark = z.infer<typeof TimescaleMark>;
