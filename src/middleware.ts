import createIntlMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { geolocation } from "@vercel/edge";

export default function middleware(req: NextRequest) {
  // collect geolocation data and store it in a cookie
  const locationData = geolocation(req);
  req.cookies.set("locationData", JSON.stringify(locationData));

  // handle i18n routing
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "ar"],
    defaultLocale: "en",
  });

  return handleI18nRouting(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*"],
};
