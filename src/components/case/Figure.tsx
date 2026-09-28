import type { CSSProperties } from "react";
import { pad, type MediaSlot, type SurfaceTone } from "@/data/portfolio";
import { Surface } from "@/components/ui/Surface";
import { Reveal } from "@/components/ui/Reveal";
import { ratioOf } from "@/lib/spreads";

/**
 * Uma prancha numerada. Com o arquivo em /public, é o screenshot; sem ele,
 * é a prancha em si — tom, grão e o número da figura afundando na borda —,
 * nunca um ícone de imagem quebrada. A legenda é opcional.
 */
export function Figure({
  media,
  number,
  label,
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
  number: number;
  /** "Fig." — vem do dicionário. */
  label: string;
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
  const index = pad(number);
  const capped = maxHeight
    ? { ...style, maxWidth: `calc(${maxHeight} * ${ratioOf(media.ratio).toFixed(4)})` }
    : style;

  return (
    <figure className={className} style={capped}>
      <Surface
        tone={tone}
        media={media}
        cover={index}
        coverSize="56cqw"
        lead={<span className="meta">{`${label} ${index}`}</span>}
        labels="placeholder"
        alt={caption ? "" : alt}
        priority={priority}
        sizes={sizes}
        className="aspect-(--ratio)"
      />
      {caption ? (
        <Reveal delay={90}>
          <figcaption className="mt-4 flex items-baseline gap-3 text-[0.9375rem] leading-snug opacity-70">
            <span className="meta">{index}</span>
            {caption}
          </figcaption>
        </Reveal>
      ) : null}
    </figure>
  );
}
