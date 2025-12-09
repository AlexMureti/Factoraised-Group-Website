"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppSticky } from "@/components/whatsapp-sticky"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, CheckCircle, Upload, Car, Banknote, Clock, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "254700000000"

export default function TradeInPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [images, setImages] = useState<File[]>([])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).slice(0, 5 - images.length)
      setImages((prev) => [...prev, ...newFiles].slice(0, 5))
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const benefits = [
    {
      icon: Banknote,
      title: "Fair Valuation",
      description: "Get a competitive offer based on current market rates and your car's condition.",
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Receive your trade-in estimate within 24 hours of submission.",
    },
    {
      icon: Car,
      title: "Upgrade Easily",
      description: "Apply your trade-in value directly to your next car purchase.",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0D0F11]">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#0FB4FF]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-[#0FB4FF]" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Trade-In Request Received</h1>
            <p className="text-[#6F7377] mb-8">
              Thank you for your trade-in submission. Our team will evaluate your vehicle and contact you with an offer
              within 24 hours.
            </p>
            <Button className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold" asChild>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I just submitted a trade-in request and would like to follow up.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Quick Response
              </a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-[#2A2D30]/50 to-[#0D0F11]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0FB4FF]/10 border border-[#0FB4FF]/20 mb-6">
                <RefreshCw className="h-4 w-4 text-[#0FB4FF]" />
                <span className="text-sm text-[#0FB4FF] font-medium">Easy Trade-In Process</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Trade In Your Current Car</h1>
              <p className="text-lg text-[#C0C4C7]">
                Get a fair value for your current vehicle and apply it towards your next purchase. Simple, transparent,
                and hassle-free.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-[#2A2D30]/50 border border-[#3a3d40]">
                  <div className="w-12 h-12 rounded-lg bg-[#0FB4FF]/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-[#0FB4FF]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[#6F7377]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto bg-[#2A2D30] border-[#3a3d40]">
              <CardHeader>
                <CardTitle className="text-white">Tell Us About Your Car</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-[#C0C4C7]">Your Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#C0C4C7]">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          required
                          className="bg-[#0D0F11] border-[#3a3d40] text-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#C0C4C7]">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          className="bg-[#0D0F11] border-[#3a3d40] text-white"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-[#C0C4C7]">Vehicle Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="make" className="text-[#C0C4C7]">
                          Make
                        </Label>
                        <Input
                          id="make"
                          required
                          className="bg-[#0D0F11] border-[#3a3d40] text-white"
                          placeholder="Toyota"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="model" className="text-[#C0C4C7]">
                          Model
                        </Label>
                        <Input
                          id="model"
                          required
                          className="bg-[#0D0F11] border-[#3a3d40] text-white"
                          placeholder="Corolla"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="year" className="text-[#C0C4C7]">
                          Year
                        </Label>
                        <Select>
                          <SelectTrigger className="bg-[#0D0F11] border-[#3a3d40] text-white">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#2A2D30] border-[#3a3d40] max-h-48">
                            {Array.from({ length: 15 }, (_, i) => 2025 - i).map((year) => (
                              <SelectItem key={year} value={year.toString()} className="text-white">
                                {year}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mileage" className="text-[#C0C4C7]">
                          Mileage (km)
                        </Label>
                        <Input
                          id="mileage"
                          type="number"
                          required
                          className="bg-[#0D0F11] border-[#3a3d40] text-white"
                          placeholder="80000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registration" className="text-[#C0C4C7]">
                        Registration Number
                      </Label>
                      <Input
                        id="registration"
                        className="bg-[#0D0F11] border-[#3a3d40] text-white"
                        placeholder="KCA 123A"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="condition" className="text-[#C0C4C7]">
                        Overall Condition
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-[#0D0F11] border-[#3a3d40] text-white">
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
                          <SelectItem value="excellent" className="text-white">
                            Excellent - Like new
                          </SelectItem>
                          <SelectItem value="good" className="text-white">
                            Good - Minor wear
                          </SelectItem>
                          <SelectItem value="fair" className="text-white">
                            Fair - Some issues
                          </SelectItem>
                          <SelectItem value="poor" className="text-white">
                            Poor - Needs work
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Photos */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-[#C0C4C7]">Photos (Optional, max 5)</h3>
                    <div className="border-2 border-dashed border-[#3a3d40] rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-[#6F7377] mx-auto mb-2" />
                      <p className="text-[#6F7377] text-sm mb-2">
                        {images.length === 0 ? "Upload photos of your vehicle" : `${images.length}/5 photos selected`}
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                        id="photos"
                        disabled={images.length >= 5}
                      />
                      <Label
                        htmlFor="photos"
                        className="inline-block px-4 py-2 bg-[#0D0F11] text-[#C0C4C7] rounded-lg cursor-pointer hover:bg-[#3a3d40] transition-colors"
                      >
                        Choose Files
                      </Label>
                    </div>
                    {images.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {images.map((file, index) => (
                          <div key={index} className="relative group">
                            <div className="w-20 h-16 bg-[#0D0F11] rounded-lg flex items-center justify-center text-xs text-[#6F7377]">
                              {file.name.slice(0, 10)}...
                            </div>
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-[#C0C4C7]">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      className="bg-[#0D0F11] border-[#3a3d40] text-white min-h-[100px]"
                      placeholder="Any additional details about your car (service history, modifications, known issues, etc.)"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold"
                  >
                    {isSubmitting ? "Submitting..." : "Get Trade-In Estimate"}
                  </Button>

                  <p className="text-xs text-[#6F7377] text-center">
                    Trade-in offers are estimates subject to physical inspection of the vehicle.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  )
}
