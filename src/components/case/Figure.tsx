import type { CSSProperties } from "react";
import type { MediaSlot, SurfaceTone } from "@/data/portfolio";
import { Surface } from "@/components/ui/Surface";
import { Reveal } from "@/components/ui/Reveal";
import { ratioOf } from "@/lib/spreads";

/**
 * Uma imagem na história. Com o arquivo em /public, é o screenshot ou a
 * foto; sem ele, a superfície no tom, com grão — nunca um ícone de imagem
 * quebrada. A legenda é opcional e só entra quando acrescenta contexto.
 */
export function Figure({
  media,
  caption,
  alt = "",
  tone = "mist",
  sizes,
  priority = false,
  className,
  style,
  maxHeight,
}: {
  media: MediaSlot;
  caption?: string;
  /** Só sem legenda: com legenda, é ela que descreve a imagem. */
  alt?: string;
  tone?: SurfaceTone;
  sizes: string;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
  /**
   * Teto de altura (ex.: "76svh"): a figura fica mais estreita, na mesma
   * proporção, em vez de passar da tela. Screenshot não se corta.
   */
  maxHeight?: string;
}) {
  const capped = maxHeight
    ? { ...style, maxWidth: `calc(${maxHeight} * ${ratioOf(media.ratio).toFixed(4)})` }
    : style;

  return (
    <figure className={className} style={capped}>
      <Surface
        tone={tone}
        media={media}
        alt={caption ? "" : alt}
        priority={priority}
        sizes={sizes}
        className="aspect-(--ratio)"
      />
      {caption ? (
        <Reveal delay={90}>
          <figcaption className="mt-4 text-[0.9375rem] leading-snug opacity-70">{caption}</figcaption>
        </Reveal>
      ) : null}
    </figure>
  );
}
