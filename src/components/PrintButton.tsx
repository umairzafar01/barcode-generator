"use client";

export default function PrintButton() {
  return (
    <div className="text-center mb-6 print:hidden">
      <button
        onClick={() => window.print()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Print Stickers
      </button>
    </div>
  );
}
