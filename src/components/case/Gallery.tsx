import type { GalleryImage, SurfaceTone } from "@/data/portfolio";
import { Figure } from "@/components/case/Figure";
import { growStyle, toSpreads } from "@/lib/spreads";

/** Tons das pranchas vazias, em rodízio — nunca duas iguais lado a lado. */
const tones: SurfaceTone[] = ["mist", "void", "stone"];

/**
 * Galeria em par · destaque · par. Cada figura mantém a própria proporção —
 * screenshot não se corta para caber numa altura —, e no par a largura segue
 * a proporção, então as duas pranchas têm sempre a mesma altura. A numeração
 * continua a partir de `start`.
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
      {toSpreads(images).map((spread) => {
        const pair = spread.length > 1;
        return (
          <div
            key={spread[0].id}
            className="flex flex-col gap-x-[clamp(0.625rem,1vw,1rem)] gap-y-12 md:flex-row md:items-start"
          >
            {spread.map((image) => {
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
                    pair ? "(max-width: 768px) 100vw, 54vw" : "(max-width: 768px) 100vw, 92vw"
                  }
                  style={pair ? growStyle(image.ratio) : undefined}
                  className={pair ? "min-w-0 md:[flex:var(--grow)_1_0%]" : "w-full"}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
