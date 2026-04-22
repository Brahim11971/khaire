"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Star, ChevronLeft, ChevronRight } from "lucide-react"

const productImages = [
  { src: "/assets/images/hero.jpg", alt: "Le Jabador Khaire - Vue principale" },
  { src: "/assets/images/gallery-1.jpg", alt: "Le Jabador Khaire - Détail broderie" },
  { src: "/assets/images/gallery-2.jpg", alt: "Le Jabador Khaire - Finitions" },
  { src: "/assets/images/gallery-3.jpg", alt: "Le Jabador Khaire - Boutons" },
  { src: "/assets/images/gallery-4.jpg", alt: "Le Jabador Khaire - Tissu" },
]

const sizes = ["S / M", "L / XL"]

const benefits = [
  "Livraison 24-48h partout au Maroc",
  "Réponse WhatsApp en 5 minutes",
  "Échange sous 24h si besoin",
  "Paiement sécurisé à la livraison",
]

export function Hero() {
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <section className="pt-16 lg:pt-20">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        {/* Left: Image Section */}
        <div className="relative bg-cream overflow-hidden">
          {/* Main Image */}
          <div className="relative h-[60vh] lg:h-full">
            <Image
              src={productImages[currentImage].src}
              alt={productImages[currentImage].alt}
              fill
              className="object-cover"
              priority
            />
            
            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
              aria-label="Image précédente"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
              aria-label="Image suivante"
            >
              <ChevronRight size={20} />
            </button>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white">
              <div className="flex items-center gap-2 text-sm mb-3">
                <span className="text-gold">✦</span>
                <span className="tracking-wider">ÉDITION TRÈS LIMITÉE</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-4 text-balance">
                Le Jabador<br />Khaire
              </h1>
              <p className="text-white/80 max-w-md mb-6 leading-relaxed">
                Un héritage marocain, cousu main. Chaque pièce raconte une histoire de tradition, de patience et de beauté.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#details"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground text-sm tracking-wider hover:bg-cream transition-colors"
                >
                  DÉCOUVRIR LA PIÈCE
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-3 border border-white/40 text-sm tracking-wider hover:bg-white/10 transition-colors"
                >
                  <Play size={16} fill="currentColor" />
                  VOIR LA VIDÉO
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="bg-background p-6 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto lg:mx-0 w-full">
            {/* Badge */}
            <div className="flex items-center gap-2 text-sm text-muted mb-4">
              <span className="text-gold">✦</span>
              <span className="tracking-wider">ÉDITION TRÈS LIMITÉE</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-light mb-3">Le Jabador Khaire</h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0</span>
              <span className="text-sm text-muted">· 12 avis</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-medium">1199</span>
                <span className="text-xl text-muted">dh</span>
              </div>
              <p className="text-sm text-muted mt-1">Acompte 50% - Solde à la livraison</p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-sm tracking-wider mb-3">TAILLE</label>
              <div className="grid grid-cols-2 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 text-sm border transition-colors ${
                      selectedSize === size
                        ? "bg-foreground text-white border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button type="button" className="text-sm text-muted underline mt-3 hover:text-foreground">
                Guide des tailles
              </button>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212600000000?text=Bonjour, je souhaite commander le Jabador Khaire en taille {selectedSize}"
              className="flex items-center justify-center gap-2 w-full py-4 bg-forest text-white text-sm tracking-wider hover:bg-forest-dark transition-colors mb-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              COMMANDER SUR WHATSAPP
            </a>

            {/* Benefits */}
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-muted">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-forest flex-shrink-0">
                    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.1" />
                    <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 8l2 2 4-4" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 mt-8 overflow-x-auto pb-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`relative flex-shrink-0 w-16 h-20 overflow-hidden border-2 transition-colors ${
                    currentImage === index ? "border-forest" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
