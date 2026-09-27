import { nextCaseIn, type WorkCase } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { NextLink } from "@/components/ui/NextLink";
import { caseTitle } from "@/lib/work";
import { routes } from "@/lib/routes";

/** Fecho de todo case: o próximo da categoria, ou a própria categoria. */
export function CaseNext({
  item,
  dict,
  locale,
  className,
}: {
  item: WorkCase;
  dict: Dictionary;
  locale: Locale;
  className?: string;
}) {
  const next = nextCaseIn(item);

  return next ? (
    <NextLink
      href={routes.case(locale, next)}
      label={dict.caseStudy.next}
      title={[caseTitle(next, dict)]}
      className={className}
    />
  ) : (
    <NextLink
      href={routes.category(locale, item.category)}
      label={dict.caseStudy.back}
      title={dict.categories[item.category].title}
      className={className}
    />
  );
}
