import { pad } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { Figure } from "@/components/case/Figure";
import { Gallery } from "@/components/case/Gallery";
import { StackSheet } from "@/components/case/StackSheet";
import { Chapter } from "@/components/layout/Chapter";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { routes } from "@/lib/routes";
import { caseTitle, titleLines } from "@/lib/work";
import type { StoryProps } from "./index";

/** A calculadora aparece no meio da história; o resto vai para a galeria. */
const INLINE = "calculator";

/** Uma coluna da "conta": o que entra ou o que sai, em display. */
function Column({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <p className="label text-fog">{label}</p>
      <ul className="mt-5">
        {items.map((entry, i) => (
          <li
            key={entry}
            className="flex items-baseline gap-5 border-t border-rule-dark py-4"
          >
            <span className="meta w-[1.35rem] shrink-0 text-fog">{pad(i + 1)}</span>
            <span className="display text-[clamp(1.6rem,2.8vw,2.75rem)]">{entry}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Arena da Sustentabilidade — case visual, mais curto. O contexto do evento,
 * a calculadora de CO₂ como uma conta (o que entra, o que sai) e a
 * otimização que manteve o site leve.
 */
export function Arena({ item, dict, locale }: StoryProps) {
  const story = dict.stories["arena-sustentabilidade"];
  const copy = dict.cases[item.slug];
  const figure = dict.caseStudy.figure;
  const title = caseTitle(item, dict);
  const images = item.images ?? [];
  const calculator = images.find((image) => image.id === INLINE);
  const gallery = images.filter((image) => image.id !== INLINE);

  return (
    <>
      <main id="content">
        <PageHero
          label={<CaseTags item={item} dict={dict} locale={locale} />}
          meta={item.year}
          title={titleLines(title)}
          voice={
            <p className="voice text-[clamp(1.6rem,2.7vw,2.75rem)] leading-[1.04]">
              {story.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          }
          aside={
            <>
              <CaseLinks item={item} dict={dict} />
              <BackLink
                href={routes.category(locale, item.category)}
                label={dict.caseStudy.back}
              />
            </>
          }
        />

        <div className="gutter-x bg-stone pb-[12vh]">
          <Figure
            media={item.media}
            number={1}
            label={figure}
            alt={title}
            tone="void"
            priority
            sizes="(max-width: 768px) 100vw, 92vw"
          />
        </div>

        <Band tone="paper" after="stone" labelledBy="arena-context">
          <Chapter id="arena-context" title={story.context.title}>
            <Reveal>
              <p className="voice text-voice text-pretty">{story.context.text}</p>
            </Reveal>
          </Chapter>
        </Band>

        {/* A calculadora como conta: entradas → resultado */}
        <Band tone="void" after="paper" labelledBy="arena-calculator">
          <RevealLines
            as="h2"
            id="arena-calculator"
            lines={[story.calculator.title]}
            className="display text-[clamp(1.6rem,2.6vw,2.4rem)]"
          />
          <Reveal delay={100}>
            <p className="voice mt-8 max-w-[26ch] text-voice text-pretty">
              {story.calculator.lead}
            </p>
          </Reveal>

          <Reveal
            delay={160}
            className="mt-[10vh] grid grid-cols-1 gap-y-10 md:grid-cols-[1fr_auto_1fr] md:gap-x-[4vw]"
          >
            <Column label={story.calculator.inputsLabel} items={story.calculator.inputs} />
            <span
              aria-hidden="true"
              className="self-center text-center text-[clamp(2rem,4vw,3.5rem)] opacity-30"
            >
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </span>
            <Column label={story.calculator.outputsLabel} items={story.calculator.outputs} />
          </Reveal>

          {calculator ? (
            <Figure
              media={calculator}
              number={2}
              label={figure}
              caption={copy.captions?.[calculator.id]}
              tone="mist"
              sizes="(max-width: 768px) 100vw, 92vw"
              className="mt-[12vh]"
            />
          ) : null}
        </Band>

        {/* Otimização: o antes vazado, o depois cheio */}
        <Band tone="stone" after="void" labelledBy="arena-optimization">
          <RevealLines
            as="h2"
            id="arena-optimization"
            lines={[story.optimization.title]}
            className="display text-[clamp(1.6rem,2.6vw,2.4rem)]"
          />
          <Reveal
            delay={120}
            className="mt-[6vh] flex flex-wrap items-baseline gap-x-[0.3em] display text-[clamp(4rem,13vw,13rem)] leading-[0.9]"
          >
            <span className="type-outline">{story.optimization.before}</span>
            <span aria-hidden="true" className="font-sans font-normal opacity-30">
              →
            </span>
            <span>{story.optimization.after}</span>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-[34ch] text-lead leading-snug text-ash">
              {story.optimization.caption}
            </p>
          </Reveal>

          <div className="mt-[12vh]">
            <Chapter id="arena-highlights" title={story.highlights.title}>
              <ul>
                {story.highlights.items.map((entry, i) => (
                  <li key={entry}>
                    <Reveal variant="draw" delay={i * 60} className="h-px w-full bg-ink/15" />
                    <Reveal
                      delay={i * 60 + 40}
                      className="flex items-baseline gap-5 py-4 md:gap-8 md:py-5"
                    >
                      <span className="meta w-[1.35rem] shrink-0 text-ash">{pad(i + 1)}</span>
                      <span className="display text-[clamp(1.5rem,2.8vw,2.75rem)]">{entry}</span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </Chapter>
          </div>
        </Band>

        <Band tone="paper" after="stone" label={title}>
          <div className="flex flex-col gap-y-[16vh]">
            {item.technologies ? (
              <Chapter id="arena-stack" title={story.stack.title}>
                <StackSheet groups={item.technologies} labels={dict.caseStudy.stackGroups} />
              </Chapter>
            ) : null}

            {gallery.length > 0 ? (
              <Chapter id="arena-gallery" title={dict.caseStudy.gallery} wide>
                <Gallery images={gallery} captions={copy.captions} label={figure} start={3} />
              </Chapter>
            ) : null}

            <CaseNext item={item} dict={dict} locale={locale} />
          </div>
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}
