import { pad, type WorkCase } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/dictionary";

/** Nome próprio vem do dado; um título descritivo pode vir traduzido. */
export function caseTitle(item: WorkCase, dict: Dictionary) {
  return dict.cases[item.slug].title ?? item.title;
}

/** "03 trabalhos", "01 trabalho" — ou "Em breve" quando ainda não há nada. */
export function countLabel(count: number, dict: Dictionary) {
  if (count === 0) return dict.work.soon;
  const noun = count === 1 ? dict.work.count.one : dict.work.count.other;
  return `${pad(count)} ${noun}`;
}

/**
 * Título em duas linhas para o display: quebra no espaço mais perto do meio
 * ("Jornada do / Cliente", "Arena da / Sustentabilidade"). Uma palavra só
 * fica numa linha. Funciona para qualquer idioma, sem quebra escrita à mão.
 */
export function titleLines(title: string) {
  const middle = title.length / 2;
  let best = -1;
  for (let i = 0; i < title.length; i++) {
    if (title[i] === " " && (best < 0 || Math.abs(i - middle) < Math.abs(best - middle))) {
      best = i;
    }
  }
  return best < 0 ? [title] : [title.slice(0, best), title.slice(best + 1)];
}
