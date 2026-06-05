/* global React, ReactDOM, NAME_DB, COUNTRY_KEYS, norm, buildPool, pickEntry, pickRandom,
   useTweaks, TweaksPanel, TweakSection, TweakRadio */
const { useState, useRef, useEffect, useCallback } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "bright",
  "connector": "amp",
  "reveal": "flip"
}/*EDITMODE-END*/;

const CHILD_VARS = ["--c1", "--c2", "--c3"];
const GENDERS = [
  { id: "female",  glyph: "♀", tip: "Girl" },
  { id: "male",    glyph: "♂", tip: "Boy" },
  { id: "neutral", glyph: "◇", tip: "Either" },
];

// Official national name databases (source acronym + link per country).
const SOURCES = {
  italy:       { src: "ISTAT",   href: "https://www.istat.it/dati/calcolatori/contanomi/" },
  spain:       { src: "INE",     href: "https://www.ine.es/dyngs/INEbase/operacion.htm?c=Estadistica_C&cid=1254736177009&menu=ultiDatos&idp=1254735572981" },
  usa:         { src: "SSA",     href: "https://www.ssa.gov/oact/babynames/" },
  uk:          { src: "ONS",     href: "https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/bulletins/babynamesenglandandwales/2023" },
  france:      { src: "INSEE",   href: "https://www.insee.fr/fr/statistiques/8205628" },
  germany:     { src: "GfdS",    href: "https://gfds.de/vornamen/beliebteste-vornamen/" },
  sweden:      { src: "SCB",     href: "https://www.scb.se/hitta-statistik/statistik-efter-amne/befolkning-och-levnadsforhallanden/ovrigt/namnstatistik/" },
  canada:      { src: "StatCan", href: "https://www.statcan.gc.ca/en/subjects-start/population_and_demography" },
  ireland:     { src: "CSO",     href: "https://www.cso.ie/en/statistics/birthsdeathsandmarriages/irishbabiesnames/" },
  brazil:      { src: "IBGE",    href: "https://censo2022.ibge.gov.br/nomes" },
  netherlands: { src: "SVB",     href: "https://www.svb.nl/nl/kindernamen/" },
};

const HOW_STEPS = [
  { icon: "👶",    label: "Choose twins or triplets" },
  { icon: "♀ ♂ ◇", label: "Set a gender for each child" },
  { icon: "📏",    label: "Pick a shared name length" },
  { icon: "🌍",    label: "Toggle the countries to search" },
  { icon: "✦",     label: "Discover names — lock, reroll & save your favourites" },
];

const GITHUB_URL = "https://github.com/teowaits/TwinNames";

/* ── Info sheet: how-to + national databases ───────────────────────────────── */
function InfoSheet({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="info-scrim" onClick={onClose}>
      <div className="info-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="info-close" onClick={onClose} title="Close">✕</button>
        <div className="info-eyebrow">how it works</div>
        <ol className="how-list">
          {HOW_STEPS.map((s, i) => (
            <li key={i} className="how-step">
              <span className="how-num">{i + 1}</span>
              <span className="how-icon">{s.icon}</span>
              <span className="how-label">{s.label}</span>
            </li>
          ))}
        </ol>
        <div className="info-eyebrow">national name databases</div>
        <div className="src-grid">
          {COUNTRY_KEYS.map((c) => (
            <a key={c} className="src-row" href={SOURCES[c].href} target="_blank" rel="noopener noreferrer"
              title={"Open " + SOURCES[c].src}>
              <span className="src-flag">{NAME_DB[c].flag}</span>
              <span className="src-country">{NAME_DB[c].name}</span>
              <span className="src-acro">{SOURCES[c].src} ↗</span>
            </a>
          ))}
        </div>
        <p className="info-note">Official government statistics. Accent-insensitive matching, so Lucía = Lucia.</p>
      </div>
    </div>
  );
}

