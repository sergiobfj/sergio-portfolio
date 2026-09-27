import type { ComponentType } from "react";
import type { CaseKey, WorkCase } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { Arena } from "./Arena";
import { AutomacoesOperacionais } from "./AutomacoesOperacionais";
import { JornadaCliente } from "./JornadaCliente";
import { RouterPlanner } from "./RouterPlanner";

export type StoryProps = {
  item: WorkCase;
  dict: Dictionary;
  locale: Locale;
};

/**
 * Cases com narrativa própria. Cada história compõe as peças de
 * src/components/case na ordem e no ritmo que pedir — não existe template.
 * Um case fora daqui usa a página genérica (work/CaseView), que também é o
 * formato dos mini-cases (Relatório Merger) e dos placeholders.
 *
 * Para uma história nova: o componente aqui, o texto em `stories.<slug>`
 * nos três dicionários.
 */
export const stories: Partial<Record<CaseKey, ComponentType<StoryProps>>> = {
  "router-planner": RouterPlanner,
  "jornada-cliente": JornadaCliente,
  "arena-sustentabilidade": Arena,
  "automacoes-operacionais": AutomacoesOperacionais,
};
