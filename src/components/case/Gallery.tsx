import type { GalleryImage, SurfaceTone } from "@/data/portfolio";
import { Figure } from "@/components/case/Figure";
import { pairSpans, toSpreads } from "@/lib/spreads";

/** Tons das pranchas vazias, em rodízio — nunca duas iguais lado a lado. */
const tones: SurfaceTone[] = ["mist", "void", "stone"];

/**
 * Galeria em par · destaque · par (7/5, 12, 5/7 …). Cada figura mantém a
 * própria proporção — screenshot não se corta para caber numa altura —, e o
 * par alinha pelo topo. A numeração continua a partir de `start`.
 */
export function Gallery({
  images,
  captions = {},
  label,
  start = 1,
}: {
  images: readonly GalleryImage[];
  captions?: Record<string, string>;
  label: string;
  start?: number;
}) {
  let n = start;

  return (
    <div className="flex flex-col gap-y-[clamp(3rem,7vw,6rem)]">
      {toSpreads(images).map((spread, row) => {
        const spans = pairSpans(row % 4 === 2);
        return (
          <div
            key={spread[0].id}
            className="grid grid-cols-1 items-start gap-x-[clamp(0.625rem,1vw,1rem)] gap-y-12 md:grid-cols-12"
          >
            {spread.map((image, i) => {
              const number = n++;
              return (
                <Figure
                  key={image.id}
                  media={image}
                  number={number}
                  label={label}
                  caption={captions[image.id]}
                  tone={tones[(number - start) % tones.length]}
                  sizes={
                    spread.length === 1
                      ? "(max-width: 768px) 100vw, 92vw"
                      : "(max-width: 768px) 100vw, 54vw"
                  }
                  className={spread.length === 1 ? "md:col-span-12" : spans[i]}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
