import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

type ServiceKind = "algorand" | "datafeed" | "doordash" | "system";

const serviceUrlByKind: Record<ServiceKind, string | undefined> = {
  algorand: process.env.BFF_ALGORAND_URL,
  datafeed: process.env.BFF_DATAFEED_URL,
  doordash: process.env.BFF_DOORDASH_URL,
  system: process.env.BFF_SYSTEM_URL,
};

const localFallbackUrlByKind: Record<ServiceKind, string> = {
  algorand: "http://127.0.0.1:8080",
  datafeed: "http://127.0.0.1:8081",
  doordash: "http://127.0.0.1:8082",
  system: "http://127.0.0.1:8080",
};

const serviceEnvVarByKind: Record<ServiceKind, string> = {
  algorand: "BFF_ALGORAND_URL",
  datafeed: "BFF_DATAFEED_URL",
  doordash: "BFF_DOORDASH_URL",
  system: "BFF_SYSTEM_URL",
};

const serviceApiKeyByKind: Record<ServiceKind, string | undefined> = {
  algorand: process.env.BFF_ALGORAND_API_KEY ?? process.env.BFF_SERVICE_KEY,
  datafeed: process.env.BFF_DATAFEED_API_KEY ?? process.env.BFF_SERVICE_KEY,
  doordash: process.env.BFF_DOORDASH_API_KEY ?? process.env.BFF_SERVICE_KEY,
  system: process.env.BFF_SYSTEM_API_KEY ?? process.env.BFF_SERVICE_KEY,
};

const servicePathPatternByKind: Record<ServiceKind, RegExp> = {
  algorand: /^quant\.algorand\.v1\.[A-Za-z][A-Za-z0-9]*$/,
  datafeed: /^quant\.datafeed\.v1\.[A-Za-z][A-Za-z0-9]*$/,
  doordash: /^quant\.doordash\.v1\.[A-Za-z][A-Za-z0-9]*$/,
  system: /^quant\.system\.v1\.[A-Za-z][A-Za-z0-9]*$/,
};

const rpcMethodPattern = /^[A-Za-z][A-Za-z0-9]*$/;
const streamingMethodByKind: Record<ServiceKind, Set<string>> = {
  algorand: new Set<string>(),
  datafeed: new Set<string>(["StreamBars", "SubscribeBars"]),
  doordash: new Set<string>(),
  system: new Set<string>(),
};

function getUpstreamTimeoutMs(): number {
  const parsed = Number(process.env.BFF_UPSTREAM_TIMEOUT_MS ?? "10000");
  if (!Number.isFinite(parsed) || parsed < 100 || parsed > 120000) {
    return 10000;
  }
  return Math.floor(parsed);
}

type ParsedRpcPath = {
  upstreamPath: string;
  method: string;
};

type UpstreamRequestArgs = {
  req: NextRequest;
  url: string;
  headers: Headers;
  body: ArrayBuffer | undefined;
  signal: AbortSignal;
};

function isLocalRequest(req: NextRequest): boolean {
  const hostname = req.nextUrl.hostname.toLowerCase();
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
}

function resolveServiceUrl(serviceKind: ServiceKind, req: NextRequest): string | undefined {
  const configured = serviceUrlByKind[serviceKind]?.trim();
  if (configured) {
    return configured;
  }
  if (process.env.NODE_ENV !== "production" || isLocalRequest(req)) {
    return localFallbackUrlByKind[serviceKind];
  }
  return undefined;
}

function parseRpcPath(serviceKind: ServiceKind, segments: string[]): ParsedRpcPath | null {
  if (segments.length === 3) {
    const [prefix, servicePath, method] = segments;
    if (prefix !== "rpc") {
      return null;
    }
    if (!servicePathPatternByKind[serviceKind].test(servicePath) || !rpcMethodPattern.test(method)) {
      return null;
    }
    return { upstreamPath: segments.join("/"), method };
  }

  if (segments.length === 2) {
    const [servicePath, method] = segments;
    if (!servicePathPatternByKind[serviceKind].test(servicePath) || !rpcMethodPattern.test(method)) {
      return null;
    }
    return { upstreamPath: segments.join("/"), method };
  }

  return null;
}

async function fetchUpstream(args: UpstreamRequestArgs): Promise<Response> {
  return fetch(args.url, {
    method: args.req.method,
    headers: args.headers,
    body: args.body,
    cache: "no-store",
    signal: args.signal,
  });
}

export async function forwardRpc(serviceKind: ServiceKind, segments: string[], req: NextRequest) {
  const baseUrl = resolveServiceUrl(serviceKind, req);
  if (!baseUrl) {
    return NextResponse.json(
      {
        error: "service_not_configured",
        service: serviceKind,
        envVar: serviceEnvVarByKind[serviceKind],
      },
      { status: 500 },
    );
  }
  const parsedPath = parseRpcPath(serviceKind, segments);
  if (!parsedPath) {
    return NextResponse.json({ error: "invalid_rpc_path" }, { status: 400 });
  }

  const apiKey = serviceApiKeyByKind[serviceKind] ?? "";
  const requestId = req.headers.get("x-request-id") ?? randomUUID();
  const upstreamTimeoutMs = getUpstreamTimeoutMs();
  const isStreamingMethod = streamingMethodByKind[serviceKind].has(parsedPath.method);
  const query = req.nextUrl.search;
  const upstream = `${baseUrl.replace(/\/+$/, "")}/${parsedPath.upstreamPath}${query}`;
  const body =
    req.method === "GET" || req.method === "HEAD" ? undefined : await req.arrayBuffer();

  const headers = new Headers(req.headers);
  headers.delete("host");
  headers.delete("connection");
  headers.delete("content-length");
  if (apiKey) {
    headers.set("x-api-key", apiKey);
    headers.set("x-service-key", apiKey);
  }
  headers.set("x-request-id", requestId);

  const controller = new AbortController();
  const clientAbort = () => controller.abort();
  req.signal.addEventListener("abort", clientAbort);
  let timedOut = false;
  const timeout = isStreamingMethod
    ? undefined
    : setTimeout(() => {
        timedOut = true;
        controller.abort();
      }, upstreamTimeoutMs);

  let response: Response;
  try {
    response = await fetchUpstream({
      req,
      url: upstream,
      headers,
      body,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      if (timedOut) {
        return NextResponse.json({ error: "upstream_timeout" }, { status: 504 });
      }
      return new NextResponse(null, { status: 499 });
    }
    return NextResponse.json(
      {
        error: "upstream_unreachable",
      },
      { status: 502 },
    );
  } finally {
    if (timeout) {
      clearTimeout(timeout);
    }
    req.signal.removeEventListener("abort", clientAbort);
  }

  const responseHeaders = new Headers(response.headers);
  responseHeaders.set("x-request-id", requestId);
  return new NextResponse(response.body, {
    status: response.status,
    headers: responseHeaders,
  });
}
