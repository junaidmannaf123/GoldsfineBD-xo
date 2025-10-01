import { Award, Shield, Users, Globe } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Expertise",
    description:
      "Goldsfine International Ltd. has a deep understanding and expertise in the paper and packaging industry. We have many years of experience in their fields. We act as a solution provider with high technical and commercial expertise on our product portfolio.",
  },
  {
    icon: Shield,
    title: "Commitment to Trust",
    description:
      "We work as a long term and loyal partner that promotes our customers' interests and values. We are committed to providing excellence for our suppliers and customers alike.",
  },
  {
    icon: Users,
    title: "Dedicated to Service",
    description:
      "We take immense pride in delighting our customers with an excellent service experience. By working with Goldsfine International Ltd., you can be assured that we will be fully resolved to your satisfaction both before and after the sale.",
  },
  {
    icon: Globe,
    title: "Our Business Activities",
    description:
      "Goldsfine International Ltd. represents some of the leading paper and pulp mills and suppliers of the world. We have a strong presence in the markets of Bangladesh, India, Pakistan, Taiwan, Korea, Australia, Canada, America, Europe etc. for facilitating our international business operations.",
  },
]

export function WhyBest() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Why We Are the Best in This Area?</h2>
          <div className="w-24 h-1 bg-golden mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 hover:border-golden transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="bg-golden p-3 rounded-lg shrink-0">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
