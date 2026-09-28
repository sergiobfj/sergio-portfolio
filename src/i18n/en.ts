import type { Dictionary } from "./pt";

const en: Dictionary = {
  meta: {
    title: "Sergio Barbosa — Creator & Developer",
    description:
      "Creator and developer building products, systems and automations.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    open: "Open menu",
    close: "Close menu",
    main: "Main navigation",
    language: "Language",
    social: "Elsewhere",
    skip: "Skip to content",
    home: "Sergio Barbosa — home",
  },
  hero: {
    role: ["Creator,", "Developer."],
  },
  work: {
    title: "Work",
    note: "Things I've built: products, systems, automations and sites — much of it in proprietary code.",
    cursor: "View",
    count: { one: "project", other: "projects" },
    soon: "Coming soon",
    empty: "The first projects in this category are on their way.",
    caseSoon: "Case study in progress",
    back: "Back to work",
    next: "Next category",
  },
  categories: {
    products: {
      title: ["Products &", "Systems"],
      description: "Products and systems, from the first commit to daily operation.",
    },
    automations: {
      title: ["Automations &", "Integrations"],
      description:
        "Internal automations, API integrations, operational tools and bots.",
    },
    web: {
      title: ["Web &", "Digital experiences"],
      description:
        "Sites, landing pages and digital experiences — my own and for clients.",
    },
    tools: {
      title: ["Experiments &", "Tools"],
      description: "Internal tools, scripts and technical experiments: small solutions to specific problems.",
    },
  },
  cases: {
    "router-planner": {
      summary:
        "From manual route planning in Excel to an operation connected to the CRM.",
      kicker: "Internal system · Logistics · Ploomes API",
      tags: ["Internal product", "Logistics"],
      captions: {
        "legacy-excel": "The previous Excel-based process",
        "route-selection": "Selecting routes inside Router Planner",
        export: "File generated automatically for the operation",
        validation: "Checks before the operation",
      },
    },
    sentavos: {
      summary: "A personal finance product of my own.",
      captions: { dashboard: "Monthly budget" },
    },
    geocarbo: {
      kicker: "Climate tech · dMRV · Carbon",
      tags: ["Climate tech", "dMRV", "Carbon"],
      captions: {
        dashboard: "Monitoring overview",
        "cadastro-propriedade": "Registering a property for monitoring",
        relatorios: "Generated reports",
      },
    },
    "crm-textil": {
      kicker: "System in development",
      tags: ["System in development"],
    },
    "bot-de-vendas": {
      title: "Sales Bot",
      summary:
        "Conversational BI with notifications and natural-language questions, straight from the CRM.",
      kicker: "Conversational BI · Virtron",
      tags: ["Conversational BI", "In production"],
      captions: {
        "telegram-sale": "New-sale notification on Telegram",
      },
    },
    "arena-sustentabilidade": {
      summary:
        "Digital experience for the Arena da Sustentabilidade at São João de Caruaru 2026.",
      kicker: "Digital experience · São João de Caruaru 2026",
      tags: ["Digital experience", "São João de Caruaru 2026"],
      captions: {
        calculator: "CO₂ impact calculator",
        experiences: "What visitors find at the Arena",
        mobile: "Mobile version",
      },
    },
    "relatorio-merger": {
      summary: "Merges two Excel reports using the client’s internal code.",
      kicker: "Internal tool · Python",
      tags: ["Internal tool", "Python"],
      headline:
        "My first internal system started with a simple question: why spend an hour on something code can do in a few minutes?",
      context: "One of the first tools I built at Virtron.",
      problem: "Two Excel reports had to be cross-referenced by hand.",
      solution:
        "A Python application that merges both reports, using the client’s internal code as the key.",
      impact: "The tool is still in use internally.",
      metrics: [
        { value: "~1 h", caption: "Before, per merge" },
        { value: "~5 min", caption: "After, with the tool" },
        { value: "~2×", caption: "Per week" },
      ],
      metricsNote: "Approximate figures.",
    },
    "automacoes-operacionais": {
      title: "Everyday automations",
      summary:
        "Real operational scripts: dashboards that refresh themselves, data collection and browser automation.",
      kicker: "Scripts · Browser automation",
      tags: ["Automation", "Scripts"],
    },
  },
  stories: {
    "router-planner": {
      headline: [
        "From a manual, spreadsheet-based process",
        "to an operation connected to the CRM.",
      ],
      code: ["Internal project", "Proprietary code"],
      before: {
        title: "The previous process",
        lead: "Before Router Planner, routes were organized by hand.",
        body: "The team started from the clients registered in Ploomes and copied each record into its route’s tab in an Excel spreadsheet — every week.",
        metrics: [
          { value: "~40", caption: "Clients in a typical week" },
          { value: "8+", caption: "Routes usually organized" },
          {
            value: "1+ day",
            caption: "In heavier weeks, from Friday into Saturday",
          },
        ],
        note: "Approximate figures.",
      },
      compare: {
        label: "Before × After",
        before: "Before",
        after: "After",
        beforeSteps: [
          "Ploomes",
          "Spreadsheet",
          "Copy clients",
          "Sort into tabs by hand",
          "Check",
          "Print",
          "Operation",
        ],
        afterSteps: [
          "Ploomes API",
          "Router Planner",
          "Select route",
          "Validate data",
          "Generate file",
          "Operation",
        ],
        manual: "Manual",
        decision: "Human decision",
        quote: [
          "The main human decision becomes:",
          "“Which route should this client follow?”",
        ],
      },
      output: {
        statement: ["Excel as output,", "not as the system."],
        body: [
          "Router Planner didn’t take Excel out of the operation for the sake of it. It took out the manual work of building the spreadsheet.",
          "The analyst selects the routes in the system, and the application generates the file the operation uses.",
        ],
        file: "The generated file",
        general: "General",
        route: "Route",
        legend: [
          "One general tab with every processed client.",
          "One tab per selected route — around eight or more, depending on the week’s sales and deliveries.",
        ],
      },
      data: {
        title: ["It wasn’t just about", "going faster."],
        subtitle: "It was about working with the right information.",
        body: "In the old spreadsheet, whatever changed in the CRM after preparation might never reach logistics: an address updated in Ploomes, for instance, or a client entering the cancellation flow.",
        checks: [
          {
            title: "Record changes",
            text: "The address that counts is the one in Ploomes now, not the one in this week’s spreadsheet.",
          },
          {
            title: "Cancellations",
            text: "Clients who entered the cancellation flow are checked before the operation.",
          },
          {
            title: "Up-to-date data",
            text: "The query goes straight to the CRM, through the API, when the routes are organized.",
          },
        ],
      },
      flow: {
        title: "System flow",
        steps: [
          "Ploomes CRM",
          "API",
          "FastAPI",
          "Validations & rules",
          "Router Planner",
          "Route organization",
          "Excel export",
          "Logistics",
        ],
      },
      result: {
        title: "Result",
        value: "~1–2h",
        caption:
          "Approximate time, today, to organize a typical operation — depending on the number of clients.",
        note: "Operational estimate, not a benchmark.",
        before: {
          label: "Before",
          text: "The process could start on Friday and run into Saturday.",
        },
        after: {
          label: "After",
          text: "Organizing it can be done in about one or two hours.",
        },
        gains: [
          "Less manual work",
          "Data connected to the source",
          "Cancellation checks",
          "Automatic export",
          "Less reliance on static spreadsheets",
        ],
      },
      role: {
        title: "My role",
        lead: "End-to-end conception and development of the solution.",
        items: [
          "Understanding the operational flow",
          "Designing the solution",
          "Developing the application",
          "Integrating with Ploomes",
          "Implementing the validation rules",
          "Deploying the application in the company’s environment",
        ],
      },
      stack: {
        title: "Tech specs",
        access: "Environment with managed access control.",
      },
    },
    "bot-de-vendas": {
      headline: [
        "Ask about the operation.",
        "Get the answer straight from the CRM.",
      ],
      origin: {
        title: "The problem",
        lead: "The sales data already lived in Ploomes, but quick lookups still required opening the CRM, setting filters and interpreting the information manually.",
        body: "The Sales Bot turned that access into a Telegram conversation.",
        note: "This project started as a customer-journey automation and evolved into a full commercial intelligence ecosystem.",
      },
      pillars: {
        title: ["The project grew", "beyond the first automation."],
        items: [
          {
            title: "Data pipeline",
            steps: ["Ploomes", "Python", "Google Sheets", "Looker Studio"],
          },
          {
            title: "Notifications",
            steps: ["Telegram bot", "New sales", "Daily summary"],
          },
          {
            title: "Conversational BI",
            steps: [
              "Question by text or voice",
              "Interpretation",
              "Ploomes query",
              "Aggregation",
              "Answer",
            ],
          },
        ],
      },
      pipeline: {
        title: "Dashboard & ETL",
        lead: "The data layer that feeds the executive dashboard and historical analysis.",
        body: "The pipeline queries Ploomes, transforms and organizes the records, removes relevant duplicates and writes the result into four structures in Google Sheets — which feed the Looker Studio dashboard.",
        note: "The conversational BI and the notifications query the CRM directly.",
        sheetsLabel: "In Google Sheets",
        sheets: ["SDR", "Vendas", "Cohort", "Cohort Long"],
      },
      notifications: {
        title: "Another one!!",
        lead: "The team and the board stay up to date without opening the dashboard.",
        items: [
          "Polls for new sales periodically",
          "Detection within ~5 minutes",
          "Avoids duplicate notifications",
          "Consolidated daily close",
        ],
      },
      conversational: {
        title: "Conversational BI",
        lead: "Questions in Portuguese, by text or by voice.",
        questions: [
          "How many sales did we have today?",
          "What about yesterday?",
          "And by salesperson?",
          "What was this month’s average ticket?",
          "Top 5 salespeople by revenue.",
          "And in these cities?",
        ],
        flowLabel: "From question to answer",
        flow: [
          "Question",
          "Deterministic parser",
          "LLM fallback",
          "Structured intent",
          "Ploomes API",
          "Filters & aggregation in Python",
          "Deterministic answer",
        ],
        fallbackMark: "Only when needed",
        statement: ["The AI interprets.", "The code calculates."],
        explain:
          "The LLM only steps in to understand intent when the parser can’t. Querying, filtering, calculating and formatting the answer is the code’s job — the architecture was designed precisely to reduce hallucination.",
        strategyLabel: "The strategy",
        strategy: [
          "Simple questions are handled first by a deterministic parser.",
          "Only when needed does Claude Haiku turn the question into a structured intent.",
          "Rules normalize ambiguous cases, and the conversation context can be reused.",
          "The API provides the data, Python does the math, and the answer is assembled deterministically.",
        ],
        highlights: [
          { value: "0 tokens", caption: "Simple questions are interpreted by the deterministic parser." },
          { value: "6 metrics", caption: "Sales, revenue, average ticket, R$/kWp, leads and losses." },
          { value: "15 min", caption: "Conversational context for follow-ups." },
        ],
      },
      audio: {
        title: "Voice works too",
        value: "~60 s",
        text: "Voice messages sent via Telegram are transcribed locally with Whisper and go through the same pipeline as text questions.",
      },
      coverage: {
        title: "What you can ask",
        metricsLabel: "Metrics",
        metrics: [
          "Number of sales",
          "Revenue",
          "Average ticket",
          "R$/kWp",
          "New leads",
          "Lost deals",
        ],
        filtersLabel: "Filters & groupings",
        filters: [
          "Salesperson",
          "City",
          "Source",
          "Payment method",
          "Bank",
          "Period",
        ],
        note: "Including rankings and period-over-period comparisons.",
      },
      impact: {
        title: "Impact",
        items: [
          "No recurring manual export",
          "No manual merging of tabs",
          "Dashboard updated automatically",
          "A single consolidated source for analysis",
          "Automatic sales notifications",
          "Quick access to sales information",
          "Questions in natural language",
          "Fewer dashboards opened for simple lookups",
        ],
      },
      stack: {
        title: "Tech specs",
        status: "In production, with parts still evolving.",
      },
    },
    "arena-sustentabilidade": {
      headline: ["A digital experience for", "São João de Caruaru 2026."],
      context: {
        title: "Context",
        text: "The Arena da Sustentabilidade was part of the official São João de Caruaru 2026 program and focused on sustainability and energy generation. The digital experience was built for that activation.",
      },
      calculator: {
        title: "CO₂ impact calculator",
        lead: "The main feature: estimating an operation’s emissions and how many trees it would take to offset them.",
        inputsLabel: "The user enters",
        inputs: ["Days", "Consumption / generators", "Team", "Travel"],
        outputsLabel: "The interface calculates",
        outputs: ["Approximate emissions", "Trees needed to offset"],
      },
      optimization: {
        title: "Optimization",
        before: "~44 MB",
        after: "~2 MB",
        caption: "Carousel images, with no noticeable visual loss.",
      },
      highlights: {
        title: "Highlights",
        items: [
          "Photo carousel",
          "Responsive layout",
          "Light animations",
          "100% static application",
          "Plain HTML, CSS and JavaScript",
        ],
      },
      stack: { title: "Tech specs" },
    },
    "automacoes-operacionais": {
      headline: ["Not every problem needs", "to become a big system."],
      lead: "Small scripts and automations, built to get repetitive work out of the operation’s way.",
      featured: {
        label: "Published example",
        title: "Internal TV dashboards",
        steps: [
          { label: "Before", text: "The dashboards shown on the internal TVs — with indicators such as sales and appointments — were refreshed by hand." },
          { label: "How", text: "A Python script with Selenium and PyAutoGUI finds the buttons via XPath and updates the data on its own." },
          { label: "Result", text: "Less manual effort, and the screens always show current information." },
        ],
        note: "Numbers are censored in the demo; the published code is a sanitized version.",
        post: "See the post",
        code: "Code (sanitized version)",
      },
      blocksLabel: "What else goes here",
      blocks: [
        "Web scraping",
        "Browser automation",
        "Scripts",
        "Data collection",
        "Repetitive tasks replaced by code",
      ],
    },
  },
  caseStudy: {
    company: "Company",
    year: "Year",
    category: "Category",
    stack: "Technologies",
    problem: "Problem",
    solution: "Solution",
    impact: "Impact",
    live: "View live",
    linkedin: "LinkedIn post",
    repository: "Repository",
    context: "Context",
    internal: "Internal project",
    privateCode: "Proprietary code",
    figure: "Fig.",
    stackGroups: {
      backend: "Backend",
      backendData: "Backend / Data",
      integration: "Integration",
      crm: "CRM",
      data: "Data & export",
      dataLayer: "Data layer",
      dashboard: "Dashboard",
      ai: "AI / NLP",
      frontend: "Frontend",
      interface: "Interface",
      infrastructure: "Infrastructure",
      stack: "Stack",
    },
    pending: "Context, process and results coming soon.",
    gallery: "Gallery",
    back: "Back to category",
    next: "Next case",
  },
  experience: {
    title: "Experience",
    now: "Now",
    journey: "My journey",
    areas: "Areas of work",
    built: "Things I built",
    gallery: "Gallery",
    writing: "Chapter being written.",
    builtEmpty: "Case studies from this role are on their way.",
    galleryEmpty: "Photos and screenshots coming soon.",
    back: "Back to experience",
    next: "Next experience",
  },
  experiences: {
    virtron: {
      role: "Apprentice → IT Assistant",
      summary:
        "I started in support. Then I began building systems, automations and infrastructure for the operation.",
      headline: ["I started by solving tickets.", "Then I started solving processes."],
      captions: {
        promotion: "Promotion milestone",
        start: "Workstation at Virtron",
        "former-manager": "With the department’s former manager",
        "workstation-01": "Day-to-day development",
        "workstation-02": "Hardware maintenance",
      },
    },
    secco: {
      role: "Co-Founder & CPO",
      pageRole: "Co-Founder · CPO · Developer",
      summary: "Ideas into product. Technology into solutions.",
      headline: ["Ideas into product.", "Technology into solutions."],
      captions: {
        "team-01": "The SECCO team",
        "talk-room": "The talk at UniFavip Wyden",
        poster: "Poster for the talk at UniFavip Wyden’s IT Week",
      },
    },
  },
  experienceStories: {
    virtron: {
      intro: {
        title: "My journey",
        lead: "I joined as an apprentice and started with the fundamentals: hardware, support, networking and operations. Over time, I began building systems, automations and integrations to solve the company’s real problems.",
        rolesLabel: "Formal track",
        roles: { apprentice: "Apprentice", assistant: "IT Assistant" },
        evolutionLabel: "How the work changed",
        evolution: [
          "Learn",
          "Understand the operation",
          "Spot problems",
          "Build solutions",
          "Ship to production",
          "Maintain",
        ],
      },
      start: {
        title: "The beginning",
        quote:
          "In the first months, a lot of things were literally a first: opening a laptop, diagnosing hardware, working with network infrastructure and understanding how technology works inside a real company.",
        fundamentalsLabel: "Fundamentals",
        fundamentals: [
          "Technical support",
          "Hardware & maintenance",
          "Network infrastructure",
          "Ploomes",
        ],
        ploomes:
          "Ploomes is the company’s main CRM. Studying it in depth at that stage is what later made it possible to build systems and integrations on its API.",
      },
      firstTool: {
        label: "First tool",
        cta: "See the mini case",
      },
      promotion: {
        title: ["From Apprentice", "to IT Assistant"],
      },
      broaderScope: {
        title: "A broader scope",
        text: "When the department’s manager left, I took on a larger share of the area’s technical and operational responsibilities.",
        todayLabel: "Today",
        today:
          "I remain directly involved in the infrastructure, systems, automations and applications I built and maintain.",
      },
      infrastructure: {
        title: "From code to infrastructure",
        statement: ["Building also means", "putting it live", "and keeping it running."],
        text: "I was responsible for rolling out the VPS used by the internal applications — from signing up to ongoing maintenance.",
        steps: [
          "Contracting the VPS",
          "Initial provisioning",
          "Configuration",
          "Application deploys",
          "Ongoing maintenance",
          "Support for hosted systems",
        ],
        stackLabel: "Areas of work",
        stepsLabel: "Steps, from provisioning to maintenance",
        stack: ["Linux VPS", "Deploy", "Service administration", "Maintenance"],
      },
      closing: {
        statement: ["My first job", "was also my first", "big lab."],
        text: "In less than two years, I went through support, hardware, networking, infrastructure, automation, development and integrations. It wasn’t always simple. Maybe that’s exactly why it’s where I grew the most professionally.",
      },
    },
    secco: {
      about: {
        title: "What SECCO is",
        text: "SECCO is a technology company focused on building digital products, systems and software solutions for real problems.",
        quote:
          "It’s where we turn ideas into products, technology into solutions and ambition into something built.",
      },
      role: {
        title: "My role",
        dimensions: [
          { title: "Product", items: ["Prioritization", "Structure", "Product decisions"] },
          {
            title: "Technology",
            items: ["Backend", "Architecture", "Integrations", "Deploy", "Infrastructure"],
          },
          { title: "Building", items: ["Taking ideas off paper", "and turning them into systems"] },
          { title: "Company", items: ["Taking part in shaping", "and building SECCO"] },
        ],
      },
      built: { title: "What we build" },
      talks: {
        title: ["Talks, workshops", "& community"],
        kinds: { workshop: "Workshop", talk: "Talk" },
        upcoming: "Upcoming",
        with: "With {names}, from SECCO.",
        items: {
          "recnplay-python": {
            title: "Python, Automations & Integrations",
            subtitle: "Connecting systems with a few lines of code",
          },
          "recnplay-terminal": {
            title: "The Modern Terminal",
            subtitle: "Productivity for developers",
          },
          "unifavip-empreendedorismo": {
            title: "From College to Entrepreneurship",
            text: "A conversation about the move from college to building projects, the first challenges, and the process of turning an idea into a company.",
          },
          "bug-hunt": {
            title: "Bug Hunt & Code Review",
            subtitle: "Learning from Real-World Code",
            text: "A hands-on workshop on reading code, finding flaws and fixing problems close to what production software really looks like.",
          },
        },
      },
      milestones: {
        title: "Milestones",
        items: {
          "porto-digital": "Incubation and connection to the ecosystem",
          "inova-caatinga": "Participation and development linked to GeoCarbo",
          recnplay: "Workshops and community presence",
          "global-pe": "Coming soon",
        },
      },
    },
  },
  background: {
    title: "Background",
    since: "Since",
    technology: "Learning and building with technology",
    technical: {
      value: "Technical",
      title: "Systems Analysis and Development",
    },
    degree: {
      value: "B.Sc.",
      title: "Computer Science",
      status: "In progress",
    },
  },
  secco: {
    discipline: "Software & Technology",
    role: ["Co-Founder", "& CPO"],
    products: "Products",
    cta: "Explore",
  },
  about: {
    label: "About",
    headline: ["Building things", "that work."],
    statement:
      "From the first commit to day-to-day operation: interface, system, automation and the business around it.",
    portraitAlt: "Sergio Barbosa leading a workshop at REC'n'Play Caruaru",
    portraitCaption: "Workshop at REC'n'Play Caruaru",
  },
  contact: {
    label: "Contact",
    headline: ["Let's work", "together."],
    cta: "Get in touch",
    note: "Open to products, partnerships and hard problems.",
    emailLabel: "Email",
    location: "Caruaru, Brazil",
  },
  notFound: {
    title: "Page not found",
    back: "Back to home",
  },
};

export default en;
