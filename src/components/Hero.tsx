
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero = () => {
  return (
    <section className="w-full py-20 px-4 bg-black relative overflow-hidden">
      {/* Background overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/30 opacity-80 z-10"></div>
      
      {/* Background image (would be replaced with actual image) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
      
      <div className="container mx-auto relative z-20">
        <div className="max-w-3xl mx-auto md:ml-0 text-center md:text-left">
          <h1 className="impact-text text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight animate-fade-in">
            💪 Suplementar <span className="red-accent">faz toda a diferença</span>!
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Dê ao seu corpo o suporte que ele merece. Aqui você encontra suplementos de qualidade, pensados para sua saúde, desempenho e bem-estar.
          </p>
          
          <WhatsAppButton 
            text="Catálogo de promoções" 
            message="Olá! Vi o site e quero saber mais sobre as promoções de suplementos!" 
            className="mx-auto md:mx-0 text-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
