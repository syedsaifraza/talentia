import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of routes that require user to be unauthenticated
const publicRoutes = ["/signin", "/signup", "/forgot-password"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const currentPath = request.nextUrl.pathname;

  let isAuthenticated = false;

  if (token) {
    try {
      const res = await fetch("https://talentia.org.in/auth/me", {
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
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // 🛑 If not authenticated and tries to access protected route → redirect to login
  const protectedRoutes = ["/home", "/watch", "/job", "/achievements", "/account/profile"];
  if (!isAuthenticated && protectedRoutes.some((path) => currentPath.startsWith(path))) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home",
    "/watch",
    "/job",
    "/achievements",
    "/account/profile",
    "/login",
    "/signin",
    "/signup",
    "/register",
    "/forgot-password",
  ],
};