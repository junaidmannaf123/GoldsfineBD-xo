import Image from "next/image"

export function Certificates() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Certificate</h2>
          <div className="w-24 h-1 bg-golden mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Image
              src="/business-certificate-dhaka-chamber-of-commerce.jpg"
              alt="Dhaka Chamber of Commerce Certificate"
              width={800}
              height={600}
              className="w-full h-auto rounded"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-neutral-100 rounded-lg p-4 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <Image
                  src={`/business-certificate-.jpg?height=150&width=200&query=business certificate ${i}`}
                  alt={`Certificate ${i}`}
                  width={200}
                  height={150}
                  className="w-full h-auto rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
