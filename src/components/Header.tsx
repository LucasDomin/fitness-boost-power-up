
import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-4 py-2 bg-black flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-16 w-40 flex items-center">
          {/* Logo placeholder */}
          <div className="border border-dashed border-gray-600 p-2 text-gray-400 text-xs">
            ESPAÇO PARA LOGO
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
