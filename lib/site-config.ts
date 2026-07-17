export const siteConfig = {
  name: "NexiaCore IA",
  legalName: "NexiaCore IA SpA",
  url: "https://www.nexiacoreia.cl",
  description:
    "NexiaCore IA - Soluciones de Inteligencia Artificial para empresas y gobiernos en Chile y Latinoamérica. Automatización, chatbots, analítica de datos y transformación digital.",
  email: "contacto@nexiacoreia.cl",
  whatsapp: [
    { label: "+56 9 3750 1880", href: "https://wa.me/56937501880", number: "56937501880" },
    { label: "+56 9 3750 1787", href: "https://wa.me/56937501787", number: "56937501787" },
  ],
  address: {
    line1: "Calle Italia 1984, Sector Cardonal",
    line2: "Puerto Montt, Chile",
  },
  gestionDte: {
    name: "GestionDTE",
    url: "https://gestiondte.com",
  },
} as const;

export const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/servicios" },
  { label: "Gobierno", href: "/#gobierno" },
  { label: "Metodología", href: "/#metodologia" },
  { label: "Alianzas", href: "/#alianza" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const footerNavLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Gobierno", href: "/#gobierno" },
  { label: "Metodología", href: "/#metodologia" },
  { label: "Alianzas", href: "/#alianza" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
] as const;
