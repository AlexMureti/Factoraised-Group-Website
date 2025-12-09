"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "James Mwangi",
    location: "Westlands, Nairobi",
    text: "Bought my Mazda CX-5 from Factoraised Group. The inspection report was thorough and the price was fair. No surprises at all. The team was professional and made the entire process seamless.",
    rating: 5,
    car: "Mazda CX-5",
    image: "/cars/mazda-cx5-front.jpeg",
  },
  {
    name: "Grace Wanjiku",
    location: "Karen, Nairobi",
    text: "The financing process was smooth. They connected me with a SACCO and I drove away in my new Peugeot 3008 within a week. Highly professional service from start to finish.",
    rating: 5,
    car: "Peugeot 3008",
    image: "/cars/peugeot-3008-front.jpeg",
  },
  {
    name: "Peter Ochieng",
    location: "Kilimani, Nairobi",
    text: "Trade-in was hassle-free. Got a good value for my old car and upgraded to a newer Mitsubishi ASX. The WhatsApp support was incredibly responsive. Highly recommend Factoraised Group!",
    rating: 5,
    car: "Mitsubishi ASX",
    image: "/cars/mitsubishi-asx-black.jpeg",
  },
  {
    name: "Mary Njeri",
    location: "Lavington, Nairobi",
    text: "As a first-time car buyer, I was nervous about the process. The team at Factoraised guided me through every step. Got my dream Mitsubishi Pajero Sport at a price I could afford.",
    rating: 5,
    car: "Mitsubishi Pajero Sport",
    image: "/cars/car-8.jpeg",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#131619] to-[#0D0F11] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0FB4FF]/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0FB4FF]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-[#0FB4FF] font-semibold text-sm tracking-wider uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-[#6F7377] max-w-2xl mx-auto text-lg">
            Real feedback from real buyers who found their perfect car with us.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={testimonials[activeIndex].car}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#0FB4FF] rounded-full">
                <span className="text-[#0D0F11] font-semibold text-sm">{testimonials[activeIndex].car}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 bg-gradient-to-br from-[#2A2D30] to-[#1a1d20] rounded-2xl border border-[#3a3d40] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0FB4FF]/5 rounded-full blur-2xl" />
              <Quote className="h-12 w-12 text-[#0FB4FF]/30 mb-6" />
              <p className="text-[#E5E7EB] text-lg mb-6 leading-relaxed relative z-10">{`"${testimonials[activeIndex].text}"`}</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#0FB4FF] text-[#0FB4FF]" />
                ))}
              </div>
              <div>
                <p className="font-bold text-white text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-[#6F7377]">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="border-[#3a3d40] text-white hover:bg-[#2A2D30] hover:text-white bg-transparent rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setActiveIndex(index)
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-[#0FB4FF] w-8" : "bg-[#3a3d40] w-3 hover:bg-[#4a4d50]"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="border-[#3a3d40] text-white hover:bg-[#2A2D30] hover:text-white bg-transparent rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-300 overflow-hidden ${
                index === activeIndex
                  ? "bg-[#0FB4FF]/10 border-[#0FB4FF]/50 scale-105"
                  : "bg-[#2A2D30]/50 border-[#3a3d40] hover:border-[#0FB4FF]/30 hover:scale-102"
              }`}
              onClick={() => {
                setIsAutoPlaying(false)
                setActiveIndex(index)
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0FB4FF]/20 flex items-center justify-center">
                    <span className="text-[#0FB4FF] font-bold text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[#0FB4FF]">{testimonial.car}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
