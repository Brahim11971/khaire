import Image from "next/image"

export function Press() {
  return (
    <section id="fondatrice" className="bg-[#faf9f7]">
      {/* MBC5 Feature */}
      <div className="py-16 lg:py-20 border-b border-[#e5e0d8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/images/mbc5-event.jpg"
                  alt="Le Jabador Khaire porte sur MBC5"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              
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

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
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

              <h2 className="text-3xl xl:text-4xl font-light leading-snug text-[#1a1a1a] mb-6">
                Le Jabador Khaire,<br />
                porte en direct sur MBC5
              </h2>

              <p className="text-[#6b6b6b] font-light leading-relaxed max-w-md">
                Notre piece signature a ete presentee a l&apos;antenne, celebrant le savoir-faire artisanal marocain devant des millions de telespectateurs.
              </p>
            </div>

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
      </div>

      {/* Founder - Chaimae */}
      <div className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Photo */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-8 max-w-sm mx-auto">
              <Image
                src="/images/chaimae.jpg"
                alt="Chaimae Belkhir - Fondatrice de Khaire"
                fill
                className="object-cover object-top"
              />
            </div>
            
            {/* Content */}
            <div className="text-center">
              <span className="text-[10px] tracking-[0.2em] text-[#c4a574] uppercase">La Fondatrice</span>
              <h2 className="text-2xl font-light text-[#1a1a1a] mt-3 mb-4">Chaimae Belkhir</h2>
              <p className="text-[#6b6b6b] font-light leading-relaxed">
                Passionnee par la creation de contenu pour sa communaute, Chaimae a decide d&apos;utiliser sa creativite pour offrir au Maroc quelque chose d&apos;unique et de haute qualite a porter. Chaque piece Khaire est le reflet de cette vision : un heritage marocain reinvente avec elegance et modernite.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1">
              <span className="text-[11px] tracking-[0.2em] text-[#c4a574] uppercase">La Fondatrice</span>
              <h2 className="text-3xl xl:text-4xl font-light text-[#1a1a1a] mt-4 mb-6">
                Chaimae Belkhir
              </h2>
              
              <div className="space-y-4 text-[#6b6b6b] font-light leading-relaxed max-w-lg">
                <p>
                  Passionnee par la creation de contenu pour sa communaute, Chaimae a decide d&apos;utiliser sa creativite pour offrir au Maroc quelque chose d&apos;unique et de haute qualite a porter.
                </p>
                <p>
                  Chaque piece Khaire est le reflet de cette vision : un heritage marocain reinvente avec elegance et modernite, pour celles qui cherchent l&apos;exception.
                </p>
              </div>

              {/* Social hint */}
              <div className="mt-8 pt-6 border-t border-[#e5e0d8]">
                <a 
                  href="https://instagram.com/chaimaebelkhir" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  <span>@chaimaebelkhir</span>
                </a>
              </div>
            </div>

            {/* Photo Side */}
            <div className="order-1 lg:order-2 relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg max-w-md ml-auto">
              <Image
                src="/images/chaimae.jpg"
                alt="Chaimae Belkhir - Fondatrice de Khaire"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
