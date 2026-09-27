import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, localeCookie, locales } from "@/i18n/config";

/**
 * A raiz redireciona para o idioma certo: preferência salva primeiro,
 * Accept-Language depois, português como padrão. Nenhuma outra rota é tocada
 * — as páginas de idioma são estáticas e passam direto.
 */
export function middleware(request: NextRequest) {
  const saved = request.cookies.get(localeCookie)?.value;
  if (saved && isLocale(saved)) {
    return NextResponse.redirect(new URL(`/${saved}`, request.url));
  }

  const header = request.headers.get("accept-language") ?? "";
  const preferred = header
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find((code) => (locales as readonly string[]).includes(code));

  return NextResponse.redirect(
    new URL(`/${preferred ?? defaultLocale}`, request.url),
  );
}

export const config = {
  matcher: "/",
};
