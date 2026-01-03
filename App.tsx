
import React, { Suspense, lazy } from 'react';

// Components that are immediately visible - load eagerly
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Components below the fold - load lazily
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const WhyWorkWithUs = lazy(() => import('./components/WhyWorkWithUs'));
const WhatWeDeliver = lazy(() => import('./components/WhatWeDeliver'));
const Stats = lazy(() => import('./components/Stats'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhyWorkWithUs />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <WhatWeDeliver />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
