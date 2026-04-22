import { Gem, Scissors, Sparkles, CalendarCheck } from "lucide-react"

const features = [
  {
    icon: Gem,
    title: "Matieres precieuses",
    description: "Tissus haut de gamme, fils fins et boutons tresses.",
  },
  {
    icon: Scissors,
    title: "Broderie a la main",
    description: "Chaque motif demande des heures de travail.",
  },
  {
    icon: Sparkles,
    title: "Extremement limite",
    description: "Quand une piece est partie, elle ne revient pas.",
  },
  {
    icon: CalendarCheck,
    title: "Reservation simple",
    description: "Un acompte de 50% reserve votre piece.",
  },
]

export function WhyKhaire() {
  return (
    <section className="py-12 lg:py-16 bg-[#f5f1eb] border-b border-[#e5e0d8]">
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] tracking-[0.2em] text-[#6b6b6b] block mb-1.5 uppercase">Pourquoi Khaire</span>
          <h2 className="text-xl lg:text-2xl font-light text-[#1a1a1a]">Ce qui rend chaque piece unique</h2>
        </div>

        {/* Features */}
        <div className="space-y-5">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <feature.icon size={16} className="text-[#3d5a45]" />
              </div>
              <div className="pt-1">
                <h3 className="font-medium text-sm mb-0.5 text-[#1a1a1a]">{feature.title}</h3>
                <p className="text-xs text-[#6b6b6b] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
