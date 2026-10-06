import type { Dictionary } from "./pt";

const en: Dictionary = {
  meta: {
    title: "Sergio Barbosa — Innovator, Creator, Developer",
    description:
      "Innovator, creator and developer. From problem to production: product, code and operations.",
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
    role: ["Innovator,", "Creator,", "Developer."],
    portraitAlt: "Sergio Barbosa standing, speaking and gesturing, in glasses and a black shirt",
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
      description: "Internal tools, scripts and experiments for specific problems.",
    },
  },
  cases: {
    "router-planner": {
      summary: "Logistics routes organized straight from the CRM, without copying clients one by one.",
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
      summary: "From satellite to a carbon estimate that shows how it was calculated.",
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
      summary: "Sales notifications and questions answered on Telegram, straight from the CRM.",
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
        "My first internal system came from a question: why spend an hour on something code can do in minutes?",
      context: "One of my first tools at Virtron.",
      problem: "Two Excel reports had to be cross-referenced by hand.",
      solution: "A Python application that cross-references both by the client’s internal code.",
      impact: "Still in use at the company.",
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
        lead: "Before, the spreadsheet was the process.",
        body: "Every week, each client in Ploomes was copied by hand into its route’s tab.",
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
          "What’s left for a person to decide:",
          "“Which route should this client follow?”",
        ],
      },
      output: {
        statement: ["The spreadsheet stayed.", "The manual process didn’t."],
        lead: "Now Router Planner is the system. Excel is just the output.",
        file: "The generated file",
        general: "General",
        route: "Route",
        legend: [
          "One general tab, with every client.",
          "One tab per route — around eight or more a week.",
        ],
      },
      data: {
        title: ["Fast wasn’t enough.", "It had to be right."],
        subtitle: "Before it goes out, every route is checked against Ploomes.",
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
          "To organize a typical operation today, depending on the number of clients. Before, it could run from Friday into Saturday.",
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
        lead: ["The data was already in the CRM.", "There just wasn’t a way to talk to it."],
        body: "Every quick lookup meant opening Ploomes, filtering and interpreting by hand. The Sales Bot moved those questions to Telegram.",
      },
      layers: {
        title: "How it works",
        lead: "One source, two layers.",
        items: [
          {
            title: "Straight from the CRM",
            text: "Notifications and questions query the Ploomes API, with no spreadsheet in between.",
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
        statement: ["The AI understands the question.", "The system finds the answer."],
        explain:
          "The LLM only steps in when the parser can’t resolve a question — and only to interpret it. Querying Ploomes, filtering and calculating stay with the code, to reduce hallucination.",
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
      lead: "Small scripts that take repetitive work out of the operation’s way.",
      featured: {
        label: "Published example",
        title: "Internal TV dashboards",
        steps: [
          { label: "Before", text: "The dashboards on the internal TVs, with sales and appointments, were refreshed by hand." },
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
        lead: ["I knew how much I was paying.", "I didn’t know where the money had gone."],
        body: "In my old spreadsheet, the card showed up as a single line: “Invoice”.",
      },
      decision: {
        statement: ["Purchase", "≠", "Payment"],
        lead: ["A card purchase is spending.", "Paying the invoice is cash outflow."],
        steps: [
          { label: "Card purchase" },
          { label: "Accrual month", note: "The installment’s month", mark: "Spending" },
          { label: "Invoice" },
          { label: "Payment", mark: "Cash outflow" },
        ],
        note: "So the same money isn’t counted twice.",
      },
      how: {
        title: "How it works",
        steps: ["Record", "Classify", "Card / upfront", "Invoice", "Payment", "Reports"],
        modes: [
          { title: "Paid upfront", text: "Spending and cash together." },
          { title: "Credit card", text: "Spending now, cash later." },
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
        role: "End‑to‑end conception and development: product, financial rules, backend, frontend, migration and deployment.",
        notes: ["Custom authentication", "Account isolation", "Migrations", "Read-only demo"],
      },
      result: {
        title: "Result",
        lead: "Sentavos replaced my spreadsheet. It’s where I track my money today.",
        body: "Real use changed the product too: features were dropped, reworked or born as problems showed up.",
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
        body: "In the Caatinga, seasonality, leaf drop and exposed soil throw off generic satellite estimates. GeoCarbo aims for a first reading, automated and transparent, ahead of inventory and certification.",
      },
      how: {
        title: "How it works",
        lead: "Sentinel-2 imagery and equations published for the Caatinga estimate the vegetation carbon of each property.",
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
        statement: ["Published method.", "Declared limits."],
        chain: ["Biomass", "Carbon", "CO₂e"],
        text: "A regression published for the Caatinga estimates biomass; declared coefficients convert it into carbon and CO₂e.",
        quote: "The system doesn’t hide it when the data goes beyond the model.",
        limits: [
          { title: "Calibrated range", text: "The model holds for the NDVI range it was calibrated on." },
          { title: "Extrapolation warning", text: "Outside that range, the estimate is flagged." },
          { title: "Above ground only", text: "The calculation covers above-ground biomass only." },
          { title: "No field validation", text: "A preliminary estimate, not yet compared against field measurements." },
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
        "I started in support. Over time, I began turning operational problems into systems and automations.",
      headline: ["I came in through support.", "I grew by understanding the operation", "and building for it."],
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
        lead: "I started as an apprentice. Over time, I began turning operational problems into systems and automations.",
        rolesLabel: "Formal track",
        roles: { apprentice: "Apprentice", assistant: "IT Assistant" },
        evolutionLabel: "How the work changed",
        evolution: [
          "Learn",
          "Understand the operation",
          "Spot problems",
          "Build systems",
          "Ship to production",
          "Maintain",
        ],
      },
      start: {
        title: "The beginning",
        quote:
          "In the first months, almost everything was a first: opening up a laptop, diagnosing hardware, dealing with networks and understanding how technology works inside a real company.",
        fundamentalsLabel: "Fundamentals",
        fundamentals: [
          "Technical support",
          "Hardware & maintenance",
          "Network infrastructure",
          "Ploomes",
        ],
        ploomes:
          "Ploomes is the company’s CRM. Studying it in depth at that stage is what later let me build on its API.",
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
        today: "I’m still on the infrastructure, systems and automations I built and maintain.",
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
        text: "In less than two years: support, hardware, networking, infrastructure, automation, development and integrations. It wasn’t always simple — and maybe that’s why it’s where I grew the most.",
      },
    },
    secco: {
      about: {
        title: "What SECCO is",
        text: "SECCO builds digital products and systems for real problems.",
        quote: "It’s where ambition becomes something built.",
      },
      role: {
        title: "My role",
        dimensions: [
          { title: "Product", items: ["Turning a problem into a direction."] },
          { title: "Technology", items: ["Architecture, backend and integrations."] },
          { title: "Building", items: ["Getting the idea off paper and making it work."] },
          { title: "Company", items: ["Building SECCO together with the team."] },
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
            text: "The first projects, the first challenges and the road from an idea to a company.",
          },
          "bug-hunt": {
            title: "Bug Hunt & Code Review",
            occasion: "IT Week",
            subtitle: "Code broken on purpose. Real problems to find and fix.",
            detail: "The workshop application projected on the wall, with a login error to investigate",
          },
        },
      },
      milestones: {
        title: "Milestones",
        items: {
          "porto-digital": "SECCO’s incubation and its link to the innovation ecosystem.",
          "inova-caatinga": "GeoCarbo developed within an innovation program for the Caatinga.",
          recnplay: "Two hands-on workshops, on Python and the terminal, for the community.",
          "global-pe": "Approved for missions to Portugal and Argentina, still ahead.",
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
    statement: "From problem to production: product, code and operations.",
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
