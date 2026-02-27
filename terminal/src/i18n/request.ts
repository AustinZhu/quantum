import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const locales = ["en", "zh"] as const;
type Locale = (typeof locales)[number];

async function detectLocale(): Promise<Locale> {
  // 1. Explicit user preference cookie
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  // 2. Browser Accept-Language header
  const headerStore = await headers();
  const acceptLang = headerStore.get("accept-language") ?? "";
  if (/\bzh\b/i.test(acceptLang)) return "zh";

  return "en";
}

export default getRequestConfig(async () => {
  const locale = await detectLocale();
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
