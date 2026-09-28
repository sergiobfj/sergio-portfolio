import type { Dictionary } from "./pt";

const es: Dictionary = {
  meta: {
    title: "Sergio Barbosa — Creador & Desarrollador",
    description:
      "Creador y desarrollador construyendo productos, sistemas y automatizaciones.",
  },
  nav: {
    work: "Trabajos",
    experience: "Experiencia",
    about: "Sobre mí",
    contact: "Contacto",
    menu: "Menú",
    open: "Abrir menú",
    close: "Cerrar menú",
    main: "Navegación principal",
    language: "Idioma",
    social: "Redes",
    skip: "Saltar al contenido",
    home: "Sergio Barbosa — inicio",
  },
  hero: {
    role: ["Creador,", "Desarrollador."],
  },
  work: {
    title: "Trabajos",
    note: "Cosas que construí: productos, sistemas, automatizaciones y sitios — buena parte en código propietario.",
    cursor: "Ver",
    count: { one: "trabajo", other: "trabajos" },
    soon: "Próximamente",
    empty: "Los primeros trabajos de esta categoría llegan pronto.",
    caseSoon: "Caso en construcción",
    back: "Volver a trabajos",
    next: "Siguiente categoría",
  },
  categories: {
    products: {
      title: ["Productos &", "Sistemas"],
      description: "Productos y sistemas, del primer commit a la operación.",
    },
    automations: {
      title: ["Automatizaciones &", "Integraciones"],
      description:
        "Automatizaciones internas, integraciones con APIs, herramientas operativas y bots.",
    },
    web: {
      title: ["Web &", "Experiencias digitales"],
      description:
        "Sitios, landing pages y experiencias digitales — propios y para clientes.",
    },
    tools: {
      title: ["Experimentos &", "Herramientas"],
      description:
        "Herramientas internas, scripts y experimentos técnicos: soluciones pequeñas para problemas específicos.",
    },
  },
  cases: {
    "router-planner": {
      summary:
        "De organizar rutas a mano en Excel a una operación integrada al CRM.",
      kicker: "Sistema interno · Logística · Ploomes API",
      tags: ["Producto interno", "Logística"],
      captions: {
        "legacy-excel": "Proceso anterior basado en Excel",
        "route-selection": "Selección de rutas dentro de Router Planner",
        export: "Archivo generado automáticamente para la operación",
        validation: "Verificaciones antes de la operación",
      },
    },
    sentavos: {
      summary: "Producto propio de finanzas personales.",
      captions: { dashboard: "Presupuesto del mes" },
    },
    geocarbo: {
      kicker: "Climate tech · dMRV · Carbono",
      tags: ["Climate tech", "dMRV", "Carbono"],
      captions: {
        dashboard: "Vista general del monitoreo",
        "cadastro-propriedade": "Registro de una propiedad para monitoreo",
        relatorios: "Informes generados",
      },
    },
    "crm-textil": {
      kicker: "Sistema en desarrollo",
      tags: ["Sistema en desarrollo"],
    },
    "bot-de-vendas": {
      title: "Bot de Ventas",
      summary:
        "BI conversacional con notificaciones y preguntas en lenguaje natural, directo del CRM.",
      kicker: "BI Conversacional · Virtron",
      tags: ["BI Conversacional", "En producción"],
      captions: {
        "telegram-sale": "Notificación de nueva venta en Telegram",
      },
    },
    "arena-sustentabilidade": {
      summary:
        "Experiencia digital de la Arena da Sustentabilidade, en el São João de Caruaru 2026.",
      kicker: "Experiencia digital · São João de Caruaru 2026",
      tags: ["Experiencia digital", "São João de Caruaru 2026"],
      captions: {
        calculator: "Calculadora de impacto de CO₂",
        experiences: "Lo que el visitante encuentra en la Arena",
        mobile: "Versión móvil",
      },
    },
    "relatorio-merger": {
      summary: "Combina dos informes de Excel usando el código interno del cliente.",
      kicker: "Herramienta interna · Python",
      tags: ["Herramienta interna", "Python"],
      headline:
        "Mi primer sistema interno empezó con una pregunta simple: ¿por qué pasar una hora haciendo algo que el código resuelve en pocos minutos?",
      context: "Una de las primeras herramientas que desarrollé en Virtron.",
      problem: "Había que cruzar dos informes de Excel a mano.",
      solution:
        "Una aplicación en Python que combina los dos informes usando el código interno del cliente como identificador.",
      impact: "La herramienta sigue en uso interno.",
      metrics: [
        { value: "~1 h", caption: "Antes, en cada cruce" },
        { value: "~5 min", caption: "Después, con la herramienta" },
        { value: "~2×", caption: "Por semana" },
      ],
      metricsNote: "Cifras aproximadas.",
    },
    "automacoes-operacionais": {
      title: "Automatizaciones del día a día",
      summary:
        "Scripts de la operación real: paneles que se actualizan solos, recolección de datos y automatización de navegador.",
      kicker: "Scripts · Automatización de navegador",
      tags: ["Automatización", "Scripts"],
    },
  },
  stories: {
    "router-planner": {
      headline: [
        "De un proceso manual en hojas de cálculo",
        "a una operación integrada al CRM.",
      ],
      code: ["Proyecto interno", "Código propietario"],
      before: {
        title: "El proceso anterior",
        lead: "Antes de Router Planner, las rutas se organizaban a mano.",
        body: "El equipo partía de los clientes registrados en Ploomes y copiaba cada registro a la pestaña de su ruta en una hoja de Excel — cada semana.",
        metrics: [
          { value: "~40", caption: "Clientes en una semana típica" },
          { value: "8+", caption: "Rutas organizadas normalmente" },
          {
            value: "1+ día",
            caption: "En los escenarios más pesados, del viernes al sábado",
          },
        ],
        note: "Cifras aproximadas.",
      },
      compare: {
        label: "Antes × Después",
        before: "Antes",
        after: "Después",
        beforeSteps: [
          "Ploomes",
          "Hoja de cálculo",
          "Copiar clientes",
          "Separar a mano por pestañas",
          "Revisar",
          "Imprimir",
          "Operación",
        ],
        afterSteps: [
          "Ploomes API",
          "Router Planner",
          "Seleccionar ruta",
          "Validar datos",
          "Generar archivo",
          "Operación",
        ],
        manual: "Manual",
        decision: "Decisión humana",
        quote: [
          "La principal decisión humana pasa a ser:",
          "“¿Qué ruta debe seguir este cliente?”",
        ],
      },
      output: {
        statement: ["Excel como salida,", "no como sistema."],
        body: [
          "Router Planner no sacó Excel de la operación por sacarlo. Sacó el trabajo manual de construir la hoja.",
          "El analista selecciona las rutas en el sistema y la aplicación genera el archivo que usa la operación.",
        ],
        file: "El archivo generado",
        general: "General",
        route: "Ruta",
        legend: [
          "Una pestaña general con todos los clientes procesados.",
          "Una pestaña por ruta elegida — unas ocho o más, según las ventas y entregas de la semana.",
        ],
      },
      data: {
        title: ["No se trataba solo", "de ir más rápido."],
        subtitle: "Se trataba de trabajar con la información correcta.",
        body: "En la hoja antigua, lo que cambiaba en el CRM después de la preparación podía no llegar a logística: una dirección actualizada en Ploomes, por ejemplo, o un cliente que entraba en el flujo de cancelación.",
        checks: [
          {
            title: "Cambios de registro",
            text: "La dirección que vale es la que está hoy en Ploomes, no la de la hoja de la semana.",
          },
          {
            title: "Cancelaciones",
            text: "Los clientes que entraron en el flujo de cancelación se verifican antes de la operación.",
          },
          {
            title: "Datos actualizados",
            text: "La consulta va directo al CRM, por la API, al organizar las rutas.",
          },
        ],
      },
      flow: {
        title: "Flujo del sistema",
        steps: [
          "Ploomes CRM",
          "API",
          "FastAPI",
          "Validaciones y reglas",
          "Router Planner",
          "Organización de rutas",
          "Exportación Excel",
          "Logística",
        ],
      },
      result: {
        title: "Resultado",
        value: "~1–2h",
        caption:
          "Tiempo aproximado, hoy, para organizar una operación típica — según la cantidad de clientes.",
        note: "Estimación operativa, no un benchmark.",
        before: {
          label: "Antes",
          text: "El proceso podía empezar el viernes y extenderse al sábado.",
        },
        after: {
          label: "Después",
          text: "La organización puede completarse en una o dos horas, aproximadamente.",
        },
        gains: [
          "Menos trabajo manual",
          "Datos conectados a la fuente",
          "Validación de cancelaciones",
          "Exportación automática",
          "Menos dependencia de hojas estáticas",
        ],
      },
      role: {
        title: "Mi actuación",
        lead: "Concepción y desarrollo end-to-end de la solución.",
        items: [
          "Comprensión del flujo operativo",
          "Diseño de la solución",
          "Desarrollo de la aplicación",
          "Integración con Ploomes",
          "Implementación de las reglas de validación",
          "Implantación de la aplicación en el entorno de la empresa",
        ],
      },
      stack: {
        title: "Ficha técnica",
        access: "Entorno con control de acceso gestionado.",
      },
    },
    "bot-de-vendas": {
      headline: [
        "Pregunta sobre la operación.",
        "Recibe la respuesta directo del CRM.",
      ],
      origin: {
        title: "El problema",
        lead: "Los datos comerciales ya existían en Ploomes, pero las consultas rápidas seguían requiriendo abrir el CRM, configurar filtros e interpretar la información manualmente.",
        body: "El Bot de Ventas convirtió ese acceso en una conversación en Telegram.",
        note: "Este proyecto nació de la automatización de la Jornada do Cliente y evolucionó hasta convertirse en un ecosistema de inteligencia comercial.",
      },
      pillars: {
        title: ["El proyecto creció", "más allá de la primera automatización."],
        items: [
          {
            title: "Pipeline de datos",
            steps: ["Ploomes", "Python", "Google Sheets", "Looker Studio"],
          },
          {
            title: "Notificaciones",
            steps: ["Bot en Telegram", "Nuevas ventas", "Resumen diario"],
          },
          {
            title: "BI conversacional",
            steps: [
              "Pregunta por texto o audio",
              "Interpretación",
              "Consulta a Ploomes",
              "Agregación",
              "Respuesta",
            ],
          },
        ],
      },
      pipeline: {
        title: "Dashboard & ETL",
        lead: "La capa de datos que alimenta el dashboard ejecutivo y los análisis históricos.",
        body: "El pipeline consulta Ploomes, transforma y organiza los registros, elimina duplicados relevantes y escribe el resultado en cuatro estructuras en Google Sheets — que alimentan el dashboard en Looker Studio.",
        note: "El BI conversacional y las notificaciones consultan el CRM directamente.",
        sheetsLabel: "En Google Sheets",
        sheets: ["SDR", "Vendas", "Cohort", "Cohort Long"],
      },
      notifications: {
        title: "¡Otra más!!",
        lead: "El equipo y la dirección, al día sin tener que abrir el dashboard.",
        items: [
          "Consulta nuevas ventas periódicamente",
          "Detección en hasta ~5 minutos",
          "Evita notificaciones duplicadas",
          "Cierre diario consolidado",
        ],
      },
      conversational: {
        title: "BI conversacional",
        lead: "Preguntas en portugués, por texto o por audio.",
        questions: [
          "¿Cuántas ventas tuvimos hoy?",
          "¿Y ayer?",
          "¿Y por vendedor?",
          "¿Cuál fue el ticket promedio de este mes?",
          "Top 5 vendedores por valor.",
          "¿Y en estas ciudades?",
        ],
        flowLabel: "De la pregunta a la respuesta",
        flow: [
          "Pregunta",
          "Parser determinista",
          "Fallback LLM",
          "Intención estructurada",
          "API Ploomes",
          "Filtros y agregación en Python",
          "Respuesta determinista",
        ],
        fallbackMark: "Solo cuando hace falta",
        statement: ["La IA interpreta.", "El código calcula."],
        explain:
          "El LLM solo entra para entender la intención cuando el parser no lo resuelve. Consultar, filtrar, calcular y formatear la respuesta es trabajo del código — la arquitectura se diseñó justamente para reducir alucinaciones.",
        strategyLabel: "La estrategia",
        strategy: [
          "Las preguntas simples se resuelven primero con un parser determinista.",
          "Solo cuando hace falta, Claude Haiku convierte la pregunta en una intención estructurada.",
          "Unas reglas normalizan los casos ambiguos, y el contexto de la conversación puede reutilizarse.",
          "La API entrega los datos, Python calcula y la respuesta se arma de forma determinista.",
        ],
        highlights: [
          { value: "0 tokens", caption: "Las preguntas simples las interpreta el parser determinista." },
          { value: "6 métricas", caption: "Ventas, valor vendido, ticket promedio, R$/kWp, leads y pérdidas." },
          { value: "15 min", caption: "Contexto conversacional para follow-ups." },
        ],
      },
      audio: {
        title: "La voz también funciona",
        value: "~60 s",
        text: "Los audios enviados por Telegram se transcriben localmente con Whisper y entran en el mismo pipeline de las preguntas en texto.",
      },
      coverage: {
        title: "Qué se puede preguntar",
        metricsLabel: "Métricas",
        metrics: [
          "Cantidad de ventas",
          "Valor vendido",
          "Ticket promedio",
          "R$/kWp",
          "Leads nuevos",
          "Negocios perdidos",
        ],
        filtersLabel: "Filtros y agrupaciones",
        filters: [
          "Vendedor",
          "Ciudad",
          "Origen",
          "Forma de pago",
          "Banco",
          "Período",
        ],
        note: "Con rankings y comparaciones entre períodos.",
      },
      impact: {
        title: "Impacto",
        items: [
          "Sin exportación manual recurrente",
          "Sin combinar pestañas a mano",
          "Panel actualizado automáticamente",
          "Una fuente consolidada para el análisis",
          "Notificaciones automáticas de ventas",
          "Acceso rápido a la información comercial",
          "Preguntas en lenguaje natural",
          "Menos dashboards abiertos para consultas simples",
        ],
      },
      stack: {
        title: "Ficha técnica",
        status: "En producción, con partes todavía en evolución.",
      },
    },
    "arena-sustentabilidade": {
      headline: ["Una experiencia digital para", "el São João de Caruaru 2026."],
      context: {
        title: "Contexto",
        text: "La Arena da Sustentabilidade formaba parte de la programación oficial del São João de Caruaru 2026 y trataba sobre sostenibilidad y generación de energía. La experiencia digital se desarrolló para esa activación.",
      },
      calculator: {
        title: "Calculadora de impacto de CO₂",
        lead: "El recurso principal: estimar las emisiones de una operación y cuántos árboles harían falta para compensarlas.",
        inputsLabel: "El usuario indica",
        inputs: ["Días", "Consumo / generadores", "Equipo", "Desplazamiento"],
        outputsLabel: "La interfaz calcula",
        outputs: ["Emisión aproximada", "Árboles para compensar"],
      },
      optimization: {
        title: "Optimización",
        before: "~44 MB",
        after: "~2 MB",
        caption: "Imágenes del carrusel, sin pérdida visual perceptible.",
      },
      highlights: {
        title: "Destacados",
        items: [
          "Carrusel de fotos",
          "Diseño responsive",
          "Animaciones ligeras",
          "Aplicación 100% estática",
          "HTML, CSS y JavaScript puros",
        ],
      },
      stack: { title: "Ficha técnica" },
    },
    "automacoes-operacionais": {
      headline: ["No todo problema tiene", "que volverse un gran sistema."],
      lead: "Scripts y automatizaciones pequeñas, hechas para sacar el trabajo repetitivo del camino de la operación.",
      featured: {
        label: "Ejemplo publicado",
        title: "Paneles de las TVs internas",
        steps: [
          { label: "Antes", text: "Los paneles que se muestran en las TVs internas — con indicadores como ventas y citas — se actualizaban a mano." },
          { label: "Cómo", text: "Un script en Python con Selenium y PyAutoGUI identifica los botones vía XPath y actualiza los datos solo." },
          { label: "Resultado", text: "Menos esfuerzo manual e información siempre actualizada en las pantallas." },
        ],
        note: "Números censurados en la demostración; el código publicado es una versión sanitizada.",
        post: "Ver el post",
        code: "Código (versión sanitizada)",
      },
      blocksLabel: "Qué más entra aquí",
      blocks: [
        "Web scraping",
        "Automatización de navegador",
        "Scripts",
        "Recolección de datos",
        "Tareas repetitivas eliminadas con código",
      ],
    },
  },
  caseStudy: {
    company: "Empresa",
    year: "Año",
    category: "Categoría",
    stack: "Tecnologías",
    problem: "Problema",
    solution: "Solución",
    impact: "Impacto",
    live: "Ver en línea",
    linkedin: "Post en LinkedIn",
    repository: "Repositorio",
    context: "Contexto",
    internal: "Proyecto interno",
    privateCode: "Código propietario",
    figure: "Fig.",
    stackGroups: {
      backend: "Backend",
      backendData: "Backend / Datos",
      integration: "Integración",
      crm: "CRM",
      data: "Datos & exportación",
      dataLayer: "Capa de datos",
      dashboard: "Dashboard",
      ai: "IA / NLP",
      frontend: "Frontend",
      interface: "Interfaz",
      infrastructure: "Infraestructura",
      stack: "Stack",
    },
    pending: "Contexto, proceso y resultado llegan pronto.",
    gallery: "Galería",
    back: "Volver a la categoría",
    next: "Siguiente caso",
  },
  experience: {
    title: "Experiencia",
    now: "Hoy",
    journey: "Mi trayectoria",
    areas: "Áreas de actuación",
    built: "Cosas que construí",
    gallery: "Galería",
    writing: "Capítulo en escritura.",
    builtEmpty: "Los casos de esta experiencia llegan pronto.",
    galleryEmpty: "Fotos y capturas próximamente.",
    back: "Volver a experiencia",
    next: "Siguiente experiencia",
  },
  experiences: {
    virtron: {
      role: "Aprendiz → Asistente de TI",
      summary:
        "Entré por el soporte. Pasé a construir sistemas, automatizaciones e infraestructura para la operación.",
      headline: ["Empecé resolviendo tickets.", "Después empecé a resolver procesos."],
      captions: {
        promotion: "Momento de la promoción",
        start: "Estación de trabajo en Virtron",
        "former-manager": "Con el antiguo gerente del área",
        "workstation-01": "Desarrollo en el día a día",
        "workstation-02": "Mantenimiento de hardware",
      },
    },
    secco: {
      role: "Co-Founder & CPO",
      pageRole: "Co-Founder · CPO · Developer",
      summary: "Ideas en producto. Tecnología en solución.",
      headline: ["Ideas en producto.", "Tecnología en solución."],
      captions: {
        "team-01": "El equipo SECCO",
        "talk-room": "La charla en UniFavip Wyden",
        poster: "Cartel de la charla en la Semana de TI de UniFavip Wyden",
      },
    },
  },
  experienceStories: {
    virtron: {
      intro: {
        title: "Mi trayectoria",
        lead: "Entré como aprendiz y empecé por lo fundamental: hardware, soporte, redes y operación. Con el tiempo, pasé a construir sistemas, automatizaciones e integraciones para resolver problemas reales de la empresa.",
        rolesLabel: "Trayectoria formal",
        roles: { apprentice: "Aprendiz", assistant: "Asistente de TI" },
        evolutionLabel: "Cómo fue cambiando el trabajo",
        evolution: [
          "Aprender",
          "Entender la operación",
          "Identificar problemas",
          "Construir soluciones",
          "Llevar a producción",
          "Mantener",
        ],
      },
      start: {
        title: "El comienzo",
        quote:
          "En los primeros meses, muchas cosas eran literalmente la primera vez: abrir una notebook, diagnosticar hardware, trabajar con infraestructura de red y entender cómo funciona la tecnología dentro de una empresa real.",
        fundamentalsLabel: "Fundamentos",
        fundamentals: [
          "Soporte técnico",
          "Hardware y mantenimiento",
          "Infraestructura de red",
          "Ploomes",
        ],
        ploomes:
          "Ploomes es el principal CRM de la empresa. Estudiarlo a fondo en esa etapa fue lo que después permitió construir sistemas e integraciones sobre su API.",
      },
      firstTool: {
        label: "Primera herramienta",
        cta: "Ver el mini caso",
      },
      promotion: {
        title: ["De Aprendiz", "a Asistente de TI"],
      },
      broaderScope: {
        title: "Más responsabilidades",
        text: "Con la salida del gerente del área, pasé a asumir una parte mayor de las responsabilidades técnicas y operativas.",
        todayLabel: "Hoy",
        today:
          "Sigo directamente involucrado en la infraestructura, los sistemas, las automatizaciones y las aplicaciones que construí y mantengo.",
      },
      infrastructure: {
        title: "Del código a la infraestructura",
        statement: ["Construir también significa", "ponerlo en línea", "y mantenerlo funcionando."],
        text: "Fui responsable de implantar la VPS que usan las aplicaciones internas — de la contratación al mantenimiento.",
        steps: [
          "Contratación de la VPS",
          "Aprovisionamiento inicial",
          "Configuración",
          "Deploy de las aplicaciones",
          "Mantenimiento continuo",
          "Soporte a los sistemas alojados",
        ],
        stackLabel: "Frentes de trabajo",
        stepsLabel: "Etapas, de la contratación al mantenimiento",
        stack: ["VPS Linux", "Deploy", "Administración de servicios", "Mantenimiento"],
      },
      closing: {
        statement: ["Mi primer empleo", "también fue mi primer", "gran laboratorio."],
        text: "En menos de dos años pasé por soporte, hardware, redes, infraestructura, automatización, desarrollo e integraciones. No siempre fue simple. Quizás justamente por eso fue donde más maduré profesionalmente.",
      },
    },
    secco: {
      about: {
        title: "Qué es SECCO",
        text: "SECCO es una empresa de tecnología enfocada en crear productos digitales, sistemas y soluciones de software para problemas reales.",
        quote:
          "Es donde convertimos ideas en productos, tecnología en solución y ambición en algo construido.",
      },
      role: {
        title: "Mi actuación",
        dimensions: [
          { title: "Producto", items: ["Priorización", "Estructura", "Decisiones de producto"] },
          {
            title: "Tecnología",
            items: ["Backend", "Arquitectura", "Integraciones", "Deploy", "Infraestructura"],
          },
          { title: "Construcción", items: ["Sacar ideas del papel", "y convertirlas en sistemas"] },
          { title: "Empresa", items: ["Participación en la evolución", "y en la construcción de SECCO"] },
        ],
      },
      built: { title: "Lo que construimos" },
      talks: {
        title: ["Charlas, talleres", "& comunidad"],
        kinds: { workshop: "Taller", talk: "Charla" },
        upcoming: "Próximamente",
        with: "Con {names}, de SECCO.",
        items: {
          "recnplay-python": {
            title: "Python, Automatizaciones e Integraciones",
            subtitle: "Conectando sistemas con pocas líneas de código",
          },
          "recnplay-terminal": {
            title: "La Terminal Moderna",
            subtitle: "Productividad para desarrolladores",
          },
          "unifavip-empreendedorismo": {
            title: "De la Facultad al Emprendimiento",
            text: "Una conversación sobre la transición entre la facultad, la construcción de proyectos, los primeros desafíos y el proceso de convertir una idea en empresa.",
          },
          "bug-hunt": {
            title: "Bug Hunt & Code Review",
            subtitle: "Aprendiendo con Código del Mundo Real",
            text: "Un taller práctico sobre análisis de código, detección de fallas y corrección de problemas cercanos a la realidad del software en producción.",
          },
        },
      },
      milestones: {
        title: "Hitos",
        items: {
          "porto-digital": "Incubación y conexión con el ecosistema",
          "inova-caatinga": "Participación y desarrollo ligados a GeoCarbo",
          recnplay: "Talleres y presencia en la comunidad",
          "global-pe": "Próximamente",
        },
      },
    },
  },
  background: {
    title: "Trayectoria",
    since: "Desde",
    technology: "Aprendiendo y construyendo con tecnología",
    technical: {
      value: "Técnico",
      title: "Análisis y Desarrollo de Sistemas",
    },
    degree: {
      value: "B.Sc.",
      title: "Ciencias de la Computación",
      status: "En curso",
    },
  },
  secco: {
    discipline: "Software & Tecnología",
    role: ["Co-Founder", "& CPO"],
    products: "Productos",
    cta: "Conocer",
  },
  about: {
    label: "Sobre mí",
    headline: ["Construyo cosas", "que funcionan."],
    statement:
      "Del primer commit a la operación diaria: interfaz, sistema, automatización y el negocio alrededor.",
    portraitAlt: "Sergio Barbosa dando un taller en REC'n'Play Caruaru",
    portraitCaption: "Taller en REC'n'Play Caruaru",
  },
  contact: {
    label: "Contacto",
    headline: ["Trabajemos", "juntos."],
    cta: "Escríbeme",
    note: "Abierto a productos, alianzas y problemas difíciles.",
    emailLabel: "Correo",
    location: "Caruaru, Brasil",
  },
  notFound: {
    title: "Página no encontrada",
    back: "Volver al inicio",
  },
};

export default es;
