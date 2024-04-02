import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
import prisma from "./prisma/connect";
import jwt from "jsonwebtoken";
export const middleware = async (req) => {
  try {
    // console.log("middlewares ", req.nextUrl.pathname, req.url);
    // const result = await prisma.

    const token = req.cookies.get("token") || "invalid";

    const res = await fetch(
      `${process.env.BASE_URL}/api/auth/login?token=${token?.value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const jwtObject = await res.json();
    // console.log("🚀 ~ middleware ~ jwtObject:", jwtObject.data);
    if (req.nextUrl.pathname.startsWith("/admin")) {
      if (token == "invalid") {
        // NextResponse.redirect("/login");

        return NextResponse.redirect(new URL("/login", req.url));
      }
      
      if (
        !jwtObject ||
        jwtObject.status != 200 ||
        jwtObject.data?.role != "ADMIN"
      ) {
        // console.log(jwtObject, "here we havev jwt object!");
        // return null;
        
        
        return NextResponse.json({
          status: 400,
          message:
            "access denied, Please login first with admin credentials then come back",
        });
      }
    } else if(req.nextUrl.pathname.startsWith("/partner")) {
      if (token == "invalid") {
        // NextResponse.redirect("/login");

        return NextResponse.redirect(new URL("/login", req.url));
      }
      if(!jwtObject || jwtObject.status != 200 || jwtObject.data?.role == "CLIENT") {
        return NextResponse.json({message: "access denied"});
      }
    } else if(req.nextUrl.pathname.startsWith("/client")) {
      if(token == "invalid") {
        return NextResponse.redirect(new URL("/login", req.url));
      }
      
    }
  } catch (err) {
    console.log("error in middle ware", err);
    return NextResponse.json({
      message:
        "Something went wrong, please reach out to us.",
    });
  }
};
// export const config = {
//     matcher: ["/"]
// }
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
