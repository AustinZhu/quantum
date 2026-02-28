"use client";

import { useEffect, useMemo, useRef } from "react";
import { Code, ConnectError } from "@connectrpc/connect";
import type {
  Bar,
  DatafeedConfiguration,
  DatafeedErrorCallback,
  HistoryCallback,
  IBasicDataFeed,
  LibrarySubsessionInfo,
  LibrarySymbolInfo,
  ResolveCallback,
  ResolutionString,
  SearchSymbolResultItem,
  SearchSymbolsCallback,
  SymbolResolveExtension,
} from "charting_library";
import {
  DataStatus,
  SeriesFormat,
  VisiblePlotsSet,
  type GetConfigResponse,
  type LibrarySymbolInfo as RpcLibrarySymbolInfo,
} from "@/lib/gen/datafeed/v1/datafeed_pb";
import { getDatafeedClient } from "@/lib/connect/client";

type SubscriptionState = {
  abortController: AbortController;
};

const DEFAULT_SUPPORTED_RESOLUTIONS: ResolutionString[] = [
  "1",
  "3",
  "5",
  "15",
  "30",
  "60",
  "120",
  "240",
  "360",
  "720",
  "1D",
  "1W",
  "1M",
] as ResolutionString[];

const DEFAULT_CONFIG: DatafeedConfiguration = {
  supported_resolutions: DEFAULT_SUPPORTED_RESOLUTIONS,
  supports_marks: false,
  supports_timescale_marks: false,
  supports_time: true,
  exchanges: [
    {
      value: "OKX",
      name: "OKX",
      desc: "OKX",
    },
  ],
  symbols_types: [
    { name: "Spot", value: "spot" },
    { name: "Swap", value: "swap" },
    { name: "Futures", value: "futures" },
    { name: "Option", value: "option" },
  ],
};

function toOptionalString(value: string): string | undefined {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function toErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message.length > 0) {
    return error.message;
  }
  return "unknown_error";
}

function toNumber(value: bigint | undefined): number | undefined {
  if (value === undefined) {
    return undefined;
  }
  const number = Number(value);
  return Number.isFinite(number) ? number : undefined;
}

function toLogoUrls(values: string[]): [string] | [string, string] | undefined {
  const cleaned = values.map((value) => value.trim()).filter((value) => value.length > 0);
  if (cleaned.length === 0) {
    return undefined;
  }
  if (cleaned.length === 1) {
    return [cleaned[0]];
  }
  return [cleaned[0], cleaned[1]];
}

function mapSeriesFormat(format: SeriesFormat): LibrarySymbolInfo["format"] {
  if (format === SeriesFormat.VOLUME) {
    return "volume";
  }
  return "price";
}

function mapDataStatus(status: DataStatus): LibrarySymbolInfo["data_status"] {
  switch (status) {
    case DataStatus.STREAMING:
      return "streaming";
    case DataStatus.ENDOFDAY:
      return "endofday";
    case DataStatus.DELAYED_STREAMING:
      return "delayed_streaming";
    default:
      return undefined;
  }
}

function mapVisiblePlotsSet(
  visiblePlotsSet: VisiblePlotsSet,
): LibrarySymbolInfo["visible_plots_set"] {
  switch (visiblePlotsSet) {
    case VisiblePlotsSet.OHLC:
      return "ohlc";
    case VisiblePlotsSet.C:
      return "c";
    case VisiblePlotsSet.HLC:
      return "hlc";
    case VisiblePlotsSet.OHLCV:
      return "ohlcv";
    default:
      return undefined;
  }
}

function mapSubsessions(symbol: RpcLibrarySymbolInfo): LibrarySubsessionInfo[] | undefined {
  if (symbol.subsessions.length === 0) {
    return undefined;
  }

  return symbol.subsessions.map((item) => {
    const subsession: LibrarySubsessionInfo = {
      id: item.id as LibrarySubsessionInfo["id"],
      description: item.description,
      session: item.session,
    };
    if (item.sessionCorrection) {
      subsession["session-correction"] = item.sessionCorrection;
    }
    if (item.sessionDisplay) {
      subsession["session-display"] = item.sessionDisplay;
    }
    return subsession;
  });
}

