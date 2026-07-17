import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { footerNavLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-brand-950 border-t border-brand-700/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-brand-900 font-bold text-sm font-[family-name:var(--font-heading)]">
                  N
                </span>
              </div>
              <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
                NexiaCore <span className="text-accent">IA</span>
              </span>
            </div>
            <p className="text-white font-semibold text-sm mb-1">
              {siteConfig.legalName}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Especialistas en Análisis y desarrollo de Sistemas e IA.
            </p>
            <p className="text-gray-500 text-xs italic">
              Empresa constituida formalmente — Emitimos factura electrónica.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold font-[family-name:var(--font-heading)] mb-4">
              Navegación
            </h4>
            <div className="space-y-2">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 text-sm hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold font-[family-name:var(--font-heading)] mb-4">
              Contacto
            </h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  Dirección Fiscal
                </p>
                <p>{siteConfig.address.line1}</p>
                <p>{siteConfig.address.line2}</p>
              </div>
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  Email
                </p>
                <p>{siteConfig.email}</p>
              </div>
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  WhatsApp
                </p>
                <div className="space-y-1">
                  {siteConfig.whatsapp.map((wa) => (
                    <a
                      key={wa.number}
                      href={wa.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                    >
                      <MessageCircle size={14} className="text-whatsapp" />
                      {wa.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {year} {siteConfig.legalName}. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Puerto Montt, Chile | Presencia en Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  );
}
