/**
 * Khaire — site logic.
 *
 * Handles:
 *   • Size selection (S/M vs L/XL) with proper radio-group keyboard nav
 *   • WhatsApp CTA link building — per-CTA intent (order / inquiry / question)
 *     with prefilled, size-aware message
 *   • Language toggle (FR ⇄ AR, including dir="rtl" and dictionary swap)
 *   • Sticky mobile CTA show/hide — hides whenever ANY inline CTA is on screen
 *     (not just the hero), so it never duplicates a visible action
 *   • Smooth fade-in on scroll (respects prefers-reduced-motion)
 *   • Analytics hook — per-CTA click tracking tagged with intent + placement.
 *     Wires to fbq / gtag if present; no-op otherwise. Uncomment the Meta
 *     Pixel or GA4 block in index.html <head> to activate.
 *
 * No dependencies. Vanilla JS.
 */

(function () {
  "use strict";

  // ---- Config -------------------------------------------------------------
  // CHANGE WHATSAPP NUMBER HERE if it ever updates. Use international
  // format without leading "+" or spaces (e.g. 212666642255).
  const WHATSAPP_NUMBER = "212666642255";
  const DEFAULT_SIZE = "S/M";
  // ------------------------------------------------------------------------

  // ========================================================================
  // VARIANTS — one entry per distinct piece in the drop.
  //
  // Each variant is just a single "front" photo. No names, no labels, no
  // taxonomy — these are what the customer sees as thumbnails below the
  // hero. Tapping a thumbnail swaps the hero image above. Tapping the
  // hero itself opens the full-screen lightbox scroller, which pages
  // through all VARIANTS at full size.
  //
  // To add a piece: copy a block, set a unique URL-safe id, point hero
  // to its .webp + .jpg pair (ideally 1200×1500, identical framing to the
  // other variants so the swap feels like "same photo, different garment"
  // rather than "different photo"). Mark exactly ONE variant as
  // flagship: true — that's the one that loads first.
  //
  // Placeholder seed cycles the 5 existing images across 12 slots so the
  // page is visible end-to-end. Replace paths as real shoots come in.
  // ------------------------------------------------------------------------
  const VARIANTS = [
    { id: "khv01", flagship: true, hero: { webp: "assets/images/hero.webp",      jpg: "assets/images/hero.jpg"      } },
    { id: "khv02", hero: { webp: "assets/images/gallery-1.webp", jpg: "assets/images/gallery-1.jpg" } },
    { id: "khv03", hero: { webp: "assets/images/gallery-2.webp", jpg: "assets/images/gallery-2.jpg" } },
    { id: "khv04", hero: { webp: "assets/images/gallery-3.webp", jpg: "assets/images/gallery-3.jpg" } },
    { id: "khv05", hero: { webp: "assets/images/gallery-4.webp", jpg: "assets/images/gallery-4.jpg" } },
    { id: "khv06", hero: { webp: "assets/images/hero.webp",      jpg: "assets/images/hero.jpg"      } },
    { id: "khv07", hero: { webp: "assets/images/gallery-1.webp", jpg: "assets/images/gallery-1.jpg" } },
    { id: "khv08", hero: { webp: "assets/images/gallery-2.webp", jpg: "assets/images/gallery-2.jpg" } },
    { id: "khv09", hero: { webp: "assets/images/gallery-3.webp", jpg: "assets/images/gallery-3.jpg" } },
    { id: "khv10", hero: { webp: "assets/images/gallery-4.webp", jpg: "assets/images/gallery-4.jpg" } },
    { id: "khv11", hero: { webp: "assets/images/hero.webp",      jpg: "assets/images/hero.jpg"      } },
    { id: "khv12", hero: { webp: "assets/images/gallery-1.webp", jpg: "assets/images/gallery-1.jpg" } },
    { id: "khv13", hero: { webp: "assets/images/gallery-2.webp", jpg: "assets/images/gallery-2.jpg" } },
    { id: "khv14", hero: { webp: "assets/images/gallery-3.webp", jpg: "assets/images/gallery-3.jpg" } },
    { id: "khv15", hero: { webp: "assets/images/gallery-4.webp", jpg: "assets/images/gallery-4.jpg" } },
    { id: "khv16", hero: { webp: "assets/images/hero.webp",      jpg: "assets/images/hero.jpg"      } },
    { id: "khv17", hero: { webp: "assets/images/gallery-1.webp", jpg: "assets/images/gallery-1.jpg" } },
    { id: "khv18", hero: { webp: "assets/images/gallery-2.webp", jpg: "assets/images/gallery-2.jpg" } },
    { id: "khv19", hero: { webp: "assets/images/gallery-3.webp", jpg: "assets/images/gallery-3.jpg" } },
    { id: "khv20", hero: { webp: "assets/images/gallery-4.webp", jpg: "assets/images/gallery-4.jpg" } },
  ];

  // ========================================================================
  // DETAILS — close-up shots of the flagship piece (front / back / model /
  // fabric). Shown as a 2×2 / 4-across grid under the trust strip. Tapping
  // any tile opens the lightbox scroller starting at that index.
  //
  // This set does NOT change when the customer selects a different
  // variant — it's a "see the craftsmanship" exhibit for the lead piece,
  // not per-variant documentation. Keep it to 3–6 photos.
  // ------------------------------------------------------------------------
  const DETAILS = [
    { kind: "front",  image: { webp: "assets/images/hero.webp",      jpg: "assets/images/hero.jpg"      } },
    { kind: "back",   image: { webp: "assets/images/gallery-2.webp", jpg: "assets/images/gallery-2.jpg" } },
    { kind: "model",  image: { webp: "assets/images/gallery-1.webp", jpg: "assets/images/gallery-1.jpg" } },
    { kind: "fabric", image: { webp: "assets/images/gallery-3.webp", jpg: "assets/images/gallery-3.jpg" } },
  ];
  // ------------------------------------------------------------------------

  const I18N = window.KHAIRE_I18N || {};
  const html = document.documentElement;
  const ASSET_BASE = html.getAttribute("data-asset-base") || "";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let currentLang = "fr";
  let currentSize = DEFAULT_SIZE;
  let currentVariantId =
    (VARIANTS.find((v) => v.flagship) || VARIANTS[0]).id;

  function withAssetBase(path) {
    if (!path || !ASSET_BASE) return path;
    if (/^(?:[a-z]+:|\/\/|#|data:)/i.test(path)) return path;
    return path.indexOf(ASSET_BASE) === 0 ? path : ASSET_BASE + path;
  }

  function normalizeImageAsset(image) {
    if (!image) return;
    image.webp = withAssetBase(image.webp);
    image.jpg = withAssetBase(image.jpg);
  }

  VARIANTS.forEach((variant) => normalizeImageAsset(variant.hero));
  DETAILS.forEach((detail) => normalizeImageAsset(detail.image));

  function getVariant(id) {
    return VARIANTS.find((v) => v.id === id) || VARIANTS[0];
  }
  function t(key) {
    const dict = I18N[currentLang] || {};
    return dict[key] != null ? dict[key] : key;
  }
  function label(obj) {
    if (!obj) return "";
    return obj[currentLang] || obj.fr || "";
  }

  // ========================================================================
  // Language
  // ========================================================================
  function applyLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;

    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    // Swap every [data-i18n] element (textContent)
    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    // Swap every [data-i18n-aria-label] (aria-label attribute)
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    // Toggle button shows the OTHER language
    const toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      const otherLang = lang === "fr" ? "ar" : "fr";
      toggle.setAttribute("data-lang-target", otherLang);
      const label = toggle.querySelector(".lang-toggle__label");
      if (label) label.textContent = otherLang === "ar" ? "العربية" : "Français";
    }

    // Rebuild all WhatsApp links with the (possibly new-language) templates
    updateWhatsAppLinks();

    // Re-render variant UI (hero thumbs + detail grid) so any i18n'd
    // aria-labels pick up the new language. Safe to call even before
    // initVariants has run — the querySelectors simply find nothing.
    renderHeroThumbs();
    renderDetailGrid();

  }

  function initLangToggle() {
    const toggle = document.querySelector(".lang-toggle");
    if (!toggle) return;

    // Crawlable language pages use normal links (/ and /ar/). Only fall back
    // to the old in-page switcher when a future toggle has no real href.
    const href = toggle.getAttribute("href");
    if (href && href !== "#") return;

    toggle.addEventListener("click", () => {
      const target = toggle.getAttribute("data-lang-target") || "ar";
      applyLang(target);
    });
  }

  function initLangFromPage() {
    const pageLang = (html.getAttribute("lang") || "fr").split("-")[0];
    applyLang(I18N[pageLang] ? pageLang : "fr");
  }

  // ========================================================================
  // Size selection — proper radio-group (tabindex + arrow keys)
  // ========================================================================
  function initSizeSelector() {
    const buttons = Array.from(document.querySelectorAll(".size-btn"));
    if (!buttons.length) return;

    function select(btn, options) {
      buttons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-checked", "false");
        b.setAttribute("tabindex", "-1");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-checked", "true");
      btn.setAttribute("tabindex", "0");

      currentSize = btn.getAttribute("data-size") || DEFAULT_SIZE;

      // Update sticky-CTA size readout
      const sizeLabel = document.querySelector("[data-current-size]");
      if (sizeLabel) sizeLabel.textContent = currentSize;

      updateWhatsAppLinks();

      if (options && options.focus) btn.focus();
    }

    buttons.forEach((btn, idx) => {
      btn.addEventListener("click", () => select(btn));

      btn.addEventListener("keydown", (e) => {
        let targetIdx = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          targetIdx = (idx + 1) % buttons.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          targetIdx = (idx - 1 + buttons.length) % buttons.length;
        } else if (e.key === "Home") {
          targetIdx = 0;
        } else if (e.key === "End") {
          targetIdx = buttons.length - 1;
        }
        if (targetIdx !== null) {
          e.preventDefault();
          select(buttons[targetIdx], { focus: true });
        }
      });
    });
  }

  // ========================================================================
  // WhatsApp CTA wiring — per-intent prefilled messages
  // ========================================================================
  function buildWhatsAppURL(intent) {
    const dict = I18N[currentLang] || {};

    let tmpl;
    if (intent === "inquiry") {
      tmpl = dict.whatsapp_message_inquiry;
    } else if (intent === "question") {
      tmpl = dict.whatsapp_message_question;
    } else {
      tmpl = dict.whatsapp_message;
    }

    tmpl = tmpl || "Salam, je souhaite réserver Le Jabador Khaire (Taille {size}).";
    const msg = tmpl.replace("{size}", currentSize);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  function updateWhatsAppLinks() {
    document.querySelectorAll("[data-cta]").forEach((a) => {
      const intent = a.getAttribute("data-cta-intent") || "order";
      a.href = buildWhatsAppURL(intent);
    });
  }

  // ========================================================================
  // Hero + thumbnail rail + detail gallery + lightbox scroller.
  //
  // Model:
  //   VARIANTS → rendered as thumbnails under the hero picture; tapping
  //   one cross-fades the hero to that variant's image. Tapping the
  //   HERO itself opens the lightbox pre-loaded with the full VARIANTS
  //   list, starting at the current variant.
  //
  //   DETAILS → rendered as a grid (front / back / model / fabric) under
  //   the trust strip. Tapping a tile opens the lightbox pre-loaded
  //   with DETAILS, starting at that index.
  //
  // The lightbox itself is source-agnostic — openLightbox(list, index)
  // accepts any flat [{ webp, jpg, alt }] array. Keyboard Esc/← →, touch
  // swipe, and backdrop click all work.
  // ========================================================================
  let lightboxList = [];            // images currently loaded in the lightbox
  let lightboxIndex = 0;            // current position within lightboxList
  let lightboxLastFocus = null;     // element to restore focus to on close

  // ---- Hero picture swap (cross-fade via opacity on .hero__picture) -----
  function swapHero(variant) {
    const btn = document.querySelector(".hero__picture");
    if (!btn) return;
    const src = btn.querySelector("[data-hero-source]") || btn.querySelector("picture source");
    const img = btn.querySelector("[data-hero-img]")    || btn.querySelector("picture img");
    if (!src || !img) return;

    btn.classList.add("is-swapping");
    const duration = reduceMotion ? 0 : 200;
    setTimeout(() => {
      src.setAttribute("srcset", variant.hero.webp);
      img.setAttribute("src", variant.hero.jpg);
      // Alt stays generic because variants don't carry labels anymore.
      img.setAttribute("alt", t("hero_alt") || "Le Jabador Khaire");
      void btn.offsetWidth;
      btn.classList.remove("is-swapping");
    }, duration);
  }

  // ---- Hero thumbnail rail ---------------------------------------------
  function renderHeroThumbs() {
    const rail = document.querySelector("[data-hero-thumbs]");
    if (!rail) return;
    rail.innerHTML = "";

    VARIANTS.forEach((v, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "hero__thumb" + (v.id === currentVariantId ? " is-active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", v.id === currentVariantId ? "true" : "false");
      btn.setAttribute("tabindex", v.id === currentVariantId ? "0" : "-1");
      btn.setAttribute("data-variant-id", v.id);
      btn.setAttribute("aria-label", (t("hero_thumb_label") || "Pièce") + " " + (idx + 1));

      const pic = document.createElement("picture");
      const src = document.createElement("source");
      src.setAttribute("srcset", v.hero.webp);
      src.setAttribute("type", "image/webp");
      const img = document.createElement("img");
      img.setAttribute("src", v.hero.jpg);
      img.setAttribute("alt", "");
      img.setAttribute("loading", "lazy");
      img.setAttribute("decoding", "async");
      img.setAttribute("width", "112");
      img.setAttribute("height", "140");
      pic.appendChild(src);
      pic.appendChild(img);
      btn.appendChild(pic);
      rail.appendChild(btn);
    });

    // Click + keyboard (arrow keys, Home/End) on the rail
    const thumbs = Array.from(rail.querySelectorAll(".hero__thumb"));
    thumbs.forEach((btn, idx) => {
      btn.addEventListener("click", () => selectVariant(btn.dataset.variantId));
      btn.addEventListener("keydown", (e) => {
        let targetIdx = null;
        const isRTL = html.dir === "rtl";
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          targetIdx = (idx + (isRTL && e.key === "ArrowRight" ? -1 : 1) + thumbs.length) % thumbs.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          targetIdx = (idx + (isRTL && e.key === "ArrowLeft" ?  1 : -1) + thumbs.length) % thumbs.length;
        } else if (e.key === "Home") {
          targetIdx = 0;
        } else if (e.key === "End") {
          targetIdx = thumbs.length - 1;
        }
        if (targetIdx !== null) {
          e.preventDefault();
          const next = thumbs[targetIdx];
          selectVariant(next.dataset.variantId);
          next.focus();
        }
      });
    });
  }

  function updateHeroThumbActiveState() {
    document.querySelectorAll("[data-hero-thumbs] .hero__thumb").forEach((btn) => {
      const on = btn.dataset.variantId === currentVariantId;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
      btn.setAttribute("tabindex", on ? "0" : "-1");
      if (on) {
        btn.scrollIntoView({ block: "nearest", inline: "center", behavior: reduceMotion ? "auto" : "smooth" });
      }
    });
  }

  // ---- Detail gallery (front / back / model / fabric) ------------------
  function renderDetailGrid() {
    const grid = document.querySelector("[data-detail-grid]");
    if (!grid) return;
    grid.innerHTML = "";

    DETAILS.forEach((detail, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "detail-gallery__item";
      btn.setAttribute("data-detail-index", String(idx));
      const aria = t("detail_" + detail.kind) || (t("detail_generic") || "Détail");
      btn.setAttribute("aria-label", aria);

      const pic = document.createElement("picture");
      const src = document.createElement("source");
      src.setAttribute("srcset", detail.image.webp);
      src.setAttribute("type", "image/webp");
      const img = document.createElement("img");
      img.setAttribute("src", detail.image.jpg);
      img.setAttribute("alt", aria);
      img.setAttribute("loading", "lazy");
      img.setAttribute("decoding", "async");
      img.setAttribute("width", "600");
      img.setAttribute("height", "750");
      pic.appendChild(src);
      pic.appendChild(img);
      btn.appendChild(pic);

      btn.addEventListener("click", () => {
        const list = DETAILS.map((d) => ({
          webp: d.image.webp,
          jpg:  d.image.jpg,
          alt:  t("detail_" + d.kind) || ""
        }));
        openLightbox(list, idx, btn);
      });
      grid.appendChild(btn);
    });
  }

  function selectAdjacentVariant(direction) {
    const idx = Math.max(0, VARIANTS.findIndex((v) => v.id === currentVariantId));
    const nextIdx = (idx + direction + VARIANTS.length) % VARIANTS.length;
    selectVariant(VARIANTS[nextIdx].id);
  }

  // ---- Hero picture → opens lightbox with VARIANTS ---------------------
  function initHeroPictureButton() {
    const btn = document.querySelector("[data-hero-open-lightbox]");
    if (!btn) return;

    let swipeStartX = 0;
    let swipeStartY = 0;
    let suppressNextClick = false;

    btn.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      swipeStartX = e.clientX;
      swipeStartY = e.clientY;
    });

    btn.addEventListener("pointerup", (e) => {
      if (!swipeStartX && !swipeStartY) return;
      const dx = e.clientX - swipeStartX;
      const dy = e.clientY - swipeStartY;
      swipeStartX = 0;
      swipeStartY = 0;

      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.2) return;

      const isRTL = html.dir === "rtl";
      const direction = dx < 0
        ? (isRTL ? -1 : 1)
        : (isRTL ? 1 : -1);
      suppressNextClick = true;
      selectAdjacentVariant(direction);
      window.setTimeout(() => { suppressNextClick = false; }, 250);
    });

    btn.addEventListener("pointercancel", () => {
      swipeStartX = 0;
      swipeStartY = 0;
    });

    btn.addEventListener("click", (e) => {
      if (suppressNextClick) {
        e.preventDefault();
        suppressNextClick = false;
        return;
      }
      const list = VARIANTS.map((v) => ({
        webp: v.hero.webp,
        jpg:  v.hero.jpg,
        alt:  t("hero_alt") || ""
      }));
      const idx = Math.max(0, VARIANTS.findIndex((v) => v.id === currentVariantId));
      openLightbox(list, idx, btn);
    });
  }

  // ---- Lightbox (shared scroller) --------------------------------------
  function openLightbox(list, index, trigger) {
    const dialog = document.getElementById("lightbox");
    if (!dialog || !list || !list.length) return;
    lightboxList  = list;
    lightboxIndex = Math.max(0, Math.min(index || 0, list.length - 1));
    lightboxLastFocus = trigger || document.activeElement;

    showLightboxImage();
    dialog.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => dialog.classList.add("is-open"));

    const closeBtn = dialog.querySelector("[data-lightbox-close]");
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    const dialog = document.getElementById("lightbox");
    if (!dialog) return;
    dialog.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    // Match CSS opacity transition (--dur ≈ 220ms) before hiding.
    const hideDelay = reduceMotion ? 0 : 220;
    setTimeout(() => { dialog.hidden = true; }, hideDelay);
    if (lightboxLastFocus && typeof lightboxLastFocus.focus === "function") {
      lightboxLastFocus.focus();
    }
  }

  function showLightboxImage() {
    const dialog = document.getElementById("lightbox");
    if (!dialog) return;
    const item = lightboxList[lightboxIndex];
    if (!item) return;
    const pic     = dialog.querySelector("[data-lightbox-img]");
    const source  = pic && pic.querySelector("source");
    const img     = pic && pic.querySelector("img");
    const counter = dialog.querySelector("[data-lightbox-counter]");

    // Brief cross-fade on swap
    dialog.classList.add("is-swapping");
    if (source) source.setAttribute("srcset", item.webp);
    if (img) {
      img.setAttribute("src", item.jpg);
      img.setAttribute("alt", item.alt || "");
    }
    if (counter) counter.textContent = (lightboxIndex + 1) + " / " + lightboxList.length;
    requestAnimationFrame(() => {
      setTimeout(() => dialog.classList.remove("is-swapping"), reduceMotion ? 0 : 80);
    });
  }

  function lightboxPrev() {
    if (!lightboxList.length) return;
    lightboxIndex = (lightboxIndex - 1 + lightboxList.length) % lightboxList.length;
    showLightboxImage();
  }
  function lightboxNext() {
    if (!lightboxList.length) return;
    lightboxIndex = (lightboxIndex + 1) % lightboxList.length;
    showLightboxImage();
  }

  function initLightbox() {
    const dialog = document.getElementById("lightbox");
    if (!dialog) return;
    const closeBtn = dialog.querySelector("[data-lightbox-close]");
    const prevBtn  = dialog.querySelector("[data-lightbox-prev]");
    const nextBtn  = dialog.querySelector("[data-lightbox-next]");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (prevBtn)  prevBtn .addEventListener("click", lightboxPrev);
    if (nextBtn)  nextBtn .addEventListener("click", lightboxNext);

    // Click on backdrop (not on image/buttons) closes
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog || e.target.classList.contains("lightbox__stage")) {
        closeLightbox();
      }
    });

    // Keyboard nav — Esc closes, arrows paginate (RTL-aware)
    document.addEventListener("keydown", (e) => {
      if (dialog.hidden) return;
      const isRTL = html.dir === "rtl";
      if (e.key === "Escape") { e.preventDefault(); closeLightbox(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); isRTL ? lightboxPrev() : lightboxNext(); }
      else if (e.key === "ArrowLeft")  { e.preventDefault(); isRTL ? lightboxNext() : lightboxPrev(); }
    });

    // Touch swipe — horizontal paginates, vertical ignored
    let touchStartX = 0, touchStartY = 0;
    dialog.addEventListener("touchstart", (e) => {
      if (!e.touches.length) return;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    dialog.addEventListener("touchend", (e) => {
      if (!e.changedTouches.length) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
      const isRTL = html.dir === "rtl";
      if (dx < 0) isRTL ? lightboxPrev() : lightboxNext();
      else        isRTL ? lightboxNext() : lightboxPrev();
    }, { passive: true });
  }

  // ---- Select variant + URL hash sync -----------------------------------
  function selectVariant(id, options) {
    options = options || {};
    const variant = getVariant(id);
    currentVariantId = variant.id;

    swapHero(variant);
    updateHeroThumbActiveState();
    updateWhatsAppLinks();

    // URL hash — shareable & back-button friendly
    if (!options.skipHash && "history" in window) {
      const newHash = "#variant=" + variant.id;
      if (location.hash !== newHash) {
        history.replaceState(null, "", location.pathname + location.search + newHash);
      }
    }
  }

  function initVariantsFromHash() {
    const m = /(?:^|[#&])variant=([A-Za-z0-9_-]+)/.exec(location.hash || "");
    if (m && VARIANTS.some((v) => v.id === m[1])) {
      selectVariant(m[1], { skipHash: true });
    } else {
      // Ensure hero alt text is set from i18n even without a hash
      selectVariant(currentVariantId, { skipHash: true });
    }
  }

  function initVariants() {
    renderHeroThumbs();
    renderDetailGrid();
    initHeroPictureButton();
    initLightbox();
    initVariantsFromHash();
  }

  // ========================================================================
  // Sticky CTA visibility
  // Hide whenever ANY inline CTA is visible, to avoid showing a duplicate
  // action to the user. The sticky bar is pure fallback.
  // ========================================================================
  function initStickyCTA() {
    const sticky = document.querySelector(".sticky-cta");
    if (!sticky || !("IntersectionObserver" in window)) return;

    const inlineCtas = document.querySelectorAll(
      ".hero .whatsapp-cta, " +
      ".cta-banner .whatsapp-cta, .closing-cta .whatsapp-cta"
    );
    if (!inlineCtas.length) return;

    const visibleCtas = new Set();

    function refresh() {
      if (visibleCtas.size > 0) {
        sticky.classList.add("is-hidden");
        sticky.setAttribute("aria-hidden", "true");
      } else {
        sticky.classList.remove("is-hidden");
        sticky.setAttribute("aria-hidden", "false");
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleCtas.add(entry.target);
          else visibleCtas.delete(entry.target);
        });
        refresh();
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );
    inlineCtas.forEach((cta) => io.observe(cta));
  }

  // ========================================================================
  // Fade-in on scroll — respects prefers-reduced-motion
  // ========================================================================
  function initScrollFades() {
    if (reduceMotion) return;
    if (!("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll(
      ".section-head, .story__text, .details__wrap, .faq__wrap, " +
      ".closing-cta, .benefit, .testimonial, " +
      ".trust-strip, .social-proof__wrap, .cta-banner__wrap, " +
      ".detail-gallery__item, .vertical-video__wrap, " +
      ".founder-seo__copy, .founder-seo__terms"
    );
    targets.forEach((el) => el.classList.add("fade-in"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );
    targets.forEach((el) => io.observe(el));
  }

  // ========================================================================
  // Floating WhatsApp action button — desktop-only round button that fades
  // in once the user scrolls past the hero. CSS handles the fade; JS just
  // toggles the [data-visible] flag.
  //
  // The tooltip auto-shows once per session (3s after the FAB appears) so
  // users notice the affordance without it being naggy on every page load.
  // ========================================================================
  function initWaFab() {
    const fab = document.querySelector(".wa-fab");
    if (!fab) return;
    const tip = document.querySelector(".wa-fab-tip");
    const REVEAL_AT = 480; // px scrolled before the FAB shows
    let tipShown = false;

    function syncFabVisibility() {
      const past = window.scrollY > REVEAL_AT;
      if (past) fab.setAttribute("data-visible", "");
      else fab.removeAttribute("data-visible");

      // Show the tip ~3s after first reveal, once per session.
      if (past && tip && !tipShown && !sessionStorage.getItem("khaire_wafab_tip")) {
        tipShown = true;
        try { sessionStorage.setItem("khaire_wafab_tip", "1"); } catch (_) {}
        setTimeout(() => {
          tip.setAttribute("data-visible", "");
          setTimeout(() => tip.removeAttribute("data-visible"), 4500);
        }, 2800);
      }
    }

    syncFabVisibility();
    window.addEventListener("scroll", syncFabVisibility, { passive: true });
  }

  // ========================================================================
  // Header scroll state — flips [data-scrolled] on .site-header once the
  // user scrolls past the hero edge. CSS uses this to deepen the backdrop
  // blur + tighten the header's vertical rhythm.
  // ========================================================================
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    function sync() {
      if (window.scrollY > 8) header.setAttribute("data-scrolled", "");
      else header.removeAttribute("data-scrolled");
    }
    sync();
    window.addEventListener("scroll", sync, { passive: true });
  }

  // ========================================================================
  // Analytics hook — fires per CTA click, tagged with intent + placement.
  // No-op until you uncomment the Meta Pixel / GA4 block in index.html.
  // ========================================================================
  function initCTATracking() {
    document.querySelectorAll("[data-cta]").forEach((a) => {
      a.addEventListener("click", () => {
        const intent = a.getAttribute("data-cta-intent") || "order";
        const placement = a.getAttribute("data-cta-placement") || "unknown";
        const payload = { intent, placement, size: currentSize, lang: currentLang };

        // Meta Pixel
        if (typeof window.fbq === "function") {
          try { window.fbq("track", "Contact", payload); } catch (_) {}
        }
        // Google Analytics 4
        if (typeof window.gtag === "function") {
          try { window.gtag("event", "whatsapp_click", payload); } catch (_) {}
        }
        // Also expose on dataLayer for GTM users
        if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push({ event: "whatsapp_click", ...payload });
        }
      });
    });
  }

  // ========================================================================
  // Boot
  // ========================================================================
  document.addEventListener("DOMContentLoaded", () => {
    initSizeSelector();
    initVariants();          // render swatches/grid/filters before lang apply
    initLangFromPage();      // sets lang + first updateWhatsAppLinks
    initLangToggle();
    initStickyCTA();
    initScrollFades();
    initWaFab();
    initHeaderScroll();
    initCTATracking();
  });
})();
