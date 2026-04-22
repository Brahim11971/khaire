import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Le Jabador Khaire",
    edition: "Edition tres limitee",
    price: 1199,
    image: "/assets/images/hero.jpg",
  },
  {
    id: 2,
    name: "Le Jabador Khaire",
    edition: "Edition tres limitee",
    price: 1199,
    image: "/assets/images/gallery-1.jpg",
  },
  {
    id: 3,
    name: "Le Jabador Khaire",
    edition: "Edition tres limitee",
    price: 1199,
    image: "/assets/images/gallery-2.jpg",
  },
  {
    id: 4,
    name: "Le Jabador Khaire",
    edition: "Edition tres limitee",
    price: 1199,
    image: "/assets/images/gallery-3.jpg",
  },
]

export function Collections() {
  return (
    <section id="collections" className="py-16 lg:py-24 bg-[#faf9f7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <span className="text-[11px] tracking-[0.2em] text-[#6b6b6b] block mb-4 uppercase">Collections</span>
            <h2 className="text-3xl lg:text-4xl font-light text-[#1a1a1a]">Nos pieces en edition limitee</h2>
          </div>
          <Link
            href="#boutique"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[#1a1a1a] hover:text-[#3d5a45] transition-colors group font-medium"
          >
            VOIR TOUTE LA COLLECTION
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product) => (
            <article key={product.id} className="group">
              <Link href="#" className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-[#f5f1eb]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-light text-[#1a1a1a] mb-1">{product.name}</h3>
                <p className="text-xs text-[#6b6b6b] mb-2">{product.edition}</p>
                <p className="text-base">
                  <span className="text-[#c4a574] font-medium">{product.price}</span>
                  <span className="text-[#6b6b6b] ml-1 text-sm">dh</span>
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
