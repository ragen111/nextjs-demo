import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    message: "Hello from the Next.js App Router",
    timestamp: new Date().toISOString(),
    runtime: process.env.NEXT_RUNTIME ?? "nodejs",
  });
}
