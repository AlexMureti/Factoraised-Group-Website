import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react"

const WHATSAPP_NUMBER = "254700000000"
const PHONE_NUMBER = "+254 700 000 000"

export function CTASection() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Factoraised Group, I'd like to visit your showroom. What are your opening hours?")}`

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/cars/car-7.jpeg" alt="Visit our showroom" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F11] via-[#0D0F11]/95 to-[#0D0F11]/80" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-[#0FB4FF] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Visit Us Today
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Find Your
              <br />
              <span className="text-[#0FB4FF]">Perfect Car?</span>
            </h2>
            <p className="text-[#C0C4C7] text-lg mb-8 max-w-xl leading-relaxed">
              Visit our showroom in Langata or reach out via WhatsApp for quick answers. We are here to help you find
              the right car at the right price.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-bold text-base px-8 py-6 shadow-lg shadow-[#0FB4FF]/25 transition-all hover:shadow-[#0FB4FF]/40 hover:scale-105"
                asChild
              >
                <Link href="/cars">
                  Browse Inventory
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-bold text-base px-8 py-6 shadow-lg transition-all hover:scale-105"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm font-semibold text-base px-8 py-6 transition-all hover:scale-105"
                asChild
              >
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid gap-4">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0FB4FF]/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-[#0FB4FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Our Location</h3>
                  <p className="text-[#C0C4C7]">
                    Langata Road, Carnivore Area
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0FB4FF]/20 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-[#0FB4FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Opening Hours</h3>
                  <p className="text-[#C0C4C7]">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">WhatsApp Support</h3>
                  <p className="text-[#C0C4C7]">
                    Get instant responses 24/7
                    <br />
                    <a href={whatsappLink} className="text-[#25D366] hover:underline">
                      Chat with us now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
