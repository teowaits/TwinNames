# TwinNames
👶👶 Twin & Triplet naming website

**Conceived by teowaits for L&E.**
**Original version** vibe-coded with Claude Sonnet 4.6.
**Redesign** designed by teowaits, executed by Claude Sonnet & Opus.

App for discovering matching names for twins and triplets — filtered by gender, character length, and country of origin, drawing from official national statistics databases across 11 countries.

Live demo → https://teowaits.github.io/TwinNames/

---

## How it works

👶 &nbsp; Choose **twins** or **triplets**
♀ ♂ ◇ &nbsp; Set a **gender** for each child independently
📏 &nbsp; Pick a shared **name length** (3–10 letters)
🌍 &nbsp; Toggle the **countries** to search (tap a flag to include/exclude it)
✦ &nbsp; Hit **discover** — then **lock** names you love, **reroll** the rest, and **save** favourite pairings

---

## Features

**Two-of-a-Kind cards** — names are revealed with a card-flip animation; an ampersand ( & ) links each pair or trio
**Lock & reroll** — 🔒 pin a name you love and reroll only the other card(s) with 🎲
**Shortlist** — ♥ save any pairing you want to revisit; tappable chips at the bottom of the screen
**Share card** — ⤴ opens a clean, screenshot-ready card showing the pair with their origin flags
**Flag grid country picker** — tap flags to toggle databases; visual and language-light
**✦ Universal mode** — a Venn-circle toggle restricts results to names shared by every selected country
**✦ Universal badge + confetti** — a name present in all selected databases gets a gold badge and triggers confetti
**ⓘ Info panel** — a top-right button opens a quick how-to and links to every official source database
**Tweaks** — an in-page panel (accessible from the toolbar) to swap palette (bright / pastel / warm), twin link (ampersand / heart / infinity / line), and reveal style (flip / fly / none)
**11 official databases** — see Data Sources below
**Fully offline after load** — no API calls, no tracking, no cookies

---

## Data Sources

All name lists are drawn from official government statistics (2023 editions unless noted):

