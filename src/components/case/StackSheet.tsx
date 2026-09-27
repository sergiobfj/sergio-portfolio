import type { StackGroupKey, WorkCase } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Ficha técnica: grupo à esquerda, tecnologias em display à direita, um
 * filete por linha — como a ficha de um livro, não uma parede de badges.
 * `notes` fecha a ficha com o que não é tecnologia (acesso, código).
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
  return (
    <Reveal>
      <dl>
        {groups.map((group) => (
          <div
            key={group.group}
            className="grid grid-cols-12 gap-x-6 border-t border-rule py-5 md:py-6"
          >
            <dt className="label col-span-12 text-ash md:col-span-4 md:pt-[0.55em]">
              {labels[group.group]}
            </dt>
            <dd className="display col-span-12 mt-3 flex flex-wrap gap-x-[0.5em] text-[clamp(1.6rem,2.7vw,2.6rem)] leading-[0.95] md:col-span-8 md:mt-0">
              {group.items.map((tech, i) => (
                <span key={tech} className="whitespace-nowrap">
                  {i > 0 ? (
                    <span aria-hidden="true" className="mr-[0.5em] text-mist">
                      /
                    </span>
                  ) : null}
                  {tech}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      {notes.length > 0 ? (
        <ul className="grid grid-cols-12 gap-x-6 border-t border-rule pt-5 md:pt-6">
          {notes.map((note, i) => (
            <li
              key={note}
              className={
                i === 0
                  ? "label col-span-12 text-ash md:col-span-4"
                  : "col-span-12 mt-3 text-[0.9375rem] leading-snug text-ash md:col-span-8 md:mt-0"
              }
            >
              {note}
            </li>
          ))}
        </ul>
      ) : null}
    </Reveal>
  );
}
