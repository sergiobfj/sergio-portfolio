/**
 * Dados que NÃO mudam com o idioma: nomes próprios, datas, slugs, caminhos de
 * imagem e links. Todo texto traduzível vive em src/i18n/.
 *
 * As chaves (`key`, `slug`) são as mesmas usadas nos dicionários — é o que
 * amarra dado e tradução sem duplicar layout.
 *
 * Confidencialidade: nada de IDs internos, tokens, IPs, URLs internas,
 * clientes reais ou nomes de funcionários aqui — este arquivo vai para o
 * site público.
 */

export type MediaSlot = {
  /** Caminho em /public. `null` mantém o placeholder gráfico. */
  src: string | null;
  ratio: string;
};

/** Tom da superfície enquanto não há imagem (e fundo por trás dela). */
export type SurfaceTone = "mist" | "stone" | "void";

export const site = {
  name: "Sergio Barbosa",
  firstName: "Sergio",
  lastName: "Barbosa",
  /** Assinatura de autoria: idêntica em todos os idiomas. */
  signature: { lead: "Code", by: "by", name: "Sergio" },
  url: "https://sergiobarbosa.com", // [placeholder] domínio final
  email: "ola@sergiobarbosa.com", // [placeholder] e-mail público final
};

export const aboutPortrait: MediaSlot = {
  src: null,
  ratio: "4 / 5",
};

/* ---------------------------------------------------------------------------
   TRABALHOS
   Trabalho é o que foi construído, não um repositório. A home mostra quatro
   categorias; cada uma tem sua página (/work/<categoria>) e cada case a sua
   (/work/<case>).
   ------------------------------------------------------------------------- */

export type WorkCategoryKey = "products" | "automations" | "web" | "tools";

export type WorkCategory = {
  /** Também é o slug da rota: /work/products. */
  key: WorkCategoryKey;
  tone: SurfaceTone;
  /** Arte do bloco na home. Sem imagem, o número da categoria vira a arte. */
  media: MediaSlot;
};

/** Ordem = ordem na home e numeração (01–04). Blocos em pares 7/5 · 5/7. */
export const workCategories: WorkCategory[] = [
  { key: "products", tone: "void", media: { src: null, ratio: "4 / 3" } },
  { key: "automations", tone: "mist", media: { src: null, ratio: "4 / 5" } },
  { key: "web", tone: "stone", media: { src: null, ratio: "4 / 5" } },
  { key: "tools", tone: "mist", media: { src: null, ratio: "4 / 3" } },
];

/**
 * Para um case novo: acrescente a chave aqui, o item em `cases` e o texto em
 * `cases.<chave>` nos três dicionários (pode ser `{}` no começo). O
 * typecheck aponta o que faltar.
 */
export type CaseKey =
  | "router-planner"
  | "sentavos"
  | "geocarbo"
  | "crm-textil"
  | "jornada-cliente"
  | "arena-sustentabilidade"
  | "relatorio-merger"
  | "automacoes-operacionais";

/**
 * Peso editorial. Nem tudo merece o mesmo espaço: nos grids, `full` e
 * `medium` ganham a coluna larga; `mini`, `group` e `placeholder` ficam
 * menores, e a página deles abre com uma hero mais curta.
 */
export type CaseWeight = "full" | "medium" | "mini" | "group" | "placeholder";

export function isHeavy(weight: CaseWeight) {
  return weight === "full" || weight === "medium";
}

/** Grupos da ficha técnica; o nome do grupo é traduzido (`caseStudy.stackGroups`). */
export type StackGroupKey =
  | "backend"
  | "backendData"
  | "integration"
  | "crm"
  | "data"
  | "dataLayer"
  | "dashboard"
  | "ai"
  | "frontend"
  | "interface"
  | "infrastructure"
  | "stack";

/** Uma imagem de galeria (case ou experiência). A legenda é traduzida pelo `id`. */
export type GalleryImage = MediaSlot & { id: string };

/**
 * Um case existe só com descrição, contexto e imagens — repositório é
 * opcional. O texto fica nos dicionários; aqui, só o que não se traduz.
 *
 * Imagem planejada pode apontar para um arquivo que ainda não existe: sem o
 * arquivo em /public, entra o placeholder (lib/media.ts). Publicar é salvar
 * o arquivo no caminho. `ratio` é o recorte: ajustar ao formato real.
 */
