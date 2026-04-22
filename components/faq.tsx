"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Puis-je échanger si la pièce ne me convient pas ?",
    answer:
      "Oui, vous disposez de 24h après réception pour demander un échange. Contactez-nous sur WhatsApp et nous organiserons le retour et l'envoi d'une nouvelle taille.",
  },
  {
    question: "En combien de temps répondez-vous sur WhatsApp ?",
    answer:
      "Notre équipe répond généralement en moins de 5 minutes pendant les heures d'ouverture (9h-21h). En dehors de ces horaires, nous vous répondrons dès le lendemain matin.",
  },
  {
    question: "Comment se passe la livraison ?",
    answer:
      "La livraison est effectuée en 24-48h partout au Maroc. Vous recevrez un SMS avec le suivi de votre colis. Le paiement du solde se fait à la livraison.",
  },
  {
    question: "Comment réserver ma pièce ?",
    answer:
      "Contactez-nous sur WhatsApp, choisissez votre taille et versez un acompte de 50%. Votre pièce est alors réservée et sera livrée sous 24-48h. Le solde est payé à la livraison.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#f5f1eb]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs tracking-[0.2em] text-[#6b6b6b] block mb-2 uppercase">FAQ</span>
          <h2 className="text-2xl lg:text-3xl font-light text-[#1a1a1a]">Questions fréquentes</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#e5e0d8]">
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full py-5 flex items-start justify-between gap-4 text-left hover:text-[#3d5a45] transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-[#1a1a1a]">{faq.question}</span>
                <span className={`flex-shrink-0 mt-1 transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}>
                  <Plus size={18} className="text-[#6b6b6b]" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[#6b6b6b] leading-relaxed pr-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
