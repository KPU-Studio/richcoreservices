import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden py-16 md:py-24 scroll-mt-20 border-b border-hairline">
      {/* Faint blueprint grid — technical/editorial texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
            Our Offerings
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-black mb-4">
            Comprehensive IT solutions.
          </h2>
          <p className="font-serif text-lg text-body leading-relaxed">
            From tactical fixes to high-level strategic transformation, we provide the expertise
            needed to excel in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-hairline">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group block bg-canvas p-8 border-t border-r border-b border-hairline hover:bg-canvas-soft transition-colors"
            >
              <service.icon className="h-8 w-8 text-black mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-2xl leading-tight text-black mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="font-serif text-base text-body leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
                Learn more
                <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
