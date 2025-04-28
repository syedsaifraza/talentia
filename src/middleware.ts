import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of routes that require user to be unauthenticated
const publicRoutes = ["/login", "/register", "/forgot-password"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const currentPath = request.nextUrl.pathname;

  let isAuthenticated = false;

  if (token) {
    try {
      const res = await fetch("http://69.62.76.168:8000/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      isAuthenticated = res.ok;
    } catch (err) {
      isAuthenticated = false;
    }
  }

  // 🛑 If authenticated user tries to access login/register/forgot → redirect to feed/home
  if (isAuthenticated && publicRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/feed", request.url));
  }

  // 🛑 If not authenticated and tries to access protected route → redirect to login
  const protectedRoutes = ["/feed", "/watch", "/job", "/achievements", "/account/profile"];
  if (!isAuthenticated && protectedRoutes.some((path) => currentPath.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/feed",
    "/watch",
    "/job",
    "/achievements",
    "/account/profile",
    "/login",
    "/register",
    "/forgot-password",
  ],
};