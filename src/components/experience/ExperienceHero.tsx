import { experiences, type ExperienceEntry } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { PageHero } from "@/components/layout/PageHero";
import { BackLink } from "@/components/ui/BackLink";
import { NextLink } from "@/components/ui/NextLink";
import { monthYear } from "@/lib/dates";
import { routes } from "@/lib/routes";

export type ExperienceStoryProps = {
  entry: ExperienceEntry;
  dict: Dictionary;
  locale: Locale;
};

/**
 * Topo de toda página de experiência: a empresa em display, o período com o
 * mês por extenso, a frase e o papel. A razão social, quando existe, vai
 * sob o rótulo.
 */
export function ExperienceHero({ entry, dict, locale }: ExperienceStoryProps) {
  const copy = dict.experiences[entry.key];
  const until = entry.to ? monthYear(entry.to, locale) : dict.experience.now;

  return (
    <PageHero
      label={
        <ul className="leading-[1.6]">
          <li>{dict.experience.title}</li>
          {entry.legalName ? <li className="text-ink">{entry.legalName}</li> : null}
        </ul>
      }
      meta={`${monthYear(entry.from, locale)} — ${until}`}
      title={[entry.company]}
      voice={
        <p className="voice text-[clamp(1.75rem,3vw,3rem)] leading-[1.02]">
          {copy.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      }
      aside={
        <>
          <p className="label text-ash">{copy.pageRole ?? copy.role}</p>
          <BackLink href={routes.home(locale, "experience")} label={dict.experience.back} />
        </>
      }
    />
  );
}

/** Fecho: a próxima experiência, em display. */
export function ExperienceNext({
  entry,
  dict,
  locale,
  className,
}: ExperienceStoryProps & { className?: string }) {
  const next = experiences[(experiences.indexOf(entry) + 1) % experiences.length];

  return (
    <NextLink
      href={routes.experience(locale, next.key)}
      label={dict.experience.next}
      title={[next.company]}
      className={className}
    />
  );
}
