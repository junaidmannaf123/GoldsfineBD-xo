import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About Goldsfine International</h1>
          <p className="text-xl text-red-50 max-w-3xl text-pretty">
            Leading the paper and packaging industry with quality, innovation, and commitment to excellence since our
            inception.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">
                Our Story
                <div className="h-1 w-20 bg-red-600 mt-2"></div>
              </h2>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Goldsfine International Ltd. has established itself as a premier manufacturer and supplier of
                high-quality paper and packaging products. With years of experience in the industry, we have built a
                reputation for excellence, reliability, and innovation.
              </p>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Our state-of-the-art manufacturing facilities and commitment to quality control ensure that every
                product meets the highest international standards. We serve diverse industries including food and
                beverage, pharmaceuticals, retail, and more.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                At Goldsfine, we believe in sustainable practices and continuously invest in eco-friendly technologies
                to minimize our environmental impact while delivering superior products to our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 p-6 rounded-lg">
                <Building2 className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-neutral-900">15+</h3>
                <p className="text-neutral-600">Years Experience</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-neutral-900">500+</h3>
                <p className="text-neutral-600">Happy Clients</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <Target className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-neutral-900">100%</h3>
                <p className="text-neutral-600">Quality Assured</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <Award className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-neutral-900">ISO</h3>
                <p className="text-neutral-600">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                Our Mission
                <div className="h-1 w-16 bg-red-600 mt-2"></div>
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                To provide innovative, high-quality paper and packaging solutions that exceed customer expectations
                while maintaining sustainable and environmentally responsible practices. We strive to be the preferred
                partner for businesses seeking reliable packaging solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-neutral-900">
                Our Vision
                <div className="h-1 w-16 bg-red-600 mt-2"></div>
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                To become the leading paper and packaging manufacturer in the region, recognized for our commitment to
                quality, innovation, and customer satisfaction. We aim to set industry standards through continuous
                improvement and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900">
            Our Core Values
            <div className="h-1 w-20 bg-red-600 mt-2 mx-auto"></div>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">Q</span>
              </div>
              <h3 className="font-bold mb-2 text-neutral-900">Quality</h3>
              <p className="text-sm text-neutral-600">Uncompromising standards in every product</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">I</span>
              </div>
              <h3 className="font-bold mb-2 text-neutral-900">Innovation</h3>
              <p className="text-sm text-neutral-600">Continuous improvement and advancement</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">S</span>
              </div>
              <h3 className="font-bold mb-2 text-neutral-900">Sustainability</h3>
              <p className="text-sm text-neutral-600">Eco-friendly practices and materials</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">T</span>
              </div>
              <h3 className="font-bold mb-2 text-neutral-900">Trust</h3>
              <p className="text-sm text-neutral-600">Building lasting relationships</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
