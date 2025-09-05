import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const access = request.cookies.get("access")
    const pathname = request.nextUrl.pathname;

    if (!access) {
        return NextResponse.redirect(new URL(`/login?back_url=${pathname}`, request.url))
    }
}

export const config = {
    matcher: ["/profile/:path*"],
}
