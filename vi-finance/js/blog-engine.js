// ============================================================
// Vi Consulting Finance — Blog Engine v2
// Articoli embedded direttamente — funziona su Netlify static
// Quando pubblichi dal CMS, aggiungi il post a POSTS_DATA
// ============================================================

// ── DATI ARTICOLI ──────────────────────────────────────────
// Ogni nuovo articolo scritto dal CMS va aggiunto qui sotto
const POSTS_DATA = [
  {
    slug: 'come-funziona-linflazione',
    title: "Come funziona davvero l'inflazione — e perché i tuoi risparmi perdono valore ogni anno",
    date: '2026-02-18',
    category: 'educazione',
    access: 'free',
    cover_url: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80&auto=format&fit=crop',
    excerpt: "L'inflazione non è solo un numero sul giornale. È il motivo per cui i soldi fermi sul conto corrente valgono meno ogni anno. Capire come funziona è il primo passo per proteggersi.",
    read_time: 8,
    featured: true,
    content: `
## Cos'è l'inflazione, davvero?

L'inflazione è l'aumento generalizzato dei prezzi nel tempo. Sembra semplice, ma le sue conseguenze sono profonde e spesso sottovalutate.

Immagina di avere **10.000€ sul conto corrente** oggi. Se l'inflazione è al 3% annuo, tra un anno quei 10.000€ avranno il potere d'acquisto di 9.700€ di oggi. Non hai perso soldi "sul paper", ma hai perso capacità di spesa reale.

## Come si misura

In Italia l'inflazione si misura principalmente attraverso due indici:

- **IPCA** (Indice dei Prezzi al Consumo Armonizzato) — usato per confronti europei
- **FOI** (Famiglie di Operai e Impiegati) — usato per aggiornare affitti e contratti

L'ISTAT pubblica i dati ogni mese. Puoi seguirli gratuitamente sul sito ufficiale.

## Perché il conto corrente non è "sicuro"

Molti pensano che tenere i soldi in banca sia la scelta più sicura. In senso assoluto, lo è: non perdi nominalmente. Ma in senso reale, perdi potere d'acquisto ogni anno.

Con un'inflazione media del 2-3% (l'obiettivo della BCE) e un conto che rende lo 0,01%, stai perdendo circa 2-3% l'anno in termini reali.

## Come proteggersi

Non esiste una soluzione universale, ma ci sono strumenti che storicamente hanno aiutato a preservare il potere d'acquisto:

1. **Azioni** — Le aziende tendono ad aumentare i prezzi con l'inflazione, trasferendo il costo ai consumatori
2. **BTP indicizzati all'inflazione** — Rendimento agganciato all'IPCA
3. **Oro** — Tradizionalmente considerato riserva di valore
4. **Immobili** — I canoni di affitto si aggiornano spesso con l'inflazione

## La conclusione pratica

L'inflazione non è un'astrazione economica. È una tassa silenziosa sui tuoi risparmi. Capirla è il primo passo per difendersi — e per iniziare a far lavorare il denaro invece di lasciarlo fermo.

---

*Ricorda: questo articolo è a scopo educativo. Prima di investire valuta sempre la tua situazione personale.*
    `
  },
  {
    slug: 'etf-guida-completa',
    title: "ETF: la guida completa per chi inizia a investire",
    date: '2026-02-05',
    category: 'investimenti',
    access: 'free',
    cover_url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80&auto=format&fit=crop',
    excerpt: "Cosa sono gli ETF, come funzionano e perché sono diventati lo strumento preferito dai piccoli investitori. Tutto quello che devi sapere prima di iniziare.",
    read_time: 12,
    featured: false,
    content: `
## Cosa sono gli ETF

ETF sta per **Exchange Traded Fund** — un fondo che viene comprato e venduto in borsa come se fosse un'azione normale.

La cosa straordinaria degli ETF è che con un solo acquisto puoi investire in centinaia o migliaia di aziende contemporaneamente.

## Come funzionano nella pratica

Immagina di voler investire nelle 500 più grandi aziende americane (S&P 500). Comprarle tutte singolarmente richiederebbe centinaia di migliaia di euro e un lavoro enorme di gestione.

Un ETF che replica l'S&P 500 ti permette di farlo con anche soli 100€ in un click. Il fondo compra le azioni per te, in proporzione al loro peso nell'indice.

## Vantaggi principali

- **Diversificazione immediata** — Un solo ETF = centinaia di aziende
- **Costi bassi** — Le commissioni annue (TER) spesso sono sotto lo 0,20%
- **Trasparenza** — Sai sempre cosa c'è dentro
- **Liquidità** — Puoi vendere in qualsiasi momento durante gli orari di borsa

## Quali ETF esistono

Esistono ETF su praticamente tutto:

- **Azionari** — Replicano indici come S&P 500, MSCI World, Euro Stoxx 50
- **Obbligazionari** — Investono in titoli di stato o obbligazioni corporate
- **Tematici** — Energie rinnovabili, tecnologia, healthcare
- **Commodities** — Oro, petrolio, materie prime

## Come scegliere il primo ETF

Per chi inizia, la regola d'oro è la semplicità:

1. Scegli un ETF su un indice ampio (es. MSCI World — 1.500+ aziende di 23 paesi)
2. Verifica che sia **UCITS** (regolamentato in Europa)
3. Controlla il **TER** — più basso è meglio
4. Verifica se è **accumulazione** (reinveste i dividendi) o **distribuzione** (li paga)

## Il piano di accumulo (PAC)

Una delle strategie più efficaci per chi inizia è il **Piano di Accumulo del Capitale**: investire una cifra fissa ogni mese, indipendentemente da dove si trova il mercato.

Questo approccio, detto *dollar cost averaging*, riduce il rischio di comprare tutto al momento sbagliato e sfrutta la volatilità a proprio vantaggio nel lungo periodo.

---

*Ricorda: questo articolo è a scopo educativo. Prima di investire valuta sempre la tua situazione personale.*
    `
  }
];

