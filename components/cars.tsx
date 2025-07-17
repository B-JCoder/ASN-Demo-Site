"use client"

import { Button } from "@/components/ui/button"
import { Car, Truck, Users } from "lucide-react"

interface CarCardProps {
  name: string
  category: string
  onGetQuote?: () => void
}

export default function CarCard({ name, category, onGetQuote }: CarCardProps) {
  // Function to get the appropriate icon based on category
  const getVehicleIcon = () => {
    switch (category.toLowerCase()) {
      case "van":
        return <Truck className="h-16 w-16 text-gray-400" />
      case "suv":
        return <Users className="h-16 w-16 text-gray-400" />
      case "sedan":
      default:
        return <Car className="h-16 w-16 text-gray-400" />
    }
  }

  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section">
      {/* Car Icon Section - Fixed to always show */}
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
        {getVehicleIcon()}
        <div className="absolute top-4 left-4 bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">{name}</h3>

        {/* Get Quote Button */}
        <Button
          onClick={onGetQuote}
          className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Get a Quote
        </Button>
      </div>
    </div>
  )
}
        