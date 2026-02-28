import { SDK } from "casdoor-nodejs-sdk";

const sharedConfig = {
  clientId: process.env.CASDOOR_CLIENT_ID ?? "",
  clientSecret: process.env.CASDOOR_CLIENT_SECRET ?? "",
  certificate: process.env.CASDOOR_CERTIFICATE ?? "",
  orgName: process.env.CASDOOR_ORG_NAME ?? "built-in",
  appName: process.env.CASDOOR_APP_NAME ?? "app-built-in",
};

const internalEndpoint = process.env.CASDOOR_ENDPOINT ?? "http://localhost:8000";
const publicEndpoint =
  process.env.CASDOOR_PUBLIC_ENDPOINT ?? process.env.CASDOOR_ORIGIN ?? internalEndpoint;

export const casdoor = new SDK({
  endpoint: internalEndpoint,
  ...sharedConfig,
});

const casdoorPublic = new SDK({
  endpoint: publicEndpoint,
  ...sharedConfig,
});

export function getCasdoorSignInUrl(callbackUrl: string): string {
  return casdoorPublic.getSignInUrl(callbackUrl);
}

function decodeJwtPayload(token: string): Record<string, unknown> {
  const parts = token.split(".");
  if (parts.length < 2) {
    throw new Error("Invalid JWT token format");
  }

  const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const payload = Buffer.from(padded, "base64").toString("utf8");
  return JSON.parse(payload) as Record<string, unknown>;
}

export type CasdoorTokenUser = {
  sub?: string;
  name?: string;
  displayName?: string;
  preferred_username?: string;
  email?: string;
  avatar?: string;
  owner?: string;
};

export function parseCasdoorAccessToken(token: string): CasdoorTokenUser {
  if (process.env.CASDOOR_CERTIFICATE) {
    return casdoor.parseJwtToken(token) as CasdoorTokenUser;
  }

  return decodeJwtPayload(token) as CasdoorTokenUser;
}
