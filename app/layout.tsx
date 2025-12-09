import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Factoraised Group — Trusted Cars & Transparent Deals in Nairobi",
  description:
    "Factoraised Group — quality-checked used cars in Langata, Nairobi. Clear prices in KES, trade-ins, and flexible financing. Book a test drive today.",
  keywords:
    "used cars Nairobi, buy Toyota Nairobi, car dealership Langata, Factoraised Group, car finance Kenya, used cars Kenya",
  openGraph: {
    title: "Factoraised Group — Trusted Cars. Trusted Service.",
    description: "Quality-checked cars, clear prices, and flexible financing for Kenyan buyers.",
    url: "https://factoraised.co.ke",
    siteName: "Factoraised Group",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Factoraised Group — Trusted Cars. Trusted Service.",
    description: "Quality-checked cars, clear prices, and flexible financing for Kenyan buyers.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased bg-[#0D0F11] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
