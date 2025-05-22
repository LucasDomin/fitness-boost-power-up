
import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-4 py-2 bg-black flex items-center relative">
      {/* Red horizontal line with limited width */}
      <div className="absolute left-0 right-0 mx-auto w-11/12 top-1/2 transform -translate-y-1/2 h-0.5 bg-primary"></div>
      
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <div className="h-16 w-auto flex items-center">
          <img 
            src="/lovable-uploads/21a2cf8d-38f6-4ed6-b8fb-6cc58364c75e.png" 
            alt="Suplementar Fitness" 
            className="h-full w-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
