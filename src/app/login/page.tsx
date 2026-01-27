"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Failed to login");
      setLoading(false);
      return;
    }

    router.push(callbackUrl);
  }

  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-100 dark:bg-slate-900/90 dark:ring-slate-800">
        <h1 className="mb-1 text-xl font-semibold tracking-tight">
          Sign in
        </h1>
        <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
          Access your barcode workspace.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-brand-400 dark:focus:bg-slate-900 dark:focus:ring-brand-800/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-200 dark:border-slate-700 dark:bg-slate-950 dark:focus:border-brand-400 dark:focus:bg-slate-900 dark:focus:ring-brand-800/60"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-xs font-medium text-red-500">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-brand-500 dark:hover:bg-brand-600"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-brand-600 hover:underline dark:text-brand-400"
          >
            Create one
          </a>
        </p>
      </div>
    </main>
  );
}

