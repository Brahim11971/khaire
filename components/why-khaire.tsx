import { Gem, Scissors, Sparkles, CalendarCheck } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Matières précieuses",
    description: "Tissus haut de gamme, fils fins et boutons tressés.",
  },
  {
    icon: Scissors,
    title: "Broderie à la main",
    description: "Chaque motif demande des heures de travail.",
  },
  {
    icon: Sparkles,
    title: "Extrêmement limité",
    description: "Quand une pièce est partie, elle ne revient pas.",
  },
  {
    icon: CalendarCheck,
    title: "Réservation simple",
    description: "Un acompte de 50% réserve votre pièce.",
  },
]

export function WhyKhaire() {
  return (
    <section className="py-16 lg:py-24 bg-[#f5f1eb]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-none">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <span className="text-xs tracking-[0.2em] text-[#6b6b6b] block mb-2 uppercase">Pourquoi Khaire</span>
            <h2 className="text-2xl lg:text-3xl font-light text-[#1a1a1a]">Ce qui rend chaque pièce unique</h2>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <feature.icon size={20} className="text-[#3d5a45]" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-[#1a1a1a]">{feature.title}</h3>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
