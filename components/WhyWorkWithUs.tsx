
import React from 'react';
import { Award, ShieldCheck, Terminal, Search, Zap, Settings, GitBranch, RefreshCw } from 'lucide-react';

const WhyWorkWithUs: React.FC = () => {
  const coreCompetencies = [
    // { name: 'Cloud Architecture', description: 'Multi-cloud solutions', icon: Terminal },
    { name: 'Network Design', description: 'Enterprise infrastructure', icon: Zap },
    { name: 'Cybersecurity Best Practices', description: 'Security-first approach', icon: ShieldCheck },
    // { name: 'Automation & Integration', description: 'Streamlined workflows', icon: GitBranch },
    { name: 'IT Strategy & Governance', description: 'Compliance & planning', icon: Settings },
    { name: 'Infrastructure Modernization', description: 'Legacy system updates', icon: RefreshCw },
  ];

  const philosophy = [
    {
      title: "Security-First Mentality",
      description: "We don't bolt security on at the end; we architect it into the very foundation of your infrastructure."
    },
    {
      title: "Infrastructure as a Strategic Asset",
      description: "IT shouldn't be a cost center. We design systems that actively drive operational speed and market agility."
    },
    {
      title: "Proactive Resilience",
      description: "Our philosophy centers on 'Design for Failure'—ensuring that when issues arise, the system stays online."
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-3">Expertise & Values</h2>
          <p className="text-4xl font-extrabold mb-4">Why Partner With Us</p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We prioritize technical mastery and high-integrity consulting over historical vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Certs & Tools */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Award className="mr-3 text-blue-400" />
                Core Competencies & Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreCompetencies.map((competency) => (
                  <div key={competency.name} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex items-center space-x-4">
                    <competency.icon className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="font-bold text-slate-100">{competency.name}</p>
                      <p className="text-xs text-slate-400">{competency.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Search className="mr-3 text-blue-400" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Azure', 'AWS', 'Google Cloud', 'Microsoft 365', 'SharePoint', 'Intune', 'Cisco Networking', 'VMware', 'Linux/Windows Server', 'PowerShell', 'Python'].map(tool => (
                  <span key={tool} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm font-medium text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Philosophy */}
          <div className="bg-slate-800/30 p-8 lg:p-12 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-10 text-blue-400">Our Consulting Philosophy</h3>
            <div className="space-y-10">
              {philosophy.map((item, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1 text-blue-500 font-mono font-bold">0{idx + 1}</div>
                  <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-600/20 rounded-2xl border border-blue-500/20">
              <p className="text-sm italic text-blue-200">
                "Technical expertise is common. What is rare is the commitment to absolute reliability and the integrity to put client outcomes above project billables."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
