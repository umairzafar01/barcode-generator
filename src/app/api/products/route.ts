import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";
import { getUserFromCookies } from "@/lib/auth";
import { Prisma } from "@/generated/core";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";

  try {
    const current = await getUserFromCookies();
    const isAdmin = current?.role === "ADMIN";

    const where: Prisma.ProductWhereInput | undefined =
      q.trim().length === 0
        ? undefined
        : {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              { barcode: { contains: q } },
            ],
          };

    const products = await prismaCore.product.findMany(
      isAdmin
        ? {
            where,
            orderBy: { createdAt: "desc" },
          }
        : {
            where: {
              ...(where ? where : {}),
              userId: current?.sub ?? "__none__", // non-admin sees only owned; legacy rows without userId will be hidden
            },
            orderBy: { createdAt: "desc" },
          }
    );

    return NextResponse.json(products);
  } catch (err) {
    console.error("Error in /api/products", err);
    return NextResponse.json(
      { error: "Failed to load products" },
      { status: 500 }
    );
  }
}
