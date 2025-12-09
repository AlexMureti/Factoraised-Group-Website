import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "254762822207"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Factoraised Group, I have a question.")}`

  return (
    <footer className="bg-[#0D0F11] border-t border-[#2A2D30]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="Factoraised Group Logo" width={160} height={53} className="h-12 w-auto" />
            <p className="text-[#6F7377] text-sm leading-relaxed">
              Trusted Cars. Trusted Service. Quality-checked vehicles with clear prices and flexible financing for
              Kenyan buyers.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/factoraisedgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6F7377] hover:text-[#0FB4FF] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/factoraisedgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6F7377] hover:text-[#0FB4FF] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6F7377] hover:text-[#0FB4FF] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Browse Cars", href: "/cars" },
                { name: "Finance Options", href: "/finance" },
                { name: "Trade-In Your Car", href: "/trade-in" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#6F7377] hover:text-[#0FB4FF] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Updated */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-[#0FB4FF] mt-0.5 shrink-0" />
                <span className="text-[#6F7377]">
                  Langata Road, Carnivore Area
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-[#0FB4FF] shrink-0" />
                <a href="tel:+254762822207" className="text-[#6F7377] hover:text-[#0FB4FF]">
                  +254 762 822207
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-[#0FB4FF] shrink-0" />
                <a href="mailto:ewanguzi@gmail.com" className="text-[#6F7377] hover:text-[#0FB4FF]">
                  ewanguzi@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-[#0FB4FF] shrink-0" />
                <span className="text-[#6F7377]">Open 24 Hours</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#6F7377] hover:text-[#0FB4FF] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#2A2D30]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6F7377] text-sm">{currentYear} Factoraised Group. All rights reserved.</p>
            <p className="text-[#6F7377] text-xs">
              Prices shown in KES. Financing subject to approval by partner institutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
