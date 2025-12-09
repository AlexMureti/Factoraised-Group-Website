"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, BadgeCheck, Banknote, RefreshCw, Headphones, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

const heroImages = [
  "/cars/lexus-lc500-front.jpg",
  "/cars/lexus-lc500-side.jpg",
  "/cars/mazda-cx5-front.jpeg",
  "/cars/peugeot-3008-front.jpeg",
  "/cars/peugeot-3008-angle.jpg",
  "/cars/peugeot-3008-side.jpg",
  "/cars/mitsubishi-asx-black.jpeg",
  "/cars/mazda-cx5-rear.jpeg",
  "/cars/mazda-cx5-interior-1.jpeg",
]

const WHATSAPP_NUMBER = "254762822207"

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Factoraised Group, I'm interested in your cars. Can you help me find what I'm looking for?`,
  )}`

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={img || "/placeholder.svg"}
            alt="Premium car at Factoraised Group showroom"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F11] via-[#0D0F11]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11] via-transparent to-[#0D0F11]/30" />

      {/* Animated Lines Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[2px] bg-gradient-to-l from-[#0FB4FF]/30 to-transparent animate-pulse" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[1px] bg-gradient-to-l from-[#0FB4FF]/20 to-transparent animate-pulse" />
        <div className="absolute bottom-1/3 right-20 w-[500px] h-[1px] bg-gradient-to-l from-[#0FB4FF]/25 to-transparent animate-pulse" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-20">
        <div
          className={`max-w-2xl transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0FB4FF]/10 border border-[#0FB4FF]/30 mb-8 backdrop-blur-sm animate-pulse">
            <Shield className="h-4 w-4 text-[#0FB4FF]" />
            <span className="text-sm text-[#0FB4FF] font-medium">Verified Inspection on Every Car</span>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance">
            Trusted Cars.
            <br />
            <span className="text-[#0FB4FF] relative">
              Trusted Service.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 6" stroke="#0FB4FF" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#C0C4C7] mb-10 leading-relaxed max-w-xl">
            Quality-checked cars, transparent pricing, and flexible financing for Kenyan buyers. Find your perfect car
            today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-bold text-lg px-8 py-6 shadow-lg shadow-[#0FB4FF]/25 transition-all hover:shadow-[#0FB4FF]/40 hover:scale-105 group"
              asChild
            >
              <Link href="/cars">
                Browse Inventory
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-lg px-8 py-6 transition-all hover:scale-105 group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Inquire Now
              </a>
            </Button>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap gap-6 text-sm text-[#6F7377]">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-2 h-2 bg-[#0FB4FF] rounded-full animate-pulse" />
              No hidden fees
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-2 h-2 bg-[#0FB4FF] rounded-full animate-pulse" />
              Trade-ins accepted
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-2 h-2 bg-[#0FB4FF] rounded-full animate-pulse" />
              Open 24 Hours
            </span>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentImage ? "bg-[#0FB4FF] w-12" : "bg-white/30 w-6 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-[#6F7377] text-sm">
        <span className="rotate-90 origin-center mb-6">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#0FB4FF] to-transparent animate-pulse" />
      </div>
    </section>
  )
}

export function WhyUs() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Verified Inspections",
      description: "Every car comes with a detailed inspection report you can trust.",
    },
    {
      icon: Banknote,
      title: "Transparent Pricing",
      description: "Inquire directly for personalized quotes with no hidden fees.",
    },
    {
      icon: Shield,
      title: "Flexible Finance",
      description: "Work with local banks and SACCOs for affordable monthly payments.",
    },
    {
      icon: RefreshCw,
      title: "Easy Trade-Ins",
      description: "Get a fair value for your current car towards your next purchase.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Fast, helpful support at our Langata showroom and via WhatsApp.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#0D0F11] to-[#131619] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0FB4FF]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-[#0FB4FF] font-semibold text-sm tracking-wider uppercase mb-4 block">Our Promise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Factoraised Group</h2>
          <p className="text-[#6F7377] max-w-2xl mx-auto text-lg">
            We make buying your next car simple, transparent, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-b from-[#2A2D30]/80 to-[#2A2D30]/40 border border-[#3a3d40] hover:border-[#0FB4FF]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#0FB4FF]/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0FB4FF]/20 to-[#0FB4FF]/5 flex items-center justify-center mb-6 group-hover:from-[#0FB4FF]/30 group-hover:to-[#0FB4FF]/10 transition-all group-hover:scale-110">
                <feature.icon className="h-7 w-7 text-[#0FB4FF]" />
              </div>
              <h3 className="font-bold text-white text-lg mb-3 group-hover:text-[#0FB4FF] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#6F7377] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
