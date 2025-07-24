import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin , Mail} from 'lucide-react'






const Footer = () => {
     const scrollToBooking = () => {
    const element = document.getElementById("booking")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
   <footer className="bg-black text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Image src="/images/asn-logo.jpg" alt="ASN Car Rentals" width={40} height={40} className="rounded-lg" />
                  <span className="text-lg md:text-xl font-bold">ASN Car Rentals</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  Your trusted partner for convenient and affordable car rentals in Georgia.
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-accent-orange" />
                    <a
                      href="tel:404-907-3636"
                      className="hover:text-accent-orange transition-colors text-sm md:text-base"
                    >
                      404-907-3636
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500" />

                  


                    <span className="text-gray-400 text-sm md:text-base">admin@asnrentals.com</span>

                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-accent-orange" />
                    <span className="text-gray-400 text-sm md:text-base">3587 E Paulding Dr., Powder Springs, GA</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/" className="block hover:text-accent-orange transition-colors text-sm md:text-base">
                    Home
                  </Link>
                  <button
                    onClick={scrollToBooking}
                    className="block hover:text-accent-orange hover:scale-105 transition-all duration-300 text-left text-sm md:text-base"
                  >
                    Book Now
                  </button>
                  <button
                    onClick={scrollToBooking}
                    className="block hover:text-accent-orange transition-colors text-left text-sm md:text-base"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
              <p className="text-gray-400 text-xs md:text-sm">© 2024 ASN Car Rentals. All rights reserved.</p>
            </div>
          </div>
        </footer>
  )
}

export default Footer