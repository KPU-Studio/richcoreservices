import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Customer Satisfaction', value: '98', suffix: '%' },
  { label: 'Avg Response Time', value: '5-10', suffix: 'min' },
  { label: 'Professional IT Experience', value: '8', suffix: '+ yrs' },
  { label: 'Support Requests Handled', value: '300', suffix: '+' },
];

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Counts up from 0 to `end` when scrolled into view. SSR/first render shows the
// final value (no hydration mismatch, works without JS), then animates on client.
const CountUp: React.FC<{ end: number; className?: string }> = ({ end, className }) => {
  const [n, setN] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReduced()) return;
    const el = ref.current;
    if (!el) return;
    setN(0);
    let raf = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const dur = 1200;
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setN(Math.round(end * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end]);

  return (
    <span ref={ref} className={className}>
      {n}
    </span>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
            By The Numbers
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
            Measured, not promised.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-l border-white/15">
          {stats.map((stat) => {
            const isNumeric = /^\d+$/.test(stat.value);
            return (
              <div key={stat.label} className="p-6 sm:p-8 border-t border-r border-b border-white/15">
                <div className="flex items-baseline">
                  <span className="font-display text-6xl sm:text-7xl leading-none tracking-tight text-accent">
                    {isNumeric ? <CountUp end={Number(stat.value)} /> : stat.value}
                  </span>
                  <span className="ml-1.5 font-display text-2xl sm:text-3xl text-white">{stat.suffix}</span>
                </div>
                <h3 className="mt-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white/50">
                  {stat.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
