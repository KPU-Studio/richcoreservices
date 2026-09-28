import React from 'react';
import { Target, Cpu, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Target, title: 'Strategic Innovation', desc: 'We align your IT investments with measurable business outcomes.' },
  { icon: Cpu, title: 'Future-Ready Architecture', desc: 'Building scalable systems that grow with your ambitions.' },
  { icon: ShieldCheck, title: 'Security by Design', desc: 'Integrating robust defense mechanisms into every layer of your stack.' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-20 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 mb-12 lg:mb-0">
            <img
              src="/img/about-consultant.webp"
              alt="RichCore IT consultant supporting a small business"
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              className="aspect-square object-cover"
            />
            <img
              src="/img/about-collaboration.webp"
              alt="IT team collaborating on a client's systems"
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              className="aspect-square object-cover mt-8"
            />
          </div>

          <div>
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
              Who We Are
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-black mb-6">
              Empowering businesses through technical excellence.
            </h2>
            <p className="font-serif text-lg text-ink-soft leading-relaxed mb-10">
              RichCore IT Services is an independent Managed IT Services provider specializing in
              small business IT support and government-compliant technology services. We deliver
              dependable IT operations, cyber-aware practices, and fast, responsive assistance &mdash;
              creating secure, reliable environments backed by clear communication and structured
              service delivery.
            </p>

            <div className="border-t border-hairline">
              {features.map((item) => (
                <div key={item.title} className="flex gap-5 py-5 border-b border-hairline">
                  <item.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-sans text-base font-bold text-black mb-1">{item.title}</h3>
                    <p className="font-serif text-base text-body leading-relaxed">{item.desc}</p>
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
