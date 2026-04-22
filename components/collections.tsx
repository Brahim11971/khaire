import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Le Jabador Khaire",
    edition: "Édition très limitée",
    price: 1199,
    image: "/assets/images/hero.jpg",
  },
  {
    id: 2,
    name: "Le Jabador Khaire",
    edition: "Édition très limitée",
    price: 1199,
    image: "/assets/images/gallery-1.jpg",
  },
  {
    id: 3,
    name: "Le Jabador Khaire",
    edition: "Édition très limitée",
    price: 1199,
    image: "/assets/images/gallery-2.jpg",
  },
  {
    id: 4,
    name: "Le Jabador Khaire",
    edition: "Édition très limitée",
    price: 1199,
    image: "/assets/images/gallery-3.jpg",
  },
]

export function Collections() {
  return (
    <section id="collections" className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.2em] text-[#6b6b6b] block mb-2 uppercase">Collections</span>
            <h2 className="text-2xl lg:text-3xl font-light text-[#1a1a1a]">Nos pièces en édition limitée</h2>
          </div>
          <Link
            href="#boutique"
            className="hidden sm:inline-flex items-center gap-2 text-sm tracking-wider text-[#1a1a1a] hover:text-[#3d5a45] transition-colors group"
          >
            VOIR TOUTE LA COLLECTION
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <article key={product.id} className="group">
              <Link href="#" className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-[#f5f1eb]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-medium text-[#1a1a1a]">{product.name}</h3>
                <p className="text-xs text-[#6b6b6b] mb-1">{product.edition}</p>
                <p className="text-sm">
                  <span className="text-[#c4a574] font-medium">{product.price}</span>
                  <span className="text-[#6b6b6b] ml-1">dh</span>
                </p>
              </Link>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="#boutique"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-[#1a1a1a] hover:text-[#3d5a45] transition-colors"
          >
            VOIR TOUTE LA COLLECTION
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
