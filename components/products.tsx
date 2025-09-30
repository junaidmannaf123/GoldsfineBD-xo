import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  { name: "Medium Paper", image: "/medium-paper-rolls-packaging.jpg" },
  { name: "Liner Paper", image: "/liner-paper-sheets-industrial.jpg" },
  { name: "Duplex Board", image: "/duplex-board-cardboard-sheets.jpg" },
  { name: "Art Card/Paper", image: "/art-card-glossy-paper.jpg" },
  { name: "Folding Box BD", image: "/folding-box-cardboard-packaging.jpg" },
  { name: "Newsprint Paper", image: "/newsprint-paper-rolls.jpg" },
  { name: "Tapioca Starch", image: "/tapioca-starch-powder-bag.jpg" },
  { name: "Waste Paper", image: "/waste-paper-recycling-bales.jpg" },
  { name: "Pulp Paper", image: "/pulp-paper-raw-material.jpg" },
]

export function Products() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our All Products</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-64 bg-neutral-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{product.name}</h3>
                <Button className="bg-red-600 hover:bg-red-700 w-full">Product Catalog</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
