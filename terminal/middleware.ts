import { type NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const session = request.cookies.get("casdoor_session");
  const isLogin = request.nextUrl.pathname === "/login";

  if (!session && !isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Run on all routes except Next.js internals, static assets, and auth API
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
