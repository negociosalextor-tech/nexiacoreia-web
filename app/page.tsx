import Hero from "@/components/sections/Hero";
import HomeServices from "@/components/sections/HomeServices";
import Gobierno from "@/components/sections/Gobierno";
import NuestraCapacidad from "@/components/sections/NuestraCapacidad";
import Productos from "@/components/sections/Productos";
import Alianza from "@/components/sections/Alianza";
import Nosotros from "@/components/sections/Nosotros";
import Faq from "@/components/sections/Faq";
import Contacto from "@/components/sections/Contacto";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-900">
      <Hero />
      <HomeServices />
      <Gobierno />
      <NuestraCapacidad />
      <Productos />
      <Alianza />
      <Nosotros />
      <Faq />
      <Contacto />
    </main>
  );
}
