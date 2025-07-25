// "use client"

// import { useEffect, useState, useMemo } from "react"
// import { ArrowRight, Car, Truck, Users } from "lucide-react"
// import Image from "next/image"
// import Navbar from "@/components/navbar"
// import Footer from "@/components/footer"
// import BookingForm from "@/components/booking-form"
// import WhatsAppButton from "@/components/whatsapp-button"
// import VehicleImage from "@/components/VehicleImage"

// const VEHICLE_TYPES = ["All", "Sedan", "SUV", "Van"] as const

// export default function HomePage() {
//   const [selectedVehicle, setSelectedVehicle] = useState<string>("")
//   const [filter, setFilter] = useState<typeof VEHICLE_TYPES[number]>("All")

//   const allCars = [
//     { id: 1, name: "Honda Accord", category: "Sedan" },
//     { id: 2, name: "Honda Civic", category: "Sedan" },
//     { id: 3, name: "Honda HR-V", category: "Sedan" },
//     { id: 4, name: "Toyota Camry", category: "Sedan" },
//     { id: 5, name: "Toyota Prius", category: "Sedan" },
//     { id: 5, name: "Toyota Corolla", category: "Sedan" },
//     { id: 6, name: "Hyundai Elantra", category: "Sedan" },
//     { id: 7, name: "Toyota RAV4", category: "SUV" },
//     { id: 8, name: "Tesla Model Y", category: "SUV" },
//     { id: 9, name: "Honda CR-V", category: "SUV" },
//     { id: 10, name: "Ford Transit Custom", category: "Van" },
//     { id: 11, name: "Ford Transit", category: "Van" },
//     { id: 12, name: "Mercedes-Benz Sprinter", category: "Van" },  
//   ]

//   const filteredCars = useMemo(() => {
//     return filter === "All"
//       ? allCars
//       : allCars.filter((car) => car.category === filter)
//   }, [filter])

//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id)
//     if (el) el.scrollIntoView({ behavior: "smooth" })
//   }

//   const handleGetQuote = (carName: string) => {
//     setSelectedVehicle(carName)
//     scrollToSection("booking")
//   }

//   const renderCarCard = (car: (typeof allCars)[number]) => {
//     const Icon =
//       car.category === "Van" ? Truck : car.category === "SUV" ? Users : Car

//     return (
//       <div
//         key={car.id}
//         className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
//       >
//         <div className="relative h-48 bg-black flex items-center justify-center">
//           <VehicleImage name={car.name} />
//           <div className="absolute top-4 left-4 bg-[#FC9510] text-white px-3 py-1 rounded-full text-sm font-medium">
//             {car.category}
//           </div>
//         </div>
//         <div className="p-6">
//           <h3 className="text-xl font-bold text-white mb-4">{car.name}</h3>
//           <button
//             onClick={() => handleGetQuote(car.name)}
//             className="w-full bg-[#FC9510] hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105"
//           >
//             Get a Quote
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-gray-900 text-white">
//       <Navbar />
//       <WhatsAppButton />

//       <section className="relative h-screen w-full overflow-hidden text-white">
//         <Image
//           src="/images/luxury-cars-banner.jpg"
//           alt="Luxury Car"
//           fill
//           className="object-cover object-center z-0"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10"></div>
//         <div className="relative z-20 h-full flex items-center justify-center px-6">
//           <div className="max-w-4xl text-center space-y-8">
//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
//               Unleash the <span className="text-[#FC9510]">Power</span> of Prestige
//             </h1>
//             <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-xl">
//               Experience the pinnacle of comfort and performance with our exclusive selection of luxury cars.
//             </p>
//             <button
//               onClick={() => scrollToSection("cars")}
//               className="inline-flex items-center gap-2 bg-[#FC9510] hover:bg-orange-400 text-black font-semibold px-7 py-3 rounded-full text-lg transition shadow-lg hover:scale-105"
//             >
//               Explore Our Cars <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       <section id="cars" className="py-20 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-6">Our Fleet</h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Choose from our diverse selection of well-maintained vehicles.
//             </p>
//           </div>

//           <div className="flex justify-center gap-4 mb-10 flex-wrap">
//             {VEHICLE_TYPES.map((type) => (
//               <button
//                 key={type}
//                 onClick={() => setFilter(type)}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   filter === type
//                     ? "bg-[#FC9510] text-white shadow-lg scale-105"
//                     : "bg-gray-700 hover:bg-gray-600 text-white hover:scale-105"
//                 }`}
//               >
//                 {type} ({
//                   type === "All"
//                     ? allCars.length
//                     : allCars.filter((car) => car.category === type).length
//                 })
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCars.map(renderCarCard)}
//           </div>

//           {filteredCars.length === 0 && (
//             <div className="text-center py-12">
//               <Car className="h-16 w-16 text-gray-500 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-white mb-2">Currently Unavailable</h3>
//               <p className="text-gray-400">Try selecting a different category.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       <section id="booking" className="py-16 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4">
//           <BookingForm selectedVehicle={selectedVehicle} />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BookingForm from "@/components/booking-form";
import WhatsAppButton from "@/components/whatsapp-button";

export default function HomePage() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
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

  const handleGetQuote = (carName: string) => {
    setSelectedVehicle(carName);
    scrollToSection("booking");
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden text-whit">
        <Image
          src="/images/luxury-cars-banner.jpg"
          alt="Luxury Car"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0  bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center space-y-8">
            
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tight drop-shadow-6xl"> 
  Unleash the power of <span className="text-[#FC9510]">reliable vehicles</span> 
</h1>
 
            <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-xl">
              Experience the pinnacle of comfort and performance with our selection of cars
            </p>
            <button
              onClick={() => scrollToSection("cars")}
              className="inline-flex items-center gap-2 bg-[#FC9510] hover:bg-orange-400 text-black font-semibold px-7 py-3 rounded-full text-lg transition shadow-lg hover:scale-105"
            >
              Explore Our Cars <ArrowRight className="h-5 w-5" />
            </button>
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

      {/* Booking Form Section */}
      <section id="booking" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <BookingForm selectedVehicle={selectedVehicle} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
