import type {
  CaseKey,
  ExperienceKey,
  MilestoneKey,
  StackGroupKey,
  TalkKey,
  WorkCategoryKey,
} from "@/data/portfolio";

/**
 * Português brasileiro — dicionário de referência.
 * O tipo `Dictionary` é derivado daqui: en.ts e es.ts precisam bater com ele.
 *
 * Não entram aqui: "Code by Sergio", o nome e os nomes próprios de projeto e
 * empresa — são identidade, iguais em todos os idiomas (src/data/portfolio.ts).
 */

type CategoryCopy = {
  /** Em linhas: o título é composto, não quebra ao acaso. */
  title: string[];
  description: string;
  /** Categoria sem trabalho publicado: o que vai morar ali, na prancha da home. */
  outline?: string[];
};

/**
 * Tudo opcional: um case pode nascer vazio e ganhar texto aos poucos. As
 * seções da página aparecem conforme o texto existe. `title` só para títulos
 * descritivos — nome próprio fica em portfolio.ts.
 */
type CaseCopy = {
  title?: string;
  /** Uma linha: legenda nos grids e descrição da página. */
  summary?: string;
  /** Rótulo curto impresso na superfície nos grids de experiência. */
  kicker?: string;
  /** Tipo e domínio — a metadata pequena do topo do case. */
  tags?: string[];
  /** A frase da hero, quando não é o próprio resumo. */
  headline?: string;
  context?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  /** Números aproximados: sempre com "~" ou "cerca de". */
  metrics?: { value: string; caption: string }[];
  metricsNote?: string;
  /** Legendas da galeria, pelo `id` da imagem em portfolio.ts. */
  captions?: Record<string, string>;
};

type ExperienceCopy = {
  /** Na linha da home: curto. */
  role: string;
  /** Papel na página da experiência, onde cabe mais que na linha da home. */
  pageRole?: string;
  /** Uma ou duas linhas: o teaser da home. */
  summary: string;
  headline: string[];
  /** Só para a página genérica (experiência sem narrativa própria). */
  journey?: string[];
  areas?: string[];
  /** Legendas das fotos, pelo `id` da imagem em portfolio.ts. */
  captions?: Record<string, string>;
};

const categories: Record<WorkCategoryKey, CategoryCopy> = {
  products: {
    title: ["Produtos &", "Sistemas"],
    description: "Produtos e sistemas, do primeiro commit à operação.",
  },
  automations: {
    title: ["Automações &", "Integrações"],
    description:
      "Automações internas, integrações com APIs, ferramentas operacionais e bots.",
  },
  web: {
    title: ["Web &", "Experiências digitais"],
    description:
      "Sites, landing pages e experiências digitais — próprios e para clientes.",
  },
  tools: {
    title: ["Experimentos &", "Tools"],
    description: "Ferramentas pessoais, scripts e projetos técnicos menores.",
    outline: ["Ferramentas pessoais", "Scripts", "Projetos técnicos"],
  },
};

