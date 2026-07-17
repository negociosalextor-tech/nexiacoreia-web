export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "¿Cuánto cuesta un proyecto de IA con NexiaCore?",
    answer:
      "Depende del alcance: no es lo mismo automatizar una tarea puntual que integrar varios sistemas en un proyecto completo. No cotizamos a ciegas — primero entendemos su proceso en una conversación inicial sin costo y, a partir de eso, le damos una estimación real. Puede ver los factores que influyen en el precio en nuestro artículo del blog sobre costos de IA para pymes en Chile.",
  },
  {
    question: "¿Cuánto se demora un proyecto?",
    answer:
      "Trabajamos con implementación ágil: para un alcance inicial acotado, buscamos que los primeros resultados sean visibles en menos de 30 días. Proyectos más grandes, con más integraciones o mayor volumen, toman más tiempo, pero siempre en ciclos cortos para poder ajustar sobre la marcha en vez de esperar meses para ver resultados.",
  },
  {
    question: "¿Cómo parte un proyecto con NexiaCore?",
    answer:
      "Con un diagnóstico: conversamos sobre sus procesos actuales y dónde la IA puede generar mayor impacto. A partir de ahí diseñamos una solución a medida, la implementamos en ciclos ágiles y medimos los resultados junto a su equipo para ajustar lo que sea necesario.",
  },
  {
    question: "¿Qué incluye la Auditoría Gratuita?",
    answer:
      "Es una conversación inicial, sin costo ni compromiso, para entender su organización, sus procesos actuales y dónde podría tener sentido aplicar automatización o inteligencia artificial. Al final de esa conversación usted sabrá si tiene sentido avanzar a una propuesta concreta, sin presión para contratar.",
  },
  {
    question: "¿Trabajan con instituciones de gobierno?",
    answer:
      "Sí. Tenemos experiencia en el sector público (B2G) y diseñamos soluciones específicas para organismos públicos de Chile y Latinoamérica: atención ciudadana, gestión de trámites, transparencia y cumplimiento normativo, entendiendo los plazos y regulaciones propios del Estado.",
  },
];
