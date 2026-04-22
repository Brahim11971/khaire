"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Matieres precieuses",
    description: "Tissus haut de gamme, fils fins et boutons tresses.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <rect x="3" y="15" width="6" height="6" rx="1" />
        <rect x="15" y="15" width="6" height="6" rx="1" />
      </svg>
    ),
    title: "Broderie a la main",
    description: "Chaque motif demande des heures de travail.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Extremement limite",
    description: "Quand une piece est partie, elle ne revient pas.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: "Reservation simple",
    description: "Un acompte de 50% reserve votre piece.",
  },
]

export function WhyKhaire() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-[700px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] tracking-[0.2em] text-[#c4a574] block mb-4 uppercase font-medium">Pourquoi Khaire</span>
          <h2 className="text-3xl lg:text-4xl font-light text-[#1a1a1a]">Ce qui rend chaque piece unique</h2>
        </div>

        {/* Features Card */}
        <div className="bg-white rounded-2xl border border-[#e5e0d8] overflow-hidden">
          {features.map((feature, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex items-center gap-5 p-5 lg:p-6 text-left transition-colors hover:bg-[#faf9f7] ${
                index !== features.length - 1 ? "border-b border-[#e5e0d8]" : ""
              }`}
            >
              <div className="flex-shrink-0 text-[#6b6b6b]">
                {feature.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[15px] mb-1 text-[#1a1a1a]">{feature.title}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{feature.description}</p>
              </div>
              <ChevronDown 
                size={20} 
                className={`flex-shrink-0 text-[#c4a574] transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`} 
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
