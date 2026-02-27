import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

type ServiceKind = "algorand" | "datafeed" | "doordash" | "system";

const serviceUrlByKind: Record<ServiceKind, string | undefined> = {
  algorand: process.env.BFF_ALGORAND_URL,
  datafeed: process.env.BFF_DATAFEED_URL,
  doordash: process.env.BFF_DOORDASH_URL,
  system: process.env.BFF_SYSTEM_URL,
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

function getUpstreamTimeoutMs(): number {
  const parsed = Number(process.env.BFF_UPSTREAM_TIMEOUT_MS ?? "10000");
  if (!Number.isFinite(parsed) || parsed < 100 || parsed > 120000) {
    return 10000;
  }
  return Math.floor(parsed);
}

function isAllowedRpcPath(serviceKind: ServiceKind, segments: string[]): boolean {
  if (segments.length !== 3) {
    return false;
  }
  const [prefix, servicePath, method] = segments;
  if (prefix !== "rpc") {
    return false;
  }
  if (!servicePathPatternByKind[serviceKind].test(servicePath)) {
    return false;
  }
  return rpcMethodPattern.test(method);
}

export async function forwardRpc(serviceKind: ServiceKind, segments: string[], req: NextRequest) {
  const baseUrl = serviceUrlByKind[serviceKind];
  if (!baseUrl) {
    return NextResponse.json({ error: "service_not_configured" }, { status: 500 });
  }
  if (!isAllowedRpcPath(serviceKind, segments)) {
    return NextResponse.json({ error: "invalid_rpc_path" }, { status: 400 });
  }

  const apiKey = serviceApiKeyByKind[serviceKind] ?? "";
  const requestId = req.headers.get("x-request-id") ?? randomUUID();
  const upstreamTimeoutMs = getUpstreamTimeoutMs();
  const upstreamPath = segments.join("/");
  const upstream = `${baseUrl.replace(/\/+$/, "")}/${upstreamPath}`;
  const body = req.method === "GET" ? undefined : await req.text();

  const headers = new Headers();
  const contentType = req.headers.get("content-type");
  const accept = req.headers.get("accept");
  if (contentType) {
    headers.set("content-type", contentType);
  }
  if (accept) {
    headers.set("accept", accept);
  }
  if (apiKey) {
    headers.set("x-api-key", apiKey);
    headers.set("x-service-key", apiKey);
  }
  headers.set("x-request-id", requestId);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), upstreamTimeoutMs);

  let response: Response;
  try {
    response = await fetch(upstream, {
      method: req.method,
      headers,
      body,
      cache: "no-store",
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json({ error: "upstream_timeout" }, { status: 504 });
    }
    return NextResponse.json(
      {
        error: "upstream_unreachable",
      },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }

  const responseHeaders: Record<string, string> = {
    "x-request-id": requestId,
    "content-type": response.headers.get("content-type") ?? "application/json",
  };
  const cacheControl = response.headers.get("cache-control");
  if (cacheControl) {
    responseHeaders["cache-control"] = cacheControl;
  }
  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: responseHeaders,
  });
}
