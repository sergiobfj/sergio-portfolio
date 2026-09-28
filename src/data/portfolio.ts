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
  /** Ponto focal quando o recorte corta a imagem (object-position, ex.: "50% 20%"). */
  position?: string;
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
  email: "contato.sergiobfj@gmail.com",
};

export const aboutPortrait: MediaSlot = {
  src: "/images/foto-principal-sergio.jpg",
  ratio: "4 / 5",
  position: "50% 12%",
};

/* ---------------------------------------------------------------------------
   TRABALHOS
   Trabalho é o que foi construído, não um repositório. A home mostra quatro
   categorias; cada uma tem sua página (/work/<categoria>) e cada case a sua
   (/work/<case>).
   ------------------------------------------------------------------------- */

export type WorkCategoryKey = "products" | "automations" | "web" | "tools";

/**
 * Um print na prévia de uma categoria. Posição e tamanho em % da prancha,
 * então a composição escala junto do bloco em qualquer largura.
 */
export type PreviewShot = {
  src: string;
  /** Proporção da caixa. Menor que a do arquivo, o print é recortado (sem distorcer). */
  ratio: string;
  /** Ponto focal do recorte (object-position). */
  position?: string;
  /** Distância da esquerda. */
  x: number;
  /** Principal: distância do topo (abaixo dos rótulos). */
  y?: number;
  /** Recorte: distância da base. */
  bottom?: number;
  /** Largura. A principal, sem `w`, sangra pela direita. */
  w?: number;
};

/**
 * A prévia de uma categoria com os prints dos próprios projetos: uma imagem
 * principal, que sangra pela borda, e um recorte menor na frente. Poucos
 * elementos fortes — nunca mosaico.
 */
export type CategoryPreview = {
  main: PreviewShot;
  inset?: PreviewShot;
};

export type WorkCategory = {
  /** Também é o slug da rota: /work/products. */
  key: WorkCategoryKey;
  tone: SurfaceTone;
  /** Proporção do bloco no celular (no desktop, a altura vem do par). */
  media: MediaSlot;
  /** Sem prévia (categoria sem prints), o bloco lista o que vai morar ali. */
  preview?: CategoryPreview;
};

