import type { ReactNode } from "react";
import { RevealLines } from "@/components/ui/RevealLines";
import { cn } from "@/lib/cn";

/**
 * Um capítulo das páginas internas: título pequeno em display à esquerda,
 * conteúdo à direita — a mesma grade da Experiência na home. `wide` põe o
 * conteúdo embaixo do título, na largura toda (grids de cases).
 */
export function Chapter({
  id,
  title,
  wide = false,
  children,
}: {
  id: string;
  title: string;
  wide?: boolean;
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
          !wide && "lg:col-span-4 lg:mb-0",
        )}
      />
      <div className={cn("col-span-12", !wide && "lg:col-span-8")}>
        {children}
      </div>
    </section>
  );
}
