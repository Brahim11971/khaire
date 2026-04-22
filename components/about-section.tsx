import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="atelier" className="grid lg:grid-cols-2">
      {/* Image */}
      <div className="relative h-[50vh] lg:h-[600px]">
        <Image
          src="/assets/images/story.jpg"
          alt="L'atelier Khaire"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-[#f5f1eb] p-8 lg:p-16 flex items-center">
        <div className="max-w-lg">
          <span className="text-sm tracking-[0.2em] text-[#6b6b6b] mb-2 block uppercase">Khaire</span>
          <div className="flex items-center gap-2 text-sm text-[#3d5a45] mb-6">
            <span className="text-[#c4a574]">✦</span>
            <span className="tracking-[0.15em] uppercase text-xs">À propos</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-light leading-tight mb-6 text-[#1a1a1a]">
            {"L'héritage marocain, cousu main."}
          </h2>

          <p className="text-[#6b6b6b] leading-relaxed mb-4">
            Khaire célèbre l&apos;élégance du vêtement traditionnel marocain — caftan, jabador, takchita.
          </p>
          <p className="text-[#6b6b6b] leading-relaxed mb-8">
            Nous créons en petites séries, pour préserver le geste et la singularité de chaque vêtement.
          </p>

          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-[#1a1a1a] hover:text-[#3d5a45] transition-colors group"
          >
            EN SAVOIR PLUS
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
