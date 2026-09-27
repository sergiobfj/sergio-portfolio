import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import type { MediaSlot, SurfaceTone } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { mediaSrc } from "@/lib/media";

type Props = {
  tone: SurfaceTone;
  media: MediaSlot;
  /** Texto da capa tipográfica, usada enquanto não há imagem. */
  cover: string;
  /** Tamanho da capa em cqw; por padrão, o que ocupa a largura. */
  coverSize?: string;
  /** Rótulos impressos no topo, como a legenda de uma prancha. */
  lead?: ReactNode;
  trail?: ReactNode;
  /** `placeholder`: os rótulos saem quando a imagem entra (screenshots). */
  labels?: "always" | "placeholder";
  /** Vazio quando a imagem é decorativa ou já tem legenda. */
  alt?: string;
  priority?: boolean;
  sizes: string;
  className?: string;
};

/**
 * Capa tipográfica: o texto em tamanho que ocupa a largura da superfície,
 * calculado pelo número de letras (em cqw, então acompanha o bloco).
 */
function coverSizeFor(text: string) {
  return `${(92 / (text.length * 0.47)).toFixed(2)}cqw`;
}

/**
 * A superfície é o bloco: sem borda, sem sombra. Sem imagem, a capa vira
 * tipografia — tom sobre tom, afundando na borda de baixo. Com imagem, a
 * capa some e os rótulos continuam impressos nela (salvo `labels`).
 */
export function Surface({
  tone,
  media,
  cover,
  coverSize,
  lead,
  trail,
  labels = "always",
  alt = "",
  priority = false,
  sizes,
  className,
}: Props) {
  const src = mediaSrc(media);
  const printed = (lead || trail) && (labels === "always" || !src);

  return (
    <Reveal
      variant="clip"
      className={className}
      style={{ "--ratio": media.ratio } as CSSProperties}
    >
      <div data-tone={tone} className="surface h-full">
        <div className={cn("surface__scale", !src && "grain")}>
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="surface__cover display"
              style={
                {
                  "--cover-size": coverSize ?? coverSizeFor(cover),
                } as CSSProperties
              }
            >
              {cover}
            </span>
          )}
        </div>

        {printed ? (
          <div className="relative z-2 flex items-start justify-between gap-6 p-[clamp(1rem,2vw,1.75rem)] opacity-75">
            <span>{lead}</span>
            <span className="text-right">{trail}</span>
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
