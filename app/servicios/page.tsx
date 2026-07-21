import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import NetworkGraphic from "@/components/NetworkGraphic";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

const title = "Servicios de Inteligencia Artificial";
const description =
  "12 soluciones de inteligencia artificial para empresas y gobiernos en Chile y Latinoamérica: automatización, chatbots, gestión documental, analítica de datos y más.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.url}/servicios` },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/servicios`,
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServiciosIndexPage() {
  return (
    <main className="min-h-screen bg-brand-900 pt-32 pb-24">
      <div className="container mx-auto px-4">
        <Breadcrumbs
          items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]}
        />

        <div className="max-w-3xl mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Nuestras Soluciones
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            12 soluciones de IA para transformar su operación
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            Diseñadas para resolver desafíos reales de empresas y organismos
            públicos en Chile y Latinoamérica, con implementación ágil e
            integración a los sistemas que ya utiliza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const card = (
              <>
                <NetworkGraphic
                  variant="compact"
                  className="absolute -top-6 -right-6 w-32 h-32 opacity-30 pointer-events-none"
                />
                <div className="relative w-12 h-12 bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h2 className="relative text-lg font-semibold font-[family-name:var(--font-heading)] text-white mb-2">
                  {service.title}
                </h2>
                <p className="relative text-sm text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.hasDetailPage ? (
                  <span className="relative inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    Conocer más <ArrowRight size={14} />
                  </span>
                ) : (
                  <span className="relative inline-flex items-center gap-1 text-sm font-semibold text-gray-500">
                    Página de detalle próximamente
                  </span>
                )}
              </>
            );

            return service.hasDetailPage ? (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group relative overflow-hidden p-6 bg-brand-800 border border-brand-700 hover:border-accent/50 transition-colors duration-300"
              >
                {card}
              </Link>
            ) : (
              <div
                key={service.slug}
                className="group relative overflow-hidden p-6 bg-brand-800 border border-brand-700"
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
