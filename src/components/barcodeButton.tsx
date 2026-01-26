"use client";

export default function BarcodeButton() {
  const generate = async () => {
    const res = await fetch("/api/barcode", { method: "POST" });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <button
      onClick={generate}
      className="px-6 py-3 bg-black text-white rounded-lg"
    >
      Generate Barcode
    </button>
  );
}
