"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Star, Clock, Truck, RefreshCw, Shield } from "lucide-react"

const productImages = [
  { src: "/images/hero-main.png", alt: "Le Jabador Khaire - Vue principale" },
  { src: "/images/thumb-1.png", alt: "Le Jabador Khaire - Vue complete" },
  { src: "/images/thumb-2.png", alt: "Le Jabador Khaire - Pose alternative" },
  { src: "/images/thumb-3.png", alt: "Le Jabador Khaire - Detail broderie" },
  { src: "/images/thumb-4.png", alt: "Le Jabador Khaire - Ceinture et tissu" },
]

const sizes = ["S / M", "L / XL"]

const benefits = [
  { icon: Truck, text: "Livraison 24-48h partout au Maroc" },
  { icon: Clock, text: "Reponse WhatsApp en 5 minutes" },
  { icon: RefreshCw, text: "Echange sous 24h si besoin" },
  { icon: Shield, text: "Paiement securise a la livraison" },
]

export function Hero() {
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <section className="min-h-screen lg:h-screen">
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr,420px] xl:grid-cols-[1fr,480px] min-h-screen lg:h-full">
        {/* Left: Image Section - 70vh on mobile, full height on desktop */}
        <div className="relative overflow-hidden bg-[#1a1a1a] h-[70vh] lg:h-full">
          {/* Main Image Container - fills full height */}
          <div className="absolute inset-0">
            <Image
              src={productImages[currentImage].src}
              alt={productImages[currentImage].alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 xl:p-12 text-white">
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="text-[#c4a574]">+</span>
                <span className="tracking-[0.2em] text-[10px] uppercase opacity-90">Edition tres limitee</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.05] mb-5 tracking-wide">
                Le Jabador<br />Khaire
              </h1>
              <p className="text-white/75 max-w-md mb-8 leading-relaxed text-sm lg:text-[15px]">
                Un heritage marocain, cousu main. Chaque piece raconte une histoire de tradition, de patience et de beaute.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#details"
                  className="inline-flex items-center px-7 py-3.5 bg-white text-[#1a1a1a] text-xs tracking-[0.15em] hover:bg-[#f5f1eb] transition-colors"
                >
                  DECOUVRIR LA PIECE
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.1em] hover:text-white/80 transition-colors group"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/50 group-hover:border-white transition-colors">
                    <Play size={12} fill="currentColor" className="ml-0.5" />
                  </span>
                  VOIR LA VIDEO
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Product Details Panel */}
        <div className="bg-[#faf9f7] p-6 lg:p-8 xl:p-10 flex flex-col lg:pt-24">
          {/* Atelier Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3d5a45]/30 bg-[#3d5a45]/5 mb-5 self-start">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-sm text-[#4a4a4a]">Atelier ouvert · reponse en ~5 min</span>
          </div>

          {/* Edition Badge */}
          <div className="flex items-center gap-2 text-sm text-[#6b6b6b] mb-2">
            <span className="text-[#c4a574]">+</span>
            <span className="tracking-[0.15em] text-[10px] uppercase">Edition tres limitee</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl xl:text-[32px] font-light mb-3 tracking-wide text-[#1a1a1a]">Le Jabador Khaire</h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-0.5 text-[#c4a574]">
              <Star size={13} fill="currentColor" />
            </div>
            <span className="text-sm font-medium text-[#1a1a1a]">5.0</span>
            <span className="text-sm text-[#6b6b6b]">· 12 avis</span>
          </div>

          {/* Price */}
          <div className="mb-5">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl lg:text-[28px] font-medium text-[#1a1a1a]">1199</span>
              <span className="text-lg text-[#6b6b6b]">dh</span>
            </div>
            <p className="text-sm text-[#6b6b6b] mt-1">Acompte 50% - Solde a la livraison</p>
          </div>

          {/* Size Selector */}
          <div className="mb-5">
            <label className="block text-[10px] tracking-[0.2em] uppercase mb-2.5 text-[#6b6b6b]">Taille</label>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 text-sm transition-all ${
                    selectedSize === size
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-white border border-[#e5e0d8] hover:border-[#1a1a1a] text-[#1a1a1a]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <button type="button" className="text-xs text-[#6b6b6b] underline underline-offset-2 mt-2.5 hover:text-[#1a1a1a] transition-colors">
              Guide des tailles
            </button>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/212600000000?text=Bonjour, je souhaite commander le Jabador Khaire en taille ${selectedSize}`}
            className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#3d5a45] text-white text-xs tracking-[0.15em] hover:bg-[#2d4535] transition-colors rounded-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            COMMANDER SUR WHATSAPP
          </a>

          {/* Benefits */}
          <ul className="space-y-2.5 mt-5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2.5 text-xs text-[#6b6b6b]">
                <benefit.icon size={14} className="text-[#6b6b6b] flex-shrink-0" />
                {benefit.text}
              </li>
            ))}
          </ul>

          {/* Thumbnail Gallery */}
          <div className="flex gap-2 mt-auto pt-5">
            {productImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImage(index)}
                className={`relative flex-1 aspect-[3/4] overflow-hidden transition-all ${
                  currentImage === index ? "ring-2 ring-[#3d5a45] ring-offset-1" : "opacity-60 hover:opacity-100"
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
    </section>
  )
}
