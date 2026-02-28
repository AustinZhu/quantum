import { casdoor, parseCasdoorAccessToken } from "@/lib/casdoor";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=no_code", request.url));
  }

  try {
    const { access_token } = await casdoor.getAuthToken(code);
    const tokenUser = parseCasdoorAccessToken(access_token);
    const userName =
      tokenUser.name ??
      tokenUser.preferred_username ??
      tokenUser.sub?.split("/").pop() ??
      "user";

    const user = {
      name: userName,
      displayName: tokenUser.displayName,
      email: tokenUser.email,
      avatar: tokenUser.avatar,
      owner: tokenUser.owner,
    };

    const response = NextResponse.redirect(new URL("/dashboard", request.url));

    response.cookies.set("casdoor_session", JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });
    response.cookies.set("casdoor_access_token", access_token, {
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
