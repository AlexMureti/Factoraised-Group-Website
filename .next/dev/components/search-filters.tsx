"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export interface Filters {
  search: string
  make: string
  category: string
  transmission: string
  fuel: string
}

interface SearchFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  onReset: () => void
}

const makes = ["All Makes", "Mitsubishi", "Chevrolet", "Porsche", "Ford"]
const categories = [
  "All Categories",
  "Compact SUV",
  "Family SUV",
  "Sport SUV",
  "Luxury SUV",
  "Off-Road SUV",
  "Crossover",
  "Classic",
  "Sports Car",
]
const transmissions = ["All", "Auto", "Manual"]
const fuels = ["All", "Petrol", "Diesel", "Hybrid", "Electric"]

export function SearchFilters({ filters, onFiltersChange, onReset }: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateFilter = (key: keyof Filters, value: string) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  const activeFilterCount = [
    filters.make !== "All Makes" && filters.make !== "",
    filters.category !== "All Categories" && filters.category !== "",
    filters.transmission !== "All" && filters.transmission !== "",
    filters.fuel !== "All" && filters.fuel !== "",
  ].filter(Boolean).length

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Make */}
      <div className="space-y-2">
        <Label className="text-[#C0C4C7]">Make</Label>
        <Select value={filters.make || "All Makes"} onValueChange={(value) => updateFilter("make", value)}>
          <SelectTrigger className="bg-[#2A2D30] border-[#3a3d40] text-white">
            <SelectValue placeholder="All Makes" />
          </SelectTrigger>
          <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
            {makes.map((make) => (
              <SelectItem key={make} value={make} className="text-white hover:bg-[#3a3d40]">
                {make}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label className="text-[#C0C4C7]">Category</Label>
        <Select value={filters.category || "All Categories"} onValueChange={(value) => updateFilter("category", value)}>
          <SelectTrigger className="bg-[#2A2D30] border-[#3a3d40] text-white">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat} className="text-white hover:bg-[#3a3d40]">
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Transmission */}
      <div className="space-y-2">
        <Label className="text-[#C0C4C7]">Transmission</Label>
        <Select value={filters.transmission || "All"} onValueChange={(value) => updateFilter("transmission", value)}>
          <SelectTrigger className="bg-[#2A2D30] border-[#3a3d40] text-white">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
            {transmissions.map((trans) => (
              <SelectItem key={trans} value={trans} className="text-white hover:bg-[#3a3d40]">
                {trans}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Fuel Type */}
      <div className="space-y-2">
        <Label className="text-[#C0C4C7]">Fuel Type</Label>
        <Select value={filters.fuel || "All"} onValueChange={(value) => updateFilter("fuel", value)}>
          <SelectTrigger className="bg-[#2A2D30] border-[#3a3d40] text-white">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="bg-[#2A2D30] border-[#3a3d40]">
            {fuels.map((fuel) => (
              <SelectItem key={fuel} value={fuel} className="text-white hover:bg-[#3a3d40]">
                {fuel}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full border-[#3a3d40] text-white hover:bg-[#2A2D30] bg-transparent"
        onClick={onReset}
      >
        <X className="mr-2 h-4 w-4" />
        Reset Filters
      </Button>
    </div>
  )

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6F7377]" />
          <Input
            type="text"
            placeholder="Search by make, model, or keyword..."
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="pl-10 bg-[#2A2D30] border-[#3a3d40] text-white placeholder:text-[#6F7377]"
          />
        </div>

        {/* Mobile Filter Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden border-[#3a3d40] text-white hover:bg-[#2A2D30] bg-[#2A2D30]">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {activeFilterCount > 0 && <Badge className="ml-2 bg-[#0FB4FF] text-[#0D0F11]">{activeFilterCount}</Badge>}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-[#0D0F11] border-[#2A2D30]">
            <SheetHeader>
              <SheetTitle className="text-white">Filter Cars</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block p-6 rounded-xl bg-[#2A2D30]/50 border border-[#3a3d40]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-[#0FB4FF]" />
            Filter Cars
          </h3>
          {activeFilterCount > 0 && <Badge className="bg-[#0FB4FF] text-[#0D0F11]">{activeFilterCount} active</Badge>}
        </div>
        <FilterContent />
      </div>
    </div>
  )
}
