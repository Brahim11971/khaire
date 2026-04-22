import Image from "next/image"

export function Press() {
  return (
    <section className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        
        {/* Mobile Layout - Card Style */}
        <div className="lg:hidden">
          <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a]">
            {/* Image */}
            <div className="relative aspect-[4/3]">
              <Image
                src="/assets/images/mbc5-event.jpg"
                alt="Le Jabador Khaire porte sur MBC5"
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            
            {/* Content overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase">Vu sur</span>
                <div className="relative h-7 w-14">
                  <Image
                    src="/assets/images/mbc5-logo.png"
                    alt="MBC5"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
              <p className="text-white/90 text-sm font-light">
                Le Jabador Khaire, porte en direct sur MBC5
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] tracking-[0.2em] text-[#6b6b6b] uppercase">Vu sur</span>
              <div className="relative h-10 w-20">
                <Image
                  src="/assets/images/mbc5-logo.png"
                  alt="MBC5"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            {/* Main text */}
            <h2 className="text-3xl xl:text-4xl font-light leading-snug text-[#1a1a1a] mb-6">
              Le Jabador Khaire,<br />
              porte en direct sur MBC5
            </h2>

            {/* Subtle description */}
            <p className="text-[#6b6b6b] font-light leading-relaxed max-w-md">
              Notre piece signature a ete presentee a l&apos;antenne, celebrant le savoir-faire artisanal marocain devant des millions de telespectateurs.
            </p>
          </div>

          {/* Image Side */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/mbc5-event.jpg"
              alt="Le Jabador Khaire porte sur MBC5"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
