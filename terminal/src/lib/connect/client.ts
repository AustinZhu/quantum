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
