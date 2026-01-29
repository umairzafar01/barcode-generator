"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

type CurrentUser = {
  id: string;
  email: string;
  role: "USER" | "ADMIN";
};

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [checkingUser, setCheckingUser] = useState(true);

  // ❌ Hide navbar on print pages
  if (pathname.startsWith("/print")) {
    return null;
  }

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-full text-sm font-medium transition ${
      pathname === path
        ? "bg-brand-600 text-white shadow-sm"
        : "text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
    }`;

  useEffect(() => {
    let cancelled = false;
    async function loadUser() {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          if (!cancelled) {
            setUser(null);
          }
          return;
        }
        const data = await res.json();
        if (!cancelled) {
          setUser(data);
        }
      } catch {
        if (!cancelled) {
          setUser(null);
        }
      } finally {
        if (!cancelled) {
          setCheckingUser(false);
        }
      }
    }
    loadUser();
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/login");
  }

  return (
    <nav className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur shadow-sm dark:bg-slate-950/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-3 py-2 sm:px-4 sm:py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-sky-400 flex items-center justify-center text-xs font-black text-white shadow-soft">
            BX
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Barcode Studio
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Generate & print product labels
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          {user && (
            <>
              <Link href="/" className={linkClass("/")}>
                Home
              </Link>
              <Link href="/history" className={linkClass("/history")}>
                History
              </Link>
              {user.role === "ADMIN" && (
                <Link href="/admin/users" className={linkClass("/admin/users")}>
                  Admin
                </Link>
              )}
            </>
          )}

          {!user && !checkingUser && (
            <>
              <Link href="/login" className={linkClass("/login")}>
                Login
              </Link>
              <Link href="/register" className={linkClass("/register")}>
                Register
              </Link>
            </>
          )}

          {user && (
            <div className="ml-2 flex items-center gap-2">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                  {user.email}
                </span>
                <span className="text-[11px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  {user.role === "ADMIN" ? "Admin" : "User"}
                </span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Logout
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-3 inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle color theme"
          >
            <span className="mr-1.5">
              {theme === "dark" ? "Light" : "Dark"} mode
            </span>
            <span className="relative inline-flex h-4 w-4 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-yellow-400/80 shadow-sm transition-opacity dark:opacity-0" />
              <span className="absolute inset-0 rounded-full border border-slate-500/70 transition-opacity opacity-0 dark:opacity-100" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
