# TwinNames
👶👶 Twin & Triplet naming website

**vibed coded with Claude (Sonnet 4.6) from an old idea.** 

App for discovering matching names for twins and triplets — filtered by gender, character length, and country of origin, drawing from official national statistics databases across 11 countries.
Live demo → https://teowaits.github.io/TwinNames/

## Features

**Twins or triplets** — choose between 2 or 3 children
**Gender per child** — set Boy, Girl, or Gender-Neutral independently for each
**Name length filter** — match names by exact letter count (3–10), so your twins can share the same rhythm
**11 official databases** — toggle any combination of countries to search across
**Universal mode** — optionally restrict results to names that appear in all selected databases simultaneously (e.g. "Lucia" appears in Italy, Spain, Sweden and France)
**Country flags on every card** — instantly see which databases contain each suggested name
**✦ Universal badge** — cards are tagged when a name is truly cross-cultural
**Skip names you dislike** — the × button excludes a name and auto-picks the next one from the pool
**Skipped name log** — a running list of everything you've passed on
**Fully offline after load** — no API calls, no tracking, no cookies


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

## Tech Stack
This project is intentionally zero-dependency.

Pure HTML, CSS, and vanilla JavaScript — no React, no Vue, no build step
Single file — the entire app lives in index.html
No npm, no bundler, no node_modules
One external resource — Google Fonts (Cormorant Garamond + DM Mono), loaded via <link>. Falls back to system serif if unavailable


## Getting Started
**Option 1 — Just open it**
bashgit clone https://github.com/teowaits/twinnames.git
cd twin-names
open index.html   # macOS
# or double-click index.html in your file explorer
No server needed. It runs directly from the filesystem.
**Option 2 — Serve locally**
bash# Python
python3 -m http.server 8080

# Node
npx serve .
Then open http://localhost:8080.

## Deployment
Because it's a single HTML file, deployment is as simple as it gets.
Netlify / Vercel / Cloudflare Pages
Just connect the repo — the root index.html is picked up automatically.
GitHub Pages
Go to Settings → Pages, set the source to the main branch and / (root). Your app will be live at https://yourusername.github.io/twin-names/.
Traditional hosting (FTP / cPanel)
Upload index.html to your domain's public_html (or www) root. Done.

## Project Structure
twin-names/
└── index.html      # The entire application
└── README.md       # This file
└── CNAME           # GitHub Pages custom domain

## How It Works
**Name matching**
When you select countries and a character length, the app builds a pool of candidates by scanning each country's name list and normalising accented characters (via Unicode NFD decomposition) before comparing. This means:

Lucía (Spain) = Lucia (Italy/Sweden) ✓
Léo (France) = Leo (UK/USA) ✓

Each entry in the pool tracks which countries it was found in, enabling both the flag display and the Universal filter.
Universal mode
With Universal mode ON, the pool is filtered to entries whose country list length equals the number of selected countries — i.e. only names present in every chosen database make it through.
Skip & replace
Excluded names are stored in a per-child Set. When you skip a name, it's added to that set and the next non-excluded entry in the shuffled pool is shown. Pools are re-shuffled on "New set" but skipped names carry over within a session.

## Customisation
Want to add a country or extend a name list? All data lives in the NAME_DB object near the top of index.html:
jsconst NAME_DB = {
  italy: {
    label: "🇮🇹 Italy (ISTAT 2023)",
    flag:  "🇮🇹",
    male:    ["Leonardo", "Matteo", ...],
    female:  ["Sofia", "Aurora", ...],
    neutral: ["Andrea", "Luca", ...]
  },
  // add your country here...
};
Each entry needs a label, flag, and three arrays: male, female, neutral.

## Contributing
Pull requests are welcome. Ideas for improvement:

- Add more countries (Portugal 🇵🇹, Japan 🇯🇵, India 🇮🇳, Norway 🇳🇴…)
- Expand neutral/non-binary name lists
- Add a "meaning" tooltip powered by a public name API
- Export a shortlist to PDF or clipboard

Please keep the zero-dependency philosophy intact — no build tools, no frameworks.

## Changelog

### May 2025
- **Added Netherlands 🇳🇱** — 60 male, 60 female, 25 neutral names from the SVB (Sociale Verzekeringsbank), 2025 rankings
- **Added Ireland 🇮🇪** — 55 male, 55 female, 18 neutral names from the CSO (Central Statistics Office), including Irish Gaelic names: Oisín, Tadhg, Fiadh, Caoimhe, Saoirse, Sadhbh, and more
- **Added Brazil 🇧🇷** — 55 male, 55 female, 10 neutral names from the IBGE (Instituto Brasileiro de Geografia e Estatística), with correct Brazilian Portuguese accents; footer links to the interactive [Nomes no Brasil](https://censo2022.ibge.gov.br/nomes) Census 2022 app
- **Fixed broken source links** — ISTAT, INE, INSEE, and SCB had all reorganised their URLs; links updated to current pages
- **Corrected Germany source** — was incorrectly attributed to Destatis (which does not publish name rankings); corrected to GfdS (Gesellschaft für Deutsche Sprache), the actual official source

## License
**MIT** — do whatever you like with it.

Built with vanilla JS and official government data. No tracking, no ads, no cookies.
