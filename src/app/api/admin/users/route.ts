import { NextResponse } from "next/server";
import { prismaCore } from "@/lib/prismaCore";
import { getUserFromCookies } from "@/lib/auth";

export async function GET() {
  const current = await getUserFromCookies();
  if (!current) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }
  if (current.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const users = await prismaCore.user.findMany({
    orderBy: { createdAt: "asc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return NextResponse.json(users);
}

export async function PATCH(req: Request) {
  const current = await getUserFromCookies();
  if (!current) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }
  if (current.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { userId, role } = await req.json();

  if (!userId || (role !== "USER" && role !== "ADMIN")) {
    return NextResponse.json(
      { error: "userId and valid role are required" },
      { status: 400 }
    );
  }

  // Optional: prevent admin from demoting themselves entirely
  if (userId === current.sub && role !== "ADMIN") {
    return NextResponse.json(
      { error: "You cannot change your own role" },
      { status: 400 }
    );
  }

  const updated = await prismaCore.user.update({
    where: { id: userId },
    data: { role },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return NextResponse.json(updated);
}

