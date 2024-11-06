import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { NextResponse } from "next/server";
import { isAuthRoute, isAPIRoute } from "./lib/routeUtils";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  //If is signin or register page and user is not logged in skip
  if (!isLoggedIn && nextUrl.pathname !== "/api/auth/signin") {
  }

  //if is not auth route and starts with "api/" check authorization

  if (isLoggedIn && isAuthRoute(nextUrl.pathname)) {
    console.log(isLoggedIn);
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isAPIRoute(nextUrl.pathname) && !isLoggedIn) {
    return NextResponse.json({
      message: "Unauthorized access",
      status: 401,
    });
  }
});
