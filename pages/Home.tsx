import React, { Suspense, lazy } from 'react';
import Seo from '../components/Seo';
import { SITE } from '../site';
import { FAQS } from '../constants';
import { localBusiness, faqPage } from '../schema';

// Above the fold - eager
import Hero from '../components/Hero';

// Below the fold - lazy
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const WhyWorkWithUs = lazy(() => import('../components/WhyWorkWithUs'));
const WhatWeDeliver = lazy(() => import('../components/WhatWeDeliver'));
const Stats = lazy(() => import('../components/Stats'));
const FAQ = lazy(() => import('../components/FAQ'));
const Contact = lazy(() => import('../components/Contact'));

const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
  </div>
);

const Home: React.FC = () => (
  <>
    <Seo
      title={`${SITE.name} | Managed IT Support in Woodbridge, VA`}
      description={SITE.description}
      path="/"
      jsonLd={[localBusiness(), faqPage(FAQS)]}
    />
    <Hero />
    <Suspense fallback={<SectionLoader />}>
      <Stats />
      <About />
      <Services />
      <WhyWorkWithUs />
      <WhatWeDeliver />
      <FAQ />
      <Contact />
    </Suspense>
  </>
);

export default Home;
