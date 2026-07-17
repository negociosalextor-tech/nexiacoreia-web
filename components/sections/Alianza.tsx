import { Earth, Rocket, Network, Handshake } from "lucide-react";

const highlights = [
  {
    icon: Earth,
    title: "Alcance Regional",
    description: "Presencia activa en múltiples mercados LATAM",
  },
  {
    icon: Rocket,
    title: "Innovación Constante",
    description: "Transferencia de conocimiento en IA Generativa",
  },
  {
    icon: Network,
    title: "Ecosistema Ampliado",
    description: "Red de partners tecnológicos de clase mundial",
  },
  {
    icon: Handshake,
    title: "Sinergia Operativa",
    description: "Ejecución coordinada para proyectos multinacionales",
  },
];

export default function Alianza() {
  return (
    <section
      id="alianza"
      className="py-24 bg-gradient-to-b from-brand-900 to-brand-800"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 border border-brand-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
              </div>
              <div className="absolute top-8 left-8 p-4 bg-brand-700 border border-accent/30">
                <p className="text-accent font-bold font-[family-name:var(--font-heading)] text-lg">
                  Chile
                </p>
                <p className="text-gray-400 text-xs">NexiaCore IA</p>
                <p className="text-gray-500 text-[10px]">Puerto Montt</p>
              </div>
              <div className="absolute bottom-8 right-8 p-4 bg-brand-700 border border-accent/30">
                <p className="text-accent font-bold font-[family-name:var(--font-heading)] text-lg">
                  Panamá
                </p>
                <p className="text-gray-400 text-xs">Innexia.ai</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Handshake className="text-accent" size={36} />
                </div>
              </div>
              <div className="absolute top-8 right-8 text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Cobertura
                </p>
                <p className="text-white font-bold font-[family-name:var(--font-heading)]">
                  LATAM
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Alianza Estratégica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
              Poder Local, <span className="text-accent">Respaldo Internacional</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              NexiaCore IA opera en Chile aliada mediante un{" "}
              <strong className="text-white">memorándum estratégico</strong>{" "}
              con el ecosistema de{" "}
              <strong className="text-white">Innexia.ai</strong> en Panamá.
              Esta alianza nos permite combinar la experiencia local en el
              mercado chileno con una visión panamericana de la inteligencia
              artificial, combinando soluciones de clase mundial con
              ejecución regional.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 bg-brand-700/50 border border-brand-700 flex items-start gap-3"
                  >
                    <Icon className="text-accent mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {item.title}
                      </p>
                      <p className="text-gray-400 text-xs">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
