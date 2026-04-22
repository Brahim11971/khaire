"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Puis-je echanger si la piece ne me convient pas ?",
    answer:
      "Oui, vous disposez de 24h apres reception pour demander un echange. Contactez-nous sur WhatsApp et nous organiserons le retour.",
  },
  {
    question: "En combien de temps repondez-vous sur WhatsApp ?",
    answer:
      "Notre equipe repond generalement en moins de 5 minutes pendant les heures d'ouverture (9h-21h).",
  },
  {
    question: "Comment se passe la livraison ?",
    answer:
      "La livraison est effectuee en 24-48h partout au Maroc. Le paiement du solde se fait a la livraison.",
  },
  {
    question: "Comment reserver ma piece ?",
    answer:
      "Contactez-nous sur WhatsApp, choisissez votre taille et versez un acompte de 50%. Votre piece est alors reservee.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-[700px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] tracking-[0.2em] text-[#c4a574] block mb-4 uppercase font-medium">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-light text-[#1a1a1a]">Questions frequentes</h2>
        </div>

        {/* FAQ Card */}
        <div className="bg-white rounded-2xl border border-[#e5e0d8] overflow-hidden">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={index !== faqs.length - 1 ? "border-b border-[#e5e0d8]" : ""}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full p-5 lg:p-6 flex items-start justify-between gap-4 text-left hover:bg-[#faf9f7] transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-[15px] text-[#1a1a1a] leading-relaxed">{faq.question}</span>
                <span className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}>
                  <Plus size={18} className="text-[#c4a574]" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5 lg:pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-[#6b6b6b] leading-relaxed px-5 lg:px-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
