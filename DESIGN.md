# Design

<!-- impeccable:design-schema 1 -->

## World

Conventional academic website in the al-folio × Hugo Academic family, executed with care: white page, portrait card beside the biography, dated news list, publications with venue badges, structured sections. One creative device only: a fine-line drawing of a lithium-ion battery equivalent circuit (Thevenin model: OCV(SOC) source, R0, two RC pairs, terminal voltage), drawn on a faint dot grid like engineering paper, in the cover banner above the profile card and in inner page headers. It is the model at the heart of his research. Chosen by the user over a bolder concept; no other ornament.

## Color

Restrained: neutrals plus one blue accent. Light theme by default (readers at desks and on phones in daylight); dark theme follows the system setting or the header toggle.

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--bg` | `#ffffff` | `#0f1419` | page |
| `--surface` | `#f6f8fa` | `#161b22` | alternate sections, cards on hover |
| `--text` | `#1f2328` | `#e6edf3` | body text |
| `--muted` | `#59636e` | `#9aa5b1` | meta, dates, authors |
| `--border` | `#d1d9e0` | `#30363d` | rules, card outlines |
| `--accent` | `#1a5fb4` | `#6ea8fe` | links, badges, circuit lines |
| `--accent-strong` | `#134a8e` | `#9ec5ff` | link hover |
| `--accent-soft` | `#e9f1fc` | `#16263d` | badge and tag fills |

## Typography

- Headings, name, section titles: **Source Serif 4** (variable, optical size on), weight 600, tracking normal.
- Body and interface: **Source Sans 3** (variable), 17 px base, line-height 1.65, measure 65–72ch.
- Numbers in dates and years use tabular figures.
- Scale: section titles clamp(1.6rem → 2.1rem); name clamp(2.4rem → 3.4rem); body 1.0625rem; meta 0.875rem.

## Layout

- Content width 1140 px with fluid gutters; reading width 72ch.
- Desktop sections use the Hugo Academic grid: title column (3/12) on the left, content (9/12) on the right; below 1000 px the title stacks above.
- Sections separated by generous space and a 1 px rule; alternate sections may use `--surface`.
- Profile header: portrait card (photo or initials, name, role, affiliation, icon links, citation line) on the left, biography + interests + degrees on the right.

## Components

- **Venue badge**: small rounded box (`--accent-soft` fill, `--accent` text, 600 weight, uppercase abbreviation) before each selected publication.
- **News list**: date column (tabular, muted) + one-line headline with link; category as small text tag.
- **Publication entry**: title (600), authors (muted, professor's name bold), venue in italic + year, compact outline buttons (DOI, HAL).
- **Project card**: 1 px border, 12 px radius, acronym in serif accent color, programme/role/period tags, summary, link; hover raises a soft offset shadow.
- **Timeline**: vertical 2 px line with accent dots, period in tabular figures.
- **Icon links**: monochrome inline SVG glyphs (email, Google Scholar, ORCID, LinkedIn, ResearchGate, HAL), 40 px hit area.
- Buttons and inputs: 8 px radius, 1 px border, accent fill for primary.

## Motion

One authored moment: current flowing through the circuit drawing (dash offset along the wires, slow, infinite but subtle). Everything else is short color and shadow transitions. `prefers-reduced-motion` stops the flow.

## Don'ts

- No other decorative devices (no stripes, hatching, gradients, glass, emoji icons).
- No stock photos or AI-generated imagery; the portrait is the professor's own upload, otherwise initials.
- No gray body text below 4.5:1 contrast.
