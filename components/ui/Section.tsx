import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  /** Inner container gets the max-width + gutters. */
  containerClassName?: string;
  children: React.ReactNode;
}

/** Standard page section: vertical rhythm + centered max-w-7xl container. */
const Section: React.FC<SectionProps> = ({ id, className = '', containerClassName = '', children }) => (
  <section id={id} className={`py-12 md:py-16 lg:py-24 ${id ? 'scroll-mt-24' : ''} ${className}`}>
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>{children}</div>
  </section>
);

export default Section;
