import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { serviceSchema, breadcrumb } from '../schema';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <Seo
        title={`${service.title} | ${'RichCore IT Services'}`}
        description={service.description}
        path={`/services/${service.id}`}
        jsonLd={[
          serviceSchema(service),
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.id}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow="IT Service"
        title={service.title}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.id}` },
        ]}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="relative lg:col-span-2">
            {/* Large faint service icon — editorial opener graphic */}
            <Icon
              aria-hidden="true"
              strokeWidth={1}
              className="pointer-events-none absolute -top-4 right-0 h-40 w-40 text-black/[0.05] z-0"
            />
            <div className="relative z-10">
              <p className="font-serif text-2xl leading-relaxed text-ink-soft mb-12 first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.7] first-letter:text-accent">
                {service.description}
              </p>
              <h2 className="font-display text-3xl leading-tight text-black mb-8">What&rsquo;s included</h2>
              <ul className="border-t border-hairline">
                {(service.benefits ?? []).map((b) => (
                  <li key={b} className="flex items-start gap-4 py-4 border-b border-hairline">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={2} />
                    <span className="font-serif text-lg text-ink-soft leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button to="/contact" arrow>
                  Get a Free Assessment
                </Button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="border border-black p-6 sticky top-28">
              <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-body mb-5">
                Other services
              </h3>
              <ul className="border-t border-hairline">
                {related.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.id}`}
                      className="group flex items-center justify-between gap-2 py-4 border-b border-hairline text-black hover:text-accent transition-colors"
                    >
                      <span className="font-display text-lg leading-tight">{s.title}</span>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </>
  );
};

export default ServiceDetail;