/** Ordem = ordem na home e numeração (01–04). Blocos em pares 7/5 · 5/7. */
export const workCategories: WorkCategory[] = [
  {
    key: "products",
    tone: "void",
    media: { src: null, ratio: "4 / 3" },
    // O sistema interno (tabela com os dados tarjados) e o produto próprio.
    preview: {
      main: { src: "/projects/router-planner/tela-principal.png", ratio: "1274 / 636", x: 30, y: 21 },
      inset: { src: "/projects/sentavos/tela-principal.png", ratio: "1339 / 646", x: 5, bottom: 8, w: 50 },
    },
  },
  {
    key: "automations",
    tone: "mist",
    // Quadrado também no celular: o chat é retrato e não pode perder as bordas.
    media: { src: null, ratio: "1 / 1" },
    // A pergunta ao bot e a notificação que ele dispara.
    preview: {
      main: {
        src: "/projects/jornada-cliente/telegram-pergunta.jpg",
        ratio: "3 / 4",
        position: "50% 0%",
        x: 30,
        y: 19,
        w: 64,
      },
      // Recorte do print da notificação: só o card, sem a tela de bloqueio.
      inset: {
        src: "/projects/jornada-cliente/telegram-nova-venda-card.png",
        ratio: "734 / 423",
        x: 5,
        bottom: 8,
        w: 58,
      },
    },
  },
  {
    key: "web",
    tone: "stone",
    media: { src: null, ratio: "4 / 5" },
    // O site público: o carrossel da Arena e a calculadora de CO₂.
    preview: {
      main: { src: "/projects/arena-sustentabilidade/tela-principal.png", ratio: "1342 / 767", x: 16, y: 19 },
      // Recorte da calculadora: o título e os parâmetros, sem as margens.
      inset: {
        src: "/projects/arena-sustentabilidade/calculadora-co2-recorte.png",
        ratio: "800 / 422",
        x: 6,
        bottom: 8,
        w: 60,
      },
    },
  },
  {
    key: "tools",
    tone: "mist",
    media: { src: null, ratio: "4 / 3" },
    // A ferramenta em uso: a janela do Merger e os arquivos que ela cruza.
    preview: {
      main: {
        src: "/projects/relatorio-merger/quadro-demonstracao.png",
        ratio: "680 / 652",
        position: "50% 14%",
        x: 30,
        y: 19,
        w: 62,
      },
    },
  },
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
  | "bot-de-vendas"
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
      { group: "infrastructure", items: ["VPS Linux"] },
    ],
    // Prints com nomes, códigos, cidades e observações tarjados.
    media: { src: "/projects/router-planner/tela-principal.png", ratio: "1274 / 636", position: "left top" },
    // Par de abertura: a planilha de antes e o arquivo que o sistema gera.
    images: [
      { id: "legacy-excel", src: "/projects/router-planner/planilha-antiga.png", ratio: "4 / 3" },
      { id: "export", src: "/projects/router-planner/exportacao-final.png", ratio: "4 / 3" },
      { id: "route-selection", src: "/projects/router-planner/selecao-de-rotas.png", ratio: "1246 / 632" },
      { id: "validation", src: "/projects/router-planner/validacoes.png", ratio: "1284 / 626" },
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
    // Dados de demonstração, sem conta real.
    media: { src: "/projects/sentavos/tela-principal.png", ratio: "1339 / 646", position: "left top" },
    images: [{ id: "dashboard", src: "/projects/sentavos/dashboard.png", ratio: "1218 / 632" }],
  },
  {
    // [placeholder] case futuro da SECCO: ano, stack, links e imagens.
    slug: "geocarbo",
    title: "GeoCarbo",
    category: "products",
    weight: "placeholder",
    company: "SECCO",
    tone: "stone",
    // Nome da fazenda e município tarjados; o mapa de satélite ficou de fora.
    media: { src: "/projects/geocarbo/tela-principal.png", ratio: "1343 / 643", position: "left center" },
    images: [
      { id: "dashboard", src: "/projects/geocarbo/dashboard.png", ratio: "1334 / 575" },
      { id: "cadastro-propriedade", src: "/projects/geocarbo/cadastro-propriedade.png", ratio: "1302 / 764" },
      { id: "relatorios", src: "/projects/geocarbo/relatorios.png", ratio: "1342 / 756" },
    ],
  },
  {
    // O bot de vendas e o BI comercial são o mesmo ecossistema: um case.
    // Antes "Jornada do Cliente" (o nome da planilha de origem); a URL antiga
    // redireciona (next.config.ts). As imagens seguem em /projects/jornada-cliente/.
    slug: "bot-de-vendas",
    title: "Bot de Vendas",
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
    media: { src: "/projects/jornada-cliente/bancada-desenvolvimento.jpg", ratio: "3 / 2" },
    images: [
      { id: "telegram-sale", src: "/projects/jornada-cliente/telegram-nova-venda.jpg", ratio: "792 / 640" },
      { id: "telegram-question", src: "/projects/jornada-cliente/telegram-pergunta.jpg", ratio: "3 / 4" },
      { id: "looker", src: "/projects/jornada-cliente/dashboard-looker.png", ratio: "16 / 10" },
      { id: "architecture", src: "/projects/jornada-cliente/arquitetura.png", ratio: "16 / 9" },
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
    media: { src: "/projects/arena-sustentabilidade/tela-principal.png", ratio: "1342 / 767" },
    images: [
      { id: "calculator", src: "/projects/arena-sustentabilidade/calculadora-co2.png", ratio: "1020 / 758" },
      { id: "experiences", src: "/projects/arena-sustentabilidade/experiencias.png", ratio: "1017 / 763" },
      { id: "mobile", src: "/projects/arena-sustentabilidade/versao-mobile.png", ratio: "4 / 5" },
    ],
  },
  {
    slug: "relatorio-merger",
    title: "Relatório Merger",
    category: "tools",
    weight: "mini",
    company: "Virtron",
    repositoryVisibility: "private",
    tone: "mist",
    technologies: [{ group: "stack", items: ["Python", "Pandas", "OpenPyXL"] }],
    // Quadro do vídeo de demonstração: a janela e os arquivos de entrada e saída.
    media: { src: "/projects/relatorio-merger/quadro-demonstracao.png", ratio: "680 / 652" },
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

/**
 * O exemplo concreto do agrupador "Automações do dia a dia": a atualização
 * dos painéis das TVs internas, publicada no LinkedIn com o código
 * sanitizado no GitHub. Os textos estão em `stories["automacoes-operacionais"].featured`.
 */
export const automationsFeatured = {
  stack: ["Python", "Selenium", "PyAutoGUI"],
  linkedinPost:
    "https://www.linkedin.com/posts/sergio-barbosa-03195133b_automatizei-a-atualiza%C3%A7%C3%A3o-de-pain%C3%A9is-exibidos-activity-7421956485372477441-Kld3",
  repository: "https://github.com/sergiobfj/automacaoTV",
};

/**
 * Trabalho ainda não divulgado: só o nome, discreto, com "Em breve" — sem
 * página, sem prancha, fora das contagens. Vira case quando for publicado.
 */
export type UpcomingWork = { key: CaseKey; title: string; company: string };

export const upcoming: UpcomingWork[] = [
  { key: "crm-textil", title: "CRM Têxtil", company: "SECCO" },
];

export function upcomingAt(company: string) {
  return upcoming.filter((item) => item.company === company);
}

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

/**
 * Marca da empresa, monocromática nos tons do site (public/logos/): a forma
 * é a original, só o tom muda. `onLight` é a escura; `onDark`, a branca.
 */
export type BrandLogo = {
  onLight: string;
  onDark: string;
  /** Dimensões do arquivo: dão a proporção. */
  width: number;
  height: number;
  /**
   * Altura relativa. Um símbolo quase quadrado precisa de mais altura que um
   * logotipo largo para pesar o mesmo ao lado dele.
   */
  scale?: number;
};

export type ExperienceEntry = {
  /** Também é o slug da rota: /experience/virtron. */
  key: ExperienceKey;
  /** Nome curto, o que vai em display. */
  company: string;
  /** Razão social ou nome completo, quando difere. */
  legalName?: string;
  logo?: BrandLogo;
  /** Só o símbolo (sem o letreiro): marca a linha da experiência na home. */
  symbol?: BrandLogo;
  /** Site oficial da empresa. */
  website?: string;
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
    logo: {
      onLight: "/logos/virtron-escura.png",
      onDark: "/logos/virtron-branca.png",
      // 4× a partir do original (225 px): borda reconstruída, forma intacta.
      width: 900,
      height: 272,
    },
    // O hexágono, recortado do próprio logo.
    symbol: {
      onLight: "/logos/virtron-simbolo-escura.png",
      onDark: "/logos/virtron-simbolo-branca.png",
      width: 242,
      height: 262,
    },
    from: "2025-03",
    to: null,
    gallery: [
      { id: "workstation-01", src: "/experience/virtron/trabalhando-virtron-01.jpg", ratio: "1288 / 966" },
      { id: "workstation-02", src: "/experience/virtron/trabalhando-virtron-02.jpg", ratio: "3 / 4" },
    ],
  },
  {
    key: "secco",
    company: "SECCO",
    logo: {
      onLight: "/logos/secco-escura.svg",
      onDark: "/logos/secco-branca.svg",
      width: 183,
      height: 223,
      scale: 1.3,
    },
    symbol: {
      onLight: "/logos/secco-escura.svg",
      onDark: "/logos/secco-branca.svg",
      width: 183,
      height: 223,
    },
    website: "https://www.seccolab.com.br",
    from: "2025-12",
    to: null,
    // A foto da equipe abre a página (ao lado da frase); a galeria fica com o evento.
    gallery: [
      { id: "talk-room", src: "/experience/secco/unifavip-talk-sala.jpg", ratio: "1600 / 1066" },
      { id: "poster", src: "/experience/secco/cartaz-semana-de-ti.jpg", ratio: "1080 / 1350" },
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
      { id: "promotion", src: "/experience/virtron/promocao-assistente-ti.jpg", ratio: "738 / 554" },
      { id: "former-manager", src: "/experience/virtron/foto-com-antigo-gestor.jpg", ratio: "4 / 3" },
    ] satisfies GalleryImage[],
  },
  /** Saída do gestor do setor: responsabilidades ampliadas, sem cargo novo. */
  broaderScope: "2026-02",
  /** Mini-case contado dentro da página. */
  firstTool: "relatorio-merger" as CaseKey,
  /** "O começo": a estação de trabalho do suporte. */
  startPhoto: { src: "/experience/virtron/estacao-de-trabalho.jpg", ratio: "9 / 16" } satisfies MediaSlot,
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

/** A equipe, na abertura da página da SECCO. */
export const seccoTeam = {
  id: "team-01",
  src: "/experience/secco/equipe-secco-01.jpg",
  ratio: "1667 / 1111",
} satisfies GalleryImage;

export const talks: Talk[] = [
  {
    key: "recnplay-python",
    experience: "secco",
    event: "REC'n'Play Caruaru",
    kind: "workshop",
    status: "done",
    // 5:4 com o foco em quem fala: a foto inteira em pé tomava a tela.
    media: { src: "/experience/secco/recnplay-oficina-python.jpg", ratio: "5 / 4", position: "50% 86%" },
  },
  {
    key: "recnplay-terminal",
    experience: "secco",
    event: "REC'n'Play Caruaru",
    kind: "workshop",
    status: "done",
    media: { src: "/experience/secco/recnplay-oficina-terminal.jpg", ratio: "5 / 4", position: "50% 74%" },
  },
  {
    key: "unifavip-empreendedorismo",
    experience: "secco",
    event: "UniFavip Wyden",
    kind: "talk",
    status: "done",
    with: ["Igor", "Gabriel", "Luan", "Juan"],
    media: { src: "/experience/secco/unifavip-talk-empreendedorismo.jpg", ratio: "16 / 10", position: "50% 40%" },
  },
  {
    key: "bug-hunt",
    experience: "secco",
    event: "UniFavip Wyden",
    kind: "workshop",
    status: "upcoming",
    // Ainda não aconteceu: sem foto até existir uma real.
    media: { src: "/experience/secco/bug-hunt.jpg", ratio: "4 / 3" },
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
  /** Início da trajetória em tecnologia (curso de Informática Básica), não de experiência profissional. */
  techSince: string;
  technicalEducation: { institution: string; from: string; to: string };
  degree: { institution: string; from: string; to: string };
  /** O primeiro cargo vira a palavra grande; os outros, a legenda. */
  entrepreneurship: { company: string; roles: string[]; since: string };
} = {
  techSince: "2020",
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sergio-barbosa-03195133b" },
  { label: "GitHub", href: "https://github.com/sergiobfj" },
  { label: "Instagram", href: "https://www.instagram.com/sergiobfj.dev/" },
];
