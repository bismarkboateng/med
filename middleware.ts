import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from "next/headers"

export function middleware(request: NextRequest) {
  const cookie = cookies()
  const isLoggedIn = cookie.get("userId")
  const url = request.nextUrl.clone()
  const { pathname } = url


  const protectedRoutes = [
    "/consultant",
    "/consultant/book"
  ]

  const authRoutes = [
    "/consultant/login",
    "/"
  ]


  if (isLoggedIn) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/consultant", request.url))
    }
  } else {
    if (protectedRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/consultant/login", request.url))
    }
  }

  return NextResponse.next()

}

export const config = {
  matcher: [
    "/",
    "/consultant",
    "/consultant/login",
    "/consultant/book",
    "/patient"
  ]
}