import Image from "next/image"

export function Press() {
  return (
    <section className="py-12 lg:py-16 bg-[#faf9f7]">
      <div className="px-6 lg:px-10">
        <span className="text-[10px] tracking-[0.2em] text-[#6b6b6b] block mb-4 uppercase">Presse</span>
        <h2 className="text-xl lg:text-2xl font-light mb-8 text-[#1a1a1a]">Ils parlent de Khaire</h2>

        {/* MBC5 Feature Card */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-[1fr,1.4fr] items-stretch">
            {/* Content Side */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              {/* As seen on badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs tracking-wide text-[#6b6b6b] uppercase">Vu sur</span>
                <div className="relative h-8 w-20">
                  <Image
                    src="/assets/images/mbc5-logo.png"
                    alt="MBC5"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-base lg:text-lg font-light leading-relaxed text-[#1a1a1a] mb-4">
                Khaire a eu l&apos;honneur d&apos;etre presente sur MBC5, mettant en lumiere l&apos;artisanat marocain et notre engagement envers l&apos;excellence.
              </p>

              <p className="text-sm text-[#6b6b6b]">
                Decouvrez notre savoir-faire traditionnel celebre a l&apos;international.
              </p>
            </div>

            {/* Image Side */}
            <div className="relative aspect-[4/3] lg:aspect-auto min-h-[240px]">
              <Image
                src="/assets/images/mbc5-event.jpg"
                alt="Khaire sur MBC5"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
