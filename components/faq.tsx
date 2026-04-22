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
    <section id="faq" className="py-12 lg:py-16 bg-[#f5f1eb]">
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] tracking-[0.2em] text-[#6b6b6b] block mb-1.5 uppercase">FAQ</span>
          <h2 className="text-xl lg:text-2xl font-light text-[#1a1a1a]">Questions frequentes</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#e5e0d8]">
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full py-4 flex items-start justify-between gap-4 text-left hover:text-[#3d5a45] transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-[#1a1a1a]">{faq.question}</span>
                <span className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}>
                  <Plus size={16} className="text-[#6b6b6b]" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-32 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-xs text-[#6b6b6b] leading-relaxed pr-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
