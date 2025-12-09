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
import { Banknote, CheckCircle, Clock, FileText, Shield, Users, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "254700000000"

export default function FinancePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description: "Fill out our simple application form with your details and financing needs.",
    },
    {
      icon: Clock,
      title: "Quick Review",
      description: "Our team reviews your application and connects you with suitable partners.",
    },
    {
      icon: CheckCircle,
      title: "Get Approved",
      description: "Receive approval from our banking and SACCO partners within days.",
    },
  ]

  const partners = [
    "KCB Bank",
    "Equity Bank",
    "Co-operative Bank",
    "Stima SACCO",
    "Kenya Police SACCO",
    "Mwalimu SACCO",
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
            <h1 className="text-3xl font-bold text-white mb-4">Application Received</h1>
            <p className="text-[#6F7377] mb-8">
              Thank you for your finance application. Our team will review your details and contact you within 24 hours
              to discuss your options.
            </p>
            <Button className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold" asChild>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I just submitted a finance application and would like to follow up.")}`}
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
                <Banknote className="h-4 w-4 text-[#0FB4FF]" />
                <span className="text-sm text-[#0FB4FF] font-medium">Flexible Financing Options</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Car Finance Made Simple</h1>
              <p className="text-lg text-[#C0C4C7]">
                We work with local banks and SACCOs to offer affordable financing. Simple 3-step process: Apply,
                Approve, Collect.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0FB4FF]/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-[#0FB4FF]" />
                  </div>
                  <div className="text-[#0FB4FF] font-semibold mb-2">Step {index + 1}</div>
                  <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6F7377]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Application Form */}
              <Card className="bg-[#2A2D30] border-[#3a3d40]">
                <CardHeader>
                  <CardTitle className="text-white">Finance Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-[#C0C4C7]">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          required
                          className="bg-[#0D0F11] border-[#3a3d40] text-white"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-[#C0C4C7]">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          required
                          className="bg-[#0D0F11] border-[#3a3d40] text-white"
                          placeholder="Doe"
                        />
                      </div>
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

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#C0C4C7]">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-[#0D0F11] border-[#3a3d40] text-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="employment" className="text-[#C0C4C7]">
                        Employment Status
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-[#0D0F11] border-[#3a3d40] text-white">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
                          <SelectItem value="employed" className="text-white">
                            Employed
                          </SelectItem>
                          <SelectItem value="self-employed" className="text-white">
                            Self-Employed
                          </SelectItem>
                          <SelectItem value="business-owner" className="text-white">
                            Business Owner
                          </SelectItem>
                          <SelectItem value="other" className="text-white">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-[#C0C4C7]">
                        Estimated Budget (KES)
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-[#0D0F11] border-[#3a3d40] text-white">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
                          <SelectItem value="1-2m" className="text-white">
                            1,000,000 - 2,000,000
                          </SelectItem>
                          <SelectItem value="2-4m" className="text-white">
                            2,000,000 - 4,000,000
                          </SelectItem>
                          <SelectItem value="4-6m" className="text-white">
                            4,000,000 - 6,000,000
                          </SelectItem>
                          <SelectItem value="6m+" className="text-white">
                            Above 6,000,000
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#C0C4C7]">
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        className="bg-[#0D0F11] border-[#3a3d40] text-white min-h-[100px]"
                        placeholder="Tell us about the car you're interested in or any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>

                    <p className="text-xs text-[#6F7377] text-center">
                      By submitting, you agree to be contacted about financing options.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Info Side */}
              <div className="space-y-6">
                {/* Partners */}
                <Card className="bg-[#2A2D30] border-[#3a3d40]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-5 w-5 text-[#0FB4FF]" />
                      <h3 className="font-semibold text-white">Our Finance Partners</h3>
                    </div>
                    <p className="text-[#6F7377] text-sm mb-4">
                      We work with trusted banks and SACCOs to find the best rates for you.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {partners.map((partner, index) => (
                        <span key={index} className="px-3 py-1 bg-[#0D0F11] rounded-full text-sm text-[#C0C4C7]">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card className="bg-[#2A2D30] border-[#3a3d40]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Shield className="h-5 w-5 text-[#0FB4FF]" />
                      <h3 className="font-semibold text-white">Why Finance With Us</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Competitive interest rates from 14%",
                        "Flexible terms from 12 to 60 months",
                        "Quick approval process",
                        "No hidden fees or charges",
                        "Support throughout the process",
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-[#C0C4C7] text-sm">
                          <CheckCircle className="h-4 w-4 text-[#0FB4FF] shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Disclaimer */}
                <p className="text-xs text-[#6F7377]">
                  Finance approval depends on partner institution criteria. Rates and terms may vary based on your
                  profile. This is not a guarantee of financing.
                </p>
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
