"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, ShoppingBag } from "lucide-react"

const navLinks = [
  { href: "#boutique", label: "BOUTIQUE" },
  { href: "#atelier", label: "L'ATELIER" },
  { href: "#collections", label: "COLLECTIONS" },
  { href: "#journal", label: "JOURNAL" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Language Selector - Desktop */}
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted">
            <span className="font-medium text-foreground">FR</span>
            <span>/</span>
            <Link href="/ar" className="hover:text-foreground transition-colors">
              AR
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -ml-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:mx-auto">
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
                className="text-sm tracking-wider text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/212600000000"
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream transition-colors"
              aria-label="Contacter sur WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={20} className="text-forest" />
            </a>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream transition-colors"
              aria-label="Panier (0)"
            >
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg tracking-wider text-foreground hover:text-forest transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex items-center gap-4">
              <Link href="/" className="text-sm font-medium text-foreground">
                FR
              </Link>
              <Link href="/ar" className="text-sm text-muted hover:text-foreground">
                AR
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
