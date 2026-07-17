import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, featuredServiceSlugs } from "@/lib/services";

const featured = featuredServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

export default function HomeServices() {
  return (
    <section id="servicios" className="py-24 bg-brand-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Nuestras Soluciones
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            Servicios diseñados para transformar el{" "}
            <span className="text-accent">CORE</span> de tu operación
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            12 soluciones de IA diseñadas para resolver desafíos reales del
            mercado chileno y latinoamericano, con implementación ágil y
            resultados medibles desde el primer mes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className="group p-6 bg-brand-800 border border-brand-700 hover:border-accent/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.hasDetailPage && (
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    Conocer más <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent font-bold text-base hover:bg-accent/10 transition-colors duration-200"
          >
            Ver todos los servicios
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