const cases: Record<CaseKey, CaseCopy> = {
  "router-planner": {
    summary:
      "Da organização manual de rotas em Excel para uma operação integrada ao CRM.",
    kicker: "Sistema interno · Logística · Ploomes API",
    tags: ["Produto interno", "Logística"],
    captions: {
      "legacy-excel": "Processo anterior baseado em Excel",
      "route-selection": "Seleção das rotas dentro do Router Planner",
      export: "Arquivo gerado automaticamente para a operação",
      validation: "Verificações antes da operação",
    },
  },
  sentavos: {
    summary: "Produto próprio de finanças pessoais.",
    captions: { dashboard: "Orçamento do mês" },
  },
  geocarbo: {
    kicker: "Climate tech · dMRV · Carbono",
    tags: ["Climate tech", "dMRV", "Carbono"],
    captions: {
      dashboard: "Visão geral do monitoramento",
      "cadastro-propriedade": "Cadastro de propriedade para monitoramento",
      relatorios: "Relatórios gerados",
    },
  },
  "crm-textil": {
    kicker: "Sistema em desenvolvimento",
    tags: ["Sistema em desenvolvimento"],
  },
  "jornada-cliente": {
    summary:
      "Do export manual de todo mês a um BI comercial com notificações e perguntas em linguagem natural.",
    kicker: "BI comercial · Automação · Ploomes API",
    tags: ["BI comercial & automação", "Em produção"],
    captions: {
      "telegram-sale": "Notificação de nova venda no Telegram",
      "telegram-question": "Pergunta em linguagem natural ao bot",
      looker: "Painel no Looker Studio",
      architecture: "Arquitetura do pipeline",
    },
  },
  "arena-sustentabilidade": {
    summary:
      "Experiência digital da Arena da Sustentabilidade, no São João de Caruaru 2026.",
    kicker: "Experiência digital · São João de Caruaru 2026",
    tags: ["Experiência digital", "São João de Caruaru 2026"],
    captions: {
      calculator: "Calculadora de impacto de CO₂",
      experiences: "O que o visitante encontra na Arena",
      mobile: "Versão mobile",
    },
  },
  "relatorio-merger": {
    summary: "Mescla dois relatórios Excel usando o código interno do cliente.",
    kicker: "Ferramenta interna · Python",
    tags: ["Ferramenta interna", "Python"],
    headline:
      "Meu primeiro sistema interno começou com um problema simples: por que gastar uma hora fazendo algo que o código consegue resolver em poucos minutos?",
    context: "Uma das primeiras ferramentas que desenvolvi dentro da Virtron.",
    problem: "Dois relatórios Excel precisavam ser cruzados à mão.",
    solution:
      "Uma aplicação Python que mescla os dois relatórios usando o código interno do cliente como identificador.",
    impact: "A ferramenta continua em uso internamente.",
    metrics: [
      { value: "~1 h", caption: "Antes, a cada cruzamento" },
      { value: "~5 min", caption: "Depois, com a ferramenta" },
      { value: "~2×", caption: "Por semana" },
    ],
    metricsNote: "Números aproximados.",
  },
  "automacoes-operacionais": {
    summary: "Web scraping, automação de navegador, scripts e coleta de dados.",
    kicker: "Web scraping · Scripts",
    tags: ["Automação", "Scripts"],
  },
};

const experiences: Record<ExperienceKey, ExperienceCopy> = {
  virtron: {
    role: "Jovem Aprendiz → Assistente de T.I.",
    summary:
      "Entrei pelo suporte. Passei a construir sistemas, automações e infraestrutura para a operação.",
    headline: ["Comecei resolvendo chamados.", "Depois comecei resolvendo processos."],
    captions: {
      promotion: "Registro da promoção",
      start: "Estação de trabalho na Virtron",
      "former-manager": "Com o antigo gestor do setor",
      "workstation-01": "Desenvolvimento no dia a dia",
      "workstation-02": "Manutenção de hardware",
    },
  },
  secco: {
    role: "Co-Founder & CPO",
    pageRole: "Co-Founder · CPO · Developer",
    summary: "Ideias em produto. Tecnologia em solução.",
    headline: ["Ideias em produto.", "Tecnologia em solução."],
    captions: {
      "team-01": "Equipe SECCO",
      "talk-room": "Talk na UniFavip Wyden",
    },
  },
};

/**
 * Narrativas próprias: um case com história escreve aqui o texto dela, no
 * formato que a história pedir (src/components/cases/). Não há esquema
 * comum — cada projeto conta do seu jeito.
 */
