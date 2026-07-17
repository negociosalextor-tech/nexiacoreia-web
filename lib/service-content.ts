export type ServicePageContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  comoLoHacemosIntro: string;
  comoLoHacemos: string[];
  queObtieneIntro: string;
  queObtiene: string[];
  ctaMessage: string;
  relatedSlugs: string[];
  /** Párrafo de cierre, antes del CTA de WhatsApp */
  closing: string;
  /** Nota opcional adicional al final del contenido (ej. mención a GestionDTE) */
  extraNote?: string;
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "gestion-documental-ia",
    metaTitle:
      "Gestión Documental con IA en Chile",
    metaDescription:
      "Clasificación, extracción y digitalización inteligente de documentos para empresas y organismos públicos en Chile. Reduzca el trabajo manual y el riesgo de error.",
    eyebrow: "Gestión Documental",
    h1: "Gestión Documental con Inteligencia Artificial",
    intro: [
      "Muchas organizaciones siguen dependiendo de procesos manuales para clasificar, archivar y buscar información dentro de contratos, boletas, fichas, formularios y otros documentos. Cada documento que se digita a mano, se archiva en la carpeta equivocada o se traspapela representa tiempo perdido, riesgo de error humano y, en sectores regulados, un riesgo de cumplimiento normativo.",
      "A medida que una organización crece, este problema no se resuelve contratando más personas para hacer lo mismo manualmente: se vuelve más caro y más lento. La gestión documental con inteligencia artificial ataca la raíz del problema, no solo el síntoma.",
    ],
    comoLoHacemosIntro:
      "Implementamos un flujo de trabajo que combina reconocimiento óptico de caracteres (OCR), modelos de lenguaje para clasificación y extracción de campos, y reglas de negocio configurables según el tipo de documento y el sector:",
    comoLoHacemos: [
      "Ingesta de documentos desde múltiples canales (correo, carga manual, escáner, integraciones con sistemas existentes).",
      "Clasificación automática por tipo de documento y extracción de los campos relevantes de cada uno.",
      "Validación con reglas de negocio y revisión humana para los casos de menor confianza, en vez de automatizar a ciegas.",
      "Integración con el gestor documental, ERP o sistema interno que su organización ya utiliza.",
      "Trazabilidad completa: quién procesó cada documento, cuándo y con qué resultado.",
    ],
    queObtieneIntro:
      "El objetivo no es reemplazar a su equipo, sino liberarlo de la parte más repetitiva del trabajo:",
    queObtiene: [
      "Menos tiempo dedicado a clasificar y digitar información manualmente.",
      "Menor probabilidad de error humano en el traspaso de datos.",
      "Mayor trazabilidad y facilidad para auditorías o requerimientos de cumplimiento.",
      "Capacidad de absorber más volumen de documentos sin crecer el equipo en la misma proporción.",
    ],
    ctaMessage:
      "Hola, vengo del sitio de NexiaCore y quiero conversar sobre Gestión Documental con IA para mi organización.",
    relatedSlugs: ["procesamiento-facturas", "automatizacion-procesos", "ia-para-gobierno"],
    closing:
      "Cada organización tiene distintos tipos de documentos, sistemas y niveles de exigencia normativa, por lo que no partimos con una plantilla genérica: la primera conversación sirve justamente para entender su volumen de documentos, sus sistemas actuales y qué nivel de automatización tiene sentido para su etapa. A partir de ahí proponemos un alcance concreto, no un proyecto abierto sin fin.",
  },
  {
    slug: "automatizacion-procesos",
    metaTitle: "Automatización de Procesos con IA",
    metaDescription:
      "Automatizamos procesos manuales y repetitivos con inteligencia artificial para empresas en Chile y Latinoamérica. Implementación ágil, integrada a sus sistemas actuales.",
    eyebrow: "Automatización Inteligente",
    h1: "Automatización de Procesos con Inteligencia Artificial",
    intro: [
      "En la mayoría de las organizaciones hay procesos que se repiten decenas o cientos de veces al mes, siempre de la misma forma: copiar datos de un sistema a otro, revisar formularios, generar reportes, responder consultas frecuentes. Ese tipo de trabajo consume tiempo de personas calificadas que podrían dedicarse a tareas de mayor valor.",
      "El problema no suele ser falta de voluntad para automatizar, sino falta de tiempo y de una metodología clara para identificar qué automatizar primero y cómo hacerlo sin interrumpir la operación diaria.",
    ],
    comoLoHacemosIntro:
      "Partimos por entender el proceso actual antes de proponer tecnología. Nuestro enfoque incluye:",
    comoLoHacemos: [
      "Mapeo del proceso actual junto a su equipo, identificando los pasos repetitivos y los puntos de fricción.",
      "Priorización de qué automatizar primero según impacto y facilidad de implementación.",
      "Diseño de flujos automatizados que combinan IA para tareas que requieren comprensión de contenido (texto, documentos, consultas) con integraciones directas entre sus sistemas.",
      "Conexión con las herramientas que su organización ya usa a través de APIs, evitando reemplazar sistemas que funcionan bien.",
      "Acompañamiento durante la puesta en marcha para ajustar el flujo con datos reales, no solo en un ambiente de prueba.",
    ],
    queObtieneIntro: "Un proceso bien automatizado se nota en el día a día del equipo:",
    queObtiene: [
      "Tiempo del equipo liberado de tareas repetitivas para dedicarlo a trabajo de mayor valor.",
      "Menor tiempo de ciclo entre que una solicitud entra y se resuelve.",
      "Mayor consistencia: el proceso se ejecuta igual cada vez, sin depender de quién lo haga ese día.",
      "Visibilidad del proceso completo, con datos que antes quedaban dispersos en distintas planillas o correos.",
    ],
    ctaMessage:
      "Hola, vengo del sitio de NexiaCore y quiero conversar sobre Automatización de Procesos con IA para mi organización.",
    relatedSlugs: ["gestion-documental-ia", "chatbots-empresas", "procesamiento-facturas"],
    closing:
      "No todos los procesos conviene automatizarlos de la misma forma, ni al mismo tiempo. Por eso empezamos por identificar el proceso con mayor impacto y menor complejidad de implementación, para mostrar resultados concretos antes de escalar a otras áreas de la operación.",
  },
  {
    slug: "chatbots-empresas",
    metaTitle: "Chatbots Inteligentes para Empresas",
    metaDescription:
      "Asistentes virtuales con IA para atención al cliente y soporte interno en Chile y Latinoamérica. Disponibles en WhatsApp y web, integrados a sus sistemas.",
    eyebrow: "Chatbots Inteligentes",
    h1: "Chatbots Inteligentes para Empresas",
    intro: [
      "Cuando el volumen de consultas de clientes o colaboradores crece, el equipo de atención empieza a repetir las mismas respuestas una y otra vez, mientras las consultas más complejas —las que realmente necesitan a una persona— esperan en la misma fila. El resultado son tiempos de espera más largos y un equipo desgastado en tareas que no requieren su criterio.",
      "Un chatbot bien diseñado no busca reemplazar a las personas de atención, sino absorber el volumen repetitivo y dejar que su equipo se enfoque en los casos donde realmente agrega valor.",
    ],
    comoLoHacemosIntro:
      "Construimos asistentes virtuales con comprensión contextual, entrenados sobre el conocimiento real de su organización:",
    comoLoHacemos: [
      "Diseño de la base de conocimiento a partir de sus preguntas frecuentes, políticas internas y documentación existente.",
      "Implementación en los canales donde ya están sus clientes o colaboradores: WhatsApp, sitio web u otros sistemas internos.",
      "Comprensión contextual del lenguaje natural, no solo respuestas predefinidas por palabra clave.",
      "Reglas claras de escalamiento a una persona cuando la consulta lo requiere, para no dejar al usuario atrapado en el bot.",
      "Panel de seguimiento de las conversaciones, para detectar patrones y mejorar el asistente con el tiempo.",
    ],
    queObtieneIntro: "Un chatbot bien implementado se traduce en:",
    queObtiene: [
      "Atención disponible fuera del horario de oficina, sin depender de turnos adicionales.",
      "Menor carga de consultas repetitivas sobre el equipo humano.",
      "Respuestas consistentes, sin depender del ánimo o la memoria de quién atienda.",
      "Datos reales sobre qué preguntan sus clientes o colaboradores, útiles para mejorar procesos y productos.",
    ],
    ctaMessage:
      "Hola, vengo del sitio de NexiaCore y quiero conversar sobre Chatbots Inteligentes para mi organización.",
    relatedSlugs: ["automatizacion-procesos", "ia-para-gobierno", "gestion-documental-ia"],
    closing:
      "El punto de partida siempre es su base de conocimiento real: políticas, preguntas frecuentes y procesos actuales de atención. Un chatbot entrenado sobre información genérica no representa a su organización; uno bien construido sí, y eso es lo que buscamos desde el primer prototipo.",
  },
  {
    slug: "ia-para-gobierno",
    metaTitle: "IA para Gobierno y Sector Público",
    metaDescription:
      "Soluciones de inteligencia artificial para organismos públicos en Chile y Latinoamérica: atención ciudadana, gestión de trámites y transparencia digital.",
    eyebrow: "Sector Público",
    h1: "Inteligencia Artificial para Gobierno",
    intro: [
      "Los organismos públicos enfrentan un desafío particular: deben atender un alto volumen de trámites y consultas ciudadanas, con procesos que muchas veces siguen dependiendo de papel o de sistemas antiguos, y bajo un marco regulatorio y de transparencia más exigente que el del sector privado.",
      "A la vez, la ciudadanía espera hoy la misma rapidez y claridad que recibe de servicios digitales privados. Cerrar esa brecha requiere soluciones diseñadas específicamente para el contexto público, no adaptaciones genéricas de herramientas comerciales.",
    ],
    comoLoHacemosIntro:
      "Nuestra experiencia en proyectos B2G nos permite diseñar soluciones que entienden las particularidades del Estado:",
    comoLoHacemos: [
      "Atención ciudadana automatizada multicanal, capaz de resolver consultas frecuentes sobre trámites y requisitos.",
      "Digitalización y gestión inteligente de documentos y solicitudes, reduciendo el uso de papel y el tiempo de procesamiento.",
      "Dashboards de seguimiento y transparencia que permiten rendir cuentas con datos claros y actualizados.",
      "Arquitecturas pensadas para escalar con picos de demanda ciudadana, sin comprometer el servicio.",
      "Diseño alineado a la normativa chilena y a los marcos regulatorios de ciberseguridad y protección de datos aplicables al sector público.",
    ],
    queObtieneIntro: "Para un organismo público, esto se traduce en:",
    queObtiene: [
      "Una atención ciudadana más rápida y disponible, sin aumentar proporcionalmente la dotación de personal.",
      "Procesos de gestión de trámites más ágiles y con menos margen de error.",
      "Mayor transparencia y trazabilidad frente a la ciudadanía y a los organismos fiscalizadores.",
      "Una base tecnológica que puede crecer junto con la demanda, en vez de quedar obsoleta rápidamente.",
    ],
    ctaMessage:
      "Hola, vengo del sitio de NexiaCore y quiero conversar sobre soluciones de IA para mi organismo público.",
    relatedSlugs: ["chatbots-empresas", "gestion-documental-ia", "automatizacion-procesos"],
    closing:
      "Entendemos que un proyecto de IA en el sector público no se evalúa solo por su resultado técnico, sino también por cómo se ajusta a procesos de licitación, plazos administrativos y requisitos de seguridad de la información. Por eso nuestra primera conversación con un organismo público siempre parte por entender ese contexto, antes de proponer una solución.",
  },
  {
    slug: "procesamiento-facturas",
    metaTitle: "Procesamiento Inteligente de Facturas",
    metaDescription:
      "Automatización del ciclo de facturación con IA para empresas en Chile: reconocimiento óptico, validación de datos e integración contable.",
    eyebrow: "Procesamiento de Facturas",
    h1: "Procesamiento Inteligente de Facturas",
    intro: [
      "Recibir, revisar y registrar facturas manualmente es una de las tareas más repetitivas —y más propensas a error— dentro del área contable de cualquier organización. Cada factura que se digita a mano es una oportunidad para un dato mal ingresado, un documento traspapelado o una conciliación que no cuadra al cierre de mes.",
      "El costo real de este problema no es solo el tiempo de digitación: es el tiempo del equipo contable que debería estar analizando la información, no ingresándola.",
    ],
    comoLoHacemosIntro:
      "Aplicamos reconocimiento óptico y validación automática de datos al ciclo completo de facturación:",
    comoLoHacemos: [
      "Recepción automática de facturas desde los canales donde llegan hoy (correo electrónico, portales de proveedores, u otros).",
      "Reconocimiento óptico y extracción estructurada de los datos clave de cada documento (monto, folio, proveedor, fecha, entre otros).",
      "Validación automática contra reglas de negocio, con revisión humana para los casos que lo requieran.",
      "Flujos de aprobación configurables según el monto o tipo de factura.",
      "Integración con el sistema contable de su organización para evitar la doble digitación.",
    ],
    queObtieneIntro: "Un proceso de facturación bien automatizado le permite a su equipo:",
    queObtiene: [
      "Reducir drásticamente el tiempo dedicado a digitar facturas manualmente.",
      "Disminuir los errores de digitación que hoy generan reprocesos.",
      "Tener mayor control y visibilidad sobre el flujo de facturas pendientes de aprobación.",
      "Enfocar al equipo contable en análisis y control, en vez de ingreso de datos.",
    ],
    ctaMessage:
      "Hola, vengo del sitio de NexiaCore y quiero conversar sobre Procesamiento Inteligente de Facturas para mi organización.",
    relatedSlugs: ["gestion-documental-ia", "automatizacion-procesos"],
    closing:
      "El volumen y formato de las facturas que recibe su organización determina qué tan rápido se puede implementar esta solución. Por eso partimos revisando cómo llegan hoy sus facturas y qué sistema contable utiliza, para proponer una integración realista en vez de una promesa genérica.",
    extraNote:
      "Esta misma capacidad es la base de GestionDTE, nuestro propio SaaS de gestión tributaria con IA, que actualmente está en fase final de desarrollo.",
  },
];

export function getServicePageContent(slug: string): ServicePageContent | undefined {
  return servicePages.find((p) => p.slug === slug);
}
