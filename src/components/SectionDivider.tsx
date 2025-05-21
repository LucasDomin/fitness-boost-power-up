
import React from 'react';

const SectionDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full relative py-8 ${className}`}>
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-primary"></div>
      <div className="relative flex justify-center">
        <img 
          src="/lovable-uploads/f60742e0-6fe2-4183-987d-17d807d4f73c.png" 
          alt="Suplementar Fitness divider" 
          className="h-16 z-10"
        />
      </div>
    </div>
  );
};

export default SectionDivider;
