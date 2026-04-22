const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const base = "https://khaire.ma";

global.window = {};
require(path.join(root, "js", "translations.js"));

const ar = global.window.KHAIRE_I18N.ar;
const outDir = path.join(root, "ar");
const outFile = path.join(outDir, "index.html");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceI18n(html, dict) {
  for (const [key, value] of Object.entries(dict)) {
    if (typeof value !== "string") continue;
    const keyPattern = escapeRegExp(key);
    const pattern = new RegExp(
      `(<([a-z0-9]+)\\b[^>]*data-i18n="${keyPattern}"[^>]*>)([\\s\\S]*?)(<\\/\\2>)`,
      "gi"
    );
    html = html.replace(pattern, (_, open, tag, inner, close) => {
      return open + escapeHtml(value) + close;
    });
  }
  return html;
}

function offer(url) {
  return {
    "@type": "Offer",
    priceCurrency: "MAD",
    price: "1199",
    availability: "https://schema.org/LimitedAvailability",
    itemCondition: "https://schema.org/NewCondition",
    url,
    paymentAccepted: ["Bank transfer", "Wafacash", "CashPlus", "Cash on delivery"],
  };
}

function arJsonLd() {
  const images = [
    `${base}/assets/images/hero.jpg`,
    `${base}/assets/images/gallery-1.jpg`,
    `${base}/assets/images/gallery-2.jpg`,
    `${base}/assets/images/gallery-3.jpg`,
    `${base}/assets/images/gallery-4.jpg`,
  ];
  const variants = [];
  for (let i = 1; i <= 20; i += 1) {
    const color = `لون ${String(i).padStart(2, "0")}`;
    const image = images[(i - 1) % images.length];
    for (const t of [1, 2]) {
      const sku = `KHV${String(i).padStart(2, "0")}T${t}`;
      variants.push({
        "@type": "Product",
        "@id": `${base}/#product-${sku.toLowerCase()}`,
        name: `جبادور خيّر - ${color} - مقاس ${t}`,
        sku,
        image,
        description: `نسخة ${color} من جبادور خيّر المطرز يدوياً.`,
        color,
        size: t === 1 ? "مقاس 1 (S/M)" : "مقاس 2 (L/XL)",
        category: "جبادور مغربي",
        material: ["قماش عالي الجودة", "تطريز يدوي", "أزرار مظفرة"],
        isVariantOf: { "@id": `${base}/#product-group` },
        offers: offer(`${base}/#variant=khv${String(i).padStart(2, "0")}`),
      });
    }
  }

  const faqs = [
    [ar.faq_1_q, ar.faq_1_a],
    [ar.faq_2_q, ar.faq_2_a],
    [ar.faq_3_q, ar.faq_3_a],
    [ar.faq_4_q, ar.faq_4_a],
    [ar.faq_5_q, ar.faq_5_a],
    [ar.faq_6_q, ar.faq_6_a],
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "Khaire",
        alternateName: "خيّر",
        url: `${base}/`,
        logo: `${base}/assets/images/logo.png`,
        sameAs: [
          "https://www.instagram.com/khairedesigns/",
          "https://www.tiktok.com/@khairedesigns",
        ],
        founder: { "@id": `${base}/#chaimae-belkhir` },
      },
      {
        "@type": "Person",
        "@id": `${base}/#chaimae-belkhir`,
        name: "Chaimae Belkhir",
        alternateName: "شيماء بلخير",
        jobTitle: "المؤسسة والمديرة الإبداعية",
        worksFor: { "@id": `${base}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${base}/ar/#webpage`,
        url: `${base}/ar/`,
        name: "خيّر | جبادور مغربي",
        description: "جبادور مغربي مطرز يدوياً من خيّر. إصدار محدود وطلب عبر الواتساب.",
        inLanguage: "ar-MA",
        isPartOf: { "@id": `${base}/#website` },
        about: [{ "@id": `${base}/#product-group` }],
      },
      {
        "@type": "ProductGroup",
        "@id": `${base}/#product-group`,
        name: "جبادور خيّر",
        productGroupID: "KHV-JABADOR",
        brand: { "@id": `${base}/#organization` },
        url: `${base}/ar/`,
        image: images,
        description: "جبادور مغربي تقليدي مطرز يدوياً من خيّر. إصدار محدود وتوصيل داخل المغرب.",
        category: "جبادور مغربي",
        variesBy: ["https://schema.org/color", "https://schema.org/size"],
        hasVariant: variants,
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/ar/#faq`,
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };
}

let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
html = replaceI18n(html, ar);
html = html.replace('<html lang="fr" dir="ltr">', '<html lang="ar" dir="rtl" data-asset-base="../">');
html = html.replace('href="./ar/"', 'href="../"');
html = html.replace('data-lang-target="ar"', 'data-lang-target="fr"');
html = html.replace('<span class="lang-toggle__label">العربية</span>', '<span class="lang-toggle__label">Français</span>');
html = html.replace(
  /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
  '<meta name="description" content="جبادور خيّر: جبادور مغربي مطرز يدوياً، إصدار محدود، توصيل داخل المغرب وطلب عبر الواتساب." />'
);
html = html.replace('<link rel="canonical" href="https://khaire.ma/" />', '<link rel="canonical" href="https://khaire.ma/ar/" />');
html = html.replace('<meta property="og:locale" content="fr_MA" />', '<meta property="og:locale" content="ar_MA" />');
html = html.replace('<meta property="og:title" content="Khaire | Jabador Marocain" />', '<meta property="og:title" content="خيّر | جبادور مغربي" />');
html = html.replace(
  /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
  '<meta property="og:description" content="جبادور مغربي مطرز يدوياً من خيّر. إصدار محدود وطلب عبر الواتساب." />'
);
html = html.replace('<meta property="og:url" content="https://khaire.ma/" />', '<meta property="og:url" content="https://khaire.ma/ar/" />');
html = html.replace('<meta name="twitter:title" content="Khaire | Jabador Marocain" />', '<meta name="twitter:title" content="خيّر | جبادور مغربي" />');
html = html.replace(
  /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
  '<meta name="twitter:description" content="جبادور مغربي مطرز يدوياً من خيّر. طلب عبر الواتساب." />'
);
html = html.replace("<title>Khaire | Jabador Marocain</title>", "<title>خيّر | جبادور مغربي</title>");
html = html.replace('aria-label="Vidéo produit"', 'aria-label="فيديو المنتج"');
html = html.replace('aria-label="Vidéo verticale du Jabador Khaire"', 'aria-label="فيديو عمودي لجبادور خيّر"');
html = html.replace('aria-label="Ce que montre la vidéo"', 'aria-label="ما يعرضه الفيديو"');
html = html
  .replace(/(href|src|srcset|imagesrcset|poster)="assets\//g, '$1="../assets/')
  .replace(/href="css\//g, 'href="../css/')
  .replace(/src="js\//g, 'src="../js/');
html = html.replace(
  /\s*<!-- Structured data: organization, founder, product variants, FAQ -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  '\n  <!-- Structured data: organization, founder, product variants, FAQ -->\n  <script type="application/ld+json">\n' +
    JSON.stringify(arJsonLd(), null, 2).replace(/\n/g, "\n  ") +
    "\n  </script>"
);

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, html, "utf8");
console.log("Wrote ar/index.html");
