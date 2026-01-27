import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";
import { getUserFromCookies } from "@/lib/auth";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const barcode = searchParams.get("barcode");

  if (!barcode) {
    return NextResponse.json({ error: "Barcode missing" }, { status: 400 });
  }

  const current = await getUserFromCookies();
  const isAdmin = current?.role === "ADMIN";

  const product = await prismaCore.product.findFirst({
    where: isAdmin
      ? { barcode }
      : {
          barcode,
          userId: current?.sub ?? "__none__",
        },
  });

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
