import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SisterConcernPage() {
  const companies = [
    {
      name: "Goldsfine Packaging Solutions",
      description:
        "Specialized in innovative packaging design and manufacturing for the pharmaceutical and healthcare industries. Offering tamper-proof and child-resistant packaging solutions.",
      industry: "Pharmaceutical Packaging",
      established: "2015",
      website: "www.goldsfinepackaging.com",
      services: ["Blister Packaging", "Strip Packaging", "Bottle Packaging", "Custom Solutions"],
    },
    {
      name: "Goldsfine Paper Mills",
      description:
        "State-of-the-art paper manufacturing facility producing high-quality kraft paper, tissue paper, and specialty papers for various industrial applications.",
      industry: "Paper Manufacturing",
      established: "2012",
      website: "www.goldsfinepaper.com",
      services: ["Kraft Paper Production", "Tissue Manufacturing", "Specialty Papers", "Custom Orders"],
    },
    {
      name: "Goldsfine Printing Press",
      description:
        "Modern printing facility offering offset and digital printing services for packaging, labels, and promotional materials with advanced color management.",
      industry: "Commercial Printing",
      established: "2018",
      website: "www.goldsfineprinting.com",
      services: ["Offset Printing", "Digital Printing", "Label Printing", "Custom Design"],
    },
    {
      name: "Goldsfine Eco Solutions",
      description:
        "Dedicated to sustainable packaging alternatives, producing biodegradable and compostable packaging materials for environmentally conscious businesses.",
      industry: "Sustainable Packaging",
      established: "2020",
      website: "www.goldsfineeco.com",
      services: [
        "Biodegradable Packaging",
        "Compostable Materials",
        "Eco-friendly Design",
        "Sustainability Consulting",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-golden to-golden-dark text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Sister Concerns</h1>
          <p className="text-xl text-golden-50 max-w-3xl text-pretty">
            The Goldsfine Group comprises multiple specialized companies, each excelling in their respective domains
            while maintaining our commitment to quality and innovation.
          </p>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-golden-50 p-4 rounded-lg flex-shrink-0">
                    <Building2 className="h-10 w-10 text-golden" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-2">{company.name}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                          <span className="flex items-center gap-1">
                            <span className="font-semibold">Industry:</span> {company.industry}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="font-semibold">Est:</span> {company.established}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-golden text-golden hover:bg-golden-50 bg-transparent"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </Button>
                    </div>
                    <p className="text-neutral-700 mb-6 leading-relaxed">{company.description}</p>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-3">Key Services:</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {company.services.map((service, sIdx) => (
                          <div key={sIdx} className="bg-neutral-50 px-4 py-2 rounded text-sm text-neutral-700">
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Strength */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900">
              Collective Strength
              <div className="h-1 w-20 bg-golden mt-2 mx-auto"></div>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <div className="text-3xl font-bold text-golden mb-2">1000+</div>
                <div className="text-neutral-600">Combined Employees</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <div className="text-3xl font-bold text-golden mb-2">5</div>
                <div className="text-neutral-600">Manufacturing Units</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm">
                <div className="text-3xl font-bold text-golden mb-2">2000+</div>
                <div className="text-neutral-600">Total Clients</div>
              </div>
            </div>
            <p className="text-center text-neutral-700 leading-relaxed">
              Together, our sister concerns form a comprehensive ecosystem of paper and packaging solutions, enabling us
              to serve clients across multiple industries with integrated services and unmatched expertise.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
