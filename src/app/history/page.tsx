"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";

type Product = {
  id: string;
  name: string;
  price: number;
  barcode: string;
};

export default function HistoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadProducts(query = "") {
    setLoading(true);
    const res = await fetch(`/api/products?q=${query}`);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const toggleSelectAll = (checked: boolean) => {
    setSelected(checked ? products.map((p) => p.barcode) : []);
  };

  return (
    <>


      <Container>
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold">History</h1>

          <div className="flex gap-2 flex-wrap">
            {/* BULK PRINT */}
            {selected.length > 0 && (
              <button
                onClick={() => {
                  const codes = selected.join(",");
                  window.open(`/print/bulk?codes=${codes}`, "_blank");
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Bulk Print ({selected.length})
              </button>
            )}

            {/* CLEAR HISTORY */}
            <button
              onClick={async () => {
                if (!confirm("Clear all history?")) return;
                await fetch("/api/clear-history", { method: "DELETE" });
                loadProducts();
                setSelected([]);
              }}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear History
            </button>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 border p-2 rounded"
            placeholder="Search by product name or barcode..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => loadProducts(search)}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Search
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">
                  <input
                    type="checkbox"
                    checked={
                      products.length > 0 &&
                      selected.length === products.length
                    }
                    onChange={(e) => toggleSelectAll(e.target.checked)}
                  />
                </th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Barcode</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-500">
                    Loading...
                  </td>
                </tr>
              )}

              {!loading && products.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-500">
                    No products found
                  </td>
                </tr>
              )}

              {products.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(p.barcode)}
                      onChange={(e) => {
                        setSelected((prev) =>
                          e.target.checked
                            ? [...prev, p.barcode]
                            : prev.filter((b) => b !== p.barcode)
                        );
                      }}
                    />
                  </td>

                  <td className="p-3">{p.name}</td>
                  <td className="p-3">Rs.{p.price}</td>
                  <td className="p-3">{p.barcode}</td>

                  <td className="p-3">
                    <a
                      href={`/print/${p.barcode}`}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      Print
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
