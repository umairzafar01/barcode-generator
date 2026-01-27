import { NextResponse } from "next/server";
import { getUserFromCookies } from "@/lib/auth";

export async function GET() {
  const user = await getUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  return NextResponse.json({
    id: user.sub,
    email: user.email,
    role: user.role,
  });
}

