import type { CSSProperties } from "react";
import { FadeImage } from "@/components/ui/FadeImage";
import type { CategoryPreview as Preview, PreviewShot } from "@/data/portfolio";
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
      <FadeImage
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
