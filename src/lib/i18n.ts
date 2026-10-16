export const LANGS = ['en', 'fr'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const ui = {
  en: {
    updates_intro: 'Recent talks, papers, events and team news, in one line each.',
    kinds: {
      attending: 'Attending', talk: 'Talk', accepted: 'Accepted', published: 'Published', award: 'Award',
      defended: 'PhD defence', joined: 'New member', recruiting: 'Recruiting', media: 'Media', lab: 'Lab',
      project: 'Project', visit: 'Visit', other: 'Update',
    } as Record<string, string>,
    show_more: 'Show earlier updates',
    positions_intro: 'PhD, postdoc and internship opportunities in battery modelling, management and safety.',
    position_types: { phd: 'PhD', postdoc: 'Postdoc', internship: 'Internship', engineer: 'Engineer', other: 'Position' } as Record<string, string>,
    start: 'Start',
    deadline: 'Apply by',
    location: 'Location',
    funding: 'Funding',
    apply: 'Apply',
    offer_pdf: 'Full offer (PDF)',
    offer_details: 'Details',
    no_positions: 'No open position is advertised right now.',
    spontaneous: 'Unsolicited applications',
    apply_subject: 'Application',
    gallery_intro: 'Events, field work and the people behind the projects.',
    slider_label: 'Highlights',
    slide_of: (i: number, n: number) => `${i} of ${n}`,
    prev: 'Previous',
    next: 'Next',
    pause: 'Pause',
    play: 'Play',
    go_to_slide: (i: number) => `Go to slide ${i}`,
    photo_credit: 'Photo',
    open_photo: 'Open photo',
    blog_soon: 'The first posts are on their way: notes on batteries, safety and research life.',
    blog_follow: 'Meanwhile, follow the latest news',
    theme_toggle: 'Switch light / dark theme',
    footer_links: 'Footer links',
    education: 'Degrees',
    cv: 'Download CV',
    read_original: 'Read the original article',
    back_news: 'All news',
    back_blog: 'All posts',
    cite_line: (c: string, h: string | number) => `${c} citations · h-index ${h}`,
    scholar_source: 'Google Scholar',
    profile_photo: 'Portrait',
    more_news: 'More news',
    selected_pubs: 'Selected publications',
    research_lead: 'Main themes',
    supervision: 'Supervision',
    in_media: 'In the media',
    all_media: 'All media appearances',
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    nav_label: 'Main navigation',
    switch_lang: 'Français',
    switch_lang_short: 'FR',
    home: 'Home',
    latest: 'Latest',
    all_news: 'All news',
    all_posts: 'All posts',
    all_publications: 'All publications',
    read_more: 'Read more',
    source: 'Source',
    contact: 'Contact',
    write: 'Write an email',
    publications: 'Publications',
    pubs_per_year: 'Publications per year',
    pubs_total: 'publications',
    pubs_label_hint: 'Hover or tap a stripe',
    pubs_year_count: (year: string, n: number) => `${year} · ${n} publication${n === 1 ? '' : 's'}`,
    citations: 'Citations',
    h_index: 'h-index',
    i10_index: 'i10-index',
    theses: 'PhD theses',
    theses_detail: (done: number, current: number) => `${done} defended · ${current} ongoing`,
    eu_projects: 'European projects led',
    as_of: (source: string, date: string) => `${source}, ${date}`,
    programme: 'Programme',
    role: 'Role',
    period: 'Period',
    budget: 'Budget',
    partners: 'Partners',
    project: 'Project',
    details: 'Project page',
    year: 'Year',
    title_authors: 'Title & authors',
    venue: 'Venue',
    type: 'Type',
    link: 'Link',
    featured_pubs: 'Most cited and recent work',
    types: {
      journal: 'Journal', conference: 'Conference', poster: 'Poster', chapter: 'Chapter', book: 'Book',
      thesis: 'PhD thesis', hdr: 'Habilitation', report: 'Report', patent: 'Patent', other: 'Other',
    } as Record<string, string>,
    categories: {
      media: 'Media', project: 'Project', event: 'Event', award: 'Award', thesis: 'Thesis',
      outreach: 'Outreach', publication: 'Publication', other: 'News',
    } as Record<string, string>,
    keywords: 'Keywords',
    facilities: 'Lab',
    phd_current: 'Current PhD students',
    phd_alumni: 'Defended theses',
    staff: 'Postdocs & engineers',
    with: 'with',
    open_positions: 'Open positions',
    timeline: 'Career',
    distinctions: 'Distinctions',
    service: 'Service to the community',
    interests: 'Research interests',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    office: 'Office',
    profiles: 'Profiles',
    courses: 'Courses',
    blog_empty: 'First posts coming soon.',
    news_empty: 'No news yet.',
    reading_time: (min: number) => `${min} min read`,
    written_in: { fr: 'In French', en: 'In English' } as Record<string, string>,
    back_to_top: 'Back to top',
    edit: 'Edit',
    updated: 'Updated',
    filter_all: 'All',
    filter_label: 'Filter publications',
    search_label: 'Search publications',
    search_placeholder: 'Title, author, venue…',
    results: (n: number) => `${n} result${n === 1 ? '' : 's'}`,
    page_news_title: 'News',
    page_news_intro: 'Media appearances, projects, events, awards and PhD defences.',
    page_blog_title: 'Blog',
    page_blog_intro: 'Notes on batteries, safety and research.',
    page_pubs_title: 'Publications',
    page_pubs_intro: 'Journal articles, conference papers and theses, from HAL and OpenAlex.',
    footer_cms: 'Content managed with Sveltia CMS.',
    not_found: 'Page not found',
    not_found_text: 'This page does not exist or has moved.',
  },
  fr: {
    updates_intro: 'Conférences, publications, événements et vie de l’équipe, en une ligne.',
    kinds: {
      attending: 'Participation', talk: 'Intervention', accepted: 'Accepté', published: 'Publié', award: 'Distinction',
      defended: 'Soutenance', joined: 'Arrivée', recruiting: 'Recrutement', media: 'Médias', lab: 'Laboratoire',
      project: 'Projet', visit: 'Visite', other: 'Info',
    } as Record<string, string>,
    show_more: 'Voir les brèves précédentes',
    positions_intro: 'Thèses, post-doctorats et stages sur la modélisation, la gestion et la sécurité des batteries.',
    position_types: { phd: 'Thèse', postdoc: 'Post-doctorat', internship: 'Stage', engineer: 'Ingénieur', other: 'Poste' } as Record<string, string>,
    start: 'Début',
    deadline: 'Candidater avant le',
    location: 'Lieu',
    funding: 'Financement',
    apply: 'Postuler',
    offer_pdf: 'Offre complète (PDF)',
    offer_details: 'Détails',
    no_positions: 'Aucune offre n’est publiée en ce moment.',
    spontaneous: 'Candidatures spontanées',
    apply_subject: 'Candidature',
    gallery_intro: 'Événements, terrain et les personnes derrière les projets.',
    slider_label: 'À la une',
    slide_of: (i: number, n: number) => `${i} sur ${n}`,
    prev: 'Précédent',
    next: 'Suivant',
    pause: 'Pause',
    play: 'Lecture',
    go_to_slide: (i: number) => `Aller à la diapositive ${i}`,
    photo_credit: 'Photo',
    open_photo: 'Agrandir la photo',
    blog_soon: 'Les premiers billets arrivent bientôt : notes sur les batteries, la sécurité et la vie de la recherche.',
    blog_follow: 'En attendant, suivez les actualités',
    theme_toggle: 'Basculer thème clair / sombre',
    footer_links: 'Liens de pied de page',
    education: 'Diplômes',
    cv: 'Télécharger le CV',
    read_original: 'Lire l’article d’origine',
    back_news: 'Toutes les actualités',
    back_blog: 'Tous les billets',
    cite_line: (c: string, h: string | number) => `${c} citations · indice h ${h}`,
    scholar_source: 'Google Scholar',
    profile_photo: 'Portrait',
    more_news: 'Plus d’actualités',
    selected_pubs: 'Publications choisies',
    research_lead: 'Thèmes principaux',
    supervision: 'Encadrement',
    in_media: 'Dans les médias',
    all_media: 'Toutes les interventions',
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    nav_label: 'Navigation principale',
    switch_lang: 'English',
    switch_lang_short: 'EN',
    home: 'Accueil',
    latest: 'Dernière actualité',
    all_news: 'Toutes les actualités',
    all_posts: 'Tous les billets',
    all_publications: 'Toutes les publications',
    read_more: 'Lire la suite',
    source: 'Source',
    contact: 'Contact',
    write: 'Écrire un e-mail',
    publications: 'Publications',
    pubs_per_year: 'Publications par an',
    pubs_total: 'publications',
    pubs_label_hint: 'Survolez ou touchez une bande',
    pubs_year_count: (year: string, n: number) => `${year} · ${n} publication${n > 1 ? 's' : ''}`,
    citations: 'Citations',
    h_index: 'Indice h',
    i10_index: 'Indice i10',
    theses: 'Thèses',
    theses_detail: (done: number, current: number) => `${done} soutenues · ${current} en cours`,
    eu_projects: 'Projets européens pilotés',
    as_of: (source: string, date: string) => `${source}, ${date}`,
    programme: 'Programme',
    role: 'Rôle',
    period: 'Période',
    budget: 'Budget',
    partners: 'Partenaires',
    project: 'Projet',
    details: 'Page du projet',
    year: 'Année',
    title_authors: 'Titre et auteurs',
    venue: 'Revue / conférence',
    type: 'Type',
    link: 'Lien',
    featured_pubs: 'Travaux les plus cités et récents',
    types: {
      journal: 'Revue', conference: 'Conférence', poster: 'Poster', chapter: 'Chapitre', book: 'Ouvrage',
      thesis: 'Thèse', hdr: 'HDR', report: 'Rapport', patent: 'Brevet', other: 'Autre',
    } as Record<string, string>,
    categories: {
      media: 'Médias', project: 'Projet', event: 'Événement', award: 'Distinction', thesis: 'Thèse',
      outreach: 'Grand public', publication: 'Publication', other: 'Actualité',
    } as Record<string, string>,
    keywords: 'Mots-clés',
    facilities: 'Laboratoire',
    phd_current: 'Doctorants en cours',
    phd_alumni: 'Thèses soutenues',
    staff: 'Post-doctorants et ingénieurs',
    with: 'avec',
    open_positions: 'Postes ouverts',
    timeline: 'Parcours',
    distinctions: 'Distinctions',
    service: 'Activités collectives',
    interests: 'Thèmes de recherche',
    email: 'E-mail',
    phone: 'Téléphone',
    address: 'Adresse',
    office: 'Bureau',
    profiles: 'Profils',
    courses: 'Cours',
    blog_empty: 'Premiers billets bientôt.',
    news_empty: 'Pas encore d’actualité.',
    reading_time: (min: number) => `${min} min de lecture`,
    written_in: { fr: 'En français', en: 'En anglais' } as Record<string, string>,
    back_to_top: 'Haut de page',
    edit: 'Modifier',
    updated: 'Mis à jour',
    filter_all: 'Tout',
    filter_label: 'Filtrer les publications',
    search_label: 'Rechercher une publication',
    search_placeholder: 'Titre, auteur, revue…',
    results: (n: number) => `${n} résultat${n > 1 ? 's' : ''}`,
    page_news_title: 'Actualités',
    page_news_intro: 'Médias, projets, événements, distinctions et soutenances de thèse.',
    page_blog_title: 'Blog',
    page_blog_intro: 'Notes sur les batteries, la sécurité et la recherche.',
    page_pubs_title: 'Publications',
    page_pubs_intro: 'Articles de revues, communications et thèses, d’après HAL et OpenAlex.',
    footer_cms: 'Contenu géré avec Sveltia CMS.',
    not_found: 'Page introuvable',
    not_found_text: 'Cette page n’existe pas ou a été déplacée.',
  },
};

export type UI = (typeof ui)['en'];

export function t(lang: Lang): UI {
  return ui[lang] as UI;
}

/** Reads `key_<lang>`, falling back to the French / untranslated value (the editor's first language). */
export function pick(obj: Record<string, any> | undefined | null, key: string, lang: Lang): any {
  if (!obj) return '';
  const order = lang === 'en' ? [`${key}_en`, `${key}_fr`, key] : [`${key}_fr`, key, `${key}_en`];
  for (const k of order) {
    const v = obj[k];
    if (v !== undefined && v !== null && !(typeof v === 'string' && v.trim() === '') && !(Array.isArray(v) && v.length === 0)) {
      return lang === 'fr' && typeof v === 'string' ? frenchSpacing(v) : v;
    }
  }
  return '';
}

/** French typography: non-breaking space before : ; ! ? » and after «, so lines never start with them. */
export function frenchSpacing(text: string): string {
  return text.replace(/ ([:;!?»])/g, '\u00a0$1').replace(/« /g, '«\u00a0');
}

/** Root-relative path for a page in a language, without the base path. */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return lang === DEFAULT_LANG ? `/${clean}` : `/${lang}/${clean}`;
}

/** Prefixes the configured base path (GitHub project sites live under /repo-name/). */
export function withBase(path: string): string {
  if (!path) return path;
  if (/^(https?:|mailto:|tel:|#|data:)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

export function href(lang: Lang, path = ''): string {
  return withBase(localePath(lang, path));
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

const LOCALES: Record<Lang, string> = { en: 'en-GB', fr: 'fr-FR' };

export function formatDate(value: string, lang: Lang, style: 'long' | 'short' | 'month' = 'long'): string {
  if (!value) return '';
  const iso = String(value).slice(0, 10);
  const [y, m, d] = iso.split('-').map(Number);
  if (!y) return String(value);
  const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1));
  const options: Intl.DateTimeFormatOptions =
    style === 'month'
      ? { month: 'long', year: 'numeric', timeZone: 'UTC' }
      : style === 'short'
        ? { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' }
        : { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' };
  return new Intl.DateTimeFormat(LOCALES[lang], options).format(date);
}

export function formatNumber(value: number, lang: Lang): string {
  return new Intl.NumberFormat(LOCALES[lang]).format(value);
}
