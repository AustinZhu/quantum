import { NextRequest, NextResponse } from "next/server";

const serviceUrlByKind: Record<string, string | undefined> = {
  algorand: process.env.BFF_ALGORAND_URL,
  datafeed: process.env.BFF_DATAFEED_URL,
  doordash: process.env.BFF_DOORDASH_URL,
  system: process.env.BFF_SYSTEM_URL,
};

const serviceApiKeyByKind: Record<string, string | undefined> = {
  algorand: process.env.BFF_ALGORAND_API_KEY ?? process.env.BFF_SERVICE_KEY,
  datafeed: process.env.BFF_DATAFEED_API_KEY ?? process.env.BFF_SERVICE_KEY,
  doordash: process.env.BFF_DOORDASH_API_KEY ?? process.env.BFF_SERVICE_KEY,
  system: process.env.BFF_SYSTEM_API_KEY ?? process.env.BFF_SERVICE_KEY,
};

export async function forwardRpc(serviceKind: string, segments: string[], req: NextRequest) {
  const baseUrl = serviceUrlByKind[serviceKind];
  if (!baseUrl) {
    return NextResponse.json({ error: "service_not_configured" }, { status: 500 });
  }
  const apiKey = serviceApiKeyByKind[serviceKind] ?? "";

  const upstreamPath = segments.join("/");
  const upstream = `${baseUrl}/${upstreamPath}`;
  const body = req.method === "GET" ? undefined : await req.text();

  const response = await fetch(upstream, {
    method: req.method,
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "x-service-key": apiKey,
    },
    body,
    cache: "no-store",
  });

  const text = await response.text();
  return new NextResponse(text, {
    status: response.status,
    headers: {
      "content-type": response.headers.get("content-type") ?? "application/json",
    },
  });
}
