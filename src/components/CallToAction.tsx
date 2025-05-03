
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const CallToAction = () => {
  return (
    <section className="w-full py-20 px-4 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-black/90"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="impact-text text-3xl md:text-5xl text-white mb-6 leading-tight">
            🔥 Quer treinar com mais foco, energia e resultados?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Fale agora com nosso time via WhatsApp e receba recomendações personalizadas!
          </p>
          
          <WhatsAppButton 
            text="Clique aqui e fale com a Suplementar Fitness agora!" 
            message="Olá! Vi o site e gostaria de receber recomendações personalizadas para suplementos." 
            className="mx-auto text-lg animate-pulse-subtle"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
