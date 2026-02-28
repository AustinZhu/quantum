import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.delete("casdoor_session");
  response.cookies.delete("casdoor_access_token");
  return response;
}