// ── UTILITY ────────────────────────────────────────────────

function markdownToHtml(md) {
  if (!md) return '';
  let html = md.trim()
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^---$/gm, '<hr>')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .split(/\n\n+/)
    .map(block => {
      if (/^<(h[1-3]|ul|blockquote|hr|li)/.test(block.trim())) return block;
      return `<p>${block.trim()}</p>`;
    })
    .join('\n');
  return html;
}

const CATEGORY_MAP = {
  educazione:   { label: 'Educazione Finanziaria', color: 'gold'  },
  analisi:      { label: 'Analisi Mercati',        color: 'gold'  },
  investimenti: { label: 'Investimenti',           color: 'sky'   },
  corsi:        { label: 'Corsi',                  color: 'green' },
  macro:        { label: 'Macro & Economia',       color: 'sky'   },
};

function getCategoryInfo(cat) {
  return CATEGORY_MAP[cat] || { label: cat, color: 'gold' };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
}

// ── CARICA POSTS ───────────────────────────────────────────
// Prepara i post con HTML già renderizzato, ordinati per data
function loadAllPosts() {
  return Promise.resolve(
    POSTS_DATA
      .map(p => ({ ...p, htmlContent: markdownToHtml(p.content) }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  );
}

// ── RENDER CARD ────────────────────────────────────────────
function renderBlogCard(post, size = 'normal') {
  const cat = getCategoryInfo(post.category);
  const imgSrc = post.cover_image || post.cover_url || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop';
  const accessBadge = post.access === 'pro'
    ? `<span class="blog-pro-badge">🔒 PRO</span>`
    : `<span class="blog-tag">FREE</span>`;

  return `
    <a href="/blog/${post.slug}" class="blog-card${size === 'main' ? ' main' : ''}" data-slug="${post.slug}">
      <div class="blog-img">
        <img src="${imgSrc}" alt="${post.title}" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\\'blog-img-placeholder\\'>📊</div>'">
      </div>
      <div class="blog-body">
        <span class="blog-category ${cat.color}">${cat.label}</span>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt || ''}</p>
        <div class="blog-meta">
          <span>${formatDate(post.date)}</span>
          <span>·</span>
          <span>${post.read_time || 5} min lettura</span>
          ${accessBadge}
        </div>
      </div>
    </a>`;
}

// ── HOMEPAGE BLOG ──────────────────────────────────────────
async function initHomepageBlog() {
  const grid = document.getElementById('blog-grid-home');
  if (!grid) return;

  const posts = await loadAllPosts();
  if (!posts.length) {
    grid.innerHTML = '<div style="color:rgba(224,232,248,0.3);text-align:center;padding:40px;grid-column:1/-1;">Nessun articolo ancora. Presto disponibili!</div>';
    return;
  }

  const featured = posts.find(p => p.featured) || posts[0];
  const others = posts.filter(p => p.slug !== featured.slug).slice(0, 2);

  grid.innerHTML = `
    ${renderBlogCard(featured, 'main')}
    <div style="display:flex;flex-direction:column;gap:20px;">
      ${others.map(p => renderBlogCard(p, 'small')).join('')}
    </div>`;

  grid.querySelectorAll('[data-slug]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); navigateToPost(el.dataset.slug); });
  });
}

// ── RENDER ARTICOLO SINGOLO ────────────────────────────────
function renderArticlePage(post) {
  const cat = getCategoryInfo(post.category);
  const imgSrc = post.cover_image || post.cover_url || '';
  const isProLocked = post.access === 'pro';

  const proGate = `
    <div class="pro-gate">
      <div class="pro-gate-icon">🔒</div>
      <h3>Contenuto riservato agli iscritti Pro</h3>
      <p>Questo articolo è disponibile esclusivamente per gli iscritti alla newsletter Premium di Vi Consulting Finance.</p>
      <a href="/#premium" class="btn-gold" style="margin-top:24px;display:inline-flex;">Scopri la Newsletter Pro →</a>
      <p style="margin-top:16px;font-size:0.78rem;color:rgba(224,232,248,0.35);">Già iscritto? Controlla l'email — trovi il link di accesso diretto nell'ultima newsletter.</p>
    </div>`;

  return `
    <div class="article-page" id="article-page">
      <div class="article-back">
        <a href="/blog" class="back-link" id="back-to-blog">← Torna al Blog</a>
      </div>
      ${imgSrc ? `
      <div class="article-cover">
        <img src="${imgSrc}" alt="${post.title}">
        <div class="article-cover-overlay"></div>
      </div>` : ''}
      <div class="article-container">
        <div class="article-header">
          <span class="blog-category ${cat.color}" style="font-size:0.65rem;letter-spacing:0.28em;">${cat.label}</span>
          ${post.access === 'pro' ? '<span class="blog-pro-badge" style="margin-left:10px;">🔒 PRO</span>' : '<span class="blog-tag" style="margin-left:10px;">FREE</span>'}
          <h1 class="article-title">${post.title}</h1>
          <div class="article-meta">
            <span>${formatDate(post.date)}</span>
            <span class="meta-dot">·</span>
            <span>${post.read_time || 5} min di lettura</span>
            <span class="meta-dot">·</span>
            <span>${cat.label}</span>
          </div>
          ${post.excerpt ? `<p class="article-excerpt">${post.excerpt}</p>` : ''}
        </div>
        <div class="article-divider"></div>
        <div class="article-body">
          ${isProLocked ? proGate : post.htmlContent}
        </div>
        <div class="article-footer">
          <div class="article-share">
            <span>Condividi:</span>
            <a href="https://wa.me/?text=${encodeURIComponent(post.title + ' — ' + window.location.href)}" target="_blank" rel="noopener" class="share-btn wa">WhatsApp</a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}" target="_blank" rel="noopener" class="share-btn li">LinkedIn</a>
          </div>
          <a href="/blog" class="back-link" id="back-to-blog-2">← Tutti gli articoli</a>
        </div>
      </div>
    </div>`;
}

// ── PAGINA LISTA BLOG ──────────────────────────────────────
async function renderBlogListPage(container) {
  container.innerHTML = `
    <div class="blog-list-page">
      <div class="blog-list-header">
        <span class="sec-eyebrow" style="display:block;text-align:center;margin-bottom:14px;">Risorse gratuite</span>
        <h1 class="sec-title" style="text-align:center;">Il Blog di Vi Consulting Finance</h1>
        <p style="text-align:center;color:var(--muted);font-size:0.9rem;max-width:500px;margin:14px auto 0;line-height:1.8;">Articoli gratuiti su educazione finanziaria, investimenti e mercati. I contenuti PRO sono riservati agli iscritti Premium.</p>
      </div>
      <div class="blog-filters" id="blog-filters">
        <button class="filter-btn active" data-filter="all">Tutti</button>
        <button class="filter-btn" data-filter="educazione">Educazione</button>
        <button class="filter-btn" data-filter="investimenti">Investimenti</button>
        <button class="filter-btn" data-filter="analisi">Analisi Mercati</button>
        <button class="filter-btn" data-filter="macro">Macro</button>
        <button class="filter-btn" data-filter="corsi">Corsi</button>
      </div>
      <div class="blog-list-grid" id="blog-list-grid"></div>
    </div>`;

  const posts = await loadAllPosts();
  const grid = document.getElementById('blog-list-grid');

  function renderGrid(filter = 'all') {
    const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter);
    if (!filtered.length) {
      grid.innerHTML = '<div style="color:rgba(224,232,248,0.3);text-align:center;padding:60px;grid-column:1/-1;">Nessun articolo in questa categoria.</div>';
      return;
    }
    grid.innerHTML = filtered.map(p => renderBlogCard(p)).join('');
    grid.querySelectorAll('[data-slug]').forEach(el => {
      el.addEventListener('click', e => { e.preventDefault(); navigateToPost(el.dataset.slug); });
    });
  }

  renderGrid();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.filter);
    });
  });
}

