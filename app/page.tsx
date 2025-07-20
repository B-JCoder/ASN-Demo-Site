"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, DollarSign, Clock, Car, Phone, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import BookingForm from "@/components/booking-form"
import CarCard from "@/components/cars"
import WhatsAppButton from "@/components/whatsapp-button"
import Footer from "@/components/footer"


export default function HomePage() {
  // State to manage selected vehicle
  const [selectedVehicle, setSelectedVehicle] = useState<string>("")

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

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

  

  return (
    <div className="min-h-screen bg-primary-dark">
      <Navbar />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden hero-animate"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FC9510] to-[#212121]"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left hero-text-animate">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Convenient Auto Rentals
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Comfort, flexibility, and affordability—drive with ease.
              </p>
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Book Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
            <div className="relative lg:scale-110">
              <Image
                src="/images/luxury-cars-banner.jpg"
                alt="Luxury Cars"
                width={700}
                height={500}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 fade-in-section">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">Why Rent From Us?</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference with our customer-first approach to car rentals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">No Credit Check</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Credit card optional. We make car rental accessible to everyone.
              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Affordable Rates</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Transparent pricing with no hidden fees. What you see is what you pay.
              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Car className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Wide Selection</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Many vehicles for different needs, from economy to luxury cars.
              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Flexible Terms</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Rent by day, week, or month. Choose what works best for you.
              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section md:col-span-2 lg:col-span-1">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Easy Process</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Simple 3-step process: Choose your car, make payment, and drive away.
              </p>
            </div>
          </div>
        </div>
      </section>

     
         


      {/* Discount Offers Section */}
      <section className="py-12 bg-gradient-to-r from-[#FC9510] to-[#FF6B35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Special Offers</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">10%</div>
                <div className="text-xl font-semibold text-white mb-2">Weekly Discount</div>
                <p className="text-white/90">Book a vehicle for 1 week and save 10% on your total rental cost</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">15%</div>
                <div className="text-xl font-semibold text-white mb-2">Monthly Discount</div>
                <p className="text-white/90">Book a vehicle for 1 month and save 15% on your total rental cost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 md:py-20 bg-gray-900 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-section">
            <BookingForm selectedVehicle={selectedVehicle} />
          </div>
        </div>
      </section>

      {/* Footer */}
   <Footer />

      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}
