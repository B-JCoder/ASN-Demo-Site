"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Calendar, MapPin, Car, User, Mail, Phone, CheckCircle } from "lucide-react"

interface BookingFormProps {
  title?: string
  showFeatures?: boolean
  selectedVehicle?: string
}

export default function BookingForm({
  title = "Book Your Ride Now",
  showFeatures = false,
  selectedVehicle,
}: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
    vehicleType: "",
    selectedCar: "",
  })

  // Location suggestions for autocomplete
  const locationSuggestions = [
    "Powder Springs, GA",
    "Dallas, GA",
    "Atlanta, GA",
    "Hiram, GA",
    "Marietta, GA",
    "Kennesaw, GA",
    "Acworth, GA",
    "Douglasville, GA",
  ]

  // Update selected car when prop changes
  useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({
        ...prev,
        selectedCar: selectedVehicle,
      }))
    }
  }, [selectedVehicle])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Booking request submitted! We'll confirm via call/text.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center mb-6 md:mb-8">Fill out the form below to request your rental</p>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Selected Car Field - Show only if a car is selected */}
        {formData.selectedCar && (
          <div className="bg-accent-orange/10 border border-accent-orange rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent-orange" />
              <span className="text-sm font-medium text-gray-700">Selected Vehicle:</span>
              <span className="font-bold text-accent-orange">{formData.selectedCar}</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all text-gray-900 text-sm md:text-base"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all text-gray-900 text-sm md:text-base"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all text-gray-900 text-sm md:text-base"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
              Vehicle Type
            </label>
            <div className="relative">
              <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all appearance-none bg-white text-gray-900 text-sm md:text-base"
                required
              >
                <option value="">Select Vehicle Type</option>
                <option value="economy">Economy Car</option>
                <option value="compact">Compact Car</option>
                <option value="midsize">Midsize Car</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury Car</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">
              Pickup Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                placeholder="Enter pickup location"
                value={formData.pickupLocation}
                onChange={handleChange}
                list="pickup-locations"
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all text-gray-900 placeholder-gray-500 text-sm md:text-base"
                required
              />
              <datalist id="pickup-locations">
                {locationSuggestions.map((location, index) => (
                  <option key={index} value={location} />
                ))}
              </datalist>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700">
              Drop-off Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="dropoffLocation"
                name="dropoffLocation"
                placeholder="Enter drop-off location"
                value={formData.dropoffLocation}
                onChange={handleChange}
                list="dropoff-locations"
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all text-gray-900 placeholder-gray-500 text-sm md:text-base"
                required
              />
              <datalist id="dropoff-locations">
                {locationSuggestions.map((location, index) => (
                  <option key={index} value={location} />
                ))}
              </datalist>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">
              Pickup Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all text-gray-900 text-sm md:text-base"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="dropoffDate" className="block text-sm font-medium text-gray-700">
              Drop-off Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                id="dropoffDate"
                name="dropoffDate"
                value={formData.dropoffDate}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all text-gray-900 text-sm md:text-base"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-accent-orange text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Submit Booking Request
        </button>
      </form>

      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-50 rounded-lg">
        <p className="text-xs md:text-sm text-gray-600 text-center">
          We'll confirm via call/text. No online payment required.
        </p>
      </div>

      {showFeatures && (
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
          <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Rental Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
            <div>• Weekly/Monthly Discounts: 10% off for weekly</div>
            <div>• Mileage: Unlimited in Georgia</div>
            <div>• Pickup: Flexible pickup/drop-off options</div>
            <div>• Payment: No advance payments, pay at location</div>
          </div>

          <div className="mt-4 md:mt-6">
            <h5 className="font-semibold text-gray-900 mb-2">Payment Methods Accepted:</h5>
            <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-600">
              <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">CashApp</span>
              <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">Apple Pay</span>
              <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">Zelle</span>
              <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">Google Pay</span>
              <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">Cash</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
