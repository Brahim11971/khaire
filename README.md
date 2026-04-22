# Khaire — One-Product Site

A mobile-first, high-performance, single-product storefront for **Khaire** that
routes every purchase to WhatsApp. No backend, no build step, no dependencies —
just open `index.html` and it works.

---

## 1. File structure

```
khaire/
├── index.html                 Main (and only) page
├── css/
│   ├── reset.css              Minimal modern reset
│   └── style.css              All brand styles
├── js/
│   ├── translations.js        FR + AR dictionaries
│   └── app.js                 Size selector, WhatsApp CTA, language toggle
├── assets/
│   ├── images/                Product + brand imagery (replace placeholders)
│   └── fonts/                 DROP YOUR CANELA FONT FILES HERE
└── README.md                  This file
```

---

## 2. First thing to do: drop in the real assets

### 2a. Fonts (Canela)

**Already wired up.** Canela Text is bundled in `assets/fonts/` as `.woff2`
(Light, Regular, Medium, Bold — 21 KB each). Nothing to do. If you want to
add more weights later, just drop them in and add matching `@font-face`
blocks in `css/style.css`.

### 2b. Logo & favicon

The logo (`assets/images/logo.png`) and favicon (`assets/images/favicon.png`,
`favicon-32.png`) are currently rendered from the Canela font and match the
KHAIRE wordmark style. **To swap in your own**, just overwrite the files —
same filenames, transparent PNG preferred:

| File | Where it appears | Recommended size |
|------|------------------|------------------|
| `logo.png` | Header + footer wordmark | 1000 × 240 px, transparent PNG |
| `favicon.png` | Browser tab (high-res) | 512 × 512 px |
| `favicon-32.png` | Browser tab (standard) | 64 × 64 px |

### 2c. Images

All placeholders live in `assets/images/`. Replace by matching the filename:

| File | Where it appears | Target ratio | Recommended size |
|------|------------------|--------------|------------------|
| `hero.jpg` | Hero (top) product shot | 4 : 5 (portrait) | 1200 × 1500 px |
| `gallery-1.jpg` … `gallery-4.jpg` | Detail gallery | 4 : 5 (portrait) | 1200 × 1500 px |
| `story.jpg` | Brand story section | 16 : 10 (landscape) | 1600 × 1000 px |
| `og-image.jpg` | Social share preview | 1.91 : 1 (landscape) | 1200 × 630 px |

Photos should be **exported as JPG, 80–85% quality**. Keep each file under
~300 KB for fast mobile loads.

---

## 3. Customization

### Change the WhatsApp number
Open `js/app.js`, line ~16:

```js
const WHATSAPP_NUMBER = "212666642255";
```

Use international format, **no `+`**, no spaces.

### Change prices, copy, or the WhatsApp message
Open `js/translations.js`. Every string on the page is keyed under `fr` and
`ar`. To change the price displayed in the hero, edit `price_amount` in
**both** languages.

The WhatsApp message template uses `{size}` as a placeholder — it is
replaced at click time with whatever size the customer selected.

### Change colors
Open `css/style.css`, look for `:root { --ivory … --espresso … }` near the top.
Change the two hexes; the whole site recolors.

### Add a third language
Duplicate the `ar` block in `js/translations.js`, rename the key (e.g. `en`),
translate the strings. Then either add a third state to the existing toggle
or add a second toggle — simplest: cycle through languages in
`app.js > initLangToggle()`.

---

## 4. Deployment

This is a pure-static site. Any of these work with zero configuration:

- **Netlify** → drag-and-drop the `khaire/` folder onto `app.netlify.com/drop`
- **Vercel** → `vercel deploy` inside the folder
- **Cloudflare Pages** → upload via dashboard
- **GitHub Pages** → push to a repo, enable Pages on `main`
- **Hostinger / any FTP host** → upload the whole folder to `public_html/`

For a custom domain (e.g. `khaire.ma`), point the DNS at your host per its
instructions.

### Performance checklist before launch
- [ ] Compress product JPGs to under 300 KB each ([squoosh.app](https://squoosh.app))
- [ ] Drop Canela `.woff2` files into `assets/fonts/`
- [ ] Run the page through [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify the WhatsApp CTA opens the right number with prefilled text (on a real phone)
- [ ] Verify both FR and AR render correctly (RTL should flip layout)

---

## 5. Analytics (optional)

If you want to track WhatsApp clicks, the easiest route is **Meta Pixel**.
Add the snippet to `<head>` in `index.html`, then drop this inside
`js/app.js > updateWhatsAppLinks()`:

```js
document.querySelectorAll("[data-cta]").forEach((a) => {
  a.href = url;
  a.addEventListener("click", () => {
    if (window.fbq) window.fbq("track", "Contact", { size: currentSize });
  }, { once: true });
});
```

Google Analytics 4 works the same way (`gtag('event', 'whatsapp_click', ...)`).

---

## 6. Design notes

- **Palette** — "Marrakech Atelier": Winter White `#FAF8F3` + Bone `#EFEAE1` + Deep Emerald `#2F3E2E` + Tobacco Gold `#A8825C` + Ink `#2A2826`. Emerald is the luxury anchor (logo, headings, CTAs), tobacco gold is reserved for tiny details (rosette ornament, stars, focus rings).
- **Type** — Canela (display) + Inter (UI) for French; Amiri + Cairo for Arabic
- **Layout** — Mobile-first. Breakpoints at 760 px and 1100 px.
- **Accessibility** — Semantic HTML, visible focus styles, `prefers-reduced-motion` respected, color contrast ≥ 4.5:1 on body text.

---

Built to be simple on purpose — one product, one clear action, zero friction.
