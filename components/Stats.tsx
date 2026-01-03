
import React from 'react';
import { Smile, Zap, History, MessageSquare } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      label: "Customer Satisfaction",
      value: "98",
      icon: Smile,
      suffix: "%",
      id: "01"
    },
    {
      label: "Avg Response Time",
      value: "5-10",
      icon: Zap,
      suffix: "Min",
      id: "02"
    },
    {
      label: "Professional IT Exp.",
      value: "8",
      icon: History,
      suffix: "+ Yrs",
      id: "03"
    },
    {
      label: "Support Requests",
      value: "300",
      icon: MessageSquare,
      suffix: "+",
      id: "04"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden border-y border-slate-100">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col p-8 bg-slate-50/50 border border-slate-200/60 rounded-2xl hover:bg-white hover:border-blue-500/30 hover:shadow-[0_20px_40px_-15px_rgba(30,58,138,0.1)] transition-all duration-500 ease-out"
            >
              {/* Technical Coordinate Tag */}
              <div className="absolute top-4 right-6 text-[10px] font-mono font-bold text-slate-300 group-hover:text-blue-500 transition-colors">
                [{stat.id}]
              </div>

              {/* Icon Treatment - Unified Professional Blue */}
              <div className="mb-10">
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-blue-200 group-hover:bg-blue-50">
                  <stat.icon className="h-5 w-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>

              {/* Value & Label */}
              <div className="relative mt-auto">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="ml-1 text-lg font-bold text-blue-600 tracking-tight">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] leading-snug">
                  {stat.label}
                </h4>
              </div>

              {/* Technical Indicator Line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              
              {/* Subtle hover "Scanner" effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-[scan_3s_ease-in-out_infinite]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center space-x-3">
            <span className="h-1 w-1 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Verified Technical Performance Metrics</span>
            <span className="h-1 w-1 rounded-full bg-blue-500 animate-pulse"></span>
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: 0% }
          50% { top: 100% }
          100% { top: 0% }
        }
      `}} />
    </section>
  );
};

export default Stats;
