"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppSticky } from "@/components/whatsapp-sticky"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Wrench,
    Shield,
    Truck,
    Clock,
    CheckCircle,
    Star,
    MessageCircle,
    Search,
    AlertCircle,
    Phone,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

const WHATSAPP_NUMBER = "254762822207"
const PHONE_NUMBER = "+254 762 822207"

interface SparePart {
    id: string
    name: string
    category: string
    make: string
    price: string
    availability: "In Stock" | "Available Soon" | "Custom Order"
    description: string
    condition: "New" | "Used" | "Refurbished"
    warranty: string
    image: string
}

const spareParts: SparePart[] = [
    {
        id: "1",
        name: "Engine Oil Filter",
        category: "Filters",
        make: "Universal",
        price: "KES 500",
        availability: "In Stock",
        description: "High-quality engine oil filter for improved engine performance",
        condition: "New",
        warranty: "12 months",
        image: "https://i.pinimg.com/1200x/ed/db/45/eddb45fcc15dadb513763bb59af8a0a7.jpg",
    },
    {
        id: "2",
        name: "Brake Pads Set",
        category: "Brakes",
        make: "Various Makes",
        price: "KES 4,500",
        availability: "In Stock",
        description: "Premium brake pads for safe and reliable braking",
        condition: "New",
        warranty: "18 months",
        image: "https://www.buybrakes.com/images/product/nrs-brake-pad-set-premium-galvanized-83152061.jpg",
    },
    {
        id: "3",
        name: "Air Filters",
        category: "Filters",
        make: "Universal",
        price: "KES 800",
        availability: "In Stock",
        description: "Genuine air filters for better engine efficiency",
        condition: "New",
        warranty: "12 months",
        image: "https://www.pgfilters.com/wp-content/uploads/2023/02/post2.png",
    },
    {
        id: "4",
        name: "Battery 65Ah",
        category: "Electrical",
        make: "Universal",
        price: "KES 8,500",
        availability: "In Stock",
        description: "Heavy-duty car battery with reliable performance",
        condition: "New",
        warranty: "36 months",
        image: "https://i.pinimg.com/1200x/44/4f/ec/444fec680fe622d36fd4d97f208ecf9e.jpg",
    },
    {
        id: "5",
        name: "Radiator Hoses",
        category: "Cooling",
        make: "Various Makes",
        price: "KES 1,200",
        availability: "In Stock",
        description: "Durable radiator hoses to prevent overheating",
        condition: "New",
        warranty: "12 months",
        image: "https://i.pinimg.com/1200x/cf/1c/89/cf1c8991b7e146e924c1812685a2e912.jpg",
    },
    {
        id: "6",
        name: "Spark Plugs (Set of 4)",
        category: "Ignition",
        make: "Universal",
        price: "KES 2,000",
        availability: "In Stock",
        description: "High-performance spark plugs for smooth engine operation",
        condition: "New",
        warranty: "12 months",
        image: "https://i.pinimg.com/1200x/ea/79/d5/ea79d536ab1c416b3c91bdcf17074c54.jpg",
    },
    {
        id: "7",
        name: "Suspension Struts",
        category: "Suspension",
        make: "Various Makes",
        price: "KES 15,000",
        availability: "Available Soon",
        description: "Premium suspension components for smooth ride quality",
        condition: "New",
        warranty: "24 months",
        image: "https://i.pinimg.com/1200x/1d/29/55/1d2955f8387ae7f72e5346cd5cb176c7.jpg",
    },
    {
        id: "8",
        name: "Fuel Pump",
        category: "Fuel System",
        make: "Various Makes",
        price: "KES 12,000",
        availability: "Custom Order",
        description: "Reliable fuel pump for consistent fuel delivery",
        condition: "Used",
        warranty: "6 months",
        image: "https://i.pinimg.com/1200x/52/76/d6/5276d6a2d8e48e66f6cb8835ba480e9b.jpg",
    },
    {
        id: "9",
        name: "Timing Belt",
        category: "Engine",
        make: "Various Makes",
        price: "KES 6,500",
        availability: "In Stock",
        description: "Essential timing belt for engine synchronization",
        condition: "New",
        warranty: "18 months",
        image: "https://i.pinimg.com/736x/da/b2/8b/dab28b708c53aa1bc8b0574e8edc7d1d.jpg",
    },
]

