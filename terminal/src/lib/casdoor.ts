import { SDK } from "casdoor-nodejs-sdk";

export const casdoor = new SDK({
  endpoint: process.env.CASDOOR_ENDPOINT ?? "http://localhost:8000",
  clientId: process.env.CASDOOR_CLIENT_ID ?? "",
  clientSecret: process.env.CASDOOR_CLIENT_SECRET ?? "",
  certificate: process.env.CASDOOR_CERTIFICATE ?? "",
  orgName: process.env.CASDOOR_ORG_NAME ?? "built-in",
  appName: process.env.CASDOOR_APP_NAME ?? "app-built-in",
});
