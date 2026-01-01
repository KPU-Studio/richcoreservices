
import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import LazyImage from './LazyImage';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="bg-blue-600 w-96 h-96 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <span>Trusted IT Experts</span>
              <ChevronRight className="h-3 w-3" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Driving Strategic <br />
              <span className="text-blue-600">Digital Evolution.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              We empower enterprises and high-growth startups with advanced IT strategy, scalable cloud architecture, and mission-critical cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5"
              >
                Get Free IT Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 transition-all"
              >
                View Our Services
              </a>
            </div>

            {/* Trusted indicators */}
            <div className="mt-12 flex items-center space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Expertise</span>
              <div className="flex space-x-6 text-xl font-black italic">
                <span>TECHCORP</span>
                <span>DATAFLUX</span>
                <span>SECURELY</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000"></div>
            <LazyImage
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
              alt="Technology Consulting Team"
              className="relative rounded-2xl shadow-2xl w-full h-[500px]"
              objectFit="cover"
            />
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-[200px] hidden sm:block animate-bounce-slow">
              <p className="text-3xl font-bold text-blue-600 mb-1">99.9%</p>
              <p className="text-sm font-medium text-slate-500">Uptime for our managed infrastructure clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
