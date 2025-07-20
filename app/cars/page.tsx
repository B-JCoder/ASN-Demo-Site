"use client"
import { useEffect, useState, useMemo } from "react"
import { ArrowRight, Car, Phone, MapPin, Truck, Users } from "lucide-react"

// Define types
const VEHICLE_TYPES = ["All", "Sedan", "SUV", "Van"] as const
type VehicleType = (typeof VEHICLE_TYPES)[number]

interface CarData {
  id: number
  name: string
  category: string
}

export default function HomePage() {
  // State to manage selected vehicle
  const [selectedVehicle, setSelectedVehicle] = useState<string>("")
  const [filter, setFilter] = useState<VehicleType>("All")

  // Cars data
  const allCars: CarData[] = [
    // Sedan Cars
    { id: 1, name: "Honda Accord", category: "Sedan" },
    { id: 2, name: "Honda Civic", category: "Sedan" },
    { id: 3, name: "Honda HR-V", category: "Sedan" },
    { id: 4, name: "Toyota Camry", category: "Sedan" },
    { id: 5, name: "Toyota Prius", category: "Sedan" },
    { id: 6, name: "Hyundai Elantra", category: "Sedan" },

    // SUV Cars
    { id: 7, name: "Toyota RAV4", category: "SUV" },
    { id: 8, name: "Tesla Model Y", category: "SUV" },
    { id: 9, name: "Honda CR-V", category: "SUV" },

    // Van Cars
    { id: 10, name: "Ford Transit Custom", category: "Van" },
    { id: 11, name: "Ford Transit", category: "Van" },
    { id: 12, name: "Mercedes-Benz Sprinter", category: "Van" },
  ]

  // Fixed filtering logic
  const filteredCars = useMemo(() => {
    console.log(`🔍 Current filter: ${filter}`)
    console.log(`📊 Total cars available: ${allCars.length}`)

    if (filter === "All") {
      console.log(`✅ Showing all ${allCars.length} cars`)
      return allCars
    }

    const filtered = allCars.filter((car) => car.category === filter)
    console.log(`✅ Filtered ${filter} cars: ${filtered.length}`)
    return filtered
  }, [filter, allCars])

  // Debug effect
  useEffect(() => {
    console.log(`🔄 Filter changed to: ${filter}`)
    console.log(`📈 Filtered cars count: ${filteredCars.length}`)
  }, [filter, filteredCars])

  const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleGetQuote = (carName: string) => {
    setSelectedVehicle(carName)
    scrollToBooking()
  }

  // Simple CarCard component using basic HTML
  const renderCarCard = (car: CarData) => {
    const getVehicleIcon = () => {
      const categoryLower = car.category.toLowerCase()
      switch (categoryLower) {
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
      <div
        key={car.id}
        className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
          {getVehicleIcon()}
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {car.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">{car.name}</h3>
          <button
            onClick={() => handleGetQuote(car.name)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Get a Quote
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Simple Navbar */}
      <nav className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white text-lg font-bold">ASN Car Rentals</span>
          </div>
          <div className="space-x-4">
            <a href="#cars" className="text-gray-300 hover:text-white transition-colors">
              Cars
            </a>
            <a href="#booking" className="text-gray-300 hover:text-white transition-colors">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Convenient Auto Rentals</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Comfort, flexibility, and affordability—drive with ease.
            </p>
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Cars Section - SIMPLIFIED */}
      <section id="cars" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our Fleet</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our diverse selection of well-maintained vehicles
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            {VEHICLE_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => {
                  console.log(`🖱️ Button clicked: ${type}`)
                  setFilter(type)
                }}
                className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-300 ${
                  filter === type
                    ? "bg-orange-500 shadow-lg scale-105"
                    : "bg-gray-700 hover:bg-gray-600 hover:scale-105"
                }`}
              >
                {type} ({type === "All" ? allCars.length : allCars.filter((car) => car.category === type).length})
              </button>
            ))}
          </div>

          {/* Car Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => renderCarCard(car))}
          </div>

          {/* No cars message */}
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <Car className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No vehicles found</h3>
              <p className="text-gray-400">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Simple Booking Section */}
      <section id="booking" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Ride Now</h2>
              <p className="text-gray-600">Fill out the form below to request your rental</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Vehicle Type</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-orange-500"
                    defaultValue={selectedVehicle}
                  >
                    <option value="">Select vehicle</option>
                    {allCars.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:scale-105"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-xl font-bold">ASN Car Rentals</span>
              <p className="text-gray-400 mt-4">
                Your trusted partner for convenient and affordable car rentals in Georgia.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-orange-500" />
                  <a href="tel:404-907-3636" className="hover:text-orange-500 transition-colors">
                    404-907-3636
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                  <span className="text-gray-400">3587 E Paulding Dr., Powder Springs, GA</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#cars" className="block hover:text-orange-500 transition-colors">
                  Cars
                </a>
                <a href="#booking" className="block hover:text-orange-500 transition-colors">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 ASN Car Rentals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
