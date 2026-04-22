"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const pressItems = [
  {
    quote: "Khaire fait rayonner le savoir-faire marocain a travers des pieces d'exception.",
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
    <section className="py-12 lg:py-16 bg-[#faf9f7]">
      <div className="px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-6 items-center">
          {/* Content */}
          <div>
            <span className="text-[10px] tracking-[0.2em] text-[#6b6b6b] block mb-4 uppercase">Presse</span>
            <h2 className="text-xl lg:text-2xl font-light mb-6 text-[#1a1a1a]">Ils parlent de Khaire</h2>

            <blockquote className="text-lg lg:text-xl font-light leading-relaxed mb-4 text-[#1a1a1a]">
              &ldquo;{pressItems[currentIndex].quote}&rdquo;
            </blockquote>
            <p className="text-sm text-[#6b6b6b]">— {pressItems[currentIndex].source}</p>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded-full border border-[#e5e0d8] flex items-center justify-center hover:bg-[#f5f1eb] transition-colors"
                aria-label="Citation precedente"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-full border border-[#e5e0d8] flex items-center justify-center hover:bg-[#f5f1eb] transition-colors"
                aria-label="Citation suivante"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-md overflow-hidden">
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
