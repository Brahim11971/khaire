"use client"

import { useEffect } from "react"

export function VideoSection() {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement("script")
    script.src = "https://www.tiktok.com/embed.js"
    script.async = true
    document.body.appendChild(script)
    
    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section id="video" className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-xs tracking-[0.2em] text-[#8a7d6d] mb-3">
            EN COULISSES
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl text-[#1a1a1a] mb-4">
            Decouvrez le Jabador
          </h2>
          <p className="text-sm lg:text-base text-[#6b6b6b] max-w-md mx-auto leading-relaxed">
            Un apercu de notre savoir-faire et de la beaute de chaque piece, portee avec elegance.
          </p>
        </div>

        {/* TikTok Embed */}
        <div className="flex justify-center">
          <div className="w-full max-w-[340px]">
            <blockquote 
              className="tiktok-embed" 
              cite="https://www.tiktok.com/@chaimae.belkhir/video/7627169538190101778"
              data-video-id="7627169538190101778"
              style={{ maxWidth: '340px', minWidth: '288px' }}
            >
              <section>
                <a 
                  target="_blank" 
                  title="@chaimae.belkhir" 
                  href="https://www.tiktok.com/@chaimae.belkhir?refer=embed"
                  rel="noopener noreferrer"
                >
                  @chaimae.belkhir
                </a>
              </section>
            </blockquote>
          </div>
        </div>

        {/* CTA below video */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/212600000000?text=Bonjour, je souhaite commander le Jabador Khaire"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#3d5a45] text-white text-xs tracking-[0.15em] rounded-full hover:bg-[#2e4636] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            COMMANDER MAINTENANT
          </a>
        </div>
      </div>
    </section>
  )
}
