import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { getPost } from '../blog';
import { SITE } from '../site';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Section from '../components/ui/Section';
import { breadcrumb } from '../schema';

const fmtDate = (d: string) =>
  d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

// Strip the leading H1 (rendered by PageHero) so it isn't duplicated in the body.
const stripH1 = (md: string) => md.replace(/^#\s+.*\n+/, '');

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  if (!post) return <Navigate to="/blog" replace />;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@id': `${SITE.url}/#business` },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <Seo
        title={`${post.title} | ${SITE.name}`}
        description={post.description}
        path={`/blog/${post.slug}`}
        jsonLd={[
          articleLd,
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <PageHero
        eyebrow={fmtDate(post.date)}
        title={post.title}
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <Section>
        <article
          className="prose max-w-3xl mx-auto font-serif
            prose-headings:font-display prose-headings:font-normal prose-headings:text-black prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:font-serif prose-p:text-ink-soft prose-p:leading-relaxed
            prose-li:text-ink-soft prose-strong:text-black
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
        >
          <Markdown>{stripH1(post.body)}</Markdown>
        </article>
      </Section>

      <CtaBand />
    </>
  );
};

export default BlogPost;
