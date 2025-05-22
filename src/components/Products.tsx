
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Products = () => {
  const products = [
    {
      name: "WHEY 100% - Integralmédica",
      description: "21g de proteína + 9g de EAA por dose. Ganhos reais, com sabor incrível.",
      image: "/lovable-uploads/584ac516-8595-4044-9075-2914c6930014.png",
      buttonText: "Quero saber mais no WhatsApp",
      message: "Olá! Estou interessado no WHEY 100% - Integralmédica. Pode me dar mais informações?"
    },
    {
      name: "WHEY 100% - New Mullen",
      description: "Alta qualidade, com 21g de proteína por dose. Sabor irresistível!",
      image: "/lovable-uploads/f793ceb5-cdcd-49ed-a87b-2aeec4ff7d53.png",
      buttonText: "Tirar dúvidas no WhatsApp",
      message: "Olá! Estou interessado no WHEY 100% - New Mullen. Pode tirar algumas dúvidas?"
    },
    {
      name: "Pré-Treino HÓRUS - MAX",
      description: "150mg de cafeína + 2g de beta-alanina. Sinta o pump!",
      image: "/lovable-uploads/4fb28f9a-65b2-4fcc-aaa7-bc1ccca544b3.png",
      buttonText: "Ver promoção no WhatsApp",
      message: "Olá! Vi o Pré-Treino HÓRUS - MAX no site. Qual é a promoção atual?"
    },
    {
      name: "Pré-treino Évora Pw - Darkness",
      description: "Energia insana com 200mg de cafeína + taurina!",
      image: "/lovable-uploads/dd51a345-cc1c-4054-8fc7-1ccdf021748f.png",
      buttonText: "Falar agora no WhatsApp",
      message: "Olá! Quero mais informações sobre o Pré-treino Évora Pw - Darkness."
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-zinc-900">
      <div className="container mx-auto">
        <h2 className="impact-text text-3xl md:text-4xl text-center mb-16 text-white">
          PRODUTOS <span className="red-accent">EM DESTAQUE</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-primary transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="impact-text text-xl text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <div className="mt-auto">
                  <WhatsAppButton 
                    text={product.buttonText} 
                    message={product.message} 
                    className="w-full text-sm py-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