export type WorkCase = {
  /** Categoria e case dividem /work/<slug>: um slug não pode ser nome de categoria. */
  slug: Exclude<CaseKey, WorkCategoryKey>;
  /** Nome próprio. Um título descritivo é traduzido em `cases.<slug>.title`. */
  title: string;
  category: WorkCategoryKey;
  weight: CaseWeight;
  /** Empresa. Se for a de uma experiência, o case aparece na página dela. */
  company?: string;
  year?: string;
  /** Ficha técnica. Nomes de tecnologia não são traduzidos. */
  technologies?: { group: StackGroupKey; items: string[] }[];
  /** Capa: a superfície nos grids e a figura principal do case. */
  media: MediaSlot;
  /** Screenshots e fotos de processo — a galeria do case. */
  images?: GalleryImage[];
  linkedinPost?: string;
  liveUrl?: string;
  repository?: string;
  /** "private" mostra "Código proprietário" no lugar do link, mesmo com `repository`. */
  repositoryVisibility?: "public" | "private";
  tone: SurfaceTone;
};

/**
 * Ordem = ordem dentro de cada categoria e na página de cada experiência.
 * Assets em /public/projects/<pasta>/.
 */
export const cases: WorkCase[] = [
  {
    slug: "router-planner",
    title: "Router Planner",
    category: "products",
    weight: "full",
    company: "Virtron",
    year: "2026",
    repositoryVisibility: "private",
    tone: "void",
    technologies: [
      { group: "backend", items: ["Python", "FastAPI", "Pydantic", "Uvicorn"] },
      { group: "integration", items: ["Ploomes API", "Requests"] },
      { group: "data", items: ["OpenPyXL"] },
      { group: "frontend", items: ["HTML", "CSS", "JavaScript"] },
      { group: "infrastructure", items: ["Hostinger VPS", "CloudPanel"] },
    ],
    media: { src: "/projects/router-planner/hero.webp", ratio: "16 / 10" },
    images: [
      { id: "legacy-excel", src: "/projects/router-planner/legacy-excel.webp", ratio: "4 / 3" },
      { id: "dashboard", src: "/projects/router-planner/dashboard.webp", ratio: "4 / 3" },
      { id: "route-selection", src: "/projects/router-planner/route-selection.webp", ratio: "16 / 9" },
      { id: "export", src: "/projects/router-planner/export.webp", ratio: "4 / 3" },
      { id: "validation", src: "/projects/router-planner/validation.webp", ratio: "4 / 3" },
    ],
  },
  {
    // Vira case completo quando o conteúdo entrar.
    slug: "sentavos",
    title: "Sentavos",
    category: "products",
    weight: "placeholder",
    year: "2026",
    tone: "mist",
    media: { src: null, ratio: "4 / 3" },
  },
  {
    // [placeholder] case futuro da SECCO: ano, stack, links e imagens.
    slug: "geocarbo",
    title: "GeoCarbo",
    category: "products",
    weight: "placeholder",
    company: "SECCO",
    tone: "stone",
    media: { src: null, ratio: "4 / 5" },
  },
  {
    // [placeholder] sistema em desenvolvimento na SECCO.
    slug: "crm-textil",
    title: "CRM Têxtil",
    category: "products",
    weight: "placeholder",
    company: "SECCO",
    tone: "void",
    media: { src: null, ratio: "16 / 9" },
  },
  {
    // Bot de vendas e Jornada do Cliente são o mesmo ecossistema: um case.
    // Título provisório — renomear aqui (e em `cases.<slug>.title`).
    slug: "jornada-cliente",
    title: "Jornada do Cliente",
    category: "automations",
    weight: "full",
    company: "Virtron",
    repositoryVisibility: "private",
    tone: "stone",
    technologies: [
      { group: "backendData", items: ["Python 3.11", "Requests", "Pandas"] },
      { group: "crm", items: ["Ploomes API"] },
      { group: "dataLayer", items: ["Google Sheets", "gspread"] },
      { group: "dashboard", items: ["Looker Studio"] },
      { group: "ai", items: ["Claude Haiku", "Whisper (local)"] },
      { group: "interface", items: ["Telegram", "python-telegram-bot"] },
      { group: "infrastructure", items: ["Hostinger VPS", "Ubuntu", "systemd"] },
    ],
    media: { src: "/projects/jornada-cliente/hero.webp", ratio: "16 / 10" },
    images: [
      { id: "dashboard", src: "/projects/jornada-cliente/dashboard.webp", ratio: "16 / 10" },
      { id: "telegram-sale", src: "/projects/jornada-cliente/telegram-sale.webp", ratio: "4 / 5" },
      { id: "telegram-question", src: "/projects/jornada-cliente/telegram-question.webp", ratio: "4 / 5" },
      { id: "looker", src: "/projects/jornada-cliente/looker.webp", ratio: "16 / 10" },
      { id: "architecture", src: "/projects/jornada-cliente/architecture.webp", ratio: "16 / 9" },
    ],
  },
  {
    slug: "arena-sustentabilidade",
    title: "Arena da Sustentabilidade",
    category: "web",
    weight: "medium",
    company: "Virtron",
    year: "2026",
    tone: "void",
    technologies: [
      { group: "stack", items: ["HTML5", "CSS3", "JavaScript Vanilla", "Pillow"] },
    ],
    media: { src: "/projects/arena-sustentabilidade/hero.webp", ratio: "16 / 10" },
    images: [
      { id: "calculator", src: "/projects/arena-sustentabilidade/calculator.webp", ratio: "4 / 3" },
      { id: "carousel", src: "/projects/arena-sustentabilidade/carousel.webp", ratio: "4 / 3" },
      { id: "mobile", src: "/projects/arena-sustentabilidade/mobile.webp", ratio: "4 / 5" },
    ],
  },
  {
    slug: "relatorio-merger",
    title: "Relatório Merger",
    category: "automations",
    weight: "mini",
    company: "Virtron",
    repositoryVisibility: "private",
    tone: "mist",
    technologies: [{ group: "stack", items: ["Python", "Pandas", "OpenPyXL"] }],
    media: { src: null, ratio: "4 / 3" },
  },
  {
    // Agrupador: scripts e automações pequenas demais para virar case cada
    // uma. Na página, blocos curtos — sem inventar um projeto por script.
    slug: "automacoes-operacionais",
    title: "Automações do dia a dia",
    category: "automations",
    weight: "group",
    company: "Virtron",
    repositoryVisibility: "private",
    tone: "stone",
    media: { src: null, ratio: "16 / 9" },
  },
];

