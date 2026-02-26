import { describe, expect, it } from "vitest";

import { orderFormSchema } from "@/lib/validation/order";

describe("orderFormSchema", () => {
  it("normalizes symbol and parses numeric inputs", () => {
    const parsed = orderFormSchema.parse({
      symbol: "aapl",
      side: "BUY",
      quantity: "42",
      limitPrice: "190.55",
    });

    expect(parsed.symbol).toBe("AAPL");
    expect(parsed.quantity).toBe(42);
    expect(parsed.limitPrice).toBe(190.55);
  });

  it("accepts empty limit price", () => {
    const parsed = orderFormSchema.parse({
      symbol: "MSFT",
      side: "SELL",
      quantity: 10,
      limitPrice: "",
    });

    expect(parsed.limitPrice).toBeUndefined();
  });

  it("rejects invalid symbols", () => {
    const parsed = orderFormSchema.safeParse({
      symbol: "@bad",
      side: "BUY",
      quantity: 10,
      limitPrice: "",
    });

    expect(parsed.success).toBe(false);
  });
});
