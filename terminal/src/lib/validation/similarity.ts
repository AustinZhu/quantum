import { z } from "zod";

const numericField = (min: number, max: number) =>
  z.preprocess((value) => {
    const numeric = typeof value === "number" ? value : Number(value);
    return Number.isNaN(numeric) ? value : numeric;
  }, z.number().min(min).max(max));

const dateValue = z
  .string()
  .trim()
  .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), "Use YYYY-MM-DD date format");

export const similarityFormSchema = z
  .object({
    targetSymbol: z
      .string()
      .trim()
      .min(1, "Target symbol is required")
      .transform((value) => value.toUpperCase()),
    symbols: z.string().trim().min(1, "Universe symbols are required"),
    interval: z.string().trim().min(1, "Interval is required"),
    windowMode: z.enum(["bars", "date_range"]),
    windowBars: numericField(20, 10_000).optional(),
    startDate: z.string().optional().default(""),
    endDate: z.string().optional().default(""),
    topK: numericField(1, 100),
    minClusters: numericField(2, 50),
    maxClusters: numericField(0, 50),
    priceActionWeight: numericField(0, 1),
    volatilityWeight: numericField(0, 1),
    performanceWeight: numericField(0, 1),
    sectorWeight: numericField(0, 1),
  })
  .superRefine((value, ctx) => {
    const weightSum =
      value.priceActionWeight +
      value.volatilityWeight +
      value.performanceWeight +
      value.sectorWeight;
    if (weightSum <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["priceActionWeight"],
        message: "At least one weight must be greater than zero",
      });
    }

    if (value.windowMode === "bars") {
      if (!value.windowBars || value.windowBars < 20) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["windowBars"],
          message: "Window bars must be >= 20",
        });
      }
      return;
    }

    const start = dateValue.safeParse(value.startDate ?? "");
    const end = dateValue.safeParse(value.endDate ?? "");
    if (!start.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["startDate"],
        message: "Start date is required",
      });
    }
    if (!end.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["endDate"],
        message: "End date is required",
      });
    }
    if (start.success && end.success && start.data > end.data) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["startDate"],
        message: "Start date must be before or equal to end date",
      });
    }
  });

export type SimilarityFormInput = z.input<typeof similarityFormSchema>;
export type SimilarityFormValues = z.output<typeof similarityFormSchema>;

export function buildFindSimilarPayload(values: SimilarityFormValues) {
  const symbols = Array.from(
    new Set(
      values.symbols
        .split(",")
        .map((item) => item.trim().toUpperCase())
        .filter(Boolean),
    ),
  );

  if (!symbols.includes(values.targetSymbol)) {
    symbols.unshift(values.targetSymbol);
  }

  const timeWindow =
    values.windowMode === "bars"
      ? { window_bars: values.windowBars }
      : {
          date_range: {
            start_date: values.startDate,
            end_date: values.endDate,
          },
        };

  return {
    target_symbol: values.targetSymbol,
    symbols,
    interval: values.interval,
    time_window: timeWindow,
    top_k: values.topK,
    min_clusters: values.minClusters,
    max_clusters: values.maxClusters,
    weights: {
      price_action_weight: values.priceActionWeight,
      volatility_weight: values.volatilityWeight,
      performance_weight: values.performanceWeight,
      sector_weight: values.sectorWeight,
    },
  };
}
