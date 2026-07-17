"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Mail, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nombre = String(form.get("nombre") ?? "");
    const email = String(form.get("email") ?? "");
    const empresa = String(form.get("empresa") ?? "");
    const telefono = String(form.get("telefono") ?? "");
    const sector = String(form.get("sector") ?? "");
    const mensaje = String(form.get("mensaje") ?? "");

    const body = [
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      `Empresa/Organismo: ${empresa}`,
      `Teléfono: ${telefono}`,
      `Sector: ${sector}`,
      "",
      mensaje,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "Solicitud de Auditoría Gratuita - " + nombre
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-b from-brand-800 to-brand-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Contacto
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            Agenda una Auditoría Gratuita
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Cuéntenos sobre su organización y sus desafíos. Nuestro equipo de
            expertos le contactará en menos de 24 horas con una propuesta
            personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="p-6 bg-brand-800 border border-brand-700">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-accent" size={20} />
                <h3 className="text-white font-semibold">Dirección Fiscal</h3>
              </div>
              <p className="text-gray-400 text-sm">{siteConfig.address.line1}</p>
              <p className="text-gray-400 text-sm">{siteConfig.address.line2}</p>
              <p className="text-gray-500 text-xs mt-2">
                Cobertura: Chile y Latinoamérica
              </p>
            </div>

            <div className="p-6 bg-brand-800 border border-brand-700">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-accent" size={20} />
                <h3 className="text-white font-semibold">Email</h3>
              </div>
              <p className="text-gray-400 text-sm">{siteConfig.email}</p>
            </div>

            <div className="p-6 bg-brand-800 border border-brand-700">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="text-whatsapp" size={20} />
                <h3 className="text-white font-semibold">WhatsApp</h3>
              </div>
              <div className="space-y-2">
                {siteConfig.whatsapp.map((wa) => (
                  <a
                    key={wa.number}
                    href={wa.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 text-sm hover:text-whatsapp transition-colors"
                  >
                    {wa.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Su nombre"
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-700 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Email corporativo *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@empresa.cl"
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-700 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Empresa / Organismo
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nombre de su organización"
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-700 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm text-gray-300 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full px-4 py-3 bg-brand-900 border border-brand-700 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="sector"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Sector *
                </label>
                <select
                  id="sector"
                  name="sector"
                  required
                  defaultValue="empresa"
                  className="w-full px-4 py-3 bg-brand-900 border border-brand-700 text-white focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="empresa">Empresa Privada</option>
                  <option value="gobierno">Gobierno / Sector Público</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Cuéntenos sobre su proyecto o desafío..."
                  className="w-full px-4 py-3 bg-brand-900 border border-brand-700 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-brand-900 font-bold text-base hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                Enviar Consulta
              </button>

              {submitted && (
                <p className="text-sm text-gray-400">
                  Se abrió su cliente de correo con los datos precargados.
                  Si no ocurrió, escríbanos directamente a{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent hover:text-accent-hover"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
