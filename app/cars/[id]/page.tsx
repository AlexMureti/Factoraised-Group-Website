import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppSticky } from "@/components/whatsapp-sticky"
import { ImageGallery } from "@/components/image-gallery"
import { InventoryCard } from "@/components/inventory-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { inventory, formatMileage, getCarDisplayName } from "@/Factoraised-Group-Website/lib/inventory"
import {
  MessageCircle,
  Phone,
  Gauge,
  Fuel,
  Car,
  Settings,
  Palette,
  MapPin,
  Shield,
  CheckCircle,
  ArrowLeft,
  FileText,
  RefreshCw,
  Tag,
  Sparkles,
} from "lucide-react"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const car = inventory.find((c) => c.id === Number(id))

  if (!car) {
    return { title: "Car Not Found - Factoraised Group" }
  }

  const displayName = getCarDisplayName(car)

  return {
    title: `${displayName} - Inquire for Price | Factoraised Group`,
    description: `${car.description} Located in ${car.location}. ${formatMileage(car.mileage)}, ${car.transmission}, ${car.fuel}. Contact us for pricing and test drive.`,
    openGraph: {
      title: `${displayName} - Factoraised Group`,
      description: car.description,
      images: car.images,
    },
  }
}

export async function generateStaticParams() {
  return inventory.map((car) => ({
    id: car.id.toString(),
  }))
}

const WHATSAPP_NUMBER = "254700000000"
const PHONE_NUMBER = "+254700000000"

export default async function CarDetailPage({ params }: PageProps) {
  const { id } = await params
  const car = inventory.find((c) => c.id === Number(id))

  if (!car) {
    notFound()
  }

  const carName = getCarDisplayName(car)
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Factoraised Group, I'm interested in the ${carName} (ID: ${car.id}). Is it still available? What's the price?`,
  )}`

  const similarCars = inventory
    .filter((c) => c.id !== car.id && (c.make === car.make || c.bodyType === car.bodyType))
    .slice(0, 3)

  const specs = [
    { icon: Tag, label: "Category", value: car.category },
    { icon: Gauge, label: "Mileage", value: formatMileage(car.mileage) },
    { icon: Car, label: "Transmission", value: car.transmission },
    { icon: Fuel, label: "Fuel", value: car.fuel },
    { icon: Settings, label: "Engine", value: car.engineSize },
    { icon: Palette, label: "Color", value: car.color },
    { icon: Car, label: "Body Type", value: car.bodyType },
    { icon: MapPin, label: "Location", value: car.location },
  ]

  const inspectionChecks = [
    "Engine and transmission checked",
    "Brake system inspected",
    "Electrical systems tested",
    "Body and paint condition assessed",
    "Interior condition verified",
    "Service history reviewed",
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: carName,
    description: car.description,
    brand: { "@type": "Brand", name: car.make },
    model: car.model,
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: car.mileage,
      unitCode: "KMT",
    },
    vehicleTransmission: car.transmission,
    fuelType: car.fuel,
    color: car.color,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "AutoDealer",
        name: "Factoraised Group",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Langata Road, Carnivore Area",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
      },
    },
    image: car.images,
  }

  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/cars"
          className="inline-flex items-center gap-2 text-[#6F7377] hover:text-[#0FB4FF] transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Inventory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Gallery */}
          <div>
            <ImageGallery images={car.images} alt={carName} />
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge className="bg-[#0FB4FF] text-[#0D0F11]">{car.condition}</Badge>
                {car.highlight && (
                  <Badge className="bg-amber-500 text-[#0D0F11]">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {car.highlight}
                  </Badge>
                )}
                <Badge variant="outline" className="border-[#3a3d40] text-[#C0C4C7]">
                  ID: {car.id}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{carName}</h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#0FB4FF]">Price on Request</span>
                <Badge variant="outline" className="border-[#0FB4FF]/50 text-[#0FB4FF]">
                  {car.category}
                </Badge>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#C0C4C7] leading-relaxed">{car.description}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Inquire on WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold"
                asChild
              >
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Price
                </a>
              </Button>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-[#3a3d40] text-white hover:bg-[#2A2D30] bg-transparent"
                asChild
              >
                <Link href="/finance">
                  <FileText className="mr-2 h-4 w-4" />
                  Finance Options
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-[#3a3d40] text-white hover:bg-[#2A2D30] bg-transparent"
                asChild
              >
                <Link href="/trade-in">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Trade-In
                </Link>
              </Button>
            </div>

            {/* Specs Grid */}
            <Card className="bg-[#2A2D30] border-[#3a3d40]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0FB4FF]/10 flex items-center justify-center">
                        <spec.icon className="h-5 w-5 text-[#0FB4FF]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#6F7377]">{spec.label}</p>
                        <p className="text-white font-medium">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            {car.features.length > 0 && (
              <Card className="bg-[#2A2D30] border-[#3a3d40]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-4">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#0D0F11] text-[#C0C4C7] border border-[#3a3d40]"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Bottom Section - Inspection only, removed finance estimator */}
        <div className="mt-12">
          <Card className="bg-[#2A2D30] border-[#3a3d40]">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-[#0FB4FF]" />
                <h3 className="font-semibold text-white">Inspection Report</h3>
              </div>
              <p className="text-[#6F7377] text-sm mb-4">
                Every vehicle at Factoraised Group undergoes a comprehensive inspection before listing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {inspectionChecks.map((check, index) => (
                  <div key={index} className="flex items-center gap-2 text-[#C0C4C7]">
                    <CheckCircle className="h-4 w-4 text-[#0FB4FF] shrink-0" />
                    <span className="text-sm">{check}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-gradient-to-r from-[#0FB4FF]/20 to-[#0FB4FF]/5 border-[#0FB4FF]/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Interested in this {car.make} {car.model}?
              </h3>
              <p className="text-[#C0C4C7] mb-6">
                Contact us today for pricing, financing options, and to schedule a test drive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
                  asChild
                >
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    +254 700 000 000
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Similar Vehicles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarCars.map((similarCar) => (
                <InventoryCard key={similarCar.id} car={similarCar} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppSticky carId={car.id} carName={carName} />
    </div>
  )
}
