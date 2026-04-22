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
    alt: "Finitions soignees",
    caption: "Finitions soignees",
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
    document.body.classList.add("overflow-hidden")
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.classList.remove("overflow-hidden")
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % details.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + details.length) % details.length)
  }

  return (
    <section id="details" className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="text-[#c4a574] text-xl inline-block mb-4">+</span>
          <h2 className="text-3xl lg:text-4xl font-light text-[#1a1a1a]">Regardez de plus pres</h2>
        </div>

        {/* Gallery Grid - 2x2 layout */}
        <div className="grid grid-cols-2 gap-4 lg:gap-5">
          {details.map((detail, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={detail.src}
                alt={detail.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 text-[#1a1a1a] text-sm font-light">
                {detail.caption}
              </span>
            </button>
          ))}
        </div>

        {/* Video Button */}
        <div className="text-center mt-10 lg:mt-12">
          <button
            type="button"
            className="inline-flex items-center px-8 py-3.5 border border-[#1a1a1a] rounded-full text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            VOIR LA VIDEO COMPLETE
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
            <X size={28} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Image precedente"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="relative max-w-3xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={details[currentIndex].src}
              alt={details[currentIndex].alt}
              width={800}
              height={800}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
            aria-label="Image suivante"
          >
            <ChevronRight size={36} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {details.length}
          </div>
        </div>
      )}
    </section>
  )
}
