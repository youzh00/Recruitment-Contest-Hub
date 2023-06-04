import axios from "axios";
import { NextResponse } from "next/server";
import verifyAuth from "./utils/verifyAuth";
const { getCookies } = require("cookies-next");

export async function middleware(request) {
  const cookies = getCookies({ req: request });
  const refreshToken = cookies.get("refreshToken");
  const accessToken = cookies.get("accessToken");
  console.log("refreshToken", refreshToken);
  console.log("accessToken", accessToken);
  let verifiedAccessToken =
    accessToken?.value &&
    (await verifyAuth(accessToken?.value).catch((err) =>
      console.error(err.message)
    ));

  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register") ||
    request.nextUrl.pathname === "/"
  ) {
    return;
  }

  console.log("verifiedAccessToken", verifiedAccessToken);
  if (!verifiedAccessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    verifiedAccessToken.user.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico).*)",
    "/login",
    "/register",
    "/home",
    "/concours/:id*",
    "/concours",
    "/admin",
  ],
};
