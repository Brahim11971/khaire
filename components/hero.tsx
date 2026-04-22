"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Star } from "lucide-react"

const productImages = [
  { src: "/assets/images/hero.jpg", alt: "Le Jabador Khaire - Vue principale" },
  { src: "/assets/images/gallery-1.jpg", alt: "Le Jabador Khaire - Détail broderie" },
  { src: "/assets/images/gallery-2.jpg", alt: "Le Jabador Khaire - Finitions" },
  { src: "/assets/images/gallery-3.jpg", alt: "Le Jabador Khaire - Boutons" },
  { src: "/assets/images/gallery-4.jpg", alt: "Le Jabador Khaire - Tissu" },
]

const sizes = ["S / M", "L / XL"]

const benefits = [
  { icon: "truck", text: "Livraison 24-48h partout au Maroc" },
  { icon: "clock", text: "Réponse WhatsApp en 5 minutes" },
  { icon: "refresh", text: "Échange sous 24h si besoin" },
  { icon: "shield", text: "Paiement sécurisé à la livraison" },
]

export function Hero() {
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <section className="pt-16 lg:pt-20">
      <div className="grid lg:grid-cols-[1fr,480px] min-h-[calc(100vh-5rem)]">
        {/* Left: Image Section */}
        <div className="relative overflow-hidden">
          {/* Main Image */}
          <div className="relative h-[65vh] lg:h-full">
            <Image
              src={productImages[currentImage].src}
              alt={productImages[currentImage].alt}
              fill
              className="object-cover"
              priority
            />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white">
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="text-[#c4a574]">✦</span>
                <span className="tracking-[0.2em] text-xs uppercase">Édition très limitée</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-light leading-[1.1] mb-5">
                Le Jabador<br />Khaire
              </h1>
              <p className="text-white/80 max-w-md mb-8 leading-relaxed text-sm lg:text-base">
                Un héritage marocain, cousu main. Chaque pièce raconte une histoire de tradition, de patience et de beauté.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#details"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1a1a1a] text-sm tracking-wider hover:bg-[#f5f1eb] transition-colors"
                >
                  DÉCOUVRIR LA PIÈCE
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-3 text-sm tracking-wider hover:text-white/80 transition-colors"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/40">
                    <Play size={14} fill="currentColor" className="ml-0.5" />
                  </span>
                  VOIR LA VIDÉO
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="bg-[#faf9f7] p-6 lg:p-10 flex flex-col">
          {/* Atelier Open Badge */}
          <div className="flex items-center gap-2 mb-6 p-3 bg-[#f5f1eb] rounded-lg">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm text-[#1a1a1a]">
              <span className="font-medium">{"L'atelier est ouvert"}</span>
              <span className="text-[#6b6b6b]"> · Réponse en ~5 minutes</span>
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {/* Badge */}
            <div className="flex items-center gap-2 text-sm text-[#6b6b6b] mb-3">
              <span className="text-[#c4a574]">✦</span>
              <span className="tracking-[0.15em] text-xs uppercase">Édition très limitée</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-light mb-3">Le Jabador Khaire</h2>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5 text-[#c4a574]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium">5.0</span>
              <span className="text-sm text-[#6b6b6b]">· 12 avis</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-medium">1199</span>
                <span className="text-xl text-[#6b6b6b]">dh</span>
              </div>
              <p className="text-sm text-[#6b6b6b] mt-1">Acompte 50% - Solde à la livraison</p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-xs tracking-[0.15em] uppercase mb-3 text-[#6b6b6b]">Taille</label>
              <div className="grid grid-cols-2 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-3.5 px-4 text-sm border transition-all ${
                      selectedSize === size
                        ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                        : "border-[#e5e0d8] hover:border-[#1a1a1a] text-[#1a1a1a]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button type="button" className="text-sm text-[#6b6b6b] underline underline-offset-2 mt-3 hover:text-[#1a1a1a] transition-colors">
                Guide des tailles
              </button>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/212600000000?text=Bonjour, je souhaite commander le Jabador Khaire en taille ${selectedSize}`}
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#3d5a45] text-white text-sm tracking-wider hover:bg-[#2d4535] transition-colors rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              COMMANDER SUR WHATSAPP
            </a>

            {/* Benefits */}
            <ul className="space-y-3 mt-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-[#6b6b6b]">
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#3d5a45] flex-shrink-0">
                    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
                    <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 8l2 2 4-4" />
                  </svg>
                  {benefit.text}
                </li>
              ))}
            </ul>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 mt-6 pt-6 border-t border-[#e5e0d8]">
              {productImages.slice(0, 4).map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`relative flex-shrink-0 w-16 h-20 overflow-hidden transition-all ${
                    currentImage === index ? "ring-2 ring-[#3d5a45]" : "opacity-70 hover:opacity-100"
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
