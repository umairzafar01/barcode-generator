import { prismaCore } from "@/lib/prismaCore";
import { getUserFromCookies } from "@/lib/auth";

type Props = {
  params: Promise<{ barcode: string }>;
};

export default async function PrintPage({ params }: Props) {
  const { barcode } = await params;
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

  if (!product) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-white print:bg-white">
      <div className="sticker flex flex-col justify-between border border-dashed border-slate-400 p-1 text-center">
        {/* PRODUCT NAME */}
        <p className="truncate text-[10px] font-semibold">
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
