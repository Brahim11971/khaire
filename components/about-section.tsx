import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="atelier" className="bg-[#f5f1eb]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Content */}
        <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center order-2 lg:order-1">
          <span className="text-xl lg:text-2xl font-light tracking-wide text-[#1a1a1a] mb-4">KHAIRE</span>
          
          <div className="flex items-center gap-2 text-sm mb-6">
            <span className="text-[#c4a574]">+</span>
            <span className="tracking-[0.15em] uppercase text-[10px] text-[#c4a574]">A propos</span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-[42px] font-light leading-[1.15] mb-6 text-[#1a1a1a]">
            {"L'heritage marocain,"}<br />
            cousu main.
          </h2>

          <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-2">
            Khaire celebre l&apos;elegance du vetement traditionnel marocain — caftan, jabador, takchita.
          </p>
          <p className="text-[15px] text-[#6b6b6b] leading-relaxed mb-8">
            Nous creons en petites series, pour preserver le geste et la singularite de chaque vetement.
          </p>

          <a
            href="#collections"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[#1a1a1a] hover:text-[#3d5a45] transition-colors group font-medium"
          >
            EN SAVOIR PLUS
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px] lg:min-h-[500px] order-1 lg:order-2">
          <Image
            src="/assets/images/story.jpg"
            alt="L'atelier Khaire"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
