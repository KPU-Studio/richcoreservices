import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const industries = ['Finance', 'Healthcare', 'Government', 'SMBs', 'Startups'];

const Hero: React.FC = () => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Cover story copy */}
          <div className="lg:col-span-7">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-5">
              Managed IT &middot; Woodbridge, VA
            </p>
            <h1 className="font-display text-[44px] leading-[1.02] sm:text-6xl lg:text-[76px] lg:leading-[0.98] tracking-tight text-black mb-8">
              Reliable IT support for your mission.
            </h1>
            <p className="font-serif text-xl text-ink-soft leading-relaxed max-w-2xl mb-10">
              Reliable, secure, and professional IT support for small businesses and public-sector
              organizations. We provide managed IT services, network security, and responsive
              technical support to keep your systems stable and protected &mdash; so you can stay
              focused on your mission while we manage the technology that keeps you running.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group/btn inline-flex items-center justify-center px-6 py-3.5 font-sans text-[15px] font-bold uppercase tracking-[0.05em] text-white bg-black border border-black hover:bg-accent hover:border-accent transition-colors"
              >
                Get Your Free Assessment
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 font-sans text-[15px] font-bold uppercase tracking-[0.05em] text-black bg-white border border-black hover:bg-black hover:text-white transition-colors"
              >
                View Our Services
              </a>
            </div>

            {/* Industries — hairline-separated editorial list */}
            <div className="mt-12 pt-6 border-t border-hairline">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-body mb-3">
                Industries We Serve
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {industries.map((name) => (
                  <li key={name} className="font-display text-lg text-black">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cover image + fact box */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <img
              src="/img/hero-team.webp"
              alt="RichCore IT Services team providing managed IT support"
              width={1400}
              height={1000}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover"
            />
            {/* Editorial fact strip — leads with the strongest sales number */}
            <div className="grid grid-cols-2 border border-black border-t-0">
              <div className="p-6">
                <p className="font-display text-4xl sm:text-5xl leading-none text-accent">5&ndash;10<span className="text-2xl sm:text-3xl"> min</span></p>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black mt-3">
                  Avg. Response Time
                </p>
              </div>
              <div className="p-6 border-l border-hairline">
                <p className="font-display text-4xl sm:text-5xl leading-none text-black">99.9<span className="text-2xl sm:text-3xl">%</span></p>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-body mt-3">
                  Uptime Reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
