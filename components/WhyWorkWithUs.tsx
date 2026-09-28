import React from 'react';
import { ShieldCheck, Zap, Settings, RefreshCw } from 'lucide-react';

const coreCompetencies = [
  { name: 'Network Design', description: 'Enterprise infrastructure', icon: Zap },
  { name: 'Cybersecurity Best Practices', description: 'Security-first approach', icon: ShieldCheck },
  { name: 'IT Strategy & Governance', description: 'Compliance & planning', icon: Settings },
  { name: 'Infrastructure Modernization', description: 'Legacy system updates', icon: RefreshCw },
];

const tools = ['Azure', 'AWS', 'Google Cloud', 'Microsoft 365', 'SharePoint', 'Intune', 'Cisco Networking', 'VMware', 'Linux/Windows Server', 'PowerShell', 'Python'];

const processSteps = [
  { title: 'We Learn Your Needs', description: "We start by understanding your business, your systems, and the challenges you're facing." },
  { title: 'We Stabilize Your Technology', description: 'We fix immediate issues, secure your systems, and make sure everything runs smoothly.' },
  { title: 'We Manage Your IT', description: "We handle updates, monitoring, support requests, and day-to-day IT tasks so you don't have to." },
  { title: 'We Keep You Informed', description: 'You get clear communication, simple explanations, and updates you can trust.' },
];

const WhyWorkWithUs: React.FC = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
            Expertise &amp; Values
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-white mb-4">
            Why partner with us.
          </h2>
          <p className="font-serif text-lg text-white/60 leading-relaxed">
            We prioritize technical mastery and high-integrity consulting over historical vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: competencies & tools */}
          <div className="space-y-14">
            <div>
              <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-white/50 mb-6">
                Core Competencies &amp; Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-white/15">
                {coreCompetencies.map((c) => (
                  <div key={c.name} className="p-6 border-t border-r border-b border-white/15">
                    <c.icon className="h-6 w-6 text-accent mb-4" strokeWidth={1.5} />
                    <p className="font-display text-xl text-white mb-1">{c.name}</p>
                    <p className="font-serif text-sm text-white/50">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-white/50 mb-6">
                Tools &amp; Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 border border-white/20 font-sans text-[13px] font-bold text-white/70 hover:border-accent hover:text-accent transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: process */}
          <div className="border border-white/15 p-8 lg:p-12">
            <h3 className="font-display text-3xl leading-tight text-white mb-10">How we partner with you</h3>
            <div className="border-t border-white/15">
              {processSteps.map((item, idx) => (
                <div key={item.title} className="flex gap-6 py-6 border-b border-white/15">
                  <span className="font-display text-3xl text-accent leading-none">0{idx + 1}</span>
                  <div>
                    <h4 className="font-sans text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="font-serif text-sm text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-serif italic text-base text-white/70 leading-relaxed mt-8">
              &ldquo;Technical expertise is only half the battle. Our structured delivery ensures that
              technology remains an enabler, never an obstacle to your mission.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
