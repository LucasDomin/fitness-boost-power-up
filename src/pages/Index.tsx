
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Products from "../components/Products";
import CallToAction from "../components/CallToAction";
import SectionDivider from "../components/SectionDivider";
import { MapPin, Facebook, Instagram, Twitter, Linkedin, ShieldCheck, CreditCard, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white pt-12 pb-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-norwester mb-4">SUPLEMENTAR FITNESS</h3>
            <p className="text-gray-300 mb-4">
              Sua loja especializada em suplementação esportiva e nutricional de qualidade para todos os objetivos.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-zinc-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-xl font-norwester mb-4">LINKS ÚTEIS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Formas de Pagamento</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Entregas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
          
          {/* Location */}
          <div id="location">
            <h3 className="text-xl font-norwester mb-4">LOCALIZAÇÃO</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-white font-norwester">Na galeria do ASSAÍ minas shopping</h4>
                <p className="text-gray-300 text-sm mt-1">
                  Venha nos visitar e conheça todos os nossos produtos e ofertas exclusivas!
                </p>
                <a 
                  href="https://www.google.com/maps/place/Suplementar+Nutri%C3%A7%C3%A3o+%26+Fitness/@-19.8763569,-43.9267996,21z"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary text-sm hover:underline mt-2 inline-block"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
            <div className="mt-4 h-48 rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.3463545976339!2d-43.9267996!3d-19.876357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a8ab99f4c4f%3A0xc33ad1bdd00ed4df!2sSupplementar%20Nutri%C3%A7%C3%A3o%20%26%20Fitness!5e0!3m2!1spt-BR!2sbr!4v1716407932259!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Suplementar Fitness"
              />
            </div>
          </div>
        </div>
        
        {/* Security Badges */}
        <div className="border-t border-zinc-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary" />
                <span className="text-gray-300 text-sm">Site Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-primary" />
                <span className="text-gray-300 text-sm">Dados protegidos</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="text-primary" />
                <span className="text-gray-300 text-sm">Pagamento Seguro</span>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="https://www.bodyaction.com.br/assets/images/payment/visa.svg" alt="Visa" className="h-8" />
              <img src="https://www.bodyaction.com.br/assets/images/payment/mastercard.svg" alt="Mastercard" className="h-8" />
              <img src="https://www.bodyaction.com.br/assets/images/payment/pix.svg" alt="Pix" className="h-8" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-zinc-500 text-sm mt-4 pt-4 border-t border-zinc-800">
          © {new Date().getFullYear()} Suplementar Fitness. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SectionDivider />
        <div id="benefits">
          <Benefits />
        </div>
        <SectionDivider />
        <div id="products">
          <Products />
        </div>
        <SectionDivider />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
