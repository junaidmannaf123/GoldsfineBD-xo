import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyBest } from "@/components/why-best"
import { Products } from "@/components/products"
import { Certificates } from "@/components/certificates"
import { Partners } from "@/components/partners"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f3]">
      <Header />
      <Hero />
      <WhyBest />
      <Products />
      <Certificates />
      <Partners />
      <Footer />
    </main>
  )
}
