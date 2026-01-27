import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";

const AUTH_COOKIE = "barcode_auth";
const JWT_EXPIRES_IN_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not set");
  }
  return new TextEncoder().encode(secret);
}

export type AuthTokenPayload = JWTPayload & {
  sub: string;
  email: string;
  role: "USER" | "ADMIN";
};

export async function signAuthToken(payload: AuthTokenPayload) {
  const now = Math.floor(Date.now() / 1000);
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(now)
    .setExpirationTime(now + JWT_EXPIRES_IN_SECONDS)
    .sign(getSecretKey());
}

export async function verifyAuthToken(
  token: string
): Promise<AuthTokenPayload | null> {
  try {
    const { payload } = await jwtVerify<AuthTokenPayload>(
      token,
      getSecretKey()
    );
    return payload;
  } catch {
    return null;
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: JWT_EXPIRES_IN_SECONDS,
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
}

export async function getUserFromCookies() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;
  if (!token) return null;
  return verifyAuthToken(token);
}

