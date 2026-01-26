import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const barcode = searchParams.get("barcode");

  if (!barcode) {
    return NextResponse.json({ error: "Barcode missing" }, { status: 400 });
  }

  const product = await prismaCore.product.findUnique({
    where: { barcode },
  });

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
