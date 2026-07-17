import { Target, Compass, Award, Users } from "lucide-react";

const differentiators = [
  "IA aterrizada: resultados medibles, no promesas teóricas",
  "Experticia sectorial profunda en B2B y B2G",
  "Implementación ágil con resultados visibles en menos de 30 días",
  "Respaldo regional con visión latinoamericana",
  "Equipo multidisciplinario con experiencia en mercados regulados",
];

const team = [
  {
    initial: "{{NOMBRE}}",
    role: "CEO & Fundador",
    focus: "Estrategia de IA y Transformación Digital",
  },
  {
    initial: "{{NOMBRE}}",
    role: "CTO",
    focus: "Arquitectura de Soluciones e Ingeniería de IA",
  },
  {
    initial: "{{NOMBRE}}",
    role: "Director Comercial",
    focus: "Desarrollo de Negocios B2B y B2G",
  },
  {
    initial: "{{NOMBRE}}",
    role: "Líder de Innovación",
    focus: "Investigación y Desarrollo de Nuevos Productos",
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 bg-brand-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Sobre Nosotros
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            Liderando la Transformación con IA en Chile
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            NexiaCore IA nace con la misión de cerrar la brecha entre la
            complejidad tecnológica y los resultados de negocio tangibles
            para organizaciones de toda Latinoamérica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-brand-900 border border-brand-700">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-accent" size={24} />
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
                Nuestra Misión
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Democratizar el acceso a la inteligencia artificial de alto
              nivel para empresas y gobiernos en Chile y Latinoamérica,
              transformando la complejidad tecnológica en ventajas
              competitivas concretas y medibles que impulsen el crecimiento
              sostenible.
            </p>
          </div>
          <div className="p-8 bg-brand-900 border border-brand-700">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-accent" size={24} />
              <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
                Nuestra Visión
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ser el referente latinoamericano en soluciones de inteligencia
              artificial aplicada, reconocidos por nuestra capacidad de
              generar impacto real en cada organización que acompañamos,
              liderando la adopción responsable y efectiva de la IA en la
              región.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-accent" size={24} />
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
              Nuestros Diferenciadores
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 bg-brand-900 border border-brand-700"
              >
                <div className="w-6 h-6 bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-brand-900 text-xs font-bold">
                    {i + 1}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-accent" size={24} />
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
              Equipo de Liderazgo
            </h3>
          </div>
          <p className="text-gray-500 text-xs mb-6">
            Pendiente: reemplazar los placeholders {"{{NOMBRE}}"},{" "}
            {"{{CARGO}}"}, {"{{FOTO_URL}}"} y {"{{LINKEDIN_URL}}"} con los
            datos reales del equipo.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.role}
                className="p-6 bg-brand-900 border border-brand-700 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-700 flex items-center justify-center overflow-hidden">
                  {/* {{FOTO_URL}} */}
                  <span className="text-accent font-bold font-[family-name:var(--font-heading)] text-xs px-1">
                    {member.initial}
                  </span>
                </div>
                <p className="text-white font-semibold font-[family-name:var(--font-heading)]">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm mt-1">{member.focus}</p>
                <p className="text-gray-600 text-xs mt-2">
                  {"{{LINKEDIN_URL}}"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
