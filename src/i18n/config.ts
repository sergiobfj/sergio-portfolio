export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** Valor do atributo lang do documento por idioma. */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

/** Locale OpenGraph por idioma. */
export const ogLocale: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export const localeCookie = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** canonical + hreflang de um caminho, igual em todas as rotas. */
export function alternates(locale: Locale, path = "") {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      "pt-BR": `/pt${path}`,
      en: `/en${path}`,
      es: `/es${path}`,
      "x-default": `/pt${path}`,
    },
  };
}
