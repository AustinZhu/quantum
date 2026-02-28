import { createClient, type Client } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import { DatafeedService } from "@/lib/gen/datafeed/v1/datafeed_pb";

export type ServiceKind = "algorand" | "datafeed" | "doordash" | "system";

export async function callBff(service: ServiceKind, rpcPath: string, init?: RequestInit) {
  const response = await fetch(`/api/${service}/${rpcPath}`, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`BFF request failed: ${response.status}`);
  }
  return response.json();
}

let datafeedClient: Client<typeof DatafeedService> | undefined;

export function getDatafeedClient(): Client<typeof DatafeedService> {
  if (datafeedClient) {
    return datafeedClient;
  }

  const transport = createGrpcWebTransport({
    baseUrl: "/api/datafeed",
  });

  datafeedClient = createClient(DatafeedService, transport);
  return datafeedClient;
}
