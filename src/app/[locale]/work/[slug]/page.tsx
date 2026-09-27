import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cases, workCategories } from "@/data/portfolio";
import { alternates, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { CaseView } from "@/components/work/CaseView";
import { CategoryView } from "@/components/work/CategoryView";
import { caseTitle } from "@/lib/work";

type Params = { params: Promise<{ locale: string; slug: string }> };

/**
 * /work/<slug> é uma categoria (/work/products) ou um case
 * (/work/router-planner). O tipo de `WorkCase.slug` impede que os dois
 * nomes colidam.
 */
function resolve(slug: string) {
  const category = workCategories.find((item) => item.key === slug);
  if (category) return { kind: "category", category } as const;
  const item = cases.find((entry) => entry.slug === slug);
  if (item) return { kind: "case", item } as const;
  return null;
}

export function generateStaticParams() {
  const slugs = [
    ...workCategories.map((category) => category.key),
    ...cases.map((item) => item.slug),
  ];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const found = resolve(slug);
  if (!found) return {};
  const dict = getDictionary(locale);

  if (found.kind === "category") {
    const copy = dict.categories[found.category.key];
    return {
      title: copy.title.join(" "),
      description: copy.description,
      alternates: alternates(locale, `/work/${slug}`),
    };
  }

  return {
    title: caseTitle(found.item, dict),
    description: dict.cases[found.item.slug].summary ?? dict.meta.description,
    alternates: alternates(locale, `/work/${slug}`),
  };
}

export default async function WorkPage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const found = resolve(slug);
  if (!found) notFound();

  const dict = getDictionary(locale);

  return found.kind === "category" ? (
    <CategoryView category={found.category} dict={dict} locale={locale} />
  ) : (
    <CaseView item={found.item} dict={dict} locale={locale} />
  );
}
