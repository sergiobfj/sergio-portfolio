import type { CSSProperties } from "react";
import Image from "next/image";
import { pad, type CategoryPreview as Preview, type PreviewShot } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { mediaSrc } from "@/lib/media";

function Shot({ shot, main, sizes }: { shot: PreviewShot; main: boolean; sizes: string }) {
  const src = mediaSrc({ src: shot.src, ratio: shot.ratio });
  if (!src) return null;

  const style = {
    "--x": `${shot.x}%`,
    "--y": shot.y !== undefined ? `${shot.y}%` : undefined,
    "--b": shot.bottom !== undefined ? `${shot.bottom}%` : undefined,
    "--w": shot.w !== undefined ? `${shot.w}%` : undefined,
    "--ratio": shot.ratio,
  } as CSSProperties;

  return (
    <div className={cn("preview-shot", main ? "preview-shot--main" : "preview-shot--inset")} style={style}>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: shot.position ?? "left top" }}
      />
    </div>
  );
}

/**
 * Prévia de uma categoria na home: os prints dos próprios projetos, na
 * prancha. Decorativa — a legenda embaixo já nomeia os trabalhos.
 */
export function CategoryPreview({ preview }: { preview: Preview }) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Shot shot={preview.main} main sizes="(max-width: 768px) 90vw, 50vw" />
      {preview.inset ? (
        <Shot shot={preview.inset} main={false} sizes="(max-width: 768px) 60vw, 30vw" />
      ) : null}
    </div>
  );
}

/**
 * Categoria ainda sem trabalho publicado: em vez do número sozinho, o
 * índice do que vai morar ali, tom sobre tom — tipografia, sem fingir print.
 */
export function CategoryOutline({ items }: { items: readonly string[] }) {
  return (
    <ol aria-hidden="true" className="absolute inset-x-[5cqw] bottom-[6cqw]">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-baseline gap-[2.4cqw] border-t border-current/15 py-[1.6cqw]"
        >
          <span className="meta w-[4cqw] shrink-0 opacity-45">{pad(i + 1)}</span>
          <span className="display text-[6.4cqw] leading-[0.95] opacity-30">{item}</span>
        </li>
      ))}
    </ol>
  );
}
