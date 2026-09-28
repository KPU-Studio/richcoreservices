import React from 'react';
import Contact from '../components/Contact';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import { SITE } from '../site';
import { localBusiness, breadcrumb } from '../schema';

const ContactPage: React.FC = () => (
  <>
    <Seo
      title={`Contact ${SITE.name} | Free IT Assessment`}
      description={`Get in touch with ${SITE.name} in ${SITE.address.locality}, ${SITE.address.region}. Call ${SITE.phone} or request a free IT assessment.`}
      path="/contact"
      jsonLd={[
        localBusiness(),
        breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]),
      ]}
    />
    <PageHero
      eyebrow="Contact"
      title="Let’s talk about your IT"
      subtitle={`Reach us at ${SITE.phone} or send a message below. We respond to most requests within one business hour.`}
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]}
    />
    <Contact />
  </>
);

export default ContactPage;
