import type { Dictionary } from "./pt";

const es: Dictionary = {
  meta: {
    title: "Sergio Barbosa — Innovador, Creador, Desarrollador",
    description:
      "Innovador, creador y desarrollador. Del problema a la producción: producto, código y operación.",
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
    role: ["Innovador,", "Creador,", "Desarrollador."],
    portraitAlt: "Sergio Barbosa de pie, hablando y gesticulando, con gafas y camisa negra",
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
      description: "Herramientas internas, scripts y experimentos para problemas específicos.",
    },
  },
  cases: {
    "router-planner": {
      summary: "Rutas de logística organizadas directo desde el CRM, sin copiar cliente por cliente.",
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
      summary: "Finanzas personales sin contar el mismo dinero dos veces.",
      tags: ["Producto propio", "Finanzas personales"],
      captions: {
        "card-purchase": "Una compra con tarjeta, en cuotas",
        budget: "Presupuesto del mes: el gasto frente a la meta de cada categoría",
        invoice: "El detalle de una factura",
        review: "La pantalla de revisión",
        wealth: "Patrimonio e inversiones",
      },
    },
    geocarbo: {
      summary: "Del satélite a una estimación de carbono que muestra cómo se calculó.",
      kicker: "Climate tech · Carbono · MVP",
      tags: ["Climate tech", "Carbono"],
      captions: {
        map: "El polígono de la propiedad",
        analysis: "El detalle de un análisis",
        registration: "Registro de la propiedad",
        reports: "Informes completados, con el PDF para descargar",
        pdf: "El informe en PDF, con método, fuentes y salvedades",
      },
    },
    "crm-textil": {
      kicker: "Sistema en desarrollo",
      tags: ["Sistema en desarrollo"],
    },
    "bot-de-vendas": {
      title: "Bot de Ventas",
      summary: "Ventas notificadas y preguntas respondidas en Telegram, directo del CRM.",
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
        experiences: "Lo que el visitante encuentra en la Arena",
        calculator: "Calculadora de impacto de CO₂",
        mobile: "Versión móvil",
      },
    },
    "relatorio-merger": {
      summary: "Combina dos informes de Excel usando el código interno del cliente.",
      kicker: "Herramienta interna · Python",
      tags: ["Herramienta interna", "Python"],
      headline:
        "Mi primer sistema interno nació de una pregunta: ¿por qué pasar una hora en algo que el código resuelve en minutos?",
      context: "Una de mis primeras herramientas en Virtron.",
      problem: "Había que cruzar dos informes de Excel a mano.",
      solution: "Una aplicación en Python que cruza los dos por el código interno del cliente.",
      impact: "Sigue en uso en la empresa.",
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
        lead: "Antes, la hoja de cálculo era el proceso.",
        body: "Cada semana, cada cliente de Ploomes se copiaba a mano a la pestaña de su ruta.",
        metrics: [
          { value: "~40", caption: "Clientes en una semana típica" },
          { value: "8+", caption: "Rutas organizadas normalmente" },
          { value: "1+ día", caption: "En las semanas más pesadas, del viernes al sábado" },
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
          "Separar por pestañas",
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
          "La decisión que queda en manos de una persona:",
          "“¿Qué ruta debe seguir este cliente?”",
        ],
      },
      output: {
        statement: ["El Excel se quedó.", "El proceso manual, no."],
        lead: "Ahora el sistema es Router Planner; la hoja es solo la salida.",
        file: "El archivo generado",
        general: "General",
        route: "Ruta",
        legend: [
          "Una pestaña general, con todos los clientes.",
          "Una pestaña por ruta — unas ocho o más por semana.",
        ],
      },
      data: {
        title: ["Rápido no bastaba.", "Tenía que estar bien."],
        subtitle: "Antes de salir, cada ruta se verifica en Ploomes.",
        checks: [
          {
            title: "Cambios de registro",
            text: "Vale la dirección que está hoy en Ploomes, no la de la hoja.",
          },
          {
            title: "Cancelaciones",
            text: "Quien entró en el flujo de cancelación se verifica antes de la operación.",
          },
          {
            title: "Datos actualizados",
            text: "La consulta va directo al CRM, por la API, al momento de organizar.",
          },
        ],
      },
      flow: {
        title: "Flujo del sistema",
        steps: [
          { label: "Ploomes CRM", note: "La fuente de los clientes" },
          { label: "API", note: "Consulta al momento de organizar" },
          { label: "Router Planner", note: "FastAPI, validaciones y reglas" },
          { label: "Exportación Excel", note: "Pestaña general y una por ruta" },
          { label: "Logística", note: "La operación" },
        ],
      },
      result: {
        title: "Resultado",
        value: "~1–2h",
        caption:
          "Para organizar una operación típica hoy, según la cantidad de clientes. Antes, podía ir del viernes al sábado.",
        note: "Estimación operativa, no un benchmark.",
        gains: [
          "Menos trabajo manual",
          "Datos conectados a la fuente",
          "Validación antes de la operación",
          "Exportación automática",
        ],
      },
      role: {
        title: "Mi actuación",
        lead: "Concepción y desarrollo end‑to‑end.",
        items: [
          "Comprensión del flujo",
          "Diseño de la solución",
          "Desarrollo",
          "Integración con Ploomes",
          "Reglas de validación",
          "Implantación",
        ],
      },
      stack: {
        title: "Ficha técnica",
        access: "Entorno con control de acceso gestionado",
      },
    },
    "bot-de-vendas": {
      headline: [
        "Pregunta sobre la operación.",
        "Recibe la respuesta directo del CRM.",
      ],
      problem: {
        title: "El problema",
        lead: ["Los datos ya estaban en el CRM.", "Faltaba poder conversar con ellos."],
        body: "Cada consulta rápida exigía abrir Ploomes, filtrar e interpretar a mano. El Bot de Ventas llevó esas preguntas a Telegram.",
      },
      layers: {
        title: "Cómo funciona",
        lead: "Una fuente, dos capas.",
        items: [
          {
            title: "Directo del CRM",
            text: "Las notificaciones y las preguntas consultan la API de Ploomes, sin hojas de por medio.",
            steps: ["Ploomes API", "Python", "Telegram"],
          },
          {
            title: "Capa paralela",
            text: "El ETL que alimenta el dashboard ejecutivo y los análisis históricos.",
            steps: ["Ploomes", "ETL en Python", "Google Sheets", "Looker Studio"],
          },
        ],
        sheetsLabel: "En Google Sheets",
        sheets: ["SDR", "Vendas", "Cohort", "Cohort Long"],
      },
      notifications: {
        title: "¡Otra más!!",
        lead: "El equipo y la dirección, al día sin abrir el dashboard.",
        items: [
          "Detección en hasta ~5 minutos",
          "Sin notificaciones duplicadas",
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
        ],
        statement: ["La IA entiende la pregunta.", "El sistema encuentra la respuesta."],
        explain:
          "El LLM solo entra cuando el parser no resuelve la pregunta — y solo para interpretarla. Consultar Ploomes, filtrar y calcular queda en manos del código, para reducir alucinaciones.",
        interpret: {
          title: "Interpretar",
          steps: ["Pregunta", "Parser determinista", "Fallback LLM", "Intención estructurada"],
        },
        compute: {
          title: "Calcular",
          steps: ["API Ploomes", "Filtros y agregación en Python", "Respuesta determinista"],
        },
        fallbackMark: "Solo cuando hace falta",
        highlights: [
          { value: "0 tokens", caption: "Preguntas simples resueltas por el parser determinista" },
          { value: "15 min", caption: "De contexto para follow-ups" },
          { value: "~60 s", caption: "Audios por Telegram, transcritos localmente con Whisper" },
        ],
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
          "Sin exportar ni combinar a mano",
          "Panel que se actualiza solo",
          "Ventas notificadas en Telegram",
          "Consultas sin abrir el CRM",
        ],
      },
      stack: {
        title: "Ficha técnica",
        status: "En producción, con partes todavía en evolución",
      },
    },
    "arena-sustentabilidade": {
      headline: ["Una experiencia digital para", "el São João de Caruaru 2026."],
      context: {
        title: "Contexto",
        text: "Parte de la programación oficial del São João de Caruaru 2026, la Arena trataba sobre sostenibilidad y generación de energía. La experiencia digital se hizo para esa activación.",
      },
      calculator: {
        title: "Calculadora de impacto de CO₂",
        lead: "Estima las emisiones de una operación y cuántos árboles harían falta para compensarlas.",
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
        items: ["Carrusel de fotos", "Diseño responsive", "Animaciones ligeras", "100% estática"],
      },
      stack: { title: "Ficha técnica" },
    },
    "automacoes-operacionais": {
      headline: ["No todo problema tiene", "que volverse un gran sistema."],
      lead: "Scripts pequeños que sacan el trabajo repetitivo del camino de la operación.",
      featured: {
        label: "Ejemplo publicado",
        title: "Paneles de las TVs internas",
        steps: [
          { label: "Antes", text: "Los paneles de las TVs internas, con ventas y citas, se actualizaban a mano." },
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
        "Recolección de datos",
        "Tareas repetitivas eliminadas con código",
      ],
    },
    sentavos: {
      status: "En producción",
      since: "Desde {date}",
      use: "Uso personal, con una cuenta demo de solo lectura",
      problem: {
        title: "El problema",
        lead: ["Sabía cuánto pagaba.", "No sabía adónde se había ido el dinero."],
        body: "En mi antigua hoja de cálculo, la tarjeta aparecía como una sola línea: “Factura”.",
      },
      decision: {
        statement: ["Compra", "≠", "Pago"],
        lead: ["Una compra con tarjeta es gasto.", "Pagar la factura es salida de caja."],
        steps: [
          { label: "Compra con tarjeta" },
          { label: "Competencia", note: "En el mes de la cuota", mark: "Gasto" },
          { label: "Factura" },
          { label: "Pago", mark: "Salida de caja" },
        ],
        note: "Así, el mismo dinero no se cuenta dos veces.",
      },
      how: {
        title: "Cómo funciona",
        steps: ["Registrar", "Clasificar", "Tarjeta / contado", "Factura", "Pago", "Informes"],
        modes: [
          { title: "Al contado", text: "Gasto y caja juntos." },
          { title: "Tarjeta", text: "Gasto ahora, caja después." },
        ],
        cardLabel: "Tarjeta y cuotas",
        card: [
          "Una compra, cuotas por competencia",
          "Cada cuota en la factura correcta",
          "Pago total o parcial",
          "Las cuotas cierran el total, centavo a centavo",
        ],
      },
      rules: {
        title: "Reglas que protegen el dato",
        statement: "El sistema prefiere no saber antes que inventar.",
        items: [
          {
            title: "Sin clasificar",
            text: "Un registro antiguo sin forma de pago no recibe una por suposición.",
          },
          {
            title: "Conciliación explícita",
            text: "Conciliar es una acción declarada, no una suposición del sistema.",
          },
          {
            title: "Factura sin categoría",
            text: "El pago no tiene categoría: el gasto ya se contó en la compra.",
          },
          {
            title: "Recalcular, no duplicar",
            text: "Los valores derivados se recalculan — nunca se duplican.",
          },
        ],
      },
      engineering: {
        title: "Ingeniería",
        role: "Concepción y desarrollo end‑to‑end: producto, reglas financieras, backend, frontend, migración y despliegue.",
        notes: ["Autenticación propia", "Aislamiento entre cuentas", "Migraciones", "Demo de solo lectura"],
      },
      result: {
        title: "Resultado",
        lead: "Sentavos reemplazó mi hoja de cálculo. Hoy es donde controlo mi dinero.",
        body: "El uso real también cambió el producto: hubo funciones que salieron, cambiaron o nacieron a medida que aparecían los problemas.",
        metrics: [
          { value: "14 meses", caption: "De historial preservados, sin divergencias, en la migración de la tarjeta" },
          { value: "285", caption: "Pruebas automatizadas" },
          { value: "Producción", caption: "Desde {date}" },
        ],
        evolutionLabel: "Evolución",
        evolution: ["Hoja de cálculo", "Web app", "Producción", "Tarjetas y facturas", "Informes"],
        featuresLabel: "En la app",
        features: [
          "Dashboard mensual",
          "Movimientos",
          "Metas por categoría",
          "Tarjetas",
          "Facturas",
          "Cuotas",
          "Personal, Familia y Empresa",
          "Informes",
          "Patrimonio",
          "Inversiones",
        ],
      },
    },
    geocarbo: {
      status: ["Prototipo funcional", "En fase de MVP"],
      problem: {
        title: "El problema",
        quote: "El mercado necesita confiar en el número antes de confiar en el crédito.",
        lead: "Medir carbono en campo es caro y lento.",
        body: "En la Caatinga, la estacionalidad, la caída de hojas y el suelo expuesto confunden las estimaciones genéricas por satélite. GeoCarbo busca una primera lectura, automatizada y transparente, antes del inventario y la certificación.",
      },
      how: {
        title: "Cómo funciona",
        lead: "Imágenes Sentinel-2 y ecuaciones publicadas para la Caatinga estiman el carbono de la vegetación de cada propiedad.",
        steps: [
          { label: "Propiedad", note: "Registro del área" },
          { label: "Polígono", note: "KML o GeoJSON" },
          { label: "Sentinel-2", note: "Escenas recientes, sin nubes" },
          { label: "Índices de vegetación", note: "Sobre la composición de escenas" },
          { label: "Biomasa", note: "Regresión publicada para la Caatinga" },
          { label: "Carbono / CO₂e", note: "Coeficientes declarados" },
          { label: "Informe", note: "Resultado y PDF" },
        ],
        metrics: [
          { value: "Sentinel-2", caption: "Imágenes abiertas vía Copernicus" },
          { value: "10 m", caption: "Resolución de las principales bandas usadas" },
          { prefix: "hasta", value: "5 escenas", caption: "Composición temporal por mediana" },
        ],
      },
      science: {
        statement: ["Método publicado.", "Límites declarados."],
        chain: ["Biomasa", "Carbono", "CO₂e"],
        text: "Una regresión publicada para la Caatinga estima la biomasa; coeficientes declarados la convierten en carbono y CO₂e.",
        quote: "El sistema no oculta cuando el dato se sale del modelo.",
        limits: [
          { title: "Rango calibrado", text: "El modelo vale para el rango de NDVI en el que fue calibrado." },
          { title: "Aviso de extrapolación", text: "Fuera de ese rango, la estimación sale señalada." },
          { title: "Solo sobre el suelo", text: "El cálculo cubre solo la biomasa sobre el suelo." },
          { title: "Sin validación de campo", text: "Estimación preliminar, aún sin comparación con mediciones de campo." },
        ],
      },
      technology: {
        title: "Tecnología",
        architectureLabel: "Arquitectura",
        architecture: [
          "Usuario",
          "Frontend",
          "FastAPI",
          "Celery / Redis",
          "Copernicus",
          "Procesamiento",
          "Supabase",
          "Resultado / PDF",
        ],
      },
      stage: {
        statement: ["Prototipo funcional.", "En fase de MVP."],
        doesLabel: "El pipeline ya",
        does: [
          "Recibe la propiedad",
          "Procesa Sentinel-2",
          "Calcula la estimación",
          "Guarda el resultado",
          "Genera el PDF",
        ],
        notYetLabel: "Todavía no es",
        notYet: [
          "Una plataforma de certificación",
          "Un producto validado por certificadoras",
          "Un dMRV completo",
          "Un sistema con validación de campo",
          "Una solución comercial madura",
        ],
        roadmap: "La arquitectura ya tiene el encaje para modelos entrenados con datos de campo.",
      },
      role: {
        title: "Mi actuación",
        lead: "Co-Founder & CPO de SECCO, con actuación directa en el backend y en la evolución de GeoCarbo.",
        items: [
          "Arquitectura backend",
          "API",
          "Procesamiento",
          "Integración de polígonos",
          "Pipeline satelital",
          "Persistencia",
          "Informes",
          "Despliegue",
        ],
        context: "Contexto: la incubación de SECCO en Porto Digital y su participación en Inova Caatinga.",
      },
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
      database: "Datos",
      processing: "Procesamiento",
      satellite: "Satélite",
      reports: "Informes",
      infrastructure: "Infraestructura",
      quality: "Calidad",
      stack: "Stack",
    },
    pending: "Contexto, proceso y resultado llegan pronto.",
    back: "Volver a la categoría",
    next: "Siguiente caso",
  },
  experience: {
    title: "Experiencia",
    now: "Hoy",
    journey: "Mi trayectoria",
    areas: "Áreas de actuación",
    built: "Cosas que construí",
    writing: "Capítulo en escritura.",
    builtEmpty: "Los casos de esta experiencia llegan pronto.",
    back: "Volver a experiencia",
    next: "Siguiente experiencia",
  },
  experiences: {
    virtron: {
      role: "Aprendiz → Asistente de TI",
      summary:
        "Entré por el soporte. Con el tiempo, pasé a convertir problemas de la operación en sistemas y automatizaciones.",
      headline: ["Entré por el soporte.", "Crecí entendiendo la operación", "y construyendo para ella."],
      captions: {
        promotion: "Momento de la promoción",
        start: "Estación de trabajo en Virtron",
        "former-manager": "Con el antiguo gerente del área",
      },
    },
    secco: {
      role: "Co-Founder & CPO",
      pageRole: "Co-Founder · CPO · Developer",
      summary: "Ideas en producto. Tecnología en solución.",
      headline: ["Ideas en producto.", "Tecnología en solución."],
      captions: {
        "team-01": "El equipo SECCO",
      },
    },
  },
  experienceStories: {
    virtron: {
      intro: {
        title: "Mi trayectoria",
        lead: "Empecé como aprendiz. Con el tiempo, pasé a convertir problemas de la operación en sistemas y automatizaciones.",
        rolesLabel: "Trayectoria formal",
        roles: { apprentice: "Aprendiz", assistant: "Asistente de TI" },
        evolutionLabel: "Cómo fue cambiando el trabajo",
        evolution: [
          "Aprender",
          "Entender la operación",
          "Identificar problemas",
          "Construir sistemas",
          "Llevar a producción",
          "Mantener",
        ],
      },
      start: {
        title: "El comienzo",
        quote:
          "En los primeros meses, casi todo era la primera vez: abrir una notebook, diagnosticar hardware, lidiar con redes y entender cómo funciona la tecnología dentro de una empresa real.",
        fundamentalsLabel: "Fundamentos",
        fundamentals: [
          "Soporte técnico",
          "Hardware y mantenimiento",
          "Infraestructura de red",
          "Ploomes",
        ],
        ploomes:
          "Ploomes es el CRM de la empresa. Estudiarlo a fondo en esa etapa fue lo que después me permitió construir sobre su API.",
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
        text: "Con la salida del gerente del área, asumí una parte mayor de las responsabilidades técnicas y operativas.",
        todayLabel: "Hoy",
        today: "Sigo en la infraestructura, los sistemas y las automatizaciones que construí y mantengo.",
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
        text: "En menos de dos años: soporte, hardware, redes, infraestructura, automatización, desarrollo e integraciones. No siempre fue simple — y quizás por eso fue donde más maduré.",
      },
    },
    secco: {
      about: {
        title: "Qué es SECCO",
        text: "SECCO crea productos digitales y sistemas para problemas reales.",
        quote: "Es donde la ambición se vuelve algo construido.",
      },
      role: {
        title: "Mi actuación",
        dimensions: [
          { title: "Producto", items: ["Convertir un problema en dirección."] },
          { title: "Tecnología", items: ["Arquitectura, backend e integraciones."] },
          { title: "Construcción", items: ["Sacar la idea del papel y ponerla a funcionar."] },
          { title: "Empresa", items: ["Construir SECCO junto con el equipo."] },
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
            text: "Los primeros proyectos, los primeros desafíos y el camino de una idea hasta convertirse en empresa.",
          },
          "bug-hunt": {
            title: "Bug Hunt & Code Review",
            occasion: "Semana de TI",
            subtitle: "Código roto a propósito. Problemas reales para encontrar y corregir.",
            detail: "La aplicación del taller proyectada en la pared, con un error de inicio de sesión para investigar",
          },
        },
      },
      milestones: {
        title: "Hitos",
        items: {
          "porto-digital": "Incubación de SECCO y conexión con el ecosistema de innovación.",
          "inova-caatinga": "GeoCarbo en desarrollo dentro de un programa de innovación para la Caatinga.",
          recnplay: "Dos talleres prácticos, de Python y de terminal, para la comunidad.",
          "global-pe": "Aprobados para misiones en Portugal y Argentina, todavía por delante.",
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
    statement: "Del problema a la producción: producto, código y operación.",
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
