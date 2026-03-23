import React from 'react';

const SectionWrapper = ({ 
  children, 
  id, 
  className = '', 
  bgClass = 'bg-white',
  containerClass = 'container-custom',
  paddingClass = 'section-padding'
}) => {
  return (
    <section id={id} className={`${bgClass} ${paddingClass} ${className}`}>
      <div className={containerClass}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
