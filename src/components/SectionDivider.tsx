
import React from 'react';

const SectionDivider = () => {
  return (
    <div className="relative h-16 md:h-24 bg-transparent overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-px bg-primary/30"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
