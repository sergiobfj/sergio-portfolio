import { existsSync } from "node:fs";
import { join } from "node:path";
import type { MediaSlot } from "@/data/portfolio";

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
