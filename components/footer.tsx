import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  boutique: {
    title: "BOUTIQUE",
    links: [
      { label: "Toutes les pieces", href: "#" },
      { label: "Editions limitees", href: "#" },
      { label: "Nouveautes", href: "#" },
    ],
  },
  atelier: {
    title: "L'ATELIER",
    links: [
      { label: "Notre histoire", href: "#" },
      { label: "Savoir-faire", href: "#" },
      { label: "Materiaux", href: "#" },
    ],
  },
  aide: {
    title: "AIDE",
    links: [
      { label: "Livraison & paiement", href: "#" },
      { label: "Echanges & retours", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  contact: {
    title: "CONTACT",
    links: [
      { label: "WhatsApp", href: "https://wa.me/212600000000" },
      { label: "hello@khaire.ma", href: "mailto:hello@khaire.ma" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-[#faf9f7] border-t border-[#e5e0d8]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl tracking-wide text-[#1a1a1a]">KHAIRE</span>
            </Link>
            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-xs mb-8">
              Jabadors, caftans et vetements marocains traditionnels, faits main au Maroc.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a href="https://instagram.com/khaire" className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </a>
              
              {/* TikTok */}
              <a href="https://tiktok.com/@khaire" className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://facebook.com/khaire" className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* WhatsApp */}
              <a href="https://wa.me/212600000000" className="text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-[11px] tracking-[0.15em] text-[#6b6b6b] mb-5">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#1a1a1a] hover:text-[#3d5a45] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#e5e0d8] text-center">
          <p className="text-sm text-[#6b6b6b]">
            &copy; {new Date().getFullYear()} Khaire. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
