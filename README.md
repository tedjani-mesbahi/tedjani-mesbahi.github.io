# Tedjani Mesbahi — academic website

Bilingual (English / French) personal website of Prof. Tedjani Mesbahi, INSA Strasbourg / ICube (CNRS UMR 7357).

- **Static site:** [Astro](https://astro.build) 7, no server, no database.
- **Hosting:** GitHub Pages (free), deployed by GitHub Actions on every push.
- **CMS:** [Sveltia CMS](https://sveltiacms.app) at `/admin/` (free, Git-based). Every save is a commit; the site rebuilds in 1–2 minutes.
- **Publications:** one YAML file per publication, seeded from HAL and OpenAlex. A weekly job adds new HAL records (never overwrites edits).

Editor's guide (French): [GUIDE-EDITION.md](GUIDE-EDITION.md). Research notes and sources: [docs/research-dossier.md](docs/research-dossier.md).

## Structure

```
public/admin/        Sveltia CMS (index.html + config.yml, French labels)
public/uploads/      Images and files uploaded from the CMS
src/content/
  settings/          site.yml (profile), sections.yml (home order/visibility),
                     about.yml, research.yml, team.yml, teaching.yml
  news/              one YAML file per news item (FR + EN fields)
  blog/              one Markdown file per post
  projects/          one YAML file per project
  publications/      one YAML file per publication
src/components/      Astro components (home sections, pages, circuit drawing)
src/pages/           English routes at /, French routes at /fr/
scripts/             sync-publications.mjs (HAL), setup-repo.mjs (CMS repo)
.github/workflows/   deploy.yml (build + deploy + weekly HAL sync)
```

English text falls back to French when an English field is empty.

## Local development

```bash
npm install
```

```bash
npm run dev
```

Site: http://localhost:4321 · CMS: http://localhost:4321/admin/index.html (click **Work with Local Repository** in Chrome/Edge to edit local files).

## Publish on GitHub Pages

1. Create a **public** GitHub repository, for example `tedjanimesbahi.github.io` (site at `https://tedjanimesbahi.github.io/`) or any name (site at `https://<owner>.github.io/<name>/`).
2. Point the CMS at it:

   ```bash
   npm run setup -- --repo <owner>/<repository>
   ```

3. Push:

   ```bash
   git remote add origin https://github.com/<owner>/<repository>.git
   ```

   ```bash
   git push -u origin main
   ```

4. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The first deploy runs automatically (tab **Actions**).
5. Invite the professor: **Settings → Collaborators → Add people** (role *Write*).

Custom domain later: `npm run setup -- --repo <owner>/<repository> --domain www.example.org`, then add the domain in **Settings → Pages** and a DNS CNAME to `<owner>.github.io`.

## CMS sign-in

Default: **Sign In Using Access Token** (personal access token with *Contents: read and write* on the repository). No server needed. Steps for the professor are in the French guide.

Optional "Sign In with GitHub" button: deploy the free [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) on Cloudflare Workers, register a GitHub OAuth app, then in `public/admin/config.yml` set `backend.base_url` to the worker URL and `backend.auth_methods: [oauth, token]`.

## Publications sync

```bash
npm run sync:publications
```

Adds HAL records missing from `src/content/publications/` (matched by HAL id, DOI or title + year). Also runs every Monday in GitHub Actions and on manual **Run workflow**.

## Content checks before launch

See "To verify with the professor" in [docs/research-dossier.md](docs/research-dossier.md): start dates, course list, portrait photo, CV.
