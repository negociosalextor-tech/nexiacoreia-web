import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppCta({
  message,
  label = "Habla con nosotros por WhatsApp",
}: {
  message: string;
  label?: string;
}) {
  const href = `${siteConfig.whatsapp[0].href}?text=${encodeURIComponent(message)}`;

  return (
    <div className="p-6 md:p-8 bg-brand-800 border border-brand-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="text-white font-semibold font-[family-name:var(--font-heading)] mb-1">
          ¿Quiere evaluar esto para su organización?
        </p>
        <p className="text-gray-400 text-sm">
          Escríbanos y coordinamos una conversación inicial sin costo.
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp text-white font-bold whitespace-nowrap hover:bg-[#20bd5a] transition-colors"
      >
        <MessageCircle size={18} />
        {label}
      </a>
    </div>
  );
}
