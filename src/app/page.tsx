import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { WhyPinterest } from "@/components/landing/why-pinterest"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Audience } from "@/components/landing/audience"
import { UseCases } from "@/components/landing/use-cases"
import { ProductPlacement } from "@/components/landing/product-placement"
import { Formats } from "@/components/landing/formats"
import { Proof } from "@/components/landing/proof"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyPinterest />
        <HowItWorks />
        <Audience />
        <UseCases />
        <ProductPlacement />
        <Formats />
        <Proof />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
