"use client";

import { TradingViewWidget } from "@/components/chart/trading-view-widget";
import type { ResolutionString } from "charting_library";

export default function ChartPage() {
  return (
    // Break out of app-main-inner padding (mt-6=1.5rem, mb-12=3rem, mx-8=2rem)
    // and fill the full height of app-main (100svh on desktop, minus 56px mobile header)
    <div className="-mx-8 -mt-6 -mb-12 h-[calc(100svh-56px)] w-[calc(100%+4rem)] lg:h-svh">
      <TradingViewWidget symbol="BTC-USDT" interval={"D" as ResolutionString} />
    </div>
  );
}
