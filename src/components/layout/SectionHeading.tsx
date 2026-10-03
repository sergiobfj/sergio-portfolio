import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { cn } from "@/lib/cn";

/**
 * O título das seções da home — Trabalhos, Experiência, Background — com a
 * mesma gramática nas três: o nome é o protagonista, no corpo de seção
 * (`text-section`); o número é detalhe, sobrescrito à direita, sem mexer na
 * centralização; um filete curto apoia embaixo. `caption`, quando existe, é
 * a linha de apoio sob o filete.
 *
 * Centralizado do tablet em diante; no celular, à esquerda. A distância até
 * o conteúdo é do próprio título — as três seções usam a mesma.
 */
export function SectionHeading({
  id,
  index,
  title,
  caption,
  className,
}: {
  id: string;
  /** "01", "02"… — a ordem na página. */
  index: string;
  title: string;
  caption?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-[6vh] flex flex-col items-start md:items-center md:text-center", className)}>
      <div className="relative">
        <RevealLines
          as="h2"
          id={id}
          lines={[title]}
          className="display text-section leading-[0.9]"
        />
        <Reveal
          delay={160}
          className="meta absolute top-[0.35em] left-full ml-[0.6em] text-ash"
        >
          {index}
        </Reveal>
      </div>
      <Reveal
        variant="draw"
        delay={200}
        className="mt-6 h-px w-[clamp(3rem,6vw,6rem)] bg-current opacity-30"
      />
      {caption ? (
        <Reveal delay={240} className="mt-6 max-w-[44ch] text-[0.9375rem] leading-snug text-ash">
          {caption}
        </Reveal>
      ) : null}
    </header>
  );
}
