import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppSticky } from "@/components/whatsapp-sticky"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Shield, Award, MapPin, Target, Eye, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "254700000000"

export default function AboutPage() {
  const stats = [
    { value: "500+", label: "Cars Sold" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "5+", label: "Years Experience" },
    { value: "24hr", label: "Response Time" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear pricing, honest inspections, and no hidden fees. What you see is what you get.",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "Every vehicle undergoes thorough inspection before listing. We only sell cars we would drive ourselves.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We are here to help you find the right car, not just any car.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/WhatsApp Image 2025-12-09 at 09.52.30.jpeg"
              alt="Factoraised Group showroom"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F11] via-[#0D0F11]/80 to-[#0D0F11]" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Factoraised Group</h1>
              <p className="text-xl text-[#C0C4C7] leading-relaxed">
                We are a trusted car dealership in Langata, Nairobi, committed to making car buying simple, transparent,
                and enjoyable for every Kenyan.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-[#2A2D30]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#0FB4FF] mb-1">{stat.value}</div>
                  <div className="text-[#6F7377]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-[#C0C4C7] leading-relaxed">
                  <p>
                    Factoraised Group was founded with a simple mission: to change how Kenyans buy cars. We saw an
                    industry full of uncertainty, hidden fees, and questionable practices. We knew there had to be a
                    better way.
                  </p>
                  <p>
                    Today, we are proud to be one of Nairobi's most trusted dealerships. Our approach is simple: inspect
                    every car thoroughly, price it fairly, and treat every customer with respect and honesty.
                  </p>
                  <p>
                    Located in Langata near the Carnivore area, our showroom welcomes buyers from across Kenya. Whether
                    you are looking for a family SUV, a reliable sedan, or a premium vehicle, we are here to help you
                    find the right car at the right price.
                  </p>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="./logo.png"
                  alt="Factoraised Group team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-[#2A2D30]/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-[#2A2D30] border-[#3a3d40]">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0FB4FF]/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-[#0FB4FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-[#C0C4C7]">
                    To provide quality vehicles at fair prices with complete transparency, making car ownership
                    accessible and stress-free for every Kenyan buyer.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#2A2D30] border-[#3a3d40]">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0FB4FF]/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-[#0FB4FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-[#C0C4C7]">
                    To be Kenya's most trusted car dealership, setting the standard for integrity, quality, and customer
                    service in the automotive industry.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0FB4FF]/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-[#0FB4FF]" />
                  </div>
                  <h3 className="font-semibold text-white text-xl mb-3">{value.title}</h3>
                  <p className="text-[#6F7377]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location CTA */}
        <section className="py-20 bg-gradient-to-br from-[#2A2D30] to-[#0D0F11]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <MapPin className="h-12 w-12 text-[#0FB4FF] mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Visit Our Showroom</h2>
              <p className="text-[#C0C4C7] mb-6">
                Langata Road, Carnivore Area, Nairobi
                <br />
                Open Monday to Saturday, 9:00 AM to 6:00 PM
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold" asChild>
                  <Link href="/cars">Browse Our Cars</Link>
                </Button>
                <Button className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold" asChild>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to visit your showroom. What are your directions?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  )
}
