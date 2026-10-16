# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Researchers and European partners** evaluating Prof. Tedjani Mesbahi as a collaborator, consortium member or reviewer. They scan his record (publications, projects, metrics) and look for a way to start a conversation.
- **PhD and postdoc candidates** deciding whether to apply to his team at INSA Strasbourg / ICube. They look for research themes, current and past theses, and how to apply.
- **Industry partners and journalists** looking for an expert on lithium-ion battery safety, battery management systems and e-mobility (he appears on France 2, works with the Bas-Rhin fire service SIS 67). They need fast proof of expertise and direct contact.
- **Students** at INSA Strasbourg (electrical engineering) looking for teaching information, internships and student projects.
- **The professor himself** is the content editor. He updates news ("actualités"), blog posts and sections through a CMS in French, without touching code.

## Product Purpose

A personal academic website for Prof. Tedjani Mesbahi, Full Professor of Electrical Engineering at INSA Strasbourg and researcher at the ICube laboratory (CNRS UMR 7357). It presents his research, projects, publications, team and media work, publishes news and blog posts, and turns visits into contact (collaboration, applications, press requests). Success: the record is current without developer help, and visitors find proof and contact within seconds.

## Positioning

He bridges three worlds that rarely meet in one profile: electrochemical battery engineering (modelling, hybrid storage, ageing, thermal runaway), explainable AI for battery management (ENERGETIC, Horizon Europe, coordinated by INSA Strasbourg), and public safety outreach (SIS 67 campaigns, France 2 news). The site must show that combination, not a generic "professor template".

## Operating Context

- Hosted free on GitHub Pages, built by GitHub Actions from a public repository.
- Content edited through Sveltia CMS at `/admin/` (Git-based, free); every save commits to the repository and triggers a rebuild.
- Publications seeded from HAL (archives-ouvertes.fr) and OpenAlex; a scheduled job adds new HAL records.
- Bilingual: English at `/`, French at `/fr/`. The editor writes French first; English is optional per item and falls back to French.

## Capabilities and Constraints

- Static site (Astro), no server, no database, no paid service.
- Editable through the CMS: profile, metrics, section visibility and order, about/CV, research themes, projects, team, teaching, news, blog posts, publications.
- CMS field labels and the editing guide are in French and kept simple.
- Undecided: final GitHub account and repository name; whether a custom domain will be used; course list for the teaching section.

## Brand Commitments

- Name: "Tedjani Mesbahi" (Pr. / Prof.). Titles as published: Professeur des universités / Full Professor, INSA Strasbourg; ICube (CNRS UMR 7357), team EM3; IEEE Senior Member.
- Style (chosen by the user): a conventional academic website in the al-folio / Hugo Academic family, with one creative touch — a fine-line battery equivalent-circuit drawing. A bolder "dangerous-goods label" concept was shown and declined. The user also asked for a style "far from AI slop".

## Evidence on Hand

- Research dossier with sources: `docs/research-dossier.md`.
- Public profiles: ORCID 0000-0003-3808-6519, Google Scholar 8LNdFkEAAAAJ, Scopus 54420534000, HAL, LinkedIn.
- Metrics (Google Scholar, Oct 2026): 2,045 citations, h-index 24, i10-index 42.
- Publications: 96 HAL records plus OpenAlex additions.
- News: INSA Strasbourg research news 2019–2026 (ENERGETIC, VEHICLE, France 2, SIS 67, IEEE Senior Member, HDR, PhD defences).
- Absent: portrait photo, logos, course list, testimonials. Do not fabricate them; the CMS lets the professor upload a photo.

## Product Principles

1. Proof before praise: dates, numbers, projects and sources, never vague superlatives.
2. Always current: news and blog are the living front; stale content is the main failure.
3. One editor, no developer: every recurring update must be possible in the CMS in French.
4. Bridge research and public: technical depth for peers, plain language for press and students.
5. Contact is never more than one step away.

## Accessibility & Inclusion

WCAG 2.2 AA: sufficient contrast, keyboard navigation, reduced-motion support, proper language attributes for EN/FR pages.
