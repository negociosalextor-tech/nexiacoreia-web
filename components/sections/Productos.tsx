import { CircleCheck, ExternalLink, Receipt } from "lucide-react";
import NetworkGraphic from "@/components/NetworkGraphic";
import { siteConfig } from "@/lib/site-config";

const bullets = [
  "Recepción automática de facturas por email y WhatsApp",
  "Conciliación bancaria automatizada",
  "Gestión de IVA crédito fiscal",
];

export default function Productos() {
  return (
    <section id="productos" className="py-24 bg-brand-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Nuestros Productos
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            No solo lo decimos, lo construimos
          </h2>
        </div>

        <div className="relative overflow-hidden max-w-3xl mx-auto p-8 md:p-10 bg-brand-900 border border-brand-700">
          <NetworkGraphic
            variant="compact"
            className="absolute -bottom-10 -right-10 w-56 h-56 opacity-20 pointer-events-none"
          />
          <div className="relative flex items-center justify-between gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center">
                <Receipt className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                {siteConfig.gestionDte.name}
              </h3>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent border border-accent/40 px-3 py-1">
              En fase final de desarrollo
            </span>
          </div>
          <p className="relative text-gray-300 text-lg leading-relaxed mb-6">
            Estamos desarrollando nuestro propio SaaS de gestión tributaria
            con IA. Así es como funcionará:
          </p>
          <div className="relative space-y-3 mb-8">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <CircleCheck
                  className="text-accent mt-0.5 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-300">{bullet}</span>
              </div>
            ))}
          </div>
          <a
            href={siteConfig.gestionDte.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-3 bg-accent text-brand-900 font-bold hover:bg-accent-hover transition-colors"
          >
            Conoce más
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
