import { casesAt, milestones, pad, talks, type Talk } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Band } from "@/components/case/Band";
import { Figure } from "@/components/case/Figure";
import { Gallery } from "@/components/case/Gallery";
import { Metrics } from "@/components/case/Metrics";
import {
  ExperienceHero,
  ExperienceNext,
  type ExperienceStoryProps,
} from "@/components/experience/ExperienceHero";
import { Chapter } from "@/components/layout/Chapter";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { CaseGrid } from "@/components/work/CaseGrid";
import { cn, fit } from "@/lib/cn";
import { listOf } from "@/lib/dates";
import { mediaSrc } from "@/lib/media";
import { growStyle, pairSpans } from "@/lib/spreads";

/**
 * Uma talk ou oficina. A que ainda não aconteceu (`upcoming`) não finge foto:
 * a prancha só aparece quando o arquivo existir, e o texto não vai para o
 * passado.
 */
function TalkItem({
  talk,
  number,
  dict,
  locale,
  className,
  style,
}: {
  talk: Talk;
  number: number;
  dict: Dictionary;
  locale: Locale;
  className?: string;
  style?: React.CSSProperties;
}) {
  const copy = dict.experienceStories.secco.talks;
  const text = copy.items[talk.key];
  const upcoming = talk.status === "upcoming";
  const showFigure = !upcoming || Boolean(mediaSrc(talk.media));

  return (
    <article className={className} style={style}>
      {showFigure ? (
        <Figure
          media={talk.media}
          number={number}
          label={dict.caseStudy.figure}
          alt={`${text.title} — ${talk.event}`}
          tone={number % 2 === 0 ? "void" : "mist"}
          sizes="(max-width: 768px) 100vw, 54vw"
        />
      ) : null}
      <Reveal delay={90} className={showFigure ? "mt-6" : undefined}>
        <p className="label text-ash">
          {copy.kinds[talk.kind]}
          {upcoming ? <span className="text-ink"> · {copy.upcoming}</span> : null}
        </p>
        <h4 className="display mt-4 text-title leading-[0.95]">{text.title}</h4>
        {text.subtitle ? (
          <p className="voice mt-3 text-[clamp(1.4rem,2vw,1.95rem)] leading-[1.1]">
            {text.subtitle}
          </p>
        ) : null}
        {text.text ? (
          <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-snug text-ash">
            {text.text}
          </p>
        ) : null}
        {talk.with?.length ? (
          <p className="label mt-5 text-ash">
            {copy.with.replace("{names}", listOf(talk.with, locale))}
          </p>
        ) : null}
      </Reveal>
    </article>
  );
}

/**
 * SECCO — a empresa, o que eu faço nela, o que construímos, a presença
 * pública (talks e oficinas) e os marcos. Marco com `visible: false` não
 * entra na página.
 */
