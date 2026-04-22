"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"

const navLinks = [
  { href: "#boutique", label: "BOUTIQUE" },
  { href: "#atelier", label: "L'ATELIER" },
  { href: "#collections", label: "COLLECTIONS" },
  { href: "#journal", label: "JOURNAL" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left: Language Selector */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1 text-sm">
              <span className="font-medium text-[#1a1a1a]">FR</span>
              <svg className="w-3 h-3 text-[#6b6b6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 -ml-2 text-[#1a1a1a]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: Logo + Nav */}
          <div className="flex items-center gap-10">
            <Link href="/" className="lg:mr-6">
              <Image
                src="/assets/images/logo-wordmark.png"
                alt="Khaire"
                width={120}
                height={32}
                className="h-7 lg:h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wider text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/212600000000"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5f1eb] transition-colors"
              aria-label="Contacter sur WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3d5a45]" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            
            {/* Shopping Bag */}
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#f5f1eb] transition-colors"
              aria-label="Panier (0)"
            >
              <ShoppingBag size={20} className="text-[#1a1a1a]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#faf9f7] border-t border-[#e5e0d8]">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg tracking-wider text-[#1a1a1a] hover:text-[#3d5a45] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#e5e0d8] flex items-center gap-4">
              <Link href="/" className="text-sm font-medium text-[#1a1a1a]">
                FR
              </Link>
              <Link href="/ar" className="text-sm text-[#6b6b6b] hover:text-[#1a1a1a]">
                AR
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
