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
  /** Legendas das figuras, pelo `id` da imagem em portfolio.ts. */
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
    description:
      "Ferramentas internas, scripts e experimentos técnicos: soluções pequenas para problemas específicos.",
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
    summary: "Finanças pessoais sem contar o mesmo dinheiro duas vezes.",
    tags: ["Produto próprio", "Finanças pessoais"],
    captions: {
      "card-purchase": "Lançamento no cartão, com parcelamento",
      budget: "Orçamento do mês: o gasto contra a meta de cada categoria",
      invoice: "Detalhe de uma fatura",
      review: "Tela de revisão",
      wealth: "Patrimônio e investimentos",
    },
  },
  geocarbo: {
    summary: "Estimativa de carbono da Caatinga por satélite, com método declarado.",
    kicker: "Climate tech · Carbono · MVP",
    tags: ["Climate tech", "Carbono"],
    captions: {
      map: "O polígono da propriedade",
      analysis: "Detalhe de uma análise",
      registration: "Cadastro da propriedade",
      reports: "Relatórios concluídos, com o PDF para download",
      pdf: "O relatório em PDF, com método, fontes e ressalvas",
    },
  },
  "crm-textil": {
    kicker: "Sistema em desenvolvimento",
    tags: ["Sistema em desenvolvimento"],
  },
  "bot-de-vendas": {
    summary:
      "BI conversacional com notificações e perguntas em linguagem natural, direto do CRM.",
    kicker: "BI Conversacional · Virtron",
    tags: ["BI Conversacional", "Em produção"],
    captions: {
      "telegram-sale": "Notificação de nova venda no Telegram",
    },
  },
  "arena-sustentabilidade": {
    summary:
      "Experiência digital da Arena da Sustentabilidade, no São João de Caruaru 2026.",
    kicker: "Experiência digital · São João de Caruaru 2026",
    tags: ["Experiência digital", "São João de Caruaru 2026"],
    captions: {
      experiences: "O que o visitante encontra na Arena",
      calculator: "Calculadora de impacto de CO₂",
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
    summary:
      "Scripts da operação real: painéis que se atualizam sozinhos, coleta de dados e automação de navegador.",
    kicker: "Scripts · Automação de navegador",
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
    },
  },
  secco: {
    role: "Co-Founder & CPO",
    pageRole: "Co-Founder · CPO · Developer",
    summary: "Ideias em produto. Tecnologia em solução.",
    headline: ["Ideias em produto.", "Tecnologia em solução."],
    captions: {
      "team-01": "Equipe SECCO",
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
      body: "Toda semana, cada cliente do Ploomes era copiado para a aba da sua rota numa planilha Excel.",
      metrics: [
        { value: "~40", caption: "Clientes em uma semana típica" },
        { value: "8+", caption: "Rotas normalmente organizadas" },
        { value: "1+ dia", caption: "Nas semanas mais pesadas, da sexta ao sábado" },
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
        "Separar por abas",
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
      lead: "O Excel continua na operação. O que saiu foi o trabalho manual de montá-lo.",
      file: "O arquivo gerado",
      general: "Geral",
      route: "Rota",
      legend: [
        "Uma aba geral, com todos os clientes.",
        "Uma aba por rota — cerca de oito ou mais por semana.",
      ],
    },
    data: {
      title: ["Não era apenas sobre", "fazer mais rápido."],
      subtitle: "Era sobre trabalhar com a informação certa.",
      checks: [
        {
          title: "Alterações cadastrais",
          text: "Vale o endereço que está no Ploomes agora, não o da planilha.",
        },
        {
          title: "Cancelamentos",
          text: "Quem entrou no fluxo de cancelamento é verificado antes da operação.",
        },
        {
          title: "Dados atualizados",
          text: "A consulta vai direto ao CRM, pela API, na hora de organizar.",
        },
      ],
    },
    flow: {
      title: "Fluxo do sistema",
      steps: [
        { label: "Ploomes CRM", note: "A fonte dos clientes" },
        { label: "API", note: "Consulta na hora de organizar" },
        { label: "Router Planner", note: "FastAPI, validações e regras" },
        { label: "Exportação Excel", note: "Aba geral e uma por rota" },
        { label: "Logística", note: "A operação" },
      ],
    },
    result: {
      title: "Resultado",
      value: "~1–2h",
      caption:
        "Tempo aproximado, hoje, para organizar uma operação típica — depende da quantidade de clientes. Antes, podia ir da sexta ao sábado.",
      note: "Estimativa operacional, não benchmark.",
      gains: [
        "Menos trabalho manual",
        "Dados conectados à fonte",
        "Validação antes da operação",
        "Exportação automática",
      ],
    },
    role: {
      title: "Minha atuação",
      lead: "Concepção e desenvolvimento end‑to‑end.",
      items: [
        "Entendimento do fluxo",
        "Desenho da solução",
        "Desenvolvimento",
        "Integração com o Ploomes",
        "Regras de validação",
        "Implantação",
      ],
    },
    stack: {
      title: "Ficha técnica",
      access: "Ambiente com controle de acesso gerenciado",
    },
  },
  "bot-de-vendas": {
    headline: [
      "Pergunte sobre a operação.",
      "Receba a resposta direto do CRM.",
    ],
    problem: {
      title: "O problema",
      lead: "Os dados comerciais já estavam no Ploomes. Mas cada consulta rápida exigia abrir o CRM, filtrar e interpretar à mão.",
      body: "Nascido da automação da Jornada do Cliente, o Bot de Vendas levou essa consulta para uma conversa no Telegram.",
    },
    layers: {
      title: "Como funciona",
      lead: "Uma fonte, duas camadas.",
      items: [
        {
          title: "Direto do CRM",
          text: "Notificações e BI conversacional consultam o Ploomes diretamente.",
          steps: ["Ploomes API", "Python", "Telegram"],
        },
        {
          title: "Camada paralela",
          text: "O ETL que alimenta o dashboard executivo e as análises históricas.",
          steps: ["Ploomes", "ETL em Python", "Google Sheets", "Looker Studio"],
        },
      ],
      sheetsLabel: "No Google Sheets",
      // Nomes das estruturas: iguais nos três idiomas.
      sheets: ["SDR", "Vendas", "Cohort", "Cohort Long"],
    },
    notifications: {
      title: "Mais uma!!",
      lead: "Time e diretoria atualizados sem abrir o dashboard.",
      items: [
        "Detecção em até ~5 minutos",
        "Sem notificações duplicadas",
        "Fechamento diário consolidado",
      ],
    },
    conversational: {
      title: "BI conversacional",
      lead: "Perguntas em português, por texto ou por áudio.",
      questions: [
        "Quantas vendas tivemos hoje?",
        "E ontem?",
        "E por vendedor?",
        "Qual foi o ticket médio deste mês?",
      ],
      statement: ["A IA interpreta.", "O código calcula."],
      explain:
        "O LLM só entra quando o parser não resolve. Consultar, filtrar e calcular fica com o código — a arquitetura foi desenhada para reduzir alucinação.",
      interpret: {
        title: "Interpretar",
        steps: ["Pergunta", "Parser determinístico", "Fallback LLM", "Intenção estruturada"],
      },
      compute: {
        title: "Calcular",
        steps: ["API Ploomes", "Filtros e agregação em Python", "Resposta determinística"],
      },
      fallbackMark: "Só quando necessário",
      highlights: [
        { value: "0 tokens", caption: "Perguntas simples resolvidas pelo parser determinístico" },
        { value: "15 min", caption: "De contexto para follow-ups" },
        { value: "~60 s", caption: "Áudios pelo Telegram, transcritos localmente com Whisper" },
      ],
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
        "Sem export nem merge manual",
        "Painel atualizado sozinho",
        "Vendas notificadas no Telegram",
        "Consultas sem abrir o CRM",
      ],
    },
    stack: {
      title: "Ficha técnica",
      status: "Em produção, com partes ainda em evolução",
    },
  },
  "arena-sustentabilidade": {
    headline: ["Uma experiência digital para", "o São João de Caruaru 2026."],
    context: {
      title: "Contexto",
      text: "Parte da programação oficial do São João de Caruaru 2026, a Arena abordava sustentabilidade e geração de energia. A experiência digital foi feita para essa ativação.",
    },
    calculator: {
      title: "Calculadora de impacto de CO₂",
      lead: "Estima a emissão de uma operação e quantas árvores seriam necessárias para compensá-la.",
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
      items: ["Carrossel de fotos", "Layout responsivo", "Animações leves", "100% estática"],
    },
    stack: { title: "Ficha técnica" },
  },
  "automacoes-operacionais": {
    headline: ["Nem todo problema precisa", "virar um grande sistema."],
    lead: "Scripts e automações pequenas, feitas para tirar trabalho repetitivo do caminho da operação.",
    featured: {
      label: "Exemplo publicado",
      title: "Painéis das TVs internas",
      steps: [
        { label: "Antes", text: "Os painéis das TVs internas — com indicadores como vendas e agendamentos — eram atualizados à mão." },
        { label: "Como", text: "Um script em Python com Selenium e PyAutoGUI identifica os botões via XPath e atualiza os dados sozinho." },
        { label: "Resultado", text: "Menos esforço manual e informação sempre atualizada nas telas." },
      ],
      note: "Números censurados na demonstração; o código publicado é uma versão sanitizada.",
      post: "Ver o post",
      code: "Código (versão sanitizada)",
    },
    blocksLabel: "O que mais entra aqui",
    blocks: [
      "Web scraping",
      "Automação de navegador",
      "Coleta de dados",
      "Tarefas repetitivas eliminadas por código",
    ],
  },
  sentavos: {
    status: "Em produção",
    /** `{date}` vira o mês de entrada em produção (portfolio.ts). */
    since: "Desde {date}",
    use: "Uso pessoal, com conta demo somente-leitura",
    problem: {
      title: "O problema",
      lead: "Antes, o controle ficava numa planilha. No cartão, o mês mostrava uma linha só: “Fatura”.",
      body: "Eu sabia quanto tinha pago, mas não em que o dinheiro tinha sido gasto. E gasto e saída de caixa eram tratados como a mesma coisa.",
    },
    decision: {
      statement: ["Gasto", "≠", "Saída de caixa"],
      lead: ["Compra no cartão é gasto hoje.", "Saída de caixa, só quando a fatura é paga."],
      steps: [
        { label: "Compra no cartão" },
        { label: "Competência", note: "No mês da parcela", mark: "Gasto" },
        { label: "Fatura" },
        { label: "Pagamento", mark: "Saída de caixa" },
      ],
      note: "O pagamento da fatura não cria um novo gasto.",
    },
    how: {
      title: "Como funciona",
      steps: ["Lançar", "Classificar", "Cartão / à vista", "Fatura", "Pagamento", "Relatórios"],
      modes: [
        { title: "À vista", text: "Gasto e caixa acontecem juntos." },
        { title: "Cartão", text: "Gasto e caixa acontecem em momentos diferentes." },
      ],
      cardLabel: "Cartão e parcelamento",
      card: [
        "Uma compra, parcelas por competência",
        "Cada parcela na fatura certa",
        "Pagamento total ou parcial",
        "Parcelas fecham o total, centavo por centavo",
      ],
    },
    rules: {
      title: "Regras que protegem o dado",
      statement: "O sistema prefere não saber a inventar.",
      items: [
        {
          title: "Não classificado",
          text: "Histórico antigo sem forma de pagamento não ganha uma por palpite.",
        },
        {
          title: "Reconciliação explícita",
          text: "Conciliar é uma ação declarada, não uma suposição do sistema.",
        },
        {
          title: "Fatura sem categoria",
          text: "O pagamento não tem categoria: o gasto já foi contado na compra.",
        },
        {
          title: "Recalcular, não duplicar",
          text: "Valores derivados são recalculados — nunca duplicados.",
        },
      ],
    },
    engineering: {
      title: "Engenharia",
      role: "Concepção e desenvolvimento end‑to‑end: produto, regras financeiras, backend, frontend, interface, migração e deploy.",
      notes: ["Autenticação própria", "Isolamento entre contas", "Migrations", "Demo somente-leitura"],
    },
    result: {
      title: "Resultado",
      lead: "O Sentavos substituiu minha planilha e hoje é a fonte principal do meu controle financeiro.",
      body: "O uso real também mudou o produto: funcionalidades foram removidas, reformuladas ou criadas conforme os problemas apareciam no dia a dia.",
      metrics: [
        { value: "14 meses", caption: "De histórico preservados, sem divergência, na migração do cartão" },
        { value: "285", caption: "Testes automatizados" },
        { value: "Produção", caption: "Desde {date}" },
      ],
      evolutionLabel: "Evolução",
      evolution: ["Planilha", "Web app", "Produção", "Cartões & faturas", "Relatórios"],
      featuresLabel: "No app",
      features: [
        "Dashboard mensal",
        "Lançamentos",
        "Metas por categoria",
        "Cartões",
        "Faturas",
        "Parcelamento",
        "Pessoal, Família e Empresa",
        "Relatórios",
        "Patrimônio",
        "Investimentos",
      ],
    },
  },
  geocarbo: {
    status: ["Protótipo funcional", "Em fase de MVP"],
    problem: {
      title: "O problema",
      quote: "O mercado precisa confiar no número antes de confiar no crédito.",
      lead: "Medir carbono em campo é caro e lento.",
      body: "Na Caatinga, a sazonalidade, a perda de folhas e o solo exposto dificultam estimativas genéricas por satélite. O GeoCarbo busca uma primeira leitura automatizada e transparente, antes das etapas mais caras de inventário e certificação.",
    },
    how: {
      title: "Como funciona",
      lead: "O GeoCarbo estima o carbono da vegetação de propriedades na Caatinga a partir de imagens Sentinel-2 e equações publicadas para o bioma.",
      steps: [
        { label: "Propriedade", note: "Cadastro da área" },
        { label: "Polígono", note: "KML ou GeoJSON" },
        { label: "Sentinel-2", note: "Cenas recentes, sem nuvens" },
        { label: "Índices de vegetação", note: "Sobre a composição das cenas" },
        { label: "Biomassa", note: "Regressão publicada para a Caatinga" },
        { label: "Carbono / CO₂e", note: "Coeficientes declarados" },
        { label: "Relatório", note: "Resultado e PDF" },
      ],
      metrics: [
        { value: "Sentinel-2", caption: "Imagens abertas via Copernicus" },
        { value: "10 m", caption: "Resolução das principais bandas usadas" },
        { prefix: "até", value: "5 cenas", caption: "Composição temporal por mediana" },
      ],
    },
    science: {
      statement: ["Método declarado.", "Limites declarados."],
      chain: ["Biomassa", "Carbono", "CO₂e"],
      text: "O modelo ativo usa uma regressão publicada para a Caatinga. Coeficientes científicos declarados convertem a biomassa em carbono e em CO₂ equivalente.",
      quote: "O sistema não esconde quando o dado extrapola o modelo.",
      limits: [
        { title: "Faixa calibrada", text: "O modelo vale para a faixa de NDVI em que foi calibrado." },
        { title: "Aviso de extrapolação", text: "Fora dessa faixa, a estimativa sai sinalizada." },
        { title: "Só acima do solo", text: "O cálculo cobre apenas a biomassa acima do solo." },
        { title: "Sem validação de campo", text: "Ainda não há validação de campo." },
      ],
    },
    technology: {
      title: "Tecnologia",
      architectureLabel: "Arquitetura",
      architecture: [
        "Usuário",
        "Frontend",
        "FastAPI",
        "Celery / Redis",
        "Copernicus",
        "Processamento",
        "Supabase",
        "Resultado / PDF",
      ],
    },
    stage: {
      statement: ["Protótipo funcional.", "Em fase de MVP."],
      doesLabel: "O pipeline já",
      does: [
        "Recebe a propriedade",
        "Processa Sentinel-2",
        "Calcula a estimativa",
        "Salva o resultado",
        "Gera o PDF",
      ],
      notYetLabel: "Ainda não é",
      notYet: [
        "Plataforma de certificação",
        "Produto validado por certificadoras",
        "dMRV completo",
        "Sistema com validação de campo",
        "Solução comercial madura",
      ],
      roadmap: "A arquitetura já tem o encaixe para modelos treinados com dados de campo.",
    },
    role: {
      title: "Minha atuação",
      lead: "Co-Founder & CPO da SECCO, com atuação direta no backend e na evolução do GeoCarbo.",
      items: [
        "Arquitetura backend",
        "API",
        "Processamento",
        "Integração de polígonos",
        "Pipeline de satélite",
        "Persistência",
        "Relatórios",
        "Deploy",
      ],
      context: "Contexto: incubação da SECCO no Porto Digital e participação no Inova Caatinga.",
    },
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
      stackLabel: "Frentes de trabalho",
      stepsLabel: "Etapas, da contratação à manutenção",
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
  database: "Dados",
  processing: "Processamento",
  satellite: "Satélite",
  reports: "Relatórios",
  infrastructure: "Infraestrutura",
  quality: "Qualidade",
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
    role: ["Inovador,", "Criador,", "Desenvolvedor."],
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
    back: "Voltar à categoria",
    next: "Próximo case",
  },
  experience: {
    title: "Experiência",
    now: "Hoje",
    journey: "Minha trajetória",
    areas: "Áreas de atuação",
    built: "Coisas que construí",
    writing: "Capítulo em escrita.",
    builtEmpty: "Os cases desta experiência entram em breve.",
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
    portraitAlt: "Sergio Barbosa conduzindo uma oficina na REC'n'Play Caruaru",
    portraitCaption: "Oficina na REC'n'Play Caruaru",
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
