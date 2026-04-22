import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Khaire — Jabador & Caftans Marocains Faits Main",
  description:
    "Khaire célèbre l'élégance du vêtement traditionnel marocain — caftan, jabador, takchita. Nous créons en petites séries, pour préserver le geste et la singularité de chaque vêtement.",
  keywords: [
    "khaire",
    "jabador",
    "caftan",
    "takchita",
    "marocain",
    "fait main",
    "artisanal",
    "broderie",
    "maroc",
  ],
  openGraph: {
    title: "Khaire — Jabador & Caftans Marocains Faits Main",
    description:
      "Pièces en édition limitée, faites main au Maroc. Broderie artisanale, matières précieuses.",
    images: ["/assets/images/og-image.jpg"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaire — Jabador & Caftans Marocains Faits Main",
    description:
      "Pièces en édition limitée, faites main au Maroc. Broderie artisanale, matières précieuses.",
    images: ["/assets/images/og-image.jpg"],
  },
  icons: {
    icon: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3d5a45",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