function mapLibrarySymbolInfo(symbol: RpcLibrarySymbolInfo): LibrarySymbolInfo {
  const mapped: LibrarySymbolInfo = {
    name: symbol.name,
    ticker: symbol.ticker,
    description: symbol.description,
    type: symbol.type,
    session: symbol.session,
    session_holidays: symbol.sessionHolidays,
    session_display: symbol.sessionDisplay,
    corrections: symbol.corrections,
    timezone: symbol.timezone as LibrarySymbolInfo["timezone"],
    exchange: symbol.exchange,
    listed_exchange: symbol.listedExchange,
    format: mapSeriesFormat(symbol.format),
    minmov: symbol.minmov,
    pricescale: symbol.pricescale,
    minmove2: symbol.minmove2,
    fractional: symbol.fractional,
    variable_tick_size: symbol.variableTickSize,
    has_intraday: symbol.hasIntraday,
    has_daily: symbol.hasDaily,
    has_weekly_and_monthly: symbol.hasWeeklyAndMonthly,
    has_seconds: symbol.hasSeconds,
    has_ticks: symbol.hasTicks,
    has_empty_bars: symbol.hasEmptyBars,
    build_seconds_from_ticks: symbol.buildSecondsFromTicks,
    supported_resolutions:
      symbol.supportedResolutions.length > 0
        ? (symbol.supportedResolutions as ResolutionString[])
        : undefined,
    intraday_multipliers:
      symbol.intradayMultipliers.length > 0 ? symbol.intradayMultipliers : undefined,
    seconds_multipliers:
      symbol.secondsMultipliers.length > 0 ? symbol.secondsMultipliers : undefined,
    daily_multipliers: symbol.dailyMultipliers.length > 0 ? symbol.dailyMultipliers : undefined,
    weekly_multipliers:
      symbol.weeklyMultipliers.length > 0 ? symbol.weeklyMultipliers : undefined,
    monthly_multipliers:
      symbol.monthlyMultipliers.length > 0 ? symbol.monthlyMultipliers : undefined,
    volume_precision: symbol.volumePrecision,
    data_status: mapDataStatus(symbol.dataStatus),
    delay: symbol.delay,
    expired: symbol.expired,
    expiration_date: toNumber(symbol.expirationDate),
    sector: symbol.sector,
    industry: symbol.industry,
    currency_code: symbol.currencyCode,
    original_currency_code: symbol.originalCurrencyCode,
    unit_id: symbol.unitId,
    original_unit_id: symbol.originalUnitId,
    unit_conversion_types:
      symbol.unitConversionTypes.length > 0 ? symbol.unitConversionTypes : undefined,
    visible_plots_set: mapVisiblePlotsSet(symbol.visiblePlotsSet),
    exchange_logo: symbol.exchangeLogo,
    logo_urls: toLogoUrls(symbol.logoUrls),
    long_description: symbol.longDescription,
    base_name: symbol.baseName.length > 0 ? symbol.baseName : undefined,
    subsessions: mapSubsessions(symbol),
    price_source_id: symbol.priceSourceId,
    price_sources:
      symbol.priceSources.length > 0
        ? symbol.priceSources.map((source) => ({ id: source.id, name: source.name }))
        : undefined,
    subsession_id: symbol.subsessionId,
  };
  return mapped;
}

function mapSearchResultFromLibrary(symbol: RpcLibrarySymbolInfo): SearchSymbolResultItem {
  return {
    symbol: symbol.name,
    description: symbol.description,
    exchange: symbol.exchange,
    type: symbol.type,
    ticker: symbol.ticker,
    exchange_logo: symbol.exchangeLogo,
    logo_urls: toLogoUrls(symbol.logoUrls),
  };
}

function mapSearchResult(
  item: Pick<
    SearchSymbolResultItem,
    "symbol" | "description" | "exchange" | "type" | "ticker" | "exchange_logo" | "logo_urls"
  >,
): SearchSymbolResultItem {
  return item;
}

