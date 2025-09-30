import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[500px] bg-neutral-100">
      <div className="absolute inset-0">
        <Image
          src="/business-award-ceremony-professional.jpg"
          alt="Goldsfine International Award Ceremony"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Leading Paper & Packaging Solutions</h1>
          <p className="text-xl text-neutral-200 mb-8 text-pretty">
            Your trusted partner for high-quality paper products and international trade excellence
          </p>
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded font-medium transition-colors">
              View Products
            </button>
            <button className="bg-white hover:bg-neutral-100 text-neutral-900 px-8 py-3 rounded font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
