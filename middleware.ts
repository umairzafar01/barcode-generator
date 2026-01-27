import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAuthToken } from "./src/lib/auth";

const PUBLIC_PATHS = ["/login", "/register", "/api/auth"];

function isPublic(pathname: string) {
  return PUBLIC_PATHS.some((p) =>
    p.endsWith("/api/auth")
      ? pathname.startsWith("/api/auth")
      : pathname === p || pathname.startsWith(`${p}/`)
  );
}

const PROTECTED_PREFIXES = [
  "/",
  "/history",
  "/products",
  "/print",
  "/admin",
  "/api/barcode",
  "/api/products",
  "/api/clear-history",
  "/api/product-by-barcode",
  "/api/print",
  "/api/barcode-image",
  "/api/admin",
];

function isProtected(pathname: string) {
  return PROTECTED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  const token = req.cookies.get("barcode_auth")?.value;

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  const payload = await verifyAuthToken(token);

  if (!payload) {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.delete("barcode_auth");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

