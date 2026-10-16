// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow
// (e.g. https://user.github.io and /repo-name for a project site).
const site = process.env.SITE_URL || 'https://example.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  // Keep HTML-aware whitespace (Astro 7 defaults to JSX-style stripping).
  compressHTML: true,
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
