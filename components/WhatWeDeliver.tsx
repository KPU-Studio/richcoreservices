
import React from 'react';
import { ShieldAlert, Handshake, MonitorUp, Route, ShieldCheck, Activity, ChevronRight } from 'lucide-react';

const WhatWeDeliver: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const deliverables = [
    {
      title: "Hardened Security Perimeter",
      desc: "Zero-trust architecture implementation and automated threat mitigation that significantly reduces your attack surface.",
      icon: ShieldCheck
    },
    {
      title: "High Availability & Monitoring",
      desc: "Real-time monitoring and uptime-focused management that detects issues early, prevents downtime, and keeps your systems stable and secure.",
      icon: Activity
    },
    {
      title: "User Assistance & Training",
      desc: "Helping your team stay productive with clear instructions, quick answers, and training that makes everyday technology easier to use.",
      icon: Handshake
    },
    {
      title: "Strategic Technology Roadmap",
      desc: "A multi-year plan that aligns your technical capabilities with your business growth milestones.",
      icon: Route
    },
    {
      title: "Regulatory Compliance",
      desc: "Streamlining the path to SOC2, HIPAA, or NIST compliance through automated auditing and policy enforcement.",
      icon: ShieldAlert
    },
    {
      title: "Remote Support",
      desc: "Convenient remote IT support that solves problems fast, reduces downtime, and keeps your systems running without the need for on‑site service.",
      icon: MonitorUp
    }
  ];

  return (
    <section
      className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden"
      aria-labelledby="what-we-deliver-heading"
    >
      {/* Gradient blob decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Animated badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-100/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group/badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Our Promise</span>
            <ChevronRight className="h-3 w-3 group-hover/badge:translate-x-0.5 transition-transform" />
          </div>

          {/* Gradient heading */}
          <h2
            id="what-we-deliver-heading"
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent"
          >
            What We Deliver
          </h2>
          <span className="block mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-full opacity-40 blur-[1px]"></span>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
            Tangible technical assets and strategic outcomes that move the needle for your business.
          </p>
        </div>

        {/* Premium card grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          role="list"
        >
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              role="listitem"
              tabIndex={0}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group animate-fade-in-up transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-3xl ${
                hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-70 scale-95' : 'opacity-100 scale-100'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient border glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

              {/* Main card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2 h-full will-change-transform">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 will-change-transform"></div>
                </div>

                {/* Card content */}
                <div className="relative">
                  {/* Enhanced icon presentation */}
                  <div className="relative w-16 h-16 mb-6">
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="absolute inset-0 rounded-2xl border-2 border-blue-400 animate-ping"></span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/30"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-500 drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Title with gradient on hover */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
