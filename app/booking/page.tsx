"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, MapPin, Clock, Percent } from "lucide-react"
import Navbar from "@/components/navbar"
import BookingForm from "@/components/booking-form"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function BookingPage() {
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

  return (
    <div className="min-h-screen bg-primary-dark">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pb-16 bg-gradient-to-br from-[#FC9510] to-[#212121] hero-animate">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FC9510] to-[#212121]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center hero-text-animate">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-orange-200 hover:scale-105 transition-all duration-300 mb-6 md:mb-8"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="text-sm md:text-base">Back to Home</span>
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Plan Your Drive Now
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto">
              Stress-Free Rentals Start Here
            </p>
          </div>
        </div>
      </section>

      {/* Rental Features Section */}
      <section className="py-12 md:py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 fade-in-section">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Rental Features & Benefits
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our flexible rental options
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="text-center fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Percent className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Weekly/Monthly Discounts</h3>
              <p className="text-sm md:text-base text-gray-300">10% off for weekly rentals and special monthly rates</p>
            </div>

            <div className="text-center fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Unlimited Mileage</h3>
              <p className="text-sm md:text-base text-gray-300">
                Drive anywhere in Georgia without mileage restrictions
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Flexible Pickup</h3>
              <p className="text-sm md:text-base text-gray-300">
                Convenient pickup and drop-off options to fit your schedule
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <CreditCard className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">No Advance Payment</h3>
              <p className="text-sm md:text-base text-gray-300">Pay at pickup location - no online payment required</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-700 rounded-2xl p-6 md:p-8 fade-in-section">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
              Payment Methods Accepted
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="bg-accent-orange px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300">
                <span className="font-semibold text-white text-sm md:text-base">CashApp</span>
              </div>
              <div className="bg-accent-orange px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300">
                <span className="font-semibold text-white text-sm md:text-base">Apple Pay</span>
              </div>
              <div className="bg-accent-orange px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300">
                <span className="font-semibold text-white text-sm md:text-base">Zelle</span>
              </div>
              <div className="bg-accent-orange px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300">
                <span className="font-semibold text-white text-sm md:text-base">Google Pay</span>
              </div>
              <div className="bg-accent-orange px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300">
                <span className="font-semibold text-white text-sm md:text-base">Cash</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 md:py-16 bg-gray-900 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-section">
            <BookingForm title="Complete Your Booking" showFeatures={true} />
            

          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-16 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 fade-in-section">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">How It Works</h2>
            <p className="text-base md:text-lg text-gray-300">Simple 3-step process to get you on the road</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-xl md:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Choose Your Car</h3>
              <p className="text-sm md:text-base text-gray-300">
                Select from our wide range of vehicles that suit your needs and budget.
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-xl md:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Book & Confirm</h3>
              <p className="text-sm md:text-base text-gray-300">
                Fill out our simple form and we'll confirm your booking via call or text.
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-xl md:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Pick Up & Drive</h3>
              <p className="text-sm md:text-base text-gray-300">
                Come to our location, complete payment, and drive away with your rental.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  )
}