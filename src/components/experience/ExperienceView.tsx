import { casesAt, pad } from "@/data/portfolio";
import { Band } from "@/components/case/Band";
import { experienceStories } from "@/components/experiences";
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

/**
 * Experiência sem narrativa própria: resumo, trajetória, áreas e o que foi
 * construído — títulos em cima, centralizados. Trecho sem texto aparece como
 * "em escrita". Foto entra numa narrativa própria, nunca numa galeria.
 */
function GenericExperience({ entry, dict, locale }: ExperienceStoryProps) {
  const copy = dict.experiences[entry.key];
  const built = casesAt(entry.company);
  const journey = copy.journey ?? [];
  const areas = copy.areas ?? [];

  return (
    <>
      <main id="content">
        <ExperienceHero entry={entry} dict={dict} locale={locale} />

        <Band tone="paper" after="stone" labelledBy="experience-journey">
          <Chapter id="experience-journey" title={dict.experience.journey}>
            <RevealLines
              as="p"
              lines={[copy.summary]}
              className="voice text-voice text-balance md:text-center"
            />
            {journey.length > 0 ? (
              journey.map((paragraph, i) => (
                <Reveal key={paragraph} delay={120 + i * 60}>
                  <p className="mt-8 max-w-[52ch] text-lead leading-relaxed md:mx-auto md:text-center">
                    {paragraph}
                  </p>
                </Reveal>
              ))
            ) : (
              <Reveal delay={160}>
                <p className="label mt-10 text-ash md:text-center">{dict.experience.writing}</p>
              </Reveal>
            )}
          </Chapter>

          {areas.length > 0 ? (
            <div className="mt-[16vh]">
              <Chapter id="experience-areas" title={dict.experience.areas}>
                <ol>
                  {areas.map((area, i) => (
                    <li
                      key={area}
                      className="flex items-baseline gap-5 border-t border-rule py-5 md:gap-8"
                    >
                      <span className="meta w-[1.35rem] shrink-0 text-ash">{pad(i + 1)}</span>
                      <span className="display text-[clamp(2rem,4.6vw,4.5rem)]">{area}</span>
                    </li>
                  ))}
                </ol>
              </Chapter>
            </div>
          ) : null}

          <div className="mt-[16vh] flex flex-col gap-y-[16vh]">
            <Chapter id="experience-built" title={dict.experience.built} wide>
              {built.length > 0 ? (
                <CaseGrid items={built} dict={dict} locale={locale} context="category" />
              ) : (
                <Reveal>
                  <p className="voice mx-auto max-w-[20ch] text-voice text-ash md:text-center">
                    {dict.experience.builtEmpty}
                  </p>
                </Reveal>
              )}
            </Chapter>

            <ExperienceNext entry={entry} dict={dict} locale={locale} />
          </div>
        </Band>
      </main>
      <Contact dict={dict} locale={locale} curve="paper" />
    </>
  );
}

/**
 * Experiência com narrativa própria (src/components/experiences) conta do
 * jeito dela; as outras usam a página genérica.
 */
export function ExperienceView(props: ExperienceStoryProps) {
  const Story = experienceStories[props.entry.key];
  return Story ? <Story {...props} /> : <GenericExperience {...props} />;
}
