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
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Calendar } from "lucide-react"

const WHATSAPP_NUMBER = "254762822207"
const PHONE_NUMBER = "+254 762 822207"
const EMAIL = "ewanguzi@gmail.com"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses, typically within minutes",
      action: "Chat Now",
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Factoraised Group, I have a question.")}`,
      highlight: true,
    },
    {
      icon: Phone,
      title: "Phone",
      description: PHONE_NUMBER,
      action: "Call Now",
      href: `tel:${PHONE_NUMBER.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "Email",
      description: EMAIL,
      action: "Send Email",
      href: `mailto:${EMAIL}`,
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
            <h1 className="text-3xl font-bold text-white mb-4">Message Sent</h1>
            <p className="text-[#6F7377] mb-8">
              Thank you for reaching out. Emmanuel will get back to you within 24 hours. For faster response, contact us
              via WhatsApp.
            </p>
            <Button className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold" asChild>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I just sent a contact form and would like a quick response.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
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
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-[#2A2D30]/50 to-[#0D0F11]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-lg text-[#C0C4C7]">
                Call or WhatsApp Emmanuel for quick answers. Visit our showroom in Langata. We are here to help you find
                your perfect car.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`bg-[#2A2D30] border-[#3a3d40] ${method.highlight ? "ring-2 ring-[#25D366]" : ""}`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${method.highlight ? "bg-[#25D366]/20" : "bg-[#0FB4FF]/10"}`}
                    >
                      <method.icon className={`h-6 w-6 ${method.highlight ? "text-[#25D366]" : "text-[#0FB4FF]"}`} />
                    </div>
                    <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-sm text-[#6F7377] mb-4">{method.description}</p>
                    <Button
                      className={`w-full font-semibold ${method.highlight ? "bg-[#25D366] text-white hover:bg-[#20BD5A]" : "bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90"}`}
                      asChild
                    >
                      <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined}>
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form and Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="bg-[#2A2D30] border-[#3a3d40]">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
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

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#C0C4C7]">
                        Email (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-[#0D0F11] border-[#3a3d40] text-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[#C0C4C7]">
                        Subject
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-[#0D0F11] border-[#3a3d40] text-white">
                          <SelectValue placeholder="What can we help with?" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
                          <SelectItem value="inquiry" className="text-white">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="test-drive" className="text-white">
                            Book Test Drive
                          </SelectItem>
                          <SelectItem value="finance" className="text-white">
                            Finance Question
                          </SelectItem>
                          <SelectItem value="trade-in" className="text-white">
                            Trade-In Inquiry
                          </SelectItem>
                          <SelectItem value="other" className="text-white">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#C0C4C7]">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        required
                        className="bg-[#0D0F11] border-[#3a3d40] text-white min-h-[120px]"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Location Info */}
              <div className="space-y-6">
                <Card className="bg-[#2A2D30] border-[#3a3d40]">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Visit Our Showroom</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0FB4FF]/10 flex items-center justify-center shrink-0">
                          <MapPin className="h-5 w-5 text-[#0FB4FF]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Address</h3>
                          <p className="text-[#6F7377]">
                            Langata Road, Carnivore Area
                            <br />
                            Nairobi, Kenya
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0FB4FF]/10 flex items-center justify-center shrink-0">
                          <Clock className="h-5 w-5 text-[#0FB4FF]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Opening Hours</h3>
                          <p className="text-[#6F7377]">
                            Open 24 Hours
                            <br />7 Days a Week
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#0FB4FF]/10 flex items-center justify-center shrink-0">
                          <Calendar className="h-5 w-5 text-[#0FB4FF]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Book a Visit</h3>
                          <p className="text-[#6F7377]">
                            WhatsApp Emmanuel to schedule your showroom visit and we will have your preferred cars ready
                            for viewing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Embed */}
                <Card className="bg-[#2A2D30] border-[#3a3d40] overflow-hidden">
                  <div className="aspect-video bg-[#0D0F11] flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7835!2d36.7638!3d-1.3274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLangata%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Factoraised Group Location"
                      className="grayscale"
                    />
                  </div>
                </Card>
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