| Country | Source | Dataset |
|---------|--------|---------|
| 🇮🇹 Italy | [ISTAT](https://www.istat.it/dati/calcolatori/contanomi/) | Most common given names |
| 🇪🇸 Spain | [INE](https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736177009&menu=ultiDatos&idp=1254735572981) | Nombres más frecuentes |
| 🇺🇸 USA | [SSA](https://www.ssa.gov/oact/babynames/) | Popular baby names |
| 🇬🇧 UK | [ONS](https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/bulletins/babynamesenglandandwales/2023) | Baby names, England & Wales |
| 🇫🇷 France | [INSEE](https://www.insee.fr/fr/statistiques/8205628) | Prénoms les plus attribués |
| 🇩🇪 Germany | [GfdS](https://gfds.de/vornamen/beliebteste-vornamen/) | Beliebteste Vornamen |
| 🇸🇪 Sweden | [SCB](https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/ovrigt/namnstatistik/) | Namnstatistik |
| 🇨🇦 Canada | [Statistics Canada](https://www.statcan.gc.ca/en/subjects-start/population_and_demography) | Most popular baby names |
| 🇮🇪 Ireland | [CSO](https://www.cso.ie/en/statistics/birthsdeathsandmarriages/irishbabiesnames/) | Irish Babies Names |
| 🇧🇷 Brazil | [IBGE](https://censo2022.ibge.gov.br/nomes) | Nomes no Brasil (Census 2022) |
| 🇳🇱 Netherlands | [SVB](https://www.svb.nl/nl/kindernamen/) | Populairste kindernamen |

Name lists include male, female, and gender-neutral categories for each country. Accent-insensitive matching is used throughout — so "Lucia" correctly matches "Lucía", enabling true cross-country comparison.

---

## Tech Stack

No build step, no npm, no node_modules.

- **React 18** + **Babel standalone** — loaded from CDN; JSX transpiled in-browser
- **Google Fonts** — Fredoka + DM Mono, loaded via `<link>`
- **No backend** — everything runs client-side; data is embedded in `names-data.js`

The name-matching logic (normalisation, pool-building, universal filter) is pure vanilla JS, unchanged from v1.

---

## Project Structure

```
TwinNames/
├── index.html        # Shell: theme CSS, font imports, script load order
├── names-data.js     # NAME_DB + matching helpers (norm, buildPool, pickEntry, pickRandom)
├── app.jsx           # React UI: config, results, cards, share card, info sheet, shortlist
├── tweaks-panel.jsx  # Reusable Tweaks panel component (palette / connector / reveal)
├── CNAME             # GitHub Pages custom domain
└── README.md         # This file
```

---

## Getting Started

**Option 1 — Just open it**
```bash
git clone https://github.com/teowaits/TwinNames.git
cd TwinNames
open index.html   # macOS
# or double-click index.html in your file explorer
```
No server needed. Because Babel loads app.jsx as a relative file, most browsers will run it directly from the filesystem. If yours blocks local file imports, use Option 2.

**Option 2 — Serve locally**
```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```
Then open http://localhost:8080.

---

## Deployment

Netlify / Vercel / Cloudflare Pages — connect the repo; the root `index.html` is picked up automatically.

GitHub Pages — Settings → Pages → source: main branch, / (root). Live at `https://yourusername.github.io/TwinNames/`.

Traditional hosting — upload all four files (`index.html`, `names-data.js`, `app.jsx`, `tweaks-panel.jsx`) to your public root. Done.

---

## How the matching works

**Name pool**
When you select countries and a length, the app scans each country's list in `names-data.js`, normalises accented characters via Unicode NFD decomposition, and groups entries by their normalised form:

```
Lucía (Spain) = Lucia (Italy/Sweden) ✓
Léo (France)  = Leo (UK/USA)         ✓
```

Each pool entry tracks which countries it was found in — powering both the flag display and the Universal filter.

**Universal mode**
With the ✦ Venn toggle ON, the pool is filtered to entries whose country count equals the number of selected databases — i.e. only names present in *every* chosen source pass through.

**Lock & reroll**
Locking a card removes it from the reroll cycle. Rerolling picks a random entry from the pool different from the current name — pools stay fresh and names can recur across rerolls within a session.

**Shortlist**
Saving a pairing stores it in React state for the session. Tapping a saved chip re-opens its share card.

---

## Customisation

Want to add a country or extend a name list? All data lives in `names-data.js`:

```js
const NAME_DB = {
  italy: {
    label:   "🇮🇹 Italy (ISTAT 2023)",
    flag:    "🇮🇹",
    name:    "Italy",
    male:    ["Leonardo", "Matteo", ...],
    female:  ["Sofia", "Aurora", ...],
    neutral: ["Andrea", "Luca", ...]
  },
  // add your country here...
};
```

Each entry needs `label`, `flag`, `name`, and three arrays: `male`, `female`, `neutral`. Also add a corresponding entry to the `SOURCES` object in `app.jsx` with a `src` acronym and official `href`.

---

## Contributing

Pull requests are welcome. Ideas for improvement:

- Add more countries (Portugal 🇵🇹, Japan 🇯🇵, India 🇮🇳, Norway 🇳🇴…)
- Expand neutral / non-binary name lists
- Add a "meaning" tooltip powered by a public name API
- Export the shortlist to PDF or clipboard
- PWA / offline manifest so the app installs on mobile

---

## Changelog

### June 2025 — Two-of-a-Kind redesign 
- **New UI** — complete frontend redesign; bright candy palette, Fredoka + DM Mono typography
- **Card-flip reveal** — names flip in with a staggered animation on discover
- **Ampersand connector** — a drawn & links each pair (tweakable to ♥, ∞, or a plain line)
- **Lock & reroll** — 🔒 pin a name, 🎲 reroll the rest
- **Shortlist replaces skip log** — ♥ save pairings you love instead of tracking what you passed on
- **Share card** — screenshot-ready pairing card with origin flags
- **Flag grid country picker** — visual, language-light; replaces text buttons
- **ⓘ Info panel** — how-to steps + all source links, accessible without cluttering the main UI
- **Tweaks panel** — in-page controls for palette, twin link, and reveal style
- **Confetti** — fires on a ✦ Universal match
- **Stack** — migrated from vanilla JS to React 18 + Babel; name data and matching logic untouched

### May 2025 v1.0
- **Added Netherlands 🇳🇱** — 60 male, 60 female, 25 neutral names from SVB (2025 rankings)
- **Added Ireland 🇮🇪** — 55 male, 55 female, 18 neutral names from CSO, including Irish Gaelic names
- **Added Brazil 🇧🇷** — 55 male, 55 female, 10 neutral names from IBGE Census 2022
- **Fixed broken source links** — ISTAT, INE, INSEE, SCB URLs updated
- **Corrected Germany source** — attributed to GfdS (not Destatis)

---

## License

**MIT** — do whatever you like with it.

No tracking, no ads, no cookies.
