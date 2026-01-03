
import React from 'react';
import { ShieldAlert, BarChart3, Database, Workflow, Route, ShieldCheck, Activity } from 'lucide-react';

const WhatWeDeliver: React.FC = () => {
  const deliverables = [
    {
      title: "Hardened Security Perimeter",
      desc: "Zero-trust architecture implementation and automated threat mitigation that significantly reduces your attack surface.",
      icon: ShieldCheck
    },
    {
      title: "99.99% Availability",
      desc: "Architecting high-availability systems with automated failover and geo-redundancy to ensure your business never stops.",
      icon: Activity
    },
    {
      title: "Cost-Optimized Infrastructure",
      desc: "Rationalizing cloud spend and on-premise hardware to eliminate waste and maximize ROI on every IT dollar.",
      icon: BarChart3
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
      title: "Unified Data Ecosystem",
      desc: "Breaking down silos through enterprise software integration and high-performance data pipelines.",
      icon: Database
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Our Promise</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-4">What We Deliver</p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tangible technical assets and strategic outcomes that move the needle for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {deliverables.map((item, idx) => (
            <div key={idx} className="flex group">
              <div className="mr-6">
                <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
