"use client"

import Image from "next/image"
import { useState, useRef } from "react"

const mbc5Images = [
  { src: "/images/mbc5-1.png", alt: "Le Jabador Khaire porte sur MBC5 - Photo de groupe" },
  { src: "/images/mbc5-2.png", alt: "Chaimae Belkhir sur MBC5" },
]

export function Press() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const itemWidth = scrollRef.current.offsetWidth * 0.85 + 16 // 85vw + gap
      const newIndex = Math.round(scrollLeft / itemWidth)
      setActiveIndex(Math.min(newIndex, mbc5Images.length - 1))
    }
  }

  return (
    <section id="fondatrice" className="bg-[#faf9f7]">
      {/* MBC5 Feature */}
      <div className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-8 px-6">
            <span className="text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase">Vu sur</span>
            <div className="relative h-8 w-16">
              <Image
                src="/assets/images/mbc5-logo.png"
                alt="MBC5"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="lg:hidden">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 pr-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {mbc5Images.map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {mbc5Images.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? "bg-[#3d5a45]" : "bg-[#d4d0c8]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Side by Side */}
          <div className="hidden lg:flex justify-center gap-6 px-10">
            {mbc5Images.map((img, index) => (
              <div key={index} className="w-[45%] max-w-[500px]">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder - Chaimae */}
      <div className="py-14 lg:py-24 bg-[#f5f1eb]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          
          {/* Label */}
          <span className="text-[11px] tracking-[0.2em] text-[#c4a574] uppercase">
            La Fondatrice
          </span>
          
          {/* Name */}
          <h2 className="text-2xl lg:text-4xl font-light text-[#1a1a1a] mt-4 mb-6">
            Chaimae Belkhir
          </h2>
          
          {/* Bio */}
          <p className="text-[#5a5a5a] font-light leading-[1.8] text-[15px] lg:text-[17px]">
            Passionnee par la creation de contenu pour sa communaute, Chaimae a decide d&apos;utiliser sa creativite pour offrir au Maroc quelque chose d&apos;unique et de haute qualite a porter. Chaque piece Khaire est le reflet de cette vision : un heritage marocain reinvente avec elegance et modernite.
          </p>
          
          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/belkhirchaimae/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-[13px] text-[#8a8a8a] hover:text-[#1a1a1a] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            <span>@belkhirchaimae</span>
          </a>
        </div>
      </div>
    </section>
  )
}
