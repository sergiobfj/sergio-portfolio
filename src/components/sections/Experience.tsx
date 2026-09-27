import Link from "next/link";
import { experiences } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { ArrowDisc } from "@/components/ui/ArrowDisc";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { yearOf } from "@/lib/dates";
import { routes } from "@/lib/routes";

/**
 * Linhas tipográficas, não currículo: empresa, período, papel e uma frase.
 * A linha inteira é o link — no hover o nome avança, a seta se preenche e
 * as outras linhas recuam. Os filetes se desenham ao entrar.
 */
export function Experience({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="gutter-x bg-paper pt-[4vh] pb-[18vh]"
    >
      <div className="grid grid-cols-12 gap-x-6">
        <RevealLines
          as="h2"
          id="experience-heading"
          lines={[dict.experience.title]}
          className="display col-span-12 mb-[6vh] text-[clamp(1.6rem,2.6vw,2.4rem)] lg:col-span-4 lg:mb-0 lg:pt-[3.1rem]"
        />

        <ul className="row-list col-span-12 lg:col-span-8">
          {experiences.map((item, i) => {
            const copy = dict.experiences[item.key];

            return (
              <li key={item.key}>
                <Reveal variant="draw" delay={i * 90} className="h-px w-full bg-rule" />
                <Reveal delay={i * 90 + 60}>
                  <Link
                    href={routes.experience(locale, item.key)}
                    className="row-link group grid grid-cols-[1fr_auto] items-baseline gap-x-6 py-8 md:py-10"
                  >
                    <h3 className="display text-[clamp(2.4rem,5.4vw,5rem)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-x-2">
                      {item.company}
                    </h3>
                    <span className="meta text-ash">
                      {yearOf(item.from)} — {item.to ? yearOf(item.to) : dict.experience.now}
                    </span>
                    <p className="label col-span-2 mt-4 text-ash">{copy.role}</p>
                    <p className="mt-4 max-w-[44ch] self-end text-[0.9375rem] leading-snug">
                      {copy.summary}
                    </p>
                    <ArrowDisc className="self-end justify-self-end" />
                  </Link>
                </Reveal>
              </li>
            );
          })}
          <Reveal variant="draw" className="h-px w-full bg-rule" />
        </ul>
      </div>
    </section>
  );
}
