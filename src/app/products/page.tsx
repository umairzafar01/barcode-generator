"use client";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  barcode: string;
  price: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`/api/products?query=${query}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [query]);

  return (
    <div style={{ padding: 24 }}>
      <h1>📦 Products</h1>

      <input
        type="text"
        placeholder="Search by name or barcode"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: 8,
          width: 300,
          marginBottom: 20,
          display: "block",
        }}
      />

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Barcode (EAN‑13)</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.barcode}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
