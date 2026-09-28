// Generates dist/sitemap.xml from the prerendered .html files.
// Runs after `vite-react-ssg build`, so it stays in sync with actual pages.
import { readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const BASE = 'https://richcoreit.net';
const DIST = 'dist';

function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const urls = htmlFiles(DIST)
  .map((f) => {
    const rel = relative(DIST, f).replace(/\\/g, '/').replace(/\.html$/, '');
    return rel === 'index' ? '/' : `/${rel.replace(/\/index$/, '')}`;
  })
  .filter((u) => u !== '/404')
  .sort();

const today = new Date().toISOString().slice(0, 10);
const body = urls
  .map((u) => `  <url>\n    <loc>${BASE}${u === '/' ? '' : u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n');

writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
);

console.log(`[sitemap] wrote ${urls.length} urls`);
