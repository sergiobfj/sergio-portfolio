import { htmlLang, type Locale } from "@/i18n/config";

/** "2025-03" → 1º de março de 2025 em UTC (fuso nunca muda o mês). */
function toDate(value: string) {
  return new Date(`${value.length === 4 ? `${value}-01` : value}-01T00:00:00Z`);
}

export function yearOf(value: string) {
  return value.slice(0, 4);
}

/** "Março de 2025", "March 2025", "Marzo de 2025". */
export function monthYear(value: string, locale: Locale) {
  const text = new Intl.DateTimeFormat(htmlLang[locale], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(toDate(value));
  return text.charAt(0).toLocaleUpperCase(htmlLang[locale]) + text.slice(1);
}

/** "setembro de 2026", "September 2026": para o meio de uma frase ("Desde …"). */
export function monthYearInline(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(htmlLang[locale], {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(toDate(value));
}

/** "Mar 2025": o mês curto, sem ponto e sem "de", para rótulos em caixa alta. */
export function monthYearShort(value: string, locale: Locale) {
  const month = new Intl.DateTimeFormat(htmlLang[locale], {
    month: "short",
    timeZone: "UTC",
  })
    .format(toDate(value))
    .replace(".", "");
  return `${month} ${yearOf(value)}`;
}

/**
 * Um intervalo nas palavras do idioma, sem traço: "Desde 2025" quando ainda
 * está em andamento, "2022 a 2024" quando terminou. `format` escreve cada
 * ponta (o ano, por padrão).
 */
export function period(
  from: string,
  to: string | null,
  words: { since: string; to: string },
  format: (value: string) => string = yearOf,
) {
  const text = to ? `${format(from)} ${words.to} ${format(to)}` : `${words.since} ${format(from)}`;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** "Igor, Gabriel, Luan e Juan" — a conjunção certa em cada idioma. */
export function listOf(items: readonly string[], locale: Locale) {
  return new Intl.ListFormat(htmlLang[locale], {
    style: "long",
    type: "conjunction",
  }).format(items);
}