/** Número editorial derivado da posição — nunca precisa ser mantido à mão. */
export function categoryNumber(key: WorkCategoryKey) {
  return pad(workCategories.findIndex((category) => category.key === key) + 1);
}

export function casesIn(key: WorkCategoryKey) {
  return cases.filter((item) => item.category === key);
}

export function casesAt(company: string) {
  return cases.filter((item) => item.company === company);
}

export function findCase(slug: CaseKey) {
  return cases.find((item) => item.slug === slug);
}

/** O case seguinte na mesma categoria, ou `null` se ele estiver sozinho. */
export function nextCaseIn(item: WorkCase) {
  const siblings = casesIn(item.category);
  if (siblings.length < 2) return null;
  return siblings[(siblings.indexOf(item) + 1) % siblings.length];
}

export function pad(value: number) {
  return String(value).padStart(2, "0");
}

/* ---------------------------------------------------------------------------
   EXPERIÊNCIA
   Datas em "AAAA-MM": o mês é formatado por idioma (lib/dates.ts).
   ------------------------------------------------------------------------- */

export type ExperienceKey = "virtron" | "secco";

export type ExperienceEntry = {
  /** Também é o slug da rota: /experience/virtron. */
  key: ExperienceKey;
  /** Nome curto, o que vai em display. */
  company: string;
  /** Razão social ou nome completo, quando difere. */
  legalName?: string;
  from: string;
  /** `null` significa "até hoje" — o rótulo vem do dicionário. */
  to: string | null;
  /** Fotos da galeria. Imagens usadas em outro ponto da página ficam fora. */
  gallery: GalleryImage[];
};

export const experiences: ExperienceEntry[] = [
  {
    key: "virtron",
    company: "Virtron",
    legalName: "Virtron Energia Solar",
    from: "2025-03",
    to: null,
    gallery: [
      { id: "workstation-01", src: "/experience/virtron/workstation-01.webp", ratio: "4 / 3" },
      { id: "workstation-02", src: "/experience/virtron/workstation-02.webp", ratio: "4 / 3" },
    ],
  },
  {
    key: "secco",
    company: "SECCO",
    from: "2025-12",
    to: null,
    gallery: [
      { id: "team-01", src: "/experience/secco/team-01.webp", ratio: "4 / 3" },
      { id: "team-02", src: "/experience/secco/team-02.webp", ratio: "4 / 3" },
    ],
  },
];

