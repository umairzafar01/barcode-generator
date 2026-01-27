import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";
import { getUserFromCookies } from "@/lib/auth";

export async function DELETE() {
  const user = await getUserFromCookies();
  if (!user) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  if (user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prismaCore.product.deleteMany({});
  return NextResponse.json({ success: true });
}
