import { NextResponse } from "next/server";
import { prismaLogs } from "@/lib/prismaLog";
import { prismaCore } from "@/lib/prismaCore";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { productId } = body;

    if (!productId) {
      return NextResponse.json(
        { error: "productId is required" },
        { status: 400 }
      );
    }

    // 1️⃣ Check product exists
    const product = await prismaCore.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // 2️⃣ Log PRINT action
    await prismaLogs.barcodeLog.create({
      data: {
        action: "PRINTED",
        productId: product.id,
      },
    });

    // 3️⃣ Return barcode for redirect
    return NextResponse.json({
      barcode: product.barcode,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
