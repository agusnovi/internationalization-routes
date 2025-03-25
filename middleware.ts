import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    

    return NextResponse.next()
}