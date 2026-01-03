
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left Side: Header & CTA */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <HelpCircle className="h-3 w-3" />
                <span>Support Center</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Frequently Asked <br />
                <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Navigating the technical landscape can be complex. We've compiled answers to the most common questions regarding our methodologies, security, and partnership models.
              </p>

              <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 bg-blue-600 w-24 h-24 rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <h4 className="text-xl font-bold mb-3 relative z-10">Still have questions?</h4>
                <p className="text-slate-400 text-sm mb-6 relative z-10">
                  Can't find the answer you're looking for? Reach out to our technical advisory team directly.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group relative z-10"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${
                    openIndex === idx
                      ? 'border-blue-200 bg-blue-50/30 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    id={`accordion-${idx}`}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`panel-${idx}`}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <span className={`text-lg font-bold transition-colors ${
                      openIndex === idx ? 'text-blue-700' : 'text-slate-900'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-all duration-300 ${
                      openIndex === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {openIndex === idx ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </button>
                  <div
                    id={`panel-${idx}`}
                    role="region"
                    aria-labelledby={`accordion-${idx}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed text-base">
                      <div className="w-8 h-1 bg-blue-200 rounded mb-4"></div>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-2 text-slate-400 text-sm italic">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>All information handled under SOC2 Type II compliance standards.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
