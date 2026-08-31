# EPRA Research — Conference Hub

A single mobile page that sits behind one QR code, holding the documents and
links for three conference sections. Built to be hosted free on GitHub Pages.

```
conference-hub/
├── index.html      the page (do not edit for content changes)
├── content.js      >>> THE ONLY FILE YOU EDIT <<< sections, documents, links
├── assets/         EPRA logos
├── docs/           put PDFs / decks / spreadsheets here
└── qr/             QR code + the script that regenerates it
```

---

## 1. Adding documents and links

Open `content.js`. Each of the three sections has an `items: [ ]` list.
Add an entry inside it:

**A file** — drop it into `docs/`, then:

```js
{
  title: "Investment portfolio insights 2012-2026",
  description: "Full deck, 8 slides.",
  href: "docs/portfolio-insights.pdf",
  type: "pdf",
  meta: "PDF · 2.4 MB"
},
```

**A web link:**

```js
{
  title: "EPRA TMT platform",
  description: "Live index and company data.",
  href: "https://www.epra.com/...",
  type: "link"
},
```

`type` can be: `pdf`, `pptx`, `xlsx`, `link`, `video`, `data` — it only picks
the icon. To reorder the three sections, move a whole `{ ... }` block up or
down in `content.js`. Sections with no items show a dashed "No documents added yet" box,
so nothing looks broken while you fill it in.

To preview, just double-click `index.html`.

---

## 2. Publishing on GitHub Pages

Once, in a terminal inside this folder:

```bash
git init -b main
git add .
git commit -m "EPRA conference hub"
```

Then connect it to the repo and push:

```bash
git remote add origin https://github.com/epragc/EPRAResearch.git
git push -u origin main
```

In the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**

After a minute the page is live at:

```
https://research.epra.com/
```

To update anything during the conference:

```bash
git add . && git commit -m "update" && git push
```

Live again in under a minute.

---

## 3. Regenerating the QR code

The QR already encodes the live address. Only re-run this if the URL changes:

```bash
pip install segno
python qr/make_qr.py https://research.epra.com/
```

That rewrites three files in `qr/`:

| File | Use |
|---|---|
| `epra-conference-qr.svg` | vector — use this in PowerPoint and for print |
| `epra-conference-qr.png` | 2000 px raster fallback |
| `epra-conference-qr-slide.svg` | EPRA-blue card + "Scan for the full documents" / "EPRA Research", slide-ready |

**Practical sizing for conference screens:** a QR needs roughly 1/10th of the
scanning distance in width to read reliably. From 10 m back, that is ~1 m of
screen — so put it large, in a corner that stays on screen across several
slides, and keep the white border around it.

---

## Notes

- Everything is static: no build step, no dependencies, no JavaScript
  frameworks. The page works offline from the file system too.
- Item titles and descriptions are inserted with `textContent`, so text from
  `content.js` is never interpreted as HTML.
- Colours follow the EPRA brand identity (primary blue `#12497F`, light blue
  `#69AAF3`). The typeface is **Overpass Light**, loaded from Google Fonts for
  the web page. The QR captions use it too, but an SVG cannot pull a web font:
  install Overpass locally (free, fonts.google.com/specimen/Overpass) or
  PowerPoint will substitute Arial in the caption.
- The three boxes share one format. They differ only in the colour of their
  left border, set by `accent` in `content.js`: `"blue"` (#69AAF3),
  `"grey"` (#C6C5C2) and `"gold"` (#EBA61C). Swap the values to reshuffle.
- **The page is built to fit one screen with no scrolling**, verified from
  360x640 up to a 1366-wide laptop. That budget assumes short descriptions and
  roughly one or two items per box. Add more than that and it will scroll on a
  small phone, which is fine but no longer "one screen" - keep descriptions to
  one or two lines if the single-screen look matters to you.
