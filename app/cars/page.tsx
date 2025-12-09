"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppSticky } from "@/components/whatsapp-sticky"
import { SearchFilters, type Filters } from "@/components/search-filters"
import { InventoryCard } from "@/components/inventory-card"
import { inventory } from "@/Factoraised-Group-Website/lib/inventory"
import { Car, Grid3X3, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const defaultFilters: Filters = {
  search: "",
  make: "All Makes",
  category: "All Categories",
  transmission: "All",
  fuel: "All",
}

const WHATSAPP_NUMBER = "254700000000"

export default function CarsPage() {
  const [filters, setFilters] = useState<Filters>(defaultFilters)

  const filteredCars = useMemo(() => {
    return inventory.filter((car) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        const matchesSearch =
          car.make.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower) ||
          car.description.toLowerCase().includes(searchLower) ||
          car.category.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }

      // Make filter
      if (filters.make && filters.make !== "All Makes" && car.make !== filters.make) {
        return false
      }

      if (filters.category && filters.category !== "All Categories" && car.category !== filters.category) {
        return false
      }

      // Transmission filter
      if (filters.transmission && filters.transmission !== "All" && car.transmission !== filters.transmission) {
        return false
      }

      // Fuel filter
      if (filters.fuel && filters.fuel !== "All" && car.fuel !== filters.fuel) {
        return false
      }

      return true
    })
  }, [filters])

  const handleReset = () => {
    setFilters(defaultFilters)
  }

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Factoraised Group, I'm browsing your inventory and would like to know more about your available cars.`,
  )}`

  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Browse Our Inventory</h1>
          <h2 className="text-lg text-[#6F7377]" >Call us to get updated on new catalogue arrivals</h2>
          <p className="text-[#6F7377]">Quality-checked vehicles with detailed inspections - Contact us for pricing</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="lg:w-80 shrink-0">
            <SearchFilters filters={filters} onFiltersChange={setFilters} onReset={handleReset} />

            <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-[#0FB4FF]/20 to-[#0FB4FF]/5 border border-[#0FB4FF]/30">
              <h3 className="font-semibold text-white mb-2">Looking for something specific?</h3>
              <p className="text-[#C0C4C7] text-sm mb-4">
                Can't find what you're looking for? Let us know and we'll help you find your perfect car.
              </p>
              <Button className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat with Us
                </a>
              </Button>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-[#6F7377]">
                <Car className="h-5 w-5 text-[#0FB4FF]" />
                <span>
                  {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"} found
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#6F7377]">
                <Grid3X3 className="h-4 w-4" />
                <span className="text-sm">Grid View</span>
              </div>
            </div>

            {/* Cars Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <InventoryCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Car className="h-16 w-16 text-[#3a3d40] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No cars found</h3>
                <p className="text-[#6F7377] mb-6">Try adjusting your filters to see more results.</p>
                <button onClick={handleReset} className="text-[#0FB4FF] hover:underline">
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  )
}
