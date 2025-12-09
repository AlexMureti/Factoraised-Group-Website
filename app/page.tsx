import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero, WhyUs } from "@/components/hero"
import { FeaturedCars } from "@/components/featured-cars"
import { CTASection } from "@/components/cta-section"
import { Testimonials } from "@/components/testimonials"
import { WhatsAppSticky } from "@/components/whatsapp-sticky"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <FeaturedCars />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  )
}
