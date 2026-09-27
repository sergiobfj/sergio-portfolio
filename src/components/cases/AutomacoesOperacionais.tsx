import { pad } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { CaseLinks, CaseTags } from "@/components/case/CaseMeta";
import { CaseNext } from "@/components/case/CaseNext";
import { PageHero } from "@/components/layout/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BackLink } from "@/components/ui/BackLink";
import { Reveal } from "@/components/ui/Reveal";
import { caseTitle, titleLines } from "@/lib/work";
import { routes } from "@/lib/routes";
import type { StoryProps } from "./index";

/**
 * Agrupador, não case: a hero é curta e o corpo são blocos pequenos — um por
 * tipo de automação. Nenhum script vira projeto inventado; quando um deles
 * crescer, ganha case próprio.
 */
export function AutomacoesOperacionais({ item, dict, locale }: StoryProps) {
  const story = dict.stories["automacoes-operacionais"];
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
            <p className="voice max-w-[28ch] text-voice text-pretty">{story.lead}</p>
          </Reveal>

          <p className="label mt-[10vh] text-ash">{story.blocksLabel}</p>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {story.blocks.map((block, i) => (
              <li key={block}>
                <Reveal variant="draw" delay={i * 70} className="h-px w-full bg-rule" />
                <Reveal delay={i * 70 + 50} className="pt-5 pb-10">
                  <span className="meta text-ash">{pad(i + 1)}</span>
                  <p className="display mt-4 text-[clamp(1.75rem,2.8vw,2.75rem)] leading-[0.96]">
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
