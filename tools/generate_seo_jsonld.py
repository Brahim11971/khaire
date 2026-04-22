from pathlib import Path
import json
import re


BASE = "https://khaire.ma"
ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"


def offer(url):
    return {
        "@type": "Offer",
        "priceCurrency": "MAD",
        "price": "1199",
        "availability": "https://schema.org/LimitedAvailability",
        "itemCondition": "https://schema.org/NewCondition",
        "url": url,
        "paymentAccepted": [
            "Bank transfer",
            "Wafacash",
            "CashPlus",
            "Cash on delivery",
        ],
        "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingDestination": {
                "@type": "DefinedRegion",
                "addressCountry": "MA",
            },
            "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 0,
                    "maxValue": 1,
                    "unitCode": "DAY",
                },
                "transitTime": {
                    "@type": "QuantitativeValue",
                    "minValue": 1,
                    "maxValue": 2,
                    "unitCode": "DAY",
                },
            },
        },
    }


def product_variants(images):
    variants = []
    for i in range(1, 21):
        color = f"Coloris {i:02d}"
        image = images[(i - 1) % len(images)]
        for t in (1, 2):
            sku = f"KHV{i:02d}T{t}"
            size = "Taille 1 (S/M)" if t == 1 else "Taille 2 (L/XL)"
            variants.append(
                {
                    "@type": "Product",
                    "@id": f"{BASE}/#product-{sku.lower()}",
                    "name": f"Le Jabador Khaire - {color} - Taille {t}",
                    "sku": sku,
                    "image": image,
                    "description": f"Variante {color.lower()} du Jabador Khaire, brodé main. {size}.",
                    "color": color,
                    "size": size,
                    "category": "Jabador marocain",
                    "material": [
                        "Tissu haut de gamme",
                        "Broderie artisanale",
                        "Boutons tressés",
                    ],
                    "isVariantOf": {"@id": f"{BASE}/#product-group"},
                    "offers": offer(f"{BASE}/#variant=khv{i:02d}"),
                }
            )
    return variants


