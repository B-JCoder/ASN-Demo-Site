"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Phone, Mail, Car, MapPin, Calendar } from "lucide-react"

interface BookingFormProps {
  selectedVehicle?: string;
   title?: string;
  showFeatures?: boolean;
}

export default function BookingForm({ selectedVehicle = "" }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  const formData = new FormData(e.currentTarget);

  // Validate license file
  

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData, // we send FormData instead of JSON
    });

    const result = await response.json();

    if (result.success) {
      setSubmitStatus("success");
      e.currentTarget.reset();
    } else {
      setSubmitStatus("error");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Ride Now</h2>
          <p className="text-gray-600">Fill out the form below to request your rental</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-700" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="pl-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-700" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="pl-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-700" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="pl-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicle" className="text-gray-700 font-medium">
                Vehicle Type
              </Label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900 z-10" />
                <Select name="vehicle" defaultValue={selectedVehicle} required>
                  <SelectTrigger className="pl-10 text-gray-950 border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                    <SelectValue placeholder="Select a vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem  value="Honda Accord">Honda Accord</SelectItem>
                    <SelectItem value="Honda Civic">Honda Civic</SelectItem>
                    <SelectItem value="Honda HR-V">Honda HR-V</SelectItem>
                    <SelectItem value="Toyota Camry">Toyota Camry</SelectItem>
                    <SelectItem value="Toyota Prius">Toyota Prius</SelectItem>
                    <SelectItem value="Hyundai Elantra">Hyundai Elantra</SelectItem>
                    <SelectItem value="Toyota RAV4">Toyota RAV4</SelectItem>
                    <SelectItem value="Tesla Model Y">Tesla Model Y</SelectItem>
                    <SelectItem value="Honda CR-V">Honda CR-V</SelectItem>
                    <SelectItem value="Ford Transit Custom">Ford Transit Custom</SelectItem>
                    <SelectItem value="Ford Transit">Ford Transit</SelectItem>
                    <SelectItem value="Mercedes-Benz Sprinter">Mercedes-Benz Sprinter</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pickupLocation" className="text-gray-700 font-medium">
                Pickup Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900" />
                <Input
                  id="pickupLocation"
                  name="pickupLocation"
                  type="text"
                  required
                  className="pl-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-gray-700 "
                  placeholder="Enter pickup location"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dropoffLocation" className="text-gray-700 font-medium">
                Drop-off Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900" />
                <Input
                  id="dropoffLocation"
                  name="dropoffLocation"
                  type="text"
                  required
                  className="pl-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-gray-700"
                  placeholder="Enter drop-off location"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pickupDate" className="text-gray-700 font-medium">
                Pickup Date
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-700" />
                <Input
                  id="pickupDate"
                  name="pickupDate"
                  type="date"
                  required
                  className="pl-10 border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-gray-900" 
                  placeholder="mm/dd/yyyy"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dropoffDate" className="text-gray-700 font-medium">
                Drop-off Date
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-900" />
                <Input
                  id="dropoffDate"
                  name="dropoffDate"
                  type="date"
                  required
                  className="pl-10 border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="mm/dd/yyyy"
                />
              </div>
            </div>
          </div>
             {/* Upload License */}
      <div className="flex flex-col items-center mb-4">
        <label
          htmlFor="license"
          className="text-[#FC9510] font-semibold text-sm mb-2"
        >
          Upload Your License
        </label>
        <input
          type="file"
          id="license"
          
          required
          name="license"
          
          className="block text-sm text-gray-300
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-[#FC9510] file:text-white
                     hover:file:bg-[#e48306]
                     cursor-pointer"
        />
    
      </div>

          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg">
              Thank you! Your booking request has been submitted successfully. We'll contact you shortly.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg">
              Sorry, there was an error submitting your request. Please try again or call us directly.
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? "Submitting..." : "Submit Booking Request"}
          </Button>

          <p className="text-center text-gray-500 text-sm">We'll confirm via call/text. No online payment required.</p>
        </form>
      </div>
    </div>
  )
}
