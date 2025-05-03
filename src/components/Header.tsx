
import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-4 py-2 bg-black flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-16 w-40 flex items-center">
          <img 
            src="/lovable-uploads/8554fe65-8867-4b5b-bc5e-e4895f5005e1.png" 
            alt="Suplementar Fitness" 
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
