import type { LucideIcon } from "lucide-react";
import {
  Workflow,
  Cpu,
  MessageSquare,
  ChartColumn,
  Cog,
  FileText,
  Receipt,
  ChartLine,
  Eye,
  Languages,
  Building2,
  Lightbulb,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Tiene página de detalle propia en /servicios/[slug] (Bloque 2) */
  hasDetailPage: boolean;
};

export const services: Service[] = [
  {
    slug: "automatizacion-procesos",
    title: "Automatización Inteligente",
    description:
      "Eliminamos tareas repetitivas con flujos automatizados que operan 24/7, liberando a su equipo para la innovación estratégica.",
    icon: Workflow,
    hasDetailPage: true,
  },
  {
    slug: "ia-empresarial",
    title: "IA Empresarial",
    description:
      "Modelos de inteligencia artificial personalizados que se integran a sus procesos de negocio para maximizar la eficiencia operativa.",
    icon: Cpu,
    hasDetailPage: false,
  },
  {
    slug: "chatbots-empresas",
    title: "Chatbots Inteligentes",
    description:
      "Asistentes virtuales con comprensión contextual avanzada para atención al cliente, soporte interno y gestión de consultas.",
    icon: MessageSquare,
    hasDetailPage: true,
  },
  {
    slug: "analitica-de-datos",
    title: "Analítica de Datos",
    description:
      "Transformamos grandes volúmenes de información en insights accionables que impulsan decisiones estratégicas fundamentadas.",
    icon: ChartColumn,
    hasDetailPage: false,
  },
  {
    slug: "transformacion-digital",
    title: "Transformación Digital",
    description:
      "Acompañamos a su organización en cada etapa del proceso de modernización tecnológica con metodologías probadas.",
    icon: Cog,
    hasDetailPage: false,
  },
  {
    slug: "gestion-documental-ia",
    title: "Gestión Documental IA",
    description:
      "Clasificación, extracción y procesamiento inteligente de documentos que reduce tiempos de gestión en más del 80%.",
    icon: FileText,
    hasDetailPage: true,
  },
  {
    slug: "procesamiento-facturas",
    title: "Procesamiento de Facturas",
    description:
      "Automatización del ciclo completo de facturación con reconocimiento óptico y validación inteligente de datos.",
    icon: Receipt,
    hasDetailPage: true,
  },
  {
    slug: "dashboards-predictivos",
    title: "Dashboards Predictivos",
    description:
      "Paneles de control con analítica predictiva que anticipan tendencias y permiten actuar antes que la competencia.",
    icon: ChartLine,
    hasDetailPage: false,
  },
  {
    slug: "vision-computacional",
    title: "Visión Computacional",
    description:
      "Sistemas de reconocimiento visual para control de calidad, seguridad, monitoreo y análisis de imágenes en tiempo real.",
    icon: Eye,
    hasDetailPage: false,
  },
  {
    slug: "procesamiento-lenguaje-natural",
    title: "Procesamiento de Lenguaje Natural",
    description:
      "Análisis de sentimiento, clasificación de textos y extracción de información de documentos no estructurados.",
    icon: Languages,
    hasDetailPage: false,
  },
  {
    slug: "ia-para-gobierno",
    title: "IA para Gobierno",
    description:
      "Soluciones especializadas para organismos públicos: atención ciudadana, gestión de trámites y transparencia digital.",
    icon: Building2,
    hasDetailPage: true,
  },
  {
    slug: "consultoria-estrategica-ia",
    title: "Consultoría Estratégica IA",
    description:
      "Evaluamos su madurez digital y diseñamos hojas de ruta personalizadas para la adopción exitosa de inteligencia artificial.",
    icon: Lightbulb,
    hasDetailPage: false,
  },
];

export const featuredServiceSlugs = [
  "gestion-documental-ia",
  "procesamiento-facturas",
  "chatbots-empresas",
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