// ── SPA ROUTER ─────────────────────────────────────────────
async function navigateToPost(slug) {
  window.history.pushState({ slug }, '', `/blog/${slug}`);
  await showPostPage(slug);
}

async function showPostPage(slug) {
  const app = document.getElementById('app-content');
  if (!app) return;
  app.innerHTML = '<div style="min-height:60vh;display:flex;align-items:center;justify-content:center;color:rgba(224,232,248,0.3);">Caricamento...</div>';

  const posts = await loadAllPosts();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    app.innerHTML = '<div style="min-height:60vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;padding-top:80px;"><p style="color:rgba(224,232,248,0.4);">Articolo non trovato.</p><a href="/blog" class="btn-gold">← Torna al Blog</a></div>';
    return;
  }

  app.innerHTML = renderArticlePage(post);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  ['back-to-blog', 'back-to-blog-2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', e => { e.preventDefault(); window.history.pushState({}, '', '/blog'); initBlogPage(); });
  });
}

async function initBlogPage() {
  const app = document.getElementById('app-content');
  if (!app) return;
  await renderBlogListPage(app);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('popstate', async () => {
  const path = window.location.pathname;
  const app = document.getElementById('app-content');
  if (!app) return;
  if (path.startsWith('/blog/') && path.length > 6) {
    await showPostPage(path.replace('/blog/', ''));
  } else if (path === '/blog') {
    await initBlogPage();
  }
});

window.ViFin = { initHomepageBlog, initBlogPage, showPostPage, navigateToPost, loadAllPosts, renderBlogCard, formatDate, getCategoryInfo };
