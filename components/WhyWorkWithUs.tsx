
import React from 'react';
import { Award, ShieldCheck, Terminal, Search, Zap, Settings, GitBranch, RefreshCw } from 'lucide-react';

const WhyWorkWithUs: React.FC = () => {
  const coreCompetencies = [
    { name: 'Network Design', description: 'Enterprise infrastructure', icon: Zap },
    { name: 'Cybersecurity Best Practices', description: 'Security-first approach', icon: ShieldCheck },
    { name: 'IT Strategy & Governance', description: 'Compliance & planning', icon: Settings },
    { name: 'Infrastructure Modernization', description: 'Legacy system updates', icon: RefreshCw },
  ];

  const processSteps = [
    {
      title: "We Learn Your Needs",
      description: "We start by understanding your business, your systems, and the challenges you're facing."
    },
    {
      title: "We Stabilize Your Technology",
      description: "We fix immediate issues, secure your systems, and make sure everything runs smoothly."
    },
    {
      title: "We Manage Your IT",
      description: "We handle updates, monitoring, support requests, and day-to-day IT tasks so you don't have to."
    },
    {
      title: "We Keep You Informed",
      description: "You get clear communication, simple explanations, and updates you can trust."
    }
  ];

  return (
    <section id="expertise" className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Blueprint Grid Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* Glowing background shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3">Expertise & Values</h2>
          <p className="text-4xl font-extrabold mb-4">Why Partner With Us</p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We prioritize technical mastery and high-integrity consulting over historical vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Certs & Tools */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold mb-10 flex items-center tracking-tight">
                <Award className="mr-4 text-blue-500 h-7 w-7" />
                Core Competencies & Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {coreCompetencies.map((competency) => (
                  <div key={competency.name} className="dark-glass-panel p-6 rounded-2xl group hover:border-blue-500/50 transition-all duration-300">
                    <div className="bg-blue-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                      <competency.icon className="h-6 w-6 text-blue-500 group-hover:text-white" />
                    </div>
                    <p className="font-bold text-slate-100 text-lg mb-1">{competency.name}</p>
                    <p className="text-sm text-slate-500 font-medium">{competency.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-10 flex items-center tracking-tight">
                <Search className="mr-4 text-blue-500 h-7 w-7" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Azure', 'AWS', 'Google Cloud', 'Microsoft 365', 'SharePoint', 'Intune', 'Cisco Networking', 'VMware', 'Linux/Windows Server', 'PowerShell', 'Python'].map(tool => (
                  <span key={tool} className="px-5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: How It Works */}
          <div className="dark-glass-panel p-10 lg:p-14 rounded-[2.5rem] border-white/5 relative group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-blue-600/30 transition-all"></div>

            <h3 className="text-3xl font-bold mb-12 text-white tracking-tight leading-tight">How we partner with you</h3>
            <div className="space-y-10">
              {processSteps.map((item, idx) => (
                <div key={idx} className="relative pl-14 group/item">
                  <div className="absolute left-0 top-0 text-blue-600/30 text-5xl font-black italic tracking-tighter group-hover/item:text-blue-600 transition-colors">0{idx + 1}</div>
                  <h4 className="text-xl font-bold mb-2 text-white tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed font-medium text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 p-8 bg-blue-600/10 rounded-3xl border border-blue-500/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <ShieldCheck className="w-12 h-12" />
               </div>
              <p className="text-sm italic text-blue-200 leading-relaxed font-medium relative z-10">
                "Technical expertise is only half the battle. Our structured delivery ensures that technology remains an enabler, never an obstacle to your mission."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
