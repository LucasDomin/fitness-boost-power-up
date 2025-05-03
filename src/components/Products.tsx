
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Products = () => {
  const products = [
    {
      name: "WHEY 100% - Integralmédica",
      description: "21g de proteína + 9g de EAA por dose. Ganhos reais, com sabor incrível.",
      image: "https://images.unsplash.com/photo-1579722861954-cfd40c8619e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Quero saber mais no WhatsApp",
      message: "Olá! Estou interessado no WHEY 100% - Integralmédica. Pode me dar mais informações?"
    },
    {
      name: "WHEY 100% - New Mullen",
      description: "Alta qualidade, com 21g de proteína por dose. Sabor irresistível!",
      image: "https://images.unsplash.com/photo-1579722861842-11a3a5311af7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Tirar dúvidas no WhatsApp",
      message: "Olá! Estou interessado no WHEY 100% - New Mullen. Pode tirar algumas dúvidas?"
    },
    {
      name: "Pré-Treino HÓRUS - MAX",
      description: "150mg de cafeína + 2g de beta-alanina. Sinta o pump!",
      image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Ver promoção no WhatsApp",
      message: "Olá! Vi o Pré-Treino HÓRUS - MAX no site. Qual é a promoção atual?"
    },
    {
      name: "Pré-Treino EXTREME",
      description: "Energia insana com 200mg de cafeína + taurina!",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Falar agora no WhatsApp",
      message: "Olá! Quero mais informações sobre o Pré-Treino EXTREME."
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
              className="bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-primary transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="impact-text text-xl text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <WhatsAppButton 
                  text={product.buttonText} 
                  message={product.message} 
                  className="w-full text-sm py-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