function barCacheKey(symbolInfo: Pick<LibrarySymbolInfo, "name" | "ticker">, resolution: ResolutionString): string {
  return `${symbolInfo.ticker ?? symbolInfo.name}::${resolution}`;
}

function mapConfig(config: GetConfigResponse): DatafeedConfiguration {
  const units = Object.entries(config.units).reduce<Record<string, { id: string; name: string; description: string }[]>>(
    (result, [group, unitList]) => {
      result[group] = unitList.items.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
      }));
      return result;
    },
    {},
  );

  const currencyCodes: (string | { id: string; code: string; description?: string })[] = [];
  for (const entry of config.currencyCodes) {
    if (entry.value.case === "code") {
      currencyCodes.push(entry.value.value);
      continue;
    }
    if (entry.value.case === "item") {
      currencyCodes.push({
        id: entry.value.value.id,
        code: entry.value.value.code,
        description: entry.value.value.description,
      });
    }
  }

  return {
    supported_resolutions:
      config.supportedResolutions.length > 0
        ? (config.supportedResolutions as ResolutionString[])
        : DEFAULT_SUPPORTED_RESOLUTIONS,
    supports_marks: config.supportsMarks,
    supports_timescale_marks: config.supportsTimescaleMarks,
    supports_time: config.supportsTime,
    exchanges: config.exchanges.map((item) => ({
      value: item.value,
      name: item.name,
      desc: item.desc,
    })),
    symbols_types: config.symbolsTypes.map((item) => ({
      name: item.name,
      value: item.value,
    })),
    currency_codes: currencyCodes.length > 0 ? currencyCodes : undefined,
    units: Object.keys(units).length > 0 ? units : undefined,
    symbols_grouping:
      Object.keys(config.symbolsGrouping).length > 0 ? config.symbolsGrouping : undefined,
  };
}

