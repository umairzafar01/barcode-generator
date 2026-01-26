import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  const products = await prismaCore.product.findMany({
    where: {
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { barcode: { contains: q } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(products);
}
