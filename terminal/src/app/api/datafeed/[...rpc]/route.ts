import { NextRequest } from "next/server";
import { forwardRpc } from "@/lib/bff/proxy";

export async function GET(req: NextRequest, ctx: { params: Promise<{ rpc: string[] }> }) {
  const { rpc } = await ctx.params;
  return forwardRpc("datafeed", rpc, req);
}

export async function POST(req: NextRequest, ctx: { params: Promise<{ rpc: string[] }> }) {
  const { rpc } = await ctx.params;
  return forwardRpc("datafeed", rpc, req);
}
