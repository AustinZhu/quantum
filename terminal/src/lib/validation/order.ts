import { z } from "zod";

const quantitySchema = z.preprocess((value) => {
  const numeric = typeof value === "number" ? value : Number(value);
  return Number.isNaN(numeric) ? value : numeric;
}, z.number().int("Quantity must be a whole number").min(1).max(1_000_000));

const limitPriceSchema = z.preprocess((value) => {
  if (value === "" || value === null || value === undefined) {
    return undefined;
  }
  const numeric = typeof value === "number" ? value : Number(value);
  return Number.isNaN(numeric) ? value : numeric;
}, z.number().positive("Limit price must be greater than zero").optional());

export const orderFormSchema = z.object({
  symbol: z
    .string()
    .trim()
    .min(1, "Symbol is required")
    .max(12, "Symbol is too long")
    .transform((value) => value.toUpperCase())
    .refine((value) => /^[A-Z][A-Z0-9._-]{0,11}$/.test(value), {
      message: "Use a valid ticker format",
    }),
  side: z.enum(["BUY", "SELL"]),
  quantity: quantitySchema,
  limitPrice: limitPriceSchema,
});

export type OrderFormInput = z.input<typeof orderFormSchema>;
export type OrderFormValues = z.output<typeof orderFormSchema>;
