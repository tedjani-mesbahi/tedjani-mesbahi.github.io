#!/usr/bin/env node
// Points the CMS at your GitHub repository.
// Usage: npm run setup -- --repo <owner>/<repository> [--domain www.example.org]
import { readFile, writeFile } from 'node:fs/promises';

const args = process.argv.slice(2);
const get = (flag) => {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
};
const repo = get('--repo');
const domain = get('--domain');

if (!repo || !/^[\w.-]+\/[\w.-]+$/.test(repo)) {
  console.error('Usage: npm run setup -- --repo <owner>/<repository> [--domain www.example.org]');
  process.exit(1);
}

const [owner, name] = repo.split('/');
const userSite = name.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const siteUrl = domain ? `https://${domain}/` : userSite ? `https://${owner.toLowerCase()}.github.io/` : `https://${owner.toLowerCase()}.github.io/${name}/`;

const path = new URL('../public/admin/config.yml', import.meta.url);
let config = await readFile(path, 'utf8');
config = config
  .replace(/^(\s*repo:\s*).*$/m, `$1${repo}`)
  .replace(/^site_url:.*$/m, `site_url: ${siteUrl}`)
  .replace(/^display_url:.*$/m, `display_url: ${siteUrl}`);
await writeFile(path, config);

if (domain) {
  await writeFile(new URL('../public/CNAME', import.meta.url), `${domain}\n`);
}

console.log(`CMS repository: ${repo}`);
console.log(`Site address:   ${siteUrl}`);
console.log(`Edit content:   ${siteUrl}admin/`);
