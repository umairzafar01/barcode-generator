import { generateBarcode } from "@/lib/barcode";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const value = searchParams.get("value");

  if (!value) {
    return new Response(JSON.stringify({ error: "Missing barcode" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const image = await generateBarcode(value);

  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
