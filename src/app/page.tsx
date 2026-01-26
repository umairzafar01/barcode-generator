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

    const blob = await res.blob();
    setImageUrl(URL.createObjectURL(blob));
    setLoading(false);
  }

  return (
    <>
     
      {/* CENTERED PAGE */}
      <main className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl font-bold text-center mb-8">
            Product Barcode Generator
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <button
              onClick={generateBarcode}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {loading ? "Generating..." : "Generate Barcode"}
            </button>

            {imageUrl && (
              <div className="pt-6 text-center">
                <img src={imageUrl} alt="Barcode" className="mx-auto" />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
