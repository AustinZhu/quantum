import { casdoor } from "@/lib/casdoor";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const baseUrl = process.env.APP_URL ?? new URL(request.url).origin;
  const callbackUrl = `${baseUrl}/api/auth/callback`;
  const redirectUrl = casdoor.getSignInUrl(callbackUrl);
  return NextResponse.redirect(redirectUrl);
}
