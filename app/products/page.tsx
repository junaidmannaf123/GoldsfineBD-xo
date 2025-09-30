import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Package, Box, FileText, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const products = [
    {
      name: "Corrugated Boxes",
      description:
        "High-strength corrugated boxes for shipping and storage. Available in various sizes and custom printing options.",
      icon: Box,
      features: ["Custom sizes", "Printed designs", "Eco-friendly", "Bulk orders"],
      image: "/corrugated-cardboard-boxes-stacked.jpg",
    },
    {
      name: "Paper Bags",
      description:
        "Durable paper bags for retail and grocery use. Made from recycled materials with reinforced handles.",
      icon: ShoppingBag,
      features: ["Recyclable", "Strong handles", "Custom branding", "Various sizes"],
      image: "/brown-paper-shopping-bags.jpg",
    },
    {
      name: "Kraft Paper",
      description:
        "Premium quality kraft paper rolls for packaging and wrapping. Available in different weights and finishes.",
      icon: FileText,
      features: ["Multiple weights", "Natural finish", "Food grade", "Bulk supply"],
      image: "/kraft-paper-rolls-brown.jpg",
    },
    {
      name: "Food Packaging",
      description:
        "Food-safe packaging solutions including boxes, containers, and wrapping materials for the food industry.",
      icon: Package,
      features: ["Food grade", "Leak resistant", "Microwave safe", "Custom printing"],
      image: "/food-packaging-boxes-containers.jpg",
    },
    {
      name: "Carton Boxes",
      description: "Sturdy carton boxes for product packaging and display. Ideal for retail and e-commerce businesses.",
      icon: Box,
      features: ["Display ready", "Easy assembly", "Custom design", "Protective"],
      image: "/white-carton-product-boxes.jpg",
    },
    {
      name: "Specialty Papers",
      description:
        "Wide range of specialty papers including tissue, wrapping, and decorative papers for various applications.",
      icon: FileText,
      features: ["Various colors", "Custom patterns", "Premium quality", "Bulk orders"],
      image: "/colorful-specialty-paper-sheets.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Products</h1>
          <p className="text-xl text-red-50 max-w-3xl text-pretty">
            Comprehensive range of paper and packaging solutions designed to meet your business needs with quality and
            reliability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-neutral-100">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 p-2 rounded-lg">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-neutral-900">{product.name}</h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 text-neutral-700">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-neutral-600 flex items-center gap-1">
                          <span className="text-red-600">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Request Quote</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">
              Custom Solutions Available
              <div className="h-1 w-20 bg-red-600 mt-2 mx-auto"></div>
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              We understand that every business has unique packaging needs. Our team can work with you to create custom
              solutions tailored to your specific requirements, including custom sizes, designs, and printing options.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Discuss Your Requirements
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
