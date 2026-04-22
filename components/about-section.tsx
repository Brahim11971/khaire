import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="atelier" className="bg-[#f5f1eb] flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] h-full">
        {/* Image */}
        <div className="relative h-[300px] lg:h-full min-h-[280px]">
          <Image
            src="/assets/images/story.jpg"
            alt="L'atelier Khaire"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 lg:p-10 flex items-center">
          <div className="max-w-md">
            <span className="text-sm tracking-[0.2em] text-[#6b6b6b] mb-1 block uppercase font-light">Khaire</span>
            <div className="flex items-center gap-2 text-sm text-[#3d5a45] mb-5">
              <span className="text-[#c4a574]">+</span>
              <span className="tracking-[0.15em] uppercase text-[10px]">A propos</span>
            </div>

            <h2 className="text-2xl lg:text-[28px] font-light leading-tight mb-5 text-[#1a1a1a]">
              {"L'heritage marocain, cousu main."}
            </h2>

            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-3">
              Khaire celebre l&apos;elegance du vetement traditionnel marocain — caftan, jabador, takchita.
            </p>
            <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">
              Nous creons en petites series, pour preserver le geste et la singularite de chaque vetement.
            </p>

            <a
              href="#collections"
              className="inline-flex items-center gap-2 text-xs tracking-[0.1em] text-[#1a1a1a] hover:text-[#3d5a45] transition-colors group"
            >
              EN SAVOIR PLUS
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
