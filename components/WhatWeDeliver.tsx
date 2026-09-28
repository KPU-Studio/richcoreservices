import React from 'react';
import { ShieldAlert, Handshake, MonitorUp, Route, ShieldCheck, Activity } from 'lucide-react';

const deliverables = [
  { title: 'Hardened Security Perimeter', desc: 'Zero-trust architecture implementation and automated threat mitigation that significantly reduces your attack surface.', icon: ShieldCheck },
  { title: 'High Availability & Monitoring', desc: 'Real-time monitoring and uptime-focused management that detects issues early, prevents downtime, and keeps your systems stable.', icon: Activity },
  { title: 'User Assistance & Training', desc: 'Helping your team stay productive with clear instructions, quick answers, and training that makes everyday technology easier.', icon: Handshake },
  { title: 'Strategic Technology Roadmap', desc: 'A multi-year plan that aligns your technical capabilities with your business growth milestones.', icon: Route },
  { title: 'Regulatory Compliance', desc: 'Streamlining the path to SOC2, HIPAA, or NIST compliance through automated auditing and policy enforcement.', icon: ShieldAlert },
  { title: 'Remote Support', desc: 'Convenient remote IT support that solves problems fast, reduces downtime, and keeps your systems running without on-site service.', icon: MonitorUp },
];

const WhatWeDeliver: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-canvas-soft border-b border-hairline" aria-labelledby="what-we-deliver-heading">
      {/* Oversized editorial backdrop word — pure display type, no gradient */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-4 md:-top-8 right-0 lg:-right-6 font-display italic leading-none tracking-tighter text-black/[0.05] text-[30vw] lg:text-[19rem]"
      >
        Outcomes
      </span>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
            Our Promise
          </p>
          <h2 id="what-we-deliver-heading" className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-black mb-4">
            What we deliver.
          </h2>
          <p className="font-serif text-lg text-body leading-relaxed">
            Tangible technical assets and strategic outcomes that move the needle for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-hairline">
          {deliverables.map((item) => (
            <div key={item.title} className="bg-canvas p-8 border-t border-r border-b border-hairline">
              <item.icon className="h-8 w-8 text-black mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-2xl leading-tight text-black mb-3">{item.title}</h3>
              <p className="font-serif text-base text-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
