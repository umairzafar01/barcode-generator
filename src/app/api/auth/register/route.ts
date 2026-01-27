import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prismaCore } from "@/lib/prismaCore";
import { signAuthToken, setAuthCookie } from "@/lib/auth";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "email and password are required" },
      { status: 400 }
    );
  }

  const existing = await prismaCore.user.findUnique({
    where: { email },
  });

  if (existing) {
    return NextResponse.json(
      { error: "User with this email already exists" },
      { status: 409 }
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  // First user becomes ADMIN, others are USER
  const count = await prismaCore.user.count();
  const role = count === 0 ? "ADMIN" : "USER";

  const user = await prismaCore.user.create({
    data: {
      name,
      email,
      passwordHash,
      role,
    },
  });

  const token = await signAuthToken({
    sub: user.id,
    email: user.email,
    role: user.role,
  });

  await setAuthCookie(token);

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
}

