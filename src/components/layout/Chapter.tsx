import type { ReactNode } from "react";
import { RevealLines } from "@/components/ui/RevealLines";
import { cn } from "@/lib/cn";

/**
 * Um capítulo das páginas internas: título pequeno em display à esquerda,
 * conteúdo à direita — a mesma grade da Experiência na home. `wide` põe o
 * conteúdo embaixo do título, na largura toda (grids de cases). `inset` põe
 * o título dentro da coluna do conteúdo, alinhado ao texto que vem embaixo.
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
  const side = !wide && !inset;

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
        )}
      />
      <div
        className={cn(
          "col-span-12",
          side && "lg:col-span-8",
          inset && "lg:col-span-8 lg:col-start-5",
        )}
      >
        {children}
      </div>
    </section>
  );
}
