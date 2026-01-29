"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";

type Role = "USER" | "ADMIN";

type UserRow = {
  id: string;
  name: string | null;
  email: string;
  role: Role;
  createdAt: string;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      setError("");
      setLoading(true);
      try {
        const res = await fetch("/api/admin/users");
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setError(data.error || "Failed to load users");
          setUsers([]);
          return;
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load users");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function changeRole(id: string, role: Role) {
    setSavingId(id);
    setError("");
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: id, role }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Failed to update role");
        return;
      }
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, role: data.role } : u))
      );
    } catch (err) {
      console.error(err);
      setError("Failed to update role");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <Container>
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Users
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Manage user roles. Only admins can access this page.
          </p>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
          {error}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full text-left text-sm rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <thead className="bg-slate-50/80 text-xs text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
            <tr>
              <th className="p-3 font-medium">Email</th>
              <th className="p-3 font-medium">Name</th>
              <th className="p-3 font-medium">Role</th>
              <th className="p-3 font-medium">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {loading && (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-sm text-slate-500 dark:text-slate-400"
                >
                  Loading users...
                </td>
              </tr>
            )}

            {!loading && users.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-sm text-slate-500 dark:text-slate-400"
                >
                  No users found.
                </td>
              </tr>
            )}

            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white hover:bg-slate-50/80 dark:bg-slate-900 dark:hover:bg-slate-800/80"
              >
                <td className="p-3 text-sm font-medium text-slate-800 dark:text-slate-100">
                  {user.email}
                </td>
                <td className="p-3 text-sm text-slate-700 dark:text-slate-200">
                  {user.name || "—"}
                </td>
                <td className="p-3 text-sm">
                  <select
                    className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-brand-400 dark:focus:ring-brand-400"
                    value={user.role}
                    disabled={savingId === user.id}
                    onChange={(e) =>
                      changeRole(
                        user.id,
                        e.target.value === "ADMIN" ? "ADMIN" : "USER"
                      )
                    }
                  >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </td>
                <td className="p-3 text-xs text-slate-500 dark:text-slate-400">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