const stories = {
  "router-planner": {
    headline: [
      "De um processo manual em planilhas",
      "para uma operação integrada ao CRM.",
    ],
    code: ["Projeto interno", "Código proprietário"],
    before: {
      title: "O processo anterior",
      lead: "Antes do Router Planner, as rotas eram organizadas à mão.",
      body: "A equipe partia dos clientes registrados no Ploomes e copiava cada registro para a aba da sua rota numa planilha Excel — toda semana.",
      metrics: [
        { value: "~40", caption: "Clientes em uma semana típica" },
        { value: "8+", caption: "Rotas normalmente organizadas" },
        {
          value: "1+ dia",
          caption: "Em cenários mais trabalhosos, da sexta ao sábado",
        },
      ],
      note: "Números aproximados.",
    },
    compare: {
      label: "Antes × Depois",
      before: "Antes",
      after: "Depois",
      beforeSteps: [
        "Ploomes",
        "Planilha",
        "Copiar clientes",
        "Separar manualmente por abas",
        "Conferir",
        "Imprimir",
        "Operação",
      ],
      afterSteps: [
        "Ploomes API",
        "Router Planner",
        "Selecionar rota",
        "Validar dados",
        "Gerar arquivo",
        "Operação",
      ],
      manual: "Manual",
      decision: "Decisão humana",
      quote: [
        "A principal decisão humana passa a ser:",
        "“Qual rota esse cliente deve seguir?”",
      ],
    },
    output: {
      statement: ["Excel como saída,", "não como sistema."],
      body: [
        "O Router Planner não tirou o Excel da operação por tirar. Tirou o trabalho manual de construir a planilha.",
        "O analista seleciona as rotas no sistema, e a aplicação gera o arquivo que a operação usa.",
      ],
      file: "O arquivo gerado",
      general: "Geral",
      route: "Rota",
      legend: [
        "Uma aba geral com todos os clientes processados.",
        "Uma aba por rota escolhida — cerca de oito ou mais, conforme as vendas e entregas da semana.",
      ],
    },
    data: {
      title: ["Não era apenas sobre", "fazer mais rápido."],
      subtitle: "Era sobre trabalhar com a informação certa.",
      body: "Na planilha antiga, o que mudava no CRM depois da preparação podia não chegar à logística: um endereço atualizado no Ploomes, por exemplo, ou um cliente que entrava no fluxo de cancelamento.",
      checks: [
        {
          title: "Alterações cadastrais",
          text: "O endereço que vale é o que está no Ploomes agora, não o da planilha da semana.",
        },
        {
          title: "Cancelamentos",
          text: "Clientes que entraram no fluxo de cancelamento são verificados antes da operação.",
        },
        {
          title: "Dados atualizados",
          text: "A consulta vai direto ao CRM, pela API, no momento de organizar as rotas.",
        },
      ],
    },
    flow: {
      title: "Fluxo do sistema",
      steps: [
        "Ploomes CRM",
        "API",
        "FastAPI",
        "Validações e regras",
        "Router Planner",
        "Organização das rotas",
        "Exportação Excel",
        "Logística",
      ],
    },
    result: {
      title: "Resultado",
      value: "~1–2h",
      caption:
        "Tempo aproximado, hoje, para organizar uma operação típica — depende da quantidade de clientes.",
      note: "Estimativa operacional, não benchmark.",
      before: {
        label: "Antes",
        text: "O processo podia começar na sexta-feira e avançar pelo sábado.",
      },
      after: {
        label: "Depois",
        text: "A organização pode ser concluída em cerca de uma ou duas horas.",
      },
      gains: [
        "Menos trabalho manual",
        "Dados conectados à fonte",
        "Validação de cancelamentos",
        "Exportação automática",
        "Menos dependência de planilhas estáticas",
      ],
    },
    role: {
      title: "Minha atuação",
      lead: "Concepção e desenvolvimento end-to-end da solução.",
      items: [
        "Entendimento do fluxo operacional",
        "Desenho da solução",
        "Desenvolvimento da aplicação",
        "Integração com o Ploomes",
        "Implementação das regras de validação",
        "Implantação da aplicação no ambiente da empresa",
      ],
    },
    stack: {
      title: "Ficha técnica",
      access: "Ambiente com controle de acesso gerenciado.",
    },
  },
  "jornada-cliente": {
    headline: [
      "De uma planilha exportada todo mês",
      "a um BI comercial que responde perguntas.",
    ],
    origin: {
      title: "O problema original",
      lead: "Começou com um processo manual.",
      body: "Todo mês, eu exportava do Ploomes uma planilha chamada “Jornada do Cliente”, com três abas — uma para cada SDR. Depois vinha o resto: organizar, mesclar e entregar os dados para a análise da diretoria.",
      steps: ["Exportar", "Organizar", "Mesclar", "Entregar"],
      goalLabel: "O objetivo inicial era simples",
      goal: [
        "Um link.",
        "Dados sempre atualizados.",
        "Sem download, sem merge, sem clique manual.",
      ],
    },
    pillars: {
      title: ["O projeto cresceu", "além da automação inicial."],
      items: [
        {
          title: "Pipeline de dados",
          steps: ["Ploomes", "Python", "Google Sheets", "Looker Studio"],
        },
        {
          title: "Notificações",
          steps: ["Bot no Telegram", "Novas vendas", "Resumo diário"],
        },
        {
          title: "BI conversacional",
          steps: [
            "Pergunta em texto ou áudio",
            "Interpretação",
            "Consulta ao Ploomes",
            "Agregação",
            "Resposta",
          ],
        },
      ],
    },
    pipeline: {
      title: "Pipeline de dados",
      lead: "Informação sempre atualizada, sem depender de exportação manual.",
      body: "O pipeline consulta o Ploomes, transforma e organiza os registros, remove duplicações relevantes e escreve o resultado em quatro estruturas no Google Sheets — que alimentam o dashboard no Looker Studio.",
      sheetsLabel: "No Google Sheets",
      // Nomes das estruturas: iguais nos três idiomas.
      sheets: ["SDR", "Vendas", "Cohort", "Cohort Long"],
    },
    notifications: {
      title: "Notificações",
      lead: "Time e diretoria atualizados sem precisar abrir o dashboard a toda hora.",
      items: [
        "Detecta novas vendas",
        "Consulta os dados direto na fonte",
        "Envia a notificação automaticamente",
        "Manda um resumo diário",
      ],
    },
    conversational: {
      title: "BI conversacional",
      lead: "Perguntas em português, por texto ou por áudio.",
      questions: [
        "Quantas vendas tivemos hoje?",
        "Quais vendedores venderam hoje?",
        "Qual foi o ticket médio deste mês?",
        "Compare este mês com os últimos três.",
      ],
      flowLabel: "Da pergunta à resposta",
      flow: [
        "Pergunta",
        "Parser determinístico",
        "Fallback LLM",
        "Intenção estruturada",
        "API Ploomes",
        "Filtros e agregação em Python",
        "Resposta determinística",
      ],
      fallbackMark: "Só quando necessário",
      statement: ["A IA interpreta.", "O código calcula."],
      explain:
        "O LLM só entra para entender a intenção quando o parser não resolve. Quem consulta, filtra, calcula e formata a resposta é o código — a arquitetura foi desenhada justamente para reduzir alucinação.",
      strategyLabel: "A estratégia",
      strategy: [
        "Perguntas simples são resolvidas primeiro por um parser determinístico.",
        "Só quando necessário, o Claude Haiku transforma a pergunta em uma intenção estruturada.",
        "Regras normalizam os casos ambíguos, e o contexto da conversa pode ser reaproveitado.",
        "A API fornece os dados, o Python calcula, e a resposta é montada de forma determinística.",
      ],
      gainsLabel: "O que isso permite",
      gains: [
        "Menor custo",
        "Mais previsibilidade",
        "Menos alucinação",
        "Respostas mais exatas",
        "Follow-ups na conversa",
      ],
      followUpsLabel: "Follow-ups",
      followUps: ["E ontem?", "E por vendedor?", "E nessas cidades?"],
    },
    audio: {
      title: "Áudio",
      value: "~60 s",
      text: "Áudios de até cerca de 60 segundos são transcritos localmente com Whisper e entram no mesmo pipeline de BI.",
    },
    coverage: {
      title: "O que dá para perguntar",
      metricsLabel: "Métricas",
      metrics: [
        "Quantidade de vendas",
        "Valor vendido",
        "Ticket médio",
        "R$/kWp",
        "Leads novos",
        "Negócios perdidos",
      ],
      filtersLabel: "Filtros e agrupamentos",
      filters: [
        "Vendedor",
        "Cidade",
        "Origem",
        "Forma de pagamento",
        "Banco",
        "Período",
      ],
      note: "Com rankings e comparações entre períodos.",
    },
    impact: {
      title: "Impacto",
      items: [
        "Sem export manual recorrente",
        "Sem merge manual das abas",
        "Painel atualizado automaticamente",
        "Uma fonte consolidada para análise",
        "Notificações automáticas de vendas",
        "Acesso rápido às informações comerciais",
        "Perguntas em linguagem natural",
        "Menos dashboards abertos para consultas simples",
      ],
    },
    stack: {
      title: "Ficha técnica",
      status: "Em produção, com partes ainda em evolução.",
    },
  },
  "arena-sustentabilidade": {
    headline: ["Uma experiência digital para", "o São João de Caruaru 2026."],
    context: {
      title: "Contexto",
      text: "A Arena da Sustentabilidade fazia parte da programação oficial do São João de Caruaru 2026 e abordava sustentabilidade e geração de energia. A experiência digital foi desenvolvida para essa ativação.",
    },
    calculator: {
      title: "Calculadora de impacto de CO₂",
      lead: "O principal recurso: estimar a emissão de uma operação e quantas árvores seriam necessárias para compensá-la.",
      inputsLabel: "O usuário informa",
      inputs: ["Dias", "Consumo / geradores", "Equipe", "Deslocamento"],
      outputsLabel: "A interface calcula",
      outputs: ["Emissão aproximada", "Árvores para compensação"],
    },
    optimization: {
      title: "Otimização",
      before: "~44 MB",
      after: "~2 MB",
      caption: "Imagens do carrossel, sem perda visual perceptível.",
    },
    highlights: {
      title: "Destaques",
      items: [
        "Carrossel de fotos",
        "Layout responsivo",
        "Animações leves",
        "Aplicação 100% estática",
        "HTML, CSS e JavaScript puros",
      ],
    },
    stack: { title: "Ficha técnica" },
  },
  "automacoes-operacionais": {
    headline: ["Nem todo problema precisa", "virar um grande sistema."],
    lead: "Scripts e automações pequenas, feitas para tirar trabalho repetitivo do caminho.",
    blocksLabel: "O que entra aqui",
    blocks: [
      "Web scraping",
      "Automação de navegador",
      "Scripts",
      "Coleta de dados",
      "Tarefas repetitivas eliminadas por código",
    ],
  },
};

