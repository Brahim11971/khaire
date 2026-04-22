import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="atelier" className="grid lg:grid-cols-2">
      {/* Image */}
      <div className="relative h-[50vh] lg:h-auto">
        <Image
          src="/assets/images/story.jpg"
          alt="L'atelier Khaire"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-cream p-8 lg:p-16 flex items-center">
        <div className="max-w-lg">
          <span className="text-sm tracking-wider text-muted mb-2 block">KHAIRE</span>
          <div className="flex items-center gap-2 text-sm text-forest mb-6">
            <span>✦</span>
            <span className="tracking-wider">À PROPOS</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-balance">
            {"L'héritage marocain, cousu main."}
          </h2>

          <p className="text-muted leading-relaxed mb-4">
            Khaire célèbre l&apos;élégance du vêtement traditionnel marocain — caftan, jabador, takchita.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            Nous créons en petites séries, pour préserver le geste et la singularité de chaque vêtement.
          </p>

          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-foreground hover:text-forest transition-colors group"
          >
            EN SAVOIR PLUS
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
