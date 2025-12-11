import Link from "next/link"
import Image from "next/image"
import { Car, Fuel, Gauge, Tag, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Car as CarType } from "@/lib/inventory"
import { formatMileage, getCarDisplayName } from "@/lib/inventory"

interface InventoryCardProps {
  car: CarType
}

const WHATSAPP_NUMBER = "254762822207"

export function InventoryCard({ car }: InventoryCardProps) {
  const displayName = getCarDisplayName(car)
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Factoraised Group, I'm interested in the ${displayName} (ID: ${car.id}). Is it still available? What's the price?`,
  )}`

  return (
    <Card className="group overflow-hidden bg-gradient-to-b from-[#2A2D30] to-[#1a1d20] border-[#3a3d40] hover:border-[#0FB4FF]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0FB4FF]/10">
      <Link href={`/cars/${car.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={car.images[0] || "/placeholder.svg"}
            alt={displayName}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 left-3 flex gap-2">
            <Badge
              className={`font-semibold ${
                car.condition === "Excellent"
                  ? "bg-[#0FB4FF] text-[#0D0F11]"
                  : car.condition === "Good"
                    ? "bg-emerald-500 text-white"
                    : "bg-amber-500 text-white"
              }`}
            >
              {car.condition}
            </Badge>
            {car.highlight && <Badge className="bg-amber-500 text-[#0D0F11] font-semibold">{car.highlight}</Badge>}
          </div>

          {/* Quick view button on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-4 py-2 bg-[#0FB4FF] text-[#0D0F11] font-semibold rounded-full text-sm">Quick View</span>
          </div>
        </div>
      </Link>

      <CardContent className="p-5">
        <Link href={`/cars/${car.id}`}>
          <h3 className="font-bold text-white text-lg mb-1 group-hover:text-[#0FB4FF] transition-colors">
            {displayName}
          </h3>
        </Link>

        <div className="mb-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0FB4FF] font-bold text-xl hover:text-[#0FB4FF]/80 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Inquire for Price
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <Gauge className="h-4 w-4 text-[#0FB4FF]" />
            <span>{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <Car className="h-4 w-4 text-[#0FB4FF]" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <Fuel className="h-4 w-4 text-[#0FB4FF]" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <Tag className="h-4 w-4 text-[#0FB4FF]" />
            <span>{car.category}</span>
          </div>
        </div>

        <Button
          className="w-full bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-bold transition-all hover:shadow-lg hover:shadow-[#0FB4FF]/25"
          asChild
        >
          <Link href={`/cars/${car.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