export function useDataFeed(): IBasicDataFeed {
  const client = useMemo(() => getDatafeedClient(), []);
  const subscriptionsRef = useRef<Map<string, SubscriptionState>>(new Map());
  const lastBarsRef = useRef<Map<string, Bar>>(new Map());

  useEffect(() => {
    return () => {
      for (const subscription of subscriptionsRef.current.values()) {
        subscription.abortController.abort();
      }
      subscriptionsRef.current.clear();
      lastBarsRef.current.clear();
    };
  }, []);

  return useMemo(() => {
    let configPromise: Promise<DatafeedConfiguration> | undefined;

    const loadConfig = async (): Promise<DatafeedConfiguration> => {
      if (!configPromise) {
        configPromise = client.getConfig({}).then(mapConfig).catch(() => DEFAULT_CONFIG);
      }
      return configPromise;
    };

    const datafeed: IBasicDataFeed = {
      onReady(callback) {
        void loadConfig().then((config) => callback(config));
      },

      searchSymbols(userInput, exchange, symbolType, onResult: SearchSymbolsCallback) {
        void (async () => {
          try {
            const query = userInput.trim();
            if (query.length === 0) {
              const response = await client.listSymbols({
                exchange: toOptionalString(exchange),
                type: toOptionalString(symbolType),
                limit: 50,
              });
              onResult(response.symbols.map(mapSearchResultFromLibrary));
              return;
            }

            const response = await client.searchSymbols({
              query,
              exchange: toOptionalString(exchange),
              type: toOptionalString(symbolType),
              limit: 50,
            });
            onResult(
              response.items.map((item) =>
                mapSearchResult({
                  symbol: item.symbol,
                  description: item.description,
                  exchange: item.exchange,
                  type: item.type,
                  ticker: item.ticker,
                  exchange_logo: item.exchangeLogo,
                  logo_urls: toLogoUrls(item.logoUrls),
                }),
              ),
            );
          } catch {
            onResult([]);
          }
        })();
      },

      resolveSymbol(
        symbolName,
        onResolve: ResolveCallback,
        onError: DatafeedErrorCallback,
        extension?: SymbolResolveExtension,
      ) {
        void (async () => {
          try {
            const response = await client.resolveSymbol({
              symbol: symbolName,
              currencyCode: extension?.currencyCode,
              unitId: extension?.unitId,
              session: extension?.session,
            });
            if (!response.symbol) {
              onError("unknown_symbol");
              return;
            }
            onResolve(mapLibrarySymbolInfo(response.symbol));
          } catch (error) {
            const connectError = ConnectError.from(error);
            if (connectError.code === Code.NotFound) {
              // TradingView uses this code path to show invalid symbol UX.
              onError("unknown_symbol");
              return;
            }
            onError(toErrorMessage(error));
          }
        })();
      },

      getBars(symbolInfo, resolution, periodParams, onResult: HistoryCallback, onError: DatafeedErrorCallback) {
        void (async () => {
          try {
            const requestedCountBack = Number.isFinite(periodParams.countBack)
              ? Math.floor(periodParams.countBack)
              : 300;
            const response = await client.getBars({
              symbol: symbolInfo.ticker ?? symbolInfo.name,
              resolution,
              from: BigInt(Math.floor(periodParams.from)),
              to: BigInt(Math.floor(periodParams.to)),
              countBack: Math.max(2, requestedCountBack),
            });

            const bars: Bar[] = response.bars.map((item) => {
              const bar: Bar = {
                time: Number(item.time),
                open: item.open,
                high: item.high,
                low: item.low,
                close: item.close,
              };
              if (item.volume !== undefined) {
                bar.volume = item.volume;
              }
              return bar;
            });
            bars.sort((left, right) => left.time - right.time);
            if (bars.length > 0) {
              lastBarsRef.current.set(barCacheKey(symbolInfo, resolution), bars[bars.length - 1]);
            }

            onResult(bars, {
              noData: response.noData || bars.length === 0,
              nextTime: response.nextTime !== undefined ? Number(response.nextTime) : null,
            });
          } catch (error) {
            onError(toErrorMessage(error));
          }
        })();
      },

      subscribeBars(symbolInfo, resolution, onTick, listenerGuid, onResetCacheNeededCallback) {
        const existing = subscriptionsRef.current.get(listenerGuid);
        if (existing) {
          existing.abortController.abort();
        }

        const abortController = new AbortController();
        subscriptionsRef.current.set(listenerGuid, { abortController });

        void (async () => {
          try {
            const stream = client.subscribeBars(
              {
                symbolInfo: {
                  name: symbolInfo.name,
                  ticker: symbolInfo.ticker,
                },
                resolution,
                listenerGuid,
              },
              {
                signal: abortController.signal,
                timeoutMs: 0,
              },
            );

            for await (const update of stream) {
              if (!update.bar) {
                continue;
              }
              const bar: Bar = {
                time: Number(update.bar.time),
                open: update.bar.open,
                high: update.bar.high,
                low: update.bar.low,
                close: update.bar.close,
              };
              if (update.bar.volume !== undefined) {
                bar.volume = update.bar.volume;
              }
              const key = barCacheKey(symbolInfo, resolution);
              const previous = lastBarsRef.current.get(key);
              if (previous && bar.time < previous.time) {
                // Drop stale rows from provider snapshots. TradingView expects monotonic realtime updates.
                continue;
              }
              lastBarsRef.current.set(key, bar);
              onTick(bar);
            }
          } catch {
            if (!abortController.signal.aborted) {
              onResetCacheNeededCallback();
            }
          } finally {
            const current = subscriptionsRef.current.get(listenerGuid);
            if (current && current.abortController === abortController) {
              subscriptionsRef.current.delete(listenerGuid);
            }
          }
        })();
      },

      unsubscribeBars(listenerGuid) {
        const subscription = subscriptionsRef.current.get(listenerGuid);
        if (!subscription) {
          return;
        }
        subscription.abortController.abort();
        subscriptionsRef.current.delete(listenerGuid);
      },

      getServerTime(callback) {
        void (async () => {
          try {
            const response = await client.getTime({});
            callback(Number(response.unixTime));
          } catch {
            callback(Math.floor(Date.now() / 1000));
          }
        })();
      },
    };

    return datafeed;
  }, [client]);
}
