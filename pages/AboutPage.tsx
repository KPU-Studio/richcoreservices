import React from 'react';
import About from '../components/About';
import Stats from '../components/Stats';
import WhyWorkWithUs from '../components/WhyWorkWithUs';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { SITE } from '../site';
import { breadcrumb } from '../schema';

const AboutPage: React.FC = () => (
  <>
    <Seo
      title={`About ${SITE.name} | Managed IT in Woodbridge, VA`}
      description={SITE.description}
      path="/about"
      jsonLd={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ])}
    />
    <PageHero
      eyebrow="About Us"
      title="Local IT support you can actually reach"
      subtitle={SITE.description}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]}
    />
    <About />
    <WhyWorkWithUs />
    <Stats />
    <CtaBand />
  </>
);

export default AboutPage;