def graph():
    images = [
        f"{BASE}/assets/images/hero.jpg",
        f"{BASE}/assets/images/gallery-1.jpg",
        f"{BASE}/assets/images/gallery-2.jpg",
        f"{BASE}/assets/images/gallery-3.jpg",
        f"{BASE}/assets/images/gallery-4.jpg",
    ]
    faqs = [
        (
            "Est-il disponible en stock actuellement ?",
            "Nos pièces sont fabriquées en très petites quantités et partent vite. Pour confirmer la disponibilité de votre taille et coloris, écrivez-nous sur WhatsApp ; nous répondons en 5 minutes ou moins.",
        ),
        (
            "Combien de temps pour la livraison ?",
            "24 à 48 heures partout au Maroc. Nous expédions le jour même quand la commande est confirmée avant 16 h.",
        ),
        (
            "Comment se passe le paiement ?",
            "Un acompte de 50% est demandé à la commande pour réserver votre pièce. Le solde est réglé à la livraison. Les modalités de paiement de l'acompte sont partagées sur WhatsApp : virement, Wafacash ou CashPlus.",
        ),
        (
            "Puis-je échanger la pièce si elle ne convient pas ?",
            "Oui. Échange possible dans les 24 heures suivant la réception, à condition que la pièce n'ait pas été portée et qu'elle soit retournée dans son emballage d'origine.",
        ),
        (
            "En combien de temps répondez-vous sur WhatsApp ?",
            "5 minutes ou moins, aux heures d'ouverture de notre atelier.",
        ),
        (
            "Comment je commande via WhatsApp ?",
            "Cliquez sur un bouton WhatsApp et envoyez le message pré-rempli. Notre styliste confirme la disponibilité, vous aide à choisir la taille et le coloris, organise l'acompte et la livraison.",
        ),
    ]
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": f"{BASE}/#organization",
                "name": "Khaire",
                "url": f"{BASE}/",
                "logo": f"{BASE}/assets/images/logo.png",
                "image": f"{BASE}/assets/images/og-image.jpg",
                "sameAs": [
                    "https://www.instagram.com/khairedesigns/",
                    "https://www.tiktok.com/@khairedesigns",
                ],
                "founder": {"@id": f"{BASE}/#chaimae-belkhir"},
                "knowsAbout": [
                    "Jabador marocain",
                    "Caftan marocain",
                    "Kaftan marocain",
                    "Takchita",
                    "Tenue d'Aïd",
                    "Vêtement traditionnel marocain",
                    "Broderie artisanale marocaine",
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "telephone": "+212666642255",
                    "areaServed": "MA",
                    "availableLanguage": ["French", "Arabic"],
                },
            },
            {
                "@type": "Person",
                "@id": f"{BASE}/#chaimae-belkhir",
                "name": "Chaimae Belkhir",
                "jobTitle": "Fondatrice et directrice créative",
                "worksFor": {"@id": f"{BASE}/#organization"},
                "knowsAbout": [
                    "Créations Khaire",
                    "Jabador marocain",
                    "Caftan marocain",
                    "Vêtement traditionnel marocain",
                ],
            },
            {
                "@type": "WebSite",
                "@id": f"{BASE}/#website",
                "url": f"{BASE}/",
                "name": "Khaire",
                "publisher": {"@id": f"{BASE}/#organization"},
                "inLanguage": ["fr-MA", "ar-MA"],
            },
            {
                "@type": "WebPage",
                "@id": f"{BASE}/#webpage",
                "url": f"{BASE}/",
                "name": "Khaire | Jabador Marocain",
                "description": "Le Jabador Khaire : jabador marocain brodé main en édition limitée, livraison au Maroc et commande sur WhatsApp.",
                "isPartOf": {"@id": f"{BASE}/#website"},
                "about": [{"@id": f"{BASE}/#product-group"}],
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": f"{BASE}/assets/images/og-image.jpg",
                },
                "inLanguage": "fr-MA",
                "breadcrumb": {"@id": f"{BASE}/#breadcrumb"},
            },
            {
                "@type": "BreadcrumbList",
                "@id": f"{BASE}/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": f"{BASE}/",
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Le Jabador Khaire",
                        "item": f"{BASE}/#top",
                    },
                ],
            },
            {
                "@type": "ProductGroup",
                "@id": f"{BASE}/#product-group",
                "name": "Le Jabador Khaire",
                "productGroupID": "KHV-JABADOR",
                "brand": {"@id": f"{BASE}/#organization"},
                "url": f"{BASE}/",
                "image": images,
                "description": "Jabador marocain traditionnel entièrement brodé à la main par Khaire. Édition limitée, livraison 24 à 48 h partout au Maroc.",
                "category": "Jabador marocain",
                "material": [
                    "Tissu haut de gamme",
                    "Broderie artisanale",
                    "Boutons tressés",
                ],
                "audience": {"@type": "PeopleAudience", "suggestedGender": "Female"},
                "variesBy": ["https://schema.org/color", "https://schema.org/size"],
                "hasVariant": product_variants(images),
            },
            {
                "@type": "FAQPage",
                "@id": f"{BASE}/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": question,
                        "acceptedAnswer": {"@type": "Answer", "text": answer},
                    }
                    for question, answer in faqs
                ],
            },
        ],
    }


html = INDEX.read_text(encoding="utf-8")
script = (
    '  <!-- Structured data: organization, founder, product variants, FAQ -->\n'
    '  <script type="application/ld+json">\n'
    + json.dumps(graph(), ensure_ascii=False, indent=2).replace("\n", "\n  ")
    + "\n  </script>"
)
html, count = re.subn(
    r'  <!-- (?:Product structured data \(JSON-LD\)|Structured data: organization, founder, product variants, FAQ) -->\n'
    r'(?:  <!-- TODO: once you have real reviews, add an aggregateRating block\. -->\n)?'
    r'  <script type="application/ld\+json">.*?  </script>',
    script,
    html,
    flags=re.S,
)
if count != 1:
    raise SystemExit(f"JSON-LD replacement count was {count}")
INDEX.write_text(html, encoding="utf-8")
print("Updated JSON-LD")
