"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Crown, MessageCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InventoryCard } from "@/components/inventory-card"
import { inventory } from "@/lib/inventory"
import { useState, useEffect } from "react"

const WHATSAPP_NUMBER = "254700000000"

export function FeaturedCars() {
  const featuredIds = [102, 103, 101, 105] // Mazda CX-5, Peugeot 3008, Mitsubishi ASX, Pajero Sport
  const featuredCars = inventory.filter((car) => featuredIds.includes(car.id))
  const lexusLC = inventory.find((car) => car.id === 100)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Factoraised Group, I'm interested in the Lexus LC 500. Please share more details.`,
  )}`

  return (
    <section className="py-24 bg-[#0D0F11] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0FB4FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0FB4FF]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {lexusLC && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-6">
              <Crown className="h-5 w-5 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm tracking-wider uppercase">Premium Spotlight</span>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1a1c1e] to-[#2A2D30] border border-[#3a3d40]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src={lexusLC.images[0] || "/placeholder.svg"}
                    alt={`${lexusLC.make} ${lexusLC.model}`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1c1e]/80 md:hidden" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-amber-400 text-[#0D0F11] text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    {lexusLC.highlight}
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-[#6F7377] text-sm mb-2">{lexusLC.category}</div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {lexusLC.make} <span className="text-[#0FB4FF]">{lexusLC.model}</span>
                  </h3>
                  <p className="text-[#9A9EA3] text-lg mb-6 leading-relaxed">{lexusLC.description}</p>

                  {/* Key Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-3 rounded-xl bg-[#0D0F11]/50">
                      <div className="text-[#0FB4FF] font-bold text-lg">{lexusLC.engineSize}</div>
                      <div className="text-[#6F7377] text-xs">Engine</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-[#0D0F11]/50">
                      <div className="text-[#0FB4FF] font-bold text-lg">{lexusLC.mileage.toLocaleString()} km</div>
                      <div className="text-[#6F7377] text-xs">Mileage</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-[#0D0F11]/50">
                      <div className="text-[#0FB4FF] font-bold text-lg">{lexusLC.transmission}</div>
                      <div className="text-[#6F7377] text-xs">Transmission</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold flex-1 py-6" asChild>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Inquire Now
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#0FB4FF]/30 text-[#0FB4FF] hover:bg-[#0FB4FF]/10 bg-transparent font-semibold flex-1 py-6"
                      asChild
                    >
                      <Link href={`/cars/${lexusLC.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Vehicles Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-[#0FB4FF] animate-pulse" />
              <span className="text-[#0FB4FF] font-semibold text-sm tracking-wider uppercase">Top Picks</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Featured Vehicles</h2>
            <p className="text-[#6F7377] text-lg">Hand-picked quality cars ready for your inspection</p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="border-[#0FB4FF]/30 text-[#0FB4FF] hover:bg-[#0FB4FF]/10 hover:text-[#0FB4FF] bg-transparent font-semibold group"
            asChild
          >
            <Link href="/cars">
              View All Cars
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Featured Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <InventoryCard car={car} />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Cars Sold" },
            { value: "98%", label: "Customer Satisfaction" },
            { value: "5+", label: "Years Experience" },
            { value: "24/7", label: "WhatsApp Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-[#2A2D30]/50 border border-[#3a3d40] hover:border-[#0FB4FF]/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0FB4FF] mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[#6F7377] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
