import Image from "next/image";
import type { MediaSlot } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { mediaSrc } from "@/lib/media";

type Props = {
  media: MediaSlot;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Superfície de foto: tom chapado com grão enquanto não houver arquivo;
 * salvar a foto no caminho de `media.src` a publica (next/image, fill +
 * cover) sem mexer no layout.
 */
export function MediaFrame({
  media,
  alt,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}: Props) {
  const src = mediaSrc(media);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-(--radius-block) bg-mist",
        !src && "grain",
        className,
      )}
      style={{ aspectRatio: media.ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={media.position ? { objectPosition: media.position } : undefined}
        />
      ) : (
        <span role="img" aria-label={alt} className="absolute inset-0" />
      )}
    </div>
  );
}