type TalkCopy = { title: string; subtitle?: string; text?: string };

const talkCopy: Record<TalkKey, TalkCopy> = {
  "recnplay-python": {
    title: "Python, Automações e Integrações",
    subtitle: "Conectando sistemas com poucas linhas de código",
  },
  "recnplay-terminal": {
    title: "O Terminal Moderno",
    subtitle: "Produtividade para Desenvolvedores",
  },
  "unifavip-empreendedorismo": {
    title: "Da Faculdade até o Empreendedorismo",
    text: "Uma conversa sobre a transição entre faculdade, construção de projetos, primeiros desafios e o processo de transformar uma ideia em empresa.",
  },
  "bug-hunt": {
    title: "Bug Hunt & Code Review",
    subtitle: "Aprendendo com o Código do Mundo Real",
    text: "Uma oficina prática sobre análise de código, identificação de falhas e correção de problemas próximos da realidade de software em produção.",
  },
};

/** Marco oculto (`visible: false`) também precisa de texto aqui, mas não é exibido. */
const milestoneCopy: Record<MilestoneKey, string> = {
  "porto-digital": "Incubação e conexão com o ecossistema",
  "inova-caatinga": "Participação e desenvolvimento ligados ao GeoCarbo",
  recnplay: "Oficinas e presença na comunidade",
  "global-pe": "Em breve",
};

