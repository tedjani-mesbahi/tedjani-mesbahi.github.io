// Reads the YAML / Markdown files edited through Sveltia CMS.
// Parsing is lenient on purpose: one malformed entry is skipped with a
// warning instead of breaking the whole build.
import { parse } from 'yaml';
import { marked } from 'marked';

type Raw = Record<string, string>;

const settingsFiles = import.meta.glob('/src/content/settings/*.yml', { query: '?raw', import: 'default', eager: true }) as Raw;
const newsFiles = import.meta.glob('/src/content/news/*.yml', { query: '?raw', import: 'default', eager: true }) as Raw;
const projectFiles = import.meta.glob('/src/content/projects/*.yml', { query: '?raw', import: 'default', eager: true }) as Raw;
const publicationFiles = import.meta.glob('/src/content/publications/*.yml', { query: '?raw', import: 'default', eager: true }) as Raw;
const blogFiles = import.meta.glob('/src/content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Raw;
const galleryFiles = import.meta.glob('/src/content/gallery/*.yml', { query: '?raw', import: 'default', eager: true }) as Raw;
const updateFiles = import.meta.glob('/src/content/updates/*.yml', { query: '?raw', import: 'default', eager: true }) as Raw;
const positionFiles = import.meta.glob('/src/content/positions/*.yml', { query: '?raw', import: 'default', eager: true }) as Raw;

function safeParse(raw: string, path: string): Record<string, any> | null {
  try {
    const data = parse(raw);
    return data && typeof data === 'object' ? data : {};
  } catch (error) {
    console.warn(`[content] Skipping ${path}: ${(error as Error).message}`);
    return null;
  }
}

function slugOf(path: string): string {
  return path.split('/').pop()!.replace(/\.(ya?ml|md)$/, '');
}

function isoDate(value: unknown): string {
  if (!value) return '';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

function setting(name: string): Record<string, any> {
  const path = `/src/content/settings/${name}.yml`;
  const raw = settingsFiles[path];
  return (raw && safeParse(raw, path)) || {};
}

export const getSite = () => setting('site');
export const getAbout = () => setting('about');
export const getResearch = () => setting('research');
export const getTeam = () => setting('team');
export const getTeaching = () => setting('teaching');

export const SECTION_IDS = ['updates', 'news', 'research', 'projects', 'publications', 'blog', 'team', 'positions', 'gallery', 'media', 'about', 'teaching', 'contact'] as const;

export function getSections() {
  const data = setting('sections');
  const list: any[] = Array.isArray(data.sections) ? data.sections : [];
  const seen = new Set<string>();
  const sections = list
    .filter((s) => s && SECTION_IDS.includes(s.id) && !seen.has(s.id) && seen.add(s.id))
    .map((s) => ({ ...s, visible: s.visible !== false }));
  // Sections missing from the file keep working, appended in default order.
  for (const id of SECTION_IDS) if (!seen.has(id)) sections.push({ id, visible: id !== 'teaching' });
  return sections;
}

export function markdown(text: unknown): string {
  if (!text) return '';
  return marked.parse(String(text), { async: false }) as string;
}

export function getNews() {
  return Object.entries(newsFiles)
    .map(([path, raw]) => {
      const data = safeParse(raw, path);
      if (!data) return null;
      return { ...data, slug: slugOf(path), date: isoDate(data.date), category: data.category || 'other' };
    })
    .filter((n): n is Record<string, any> => !!n && !n.draft && !!(n.title_fr || n.title_en) && !!n.date)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getProjects() {
  return Object.entries(projectFiles)
    .map(([path, raw]) => {
      const data = safeParse(raw, path);
      return data ? { ...data, slug: slugOf(path) } : null;
    })
    .filter((p): p is Record<string, any> => !!p && !p.hidden && !!p.name)
    .sort((a, b) => (Number(a.order) || 99) - (Number(b.order) || 99));
}

export function getUpdates() {
  return Object.entries(updateFiles)
    .map(([path, raw]) => {
      const data = safeParse(raw, path);
      return data ? { ...data, slug: slugOf(path), date: isoDate(data.date), kind: data.kind || 'other' } : null;
    })
    .filter((u): u is Record<string, any> => !!u && !u.hidden && !!(u.text_fr || u.text_en) && !!u.date)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPositions() {
  return Object.entries(positionFiles)
    .map(([path, raw]) => {
      const data = safeParse(raw, path);
      return data ? { ...data, slug: slugOf(path), deadline: isoDate(data.deadline), type: data.type || 'other' } : null;
    })
    .filter((p): p is Record<string, any> => !!p && !p.hidden && (p.status || 'open') === 'open' && !!(p.title_fr || p.title_en))
    .sort((a, b) => String(a.deadline || '9999').localeCompare(String(b.deadline || '9999')));
}

export function getGallery() {
  return Object.entries(galleryFiles)
    .map(([path, raw]) => {
      const data = safeParse(raw, path);
      return data ? { ...data, slug: slugOf(path), date: isoDate(data.date) } : null;
    })
    .filter((g): g is Record<string, any> => !!g && !g.hidden && !!g.image)
    .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0) || String(b.date).localeCompare(String(a.date)));
}

export function getPublications() {
  return Object.entries(publicationFiles)
    .map(([path, raw]) => {
      const data = safeParse(raw, path);
      if (!data) return null;
      return { ...data, slug: slugOf(path), year: Number(data.year) || 0, type: data.type || 'other' };
    })
    .filter((p): p is Record<string, any> => !!p && !p.hidden && !!p.title)
    .sort((a, b) => b.year - a.year || String(a.title).localeCompare(String(b.title)));
}

export function publicationsPerYear(pubs: Record<string, any>[]) {
  const years = pubs.map((p) => p.year).filter(Boolean);
  if (!years.length) return [];
  const min = Math.min(...years);
  const max = Math.max(...years);
  const counts = new Map<number, number>();
  for (const y of years) counts.set(y, (counts.get(y) || 0) + 1);
  const out = [];
  for (let y = min; y <= max; y += 1) out.push({ year: y, count: counts.get(y) || 0 });
  return out;
}

function splitFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { front: '', body: raw };
  return { front: match[1], body: match[2] };
}

export function getPosts() {
  return Object.entries(blogFiles)
    .map(([path, raw]) => {
      const { front, body } = splitFrontmatter(raw);
      const data = safeParse(front, path);
      if (!data) return null;
      const words = String(body).split(/\s+/).filter(Boolean).length;
      return {
        ...data,
        slug: slugOf(path),
        date: isoDate(data.date),
        lang: data.lang === 'en' ? 'en' : 'fr',
        body,
        minutes: Math.max(1, Math.round(words / 220)),
      };
    })
    .filter((p): p is Record<string, any> => !!p && !p.draft && !!p.title && !!p.date)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Highlights the professor's name in an author list. */
export function authorsHtml(authors: unknown, name = 'Mesbahi'): string {
  const escape = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
  const text = escape(String(authors || ''));
  return text.replace(new RegExp(`([^,]*${name}[^,]*)`, 'i'), '<strong>$1</strong>');
}
