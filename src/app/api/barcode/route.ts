import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";
import { prismaLogs } from "@/lib/prismaLog";
import { generateEAN13 } from "@/lib/ean13";
import { generateBarcode } from "@/lib/barcode";
import { getUserFromCookies } from "@/lib/auth";



export async function POST(req: Request) {
  const { name, price } = await req.json();

  if (!name || typeof name !== "string" || !price) {
    return NextResponse.json(
      { error: "name and price are required" },
      { status: 400 }
    );
  }

  const currentUser = await getUserFromCookies();

  // 1️⃣ Generate unique EAN‑13
  let barcode = "";
  let exists = true;

  while (exists) {
    barcode = generateEAN13();
    const found = await prismaCore.product.findUnique({
      where: { barcode },
    });
    exists = !!found;
  }

  // 2️⃣ Create product (linked to user if present)
  const product = await prismaCore.product.create({
    data: {
      name,
      price,
      barcode,
      userId: currentUser?.sub ?? null,
    },
  });

  // 3️⃣ Log generation
  await prismaLogs.barcodeLog.create({
    data: {
      action: "GENERATED",
      productId: product.id,
    },
  });

  // 4️⃣ Generate barcode image
  const image = await generateBarcode(barcode);

  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
