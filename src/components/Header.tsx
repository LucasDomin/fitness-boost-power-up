
import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-4 py-2 bg-black flex items-center relative">
      {/* Red horizontal line across the entire header */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-primary"></div>
      
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <div className="h-16 w-40 flex items-center">
          <img 
            src="/lovable-uploads/567eaa04-8453-40e5-adc1-b54cf331d899.png" 
            alt="Suplementar Fitness" 
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