/* ── Discreet footer ───────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="foot">
      Conceived by teowaits for L&amp;E
      <span className="foot-dot">·</span>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">TwinNames on GitHub</a>
      <span className="foot-dot">·</span>
      MIT License
    </footer>
  );
}

/* ── tiny vanilla confetti burst ───────────────────────────────────────────── */
function confettiBurst(colors) {
  const N = 80;
  const wrap = document.createElement("div");
  wrap.className = "confetti-wrap";
  document.body.appendChild(wrap);
  for (let i = 0; i < N; i++) {
    const c = document.createElement("i");
    const col = colors[i % colors.length];
    const left = Math.random() * 100;
    const delay = Math.random() * 0.25;
    const dur = 1.4 + Math.random() * 1.1;
    const size = 6 + Math.random() * 8;
    const rot = Math.random() * 360;
    c.style.cssText =
      `left:${left}vw;width:${size}px;height:${size * 0.7}px;background:${col};` +
      `animation-duration:${dur}s;animation-delay:${delay}s;transform:rotate(${rot}deg);` +
      `border-radius:${Math.random() > 0.5 ? "50%" : "2px"};`;
    wrap.appendChild(c);
  }
  setTimeout(() => wrap.remove(), 3000);
}

/* ── Connector (ampersand / heart / infinity / line) ───────────────────────── */
function Connector({ kind, pulse, vertical }) {
  let inner;
  if (kind === "heart") inner = <span className="conn-glyph">♥</span>;
  else if (kind === "infinity") inner = <span className="conn-glyph">∞</span>;
  else if (kind === "amp") inner = <span className="conn-glyph amp">&amp;</span>;
  else inner = null; // line only
  return (
    <div className={"connector" + (vertical ? " vertical" : "") + (kind === "line" ? " line-only" : "") + (pulse ? " pulse" : "")}>
      <span className="conn-line" />
      {inner && <span className="conn-badge">{inner}</span>}
      <span className="conn-line" />
    </div>
  );
}

