import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[600px] bg-black">
      <div className="absolute inset-0">
        <Image
          src="/business-award-ceremony-professional.jpg"
          alt="Goldsfine International Award Ceremony"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <div className="w-20 h-1 bg-[#d4af37] mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Leading Paper & <span className="golden-text">Packaging Solutions</span>
          </h1>
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
            Your trusted partner for high-quality paper products and international trade excellence since establishment
          </p>
          <div className="flex gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-bold px-8 py-6 text-lg">
                View Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#d4af37] text-white hover:bg-[#d4af37] hover:text-black font-bold px-8 py-6 text-lg bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
