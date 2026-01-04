
import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import LazyImage from './LazyImage';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient blob */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-96 h-96 rounded-full"></div>
        </div>
        {/* Secondary gradient blob for depth */}
        <div className="absolute -bottom-24 -left-24 blur-3xl opacity-10">
          <div className="bg-gradient-to-tr from-blue-400 to-cyan-400 w-80 h-80 rounded-full"></div>
        </div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-100/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group/badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Trusted IT Partners</span>
              <ChevronRight className="h-3 w-3 group-hover/badge:translate-x-0.5 transition-transform" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-8 tracking-tight">
              <span className="inline-block">Reliable IT Support for</span>{' '}
              <span className="block sm:inline">
                <span className="text-gradient relative inline-block">
                  Your Mission.
                  {/* Subtle underline accent */}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-full opacity-30 blur-sm"></span>
                </span>
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              {/* We empower enterprises and high-growth startups with advanced IT strategy, scalable cloud architecture, and mission-critical cybersecurity. */}
              Reliable, secure, and professional IT support for small businesses and public sector organizations. We provide managed IT services, network security, and responsive technical support to keep your systems stable and protected. Our goal is to help you stay focused on your mission while we manage the technology that keeps your organization running.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 mb-12">
              <a
                href="#contact"
                className="group/btn relative inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-4 text-base font-bold rounded-2xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-xl shadow-blue-200/50 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:-translate-y-1 active:scale-95 min-h-[48px] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 overflow-hidden"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                <span className="relative">Get Your Free Assessment</span>
                <ArrowRight className="ml-2 h-5 w-5 relative group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="group/btn inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-4 text-base font-bold rounded-2xl text-slate-900 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 min-h-[48px] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                View Our Services
                <ChevronRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Target Industries */}
            <div className="mt-8 md:mt-12">
              <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest block mb-3 md:mb-4">
                Industries We Serve
              </span>
              <div className="relative overflow-hidden" aria-label="Industries we serve">
                {/* Gradient fade edges for visual indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex space-x-3 md:space-x-6 animate-marquee will-change-transform" role="list">
                  {/* First set */}
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Finance</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Healthcare</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Government</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">SMBs</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Startups</span>
                  {/* Duplicate set for seamless loop */}
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Finance</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Healthcare</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Government</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">SMBs</span>
                  <span className="px-4 py-2 bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-xl text-sm md:text-lg font-black italic text-slate-700 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">Startups</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group/img">
            {/* Gradient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-3xl opacity-20 blur-2xl group-hover/img:opacity-30 group-hover/img:blur-3xl transition-all duration-1000"></div>

            {/* Border frame */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-blue-200/50 via-indigo-200/50 to-blue-200/50">
              <LazyImage
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                alt="Technology Consulting Team"
                className="relative rounded-xl shadow-2xl w-full h-[400px] sm:h-[500px] ring-1 ring-slate-200/50"
                objectFit="cover"
              />
            </div>
            
            {/* Premium floating support card */}
            <div className="relative mt-8 sm:absolute sm:-bottom-8 sm:-right-8 max-w-full sm:max-w-[280px] animate-float group/card" style={{ animationDelay: '1s' }}>
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-400 to-blue-500 rounded-3xl opacity-75 blur-sm"></div>

              {/* Card content */}
              <div className="relative glass-panel p-6 sm:p-8 rounded-3xl shadow-2xl border border-white backdrop-blur-xl">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-2xl ring-1 ring-green-200/50 group-hover/card:scale-110 transition-transform duration-300">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">99.9%</p>
                    <p className="text-[11px] uppercase tracking-widest font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Uptime Reliability
                    </p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                  Ensuring your small business or public office stays connected and secure 24/7.
                </p>

                {/* Subtle pulse indicator */}
                <div className="absolute top-6 right-6 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 ring-2 ring-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