const categories = ["All", "Filters", "Brakes", "Electrical", "Cooling", "Ignition", "Suspension", "Fuel System", "Engine"]

const makes = ["All Makes", "Universal", "Various Makes"]

export default function SparePartsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedMake, setSelectedMake] = useState("All Makes")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const filteredParts = spareParts.filter((part) => {
        const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            part.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "All" || part.category === selectedCategory
        const matchesMake = selectedMake === "All Makes" || part.make === selectedMake || part.make.includes(selectedMake)

        return matchesSearch && matchesCategory && matchesMake
    })

    const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const benefits = [
        {
            icon: Shield,
            title: "Genuine Parts",
            description: "We only source authentic, quality spare parts from trusted manufacturers",
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            description: "Quick delivery to your location or installation at our service center",
        },
        {
            icon: Clock,
            title: "Quick Installation",
            description: "Expert mechanics ready to install your parts professionally",
        },
        {
            icon: Star,
            title: "Competitive Pricing",
            description: "Best prices on the market without compromising on quality",
        },
    ]

    return (
        <div className="min-h-screen bg-[#0D0F11]">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative w-full min-h-96 border-b border-[#2A2D30] overflow-hidden bg-[#0D0F11]">
                    {/* GIF Background */}
                    <div className="absolute inset-0 top-0 left-0 w-full h-full">
                        <img
                            src="/videos/background.gif"
                            alt="background"
                            className="w-full h-full object-cover"
                        />
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F11]/95 via-[#0D0F11]/75 to-[#0D0F11]/95" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 py-20">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="flex justify-center mb-6">
                                <Wrench className="h-16 w-16 text-[#0FB4FF]" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Genuine Spare Parts</h1>
                            <p className="text-xl text-[#C0C4C7] mb-8">
                                Quality parts to keep your vehicle running smoothly. From routine maintenance to major replacements,
                                we have everything you need.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold" asChild>
                                    <a href="/contact">Request a Quote</a>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-[#3a3d40] text-white hover:bg-[#2A2D30]"
                                    asChild
                                >
                                    <a
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Factoraised Group, I need spare parts for my car.")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        Chat on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 border-b border-[#2A2D30]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Spare Parts?</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, idx) => {
                                const Icon = benefit.icon
                                return (
                                    <Card key={idx} className="bg-[#151719] border-[#2A2D30] hover:border-[#0FB4FF] transition-colors">
                                        <CardContent className="pt-6">
                                            <Icon className="h-10 w-10 text-[#0FB4FF] mb-4" />
                                            <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                                            <p className="text-[#9CA3AF]">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Search and Filter Section */}
                <section className="py-12 border-b border-[#2A2D30] bg-[#151719]">
                    <div className="container mx-auto px-4">
                        <div className="space-y-4">
                            <div className="flex gap-4 flex-col lg:flex-row">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-3 h-5 w-5 text-[#6B7280]" />
                                    <Input
                                        placeholder="Search spare parts..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 bg-[#0D0F11] border-[#3a3d40] text-white placeholder:text-[#6B7280]"
                                    />
                                </div>
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="bg-[#0D0F11] border-[#3a3d40] text-white w-full lg:w-48">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#0D0F11] border-[#3a3d40]">
                                        {categories.map((cat) => (
                                            <SelectItem key={cat} value={cat} className="text-white">
                                                {cat}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select value={selectedMake} onValueChange={setSelectedMake}>
                                    <SelectTrigger className="bg-[#0D0F11] border-[#3a3d40] text-white w-full lg:w-48">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#0D0F11] border-[#3a3d40]">
                                        {makes.map((make) => (
                                            <SelectItem key={make} value={make} className="text-white">
                                                {make}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <p className="text-sm text-[#6B7280]">
                                Showing {filteredParts.length} of {spareParts.length} parts
                            </p>
                        </div>
                    </div>
                </section>

                {/* Spare Parts Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        {filteredParts.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredParts.map((part) => (
                                    <Card key={part.id} className="bg-[#151719] border-[#2A2D30] hover:border-[#0FB4FF] transition-all overflow-hidden">
                                        <div className="relative w-full h-48 overflow-hidden bg-[#0D0F11]">
                                            <Image
                                                src={part.image}
                                                alt={part.name}
                                                fill
                                                className="object-cover hover:scale-110 transition-transform duration-300"
                                            />
                                            <span
                                                className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-semibold ${part.availability === "In Stock"
                                                    ? "bg-green-900 text-green-200"
                                                    : part.availability === "Available Soon"
                                                        ? "bg-yellow-900 text-yellow-200"
                                                        : "bg-blue-900 text-blue-200"
                                                    }`}
                                            >
                                                {part.availability}
                                            </span>
                                        </div>
                                        <CardHeader>
                                            <div>
                                                <CardTitle className="text-white text-lg">{part.name}</CardTitle>
                                                <p className="text-sm text-[#9CA3AF] mt-1">{part.category}</p>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-[#C0C4C7]">{part.description}</p>
                                            <div className="grid grid-cols-2 gap-3 text-sm">
                                                <div>
                                                    <p className="text-[#6B7280]">Make</p>
                                                    <p className="text-white font-medium">{part.make}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[#6B7280]">Condition</p>
                                                    <p className="text-white font-medium">{part.condition}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[#6B7280]">Warranty</p>
                                                    <p className="text-white font-medium">{part.warranty}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[#6B7280]">Price</p>
                                                    <p className="text-[#0FB4FF] font-bold">{part.price}</p>
                                                </div>
                                            </div>
                                            <Button size="sm" className="w-full bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold" asChild>
                                                <a href={`/contact?part=${encodeURIComponent(part.name)}`}>Get Quote</a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <AlertCircle className="h-12 w-12 text-[#6B7280] mx-auto mb-4" />
                                <p className="text-[#C0C4C7]">No spare parts found matching your criteria. Please try different filters.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-20 border-t border-[#2A2D30] bg-[#151719]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-4 text-center">Request a Custom Quote</h2>
                            <p className="text-center text-[#C0C4C7] mb-12">
                                Can't find what you're looking for? Submit a request and our team will find the exact part you need.
                            </p>

                            {isSubmitted ? (
                                <Card className="bg-green-900/20 border-green-800">
                                    <CardContent className="pt-6">
                                        <div className="flex gap-4">
                                            <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <h3 className="font-semibold text-white mb-2">Quote Request Submitted!</h3>
                                                <p className="text-green-200">
                                                    Thank you for your request. Our team will contact you shortly with pricing and availability
                                                    information.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ) : (
                                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-white">Part Name/Description</Label>
                                            <Input
                                                placeholder="e.g., Toyota Camry Transmission"
                                                required
                                                className="bg-[#0D0F11] border-[#3a3d40] text-white placeholder:text-[#6B7280]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-white">Your Name</Label>
                                            <Input
                                                placeholder="John Doe"
                                                required
                                                className="bg-[#0D0F11] border-[#3a3d40] text-white placeholder:text-[#6B7280]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-white">Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                                className="bg-[#0D0F11] border-[#3a3d40] text-white placeholder:text-[#6B7280]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-white">Phone</Label>
                                            <Input
                                                placeholder="+254 7XX XXX XXX"
                                                required
                                                className="bg-[#0D0F11] border-[#3a3d40] text-white placeholder:text-[#6B7280]"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-white">Vehicle Make & Model</Label>
                                        <Input
                                            placeholder="e.g., Toyota Camry 2015"
                                            className="bg-[#0D0F11] border-[#3a3d40] text-white placeholder:text-[#6B7280]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-white">Additional Notes</Label>
                                        <textarea
                                            placeholder="Tell us more about the part you need..."
                                            rows={4}
                                            className="w-full px-3 py-2 bg-[#0D0F11] border border-[#3a3d40] rounded-md text-white placeholder:text-[#6B7280] focus:outline-none focus:border-[#0FB4FF]"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 border-t border-[#2A2D30]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

                        <div className="max-w-3xl mx-auto">
                            <Tabs defaultValue="q1" className="w-full">
                                <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 bg-[#151719] border-[#2A2D30] mb-6">
                                    <TabsTrigger value="q1" className="text-[#C0C4C7] data-[state=active]:text-white">
                                        Delivery & Installation
                                    </TabsTrigger>
                                    <TabsTrigger value="q2" className="text-[#C0C4C7] data-[state=active]:text-white">
                                        Warranty & Quality
                                    </TabsTrigger>
                                    <TabsTrigger value="q3" className="text-[#C0C4C7] data-[state=active]:text-white">
                                        Pricing & Custom Orders
                                    </TabsTrigger>
                                    <TabsTrigger value="q4" className="text-[#C0C4C7] data-[state=active]:text-white">
                                        Support
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="q1" className="space-y-4">
                                    <Card className="bg-[#151719] border-[#2A2D30]">
                                        <CardHeader>
                                            <CardTitle className="text-white">How quickly can you deliver spare parts?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-[#C0C4C7]">
                                            In-stock items are typically delivered within 1-2 business days. We also offer same-day delivery for
                                            parts within Nairobi and surrounding areas. Contact us for specific delivery times.
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-[#151719] border-[#2A2D30]">
                                        <CardHeader>
                                            <CardTitle className="text-white">Can you install the parts for me?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-[#C0C4C7]">
                                            Yes! We have expert mechanics on staff. We can install parts while you wait or arrange installation
                                            at a time that works for you. Installation charges vary by part and complexity.
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="q2" className="space-y-4">
                                    <Card className="bg-[#151719] border-[#2A2D30]">
                                        <CardHeader>
                                            <CardTitle className="text-white">Are all parts genuine?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-[#C0C4C7]">
                                            Yes, all our parts are sourced from trusted manufacturers. We guarantee authenticity and quality on
                                            every product. We do not sell counterfeit or substandard parts.
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-[#151719] border-[#2A2D30]">
                                        <CardHeader>
                                            <CardTitle className="text-white">What warranty do parts come with?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-[#C0C4C7]">
                                            Warranty periods vary by part type (typically 6-36 months). All new parts include manufacturer
                                            warranty. Used parts have a limited warranty. Check the specific warranty details for each part.
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="q3" className="space-y-4">
                                    <Card className="bg-[#151719] border-[#2A2D30]">
                                        <CardHeader>
                                            <CardTitle className="text-white">Can you source parts not listed on your website?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-[#C0C4C7]">
                                            Absolutely! We can source almost any automotive part. Use our quote request form or contact us via
                                            WhatsApp with the specific part details, vehicle make/model, and year.
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-[#151719] border-[#2A2D30]">
                                        <CardHeader>
                                            <CardTitle className="text-white">How are prices determined?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-[#C0C4C7]">
                                            We offer competitive pricing based on current market rates. Prices may vary based on part condition
                                            (new, used, refurbished), warranty, and vehicle specifications. Get a free quote for exact pricing.
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="q4" className="space-y-4">
                                    <Card className="bg-[#151719] border-[#2A2D30]">
                                        <CardHeader>
                                            <CardTitle className="text-white">How do I order spare parts?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-[#C0C4C7]">
                                            You can get a quote directly from our website, call us, or contact us via WhatsApp. Provide the part
                                            details and vehicle information, and our team will confirm availability and pricing.
                                        </CardContent>
                                    </Card>

                                    <Card className="bg-[#151719] border-[#2A2D30]">
                                        <CardHeader>
                                            <CardTitle className="text-white">What if I have a problem with a part?</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-[#C0C4C7]">
                                            We stand behind all our products. If there's an issue with a defective part, we'll replace it free of
                                            charge within the warranty period. Contact our support team immediately if you experience problems.
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 border-t border-[#2A2D30] bg-[#151719]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Your Parts?</h2>
                            <p className="text-[#C0C4C7] mb-8">
                                Contact us today for availability, pricing, and expert installation services.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-[#0FB4FF] text-[#0D0F11] hover:bg-[#0FB4FF]/90 font-semibold">
                                    Request a Quote
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-[#3a3d40] text-white hover:bg-[#2A2D30]"
                                    asChild
                                >
                                    <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call Us Now
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppSticky />
        </div>
    )
}
