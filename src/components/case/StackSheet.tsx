import type { CSSProperties } from "react";
import type { StackGroupKey, WorkCase } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Ficha técnica em colunas, como o colofão de um livro: um grupo por coluna,
 * o nome do grupo pequeno e as tecnologias em display, uma por linha — lê-se
 * de relance, sem parede de badges e sem coluna vazia. Um grupo só vira uma
 * linha, centralizada. `notes` fecha a ficha numa linha discreta com o que
 * não é tecnologia (código, acesso, status).
 */
export function StackSheet({
  groups,
  labels,
  notes = [],
}: {
  groups: NonNullable<WorkCase["technologies"]>;
  labels: Record<StackGroupKey, string>;
  notes?: readonly string[];
}) {
  const count = groups.length;
  const style = {
    "--cols": count,
    "--cols-md": count === 4 ? 2 : Math.min(count, 3),
  } as CSSProperties;

  return (
    <Reveal>
      {count === 1 ? (
        <div className="rule-top pt-6 text-center">
          <p className="label opacity-65">{labels[groups[0].group]}</p>
          <p className="display mt-5 flex flex-wrap justify-center gap-x-[0.5em] text-[clamp(1.75rem,3vw,3rem)] leading-[0.95]">
            {groups[0].items.map((tech, i) => (
              <span key={tech} className="whitespace-nowrap">
                {i > 0 ? (
                  <span aria-hidden="true" className="mr-[0.5em] opacity-30">
                    /
                  </span>
                ) : null}
                {tech}
              </span>
            ))}
          </p>
        </div>
      ) : (
        <dl className="stack-sheet gap-x-6 gap-y-10" style={style}>
          {groups.map((group) => (
            <div key={group.group} className="rule-top pt-5">
              <dt className="label opacity-65">{labels[group.group]}</dt>
              <dd className="display mt-4 text-[clamp(1.35rem,1.75vw,1.85rem)] leading-[1.02]">
                {group.items.map((tech) => (
                  <span key={tech} className="block">
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {notes.length > 0 ? (
        <p className="label mt-12 text-center leading-[1.6] opacity-65">
          {notes.map((note, i) => (
            <span key={note}>
              {i > 0 ? <span aria-hidden="true"> · </span> : null}
              {note}
            </span>
          ))}
        </p>
      ) : null}
    </Reveal>
  );
}
