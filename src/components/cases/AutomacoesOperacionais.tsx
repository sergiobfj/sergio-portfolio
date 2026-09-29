import { automationsFeatured, pad } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { caseTitle, titleLines } from "@/lib/work";
import { routes } from "@/lib/routes";
import type { StoryProps } from "./index";

/**
 * Agrupador, não case: a hero é curta e o corpo são blocos pequenos — um por
 * tipo de automação. Um exemplo real e publicado (os painéis das TVs
 * internas) mostra o tipo de trabalho; nenhum script vira projeto inventado,
 * e quando um deles crescer, ganha case próprio.
 */
export function AutomacoesOperacionais({ item, dict, locale }: StoryProps) {
  const story = dict.stories["automacoes-operacionais"];
  const featured = story.featured;
  const title = caseTitle(item, dict);

  return (
    <>
      <main id="content">
        <PageHero
          compact
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

        <Band tone="paper" after="stone" label={title}>
          <Reveal>
            <p className="voice mx-auto max-w-[28ch] text-voice text-balance md:text-center">
              {story.lead}
            </p>
          </Reveal>

          {/* O exemplo publicado: antes, como e resultado, com o post e o código */}
          <section
            aria-labelledby="automations-featured"
            className="mt-[10vh] grid grid-cols-12 gap-x-6 gap-y-10"
          >
            <Reveal className="col-span-12 lg:col-span-4">
              <p className="label text-ash">{featured.label}</p>
              <h2
                id="automations-featured"
                className="display mt-4 text-[clamp(2.1rem,3.6vw,3.5rem)] leading-[0.95]"
              >
                {featured.title}
              </h2>
              <p className="meta mt-5 text-ash">{automationsFeatured.stack.join(" · ")}</p>
              <div className="mt-8 flex flex-col gap-4">
                <ArrowLink href={automationsFeatured.linkedinPost} label={featured.post} external />
                <ArrowLink href={automationsFeatured.repository} label={featured.code} external />
              </div>
            </Reveal>
            <ol className="col-span-12 grid grid-cols-1 gap-x-6 sm:grid-cols-3 lg:col-span-8">
              {featured.steps.map((step, i) => (
                <li key={step.label}>
                  <Reveal variant="draw" delay={i * 70} className="h-px w-full bg-rule" />
                  <Reveal delay={i * 70 + 50} className="pt-5 pb-8">
                    <p className="label text-ash">{step.label}</p>
                    <p className="mt-3 text-lead leading-snug">{step.text}</p>
                  </Reveal>
                </li>
              ))}
              <li className="sm:col-span-3">
                <p className="label text-ash">{featured.note}</p>
              </li>
            </ol>
          </section>

          <p className="label mt-[12vh] text-ash md:text-center">{story.blocksLabel}</p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {story.blocks.map((block, i) => (
              <li key={block}>
                <Reveal variant="draw" delay={i * 70} className="h-px w-full bg-rule" />
                <Reveal delay={i * 70 + 50} className="pt-5 pb-10">
                  <span className="meta text-ash">{pad(i + 1)}</span>
                  <p className="display mt-4 text-[clamp(1.6rem,2.3vw,2.4rem)] leading-[0.96]">
                    {block}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>

          <CaseNext item={item} dict={dict} locale={locale} className="mt-[14vh]" />
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}
