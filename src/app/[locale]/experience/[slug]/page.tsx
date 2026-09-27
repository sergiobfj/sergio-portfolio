import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { experiences } from "@/data/portfolio";
import { alternates, isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { ExperienceView } from "@/components/experience/ExperienceView";

type Params = { params: Promise<{ locale: string; slug: string }> };

function findExperience(slug: string) {
  return experiences.find((entry) => entry.key === slug);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    experiences.map((entry) => ({ locale, slug: entry.key })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const entry = findExperience(slug);
  if (!entry) return {};

  return {
    title: entry.company,
    description: getDictionary(locale).experiences[entry.key].summary,
    alternates: alternates(locale, `/experience/${entry.key}`),
  };
}

/** Uma experiência contada, não listada — o conteúdo mora em ExperienceView. */
export default async function ExperiencePage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const entry = findExperience(slug);
  if (!entry) notFound();

  return <ExperienceView entry={entry} dict={getDictionary(locale)} locale={locale} />;
}
