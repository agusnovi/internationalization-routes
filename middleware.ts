import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./lib/cookie/app-defaults";
import { COOKIE_LANG } from "./lib/cookie/cookie-keys";

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    
    const hasLocale = hasLocaleSegment(pathname)

    const locale = getLocale(request, pathname)

    request.cookies.set(COOKIE_LANG, locale)
    
    const nextResponse = NextResponse.next({request: request})
    nextResponse.cookies.set(COOKIE_LANG, locale, {
        secure: true
    })

    if(hasLocale) return nextResponse

    return NextResponse.redirect(new URL(`/${locale}`, request.nextUrl))
}

const hasLocaleSegment = (pathname: string): boolean => LOCALES.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

const getLocale = (req: NextRequest, pathname: string) => {
    const localeCookie = req.cookies.get(COOKIE_LANG)?.value
    const localeSearch = req.nextUrl.searchParams.get(COOKIE_LANG)
    const localeSegment = pathname.split('/')?.[1].split('?')[0]

    return sanitizeLocale(localeSegment ?? localeCookie ?? localeSearch)
}

const sanitizeLocale = (locale?: string): string => {
    if(locale) {
        const localeLowerCase = locale.toLocaleLowerCase()
        if(/^(id|en)$/.test(localeLowerCase)){
            return localeLowerCase
        }
    }

    return DEFAULT_LOCALE
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}