import * as z from 'zod';

export const QuoteValues = z.object({
  // Price change (required for mobile apps)
  ch: z.number().optional().meta({
    example: 0.16,
    description:
      'Price change. Usually calculated as a difference between current price and close price of previous day. Required for mobile apps.',
  }),
  chp: z.number().optional().meta({
    example: 0.98,
    description: 'Price change percentage. Required for mobile apps.',
  }),
  // Short name and description
  short_name: z.string().optional().meta({
    example: 'AAPL',
    description: 'Short name for symbol. Used in News, Watchlist and Details widgets.',
  }),
  exchange: z.string().optional().meta({
    example: 'NASDAQ',
    description: 'Exchange name. Displayed in Details widget.',
  }),
  description: z.string().optional().meta({
    example: 'Apple Inc',
    description: 'Short description of the symbol. Displayed in Details widget and Watchlist tooltip.',
  }),
  // Last price (required for trading functionalities)
  lp: z.number().optional().meta({
    example: 16.57,
    description:
      'Last price - price at which most recent trade occurred. Required for Order Ticket, DOM, Buy/Sell buttons, Details and Watchlist widgets.',
  }),
  // Bid and Ask
  ask: z.number().optional().meta({
    example: 16.58,
    description:
      'Ask price - lowest price a seller is willing to accept. Displayed in Order Ticket and Buy/Sell buttons.',
  }),
  bid: z.number().optional().meta({
    example: 16.57,
    description: 'Bid price - highest price a buyer is willing to pay. Displayed in Order Ticket and Buy/Sell buttons.',
  }),
  // Daily prices
  open_price: z.number().optional().meta({
    example: 16.25,
    description: "Today's opening price",
  }),
  high_price: z.number().optional().meta({
    example: 16.6,
    description: "Today's high price. Displayed in Details widget.",
  }),
  low_price: z.number().optional().meta({
    example: 16.25,
    description: "Today's low price. Displayed in Details widget.",
  }),
  prev_close_price: z.number().optional().meta({
    example: 16.41,
    description: 'Closing price from previous regular market session. Required for mobile apps.',
  }),
  // Volume
  volume: z.number().optional().meta({
    example: 4029041,
    description: "Today's trading volume. Displayed in Watchlist widget.",
  }),
  // Original name
  original_name: z.string().optional().meta({
    example: 'AAPL',
    description: 'Original name',
  }),
  // Spread
  spread: z.number().optional().meta({
    example: 0.01,
    description: 'Spread - difference between ask and bid prices. Displayed between Buy/Sell buttons.',
  }),
  // Extended session data (pre/post-market)
  rtc: z.number().optional().meta({
    example: 16.6,
    description: 'Pre-/post-market price. Required for pre-/post-market price line and Details widget.',
  }),
  rtc_time: z.number().optional().meta({
    example: 1386493512,
    description: 'Pre-/post-market price update time. Required for extended session info in Details widget.',
  }),
  rch: z.number().optional().meta({
    example: 0.03,
    description: 'Pre-/post-market price change. Required for extended session info in Details widget.',
  }),
  rchp: z.number().optional().meta({
    example: 0.18,
    description: 'Pre-/post-market price change percentage. Required for extended session info in Details widget.',
  }),
});
export type QuoteValues = z.infer<typeof QuoteValues>;
