
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 scroll-mt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-blue-200">
            Our Offerings
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From tactical fixes to high-level strategic transformation, we provide the expertise needed to excel in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <a
              key={service.id}
              href="#contact"
              className="relative block bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group hover:-translate-y-2 cursor-pointer overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <div className="relative">
                {/* Icon with gradient background */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/30"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* CTA with gradient */}
                <div className="inline-flex items-center text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold text-sm group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                  Get Free Assessment
                  <svg className="w-4 h-4 ml-1.5 text-blue-600 group-hover:text-indigo-600 transition-all duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
