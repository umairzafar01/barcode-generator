import { NextResponse } from "next/server";
import { generateBarcode } from "@/lib/barcode";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const value = searchParams.get("value");

  if (!value) {
    return NextResponse.json({ error: "Missing barcode" }, { status: 400 });
  }

  const image = await generateBarcode(value);

  return new NextResponse(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
