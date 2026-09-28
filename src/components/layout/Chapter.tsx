import type { ReactNode } from "react";
import { RevealLines } from "@/components/ui/RevealLines";
import { cn } from "@/lib/cn";

/**
 * Um capítulo das páginas internas: título pequeno em display à esquerda,
 * conteúdo à direita — a mesma grade da Experiência na home. `wide` põe o
 * conteúdo embaixo do título, na largura toda (grids de cases). `inset` põe
 * o título dentro da coluna do conteúdo, alinhado ao texto que vem embaixo.
 * `stacked` põe o título em cima, centralizado, e o conteúdo num bloco
 * central de 8 colunas — sem coluna lateral vazia (do tablet em diante; no
 * celular, tudo à esquerda).
 */
export function Chapter({
  id,
  title,
  wide = false,
  inset = false,
  stacked = false,
  children,
}: {
  id: string;
  title: string;
  wide?: boolean;
  inset?: boolean;
  stacked?: boolean;
  children: ReactNode;
}) {
  const side = !wide && !inset && !stacked;

  return (
    <section aria-labelledby={id} className="grid grid-cols-12 gap-x-6">
      <RevealLines
        as="h2"
        id={id}
        lines={[title]}
        className={cn(
          "display col-span-12 mb-[5vh] text-[clamp(1.6rem,2.6vw,2.4rem)]",
          side && "lg:col-span-4 lg:mb-0",
          inset && "lg:col-span-8 lg:col-start-5",
          stacked && "md:text-center",
        )}
      />
      <div
        className={cn(
          "col-span-12",
          side && "lg:col-span-8",
          inset && "lg:col-span-8 lg:col-start-5",
          stacked && "md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3",
        )}
      >
        {children}
      </div>
    </section>
  );
}
