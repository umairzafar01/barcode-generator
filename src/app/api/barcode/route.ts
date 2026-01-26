import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";
import { prismaLogs } from "@/lib/prismaLog";
import { generateEAN13 } from "@/lib/ean13";
import { generateBarcode } from "@/lib/barcode";



export async function POST(req: Request) {
  let body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON" },
      { status: 400 }
    );
  }

  const { name, price } = body;

  if (!name || !price) {
    return NextResponse.json(
      { error: "name and price are required" },
      { status: 400 }
    );
  }

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

  // 2️⃣ Create product
  const product = await prismaCore.product.create({
    data: { name, price, barcode },
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

  return new NextResponse(new Uint8Array(image), {
    headers: { "Content-Type": "image/png",
     },

  });
}
