import Link from "next/link";
import { experiences } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { ArrowDisc } from "@/components/ui/ArrowDisc";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { yearOf } from "@/lib/dates";
import { routes } from "@/lib/routes";

/**
 * Linhas tipográficas, não currículo. O título em cima, centralizado; as
 * linhas na largura toda. Cada linha lê da esquerda para a direita, numa
 * altura só: o símbolo da empresa, o nome e o papel, o período com a frase,
 * a seta. A linha inteira é o link — no hover o nome avança, a
 * seta se preenche e as outras linhas recuam. Os filetes se desenham ao
 * entrar.
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
      className="gutter-x bg-paper pt-[4vh] pb-[14vh]"
    >
      <div>
        <RevealLines
          as="h2"
          id="experience-heading"
          lines={[dict.experience.title]}
          className="display mb-[5vh] text-[clamp(1.6rem,2.6vw,2.4rem)] md:text-center"
        />
        <ul className="row-list">
          {experiences.map((item, i) => {
            const copy = dict.experiences[item.key];
            return (
              <li key={item.key}>
                <Reveal variant="draw" delay={i * 90} className="h-px w-full bg-rule" />
                <Reveal delay={i * 90 + 60}>
                  <Link
                    href={routes.experience(locale, item.key)}
                    className="row-link group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-5 gap-y-5 py-7 md:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-10 md:py-9"
                  >
                    <span className="flex w-[clamp(2.25rem,3.4vw,3.25rem)] justify-center">
                      {item.symbol ? (
                        <Logo
                          logo={item.symbol}
                          className="[--logo-h:clamp(2.25rem,3.4vw,3.25rem)]"
                        />
                      ) : null}
                    </span>
                    <div className="min-w-0">
                      <h3 className="display text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[0.9] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-x-2">
                        {item.company}
                      </h3>
                      <p className="label mt-3 text-ash">{copy.role}</p>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                      <p className="meta text-ash">
                        {yearOf(item.from)} — {item.to ? yearOf(item.to) : dict.experience.now}
                      </p>
                      <p className="mt-2 max-w-[36ch] text-[0.9375rem] leading-snug">
                        {copy.summary}
                      </p>
                    </div>
                    {/* No celular a seta fica na linha do nome. */}
                    <ArrowDisc className="col-start-3 row-start-1 md:col-start-auto md:row-start-auto" />
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
