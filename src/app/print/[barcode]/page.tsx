import { prismaCore } from "@/lib/prismaCore";

type Props = {
  params: Promise<{ barcode: string }>;
};

export default async function PrintPage({ params }: Props) {
  const { barcode } = await params;

  const product = await prismaCore.product.findUnique({
    where: { barcode },
  });

  if (!product) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white print:bg-white">
      <div className="sticker border border-dashed border-gray-400 p-1 text-center flex flex-col justify-between">

        {/* PRODUCT NAME */}
        <p className="text-[10px] font-semibold truncate">
          {product.name}
        </p>

        {/* BARCODE */}
        <img
          src={`/api/barcode-image?value=${product.barcode}`}
          alt="Barcode"
          className="mx-auto"
          style={{ height: "36px" }}
        />

        {/* PRICE */}
        <p className="text-[10px] font-bold">
          Rs.{product.price}
        </p>
      </div>

      {/* AUTO PRINT */}
      <script
        dangerouslySetInnerHTML={{
          __html: "window.print();",
        }}
      />
    </div>
  );
}
