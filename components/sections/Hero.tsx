import Link from "next/link";
import { Bot, ArrowRight, Calendar } from "lucide-react";
import NetworkGraphic from "@/components/NetworkGraphic";

const stats = [
  { value: "12+", label: "Soluciones IA" },
  { value: "B2B & B2G", label: "Sectores Atendidos" },
  { value: "LATAM", label: "Presencia Regional" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-[#003366]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 204, 153, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 204, 153, 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 blur-[120px]" />

      <div className="container mx-auto relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30">
              <Bot className="text-accent" size={16} />
              <span className="text-accent text-sm font-medium">
                Líderes en IA para Chile y Latinoamérica
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight">
              El nexo inteligente entre tu negocio y la{" "}
              <span className="text-accent">automatización</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Convertimos la complejidad de la inteligencia artificial en
              resultados tangibles y medibles. Automatización, analítica
              predictiva y soluciones a medida para organizaciones que buscan
              liderar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#servicios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-brand-900 font-bold text-base hover:bg-accent-hover transition-colors duration-200 group"
              >
                Descubre Nuestras Soluciones IA
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent font-bold text-base hover:bg-accent/10 transition-colors duration-200"
              >
                <Calendar size={18} />
                Agenda una Auditoría Gratuita en Puerto Montt
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-700">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-accent font-[family-name:var(--font-heading)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 border-2 border-accent/20 rotate-6" />
              <div className="absolute inset-4 border border-brand-700" />
              <div className="absolute inset-8 bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center overflow-hidden">
                <NetworkGraphic className="absolute inset-0 w-full h-full" />
                <div className="relative text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-accent/20 flex items-center justify-center">
                    <Bot className="text-accent" size={40} />
                  </div>
                  <p className="text-accent font-[family-name:var(--font-heading)] font-bold text-lg">
                    NexiaCore IA
                  </p>
                  <p className="text-gray-400 text-sm px-4">
                    El nexo inteligente entre tu negocio y la automatización
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
