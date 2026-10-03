import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { Figure } from "@/components/case/Figure";
import { StackSheet } from "@/components/case/StackSheet";
import { Chapter, ChapterTitle } from "@/components/layout/Chapter";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { imageOf } from "@/lib/media";
import { routes } from "@/lib/routes";
import { caseTitle, titleLines } from "@/lib/work";
import type { StoryProps } from "./index";

/** Uma coluna da "conta": o que entra ou o que sai, em display. */
function Column({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <p className="label text-fog">{label}</p>
      <ul className="mt-5">
        {items.map((entry) => (
          <li
            key={entry}
            className="flex items-baseline gap-5 border-t border-rule-dark py-4"
          >
            <span className="display text-[clamp(1.6rem,2.6vw,2.6rem)]">{entry}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Arena da Sustentabilidade — case visual, mais curto. O contexto do evento
 * ao lado do que o visitante encontra, a calculadora de CO₂ como uma conta
 * (o que entra, o que sai) ao lado da tela, e a otimização que manteve o
 * site leve. Cada print mora na seção dele; a versão mobile entra nos
 * destaques quando o print existir.
 */
export function Arena({ item, dict, locale }: StoryProps) {
  const story = dict.stories["arena-sustentabilidade"];
  const copy = dict.cases[item.slug];
  const title = caseTitle(item, dict);
  const experiences = imageOf(item.images, "experiences");
  const calculator = imageOf(item.images, "calculator");
  const mobile = imageOf(item.images, "mobile");

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
            alt={title}
            tone="void"
            priority
            maxHeight="70svh"
            sizes="(max-width: 768px) 100vw, 92vw"
            className="mx-auto"
          />
        </div>

        {/* Contexto: a frase ao lado do que o visitante encontrava */}
        <Band tone="paper" after="stone" labelledBy="arena-context">
          {experiences ? (
            // Com a tela ao lado, o título é a cabeça da coluna do texto.
            <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:items-center">
              <div className="col-span-12 lg:col-span-5">
                <ChapterTitle id="arena-context" title={story.context.title} className="mb-6" />
                <Reveal delay={90}>
                  <p className="voice text-[clamp(1.75rem,2.8vw,2.9rem)] leading-[1.08] text-pretty">
                    {story.context.text}
                  </p>
                </Reveal>
              </div>
              <Figure
                media={experiences}
                caption={copy.captions?.[experiences.id]}
                tone="mist"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="col-span-12 lg:col-span-6 lg:col-start-7"
              />
            </div>
          ) : (
            <Chapter id="arena-context" title={story.context.title}>
              <Reveal>
                <p className="voice text-[clamp(1.75rem,2.8vw,2.9rem)] leading-[1.08] text-pretty md:text-center">
                  {story.context.text}
                </p>
              </Reveal>
            </Chapter>
          )}
        </Band>

        {/* A calculadora como conta: entradas → resultado, ao lado da tela */}
        <Band tone="void" after="paper" labelledBy="arena-calculator">
          <Chapter id="arena-calculator" title={story.calculator.title} wide>
            <Reveal>
              <p className="voice mx-auto max-w-[30ch] text-voice text-balance md:text-center">
                {story.calculator.lead}
              </p>
            </Reveal>

            <div className="mt-[9vh] grid grid-cols-12 gap-x-6 gap-y-14 lg:items-center">
              <Reveal
                delay={120}
                className={cn(
                  "col-span-12 flex flex-col gap-10",
                  calculator && "lg:col-span-5",
                  !calculator && "md:grid md:grid-cols-2",
                )}
              >
                <Column label={story.calculator.inputsLabel} items={story.calculator.inputs} />
                <Column label={story.calculator.outputsLabel} items={story.calculator.outputs} />
              </Reveal>
              {calculator ? (
                <Figure
                  media={calculator}
                  caption={copy.captions?.[calculator.id]}
                  tone="mist"
                  maxHeight="72svh"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="col-span-12 mx-auto w-full lg:col-span-7"
                />
              ) : null}
            </div>
          </Chapter>
        </Band>

        {/* Otimização e destaques, no mesmo eixo central */}
        <Band tone="stone" after="void" labelledBy="arena-optimization">
          <Chapter id="arena-optimization" title={story.optimization.title} wide>
            <Reveal
              delay={120}
              className="display flex flex-wrap items-baseline gap-x-[0.3em] text-[clamp(4rem,13vw,13rem)] leading-[0.9] md:justify-center"
            >
              <span className="type-outline">{story.optimization.before}</span>
              <span aria-hidden="true" className="font-sans font-normal opacity-30">
                →
              </span>
              <span>{story.optimization.after}</span>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-[34ch] text-lead leading-snug text-ash md:mx-auto md:text-center">
                {story.optimization.caption}
              </p>
            </Reveal>
          </Chapter>

          <div className="mt-[14vh]">
            <Chapter id="arena-highlights" title={story.highlights.title} wide>
              <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:items-end">
                <ul
                  className={cn(
                    "col-span-12 grid grid-cols-1 gap-x-6 sm:grid-cols-2",
                    mobile ? "lg:col-span-8" : "lg:grid-cols-4",
                  )}
                >
                  {story.highlights.items.map((entry, i) => (
                    <li key={entry}>
                      <Reveal variant="draw" delay={i * 70} className="h-px w-full bg-ink/15" />
                      <Reveal delay={i * 70 + 40} className="pt-5 pb-8">
                        <p className="display text-[clamp(1.6rem,2.3vw,2.4rem)] leading-[0.96]">
                          {entry}
                        </p>
                      </Reveal>
                    </li>
                  ))}
                </ul>
                {mobile ? (
                  <Figure
                    media={mobile}
                    caption={copy.captions?.[mobile.id]}
                    tone="mist"
                    sizes="(max-width: 1024px) 60vw, 25vw"
                    className="col-span-8 sm:col-span-5 lg:col-span-3 lg:col-start-10"
                  />
                ) : null}
              </div>
            </Chapter>
          </div>
        </Band>

        <Band tone="paper" after="stone" label={title}>
          <div className="flex flex-col gap-y-[16vh]">
            {item.technologies ? (
              <Chapter id="arena-stack" title={story.stack.title} wide>
                <StackSheet groups={item.technologies} labels={dict.caseStudy.stackGroups} />
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