/* ── Name card with flip / fly reveal ──────────────────────────────────────── */
function NameCard({ idx, entry, revealed, locked, reveal, selectedCount, isUniversal,
                    onReroll, onLock }) {
  const accentVar = CHILD_VARS[idx];
  const name = entry ? entry.display : null;
  const letters = name ? norm(name).length : 0;

  const faceName = (
    <div className="face face-name" style={{ "--accent": `var(${accentVar})` }}>
      <button className="card-icon lock" title={locked ? "Locked — won't reroll" : "Lock this name"}
        onClick={(e) => { e.stopPropagation(); onLock(idx); }}>
        {locked ? "🔒" : "🔓"}
      </button>
      {name && !locked && (
        <button className="card-icon reroll" title="Reroll this name"
          onClick={(e) => { e.stopPropagation(); onReroll(idx); }}>↻</button>
      )}
      <span className="card-dot" />
      {name ? (
        <React.Fragment>
          <div className="card-name">{name}</div>
          <div className="card-len" title={letters + " letters"}>
            {Array.from({ length: letters }).map((_, i) => <span key={i} className="len-dot" />)}
          </div>
          <div className="card-foot">
            <div className="card-flags">
              {entry.countries.map((c) => (
                <span key={c} className="flag" title={NAME_DB[c].name}>{NAME_DB[c].flag}</span>
              ))}
            </div>
            {isUniversal && <span className="uni-badge" title="In every selected country">✦</span>}
          </div>
        </React.Fragment>
      ) : (
        <div className="card-empty" title="No match — try another length">
          <span className="empty-glyph">🔍</span>
          <span className="empty-dash">—</span>
        </div>
      )}
    </div>
  );

  if (reveal === "flip") {
    return (
      <div className={"card flip" + (locked ? " is-locked" : "")} style={{ "--accent": `var(${accentVar})` }}>
        <div className={"flip-inner" + (revealed ? " revealed" : "")}>
          {faceName}
          <div className="face face-mystery">
            <span className="mystery-glyph">👶</span>
            <span className="mystery-q">?</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={"card " + reveal + (revealed ? " in" : "") + (locked ? " is-locked" : "")}
         style={{ "--accent": `var(${accentVar})` }}>
      {faceName}
    </div>
  );
}

/* ── Share card overlay (screenshot-ready) ─────────────────────────────────── */
function ShareCard({ data, onClose }) {
  if (!data) return null;
  const { entries, count, selectedCount } = data;
  const items = entries.slice(0, count);
  return (
    <div className="share-scrim" onClick={onClose}>
      <div className="share-stage" onClick={(e) => e.stopPropagation()}>
        <div className="share-card" id="shareCard">
          <div className="share-eyebrow">✦ a perfect pair ✦</div>
          <div className="share-row">
            {items.map((e, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="share-amp">&amp;</span>}
                <div className="share-name-block" style={{ "--accent": `var(${CHILD_VARS[i]})` }}>
                  <span className="share-dot" />
                  <span className="share-name">{e ? e.display : "—"}</span>
                  <span className="share-flags">
                    {e && e.countries.map((c) => <span key={c}>{NAME_DB[c].flag}</span>)}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="share-mark">twin<span>names</span></div>
        </div>
        <div className="share-hint">📸 screenshot to share</div>
        <button className="share-close" onClick={onClose} title="Close">✕</button>
      </div>
    </div>
  );
}

/* ── Shortlist tray ────────────────────────────────────────────────────────── */
function Shortlist({ items, onOpen, onRemove }) {
  if (!items.length) return null;
  return (
    <div className="tray">
      <div className="tray-head"><span className="heart-mini">♥</span></div>
      <div className="tray-scroll">
        {items.map((p) => (
          <div key={p.id} className="tray-chip" onClick={() => onOpen(p)} title="Open card">
            <span className="tray-names">
              {p.entries.slice(0, p.count).map((e, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="tray-amp">&amp;</span>}
                  <span style={{ color: `var(${CHILD_VARS[i]})` }}>{e ? e.display : "—"}</span>
                </React.Fragment>
              ))}
            </span>
            <button className="tray-x" title="Remove"
              onClick={(e) => { e.stopPropagation(); onRemove(p.id); }}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Venn toggle for "universal only" ──────────────────────────────────────── */
function VennToggle({ on, disabled, onClick }) {
  return (
    <button className={"venn" + (on ? " on" : "") + (disabled ? " disabled" : "")}
      disabled={disabled} onClick={onClick}
      title={disabled ? "Pick 2+ countries first" : "Only names shared by every selected country"}>
      <svg viewBox="0 0 64 40" width="58" height="36">
        <circle cx="26" cy="20" r="15" />
        <circle cx="38" cy="20" r="15" />
      </svg>
      <span className="venn-star">✦</span>
    </button>
  );
}

/* ── Main App ──────────────────────────────────────────────────────────────── */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [step, setStep] = useState("config");
  const [isTriplet, setIsTriplet] = useState(false);
  const [genders, setGenders] = useState(["female", "male", "neutral"]);
  const [nameLength, setNameLength] = useState(5);
  const [selected, setSelected] = useState(["italy", "spain", "usa"]);
  const [universalOnly, setUniversalOnly] = useState(false);

  const [entries, setEntries] = useState([null, null, null]);
  const [revealed, setRevealed] = useState([false, false, false]);
  const [locked, setLocked] = useState([false, false, false]);
  const [shortlist, setShortlist] = useState([]);
  const [share, setShare] = useState(null);
  const [infoOpen, setInfoOpen] = useState(false);

  const poolsRef = useRef([[], [], []]);
  const entriesRef = useRef([null, null, null]);
  const lockedRef = useRef([false, false, false]);
  useEffect(() => { entriesRef.current = entries; }, [entries]);
  useEffect(() => { lockedRef.current = locked; }, [locked]);

  const count = isTriplet ? 3 : 2;
  const universalDisabled = selected.length < 2;

  const accentColors = () => CHILD_VARS.slice(0, count).map((v) =>
    getComputedStyle(document.documentElement).getPropertyValue(v).trim() || "#ff5d8f");

  const isUniv = (e) => e && selected.length > 1 && e.countries.length === selected.length;

  const revealCard = useCallback((i) => {
    setRevealed((r) => { const n = [...r]; n[i] = true; return n; });
  }, []);

  const maybeCelebrate = useCallback((ents) => {
    const anyUniv = ents.some((e) => e && selected.length > 1 && e.countries.length === selected.length);
    if (anyUniv) confettiBurst(accentColors());
  }, [selected]);

  const generate = () => {
    const newPools = [[], [], []], newEntries = [null, null, null];
    for (let i = 0; i < count; i++) {
      const p = buildPool(selected, genders[i], nameLength, universalOnly);
      newPools[i] = p;
      newEntries[i] = pickEntry(p, new Set());
    }
    poolsRef.current = newPools;
    entriesRef.current = newEntries;
    setEntries(newEntries);
    setLocked([false, false, false]);
    lockedRef.current = [false, false, false];
    setRevealed([false, false, false]);
    setStep("results");
    const delayBase = t.reveal === "none" ? 0 : 180;
    const stagger = t.reveal === "none" ? 0 : 240;
    for (let i = 0; i < count; i++) {
      setTimeout(() => revealCard(i), delayBase + i * stagger);
    }
    setTimeout(() => maybeCelebrate(newEntries), delayBase + count * stagger + 250);
  };

  const rerollOne = (i) => {
    if (lockedRef.current[i]) return;
    const swap = () => {
      const cur = entriesRef.current[i];
      const next = pickRandom(poolsRef.current[i], cur ? norm(cur.display) : "");
      setEntries((e) => { const n = [...e]; n[i] = next; entriesRef.current = n; return n; });
      requestAnimationFrame(() => revealCard(i));
      setTimeout(() => { if (isUniv(entriesRef.current[i])) confettiBurst(accentColors()); }, 350);
    };
    if (t.reveal === "none") { swap(); return; }
    setRevealed((r) => { const n = [...r]; n[i] = false; return n; });
    setTimeout(swap, t.reveal === "flip" ? 280 : 200);
  };

  const rerollAll = () => {
    for (let i = 0; i < count; i++) setTimeout(() => rerollOne(i), i * 90);
  };

  const toggleLock = (i) => {
    setLocked((l) => { const n = [...l]; n[i] = !n[i]; lockedRef.current = n; return n; });
  };

  const savePair = () => {
    const ents = entries.slice(0, count);
    if (ents.some((e) => !e)) return;
    const key = ents.map((e) => norm(e.display)).join("|");
    if (shortlist.some((p) => p.key === key)) return;
    setShortlist((s) => [{ id: Date.now(), key, count, entries: ents.map((e) => ({ ...e })) }, ...s]);
  };
  const alreadySaved = (() => {
    const ents = entries.slice(0, count);
    if (ents.some((e) => !e)) return false;
    const key = ents.map((e) => norm(e.display)).join("|");
    return shortlist.some((p) => p.key === key);
  })();

  const toggleCountry = (c) => {
    setSelected((sel) => sel.includes(c)
      ? (sel.length > 1 ? sel.filter((x) => x !== c) : sel)
      : [...sel, c]);
  };

  const allRevealed = revealed.slice(0, count).every(Boolean);
  const anyUniversalVisible = entries.slice(0, count).some(isUniv);

  /* ── Config screen ── */
  const renderConfig = () => (
    <div className="config">
      {/* Count */}
      <section className="panel">
        <div className="panel-icon">👶</div>
        <div className="seg big-seg">
          {[false, true].map((trip) => (
            <button key={String(trip)} className={"seg-btn count-btn" + (isTriplet === trip ? " on" : "")}
              onClick={() => setIsTriplet(trip)} title={trip ? "Triplets" : "Twins"}>
              <span className="count-babies">{trip ? "👶👶👶" : "👶👶"}</span>
              <span className="count-num">{trip ? "3" : "2"}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Gender per child */}
      <section className="panel">
        <div className="panel-icon">⚧</div>
        <div className="gender-stack">
          {Array.from({ length: count }).map((_, i) => (
            <div className="gender-row" key={i}>
              <span className="child-dot" style={{ background: `var(${CHILD_VARS[i]})` }}>{i + 1}</span>
              <div className="seg">
                {GENDERS.map((g) => (
                  <button key={g.id} className={"seg-btn gender-btn g-" + g.id + (genders[i] === g.id ? " on" : "")}
                    title={g.tip}
                    onClick={() => setGenders((gg) => { const n = [...gg]; n[i] = g.id; return n; })}>
                    {g.glyph}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Length */}
      <section className="panel">
        <div className="panel-icon">📏</div>
        <div className="len-grid">
          {[3, 4, 5, 6, 7, 8, 9, 10].map((l) => (
            <button key={l} className={"len-btn" + (nameLength === l ? " on" : "")}
              onClick={() => setNameLength(l)} title={l + " letters"}>{l}</button>
          ))}
        </div>
        <div className="len-preview" aria-hidden="true">
          {Array.from({ length: nameLength }).map((_, i) => <span key={i} className="len-prev-dot" />)}
        </div>
      </section>

      {/* Countries */}
      <section className="panel">
        <div className="panel-icon">🌍</div>
        <div className="flag-grid">
          {COUNTRY_KEYS.map((c) => (
            <button key={c} className={"flag-tile" + (selected.includes(c) ? " on" : "")}
              onClick={() => toggleCountry(c)} title={NAME_DB[c].name}>
              <span className="flag-big">{NAME_DB[c].flag}</span>
            </button>
          ))}
        </div>
        <div className={"venn-row" + (universalDisabled ? " disabled" : "")}>
          <VennToggle on={universalOnly && !universalDisabled} disabled={universalDisabled}
            onClick={() => !universalDisabled && setUniversalOnly((v) => !v)} />
          <span className="venn-label">{universalOnly && !universalDisabled
            ? "shared by all " + selected.length
            : "✦ shared names only"}</span>
        </div>
      </section>

      <button className="discover" onClick={generate}>
        <span className="disc-spark">✦</span>
        <span className="disc-babies">{isTriplet ? "👶👶👶" : "👶👶"}</span>
        <span className="disc-arrow">→</span>
      </button>
    </div>
  );

  /* ── Results screen ── */
  const renderResults = () => (
    <div className="results">
      <div className={"cards-row" + (count === 3 ? " triple" : "")}>
        {Array.from({ length: count }).map((_, i) => (
          <React.Fragment key={i}>
            {i > 0 && <Connector kind={t.connector} pulse={allRevealed && anyUniversalVisible} />}
            <NameCard idx={i} entry={entries[i]} revealed={revealed[i]} locked={locked[i]}
              reveal={t.reveal} selectedCount={selected.length} isUniversal={isUniv(entries[i])}
              onReroll={rerollOne} onLock={toggleLock} />
          </React.Fragment>
        ))}
      </div>

      <div className="action-bar">
        <button className="act dice" onClick={rerollAll} title="Reroll all">🎲</button>
        <button className={"act heart" + (alreadySaved ? " saved" : "")} onClick={savePair}
          title="Save this pair" disabled={entries.slice(0, count).some((e) => !e)}>
          {alreadySaved ? "♥" : "♡"}
        </button>
        <button className="act share" onClick={() => setShare({ entries, count, selectedCount: selected.length })}
          title="Show share card" disabled={entries.slice(0, count).some((e) => !e)}>⤴</button>
        <button className="act back" onClick={() => setStep("config")} title="Settings">⚙</button>
      </div>

      <Shortlist items={shortlist}
        onOpen={(p) => setShare({ entries: p.entries, count: p.count, selectedCount: selected.length })}
        onRemove={(id) => setShortlist((s) => s.filter((p) => p.id !== id))} />
    </div>
  );

  return (
    <div className="stage" data-theme={t.palette}>
      <div className="bg-blobs" />
      <div className="container">
        <header className="masthead">
          <span className="mast-spacer" />
          <div className="logo">
            <span className="logo-tags"><span className="tag t1" /><span className="tag t2" /></span>
            <span className="logo-word">twin<span>names</span></span>
          </div>
          <button className="info-btn" onClick={() => setInfoOpen(true)} title="How it works & sources">i</button>
        </header>
        {step === "config" ? renderConfig() : renderResults()}
        <Footer />
      </div>

      <ShareCard data={share} onClose={() => setShare(null)} />
      <InfoSheet open={infoOpen} onClose={() => setInfoOpen(false)} />

      <TweaksPanel>
        <TweakSection label="Look & feel" />
        <TweakRadio label="Palette" value={t.palette}
          options={["bright", "pastel", "warm"]}
          onChange={(v) => setTweak("palette", v)} />
        <TweakRadio label="Twin link" value={t.connector}
          options={["amp", "heart", "infinity", "line"]}
          onChange={(v) => setTweak("connector", v)} />
        <TweakRadio label="Reveal" value={t.reveal}
          options={["flip", "fly", "none"]}
          onChange={(v) => setTweak("reveal", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
