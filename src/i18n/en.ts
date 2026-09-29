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
      summary: "Personal finance without counting the same money twice.",
      tags: ["Own product", "Personal finance"],
      captions: {
        "card-purchase": "A card purchase, in installments",
        budget: "Monthly budget: spending against each category’s target",
        invoice: "An invoice in detail",
        review: "The review screen",
        wealth: "Net worth and investments",
      },
    },
    geocarbo: {
      summary: "Satellite-based carbon estimates for the Caatinga, with a declared method.",
      kicker: "Climate tech · Carbon · MVP",
      tags: ["Climate tech", "Carbon"],
      captions: {
        map: "The property’s polygon",
        analysis: "An analysis in detail",
        registration: "Registering the property",
        reports: "Completed reports, with the PDF to download",
        pdf: "The PDF report, with method, sources and caveats",
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
        experiences: "What visitors find at the Arena",
        calculator: "CO₂ impact calculator",
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
        body: "Every week, each client in Ploomes was copied into its route’s tab in an Excel spreadsheet.",
        metrics: [
          { value: "~40", caption: "Clients in a typical week" },
          { value: "8+", caption: "Routes usually organized" },
          { value: "1+ day", caption: "In heavier weeks, from Friday into Saturday" },
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
          "Sort into tabs",
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
        lead: "Excel is still part of the operation. What went away was the manual work of building it.",
        file: "The generated file",
        general: "General",
        route: "Route",
        legend: [
          "One general tab, with every client.",
          "One tab per route — around eight or more a week.",
        ],
      },
      data: {
        title: ["It wasn’t just about", "going faster."],
        subtitle: "It was about working with the right information.",
        checks: [
          {
            title: "Record changes",
            text: "The address that counts is the one in Ploomes now, not the spreadsheet’s.",
          },
          {
            title: "Cancellations",
            text: "Clients in the cancellation flow are checked before the operation.",
          },
          {
            title: "Up-to-date data",
            text: "The query goes straight to the CRM, through the API, at planning time.",
          },
        ],
      },
      flow: {
        title: "System flow",
        steps: [
          { label: "Ploomes CRM", note: "Where the clients live" },
          { label: "API", note: "Queried at planning time" },
          { label: "Router Planner", note: "FastAPI, validations & rules" },
          { label: "Excel export", note: "General tab plus one per route" },
          { label: "Logistics", note: "The operation" },
        ],
      },
      result: {
        title: "Result",
        value: "~1–2h",
        caption:
          "Approximate time, today, to organize a typical operation — depending on the number of clients. Before, it could run from Friday into Saturday.",
        note: "Operational estimate, not a benchmark.",
        gains: [
          "Less manual work",
          "Data connected to the source",
          "Checks before the operation",
          "Automatic export",
        ],
      },
      role: {
        title: "My role",
        lead: "End‑to‑end conception and development.",
        items: [
          "Understanding the flow",
          "Solution design",
          "Development",
          "Ploomes integration",
          "Validation rules",
          "Deployment",
        ],
      },
      stack: {
        title: "Tech specs",
        access: "Environment with managed access control",
      },
    },
    "bot-de-vendas": {
      headline: [
        "Ask about the operation.",
        "Get the answer straight from the CRM.",
      ],
      problem: {
        title: "The problem",
        lead: "The sales data already lived in Ploomes. But every quick lookup meant opening the CRM, filtering and interpreting by hand.",
        body: "Born from the customer-journey automation, the Sales Bot turned that lookup into a Telegram conversation.",
      },
      layers: {
        title: "How it works",
        lead: "One source, two layers.",
        items: [
          {
            title: "Straight from the CRM",
            text: "Notifications and conversational BI query Ploomes directly.",
            steps: ["Ploomes API", "Python", "Telegram"],
          },
          {
            title: "Parallel layer",
            text: "The ETL that feeds the executive dashboard and historical analysis.",
            steps: ["Ploomes", "Python ETL", "Google Sheets", "Looker Studio"],
          },
        ],
        sheetsLabel: "In Google Sheets",
        sheets: ["SDR", "Vendas", "Cohort", "Cohort Long"],
      },
      notifications: {
        title: "Another one!!",
        lead: "The team and the board stay up to date without opening the dashboard.",
        items: [
          "Detection within ~5 minutes",
          "No duplicate notifications",
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
        ],
        statement: ["The AI interprets.", "The code calculates."],
        explain:
          "The LLM only steps in when the parser can’t resolve a question. Querying, filtering and calculating stay with the code — the architecture was designed to reduce hallucination.",
        interpret: {
          title: "Interpret",
          steps: ["Question", "Deterministic parser", "LLM fallback", "Structured intent"],
        },
        compute: {
          title: "Calculate",
          steps: ["Ploomes API", "Filters & aggregation in Python", "Deterministic answer"],
        },
        fallbackMark: "Only when needed",
        highlights: [
          { value: "0 tokens", caption: "Simple questions resolved by the deterministic parser" },
          { value: "15 min", caption: "Of context for follow-ups" },
          { value: "~60 s", caption: "Voice messages via Telegram, transcribed locally with Whisper" },
        ],
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
          "No manual export or merging",
          "Dashboard that updates itself",
          "Sales notified on Telegram",
          "Lookups without opening the CRM",
        ],
      },
      stack: {
        title: "Tech specs",
        status: "In production, with parts still evolving",
      },
    },
    "arena-sustentabilidade": {
      headline: ["A digital experience for", "São João de Caruaru 2026."],
      context: {
        title: "Context",
        text: "Part of the official São João de Caruaru 2026 program, the Arena focused on sustainability and energy generation. The digital experience was built for that activation.",
      },
      calculator: {
        title: "CO₂ impact calculator",
        lead: "It estimates an operation’s emissions and how many trees it would take to offset them.",
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
        items: ["Photo carousel", "Responsive layout", "Light animations", "100% static"],
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
          { label: "Before", text: "The dashboards on the internal TVs — with indicators such as sales and appointments — were refreshed by hand." },
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
        "Data collection",
        "Repetitive tasks replaced by code",
      ],
    },
    sentavos: {
      status: "In production",
      since: "Since {date}",
      use: "Personal use, with a read-only demo account",
      problem: {
        title: "The problem",
        lead: "It all used to live in a spreadsheet. For the credit card, each month showed a single line: “Invoice”.",
        body: "I knew how much I had paid, but not what the money had been spent on. And spending and cash outflow were treated as the same thing.",
      },
      decision: {
        statement: ["Spending", "≠", "Cash outflow"],
        lead: ["A card purchase is spending today.", "Cash leaves only when the invoice is paid."],
        steps: [
          { label: "Card purchase" },
          { label: "Accrual month", note: "The installment’s month", mark: "Spending" },
          { label: "Invoice" },
          { label: "Payment", mark: "Cash outflow" },
        ],
        note: "Paying the invoice doesn’t create new spending.",
      },
      how: {
        title: "How it works",
        steps: ["Record", "Classify", "Card / upfront", "Invoice", "Payment", "Reports"],
        modes: [
          { title: "Paid upfront", text: "Spending and cash happen together." },
          { title: "Credit card", text: "Spending and cash happen at different moments." },
        ],
        cardLabel: "Cards & installments",
        card: [
          "One purchase, installments by accrual month",
          "Each installment on the right invoice",
          "Full or partial payment",
          "Installments add up to the total, to the cent",
        ],
      },
      rules: {
        title: "Rules that protect the data",
        statement: "The system would rather not know than make things up.",
        items: [
          {
            title: "Unclassified",
            text: "Old records with no payment method don’t get one by guesswork.",
          },
          {
            title: "Explicit reconciliation",
            text: "Reconciling is a declared action, never an assumption by the system.",
          },
          {
            title: "Invoices have no category",
            text: "The payment has no category: the spending was counted at purchase.",
          },
          {
            title: "Recalculate, don’t duplicate",
            text: "Derived values are recalculated — never duplicated.",
          },
        ],
      },
      engineering: {
        title: "Engineering",
        role: "End‑to‑end conception and development: product, financial rules, backend, frontend, interface, migration and deployment.",
        notes: ["Custom authentication", "Account isolation", "Migrations", "Read-only demo"],
      },
      result: {
        title: "Result",
        lead: "Sentavos replaced my spreadsheet and is now the main source of my financial tracking.",
        body: "Real use changed the product too: features were removed, reshaped or created as problems showed up day to day.",
        metrics: [
          { value: "14 months", caption: "Of history preserved, with no discrepancies, through the card migration" },
          { value: "285", caption: "Automated tests" },
          { value: "Live", caption: "Since {date}" },
        ],
        evolutionLabel: "Evolution",
        evolution: ["Spreadsheet", "Web app", "Production", "Cards & invoices", "Reports"],
        featuresLabel: "In the app",
        features: [
          "Monthly dashboard",
          "Transactions",
          "Category budgets",
          "Cards",
          "Invoices",
          "Installments",
          "Personal, Family and Business",
          "Reports",
          "Net worth",
          "Investments",
        ],
      },
    },
    geocarbo: {
      status: ["Working prototype", "MVP stage"],
      problem: {
        title: "The problem",
        quote: "The market needs to trust the number before it can trust the credit.",
        lead: "Measuring carbon in the field is expensive and slow.",
        body: "In the Caatinga, seasonality, leaf loss and exposed soil make generic satellite estimates harder. GeoCarbo aims to offer a first automated, transparent reading, ahead of the costlier inventory and certification stages.",
      },
      how: {
        title: "How it works",
        lead: "GeoCarbo estimates the vegetation carbon of properties in the Caatinga from Sentinel-2 imagery and equations published for the biome.",
        steps: [
          { label: "Property", note: "Registering the area" },
          { label: "Polygon", note: "KML or GeoJSON" },
          { label: "Sentinel-2", note: "Recent scenes, clouds removed" },
          { label: "Vegetation indices", note: "Over the scene composite" },
          { label: "Biomass", note: "A regression published for the Caatinga" },
          { label: "Carbon / CO₂e", note: "Declared coefficients" },
          { label: "Report", note: "Result and PDF" },
        ],
        metrics: [
          { value: "Sentinel-2", caption: "Open imagery via Copernicus" },
          { value: "10 m", caption: "Resolution of the main bands used" },
          { prefix: "up to", value: "5 scenes", caption: "Median temporal composite" },
        ],
      },
      science: {
        statement: ["Declared method.", "Declared limits."],
        chain: ["Biomass", "Carbon", "CO₂e"],
        text: "The active model uses a regression published for the Caatinga. Declared scientific coefficients turn biomass into carbon and CO₂ equivalent.",
        quote: "The system doesn’t hide it when the data goes beyond the model.",
        limits: [
          { title: "Calibrated range", text: "The model holds for the NDVI range it was calibrated on." },
          { title: "Extrapolation warning", text: "Outside that range, the estimate is flagged." },
          { title: "Above ground only", text: "The calculation covers above-ground biomass only." },
          { title: "No field validation", text: "There is no field validation yet." },
        ],
      },
      technology: {
        title: "Technology",
        architectureLabel: "Architecture",
        architecture: [
          "User",
          "Frontend",
          "FastAPI",
          "Celery / Redis",
          "Copernicus",
          "Processing",
          "Supabase",
          "Result / PDF",
        ],
      },
      stage: {
        statement: ["Working prototype.", "MVP stage."],
        doesLabel: "The pipeline already",
        does: [
          "Takes in the property",
          "Processes Sentinel-2",
          "Computes the estimate",
          "Stores the result",
          "Generates the PDF",
        ],
        notYetLabel: "It isn’t yet",
        notYet: [
          "A certification platform",
          "A product validated by certifiers",
          "A complete dMRV",
          "A field-validated system",
          "A mature commercial solution",
        ],
        roadmap: "The architecture already has a slot for models trained on field data.",
      },
      role: {
        title: "My role",
        lead: "Co-Founder & CPO at SECCO, working directly on the backend and on GeoCarbo’s evolution.",
        items: [
          "Backend architecture",
          "API",
          "Processing",
          "Polygon integration",
          "Satellite pipeline",
          "Persistence",
          "Reports",
          "Deployment",
        ],
        context: "Context: SECCO’s incubation at Porto Digital and its participation in Inova Caatinga.",
      },
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
      database: "Data",
      processing: "Processing",
      satellite: "Satellite",
      reports: "Reports",
      infrastructure: "Infrastructure",
      quality: "Quality",
      stack: "Stack",
    },
    pending: "Context, process and results coming soon.",
    back: "Back to category",
    next: "Next case",
  },
  experience: {
    title: "Experience",
    now: "Now",
    journey: "My journey",
    areas: "Areas of work",
    built: "Things I built",
    writing: "Chapter being written.",
    builtEmpty: "Case studies from this role are on their way.",
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
      },
    },
    secco: {
      role: "Co-Founder & CPO",
      pageRole: "Co-Founder · CPO · Developer",
      summary: "Ideas into product. Technology into solutions.",
      headline: ["Ideas into product.", "Technology into solutions."],
      captions: {
        "team-01": "The SECCO team",
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
