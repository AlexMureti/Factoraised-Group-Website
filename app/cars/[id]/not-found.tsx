import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Car, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <Car className="h-20 w-20 text-[#3a3d40] mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Car Not Found</h1>
          <p className="text-[#6F7377] mb-8">
            The vehicle you are looking for may have been sold or is no longer available. Browse our current inventory
            to find your perfect car.
          </p>
          <Button className="bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold" asChild>
            <Link href="/cars">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Inventory
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
