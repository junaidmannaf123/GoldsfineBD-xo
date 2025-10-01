import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Download, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocumentsPage() {
  const documents = [
    {
      category: "Certifications",
      items: [
        { name: "ISO 9001:2015 Certificate", icon: Award, size: "2.4 MB" },
        { name: "ISO 14001:2015 Certificate", icon: Award, size: "1.8 MB" },
        { name: "HACCP Certification", icon: Shield, size: "1.5 MB" },
        { name: "FSC Certification", icon: Shield, size: "2.1 MB" },
      ],
    },
    {
      category: "Company Documents",
      items: [
        { name: "Company Profile", icon: FileText, size: "5.2 MB" },
        { name: "Trade License", icon: FileText, size: "1.2 MB" },
        { name: "TIN Certificate", icon: FileText, size: "890 KB" },
        { name: "VAT Registration", icon: FileText, size: "1.1 MB" },
      ],
    },
    {
      category: "Product Catalogs",
      items: [
        { name: "Paper Products Catalog 2024", icon: FileText, size: "8.5 MB" },
        { name: "Packaging Solutions Catalog", icon: FileText, size: "7.2 MB" },
        { name: "Custom Printing Brochure", icon: FileText, size: "3.4 MB" },
        { name: "Technical Specifications", icon: FileText, size: "2.8 MB" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-golden to-golden-dark text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Documents & Certifications</h1>
          <p className="text-xl text-golden-50 max-w-3xl text-pretty">
            Access our company documents, certifications, and product catalogs. All documents are available for
            download.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {documents.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-neutral-900">
                {section.category}
                <div className="h-1 w-20 bg-golden mt-2"></div>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {section.items.map((doc, docIdx) => (
                  <div
                    key={docIdx}
                    className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="bg-golden-50 p-3 rounded-lg">
                          <doc.icon className="h-6 w-6 text-golden" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 mb-1">{doc.name}</h3>
                          <p className="text-sm text-neutral-500">PDF • {doc.size}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-golden text-golden hover:bg-golden-50 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900">Need Additional Documents?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            If you require any additional documentation or have specific questions about our certifications, please
            contact our team.
          </p>
          <Button size="lg" className="bg-golden hover:bg-golden-dark">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
