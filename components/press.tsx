"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Press() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  return (
    <section className="py-12 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase">Presse</span>
            <span className="text-[#c4a574]">+</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-light mb-6 text-[#1a1a1a]">
            Ils parlent de Khaire
          </h2>

          {/* Image First on Mobile - More prominent */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
            <Image
              src="/assets/images/mbc5-event.jpg"
              alt="Khaire sur MBC5"
              fill
              className="object-cover"
            />
            {/* MBC5 Badge overlay */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-md px-3 py-2 flex items-center gap-2">
              <div className="relative h-8 w-12">
                <Image
                  src="/assets/images/mbc5-logo.png"
                  alt="MBC5"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="bg-white rounded-lg p-5 border border-[#e5e0d8]/60 mb-6">
            <blockquote className="text-base font-light leading-relaxed text-[#1a1a1a] italic mb-3">
              &ldquo;Khaire fait rayonner le savoir-faire marocain a travers des pieces d&apos;exception.&rdquo;
            </blockquote>
            <p className="text-sm text-[#6b6b6b]">— MBC5</p>
          </div>

          {/* Navigation - Compact */}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="w-9 h-9 rounded-full border border-[#e5e0d8] flex items-center justify-center hover:border-[#1a1a1a] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} className="text-[#1a1a1a]" />
            </button>
            
            <div className="flex items-center gap-1.5">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentSlide(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === currentSlide ? "bg-[#1a1a1a]" : "bg-[#e5e0d8]"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
              className="w-9 h-9 rounded-full border border-[#e5e0d8] flex items-center justify-center hover:border-[#1a1a1a] transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} className="text-[#1a1a1a]" />
            </button>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase">Presse</span>
              <span className="text-[#c4a574]">+</span>
            </div>

            {/* Title */}
            <h2 className="text-4xl xl:text-[42px] font-light mb-8 text-[#1a1a1a]">
              Ils parlent de Khaire
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#c4a574]/40" />
              <span className="text-[#c4a574] text-sm">01</span>
              <div className="h-px w-12 bg-[#c4a574]/40" />
            </div>

            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl font-light leading-relaxed text-[#1a1a1a] mb-6 italic">
              &ldquo;Khaire fait rayonner le savoir-faire marocain a travers des pieces d&apos;exception.&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="text-[#1a1a1a] font-medium mb-6">— MBC5</p>

            {/* MBC5 Logo */}
            <div className="relative h-16 w-24 mb-10">
              <Image
                src="/assets/images/mbc5-logo.png"
                alt="MBC5"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                className="w-10 h-10 rounded-full border border-[#e5e0d8] flex items-center justify-center hover:border-[#1a1a1a] transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} className="text-[#1a1a1a]" />
              </button>
              
              <div className="flex items-center gap-2">
                {[...Array(totalSlides)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentSlide ? "bg-[#1a1a1a]" : "bg-[#e5e0d8]"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCurrentSlide(Math.min(totalSlides - 1, currentSlide + 1))}
                className="w-10 h-10 rounded-full border border-[#e5e0d8] flex items-center justify-center hover:border-[#1a1a1a] transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} className="text-[#1a1a1a]" />
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/assets/images/mbc5-event.jpg"
              alt="Khaire sur MBC5"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
