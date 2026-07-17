import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const whatsappUrl = `${siteConfig.whatsapp[0].href}?text=${encodeURIComponent(
  "Hola, vengo del sitio NexiaCore y quiero agendar una auditoría"
)}`;

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-all duration-200 active:scale-95"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
}
