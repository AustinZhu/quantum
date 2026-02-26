import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("# terminal metrics scaffold\n", {
    headers: { "content-type": "text/plain" },
  });
}
