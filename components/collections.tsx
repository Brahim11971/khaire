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
    <section id="collections" className="py-12 lg:py-16 bg-[#faf9f7] border-b border-[#e5e0d8]">
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-[10px] tracking-[0.2em] text-[#6b6b6b] block mb-1.5 uppercase">Collections</span>
            <h2 className="text-xl lg:text-2xl font-light text-[#1a1a1a]">Nos pieces en edition limitee</h2>
          </div>
          <Link
            href="#boutique"
            className="hidden sm:inline-flex items-center gap-2 text-xs tracking-[0.1em] text-[#1a1a1a] hover:text-[#3d5a45] transition-colors group"
          >
            VOIR TOUTE LA COLLECTION
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {products.map((product) => (
            <article key={product.id} className="group">
              <Link href="#" className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-md mb-3 bg-[#f5f1eb]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-medium text-[#1a1a1a]">{product.name}</h3>
                <p className="text-[10px] text-[#6b6b6b] mb-0.5">{product.edition}</p>
                <p className="text-sm">
                  <span className="text-[#c4a574] font-medium">{product.price}</span>
                  <span className="text-[#6b6b6b] ml-0.5 text-xs">dh</span>
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
