"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Inventory", href: "/cars" },
  { name: "Finance", href: "/finance" },
  { name: "Trade-In", href: "/trade-in" },
  { name: "Spare Parts", href: "/spare-parts" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const WHATSAPP_NUMBER = "254762822207"
const PHONE_NUMBER = "+254 762 822207"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Factoraised Group, I'm interested in your cars. Can you help me?")}`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#0D0F11]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0D0F11]/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Factoraised Group Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#C0C4C7] transition-colors hover:text-[#0FB4FF]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-[#C0C4C7] hover:text-white hover:bg-[#2A2D30]" asChild>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" />
              {PHONE_NUMBER}
            </a>
          </Button>
          <Button size="sm" className="bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#0D0F11] border-[#2A2D30]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image src="/logo.png" alt="Factoraised Group Logo" width={150} height={50} className="h-10 w-auto" />
              </Link>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-[#C0C4C7] transition-colors hover:text-[#0FB4FF]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#2A2D30]">
                <Button
                  variant="outline"
                  className="w-full border-[#3a3d40] text-white hover:bg-[#2A2D30] bg-transparent"
                  asChild
                >
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button className="w-full bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
