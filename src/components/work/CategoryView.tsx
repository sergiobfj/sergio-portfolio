import {
  casesIn,
  workCategories,
  type WorkCategory,
} from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Band } from "@/components/case/Band";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { NextLink } from "@/components/ui/NextLink";
import { Reveal } from "@/components/ui/Reveal";
import { CaseGrid } from "@/components/work/CaseGrid";
import { countLabel } from "@/lib/work";
import { routes } from "@/lib/routes";

/**
 * Uma categoria: o que ela reúne, em grid editorial. Os cases vêm do dado —
 * com ou sem repositório, com ou sem imagem. Vazia, a página diz o que vai
 * morar ali e segue para a próxima categoria.
 */
export function CategoryView({
  category,
  dict,
  locale,
}: {
  category: WorkCategory;
  dict: Dictionary;
  locale: Locale;
}) {
  const copy = dict.categories[category.key];
  const items = casesIn(category.key);
  const index = workCategories.indexOf(category);
  const next = workCategories[(index + 1) % workCategories.length];

  return (
    <>
      <main id="content">
        <PageHero
          label={dict.work.title}
          title={copy.title}
          voice={
            <p className="voice max-w-[24ch] text-[clamp(1.6rem,2.6vw,2.6rem)] leading-[1.04]">
              {copy.description}
            </p>
          }
          aside={
            <>
              <p className="label text-ash">{countLabel(items.length, dict)}</p>
              <BackLink href={routes.home(locale, "work")} label={dict.work.back} />
            </>
          }
        />

        <Band tone="paper" after="stone" label={copy.title.join(" ")}>
          {items.length > 0 ? (
            <CaseGrid items={items} dict={dict} locale={locale} context="company" />
          ) : (
            <Reveal>
              <p className="voice max-w-[20ch] text-voice text-ash">
                {dict.work.empty}
              </p>
            </Reveal>
          )}

          <NextLink
            href={routes.category(locale, next.key)}
            label={dict.work.next}
            title={dict.categories[next.key].title}
            className="mt-[16vh]"
          />
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}