/**
 * Narrativas das experiências (src/components/experiences/). Como nos cases,
 * cada uma no formato que a história pedir.
 */
const experienceStories = {
  virtron: {
    intro: {
      title: "Minha trajetória",
      lead: "Entrei como Jovem Aprendiz e comecei pelo fundamento: hardware, suporte, redes e operação. Com o tempo, passei a construir sistemas, automações e integrações para resolver problemas reais da empresa.",
      rolesLabel: "Trajetória formal",
      roles: { apprentice: "Jovem Aprendiz", assistant: "Assistente de T.I." },
      evolutionLabel: "Como o trabalho foi mudando",
      evolution: [
        "Aprender",
        "Entender a operação",
        "Identificar problemas",
        "Construir soluções",
        "Colocar em produção",
        "Manter",
      ],
    },
    start: {
      title: "O começo",
      quote:
        "Nos primeiros meses, muita coisa era literalmente a primeira vez: abrir um notebook, diagnosticar hardware, trabalhar com infraestrutura de rede e entender como funciona a tecnologia dentro de uma empresa real.",
      fundamentalsLabel: "Fundamentos",
      fundamentals: [
        "Suporte técnico",
        "Hardware e manutenção",
        "Infraestrutura de rede",
        "Ploomes",
      ],
      ploomes:
        "O Ploomes é o principal CRM da empresa. Estudá-lo a fundo nessa fase foi o que depois permitiu construir sistemas e integrações sobre a API dele.",
    },
    firstTool: {
      label: "Primeira ferramenta",
      cta: "Ver o mini-case",
    },
    promotion: {
      title: ["De Jovem Aprendiz", "a Assistente de T.I."],
    },
    broaderScope: {
      title: "Responsabilidades ampliadas",
      text: "Com a saída do gestor do setor, passei a assumir uma parcela maior das responsabilidades técnicas e operacionais da área.",
      todayLabel: "Hoje",
      today:
        "Sigo diretamente envolvido na infraestrutura, nos sistemas, nas automações e nas aplicações que construí e mantenho.",
    },
    infrastructure: {
      title: "Do código à infraestrutura",
      statement: ["Construir também significa", "colocar no ar", "e manter funcionando."],
      text: "Fui responsável pela implantação da VPS usada pelas aplicações internas — da contratação à manutenção.",
      steps: [
        "Contratação da VPS",
        "Provisionamento inicial",
        "Configuração",
        "Deploy das aplicações",
        "Manutenção contínua",
        "Suporte aos sistemas hospedados",
      ],
      stackLabel: "Infraestrutura",
      // Versão pública: sem provedor nem painel.
      stack: ["VPS Linux", "Deploy", "Administração de serviços", "Manutenção"],
    },
    closing: {
      statement: ["Meu primeiro emprego", "também foi meu primeiro", "grande laboratório."],
      text: "Em menos de dois anos, passei por suporte, hardware, redes, infraestrutura, automação, desenvolvimento e integrações. Nem sempre foi simples. Talvez justamente por isso tenha sido onde mais amadureci profissionalmente.",
    },
  },
  secco: {
    about: {
      title: "O que é a SECCO",
      text: "A SECCO é uma empresa de tecnologia focada na criação de produtos digitais, sistemas e soluções de software para problemas reais.",
      quote:
        "É onde transformamos ideias em produtos, tecnologia em solução e ambição em coisa construída.",
    },
    role: {
      title: "Minha atuação",
      dimensions: [
        { title: "Produto", items: ["Priorização", "Estrutura", "Decisões de produto"] },
        {
          title: "Tecnologia",
          items: ["Backend", "Arquitetura", "Integrações", "Deploy", "Infraestrutura"],
        },
        { title: "Construção", items: ["Tirar ideias do papel", "e transformar em sistemas"] },
        { title: "Empresa", items: ["Participação na evolução", "e na construção da SECCO"] },
      ],
    },
    built: { title: "O que construímos" },
    talks: {
      title: ["Talks, workshops", "& community"],
      kinds: { workshop: "Oficina", talk: "Talk" },
      upcoming: "Em breve",
      /** `{names}` vira a lista de nomes, com a conjunção do idioma. */
      with: "Com {names}, da SECCO.",
      items: talkCopy,
    },
    milestones: {
      title: "Marcos",
      items: milestoneCopy,
    },
  },
};

