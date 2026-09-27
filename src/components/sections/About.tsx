import Image from "next/image";
import { aboutPortrait } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { SectionCurve } from "@/components/ui/SectionCurve";
import { cn, delay } from "@/lib/cn";
import { mediaSrc } from "@/lib/media";

/**
 * Uma frase e uma foto — a foto mora DENTRO da frase, numa pílula entre as
 * duas primeiras palavras, como o retrato atravessado pelo nome na hero.
 * Sem skills, sem stack, sem linha do tempo: o trabalho acima já disse o
 * resto. A base preta da SECCO desce sobre esta seção.
 */
export function About({ dict }: { dict: Dictionary }) {
  const [first, ...rest] = dict.about.headline;
  const space = first.indexOf(" ");
  const lead = space > 0 ? first.slice(0, space) : first;
  const tail = space > 0 ? first.slice(space + 1) : "";
  const portrait = mediaSrc(aboutPortrait);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-stone pt-[calc(var(--curve)+12vh)] pb-[18vh]"
    >
      <SectionCurve tone="void" />

      <div className="gutter-x">
        <Reveal className="label mb-8 text-ash">{dict.about.label}</Reveal>

        <RevealLines
          as="h2"
          id="about-heading"
          aria-label={dict.about.headline.join(" ")}
          className="display text-[clamp(3rem,8.4vw,9.5rem)]"
        >
          <span className="mask-line">
            <span>
              {lead}
              <span
                aria-hidden="true"
                className={cn(
                  "relative mx-[0.14em] hidden h-[0.74em] w-[1.7em] overflow-hidden rounded-full bg-mist align-[-0.02em] sm:inline-block",
                  !portrait && "grain",
                )}
              >
                {portrait ? (
                  <Image
                    src={portrait}
                    alt=""
                    fill
                    sizes="18vw"
                    className="object-cover"
                    style={
                      aboutPortrait.position
                        ? { objectPosition: aboutPortrait.position }
                        : undefined
                    }
                  />
                ) : null}
              </span>
              <span className="sm:hidden"> </span>
              {tail}
            </span>
          </span>
          {rest.map((line, i) => (
            <span key={line} className="mask-line">
              <span style={delay((i + 1) * 90)}>{line}</span>
            </span>
          ))}
        </RevealLines>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-16">
          {/* No celular a pílula sai da frase e a foto vira bloco. */}
          <Reveal variant="clip" className="col-span-9 sm:hidden">
            <MediaFrame
              media={aboutPortrait}
              alt={dict.about.portraitAlt}
              sizes="75vw"
            />
          </Reveal>

          <Reveal
            delay={160}
            className="col-span-12 sm:col-span-8 sm:col-start-5 lg:col-span-5 lg:col-start-7"
          >
            <p className="voice max-w-[24ch] text-[clamp(1.6rem,2.4vw,2.35rem)] leading-[1.08]">
              {dict.about.statement}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
