import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  name: string;
  path: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, crumbs }) => (
  <section className="pt-32 md:pt-40 pb-12 md:pb-16 border-b border-hairline">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {crumbs && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 font-sans text-[13px] font-bold uppercase tracking-[0.08em] text-body">
            {crumbs.map((c, i) => (
              <li key={c.path} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-hairline" />}
                {i < crumbs.length - 1 ? (
                  <Link to={c.path} className="hover:text-accent transition-colors">
                    {c.name}
                  </Link>
                ) : (
                  <span className="text-black" aria-current="page">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && (
        <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.03] text-black max-w-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 font-serif text-lg text-body max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHero;
