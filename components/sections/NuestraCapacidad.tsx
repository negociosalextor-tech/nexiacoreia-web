import { Search, Blocks, Rocket, ChartLine, Zap } from "lucide-react";

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
            Somos una empresa en etapa temprana: en vez de mostrar casos que
            no existen, le mostramos cómo trabajamos y compartimos el primer
            proyecto real en cuanto esté listo.
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
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-accent" size={20} />
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
              Primer Caso Real (próximamente)
            </h3>
          </div>
          <div className="max-w-2xl p-6 bg-brand-800 border-2 border-dashed border-brand-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                {"{{SECTOR}}"}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 border border-brand-700 px-2 py-1">
                {"{{CASO_REAL_1}}"}
              </span>
            </div>
            <h4 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-white mb-2">
              {"{{DESCRIPCION}}"}
            </h4>
            <p className="text-sm text-gray-500 mb-4">
              Pendiente: reemplazar con el proyecto real de automatización con
              IA (generación de variantes de anuncios para marketing) en
              cuanto estén los detalles y el testimonio del cliente.
            </p>
            <div className="flex items-center gap-2 pt-4 border-t border-brand-700">
              <span className="text-sm font-semibold text-accent">
                Resultado: {"{{RESULTADO}}"}
              </span>
            </div>
            <p className="text-sm text-gray-400 italic mt-4">
              &ldquo;{"{{TESTIMONIO}}"}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
