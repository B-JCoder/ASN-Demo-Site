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
  const [visibleCount, setVisibleCount] = useState<number>(6); // show first 6

  const allCars = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    name: `Car ${i + 1}`,
    image: `/images/cars/car-${i + 1}.jpg`,
  }));

  const visibleCars = allCars.slice(0, visibleCount);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle "See More" button click
  // This will increase the number of visible cars by 6 each time it's clicked

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

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
        <div className="absolute inset-0 bg-black/20 "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left hero-text-animate">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Convenient Auto Rentals
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Comfort, flexibility, and affordability drive with ease.
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
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">No Credit Card Required </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Rent a car with us, and you do not have to go through a credit check. You may present a form of ID and a payment option of your choice, so any motorist is free to use our services.


              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Set Prices</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Be at ease with our pricing model as you enjoy each service at an affordable price with no surprises. You will not be charged anything on top of what is on display.
              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Car className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Wide Selection</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Now you can choose any of our economy, SUV, or even luxurious cars and make your journey as enjoyable as you always wanted.


              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Flexible Rental Schedule</h3>
              <p className="text-gray-300 text-sm md:text-base">
                You can rent a car on a daily, weekly, or monthly basis and even personalize your needs to go above and beyond your expectations.
              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section md:col-span-2 lg:col-span-1">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Booking in Minutes</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Rent a car in 3 easy steps: choose your car, make a payment, and your journey begins.
              </p>
            </div>
            <div className="bg-gray-700 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 fade-in-section md:col-span-2 lg:col-span-1">
              <div className="bg-accent-orange w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
                <Phone className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Unlimited Assistance</h3>
              <p className="text-gray-300 text-sm md:text-base">
                We are always ready to help you 24/7 with any issues related to bookings, inquiries, or urgent matters.
              </p>
            </div>
          </div>
        </div>
      </section>

  {/* Our Fleet */}
      <section id="cars" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-white mb-4">Our Fleet</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our well-maintained vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCars.map((car) => (
              <div
                key={car.id}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-105 duration-300"
              >
                <div className="relative h-48 w-full bg-black">
                  <Image
                    src={car.image}
                    alt={`Image of ${car.name}`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-4">
                
                  <button
                    onClick={() => handleGetQuote(car.name)}
                    className="w-full bg-[#FC9510] hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300 hover:scale-105"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < allCars.length && (
            <div className="mt-10 text-center">
              <button
                onClick={handleSeeMore}
                className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg transition hover:scale-105"
              >
                See More
              </button>
            </div>
          )}
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
