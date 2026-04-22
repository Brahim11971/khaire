"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"

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
  const [videoOpen, setVideoOpen] = useState(false)

  // Load TikTok embed script
  useEffect(() => {
    if (videoOpen) {
      const script = document.createElement("script")
      script.src = "https://www.tiktok.com/embed.js"
      script.async = true
      document.body.appendChild(script)
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [videoOpen])

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
        <div className="text-center mt-10 lg:mt-12 pb-20 lg:pb-0">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="cursor-pointer relative z-10 inline-flex items-center gap-2 px-8 py-3.5 border border-[#1a1a1a] rounded-full text-xs tracking-[0.15em] hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <Play size={14} />
            VOIR LA VIDEO
          </button>
        </div>
      </div>

      {/* TikTok Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <X size={28} />
          </button>

          <div 
            className="relative w-full max-w-[340px] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <blockquote 
              className="tiktok-embed rounded-xl overflow-hidden" 
              cite="https://www.tiktok.com/@belkhirchaimae/video/7481632230843848993"
              data-video-id="7481632230843848993"
              style={{ maxWidth: '340px', margin: '0 auto' }}
            >
              <section>
                <a 
                  target="_blank" 
                  title="@belkhirchaimae" 
                  href="https://www.tiktok.com/@belkhirchaimae?refer=embed"
                  rel="noopener noreferrer"
                >
                  @belkhirchaimae
                </a>
              </section>
            </blockquote>
          </div>
        </div>
      )}

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

          {/* Bottom Bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-white/60 text-sm">
              {currentIndex + 1} / {details.length}
            </span>
            <a
              href="https://wa.me/212600000000?text=Bonjour, je souhaite commander le Jabador Khaire"
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white text-xs tracking-[0.1em] hover:bg-white/20 transition-colors rounded-full border border-white/20"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              COMMANDER
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
