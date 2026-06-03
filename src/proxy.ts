import { NextResponse, NextRequest } from "next/server";
// import { authenticate } from 'auth-provider'

export function proxy(request: NextRequest) {
  const isAuthenticated = false;

  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.redirect(new URL("/product", request.url));
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/dashboard/:path*",
};
