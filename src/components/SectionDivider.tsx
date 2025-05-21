
import React from 'react';

const SectionDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full relative py-8 ${className}`}>
      <div className="relative flex justify-center">
        <img 
          src="/lovable-uploads/b4762d0f-56b1-43c4-a4f5-fab885451cb2.png" 
          alt="Suplementar Fitness divider" 
          className="w-full h-auto z-10"
        />
      </div>
    </div>
  );
};

export default SectionDivider;
