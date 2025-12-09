import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Car, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0F11]">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <div className="text-8xl font-bold text-[#0FB4FF] mb-4">404</div>
          <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-[#6F7377] mb-8">
            The page you are looking for does not exist or has been moved. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" className="border-[#3a3d40] text-white hover:bg-[#2A2D30] bg-transparent" asChild>
              <Link href="/cars">
                <Car className="mr-2 h-4 w-4" />
                Browse Cars
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
