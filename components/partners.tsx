import Image from "next/image"

const partners = ["WestRock", "Asia Paper MFG Co Ltd", "Cheng Loong Corp", "Kapstone", "Long Chen Paper"]

export function Partners() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Valuable Partners</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <Image
                src={`/.jpg?height=80&width=160&query=${partner} logo`}
                alt={partner}
                width={160}
                height={80}
                className="w-full h-auto max-h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
