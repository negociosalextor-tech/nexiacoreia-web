import Link from "next/link";
import { CircleCheck, Shield, Users, FileCheck, Globe } from "lucide-react";

const checklist = [
  "Atención ciudadana automatizada con chatbots multicanal",
  "Gestión inteligente de trámites y documentos públicos",
  "Análisis predictivo para políticas públicas basadas en datos",
  "Transparencia y rendición de cuentas con dashboards abiertos",
  "Procesamiento masivo de solicitudes y reclamos ciudadanos",
  "Cumplimiento normativo automatizado y auditoría digital",
];

const pillars = [
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Infraestructura que cumple con los más altos estándares de ciberseguridad gubernamental.",
  },
  {
    icon: Users,
    title: "Ciudadanía",
    description:
      "Interfaces accesibles que mejoran la experiencia del ciudadano con el Estado.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description:
      "Soluciones alineadas con la normativa chilena y marcos regulatorios LATAM.",
  },
  {
    icon: Globe,
    title: "Escalabilidad",
    description:
      "Arquitecturas que crecen con la demanda ciudadana sin comprometer el rendimiento.",
  },
];

export default function Gobierno() {
  return (
    <section
      id="gobierno"
      className="py-24 bg-gradient-to-b from-brand-800 to-brand-900"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Sector Público
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
              IA para un Gobierno más Eficiente y Cercano al Ciudadano
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Diseñamos soluciones específicas para organismos públicos de
              Chile y Latinoamérica, permitiendo una gestión más ágil,
              transparente y orientada al servicio ciudadano. Nuestra
              experiencia en el sector B2G nos permite entender las
              regulaciones, los plazos y las necesidades únicas del Estado.
            </p>
            <div className="space-y-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CircleCheck
                    className="text-accent mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-brand-900 font-bold hover:bg-accent-hover transition-colors"
            >
              Solicitar Información para Gobierno
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 bg-brand-700/50 border border-brand-700 space-y-3"
                >
                  <Icon className="text-accent" size={32} />
                  <h3 className="font-semibold font-[family-name:var(--font-heading)] text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-400">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
