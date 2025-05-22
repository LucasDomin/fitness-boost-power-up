
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
import SectionDivider from "../components/SectionDivider";
import { MapPin } from "lucide-react";

const StoreLocation = () => {
  return (
    <section className="w-full py-16 px-4 bg-zinc-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-norwester text-center mb-8 text-white">
          Nossa Localização
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-primary w-8 h-8" />
              <h3 className="text-2xl font-norwester text-white">
                Na galeria do ASSAÍ minas shopping
              </h3>
            </div>
            <p className="text-white/80 text-lg mb-6 text-center md:text-left">
              Venha nos visitar e conheça todos os nossos produtos e ofertas exclusivas!
            </p>
            <a 
              href="https://www.google.com/maps/place/Suplementar+Nutri%C3%A7%C3%A3o+%26+Fitness/@-19.8763569,-43.9267996,21z/data=!4m6!3m5!1s0xa69a8ab99f4c4f:0xc33ad1bdd00ed4df!8m2!3d-19.876349!4d-43.9268214!16s%2Fg%2F11g8c7scwg?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary/90 text-white font-norwester py-3 px-6 rounded-md 
              transition-all duration-300 flex items-center justify-center gap-2
              hover:translate-y-[-3px] hover:shadow-lg"
            >
              Ver no Google Maps
            </a>
          </div>
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.3463545976339!2d-43.9267996!3d-19.876357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a8ab99f4c4f%3A0xc33ad1bdd00ed4df!2sSupplementar%20Nutri%C3%A7%C3%A3o%20%26%20Fitness!5e0!3m2!1spt-BR!2sbr!4v1716407932259!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Suplementar Fitness"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SectionDivider />
        <Benefits />
        <SectionDivider />
        <Products />
        <SectionDivider />
        <StoreLocation />
        <SectionDivider />
        <CallToAction />
      </main>
      <footer className="w-full py-6 px-4 bg-black border-t border-zinc-800">
        <div className="container mx-auto text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} Suplementar Fitness. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
