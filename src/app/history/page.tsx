"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";

type CurrentUser = {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
};

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
  const [user, setUser] = useState<CurrentUser | null>(null);

  async function loadProducts(query = "") {
    setLoading(true);
    try {
      const res = await fetch(`/api/products?q=${encodeURIComponent(query)}`);
      if (!res.ok) {
        console.error("Failed to load products", await res.text());
        setProducts([]);
      } else {
        const data = await res.json();
        setProducts(data);
      }
    } catch (err) {
      console.error("Error loading products", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          setUser(null);
          return;
        }
        const data = await res.json();
        setUser(data);
      } catch {
        setUser(null);
      }
    }
    loadUser();
  }, []);

  const toggleSelectAll = (checked: boolean) => {
    setSelected(checked ? products.map((p) => p.barcode) : []);
  };

  return (
    <Container>
      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            History
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            View all generated labels, search by name or barcode, and bulk
            print stickers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* BULK PRINT */}
          {selected.length > 0 && (
            <button
              onClick={() => {
                const codes = selected.join(",");
                window.open(`/print/bulk?codes=${codes}`, "_blank");
              }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600"
            >
              <span className="h-4 w-4 rounded-full bg-white/15 text-[10px] flex items-center justify-center">
                ⇧
              </span>
              Bulk print ({selected.length})
            </button>
          )}

          {/* CLEAR HISTORY (ADMIN ONLY) */}
          {user?.role === "ADMIN" && (
            <button
              onClick={async () => {
                if (!confirm("Clear all history? This cannot be undone.")) {
                  return;
                }
                const res = await fetch("/api/clear-history", {
                  method: "DELETE",
                });
                if (!res.ok) {
                  alert("Failed to clear history");
                  return;
                }
                loadProducts();
                setSelected([]);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 transition hover:bg-red-100 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200 dark:hover:bg-red-900/40"
            >
              <span className="h-4 w-4 rounded-full bg-red-500/15 text-[10px] flex items-center justify-center">
                ×
              </span>
              Clear history
            </button>
          )}
        </div>
      </div>

      {/* SEARCH */}
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-xs text-slate-400">
            🔍
          </span>
          <input
            className="w-full rounded-lg border border-slate-200 bg-white px-7 py-2 text-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:border-brand-400 dark:focus:ring-brand-800/60"
            placeholder="Search by product name or barcode..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button
          onClick={() => loadProducts(search)}
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          Apply filter
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full text-left text-sm rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <thead className="bg-slate-50/80 text-xs text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
            <tr>
              <th className="p-3 align-middle">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 dark:border-slate-700"
                  checked={
                    products.length > 0 &&
                    selected.length === products.length
                  }
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                />
              </th>
              <th className="p-3 font-medium">Name</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium">Barcode</th>
              <th className="p-3 font-medium text-right">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {loading && (
              <tr>
                <td
                  colSpan={5}
                  className="p-6 text-center text-sm text-slate-500 dark:text-slate-400"
                >
                  Loading products...
                </td>
              </tr>
            )}

            {!loading && products.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-sm text-slate-500 dark:text-slate-400"
                >
                  No products found yet. Generate your first label on the{" "}
                  <span className="font-medium text-brand-600 dark:text-brand-400">
                    Home
                  </span>{" "}
                  page.
                </td>
              </tr>
            )}

            {products.map((p) => (
              <tr
                key={p.id}
                className="bg-white hover:bg-slate-50/80 dark:bg-slate-900 dark:hover:bg-slate-800/80"
              >
                <td className="p-3 align-middle">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 dark:border-slate-700"
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

                <td className="p-3 align-middle text-sm font-medium text-slate-800 dark:text-slate-100">
                  {p.name}
                </td>
                <td className="p-3 align-middle text-sm text-slate-700 dark:text-slate-200">
                  Rs.{p.price}
                </td>
                <td className="p-3 align-middle text-xs font-mono text-slate-500 dark:text-slate-400">
                  {p.barcode}
                </td>

                <td className="p-3 align-middle text-right text-xs">
                  <a
                    href={`/print/${p.barcode}`}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-brand-200 px-3 py-1.5 text-[11px] font-medium text-brand-700 transition hover:bg-brand-50 dark:border-brand-900/40 dark:text-brand-300 dark:hover:bg-brand-950/40"
                  >
                    Print label
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
