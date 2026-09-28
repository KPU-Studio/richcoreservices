import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { SITE } from '../site';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Section from '../components/ui/Section';
import { breadcrumb } from '../schema';

const ServicesIndex: React.FC = () => (
  <>
    <Seo
      title={`IT Services & Managed Support | ${SITE.name}`}
      description="Managed IT support, network administration, Microsoft 365, data protection, help desk, and government-ready IT for small businesses in Woodbridge, VA."
      path="/services"
      jsonLd={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ])}
    />
    <PageHero
      eyebrow="Our Services"
      title="IT support built around your business"
      subtitle="Pick a service to learn more, or book a free assessment and we’ll help you decide what you actually need."
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ]}
    />

    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-hairline">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="group block p-8 border-t border-r border-b border-hairline hover:bg-canvas-soft transition-colors"
            >
              <Icon className="h-8 w-8 text-black mb-6" strokeWidth={1.5} />
              <h2 className="font-display text-2xl leading-tight text-black mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h2>
              <p className="font-serif text-base text-body leading-relaxed mb-6">{service.description}</p>
              <span className="inline-flex items-center font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
                Learn more
                <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>

    <CtaBand />
  </>
);

export default ServicesIndex;
