// Loads markdown posts from content/blog/*.md at build time.
// Frontmatter is a simple `key: value` block between --- fences.

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  body: string;
}

const files = import.meta.glob('./content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parse(raw: string): { meta: Record<string, string>; body: string } {
  const match = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: match[2].trim() };
}

export const POSTS: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    const { meta, body } = parse(raw);
    return {
      slug,
      title: meta.title ?? slug,
      description: meta.description ?? '',
      date: meta.date ?? '',
      author: meta.author ?? 'RichCore IT Services',
      body,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
