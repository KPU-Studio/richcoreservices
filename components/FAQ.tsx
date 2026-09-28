import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-20 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left: header & CTA */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
                Support Center
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-black mb-6">
                Frequently asked questions.
              </h2>
              <p className="font-serif text-lg text-body leading-relaxed mb-10">
                Navigating the technical landscape can be complex. We&rsquo;ve compiled answers to the
                most common questions regarding our methodologies, security, and partnership models.
              </p>

              <div className="bg-black text-white p-8">
                <h3 className="font-display text-2xl mb-3">Still have questions?</h3>
                <p className="font-serif text-sm text-white/60 mb-6 leading-relaxed">
                  Can&rsquo;t find the answer you&rsquo;re looking for? Reach out to our technical
                  advisory team directly.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-accent"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-hairline">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border-b border-hairline">
                  <button
                    id={`accordion-${idx}`}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`panel-${idx}`}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left focus:outline-none"
                  >
                    <span className={`font-display text-xl md:text-2xl leading-snug transition-colors ${
                      openIndex === idx ? 'text-accent' : 'text-black'
                    }`}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-black">
                      {openIndex === idx ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                    </span>
                  </button>
                  <div
                    id={`panel-${idx}`}
                    role="region"
                    aria-labelledby={`accordion-${idx}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="font-serif text-base text-body leading-relaxed pb-6 pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 font-serif text-sm italic text-body">
              <ShieldCheck className="h-4 w-4 text-accent" strokeWidth={1.5} />
              <span>All information handled under SOC2 Type II compliance standards.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
