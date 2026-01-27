"use client";

import { useState } from "react";
export default function HomePage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function generateBarcode() {
    if (!name || !price) {
      alert("Please enter product name and price");
      return;
    }

    setLoading(true);
    setImageUrl(null);

    const res = await fetch("/api/barcode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: Number(price),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Barcode generation failed", text);
      alert("Failed to generate barcode. Please check server logs.");
      setLoading(false);
      return;
    }

    const blob = await res.blob();
    setImageUrl(URL.createObjectURL(blob));
    setLoading(false);
  }

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
        <section className="space-y-4">
          <p className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-800">
            Blazing fast barcode generation
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Create product barcodes
            <span className="text-brand-600 dark:text-brand-500">
              {" "}
              in seconds
            </span>
            .
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl">
            Enter a product name and price to instantly generate a printable
            barcode label. All generated labels are saved in your history so you
            can re-print anytime.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
            <li className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                ✓
              </span>
              Auto-print optimized
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                ✓
              </span>
              History & bulk print
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                ✓
              </span>
              Dark / light mode
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">
                ✓
              </span>
              EAN-13 compatible
            </li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-100 dark:bg-slate-900/90 dark:ring-slate-800">
          <h2 className="text-base font-medium mb-4 text-slate-800 dark:text-slate-100">
            Generate new label
          </h2>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Product name
              </label>
              <input
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-brand-400 dark:focus:bg-slate-900 dark:focus:ring-brand-800/60"
                placeholder="e.g. Classic T-Shirt"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Price
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-xs text-slate-400">
                  Rs.
                </span>
                <input
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-7 py-2 text-sm outline-none ring-0 transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-brand-400 dark:focus:bg-slate-900 dark:focus:ring-brand-800/60"
                  placeholder="999"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={generateBarcode}
              disabled={loading}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-brand-500 dark:hover:bg-brand-600"
            >
              {loading ? "Generating label..." : "Generate barcode"}
            </button>

            {imageUrl && (
              <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50/80 px-4 py-3 text-center dark:border-slate-700 dark:bg-slate-900/60">
                <p className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Preview
                </p>
                <img
                  src={imageUrl}
                  alt="Barcode"
                  className="mx-auto max-h-28 object-contain"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
