"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/asn-logo.jpg" alt="ASN Car Rentals" width={40} height={40} className="rounded-lg" />
            <span className="text-white font-bold text-xl">ASN Car Rentals</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-accent-orange hover:scale-105 transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-accent-orange hover:scale-105 transition-all duration-300"
            >
              About
            </button>
            <Link
              href="/car"
              className="text-white hover:text-accent-orange hover:scale-105 transition-all duration-300"
            >
              Cars
            </Link>
            <Link
              href="/booking"
              className="bg-accent-orange text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Book Now
            </Link>
            <a
              href="tel:404-907-3636"
              className="flex items-center text-white hover:text-accent-orange hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              404-907-3636
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-white hover:text-accent-orange hover:scale-105 transition-all duration-300 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-white hover:text-accent-orange hover:scale-105 transition-all duration-300 w-full text-left"
              >
                About
              </button>
              <Link
                href="/car"
                className="block px-3 py-2 text-white hover:text-accent-orange hover:scale-105 transition-all duration-300 w-full text-left"
                onClick={() => setIsOpen(false)}
              >
                Cars
              </Link>
              <Link
                href="/booking"
                className="block px-3 py-2 bg-accent-orange text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center"
              >
                Book Now
              </Link>
              <a
                href="tel:404-907-3636"
                className="flex items-center px-3 py-2 text-white hover:text-accent-orange hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                404-907-3636
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
