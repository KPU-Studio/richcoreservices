
import React from 'react';
import { Target, Cpu, ShieldCheck } from 'lucide-react';
import LazyImage from './LazyImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
             <div className="grid grid-cols-2 gap-4">
               <LazyImage
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                 alt="Professional consultant"
                 className="rounded-lg shadow-lg aspect-square"
                 objectFit="cover"
               />
               <div className="mt-8">
                 <LazyImage
                   src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"
                   alt="Collaboration"
                   className="rounded-lg shadow-lg aspect-square"
                   objectFit="cover"
                 />
               </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-8 rounded-full hidden lg:block opacity-10"></div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Empowering Businesses Through <br />
              <span className="text-blue-600">Technical Excellence.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At RichCoreITServices, we don't just provide IT solutions; we build strategic partnerships. Our mission is to navigate the complex technical landscape for you, ensuring your infrastructure is not just a support function, but a competitive advantage.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: "Strategic Innovation",
                  desc: "We align your IT investments with measurable business outcomes."
                },
                {
                  icon: Cpu,
                  title: "Future-Ready Architecture",
                  desc: "Building scalable systems that grow with your ambitions."
                },
                {
                  icon: ShieldCheck,
                  title: "Security by Design",
                  desc: "Integrating robust defense mechanisms into every layer of your stack."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