export function SeccoStory({ entry, dict, locale }: ExperienceStoryProps) {
  const copy = dict.experiences.secco;
  const story = dict.experienceStories.secco;
  const built = casesAt(entry.company);
  const shown = milestones.filter(
    (milestone) => milestone.experience === entry.key && milestone.visible,
  );

  // Talks agrupadas por evento, na ordem do dado; figuras numeradas na ordem.
  const events: { event: string; items: Talk[] }[] = [];
  for (const talk of talks.filter((item) => item.experience === entry.key)) {
    const group = events.find((item) => item.event === talk.event);
    if (group) group.items.push(talk);
    else events.push({ event: talk.event, items: [talk] });
  }
  let figureCount = 0;
  const numbered = events.map((group) => ({
    ...group,
    items: group.items.map((talk) => {
      const counts = talk.status === "done" || Boolean(mediaSrc(talk.media));
      return { talk, number: counts ? ++figureCount : 0 };
    }),
  }));

  return (
    <>
      <main id="content">
        <ExperienceHero entry={entry} dict={dict} locale={locale} />

        {/* O que é a SECCO */}
        <Band tone="paper" after="stone" labelledBy="secco-about">
          <Chapter id="secco-about" title={story.about.title}>
            <Reveal>
              <p className="voice text-voice text-pretty">{story.about.text}</p>
            </Reveal>
          </Chapter>
          <Reveal className="mt-[14vh] border-t border-rule pt-10 md:pt-14">
            <p className="voice max-w-[22ch] text-[clamp(2.2rem,4.8vw,5rem)] leading-[1.02] italic">
              {story.about.quote}
            </p>
          </Reveal>
        </Band>

        {/* Minha atuação: quatro dimensões */}
        <Band tone="void" after="paper" labelledBy="secco-role">
          <RevealLines
            as="h2"
            id="secco-role"
            lines={[story.role.title]}
            className="display mb-[6vh] text-[clamp(1.6rem,2.6vw,2.4rem)]"
          />
          <Metrics
            size="sm"
            items={story.role.dimensions.map((dimension) => ({
              value: dimension.title,
              lines: dimension.items,
            }))}
          />
        </Band>

        {/* O que construímos */}
        <Band tone="paper" after="void" labelledBy="secco-built">
          <Chapter id="secco-built" title={story.built.title} wide>
            <CaseGrid items={built} dict={dict} locale={locale} context="category" />
          </Chapter>
        </Band>

        {/* Talks, workshops & community */}
        <Band tone="stone" after="paper" labelledBy="secco-talks">
          <div className="fit-display" style={fit(story.talks.title, "min(12rem, 11vw)", 86, "14vw")}>
            <RevealLines
              as="h2"
              id="secco-talks"
              lines={story.talks.title}
              className="display leading-[0.96]"
            />
          </div>

          <div className="mt-[10vh] flex flex-col gap-y-[12vh]">
            {numbered.map((group) => {
              const spans = pairSpans(false);
              // Todas com foto: larguras pela proporção, fotos na mesma altura
              // (como na galeria). Com um item só de texto, fica o grid 7/5.
              const matched =
                group.items.length > 1 && group.items.every(({ number }) => number > 0);
              return (
                <section key={group.event} aria-label={group.event}>
                  <Reveal variant="draw" className="h-px w-full bg-ink/15" />
                  <h3 className="label mt-5 text-ash">{group.event}</h3>
                  <div
                    className={cn(
                      "mt-8 items-start gap-x-[clamp(0.625rem,1vw,1rem)] gap-y-14",
                      matched ? "flex flex-col md:flex-row" : "grid grid-cols-1 md:grid-cols-12",
                    )}
                  >
                    {group.items.map(({ talk, number }, i) => (
                      <TalkItem
                        key={talk.key}
                        talk={talk}
                        number={number}
                        dict={dict}
                        locale={locale}
                        style={matched ? growStyle(talk.media.ratio) : undefined}
                        className={
                          matched
                            ? "w-full min-w-0 md:[flex:var(--grow)_1_0%]"
                            : group.items.length === 1
                              ? "md:col-span-8"
                              : `${spans[i % 2]} ${i % 2 === 1 ? "md:pl-[3%]" : ""}`
                        }
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </Band>

        {/* Marcos */}
        {shown.length > 0 ? (
          <Band tone="void" after="stone" labelledBy="secco-milestones">
            <Chapter id="secco-milestones" title={story.milestones.title}>
              <ol>
                {shown.map((milestone, i) => (
                  <li key={milestone.key}>
                    <Reveal variant="draw" delay={i * 70} className="h-px w-full bg-rule-dark" />
                    <Reveal
                      delay={i * 70 + 50}
                      className="grid grid-cols-12 gap-x-6 gap-y-2 py-6 md:py-8"
                    >
                      <span className="meta col-span-2 pt-[0.6em] text-fog md:col-span-1">
                        {pad(i + 1)}
                      </span>
                      <span className="display col-span-10 text-[clamp(2rem,4.4vw,4.25rem)] md:col-span-6">
                        {milestone.name}
                      </span>
                      <span className="label col-span-10 col-start-3 text-fog md:col-span-5 md:col-start-8 md:self-center">
                        {story.milestones.items[milestone.key]}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ol>
              <Reveal variant="draw" className="h-px w-full bg-rule-dark" />
            </Chapter>
          </Band>
        ) : null}

        {/* Galeria e fecho */}
        <Band tone="paper" after={shown.length > 0 ? "void" : "stone"} labelledBy="secco-gallery">
          {entry.gallery.length > 0 ? (
            <Chapter id="secco-gallery" title={dict.experience.gallery} wide>
              <Gallery
                images={entry.gallery}
                captions={copy.captions}
                label={dict.caseStudy.figure}
                start={figureCount + 1}
              />
            </Chapter>
          ) : null}
          <ExperienceNext entry={entry} dict={dict} locale={locale} className="mt-[16vh]" />
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}
