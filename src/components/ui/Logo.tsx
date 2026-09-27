import type { CSSProperties } from "react";
import Image from "next/image";
import type { BrandLogo } from "@/data/portfolio";
import { cn } from "@/lib/cn";

/**
 * A marca da empresa, pequena, no tom do texto em volta. `on` é o fundo:
 * claro leva a versão escura, escuro leva a branca. A altura vem de
 * `--logo-h` (padrão 2.25rem) vezes o `scale` da marca; a largura segue a
 * proporção do arquivo. Decorativa: o nome da empresa já está escrito ao lado.
 */
export function Logo({
  logo,
  on = "light",
  className,
}: {
  logo: BrandLogo;
  on?: "light" | "dark";
  className?: string;
}) {
  return (
    <Image
      src={on === "light" ? logo.onLight : logo.onDark}
      alt=""
      width={logo.width}
      height={logo.height}
      unoptimized
      className={cn("block h-[calc(var(--logo-h,2.25rem)*var(--logo-scale))] w-auto", className)}
      style={{ "--logo-scale": logo.scale ?? 1 } as CSSProperties}
    />
  );
}
