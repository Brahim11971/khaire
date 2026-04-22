"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

const mbc5Images = [
  { src: "/images/mbc5-1.png", alt: "Le Jabador Khaire porte sur MBC5 - Photo de groupe" },
  { src: "/images/mbc5-2.png", alt: "Chaimae Belkhir sur MBC5" },
]

export function Press() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      const style = document.createElement('style')
      style.textContent = `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `
      document.head.appendChild(style)
      return () => { document.head.removeChild(style) }
    }
  }, [])

  return (
    <section id="fondatrice" className="bg-[#faf9f7]">
      {/* MBC5 Feature - Scrollable Gallery */}
      <div className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase">Vu sur</span>
            <div className="relative h-8 w-16 lg:h-10 lg:w-20">
              <Image
                src="/assets/images/mbc5-logo.png"
                alt="MBC5"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Scrollable Gallery */}
          <div className="relative">
            <div 
              ref={scrollRef}
              className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 lg:justify-center hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {mbc5Images.map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-[45%] xl:w-[40%] snap-center"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
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
            
            {/* Scroll Indicator - Mobile only */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              <div className="w-2 h-2 rounded-full bg-[#3d5a45]" />
              <div className="w-2 h-2 rounded-full bg-[#d4d0c8]" />
            </div>
          </div>
        </div>
      </div>

      {/* Founder - Chaimae */}
      <div className="py-12 lg:py-20 bg-[#f5f1eb]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          
          {/* Label */}
          <span className="text-[11px] tracking-[0.2em] text-[#c4a574] uppercase">
            La Fondatrice
          </span>
          
          {/* Name */}
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-light text-[#1a1a1a] mt-4 mb-6 lg:mb-8">
            Chaimae Belkhir
          </h2>
          
          {/* Bio */}
          <p className="text-[#6b6b6b] font-light leading-relaxed max-w-2xl mx-auto text-base lg:text-lg">
            Passionnee par la creation de contenu pour sa communaute, Chaimae a decide d&apos;utiliser sa creativite pour offrir au Maroc quelque chose d&apos;unique et de haute qualite a porter. Chaque piece Khaire est le reflet de cette vision : un heritage marocain reinvente avec elegance et modernite.
          </p>
          
          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/belkhirchaimae/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
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
