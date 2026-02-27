import { oc } from '@orpc/contract';
import * as z from 'zod';

const GetMarksInput = z.object({
  symbol: z.string().meta({
    param: {
      name: 'symbol',
      in: 'query',
    },
    example: 'AAPL',
    description: 'Symbol name or ticker',
  }),
  from: z.number().meta({
    param: {
      name: 'from',
      in: 'query',
    },
    example: 1386493512,
    description: 'Unix timestamp (UTC) of leftmost visible bar',
  }),
  to: z.number().meta({
    param: {
      name: 'to',
      in: 'query',
    },
    example: 1395133512,
    description: 'Unix timestamp (UTC) of rightmost visible bar',
  }),
  resolution: z.string().meta({
    param: {
      name: 'resolution',
      in: 'query',
    },
    example: 'D',
    description: 'Resolution',
  }),
});

type GetMarksInput = z.infer<typeof GetMarksInput>;

// Response-as-table format for marks
// Each property can be either a single value (applied to all marks) or an array (per-mark values)
// Arrays must have the same length as the id array
const GetMarksOutput = z.object({
  // Required fields - can be single value or array
  id: z.array(z.union([z.string(), z.number()])).meta({
    example: ['mark1', 'mark2', 'mark3'],
    description: 'ID of the mark',
  }),
  time: z.union([z.number(), z.array(z.number())]).meta({
    example: [1386493512, 1386493572, 1386493632],
    description: 'Time for the mark. Unix timestamp in seconds.',
  }),
  color: z.union([z.string(), z.array(z.string())]).meta({
    example: 'red',
    description: 'Color for the mark',
  }),
  text: z.union([z.string(), z.array(z.string())]).meta({
    example: ['Earnings Report', 'Dividend', 'Split'],
    description: 'Text content for the mark',
  }),
  label: z.union([z.string(), z.array(z.string())]).meta({
    example: ['E', 'D', 'S'],
    description: 'Label for the mark',
  }),
  labelFontColor: z.union([z.string(), z.array(z.string())]).meta({
    example: '#FFFFFF',
    description: 'Text color for the mark',
  }),
  minSize: z.union([z.number(), z.array(z.number())]).meta({
    example: 14,
    description: 'Minimum size for the mark',
  }),
  // Optional fields - can be single value or array
  borderWidth: z
    .union([z.number(), z.array(z.number().optional())])
    .optional()
    .meta({
      example: [2, undefined, 3],
      description: 'Border Width',
    }),
  hoveredBorderWidth: z
    .union([z.number(), z.array(z.number().optional())])
    .optional()
    .meta({
      example: 3,
      description: 'Border Width when hovering over bar mark',
    }),
  imageUrl: z
    .union([z.string(), z.array(z.string().optional())])
    .optional()
    .meta({
      example: ['https://example.com/mark1.svg', undefined, 'https://example.com/mark3.svg'],
      description:
        'Optional URL for an image to be displayed within the timescale mark. The image should ideally be square in dimension.',
    }),
  showLabelWhenImageLoaded: z
    .union([z.boolean(), z.array(z.boolean().optional())])
    .optional()
    .meta({
      example: false,
      description:
        'Continue to show text label even when an image has been loaded for the timescale mark. Defaults to false if undefined.',
    }),
});

type GetMarksOutput = z.infer<typeof GetMarksOutput>;

const getMarks = oc
  .route({
    method: 'GET',
    path: '/marks',
    tags: ['UDF'],
    summary: 'Get Marks',
    description: 'Returns marks for a symbol',
  })
  .input(GetMarksInput)
  .output(GetMarksOutput);

export { GetMarksInput, GetMarksOutput, getMarks };