/** Trajetória formal e marcos datados da Virtron (os textos estão nos dicionários). */
export const virtronStory = {
  /** Cargos oficiais — só estes. Nada de "gestor" ou "líder". */
  roles: [
    { key: "apprentice", date: "2025-03" },
    { key: "assistant", date: "2025-12" },
  ] as const,
  promotion: {
    date: "2025-12",
    images: [
      { id: "promotion", src: "/experience/virtron/promotion.webp", ratio: "4 / 5" },
      { id: "former-manager", src: "/experience/virtron/former-manager.webp", ratio: "4 / 5" },
    ] satisfies GalleryImage[],
  },
  /** Saída do gestor do setor: responsabilidades ampliadas, sem cargo novo. */
  broaderScope: "2026-02",
  /** Só nomes de produto — nenhum IP, porta, URL ou regra de rede. */
  infrastructure: ["Hostinger VPS", "Ubuntu", "CloudPanel"],
  /** Mini-case contado dentro da página. */
  firstTool: "relatorio-merger" as CaseKey,
};

/* ---------------------------------------------------------------------------
   TALKS, WORKSHOPS & MARCOS
   ------------------------------------------------------------------------- */

export type TalkKey =
  | "recnplay-python"
  | "recnplay-terminal"
  | "unifavip-empreendedorismo"
  | "bug-hunt";

export type Talk = {
  key: TalkKey;
  experience: ExperienceKey;
  /** Nome do evento: nome próprio, igual em todos os idiomas. */
  event: string;
  kind: "workshop" | "talk";
  /**
   * `upcoming`: ainda não aconteceu — texto sem passado e nenhuma prancha de
   * foto até o arquivo existir. Depois do evento, trocar para `done`.
   */
  status: "done" | "upcoming";
  media: MediaSlot;
  /** Quem dividiu o palco, só o primeiro nome. */
  with?: string[];
};

export const talks: Talk[] = [
  {
    key: "recnplay-python",
    experience: "secco",
    event: "REC'n'Play Caruaru",
    kind: "workshop",
    status: "done",
    media: { src: "/experience/secco/recnplay-python.webp", ratio: "4 / 3" },
  },
  {
    key: "recnplay-terminal",
    experience: "secco",
    event: "REC'n'Play Caruaru",
    kind: "workshop",
    status: "done",
    media: { src: "/experience/secco/recnplay-terminal.webp", ratio: "4 / 3" },
  },
  {
    key: "unifavip-empreendedorismo",
    experience: "secco",
    event: "UniFavip Wyden",
    kind: "talk",
    status: "done",
    with: ["Igor", "Gabriel", "Luan", "Juan"],
    media: { src: "/experience/secco/unifavip-empreendedorismo.webp", ratio: "16 / 10" },
  },
  {
    key: "bug-hunt",
    experience: "secco",
    event: "UniFavip Wyden",
    kind: "workshop",
    status: "upcoming",
    media: { src: "/experience/secco/bug-hunt.webp", ratio: "16 / 10" },
  },
];

export type MilestoneKey = "porto-digital" | "inova-caatinga" | "recnplay" | "global-pe";

export const milestones: {
  key: MilestoneKey;
  name: string;
  experience: ExperienceKey;
  /** `false` até a divulgação oficial: nem o nome vai para a página. */
  visible: boolean;
}[] = [
  { key: "porto-digital", name: "Porto Digital", experience: "secco", visible: true },
  { key: "inova-caatinga", name: "Inova Caatinga", experience: "secco", visible: true },
  { key: "recnplay", name: "REC'n'Play", experience: "secco", visible: true },
  { key: "global-pe", name: "Global PE", experience: "secco", visible: false },
];

/* ---------------------------------------------------------------------------
   BACKGROUND
   Os títulos de curso e o status são traduzidos (`background` nos
   dicionários); instituição, empresa, cargo e anos são dado.
   ------------------------------------------------------------------------- */

export const background: {
  yearsBuilding: string;
  technicalEducation: { institution: string; from: string; to: string };
  degree: { institution: string; from: string; to: string };
  /** O primeiro cargo vira a palavra grande; os outros, a legenda. */
  entrepreneurship: { company: string; roles: string[]; since: string };
} = {
  yearsBuilding: "04+",
  technicalEducation: {
    institution: "ETE Ministro Fernando Lyra",
    from: "2022",
    to: "2024",
  },
  degree: { institution: "UniFavip Wyden", from: "2025", to: "2028" },
  entrepreneurship: { company: "SECCO", roles: ["CPO", "Co-Founder"], since: "2025" },
};

export type SocialLink = {
  label: string;
  href: string;
};

export const socials: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/" }, // [placeholder]
  { label: "GitHub", href: "https://github.com/" }, // [placeholder]
  { label: "Instagram", href: "https://instagram.com/" }, // [placeholder]
];
