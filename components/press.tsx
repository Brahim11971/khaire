"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const pressItems = [
  {
    quote: "Khaire fait rayonner le savoir-faire marocain à travers des pièces d'exception.",
    source: "MBC5",
    image: "/assets/images/mbc5-event.jpg",
  },
]

export function Press() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pressItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + pressItems.length) % pressItems.length)
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm tracking-wider text-muted block mb-6">PRESSE</span>
            <h2 className="text-2xl lg:text-3xl font-light mb-8">Ils parlent de Khaire</h2>

            <blockquote className="text-xl lg:text-2xl font-light leading-relaxed mb-6">
              &ldquo;{pressItems[currentIndex].quote}&rdquo;
            </blockquote>
            <p className="text-muted">— {pressItems[currentIndex].source}</p>

            {/* Navigation */}
            {pressItems.length > 1 && (
              <div className="flex items-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-cream transition-colors"
                  aria-label="Citation précédente"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-cream transition-colors"
                  aria-label="Citation suivante"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={pressItems[currentIndex].image}
              alt={`${pressItems[currentIndex].source} - Khaire`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
