import { aboutPortrait } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { SectionCurve } from "@/components/ui/SectionCurve";

/**
 * Uma frase e uma foto, lado a lado: a frase em display com a linha de
 * apoio embaixo; à direita, o retrato — uma foto real, em pé, com a
 * legenda de onde foi. No celular a foto entra entre a frase e a linha de
 * apoio. Sem skills, sem stack, sem linha do tempo: o trabalho acima já
 * disse o resto. A base preta da SECCO desce sobre esta seção.
 */
export function About({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-stone pt-(--band-top) pb-(--band-bottom)"
    >
      <SectionCurve tone="void" />

      <div className="gutter-x grid grid-cols-12 gap-x-6 gap-y-10 lg:gap-y-14">
        <div className="col-span-12 lg:col-span-8 lg:row-start-1">
          <Reveal className="label mb-8 text-ash">{dict.about.label}</Reveal>
          <RevealLines
            as="h2"
            id="about-heading"
            lines={dict.about.headline}
            className="display text-[clamp(3rem,7.4vw,8.5rem)] leading-[0.92]"
          />
        </div>

        <figure className="col-span-9 sm:col-span-6 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:self-end">
          <Reveal variant="clip">
            <MediaFrame
              media={aboutPortrait}
              alt={dict.about.portraitAlt}
              sizes="(max-width: 1024px) 70vw, 30vw"
            />
          </Reveal>
          <figcaption className="meta mt-4 text-ash">{dict.about.portraitCaption}</figcaption>
        </figure>

        <Reveal
          delay={160}
          className="col-span-12 sm:col-span-10 lg:col-span-6 lg:row-start-2 lg:self-end lg:pb-8"
        >
          <p className="voice max-w-[24ch] text-[clamp(1.6rem,2.4vw,2.35rem)] leading-[1.08]">
            {dict.about.statement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
