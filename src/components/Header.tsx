
import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full px-4 py-4 bg-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-12 w-auto">
          <img 
            src="/lovable-uploads/21a2cf8d-38f6-4ed6-b8fb-6cc58364c75e.png" 
            alt="Suplementar Fitness" 
            className="h-full w-auto object-contain drop-shadow-lg"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-primary transition-colors font-norwester">INÍCIO</a>
          <a href="#products" className="text-white hover:text-primary transition-colors font-norwester">PRODUTOS</a>
          <a href="#benefits" className="text-white hover:text-primary transition-colors font-norwester">BENEFÍCIOS</a>
          <a href="#location" className="text-white hover:text-primary transition-colors font-norwester">LOCALIZAÇÃO</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="text-white hover:text-primary transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
