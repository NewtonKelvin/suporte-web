import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  console.log("middleware");
  try {
    let nest_token = request.cookies.get("nest_token")?.value;
    if (!nest_token) {
      throw new Error("Unauthorized!");
    }
    const { status } = await fetch("http://localhost:3000/api/user", {
      method: "head",
      headers: { Authorization: nest_token }
    });
    if (status === 401)
      return NextResponse.redirect(new URL("/login", request?.url));
  } catch (err) {
    console.log("err", err);
    return NextResponse.redirect(new URL("/login", request?.url));
  }
};

export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*"]
};
