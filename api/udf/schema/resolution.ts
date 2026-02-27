import * as z from 'zod';

export const ResolutionString = z
  .string()
  .brand<'ResolutionString'>()
  .meta({
    description:
      'Resolution or time interval is a time period of one bar. Advanced Charts supports tick, intraday (seconds, minutes, hours), and DWM (daily, weekly, monthly) resolutions. The table below describes how to specify different types of resolutions:\n\n' +
      '| Resolution | Format | Example |\n' +
      '| --- | --- | --- |\n' +
      '| Ticks | xT | 1T — one tick, 5T — five ticks, 100T — one hundred ticks |\n' +
      '| Seconds | xS | 1S — one second |\n' +
      '| Minutes | x | 1 — one minute |\n' +
      '| Hours | x minutes | 60 — one hour |\n' +
      '| Days | xD | 1D — one day |\n' +
      '| Weeks | xW | 1W — one week |\n' +
      '| Months | xM | 1M — one month |\n' +
      '| Years | xM months | 12M — one year |\n\n' +
      'Refer to [Resolution](https://www.tradingview.com/charting-library-docs/latest/core_concepts/Resolution) for more information.',
  });

export type ResolutionString = z.infer<typeof ResolutionString>;
