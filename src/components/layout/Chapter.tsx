import type { ReactNode } from "react";
import { RevealLines } from "@/components/ui/RevealLines";
import { cn } from "@/lib/cn";

/**
 * Dois níveis de título nas páginas internas (tokens em globals.css):
 * `section` para as grandes seções das experiências (Minha atuação, Marcos,
 * Coisas que construí…), `chapter` para os capítulos dos cases (O problema,
 * Como funciona, Ficha técnica…). Nenhum dos dois é rótulo.
 */
export type HeadingLevel = "section" | "chapter";

const levelSize: Record<HeadingLevel, string> = {
  section: "text-section",
  chapter: "text-chapter",
};

/**
 * O título de capítulo, sozinho: para quando o conteúdo se divide em duas
 * colunas e o título vira a cabeça da coluna do texto — um título
 * centralizado sobre um par texto + imagem ficaria sobre o vão entre eles.
 */
export function ChapterTitle({
  id,
  title,
  level = "chapter",
  className,
}: {
  id: string;
  title: string;
  level?: HeadingLevel;
  className?: string;
}) {
  return (
    <RevealLines
      as="h2"
      id={id}
      lines={[title]}
      className={cn("display leading-[0.92] text-balance", levelSize[level], className)}
    />
  );
}

/**
 * Um capítulo das páginas internas. O critério é um só: o título fica em
 * cima, centralizado (do tablet em diante), e o conteúdo vem embaixo —
 * nunca um título sozinho numa coluna lateral vazia. `level` escolhe o
 * corpo do título (capítulo por padrão).
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
  level = "chapter",
  children,
}: {
  id: string;
  title: string;
  wide?: boolean;
  inset?: boolean;
  level?: HeadingLevel;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="grid grid-cols-12 gap-x-6">
      <ChapterTitle
        id={id}
        title={title}
        level={level}
        className={cn(
          "col-span-12 mb-[5vh]",
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
