"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Use the same image repeated if only one exists
  const displayImages = images.length > 1 ? images : [images[0], images[0], images[0]]

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#2A2D30]">
        <Image
          src={displayImages[currentIndex] || "/placeholder.svg"}
          alt={`${alt} - Image ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />

        {/* Navigation Arrows */}
        {displayImages.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0D0F11]/70 hover:bg-[#0D0F11]/90 text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0D0F11]/70 hover:bg-[#0D0F11]/90 text-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}

        {/* Expand Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-[#0D0F11]/70 hover:bg-[#0D0F11]/90 text-white"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Expand className="h-5 w-5" />
          <span className="sr-only">View fullscreen</span>
        </Button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0D0F11]/70 text-white text-sm">
          {currentIndex + 1} / {displayImages.length}
        </div>
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? "border-[#0FB4FF]" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl bg-[#0D0F11] border-[#2A2D30] p-0">
          <DialogTitle className="sr-only">{alt} - Full View</DialogTitle>
          <div className="relative aspect-[4/3]">
            <Image
              src={displayImages[currentIndex] || "/placeholder.svg"}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
            {displayImages.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#0D0F11]/70 hover:bg-[#0D0F11]/90 text-white"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#0D0F11]/70 hover:bg-[#0D0F11]/90 text-white"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
