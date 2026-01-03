
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Our Offerings</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-4">Comprehensive IT Solutions</p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From tactical fixes to high-level strategic transformation, we provide the expertise needed to excel in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <a
              key={service.id}
              href="#contact"
              className="block bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md active:shadow-md transition-all duration-300 group hover:-translate-y-1 active:-translate-y-1 active:scale-[0.98] animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-active:bg-blue-600 group-hover:shadow-lg group-active:shadow-lg group-hover:shadow-blue-200 group-active:shadow-blue-200 transition-all duration-300 group-hover:scale-105 group-active:scale-105">
                <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white group-active:text-white transition-all duration-300 group-hover:scale-125 group-active:scale-125 group-hover:rotate-6 group-active:rotate-6 group-hover:drop-shadow-md group-active:drop-shadow-md" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="text-blue-600 font-semibold text-sm inline-flex items-center hover:text-blue-700 active:text-blue-700">
                Get Started
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-active:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
