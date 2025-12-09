"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppStickyProps {
  carId?: number
  carName?: string
}

const WHATSAPP_NUMBER = "254762822207"

export function WhatsAppSticky({ carId, carName }: WhatsAppStickyProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const message =
    carId && carName
      ? `Hi Factoraised Group, I'm interested in the ${carName} (ID: ${carId}). Can you tell me more?`
      : "Hi Factoraised Group, I'm interested in your cars. Can you help me?"

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  useEffect(() => {
    // Show button after scroll
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    // Show immediately on mount, then handle scroll
    setIsVisible(true)
    window.addEventListener("scroll", handleScroll)

    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className="relative bg-white rounded-xl shadow-2xl p-4 max-w-[200px] animate-in slide-in-from-right-5 fade-in duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X className="h-3 w-3 text-gray-600" />
          </button>
          <p className="text-sm text-gray-800 font-medium">Need help finding a car?</p>
          <p className="text-xs text-gray-500 mt-1">Chat with Emmanuel on WhatsApp!</p>
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white" />
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative group">
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        <Button
          size="lg"
          className="relative rounded-full h-16 w-16 bg-[#25D366] hover:bg-[#20BD5A] shadow-xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 hover:scale-110"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <MessageCircle className="h-7 w-7 text-white" />
          </a>
        </Button>

        {/* Hover label */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#0D0F11] text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </div>
    </div>
  )
}
