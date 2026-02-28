"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "next-intl";
import type {
  ChartingLibraryWidgetOptions,
  IChartingLibraryWidget,
  ThemeName,
  ResolutionString,
  LanguageCode,
  ChartingLibraryWidgetConstructor,
} from "charting_library";
import { useDataFeed } from "@/components/chart/use-datafeed";

/**
 * At runtime the TradingView library is loaded from public/ via <script> tags.
 * These scripts attach globals that we access through the window object.
 */
interface TradingViewGlobal {
  TradingView?: { widget: ChartingLibraryWidgetConstructor };
}

/* ── Props ── */

export interface TradingViewWidgetProps {
  symbol?: string;
  interval?: ResolutionString;
  className?: string;
}

/* ── Component ── */

export function TradingViewWidget({
  symbol = "BTC-USDT",
  interval = "D" as ResolutionString,
  className,
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<IChartingLibraryWidget | null>(null);
  const { resolvedTheme } = useTheme();
  const locale = useLocale();
  const datafeed = useDataFeed();

  const tvTheme: ThemeName = resolvedTheme === "dark" ? "dark" : "light";
  const tvThemeRef = useRef(tvTheme);
  tvThemeRef.current = tvTheme;

  // Map app locale to TradingView LanguageCode
  const tvLocale = (locale === "zh" ? "zh" : "en") as LanguageCode;
  const tvLocaleRef = useRef(tvLocale);
  tvLocaleRef.current = tvLocale;

  const createWidget = useCallback(() => {
    if (!containerRef.current) return;

    const g = window as unknown as TradingViewGlobal;
    if (!g.TradingView) return;

    // Tear down any previous instance
    if (widgetRef.current) {
      widgetRef.current.remove();
      widgetRef.current = null;
    }

    const options: ChartingLibraryWidgetOptions = {
      container: containerRef.current,
      library_path: "/charting_library/charting_library/",
      datafeed,
      symbol,
      interval,
      locale: tvLocaleRef.current,
      theme: tvThemeRef.current,
      autosize: true,
      fullscreen: false,
      timezone: "Etc/UTC",
      disabled_features: [
        "use_localstorage_for_settings",
        "study_templates",
      ],
      enabled_features: [
        "side_toolbar_in_fullscreen_mode",
        "header_in_fullscreen_mode",
      ],
      loading_screen: {
        backgroundColor: tvThemeRef.current === "dark" ? "#1a1d29" : "#ffffff",
        foregroundColor: "#2962ff",
      },
    };

    const widget = new g.TradingView.widget(options);

    widget.onChartReady(() => {
      widgetRef.current = widget;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol, interval, tvLocale, datafeed]);

  /* Load the runtime scripts once, then instantiate the widget. */
  useEffect(() => {
    const g = window as unknown as TradingViewGlobal;

    if (g.TradingView) {
      createWidget();
      return () => {
        widgetRef.current?.remove();
        widgetRef.current = null;
      };
    }

    // Load the charting library runtime script.
    const libScript = document.createElement("script");
    libScript.src =
      "/charting_library/charting_library/charting_library.standalone.js";
    libScript.async = true;
    libScript.addEventListener("load", createWidget);

    document.head.appendChild(libScript);

    return () => {
      widgetRef.current?.remove();
      widgetRef.current = null;
    };
  }, [createWidget]);

  /* Sync theme changes after the widget is ready. */
  useEffect(() => {
    widgetRef.current?.changeTheme(tvTheme).catch(() => {
      // Theme change can fail transiently while chart is loading.
    });
  }, [tvTheme]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
