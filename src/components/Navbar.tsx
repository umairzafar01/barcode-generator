"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // ❌ Hide navbar on print pages
  if (pathname.startsWith("/print")) {
    return null;
  }

  const linkClass = (path: string) =>
    `px-4 py-2 rounded ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          Barcode App
        </h1>

        <div className="flex gap-2">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/history" className={linkClass("/history")}>
            History
          </Link>
        </div>
      </div>
    </nav>
  );
}
