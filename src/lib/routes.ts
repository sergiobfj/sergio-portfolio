import type {
  ExperienceKey,
  WorkCase,
  WorkCategoryKey,
} from "@/data/portfolio";
import type { Locale } from "@/i18n/config";

/** Toda URL interna nasce aqui — mudar uma rota é mudar uma linha. */
export const routes = {
  home: (locale: Locale, hash?: string) =>
    `/${locale}${hash ? `#${hash}` : ""}`,
  category: (locale: Locale, key: WorkCategoryKey) => `/${locale}/work/${key}`,
  /** Categoria e case dividem o segmento: /work/products, /work/router-planner. */
  case: (locale: Locale, item: WorkCase) => `/${locale}/work/${item.slug}`,
  experience: (locale: Locale, key: ExperienceKey) =>
    `/${locale}/experience/${key}`,
};
