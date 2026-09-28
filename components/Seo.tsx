import React from 'react';
import { Head } from 'vite-react-ssg';
import { SITE } from '../site';

interface SeoProps {
  title: string;
  description: string;
  /** Path beginning with "/" (e.g. "/services/help-desk"). */
  path: string;
  /** Optional JSON-LD structured data object(s). */
  jsonLd?: object | object[];
  /** Absolute or root-relative OG image. Defaults to the logo. */
  image?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, path, jsonLd, image }) => {
  const canonical = `${SITE.url}${path === '/' ? '' : path}`;
  const ogImage = `${SITE.url}${image ?? '/og-default.jpg'}`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
};

export default Seo;
