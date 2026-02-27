import { describe, expect, it } from "vitest";

import { buildFindSimilarPayload, similarityFormSchema } from "@/lib/validation/similarity";

describe("similarityFormSchema", () => {
  it("normalizes symbols and builds bars-mode payload", () => {
    const parsed = similarityFormSchema.parse({
      targetSymbol: "aapl",
      symbols: "msft, nvda",
      interval: "1D",
      windowMode: "bars",
      windowBars: "120",
      startDate: "",
      endDate: "",
      topK: "10",
      minClusters: "2",
      maxClusters: "4",
      priceActionWeight: "0.5",
      volatilityWeight: "0.2",
      performanceWeight: "0.2",
      sectorWeight: "0.1",
    });
    const payload = buildFindSimilarPayload(parsed);

    expect(payload.target_symbol).toBe("AAPL");
    expect(payload.symbols).toEqual(["AAPL", "MSFT", "NVDA"]);
    expect(payload.time_window).toEqual({ window_bars: 120 });
  });

  it("validates date mode", () => {
    const parsed = similarityFormSchema.safeParse({
      targetSymbol: "AAPL",
      symbols: "AAPL,MSFT",
      interval: "1D",
      windowMode: "date_range",
      windowBars: 120,
      startDate: "2025-10-01",
      endDate: "2025-09-01",
      topK: 10,
      minClusters: 2,
      maxClusters: 5,
      priceActionWeight: 0.5,
      volatilityWeight: 0.2,
      performanceWeight: 0.2,
      sectorWeight: 0.1,
    });

    expect(parsed.success).toBe(false);
  });

  it("rejects zero-sum weights", () => {
    const parsed = similarityFormSchema.safeParse({
      targetSymbol: "AAPL",
      symbols: "AAPL,MSFT,NVDA",
      interval: "1D",
      windowMode: "bars",
      windowBars: 120,
      startDate: "",
      endDate: "",
      topK: 10,
      minClusters: 2,
      maxClusters: 5,
      priceActionWeight: 0,
      volatilityWeight: 0,
      performanceWeight: 0,
      sectorWeight: 0,
    });

    expect(parsed.success).toBe(false);
  });
});
