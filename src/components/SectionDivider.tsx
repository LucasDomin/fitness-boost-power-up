
import React from 'react';

const SectionDivider = () => {
  return (
    <div className="relative h-8 md:h-16 bg-transparent overflow-hidden">
      {/* Subtle gradient transition instead of a visible divider */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent opacity-50"></div>
    </div>
  );
};

export default SectionDivider;
