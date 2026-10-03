import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { RevealLines } from "@/components/ui/RevealLines";
import { cn } from "@/lib/cn";

/**
 * O título das seções da home: o número, o nome em display no corpo dos
 * capítulos e um filete curto que se desenha embaixo — a mesma gramática
 * em Trabalhos, Experiência e Background. O título não grita: quem pesa é o
 * conteúdo. `caption`, quando existe, é a linha de apoio sob o filete.
 *
 * Centralizado do tablet em diante; no celular, à esquerda, como os
 * capítulos das páginas internas. A distância até o conteúdo é do próprio
 * título — as três seções usam a mesma.
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
      <Reveal className="meta text-ash">{index}</Reveal>
      <RevealLines
        as="h2"
        id={id}
        lines={[title]}
        delay={60}
        className="display mt-4 text-[clamp(1.6rem,2.6vw,2.4rem)]"
      />
      <Reveal
        variant="draw"
        delay={160}
        className="mt-5 h-px w-[clamp(2.5rem,4vw,4rem)] bg-current opacity-30"
      />
      {caption ? (
        <Reveal delay={200} className="mt-6 max-w-[44ch] text-[0.9375rem] leading-snug text-ash">
          {caption}
        </Reveal>
      ) : null}
    </header>
  );
}
