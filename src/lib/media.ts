import { existsSync } from "node:fs";
import { join } from "node:path";
import type { CaseImage, MediaSlot } from "@/data/portfolio";

/**
 * A imagem só entra se o arquivo existir em /public. Um caminho planejado
 * (ex.: /projects/router-planner/hero.webp) nunca quebra a página: sem o
 * arquivo, o componente desenha o placeholder. Só em server components — a
 * checagem roda no build (e a cada request no dev).
 */
export function mediaSrc(slot: MediaSlot) {
  if (!slot.src) return null;
  return existsSync(join(process.cwd(), "public", slot.src)) ? slot.src : null;
}

/**
 * A imagem `id` de um case, só se o arquivo já existir. É o que as seções
 * narrativas usam: sem o print, a seção se compõe sem ele — nada de prancha
 * vazia no meio da história.
 */
export function imageOf(images: readonly CaseImage[] | undefined, id: string) {
  const image = images?.find((entry) => entry.id === id);
  return image && mediaSrc(image) ? image : undefined;
}
