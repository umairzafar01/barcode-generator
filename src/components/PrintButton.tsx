"use client";

export default function PrintButton() {
  return (
    <div className="mb-6 text-center print:hidden">
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600"
      >
        <span className="h-4 w-4 rounded-full bg-white/15 text-[10px] flex items-center justify-center">
          ⎙
        </span>
        Print stickers
      </button>
    </div>
  );
}
