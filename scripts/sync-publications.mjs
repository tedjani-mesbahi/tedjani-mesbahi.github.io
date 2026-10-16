#!/usr/bin/env node
// Adds publications found on HAL (archives-ouvertes.fr) that are not yet in
// src/content/publications/. Existing files are never modified, so edits made
// in the CMS (featured, hidden, corrected titles...) are always preserved.
//
// Usage: node scripts/sync-publications.mjs [--dry-run]

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { parse, stringify } from 'yaml';

const AUTHOR = 'Tedjani Mesbahi';
const DIR = new URL('../src/content/publications/', import.meta.url).pathname;
const DRY_RUN = process.argv.includes('--dry-run');

const FIELDS = [
  'halId_s', 'uri_s', 'title_s', 'authFullName_s', 'producedDateY_i', 'docType_s',
  'journalTitle_s', 'conferenceTitle_s', 'bookTitle_s', 'publisher_s', 'doiId_s',
  'volume_s', 'issue_s', 'page_s',
].join(',');

const TYPES = {
  ART: 'journal', COMM: 'conference', POSTER: 'poster', PRESCONF: 'conference',
  COUV: 'chapter', OUV: 'book', DOUV: 'book', THESE: 'thesis', HDR: 'hdr',
  REPORT: 'report', PATENT: 'patent',
};

export function normalizeTitle(title = '') {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function slugify(text, maxWords = 8) {
  return normalizeTitle(text).split(' ').filter(Boolean).slice(0, maxWords).join('-');
}

function details(doc) {
  const parts = [];
  if (doc.volume_s) parts.push(`vol. ${doc.volume_s}`);
  const issue = Array.isArray(doc.issue_s) ? doc.issue_s[0] : doc.issue_s;
  if (issue) parts.push(`no. ${issue}`);
  if (doc.page_s) parts.push(`pp. ${doc.page_s}`);
  return parts.join(', ');
}

export function fromHal(doc) {
  const entry = {
    title: (doc.title_s?.[0] ?? '').trim(),
    authors: (doc.authFullName_s ?? []).join(', '),
    year: doc.producedDateY_i,
    type: TYPES[doc.docType_s] ?? 'other',
    venue: doc.journalTitle_s || doc.conferenceTitle_s || doc.bookTitle_s || doc.publisher_s?.[0] || '',
    details: details(doc),
    doi: doc.doiId_s || '',
    url: doc.uri_s || '',
    hal_id: doc.halId_s || '',
    featured: false,
    hidden: false,
  };
  for (const key of ['venue', 'details', 'doi']) if (!entry[key]) delete entry[key];
  return entry;
}

async function fetchHal() {
  const query = encodeURIComponent(`authFullName_s:"${AUTHOR}"`);
  const url = `https://api.archives-ouvertes.fr/search/?q=${query}&rows=500&fl=${FIELDS}&sort=producedDateY_i%20desc&wt=json`;
  const response = await fetch(url, { headers: { 'User-Agent': 'tedjani-mesbahi-site publication sync' } });
  if (!response.ok) throw new Error(`HAL API answered ${response.status}`);
  const { response: body } = await response.json();
  return body.docs;
}

async function loadExisting() {
  await mkdir(DIR, { recursive: true });
  const files = (await readdir(DIR)).filter((file) => /\.ya?ml$/.test(file));
  const known = { files: new Set(files), halIds: new Set(), dois: new Set(), titles: new Set() };
  for (const file of files) {
    try {
      const data = parse(await readFile(join(DIR, file), 'utf8')) ?? {};
      if (data.hal_id) known.halIds.add(String(data.hal_id));
      if (data.doi) known.dois.add(String(data.doi).toLowerCase());
      if (data.title) known.titles.add(`${normalizeTitle(data.title)}|${data.year ?? ''}`);
    } catch (error) {
      console.warn(`Skipping unreadable file ${file}: ${error.message}`);
    }
  }
  return known;
}

function isKnown(entry, known) {
  return (
    (entry.hal_id && known.halIds.has(entry.hal_id)) ||
    (entry.doi && known.dois.has(entry.doi.toLowerCase())) ||
    known.titles.has(`${normalizeTitle(entry.title)}|${entry.year ?? ''}`)
  );
}

function remember(entry, known) {
  if (entry.hal_id) known.halIds.add(entry.hal_id);
  if (entry.doi) known.dois.add(entry.doi.toLowerCase());
  known.titles.add(`${normalizeTitle(entry.title)}|${entry.year ?? ''}`);
}

function fileNameFor(entry, known) {
  const base = `${entry.year ?? 'undated'}-${slugify(entry.title)}`;
  let name = `${base}.yml`;
  for (let i = 2; known.files.has(name); i += 1) name = `${base}-${i}.yml`;
  known.files.add(name);
  return name;
}

async function main() {
  const [docs, known] = await Promise.all([fetchHal(), loadExisting()]);
  let added = 0;
  for (const doc of docs) {
    const entry = fromHal(doc);
    if (!entry.title || isKnown(entry, known)) continue;
    const name = fileNameFor(entry, known);
    remember(entry, known);
    added += 1;
    console.log(`${DRY_RUN ? '[dry run] ' : ''}+ ${name}`);
    if (!DRY_RUN) await writeFile(join(DIR, name), stringify(entry, { lineWidth: 0 }));
  }
  console.log(`HAL records: ${docs.length}. New publications added: ${added}.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
