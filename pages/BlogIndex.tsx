import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { POSTS } from '../blog';
import { SITE } from '../site';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Section from '../components/ui/Section';
import { breadcrumb } from '../schema';

const fmtDate = (d: string) =>
  d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

const BlogIndex: React.FC = () => (
  <>
    <Seo
      title={`IT Tips & Insights | ${SITE.name} Blog`}
      description="Practical IT advice for small businesses and public-sector teams: security, backups, Microsoft 365, and managed IT best practices."
      path="/blog"
      jsonLd={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ])}
    />
    <PageHero
      eyebrow="Blog"
      title="IT tips & insights"
      subtitle="Plain-English advice to help you keep your technology secure, reliable, and out of your way."
      crumbs={[
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]}
    />

    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-hairline">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group flex flex-col p-8 border-t border-r border-b border-hairline hover:bg-canvas-soft transition-colors"
          >
            {post.date && (
              <time className="font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
                {fmtDate(post.date)}
              </time>
            )}
            <h2 className="font-display text-2xl leading-tight text-black mb-3 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="font-serif text-base text-body leading-relaxed mb-6 flex-grow">{post.description}</p>
            <span className="inline-flex items-center font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-accent">
              Read article
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  </>
);

export default BlogIndex;
