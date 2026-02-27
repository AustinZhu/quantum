import { casdoor } from "@/lib/casdoor";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=no_code", request.url));
  }

  try {
    const { access_token } = await casdoor.getAuthToken(code);
    const user = casdoor.parseJwtToken(access_token);

    const response = NextResponse.redirect(new URL("/dashboard", request.url));

    response.cookies.set("casdoor_session", JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Casdoor login error:", error);
    return NextResponse.redirect(new URL("/login?error=auth_failed", request.url));
  }
}
