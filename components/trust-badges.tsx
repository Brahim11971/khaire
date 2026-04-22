import { Gem, Heart, CalendarCheck, MessageCircle } from "lucide-react"

const badges = [
  {
    icon: Gem,
    title: "Pièces en édition limitée",
    subtitle: "Disponibles en petites séries",
  },
  {
    icon: Heart,
    title: "Fait main au Maroc",
    subtitle: "Broderie artisanale",
  },
  {
    icon: CalendarCheck,
    title: "Réservation simple",
    subtitle: "Acompte 50% à la commande",
  },
  {
    icon: MessageCircle,
    title: "Conseil personnalisé",
    subtitle: "Sur WhatsApp",
  },
]

export function TrustBadges() {
  return (
    <section className="py-6 border-y border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                <badge.icon size={18} className="text-forest" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{badge.title}</p>
                <p className="text-xs text-muted">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
