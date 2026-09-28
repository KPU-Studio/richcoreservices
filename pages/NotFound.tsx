import React from 'react';
import Seo from '../components/Seo';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => (
  <>
    <Seo title="Page not found | RichCore IT Services" description="The page you were looking for could not be found." path="/404" />
    <section className="min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-20">
      <div className="text-center max-w-md">
        <p className="font-display text-8xl leading-none text-accent mb-6">404</p>
        <h1 className="font-display text-3xl text-black mb-3">Page not found</h1>
        <p className="font-serif text-lg text-body mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Button to="/" arrow>
          Back to home
        </Button>
      </div>
    </section>
  </>
);

export default NotFound;
