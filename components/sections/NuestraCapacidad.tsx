import { Search, Blocks, Rocket, ChartLine, Zap, Megaphone, Activity, Coins, Lock } from "lucide-react";
import NetworkGraphic from "@/components/NetworkGraphic";

const realProjects = [
  {
    icon: Megaphone,
    sector: "Marketing de Performance / Media Buying",
    title: "Automatización de Marketing con IA",
    description:
      "Pipeline de inteligencia artificial que recrea anuncios ganadores en decenas de variantes de copy e imagen automáticamente, más bots de inteligencia competitiva y reportes de ingresos automatizados, usado a diario por un equipo de media buyers.",
    result: "En uso diario en producción, con ahorro medible de horas de trabajo manual por semana.",
  },
  {
    icon: Activity,
    sector: "Performance Marketing / Tracking Digital",
    title: "Infraestructura de Tracking para Campañas Digitales",
    description:
      "Arquitectura completa de seguimiento de conversiones — desde landing pages hasta la plataforma de anuncios, pasando por procesamiento en el borde de red y sistemas de atribución — cubriendo múltiples campañas simultáneas.",
    result: "Medición precisa de conversiones en tiempo real para optimizar inversión publicitaria.",
  },
  {
    icon: Coins,
    sector: "Fintech / Trading",
    title: "SaaS de Tracking para Trading P2P",
    description:
      "Plataforma en producción para traders de criptomonedas en mercados peer-to-peer, con seguimiento de operaciones, exportación de datos y notificaciones automatizadas.",
    result: "SaaS activo, con clientes pagando de forma recurrente.",
  },
];

const methodology = [
  {
    icon: Search,
    step: "1",
    title: "Diagnóstico",
    description:
      "Evaluamos sus procesos actuales y detectamos dónde la IA genera mayor impacto.",
  },
  {
    icon: Blocks,
    step: "2",
    title: "Diseño de solución",
    description:
      "Diseñamos una solución a medida, alineada a sus sistemas y objetivos de negocio.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "Implementación ágil (30 días)",
    description:
      "Desplegamos en ciclos cortos para que empiece a ver resultados desde el primer mes.",
  },
  {
    icon: ChartLine,
    step: "4",
    title: "Medición de resultados",
    description:
      "Medimos el impacto real con métricas claras y ajustamos la solución en el tiempo.",
  },
];

export default function NuestraCapacidad() {
  return (
    <section id="metodologia" className="py-24 bg-brand-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Cómo Trabajamos
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            Nuestra Metodología
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Somos una empresa en etapa temprana. Le mostramos cómo trabajamos
            y algunos proyectos reales que hemos desarrollado — por acuerdos
            de confidencialidad con los clientes, los presentamos sin
            nombres ni datos que los identifiquen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {methodology.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 bg-brand-800 border border-brand-700 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <span className="text-accent font-[family-name:var(--font-heading)] font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold font-[family-name:var(--font-heading)] text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Zap className="text-accent" size={20} />
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
              Proyectos Reales
            </h3>
          </div>
          <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Lock size={14} />
            Presentados sin nombres de clientes ni empresas, por acuerdo de
            confidencialidad.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {realProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="relative overflow-hidden p-6 bg-brand-800 border border-brand-700"
                >
                  <NetworkGraphic
                    variant="compact"
                    className="absolute -top-6 -right-6 w-32 h-32 opacity-30 pointer-events-none"
                  />
                  <div className="relative flex items-center gap-2 mb-4">
                    <Icon className="text-accent" size={16} />
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                      {project.sector}
                    </span>
                  </div>
                  <h4 className="relative text-lg font-semibold font-[family-name:var(--font-heading)] text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="relative text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="relative flex items-start gap-2 pt-4 border-t border-brand-700">
                    <span className="text-sm font-semibold text-accent">
                      {project.result}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
