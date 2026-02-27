import * as z from 'zod';

export const SearchResultItem = z.object({
  // Required fields
  symbol: z.string().meta({
    example: 'AAPL',
    description: 'Short symbol name',
  }),
  description: z.string().meta({
    example: 'Apple Inc.',
    description: 'Description',
  }),
  exchange: z.string().meta({
    example: 'NASDAQ',
    description: 'Exchange name',
  }),
  type: z.string().meta({
    example: 'stock',
    description: "Type of symbol (e.g., 'stock', 'futures', 'forex', 'index')",
  }),
  // Optional fields
  ticker: z.string().optional().meta({
    example: 'AAPL',
    description:
      'Unique identifier for a particular symbol in your symbology. Avoid using colons (":") unless following TradingView format "NYSE:IBM".',
  }),
  exchange_logo: z.string().optional().meta({
    example: 'https://example.com/nasdaq.svg',
    description:
      'URL of image to be displayed as the logo for the exchange. Requires show_exchange_logos featureset. Image should ideally be square.',
  }),
  logo_urls: z
    .union([z.tuple([z.string()]), z.tuple([z.string(), z.string()])])
    .optional()
    .meta({
      example: ['https://example.com/aapl.svg'],
      description:
        'URL(s) of image(s) to be displayed as the logo for the symbol. Requires show_symbol_logos featureset. Single URL for single logo, two URLs for overlapping circles (e.g., FOREX country flags).',
    }),
});

export type SearchResultItem = z.infer<typeof SearchResultItem>;
