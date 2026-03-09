# Vi Consulting Finance — Guida rapida

## Struttura del progetto
```
vi-finance/
├── index.html          ← Sito principale (homepage + blog SPA)
├── netlify.toml        ← Configurazione Netlify
├── admin/
│   ├── index.html      ← Pannello CMS (accesso su /admin)
│   └── config.yml      ← Configurazione campi articoli
├── blog/
│   └── _posts/         ← I tuoi articoli in Markdown (.md)
├── css/
│   └── blog.css        ← Stili pagina articolo e lista blog
├── js/
│   └── blog-engine.js  ← Motore che legge e mostra gli articoli
└── images/
    └── uploads/        ← Immagini caricate dal CMS
```

## Come pubblicare un articolo
1. Vai su **tuosito.com/admin**
2. Login con le tue credenziali Netlify
3. Clicca "Nuovo Articolo"
4. Compila: Titolo, Data, Categoria, Accesso (FREE o PRO), Estratto, Contenuto
5. Clicca **Pubblica** → appare sul sito in ~30 secondi

## Setup su Netlify (una tantum)
1. Crea account su netlify.com
2. Trascina questa cartella su Netlify (drag & drop)
3. Vai su **Site settings → Identity → Enable Identity**
4. Vai su **Identity → Services → Enable Git Gateway**
5. Invita te stesso via email come utente
6. Collega il tuo dominio da **Domain settings**

