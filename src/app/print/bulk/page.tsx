import { prismaCore } from "@/lib/prismaCore";
import { getUserFromCookies } from "@/lib/auth";

type Props = {
  searchParams: Promise<{ codes?: string }>;
};

export default async function BulkPrint({ searchParams }: Props) {
  const { codes } = await searchParams;
  const barcodeList = codes ? codes.split(",") : [];
  const current = await getUserFromCookies();
  const isAdmin = current?.role === "ADMIN";

  const products = await prismaCore.product.findMany(
    isAdmin
      ? {
          where: { barcode: { in: barcodeList } },
        }
      : {
          where: {
            barcode: { in: barcodeList },
            userId: current?.sub ?? "__none__",
          },
        }
  );

  return (
    <div className="bg-white p-2 print:p-0">
      <div className="grid grid-cols-2 gap-2 print:grid-cols-2">
        {products.map((p) => (
          <div
            key={p.barcode}
            className="sticker border border-dashed border-gray-400 p-1 text-center flex flex-col justify-between"
          >
            <p className="text-[10px] font-semibold truncate">
              {p.name}
            </p>

            <img
              src={`/api/barcode-image?value=${p.barcode}`}
              className="mx-auto"
              style={{ height: "36px" }}
            />

            <p className="text-[10px] font-bold">
              Rs.{p.price}
            </p>
          </div>
        ))}
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: "window.print();",
        }}
      />
    </div>
  );
}
