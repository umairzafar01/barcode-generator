import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";

export async function DELETE() {
  await prismaCore.product.deleteMany({});
  return NextResponse.json({ success: true });
}
