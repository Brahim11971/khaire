"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const details = [
  {
    src: "/assets/images/gallery-1.jpg",
    alt: "Broderie artisanale",
    caption: "Broderie artisanale",
  },
  {
    src: "/assets/images/gallery-2.jpg",
    alt: "Finitions soignées",
    caption: "Finitions soignées",
  },
  {
    src: "/assets/images/gallery-3.jpg",
    alt: "Boutons faits main",
    caption: "Boutons faits main",
  },
  {
    src: "/assets/images/gallery-4.jpg",
    alt: "Tissu haut de gamme",
    caption: "Tissu haut de gamme",
  },
]

export function DetailGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.classList.add("no-scroll")
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.classList.remove("no-scroll")
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % details.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + details.length) % details.length)
  }

  return (
    <section id="details" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-2xl">✦</span>
          <h2 className="text-2xl lg:text-3xl font-light mt-4">Regardez de plus près</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {details.map((detail, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src={detail.src}
                alt={detail.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 left-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {detail.caption}
              </span>
            </button>
          ))}
        </div>

        {/* Video Button */}
        <div className="text-center mt-10">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-8 py-3 border border-foreground text-sm tracking-wider hover:bg-foreground hover:text-white transition-colors"
          >
            VOIR LA VIDÉO COMPLÈTE
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Image précédente"
          >
            <ChevronLeft size={40} />
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={details[currentIndex].src}
              alt={details[currentIndex].alt}
              width={800}
              height={1000}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Image suivante"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {details.length}
          </div>
        </div>
      )}
    </section>
  )
}
