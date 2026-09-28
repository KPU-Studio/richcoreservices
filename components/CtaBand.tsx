import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE } from '../site';

const CtaBand: React.FC<{ heading?: string; text?: string }> = ({
  heading = 'Ready for IT that just works?',
  text = 'Book a free, no-pressure assessment. We’ll review your setup and tell you honestly what’s solid and what needs attention.',
}) => (
  <section className="py-16 md:py-24 bg-black text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-5">{heading}</h2>
      <p className="font-serif text-lg text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">{text}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="group/btn inline-flex items-center justify-center px-6 py-3.5 font-sans text-[15px] font-bold uppercase tracking-[0.05em] text-black bg-white border border-white hover:bg-accent hover:border-accent hover:text-white transition-colors"
        >
          Get Your Free Assessment
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center justify-center px-6 py-3.5 font-sans text-[15px] font-bold uppercase tracking-[0.05em] text-white bg-transparent border border-white/40 hover:border-accent hover:text-accent transition-colors"
        >
          Call {SITE.phone}
        </a>
      </div>
    </div>
  </section>
);

export default CtaBand;
