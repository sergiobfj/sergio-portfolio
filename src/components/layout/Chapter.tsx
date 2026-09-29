import type { ReactNode } from "react";
import { RevealLines } from "@/components/ui/RevealLines";
import { cn } from "@/lib/cn";

/**
 * Um capítulo das páginas internas. O critério é um só: título pequeno fica
 * em cima, centralizado (do tablet em diante), e o conteúdo vem embaixo —
 * nunca um título sozinho numa coluna lateral vazia.
 *
 * Por padrão o conteúdo é um bloco central de 8 colunas (texto). `wide` põe o
 * conteúdo na largura toda (grids, fluxos, fichas). `inset` é a exceção: o
 * título recuado, dentro da coluna do conteúdo, para quando a coluna livre à
 * esquerda recebe outra coisa (uma foto). No celular, tudo à esquerda.
 */
export function Chapter({
  id,
  title,
  wide = false,
  inset = false,
  children,
}: {
  id: string;
  title: string;
  wide?: boolean;
  inset?: boolean;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="grid grid-cols-12 gap-x-6">
      <RevealLines
        as="h2"
        id={id}
        lines={[title]}
        className={cn(
          "display col-span-12 mb-[5vh] text-[clamp(1.6rem,2.6vw,2.4rem)]",
          inset ? "lg:col-span-8 lg:col-start-5" : "md:text-center",
        )}
      />
      <div
        className={cn(
          "col-span-12",
          inset && "lg:col-span-8 lg:col-start-5",
          !wide && !inset && "md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3",
        )}
      >
        {children}
      </div>
    </section>
  );
}
