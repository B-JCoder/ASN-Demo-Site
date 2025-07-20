"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Car, Truck, Users, Mail, Phone, User, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import CarCard from "@/components/cars"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CarPage() {
  const [filter, setFilter] = useState<'All' | 'Sedan' | 'SUV' | 'Van'>('All')
  const [selectedVehicle, setSelectedVehicle] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const VEHICLE_TYPES = ['All', 'Sedan', 'SUV', 'Van'] as const

  // Cars data
  const cars = [
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

  const filteredCars = filter === "All" ? cars : cars.filter((car) => car.category === filter)

  const handleGetQuote = (carName: string) => {
    setSelectedVehicle(carName)
    const element = document.getElementById("contact-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      vehicle: formData.get("vehicle") || selectedVehicle,
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/car-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        e.currentTarget.reset()
        setSelectedVehicle("")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary-dark">
      <Navbar />
      <WhatsAppButton />

      {/* Header Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-[#FC9510] to-[#212121]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Our Fleet</h1>
          </div>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Choose from our diverse selection of well-maintained vehicles. Find the perfect car for your needs and get in touch with us.
          </p>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-16 md:py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-10">
            {VEHICLE_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-full font-medium text-white transition-all duration-300 ${
                  filter === type
                    ? 'bg-accent-orange shadow-lg scale-105'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Car Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                name={car.name}
                category={car.category}
                onGetQuote={() => handleGetQuote(car.name)}
              />
            ))}
          </div>

          {/* Show message when no cars match filter */}
          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <Car className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No vehicles found</h3>
              <p className="text-gray-400">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Interested in one of our vehicles? Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent-orange"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent-orange"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent-orange"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicle" className="text-white flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Interested Vehicle
                  </Label>
                  <Input
                    id="vehicle"
                    name="vehicle"
                    type="text"
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent-orange"
                    placeholder="Which vehicle interests you?"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent-orange resize-none"
                  placeholder="Tell us more about your rental needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-center">
                  <p className="text-green-400 font-medium">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-center">
                  <p className="text-red-400 font-medium">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}