import type { CaseImage, SurfaceTone } from "@/data/portfolio";
import { Figure } from "@/components/case/Figure";
import { growStyle, ratioOf, toSpreads } from "@/lib/spreads";

/** Tons das pranchas vazias, em rodízio — nunca duas iguais lado a lado. */
const tones: SurfaceTone[] = ["mist", "void", "stone"];

/**
 * Figuras lado a lado DENTRO de uma seção narrativa (par · destaque · par) —
 * ex.: as duas fotos da promoção, na faixa da promoção. Não existe seção
 * "Galeria" no fim da página: a imagem entra onde a história fala dela.
 *
 * Cada figura mantém a própria proporção — screenshot não se corta para
 * caber numa altura —, e no par a largura segue a proporção, então as duas
 * pranchas têm sempre a mesma altura. A numeração continua a partir de `start`.
 */
export function FigureSpread({
  images,
  captions = {},
  label,
  start = 1,
}: {
  images: readonly CaseImage[];
  captions?: Record<string, string>;
  label: string;
  start?: number;
}) {
  let n = start;

  return (
    <div className="flex flex-col gap-y-[clamp(3rem,7vw,6rem)]">
      {toSpreads(images).map((spread) => {
        const pair = spread.length > 1;
        // Teto de altura do par (~60% da tela): na mesma altura, a largura
        // total é a soma das proporções. Foto em pé não toma a tela inteira.
        const sum = spread.reduce((total, image) => total + ratioOf(image.ratio), 0);
        return (
          <div
            key={spread[0].id}
            className="mx-auto flex w-full flex-col gap-x-[clamp(0.625rem,1vw,1rem)] gap-y-12 md:flex-row md:items-start"
            style={pair ? { maxWidth: `calc(60svh * ${sum.toFixed(4)} + 1rem)` } : undefined}
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
                  maxHeight={pair ? undefined : "70svh"}
                  // Sozinha e mais estreita que a coluna (pelo teto de altura): no meio.
                  className={pair ? "min-w-0 md:[flex:var(--grow)_1_0%]" : "mx-auto w-full"}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