const stackGroups: Record<StackGroupKey, string> = {
  backend: "Backend",
  backendData: "Backend / Dados",
  integration: "Integração",
  crm: "CRM",
  data: "Dados & exportação",
  dataLayer: "Camada de dados",
  dashboard: "Dashboard",
  ai: "IA / NLP",
  frontend: "Frontend",
  interface: "Interface",
  infrastructure: "Infraestrutura",
  stack: "Stack",
};

const pt = {
  meta: {
    title: "Sergio Barbosa — Criador & Desenvolvedor",
    description:
      "Criador e desenvolvedor construindo produtos, sistemas e automações.",
  },
  nav: {
    work: "Trabalhos",
    experience: "Experiência",
    about: "Sobre",
    contact: "Contato",
    menu: "Menu",
    open: "Abrir menu",
    close: "Fechar menu",
    main: "Navegação principal",
    language: "Idioma",
    social: "Redes",
    skip: "Pular para o conteúdo",
    home: "Sergio Barbosa — início",
  },
  hero: {
    role: ["Criador,", "Desenvolvedor."],
    tagline: ["Produtos, sistemas e automações", "entre código, produto e negócio."],
  },
  work: {
    title: "Trabalhos",
    note: "Coisas que construí: produtos, sistemas, automações e sites — boa parte em código proprietário.",
    cursor: "Ver",
    count: { one: "trabalho", other: "trabalhos" },
    soon: "Em breve",
    empty: "Os primeiros trabalhos desta categoria entram em breve.",
    caseSoon: "Case em construção",
    back: "Voltar aos trabalhos",
    next: "Próxima categoria",
  },
  categories,
  cases,
  stories,
  caseStudy: {
    company: "Empresa",
    year: "Ano",
    category: "Categoria",
    stack: "Tecnologias",
    problem: "Problema",
    solution: "Solução",
    impact: "Impacto",
    live: "Ver online",
    linkedin: "Post no LinkedIn",
    repository: "Repositório",
    context: "Contexto",
    internal: "Projeto interno",
    privateCode: "Código proprietário",
    figure: "Fig.",
    stackGroups,
    pending: "Contexto, processo e resultado entram em breve.",
    gallery: "Galeria",
    back: "Voltar à categoria",
    next: "Próximo case",
  },
  experience: {
    title: "Experiência",
    now: "Hoje",
    journey: "Minha trajetória",
    areas: "Áreas de atuação",
    built: "Coisas que construí",
    gallery: "Galeria",
    writing: "Capítulo em escrita.",
    builtEmpty: "Os cases desta experiência entram em breve.",
    galleryEmpty: "Fotos e screenshots em breve.",
    back: "Voltar à experiência",
    next: "Próxima experiência",
  },
  experiences,
  experienceStories,
  background: {
    title: "Background",
    since: "Desde",
    technology: "Aprendendo e construindo com tecnologia",
    technical: {
      value: "Técnico",
      title: "Análise e Desenvolvimento de Sistemas",
    },
    degree: {
      value: "B.Sc.",
      title: "Ciência da Computação",
      status: "Em andamento",
    },
  },
  secco: {
    discipline: "Software & Tecnologia",
    role: ["Co-Founder", "& CPO"],
    products: "Produtos",
    cta: "Conhecer",
  },
  about: {
    label: "Sobre",
    headline: ["Construo coisas", "que funcionam."],
    statement:
      "Do primeiro commit até a operação: interface, sistema, automação e o negócio em volta.",
    portraitAlt: "Sergio Barbosa trabalhando",
  },
  contact: {
    label: "Contato",
    headline: ["Vamos trabalhar", "juntos."],
    cta: "Fale comigo",
    note: "Aberto a produtos, parcerias e problemas difíceis.",
    emailLabel: "E-mail",
    location: "Caruaru, Brasil",
  },
  notFound: {
    title: "Página não encontrada",
    back: "Voltar ao início",
  },
};

export default pt;

export type Dictionary = typeof pt;
