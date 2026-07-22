# Moomken Design System — منظمة ممكن

Design system for **Moomken Organization for Awareness & Media** (منظمة ممكن), an NGO based in Hay Alandalus, Tripoli, Libya. A youth-driven organization working in media literacy, civic awareness, peace building, civil-society support, climate-change advocacy, and media campaigns — aiming to be a platform for creative Libyan youth to innovate in media and awareness. Projects include Sawab (media literacy / counter-misinformation), Tawasul, Tarseem, We Are Libyans, USAID/ORB, WFP partnerships. Website: moomken.org.

## Sources provided
- `uploads/Asset 2@4x.png` — full logo, white (for dark surfaces) → `assets/logo-white.png`
- `uploads/Asset 3@4x.png` — full logo, brand cyan `#3AC0EB` → `assets/logo-cyan.png`
- `uploads/Asset 5@4x.png` — 3D render of the ممكن wordmark → `assets/logo-3d.png`
- `uploads/Screenshot 2026-07-22 095846.png` — color-ratio sheet (60/30/10) → `assets/palette-ratio.png`
- Font binaries: **Dahab Arabic ITF** (Light→Black) and **Gotham** (Thin→Black + italics) → `assets/fonts/`
- No codebase or Figma was provided; components are an authored standard set built on the brand foundations (see "Intentional additions").

## Brand identity
The logo is the Arabic word **ممكن** ("possible") drawn as a rounded geometric wordmark with a circular dot, plus the Latin lockup MOOMKENORG / FOR AWARENESS & MEDIA. Logo color is cyan `#3AC0EB` on light, or white on navy/photo. Never redraw the mark — use the PNGs in `assets/`.

## Color system (60 / 30 / 10)
The provided ratio sheet defines the composition rule:
- **60% Navy `#13253B`** — dominant: dark surfaces, headlines, hero/slide backgrounds
- **30% Blue `#73ABDC`** — secondary: supporting blocks, illustration, charts
- **10% Orange `#DF643A`** — accent only: CTAs, highlights, emphasis. Never a background for long text.
- **Ice `#D0E7F1`** — light supporting surface / text-on-dark-muted
- **Cyan `#3AC0EB`** — reserved primarily for the logo and focus states

## Typography
Bilingual system, Arabic-first:
- **Dahab Arabic ITF** — all Arabic text (RTL). Generous line-height (1.8 body).
- **Gotham** — all Latin text. Headlines bold/black, often uppercase in lockups.

## CONTENT FUNDAMENTALS
- **Bilingual**: Arabic is the primary community-facing voice; English used for partners/donors (USAID, WFP) and project reports. Pages often pair both.
- **Tone**: earnest, civic, hopeful, empowering. "We" voice for the organization (نسعى، نطمح / "We are aiming to become a platform for creative and active youth in Libya"). Direct "you" when engaging audience (اسأل نفسك: كم ساعة تقضيها يومياً…).
- **Casing**: English headlines Title Case or ALL CAPS in lockups; body sentence case. Arabic headlines short and declarative.
- **Copy style**: mission-driven, concrete project language (goals, bullets of aims, partner credits "funded by USAID"). Numbers and impact stats used prominently.
- **Numerals**: always Western digits (0-9), even in Arabic text — never Eastern Arabic-Indic numerals (٠١٢).
- **Emoji**: not used in official brand materials.
- **Vibe**: optimistic possibility — the brand name itself means "possible".

## VISUAL FOUNDATIONS
- **Colors**: strict 60/30/10 navy/blue/orange (above). Max two background colors per composition; navy or white dominant, ice for alternate sections.
- **Type scale**: display 56 / h1 40 / h2 30 / h3 22 / body 16. Headlines weight 700–900. Arabic display uses Dahab Black/ExtraBold.
- **Backgrounds**: flat solid color fields — no gradients, no textures. Full-bleed navy for heroes/slides; white or ice for content. Photography (community events, workshops) sits in blocks, often under a navy overlay for text protection.
- **Shapes**: the logo's circular counters drive the motif — circles and rounded geometry are on-brand decoration. Corner radii: 6/10/16px, pills for tags/buttons.
- **Borders**: hairline `#DCE6EE` on light; cards prefer shadow over border.
- **Shadows**: soft navy-tinted (`0 2px 8px rgba(19,37,59,.08)` card, `0 8px 24px .14` raised). No inner shadows.
- **Hover**: darken one step (navy→#1B3350, orange→#C24E2A); links gain underline. Press: darken further, no shrink.
- **Animation**: minimal — 150–200ms ease fades/color transitions only. No bounces.
- **Transparency/blur**: none in brand materials; navy overlay at 60–75% over photos.
- **Imagery**: warm, human, documentary photos of Libyan youth, workshops, city. No stock-gloss.
- **Cards**: white, radius 16, card shadow, no border, padded 24.
- **Layout**: generous whitespace, strong grid; RTL mirroring required for Arabic surfaces.

## ICONOGRAPHY
No icon set was provided in the sources. Approach:
- **Logo marks only** from `assets/` (never redrawn).
- **Substitution (FLAGGED)**: [Lucide](https://unpkg.com/lucide@latest) via CDN is used as the working icon set — rounded stroke geometry matches the logo's rounded forms. Stroke 2px, color inherits text. Replace with the org's real icon set if one exists.
- No emoji, no unicode-as-icons.

## Intentional additions
No component source existed, so a standard set was authored on the brand foundations: Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip. Plus `Logo` (wraps the PNG assets with size/variant props) and `StatBlock` (impact numbers are core to NGO copy).

## Index
- `styles.css` → `tokens/{fonts,colors,typography,spacing,base}.css`
- `assets/` — logos (`logo-cyan.png`, `logo-white.png`, `logo-3d.png`), `palette-ratio.png`, `fonts/`
- `guidelines/` — specimen cards for the Design System tab
- `components/core/` — Button, IconButton, Badge, Tag, Card, StatBlock, Logo
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/navigation/` — Tabs
- `components/feedback/` — Dialog, Toast, Tooltip
- `SKILL.md` — agent skill entry point

## Caveats
- Gotham is licensed (Hoefler&Co) — binaries provided by the org; confirm license scope before web embedding.
- Icons are a Lucide substitution, flagged above.
- No product UI (website/app source) or deck templates were provided, so no UI-kit recreations or sample slides exist — only brand foundations and components.
