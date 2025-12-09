export interface Car {
  id: number
  make: string
  model: string
  category: string
  mileage: number
  transmission: "Auto" | "Manual"
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric"
  price: number | null
  location: string
  images: string[]
  features: string[]
  description: string
  bodyType: string
  engineSize: string
  color: string
  condition: "Excellent" | "Good" | "Fair"
  inspectionReport?: string
  highlight?: string
}

export const inventory: Car[] = [
  {
    id: 100,
    make: "Lexus",
    model: "LC 500",
    category: "Luxury Sports",
    mileage: 18000,
    transmission: "Auto",
    fuel: "Petrol",
    price: null,
    location: "Langata, Nairobi",
    images: ["/cars/lexus-lc500-front.jpg", "/cars/lexus-lc500-side.jpg"],
    features: [
      "V8 Engine",
      "Mark Levinson Audio",
      "Leather Interior",
      "Adaptive Suspension",
      "Carbon Fiber Roof",
      "Sport+ Mode",
    ],
    description:
      "Breathtaking Lexus LC 500 luxury grand tourer. This flagship coupe combines stunning design with exhilarating V8 performance. Rare opportunity to own one of Lexus's most desirable sports cars.",
    bodyType: "Coupe",
    engineSize: "5.0L V8",
    color: "Ultra White",
    condition: "Excellent",
    highlight: "Flagship Luxury",
  },
  {
    id: 101,
    make: "Mitsubishi",
    model: "ASX",
    category: "Compact SUV",
    mileage: 85000,
    transmission: "Auto",
    fuel: "Petrol",
    price: null,
    location: "Langata, Nairobi",
    images: ["/cars/mitsubishi-asx-black.jpeg", "/cars/car-8.jpeg"],
    features: ["Keyless Entry", "Reverse Camera", "Alloy Wheels", "Touchscreen Display", "Climate Control", "ABS"],
    description:
      "Well-maintained Mitsubishi ASX compact crossover in excellent condition. Perfect blend of city practicality and weekend adventure capability. Full service history available.",
    bodyType: "Crossover SUV",
    engineSize: "2.0L MIVEC",
    color: "Pearl Black",
    condition: "Excellent",
    highlight: "Low Mileage",
  },
  {
    id: 102,
    make: "Mazda",
    model: "CX-5",
    category: "Premium SUV",
    mileage: 45000,
    transmission: "Auto",
    fuel: "Petrol",
    price: null,
    location: "Langata, Nairobi",
    images: [
      "/cars/mazda-cx5-front.jpeg",
      "/cars/mazda-cx5-front-2.jpeg",
      "/cars/mazda-cx5-rear.jpeg",
      "/cars/mazda-cx5-interior-1.jpeg",
      "/cars/mazda-cx5-interior-2.jpeg",
    ],
    features: ["Leather Seats", "Sunroof", "BOSE Audio", "360 Camera", "Lane Assist", "Adaptive Cruise Control"],
    description:
      "Stunning Mazda CX-5 with premium cream leather interior and advanced safety features. KODO design language with exceptional driving dynamics. One owner, full service history.",
    bodyType: "Crossover SUV",
    engineSize: "2.5L SkyActiv-G",
    color: "Deep Crystal Blue",
    condition: "Excellent",
    highlight: "Premium Interior",
  },
  {
    id: 103,
    make: "Peugeot",
    model: "3008",
    category: "Premium SUV",
    mileage: 38000,
    transmission: "Auto",
    fuel: "Petrol",
    price: null,
    location: "Langata, Nairobi",
    images: [
      "/cars/peugeot-3008-front.jpeg",
      "/cars/peugeot-3008-angle.jpg",
      "/cars/peugeot-3008-side.jpg",
      "/cars/peugeot-3008-rear.jpeg",
      "/cars/peugeot-3008-rear-2.jpeg",
    ],
    features: [
      "i-Cockpit",
      "Panoramic Roof",
      "Grip Control",
      "Digital Dashboard",
      "Apple CarPlay",
      "Hands-Free Tailgate",
    ],
    description:
      "Award-winning Peugeot 3008 with futuristic i-Cockpit interior design. French elegance meets cutting-edge technology. Low mileage with full service history.",
    bodyType: "Crossover SUV",
    engineSize: "1.6L THP",
    color: "Pearl White",
    condition: "Excellent",
    highlight: "Award Winner",
  },
  {
    id: 104,
    make: "Mitsubishi",
    model: "Prado",
    category: "Premium SUV",
    mileage: 95000,
    transmission: "Auto",
    fuel: "Petrol",
    price: 4250000,
    location: "Langata, Nairobi",
    images: ["/cars/car-3.jpeg", "/cars/car-4.jpeg"],
    features: ["7 Seater", "Sunroof", "4WD", "Leather Seats", "Reverse Camera", "Alloy Wheels"],
    description:
      "Legendary Mitsubishi - the ultimate SUV for Kenya's diverse terrain. 7 seater with sunroof and full 4WD capability. Perfect for family adventures.",
    bodyType: "SUV",
    engineSize: "2700cc Petrol",
    color: "Pearl White",
    condition: "Excellent",
    highlight: "7 Seater",
  },
  {
    id: 105,
    make: "Suzuki",
    model: "Maruti",
    category: "Compact",
    mileage: 45000,
    transmission: "Manual",
    fuel: "Petrol",
    price: 850000,
    location: "Langata, Nairobi",
    images: ["/cars/car-5.jpeg", "/cars/car-6.jpeg"],
    features: ["Fuel Efficient", "Easy to Maintain", "Compact Size", "Manual Gearbox", "Reliable Engine"],
    description:
      "Reliable Suzuki Maruti with excellent fuel economy. Perfect first car or city runabout. Manual gearbox with proven reliability.",
    bodyType: "Hatchback",
    engineSize: "800cc",
    color: "White",
    condition: "Good",
    highlight: "Fuel Efficient",
  },
  {
    id: 106,
    make: "Mitsubishi",
    model: "Allion",
    category: "Sedan",
    mileage: 78000,
    transmission: "Auto",
    price: null,
    location: "Langata, Nairobi",
    images: ["/cars/car-7.jpeg", "/cars/car-8.jpeg"],
    features: ["Automatic Transmission", "Air Conditioning", "Power Windows", "Central Locking", "CD Player", "ABS"],
    description:
      "Popular Mitsubishi Allion sedan with automatic transmission. Known for reliability and comfort. Perfect for daily commuting.",
    bodyType: "Sedan",
    engineSize: "1500cc",
    color: "Silver",
    condition: "Excellent",
    highlight: "Reliable",
  },
  {
    id: 107,
    make: "Mazda",
    model: "cx5",
    category: "Compact",
    mileage: 52000,
    transmission: "Auto",
    fuel: "Petrol",
    price: 1250000,
    location: "Langata, Nairobi",
    images: ["/cars/car-9.jpeg", "/cars/mazda-cx5-rear.jpeg"],
    features: ["SkyActiv Technology", "Fuel Efficient", "Compact Design", "Bluetooth", "USB Port", "Keyless Entry"],
    description:
      "Stylish Mazda cx5 with SkyActiv technology for excellent fuel efficiency. Compact yet spacious interior. Perfect for urban driving.",
    bodyType: "Hatchback",
    engineSize: "1300cc Petrol",
    color: "Blue",
    condition: "Excellent",
    highlight: "Eco Friendly",
  },
]

export function formatPrice(price: number | null): string {
  if (price === null) {
    return "Inquire for Price"
  }
  return `KES ${price.toLocaleString()}`
}

export function formatMileage(mileage: number): string {
  return `${mileage.toLocaleString()} km`
}

export function getCarDisplayName(car: Car): string {
  return `${car.make} ${car.model}`
}
