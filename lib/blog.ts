export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string; // ISO date
  readingMinutes: number;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-implementar-ia-pyme-chilena-2026",
    title: "¿Cuánto cuesta implementar IA en una pyme chilena en 2026?",
    metaDescription:
      "Una guía honesta sobre qué determina el costo de un proyecto de inteligencia artificial para una pyme en Chile: factores clave, rangos orientativos y cómo evitar pagar de más.",
    excerpt:
      "No existe un precio único para 'implementar IA'. Esta guía explica qué factores realmente determinan el costo y cómo pensar el presupuesto sin caer en promesas vacías.",
    publishedAt: "2026-07-16",
    readingMinutes: 5,
    content: [
      {
        type: "p",
        text: "Si ha buscado \"cuánto cuesta implementar inteligencia artificial en mi empresa\", probablemente se encontró con respuestas muy distintas entre sí: desde herramientas gratuitas hasta proyectos que cuestan millones de pesos. Ambas respuestas pueden ser ciertas al mismo tiempo, porque \"implementar IA\" no es un producto único con un precio fijo, sino una categoría que va desde activar una herramienta ya existente hasta construir un sistema a medida integrado a sus procesos internos.",
      },
      {
        type: "p",
        text: "Esta guía no le va a dar un número mágico, porque cualquiera que se lo dé sin conocer su caso específico probablemente esté simplificando de más. En cambio, le explicamos qué es lo que realmente mueve el precio de un proyecto de IA para una pyme en Chile, para que pueda evaluar cualquier propuesta —la nuestra o la de otro proveedor— con criterio.",
      },
      {
        type: "h2",
        text: "Qué determina el costo de un proyecto de IA",
      },
      {
        type: "p",
        text: "Antes de hablar de rangos de precio, hay que entender las variables que los explican. En nuestra experiencia trabajando con organizaciones en Chile, estos son los factores que más impactan el presupuesto de un proyecto:",
      },
      {
        type: "ul",
        items: [
          "Alcance del proceso a automatizar: no es lo mismo automatizar una tarea puntual (por ejemplo, clasificar un tipo de documento) que rediseñar un flujo completo con múltiples pasos y aprobaciones.",
          "Cantidad y calidad de las integraciones: conectar la solución con sus sistemas actuales (ERP, CRM, correo, WhatsApp, sistema contable) agrega trabajo de ingeniería que no siempre es visible a primera vista.",
          "Volumen de datos o documentos: procesar 50 documentos al mes es un problema distinto a procesar 5.000, tanto en infraestructura como en la revisión de calidad necesaria.",
          "Si el proyecto es un piloto o una solución en producción: un piloto acotado, pensado para validar la idea, cuesta y se demora menos que una solución pensada para operar de forma continua y confiable.",
          "Nivel de personalización: usar una herramienta ya existente y configurarla es más económico que construir un modelo o flujo a medida desde cero.",
          "Mantención y mejora continua: la implementación inicial no es el único costo; ajustar el sistema con datos reales después de lanzarlo también toma tiempo.",
        ],
      },
      {
        type: "h2",
        text: "Rangos orientativos por tipo de proyecto",
      },
      {
        type: "p",
        text: "Para ordenar la conversación, es útil pensar en tres niveles de proyecto. Los rangos exactos dependen del alcance específico, así que aquí dejamos la estructura de referencia; los valores concretos para el mercado chileno en 2026 los estamos afinando con datos reales de proyectos y los publicaremos apenas estén validados.",
      },
      {
        type: "ul",
        items: [
          "Piloto acotado (validar una idea con bajo riesgo): {{RANGO_PRECIO_PILOTO}}. Pensado para probar un caso de uso específico, con alcance reducido y tiempos de implementación cortos.",
          "Automatización puntual (un proceso concreto, ya en operación): {{RANGO_PRECIO_AUTOMATIZACION_PUNTUAL}}. Incluye integración básica con al menos un sistema existente y ajuste con datos reales.",
          "Proyecto integral (varios procesos, integraciones múltiples, solución en producción): {{RANGO_PRECIO_PROYECTO_INTEGRAL}}. Requiere levantamiento más profundo, mayor personalización y acompañamiento continuo.",
        ],
      },
      {
        type: "note",
        text: "Nota de transparencia: preferimos dejar estos rangos pendientes en vez de inventar cifras que no podemos respaldar. Si está evaluando un proyecto, conversemos directamente su caso y le damos una estimación real, no un número genérico sacado de un promedio de mercado.",
      },
      {
        type: "h2",
        text: "Los costos que no siempre se mencionan",
      },
      {
        type: "p",
        text: "Más allá del costo de implementación, hay dos partidas que muchas pymes no presupuestan y que conviene tener en el radar desde el principio:",
      },
      {
        type: "ul",
        items: [
          "Adopción interna: la mejor solución técnica no sirve de mucho si su equipo no la usa. Vale la pena considerar tiempo de capacitación y ajuste de procesos internos, no solo el desarrollo técnico.",
          "Mantención y evolución: los procesos de negocio cambian, y una solución de IA que no se revisa periódicamente pierde precisión con el tiempo. Pregunte siempre qué incluye el soporte posterior al lanzamiento y qué no.",
        ],
      },
      {
        type: "h2",
        text: "Cómo evitar pagar de más (o de menos)",
      },
      {
        type: "p",
        text: "Dos señales de alerta que vale la pena tener presentes al evaluar proveedores: si le dan un precio cerrado sin haber entendido su proceso actual, probablemente ese precio no refleja el trabajo real que se necesita; y si le prometen resultados específicos (\"reducirá sus costos en X%\") sin haber revisado sus datos, esa cifra no tiene cómo estar fundamentada todavía. Un proveedor serio necesita entender su caso antes de comprometerse con un número.",
      },
      {
        type: "h2",
        text: "Cómo lo pensamos en NexiaCore",
      },
      {
        type: "p",
        text: "Trabajamos con una metodología de cuatro pasos —diagnóstico, diseño de solución, implementación ágil y medición de resultados— justamente para evitar cotizar a ciegas. Antes de hablar de precio, entendemos su proceso actual y el problema específico que quiere resolver; eso nos permite proponerle un alcance realista, no una cifra genérica.",
      },
      {
        type: "p",
        text: "Si está evaluando dar el primer paso, la conversación inicial no tiene costo: nos sirve tanto a usted como a nosotros para saber si su proyecto tiene sentido antes de hablar de números.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
