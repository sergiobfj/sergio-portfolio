import type { Locale } from "./config";
import pt, { type Dictionary } from "./pt";
import en from "./en";
import es from "./es";

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

/**
 * Dicionários são módulos estáticos — a troca de idioma é uma navegação
 * entre rotas já pré-renderizadas, sem fetch e sem biblioteca.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
