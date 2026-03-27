import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL("/", request.url));

    if(request.nextUrl.pathname === "/hello") {
        return NextResponse.redirect(new URL("/profile", request.nextUrl));
    }
}

// export const config = {
//     matcher: "/hello",
// };

